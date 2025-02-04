'use server'
import { signInFormSchema, signUpFormSchema } from "../schema/schema"
import { signIn, signOut } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { hashSync } from "bcrypt-ts-edge"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

// Sign in user with credentials
export const signInWithCredentials = async (prevState: unknown, formData: FormData) => {
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        })
        
        await signIn('credentials', user)
        return {
            success: true,
            message: 'Signed in successfully'
        }
    } catch (error) {
        if (isRedirectError(error)) throw error

        return {
            success: false,
            message: 'Invalid credentials'
        }
    }
}

// Sign out user
export const signOutUser = async () => {
    await signOut()
}

//Sign up user
export const signUpUser = async (prevState: unknown, formData: FormData) => {
    try {
        const user = signUpFormSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        })

        const hashPassword = hashSync(user.password, 10)

        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashPassword,
            }
        })

        await signIn('credentials', {
            email: user.email,
            password: user.password
        })

        return {
            success: true,
            message: 'User registered successfully'
        }
    } catch (error) {
        if (isRedirectError(error)) throw error

        return {
            success: false,
            message: 'User was not registered'
        }
    }
}