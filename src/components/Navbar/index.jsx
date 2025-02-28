import React from "react";
import { FaRegBell } from "react-icons/fa6";
import Image from "next/image";
export const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-black to-blue-500 p-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Image src="/Logo-FTL.png" alt="Logo" width={70} height={70} />
            <p className="text-white font-semibold">iMeeting</p>
          </div>

          <div className="flex gap-6 items-center">
            <FaRegBell className="text-white" />
            <div className="flex items-center gap-2 text-white">
              <Image
                src="/man 3.png"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
