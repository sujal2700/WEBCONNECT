import LeftMenu from "../components/LeftMenu";
import Stories from "../components/Stories";
import AddPost from "../components/AddPost";
import Feed from "../components/Feed";
import RightMenu from "../components/RightMenu";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* LeftMenu: visible only on xl and larger screens */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>

      {/* Main content (Stories, AddPost, Feed): always visible */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>

      {/* RightMenu: visible on lg and larger screens */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default Homepage;
