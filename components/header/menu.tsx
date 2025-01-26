import {EllipsisVertical, User2 } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import ModeToggle from "./mode-toggle"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"

const Menu = () => {
  return <div className="flex justify-end gap-3">
    <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button variant='default' asChild>
            <Link href='/sign-in'>
                <User2 /> Sign in
            </Link>
        </Button>
    </nav>
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <EllipsisVertical className="text-primary" />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
                <SheetTitle>Menu</SheetTitle>
                <ModeToggle />
                <Button variant='default' asChild>
                    <Link href='/sign-in'>
                        <User2 /> Sign in
                    </Link>
                </Button>
                <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
    </nav>
  </div>
}
export default Menu