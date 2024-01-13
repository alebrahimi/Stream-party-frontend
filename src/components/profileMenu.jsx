"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { useUserStore } from "../store/useUser";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const ProfileMenu = () => {
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const pathName = usePathname()
  const router = useRouter()

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center gap-2">
      {pathName === "/myVideos" &&
        <Link href="/uploadFile" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">+ Upload Video</Link>
      }
      <div className="relative inline-block">
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-8 h-8  flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-slate-700 bg-slate-600 text-slate-100 shadow-sm outline-none p-2"
        >
          {user?.name.charAt(0)}
        </button>

        <div
          className={`${isDropdownOpen ? "opacity-100 mt-2" : "opacity-0 hidden"
            } transition-opacity duration-300 origin-top-right absolute right-0 top-full min-w-[10rem] bg-slate-700 shadow-md rounded-lg p-2 divide-y divide-gray-700 border border-gray-700`}
        >
          <Link
            href="/myVideos"
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm  focus:outline-none text-gray-300 hover:text-gray-200 focus:bg-gray-600"
          >
            <svg class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M12 12v9" />
              <path d="m8 17 4 4 4-4" />
            </svg>

            My Videos
          </Link>
          <Link
            href="/"
            onClick={() => { clearUser(); router.push("/logIn") }}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm  focus:outline-none text-gray-300 hover:text-gray-200 focus:bg-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-log-out">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4">
              </path><polyline points="16 17 21 12 16 7">
              </polyline><line x1="21" y1="12" x2="9" y2="12">
              </line>
            </svg>
            Logout
          </Link>
        </div>
      </div>
      <h3>{user?.name}</h3>
    </div>
  );
};

export default ProfileMenu;
