"use client";
import { useState } from "react";
import NavbarCom from "./components/NavbarCom";
import SideBarCom from "./components/SideBarCom";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavbarCom setOpen={setOpen} />
      <SideBarCom open={open} setOpen={setOpen} />
    </>
  );
}
