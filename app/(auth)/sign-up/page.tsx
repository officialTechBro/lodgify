import SignUpForm from "@/components/form/sign-up"
import { APP_NAME } from "@/utils/constanst"
import Image from "next/image"

const SignUpPage = () => {
  return (
    <div className="max-w-sm md:max-w-3xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 border rounded min-h- ">
        <div className="hidden md:flex">
            <Image 
                src='/images/sample-products/tent-2.jpg'
                alt="login"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center"
            />
        </div>
        <div className="p-8">
            <h1 className="text-center text-xl font-bold font-sans mb-10">{APP_NAME}</h1>
            <SignUpForm />
        </div>   
    </div>
  )
}
export default SignUpPage