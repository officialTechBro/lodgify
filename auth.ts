import NextAuth from 'next-auth'
import {PrismaAdapter} from '@auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compareSync } from 'bcrypt-ts-edge'
import type { NextAuthConfig } from 'next-auth'


const prisma = new PrismaClient()

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {type: 'email'},
                password: {type: 'password'},
            },
            async authorize(credentials) {
                if (credentials === null) return null

                // find user in the db
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email as string
                    }
                })

                // check if user exist and pasword matches
                if (user && user.password) {
                    const paswordMatch = compareSync(credentials.password as string, user.password)

                    // check if passowrd is correct then return the user
                    if (paswordMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        }
                    }
                }

                // if user does not exist and password not matched, then return null
                return null
            }
        })
    ],
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({ session, user, trigger, token} :any) {
            // set the user ID from the token
            session.user.id = token.sub

            // if there is an projectUpdate, set the user name
            if (trigger === 'update') {
                session.user.name = user.name
            }

            return session
        }
    }
} satisfies NextAuthConfig


export const {handlers, auth, signIn, signOut} = NextAuth(config)