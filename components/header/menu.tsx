import {EllipsisVertical } from "lucide-react"
import ModeToggle from "./mode-toggle"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import UserButton from "./user-button"

const Menu = () => {
  return <div className="flex justify-end gap-3">
    <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        {/* <Button variant='default' asChild>
            <Link href='/sign-in'>
                <User2 /> Sign in
            </Link>
        </Button> */}
        <UserButton />
    </nav>
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <EllipsisVertical className="text-primary" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
                <SheetTitle>Menu</SheetTitle>
                <ModeToggle />
                {/* <Button variant='default' asChild>
                    <Link href='/sign-in'>
                        <User2 /> Sign in
                    </Link>
                </Button> */}
                <UserButton />
                <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
    </nav>
  </div>
}
export default Menu