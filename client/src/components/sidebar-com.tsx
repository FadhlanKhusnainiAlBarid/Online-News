import React from "react";
import { Menu, UserIcon, SearchIcon, HouseIcon, UserPlus } from "lucide-react";
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

const SideBarCom = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <DrawerHeader title="MENU" titleIcon={() => <Menu />} />
      <DrawerItems>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="[&>div]:bg-transparent [&>div]:p-0"
        >
          <div className="flex h-full flex-col justify-between py-2">
            <div>
              <form className="pb-3 md:hidden">
                <TextInput
                  className="px-px"
                  icon={SearchIcon}
                  type="search"
                  placeholder="Search"
                  required
                  size={32}
                />
              </form>
              <SidebarItems>
                <SidebarItemGroup>
                  <SidebarItem href="/" icon={HouseIcon}>
                    Home
                  </SidebarItem>
                  <SidebarItem href="/">Arts</SidebarItem>
                  <SidebarItem href="/">AutoMobiles</SidebarItem>
                  <SidebarItem href="/">Book/Review</SidebarItem>
                  <SidebarItem href="/">Business</SidebarItem>
                  <SidebarItem href="/">Fashion</SidebarItem>
                  <SidebarItem href="/">Food</SidebarItem>
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
  );
};

export default SideBarCom;
