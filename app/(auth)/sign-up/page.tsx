import FormImage from "@/components/form/form-images"
import SignUpForm from "@/components/form/sign-up"
import { APP_NAME } from "@/utils/constanst"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Sign Up'
}


const SignUpPage = () => {
  return (
    <div className="max-w-sm md:max-w-3xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 border rounded min-h- ">
        <FormImage img="/images/sample-products/tent-2.jpg" />
        <div className="p-8">
            <h1 className="text-center text-xl font-bold font-sans mb-10">{APP_NAME}</h1>
            <SignUpForm />
        </div>   
    </div>
  )
}
export default SignUpPage