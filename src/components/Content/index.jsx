import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { BookingModal } from "../BookingModal";

export const Content = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const data = [
    {
      unit: "UNIT KEUANGAN",
      room: "Ruang Prambanan",
      capacity: "10 Orang",
      date: "11 Desember 2024",
      time: "11:00 s/d 13:00",
      participants: "8 Orang",
      consumption: "Snack Siang, Makan Siang",
    },
    {
      unit: "UNIT SDM",
      room: "Ruang Prambanan",
      capacity: "10 Orang",
      date: "11 Desember 2024",
      time: "13:00 s/d 14:00",
      participants: "3 Orang",
      consumption: "Snack Sore",
    },
  ];

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="mt-10 ml-5 mr-5 w-full">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-5">
          <a href="#" className="text-2xl p-2 rounded text-white bg-blue-500">
            <IoIosArrowBack />
          </a>
          <h1 className="text-2xl font-semibold">Ruang Meeting</h1>
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-white bg-blue-500 p-2 rounded">
          + Pesan Ruangan
        </button>
      </div>
      <div className="overflow-x-auto shadow-md">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-6 text-left">UNIT</th>
              <th className="py-3 px-6 text-left">RUANG MEETING</th>
              <th className="py-3 px-6 text-left">KAPASITAS</th>
              <th className="py-3 px-6 text-left">TANGGAL RAPAT</th>
              <th className="py-3 px-6 text-left">WAKTU</th>
              <th className="py-3 px-6 text-left">JUMLAH PESERTA</th>
              <th className="py-3 px-6 text-left">JENIS KONSUMSI</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6 font-semibold">{item.unit}</td>
                <td className="py-3 px-6">{item.room}</td>
                <td className="py-3 px-6">{item.capacity}</td>
                <td className="py-3 px-6">{item.date}</td>
                <td className="py-3 px-6">{item.time}</td>
                <td className="py-3 px-6">{item.participants}</td>
                <td className="py-3 px-6">{item.consumption}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center space-x-2 mt-4"}
          pageClassName={"px-3 py-1 border rounded text-blue-500"}
          activeClassName={"bg-blue-500 text-white"}
        />
      </div>
      {showModal && (
        <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
