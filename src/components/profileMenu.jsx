"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useRouter } from 'next/navigation'



const ProfileMenu = () => {
  const router = useRouter()

  return (
    <Dropdown placement="bottom-end">
      <div className="flex justify-between items-center gap-2">
        {/* User image-profile */}
        <DropdownTrigger>
          <button className="outline-none">
            <Avatar name="Amna" size="sm" color="secondary" />
          </button>
        </DropdownTrigger>
        {/* User-info (name) */}
        <h3 className="text-slate-100">Amna Q</h3>
      </div>
      {/* Profile menu */}
      <DropdownMenu
        aria-label="profile-menu"
        itemClasses={{
          base: ["data-[hover=true]:bg-[#eee] text-black"],
        }}
      >
        <DropdownItem key="my-videos" onClick={() => router.push('/myVideos')}>My Videos</DropdownItem>
        <DropdownItem key="logout">Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileMenu;
