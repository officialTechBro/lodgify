'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { signUpDefaultValue } from "@/utils/constanst"
import { useFormStatus } from "react-dom"
import { useActionState } from "react"
import { signUpUser } from "@/lib/actions/user.actions"


const defualtState = {
    success: false,
    message: ''
}

const SignUpForm = () => {
    const [state, action] = useActionState(signUpUser, defualtState)
    const SignUpButton = () => {
        const {pending} = useFormStatus()

        return <Button disabled={pending} variant='default' className="w-full">
            {pending ? 'Signing up...' : 'Sign Up'}
        </Button>
    }
  return (
    <form action={action}>
        <div className="space-y-6">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    autoComplete="name" 
                    defaultValue={signUpDefaultValue.name}
                />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    autoComplete="email" 
                    defaultValue={signUpDefaultValue.password}
                />
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    autoComplete="password" 
                    defaultValue={signUpDefaultValue.password}
                />
            </div>
            <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    required 
                    autoComplete="confirmPassword" 
                    defaultValue={signUpDefaultValue.confirmPassword}
                />
            </div>
            <div>
                <SignUpButton />
            </div>

            {state && !state.success && (
                <div className="text-center text-destructive">
                    {state.message}
                </div>
            )}

            <div className="text-sm text-center text-muted-foreground">
                Already have an account? {' '}
                <Link href='/sign-in' target="_self" className="link">Sign In</Link>
            </div>
        </div>
    </form>
  )
}
export default SignUpForm