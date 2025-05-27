import React from "react";
import Image from "next/image";
import newsFeed from "../../public/news-feed.png";
import { SearchIcon, AlignLeftIcon } from "lucide-react";

const NavbarCom = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div className="bg-white">
      <nav className="container mx-auto px-5">
        <div className="flex justify-between items-center py-2">
          <Image
            src={newsFeed}
            alt="News Feed"
            width={40}
            height={40}
            className="drop-shadow-sm drop-shadow-gray-400"
          />
          <ul className="md:flex hidden list-none gap-5 text-base font-semibold font-nunito-sans text-gray-600 *:cursor-pointer *:active:scale-95">
            <li>Home</li>
            <li>Arts</li>
            <li>AutoMobiles</li>
            <li>Book/Review</li>
            <li>Business</li>
            <li>Fashion</li>
            <li>Food</li>
            {/* <li>Health</li> */}
          </ul>
          <ul className="list-none flex gap-5 text-gray-600 *:cursor-pointer *:active:scale-95">
            {/* <li>
            <UserIcon />
          </li> */}
            <li className="md:block hidden">
              <SearchIcon />
            </li>
            <li className="md:hidden block">
              <AlignLeftIcon onClick={() => setOpen(true)} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarCom;
