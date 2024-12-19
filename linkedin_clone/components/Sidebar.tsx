import Image from "next/image";
import React from "react";
import ProfilePhoto from "./shared/ProfilePhoto";

const Sidebar = ({ user }: { user: any }) => {
  return (
    <div className="hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 overflow-hidden">
          {user && (
            <Image
              src={"/wallpaper.jpg"}
              alt="wallpaper"
              width={200}
              height={200}
              className="w-full h-full rounded-t"
            />
          )}
        </div>
        <div className="my-1 absolute top-10">
          <ProfilePhoto src={user ? user?.imageUrl : "/wallpaper.jpg"} />
        </div>
        <div className="border-b border-b-gray-300">
          <div className="p-2 text-center mt-5">
            <h1 className="font-bold hover:underline cursor-pointer">
              {user ? `${user?.firstName} ${user?.lastName}` : "Rajesh More"}
            </h1>
            <p className="text-xs">{user ? `${user?.username}` : "UserName"}</p>
          </div>
        </div>
      </div>
      <div className="text-xs ">
        <div className="w-full flex justify-between items-center px-3 py-2 gap-3 hover:bg-gray-200 cursor-pointer">
          <p>Post Imprassion</p>
          <p className="text-blue-500 font-bold">88</p>
        </div>
        <div className="w-full flex justify-between items-center px-3 py-2  hover:bg-gray-200 cursor-pointer">
          <p>Posts</p>
          <p className="text-blue-500 font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
