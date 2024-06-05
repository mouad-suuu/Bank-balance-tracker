import Link from "next/link";
import React from "react";
import Image from "next/image";

const SideBar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer  items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt={"Horizen logo"}
            className="size-[34px] max-al:size-14"
          />
          <h1 className="sidebat-logo">Horizen</h1>
        </Link>
        <Link href="/Home"></Link>
      </nav>
    </section>
  );
};

export default SideBar;
