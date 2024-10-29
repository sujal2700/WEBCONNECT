import { HomeIcon, Handshake, CirclePlus, UsersRound, MessageCircleMore, Bell, LogIn, Search } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between px-4">
      <div className="md:hidden lg:block ml-4 mr-20"> {/* Removed w-[20%] and added ml-4 */}
        <Link href="/" className="font-bold text-xl text-blue-600">WECONNECT</Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8"> {/* Increased gap here */}
        <Link href="/" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <HomeIcon className="w-5 h-5" />
          <span className="font-medium">HomePage</span>
        </Link>

        <Link href="/" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <Handshake className="w-5 h-5" />
          <span className="font-medium">Friends</span>
        </Link>

        <Link href="/" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <CirclePlus className="w-5 h-5" />
          <span className="font-medium">Stories</span>
        </Link>
      </div>

      <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl ml-4">
        <input type="text" placeholder="search.." className="bg-transparent outline-none px-2" />
        <Search width={14} height={14} />
      </div>

      <div className="w-[50%] flex items-center gap-6 xl:gap-8 justify-end"> {/* Adjusted gap here */}
        <ClerkLoading>
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer px-2">
              <UsersRound width={20} height={20} />
            </div>
            <div className="cursor-pointer px-2">
              <MessageCircleMore width={20} height={20} />
            </div>
            <div className="cursor-pointer px-2">
              <Bell width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-2">
              <LogIn width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>

        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
