import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export const Content = () => {
  return (
    <div className="mt-10 ml-5 w-full mr-5 ">
      <div className="flex items-center justify-between">
        <div className="  flex items-center gap-5 ">
          <a href="#" className="text-2xl p-2 rounded text-white bg-blue-500">
            <IoIosArrowBack />
          </a>
          <h1 className="text-2xl font-semibold">Ruang Meeting</h1>
        </div>
        <div>
          <button className="text-white bg-blue-500 p-2 rounded">
            + Pesan Ruangan
          </button>
        </div>
      </div>
    </div>
  );
};
