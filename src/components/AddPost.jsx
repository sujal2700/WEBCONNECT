"use client";

import Image from "next/image";
import { ImagePlus, Video, Calendar, ChartBar } from "lucide-react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      <Image src="/path/to/default-image.png" width={48} height={48} alt="User Avatar" className="w-12 h-12 object-cover rounded-full" />
      <div>
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind?" className="flex-1 bg-slate-200 rounded-lg p-2"></textarea>
          <Image src="/pics/smile.png" width={20} height={20} alt="Smile icon" className="w-5 h-5 cursor-pointer self-end" />
        </div>

        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <ImagePlus width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Video width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Calendar width={20} height={20} />
            Calendar
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <ChartBar width={20} height={20} />
            Stats
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
