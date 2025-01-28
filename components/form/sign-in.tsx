'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { signInDefaultValue } from "@/utils/constanst"
import { useFormStatus } from "react-dom"
// import { useActionState } from "react"
import { Loader2 } from "lucide-react"

// const initialState = {
//     success: false,
//     message: ''
// }

const SignInForm = () => {
    // const [state, action] = useActionState(action, initialState)
    const {pending} = useFormStatus()

  return (
    <form>
        <div className="space-y-6">
            <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    autoComplete="email" 
                    defaultValue={signInDefaultValue.password}
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
                    defaultValue={signInDefaultValue.password}
                />
            </div>
            <div>
                <Button disabled={pending} variant='default' className="w-full">
                    {pending ? <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please wait...
                    </> : <>
                        Sign In
                    </>}
                </Button>
            </div>

            {/* {state && !state.success && (
                <div className="text-center text-destructive">
                    {state.message}
                </div>
            )} */}

            <div className="text-sm text-center text-muted-foreground">
                Dont&apos;t have an account? {' '}
                <Link href='/sign-up' target="_self" className="link">Sign Up</Link>
            </div>
        </div>
    </form>
  )
}
export default SignInForm