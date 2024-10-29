import { Ellipsis } from "lucide-react";
import { Image } from "lucide-react";
const Ad =({size}: {size: "sm" | "md" | "lg"}) =>{
  return(
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Ellipsis width={16} height={16} />
</div>
<div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
<div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
  <Image src="" alt="description" layout="fill" className="rounded-lg object-cover" />
  <span className="text-blue-500 font-medium">BigChef Longue</span>
</div>
<p className={size==="sm"?"text-xs":"text-sm"}>
{size === "sm" ? "Lorem ipsum dolor sit abet " : size==="md"  ? "Lorem ipsum dolor sit abet Lorem ipsum dolor sit abet Lorem ipsum dolor sit abet" : "Lorem ipsum dolor sit abet Lorem ipsum dolor sit abet Lorem ipsum dolor sit abet"

}

</p>
<button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
<div className="flex items-center gap-4">



</div>

</div>



    </div>
  )
}

export default Ad;