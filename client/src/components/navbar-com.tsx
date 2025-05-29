import React, { useState } from "react";
import Image from "next/image";
import newsFeed from "../../public/news-feed.png";
import { SearchIcon, AlignLeftIcon } from "lucide-react";
import ModalSearch from "./modal-search";
import Link from "next/link";

const NavbarCom = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
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
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/arts">Arts</Link>
              </li>
              <li>
                <Link href="/automobiles">AutoMobiles</Link>
              </li>
              <li>
                <Link href="/book-review">Book/Review</Link>
              </li>
              <li>
                <Link href="/business">Business</Link>
              </li>
              <li>
                <Link href="/fashion">Fashion</Link>
              </li>
              <li>
                <Link href="/food">Food</Link>
              </li>
              {/* <li>Health</li> */}
            </ul>
            <ul className="list-none flex gap-5 text-gray-600 *:cursor-pointer *:active:scale-95">
              {/* <li>
            <UserIcon />
          </li> */}
              <li
                onClick={() => setOpenModal((prev) => !prev)}
                className="md:block hidden"
              >
                <SearchIcon />
              </li>
              <li className="md:hidden block">
                <AlignLeftIcon onClick={() => setOpen(true)} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ModalSearch openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default NavbarCom;
