import FormImage from "@/components/form/form-images"
import SignInForm from "@/components/form/sign-in"
import { APP_NAME } from "@/utils/constanst"
import { Metadata } from "next"
import { auth } from "@/auth"
import { redirect } from "next/navigation"


export const metadata: Metadata = {
  title: 'Sign In'
}


const SignInPage = async (props: {
  searchParams: Promise<{callbackUrl: string}>
}) => {

  const {callbackUrl} = await props.searchParams
  const session = await auth()

  if (session) redirect(callbackUrl || '/')
 
  return (
    <div className="max-w-sm md:max-w-3xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 border rounded min-h- ">
        <FormImage img="/images/sample-products/tent-2.jpg" />
        <div className="p-8">
            <h1 className="text-center text-xl font-bold font-sans mb-10">{APP_NAME}</h1>
            <SignInForm />
        </div>   
    </div>
  )
}
export default SignInPage