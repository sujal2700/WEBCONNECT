import Comments from "./Comments";
import Image from "next/image";
import { Ellipsis, Heart, MessageSquare, Share2} from "lucide-react";
const Post = () =>{
  return(
   <div className="flex flex-col gap-4">
   <div className=" flex items-center justify-between">
     <div className="flex items-center gap-4">
       <Image src="" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
       <span className="font-medium">
Sujal Singh
       </span>
     </div>
<Ellipsis width={20} height={20} />
   </div>
    <div className="flex flex-col gap-4">
      <div className="w-full min-h-96 relative">
      <Image src="" alt=""  className="w-10 h-10 rounded-full" />
      </div>
<p>hello this is a post hello this is a post hello this is a post hello this is a post hello this is a post</p>
    </div>
    <div className="flex items-center justify-between text-sm my-4">
  {/* Likes and Comments: Aligned to the left */}
  <div className="flex gap-8">
    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
      <Heart width={16} height={16} className="cursor-pointer" />
      <span className="text-gray-300">| </span>
      <span className="text-gray-500">120<span className="hidden md:inline"> Likes</span></span>
    </div>
    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
      <MessageSquare width={16} height={16} className="cursor-pointer" />
      <span className="text-gray-300">| </span>
      <span className="text-gray-500">120<span className="hidden md:inline"> Comments</span></span>
    </div>
  </div>

  {/* Share: Aligned to the right */}
  <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
    <Share2 width={16} height={16} className="cursor-pointer" />
    <span className="text-gray-300">| </span>
    <span className="text-gray-500">120<span className="hidden md:inline"> Shares</span></span>
  </div>
</div>
<Comments />
   </div>
  );
};
export default Post