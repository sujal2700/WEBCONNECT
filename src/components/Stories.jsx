import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll scrollbar text-sm">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="" alt="Sujal's Story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Sujal</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="" alt="Story 2" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Alex</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="" alt="Story 3" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Chris</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="" alt="Story 4" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Taylor</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="" alt="Story 5" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Jordan</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="" alt="Story 5" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Jordan</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="" alt="Story 5" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Jordan</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
