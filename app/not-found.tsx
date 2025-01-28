'use client'
import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/utils/constanst"
import Image from "next/image"

const NotFoundPage = () => {
  return <div className="flex flex-col items-center justify-center min-h-screen">
    <Image 
        src='/images/logo.png' 
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
    />
    <div className="p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Error 404!!!</h1>
        <p className="text-destructive ">Requested page not found</p>
        <Button className="mt-4 ml-2" variant='outline' onClick={() => (window.location.href = '/')}>
            Back to home
        </Button>
    </div>
  </div>
}
export default NotFoundPage