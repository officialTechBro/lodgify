import { APP_NAME } from "@/utils/constanst"

const Footer = () => {
    const currYear = new Date().getFullYear()
  return (
    <footer className="border-t">
        <div className="p-5 flex-center">
             © {currYear} {APP_NAME}
        </div>
    </footer>
  )
}
export default Footer