import Image from "next/image"
import Link from "next/link"
import { APP_NAME } from "@/utils/constanst"
import Menu from "./menu"


const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href='/' className="flex-start">
                    <Image 
                        src='/images/logo.png' 
                        alt={`${APP_NAME} logo`} 
                        height={38}
                        width={38}
                        priority={true}
                    />
                    <span className="hidden font-bold tect-2xl ml-3 lg:block">{APP_NAME}</span>
                </Link>
            </div>
            <Menu />
        </div>
    </header>
  )
}
export default Header