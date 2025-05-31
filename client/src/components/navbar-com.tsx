import React, { useState } from "react";
import Image from "next/image";
import newsFeed from "../../public/news-feed.png";
import { SearchIcon, AlignLeftIcon, MenuIcon } from "lucide-react";
import ModalSearch from "./modal-search";
import Link from "next/link";
import { Category } from "@/lib/features/action/newsAction";
import { MegaMenuDropdown, MegaMenuDropdownToggle } from "flowbite-react";

const NavbarCom = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-300">
        <nav className="container mx-auto px-5">
          <div className="flex justify-between items-center py-2">
            <Image
              src={newsFeed}
              alt="News Feed"
              width={40}
              height={40}
              className="drop-shadow-sm drop-shadow-gray-400"
            />
            <div className="md:block hidden">
              <ul className="flex list-none gap-3.5 text-base font-semibold font-nunito-sans text-gray-600 *:cursor-pointer *:active:scale-95">
                {Category.filter((_, index) => index < 7).map(
                  (category: Category) => (
                    <li key={category.name}>
                      <Link href={category.href}>{category.name}</Link>
                    </li>
                  )
                )}
                <li>
                  <MegaMenuDropdownToggle
                    onClick={() => setOpenDropdown((prev) => !prev)}
                  >
                    <MenuIcon />
                  </MegaMenuDropdownToggle>
                </li>
              </ul>
              <MegaMenuDropdown
                className={` ${openDropdown ? "block" : "hidden"}`}
              >
                <ul className="grid grid-cols-4 p-4">
                  {Category.filter((_, index) => index >= 7).map(
                    (category: Category) => (
                      <Link
                        href={category.href}
                        onClick={() => setOpenDropdown(false)}
                        key={category.name}
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        {category.name}
                      </Link>
                    )
                  )}
                </ul>
              </MegaMenuDropdown>
            </div>
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
