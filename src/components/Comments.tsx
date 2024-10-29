import Image from "next/image";
import { Ellipsis, ThumbsUp } from "lucide-react"; // Uncomment this if you're using the icon from lucide-react
const Comments = () => {
  return (
    <div className="space-y-6">
      {/* Comment Input Section */}
      <div className="flex items-center gap-4">
        <Image
          src="/path/to/user-avatar.png" // Replace with a valid image path
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
          alt="User avatar"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-4 py-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/path/to/smile-icon.png" // Replace with a valid image path for smile icon
            alt="Smile icon"
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-4">
        {/* Single Comment */}
        <div className="flex gap-4">
          <Image
            src="/path/to/comment-user-avatar.png" // Replace with a valid image path for commenter's avatar
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
            alt="Commenter's avatar"
          />
          <div className="flex-1 flex flex-col">
            {/* Comment Content */}
            <div className="bg-gray-100 rounded-lg p-3">
              <span className="font-medium text-gray-800">Sujal Singh</span>
              <p className="text-gray-600">This is a comment.</p>
            </div>

            {/* Like, Reply, and Likes Count */}
            <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
              <button className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                <ThumbsUp width={20} height={20}  />
                <span>123 Likes</span>
              </button>
              <button className="cursor-pointer hover:text-gray-700">Reply</button>
            </div>
          </div>

          {/* Ellipsis Icon */}
          <div className="flex items-center">
            {/* Replace with Ellipsis component if using lucide-react */}
           <Ellipsis height={15} width={15} className="cursor-pointer w-4 h-4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
