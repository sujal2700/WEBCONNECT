import Image from "next/image"

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image src="" alt="" fill className="rounded-md object-cover"/>
        <Image src="" alt="" fill className="rounded-full  object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10" width={48} height={48}  />

      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="semi-bold">Sujal Singh</span>
        <span className="text-xs text-gray-500">500 followers</span>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
      </div>
      
    </div>
  )
}

export default ProfileCard
