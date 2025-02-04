import Link from "next/link"
import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserIcon } from "lucide-react"
import { signOutUser } from "@/lib/actions/user.actions"

const UserButton = async () => {
    const session = await auth()
    if (!session) {
        return (
            <Button asChild>
                <Link href='/sign-in'>
                <UserIcon /> Sign In
                </Link>
            </Button>
        )
    }

    const userInitial = session.user?.name?.charAt(0).toUpperCase() ?? 'U'
  return <div className="flex gap-2 items-center">
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="flex items-center">
                <Button variant='ghost' className="relative w-8 h-8 rounded ml-2 flex items-center justify-center bg-primary dark:bg-gray-900 text-white">
                    {userInitial}
                </Button>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    <div className="text-sm font-medium leading-none font-sans">
                        {session.user?.name}
                    </div>
                    <div className="text-sm text-muted-foreground leading-none font-mono">
                        {session.user?.email}
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuItem className="p-0 mb-1">
                <form action={signOutUser} className="w-full mt-3">
                    <Button  className="w-full py-4 px-2 h-4 justify-start">
                        Sign Out
                    </Button>
                </form>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  </div>
}
export default UserButton