import React, { useState } from "react";

export const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-semibold mb-4">Informasi Ruang Meeting</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Unit</label>
            <select className="w-full p-2 border rounded">
              <option>Pilih Unit</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Ruang Meeting</label>
            <select className="w-full p-2 border rounded">
              <option>Pilih Ruangan Meeting</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm">Kapasitas</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold my-4">Informasi Rapat</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Tanggal Rapat*</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm">Waktu Mulai</label>
            <select className="w-full p-2 border rounded">
              <option>Pilih Waktu Mulai</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Waktu Selesai</label>
            <select className="w-full p-2 border rounded">
              <option>Pilih Waktu Selesai</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Jumlah Peserta</label>
            <input type="number" className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="my-4">
          <label className="block text-sm">Jenis Konsumsi</label>
          <div className="flex gap-4">
            <label>
              <input type="checkbox" /> Snack Siang
            </label>
            <label>
              <input type="checkbox" /> Makan Siang
            </label>
            <label>
              <input type="checkbox" /> Snack Sore
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm">Nominal Konsumsi</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Rp."
          />
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="text-red-500">
            Batal
          </button>
          <button className="bg-blue-500 text-white p-2 rounded">Simpan</button>
        </div>
      </div>
    </div>
  );
};
