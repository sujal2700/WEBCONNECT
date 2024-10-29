import { NotebookPen, Activity, ShoppingCart, Calendar, Image, Video, Newspaper, Book, List, Settings } from "lucide-react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Display ProfileCard only if type is "home" */}
      {type === "home" && <ProfileCard />}

      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <NotebookPen width={20} height={20} />
          <span>My Posts</span>
        </Link>

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <Link href="/activity" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Activity width={20} height={20} />
          <span>Activity</span>
        </Link>

        <Link href="/marketplace" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <ShoppingCart width={20} height={20} />
          <span>Marketplace</span>
        </Link>

        <Link href="/events" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Calendar width={20} height={20} />
          <span>Events</span>
        </Link>

        <Link href="/albums" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width={20} height={20} />
          <span>Albums</span>
        </Link>

        <Link href="/videos" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Video width={20} height={20} />
          <span>Videos</span>
        </Link>

        <Link href="/news" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Newspaper width={20} height={20} />
          <span>News</span>
        </Link>

        <Link href="/courses" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Book width={20} height={20} />
          <span>Courses</span>
        </Link>

        <Link href="/lists" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <List width={20} height={20} />
          <span>Lists</span>
        </Link>

        <Link href="/settings" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Settings width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
