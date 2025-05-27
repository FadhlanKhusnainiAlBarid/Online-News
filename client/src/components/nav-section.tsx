"use client";
import React, { useState } from "react";
import NavbarCom from "@/components/navbar-com";
import SideBarCom from "@/components/sidebar-com";

function NavSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavbarCom setOpen={setOpen} />
      <SideBarCom open={open} setOpen={setOpen} />
    </>
  );
}

export default NavSection;
