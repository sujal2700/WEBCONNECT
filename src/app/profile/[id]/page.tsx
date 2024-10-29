import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Feed from "@/components/Feed"; // Import Feed if not already imported
import Image from "next/image";

const ProfilePage = () => {
   return (
      <div className="flex gap-6 pt-6">
         {/* LeftMenu: visible only on xl and larger screens */}
         <div className="hidden xl:block w-[20%]">
            <LeftMenu type="profile"/>
         </div>

         {/* Main content (Feed): always visible */}
         <div className="w-full lg:w-[70%] xl:w-[50%]">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col items-center">
      
      {/* Cover Photo */}
      <div className="w-full h-64 relative">
        <Image src="/path-to-cover-image.jpg" alt="Cover photo" fill className="object-cover" />
        
        {/* Profile Picture */}
        <div className="absolute left-0 right-0 -bottom-16 mx-auto w-32 h-32">
          <Image src="/path-to-profile-picture.jpg" alt="Profile picture" width={128} height={128} className="w-32 h-32 rounded-full ring-4 ring-white object-cover" />
        </div>
      </div>

      {/* Username */}
      <h1 className="mt-20 mb-4 text-2xl font-medium">Elva Weaver</h1>
      
      {/* Stats: Posts, Followers, Following */}
      <div className="flex justify-center gap-8 mb-4 text-center">
        <div>
          <span className="block text-lg font-semibold">142</span>
          <span className="text-sm text-gray-500">Posts</span>
        </div>
        <div>
          <span className="block text-lg font-semibold">1.2K</span>
          <span className="text-sm text-gray-500">Followers</span>
        </div>
        <div>
          <span className="block text-lg font-semibold">1.4K</span>
          <span className="text-sm text-gray-500">Following</span>
        </div>
      </div>
    </div>

    {/* Feed */}
    <Feed />
  </div>
</div>
         {/* RightMenu: visible on lg and larger screens */}
         <div className="hidden lg:block w-[30%]">
            <RightMenu userId="test" />
         </div>
      </div>
   );
};

export default ProfilePage;
