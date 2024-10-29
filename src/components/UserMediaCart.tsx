import Link from "next/link"
import Image from "next/image"


const UserMediaCart = ({userId}: {userId:string}) => {
  return (
    <div className=''><div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">User Media</span>
      <Link href="/" className="text-blue-500 text-xs"> See All </Link>
    
    </div>
    
    <div className="relative w-1/5 h-24">
<Image 
src="" alt="" fill className="object-cover rounded-md" 

/>

    </div>
    <div className="relative w-1/5 h-24">
<Image 
src="" alt="" fill className="object-cover rounded-md" 

/>

    </div>
    <div className="relative w-1/5 h-24">
<Image 
src="" alt="" fill className="object-cover rounded-md" 

/>

    </div>
    
     </div>
      
    </div>
  )
}

export default UserMediaCart
