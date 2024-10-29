import Link from "next/link"
import {MapPin,Link2, Calendar} from 'lucide-react';

const UserInfoCard = ({userId}: {userId:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
<div className="flex justify-between items-center font-medium">
  <span className="text-gray-500">User Information</span>
  <Link href="/" className="text-blue-500 text-xs"> See All </Link>

</div>
<div className="flex flex-col gap-4 text-gray-500 ">
<div className="flex items-center gap-2">
  <span className="text-xl text-black">Sunny Singh</span>
  <span className="text-sm">@sunny</span>
</div>
<p> 
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>
<div className="flex items-center gap-2">
   <MapPin  width={16} height={16} />
   <span>Living in <b>Delhi</b></span>
</div>
<div className="flex items-center gap-2">
   <MapPin  width={16} height={16} />
   <span>Went to High School</span>
</div>

<div className="flex items-center gap-2">
   <MapPin  width={16} height={16} />
   <span>Works at <b>IBM</b></span>
</div>
<div className="flex items-center justify-between">
<div className="flex gap-1 items-center">
<Link2  width={16} height={16}/>
<Link href="/" className="text-blue-500 font-medium">ckbkab</Link>
</div>
<div className="flex gap-1 items-center">
<Calendar width={16} height={16} />
<span>Joined October 2023</span>
</div>

</div>
<button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
<span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
</div>

 </div>
  )
}

export default UserInfoCard
