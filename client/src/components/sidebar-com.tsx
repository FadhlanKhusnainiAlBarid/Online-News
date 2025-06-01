import React from "react";
import { Menu, UserIcon, SearchIcon, UserPlus } from "lucide-react";
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

const SideBarCom = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const router = useRouter();
  return (
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
  );
};

export default SideBarCom;
