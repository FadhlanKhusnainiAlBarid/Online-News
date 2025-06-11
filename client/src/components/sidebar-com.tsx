import React, { useState } from "react";
import { Menu, UserIcon, SearchIcon, UserPlus, X } from "lucide-react";
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import { Category } from "@/lib/features/action/newsAction";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { TextSearch } from "@/lib/features/action/newsAction";
import ModalSearch from "@/components/modal-search";

const SideBarCom = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.news);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        className="md:hidden block bg-white"
      >
        <DrawerHeader title="MENU" titleIcon={() => <Menu />} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form
                  className="pb-3 md:hidden relative"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (search.length > 2) setOpenModal(true);
                  }}
                >
                  <TextInput
                    className="px-px"
                    icon={SearchIcon}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                    value={search}
                    onChange={(e) => dispatch(TextSearch(e.target.value))}
                    onFocus={() => search.length > 2 && setOpenModal(true)}
                  />
                  {search && (
                    <div
                      onClick={() => dispatch(TextSearch(""))}
                      className="cursor-pointer absolute h-full inset-y-0 right-0 flex items-center pr-2"
                    >
                      <X className="text-black" />
                    </div>
                  )}
                </form>
                <SidebarItems>
                  <SidebarItemGroup>
                    {Category.map((category) => {
                      return (
                        <SidebarItem
                          onClick={() => {
                            setOpen(false);
                            router.push(category.href);
                          }}
                          key={category.name}
                        >
                          {category.name}
                        </SidebarItem>
                      );
                    })}
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem href="/" icon={UserIcon}>
                      Sign in
                    </SidebarItem>
                    <SidebarItem href="/" icon={UserPlus}>
                      Sign up
                    </SidebarItem>
                    {/* <SidebarItem href="/" icon={UserIcon}>
                      User
                    </SidebarItem> */}
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
      <ModalSearch openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default SideBarCom;
