"use client";
import BackButton from "@/app/components/backbutton";
import { useState } from "react";

export default function KTPPage() {
  const initialData = {
    name: "",
    nik: "",
    address: "",
    type: "",
    purpose: "",
  };

  const initialFiles = {
    kk: null as File | null,
    suratRt: null as File | null,
  };

  const [data, setData] = useState(initialData);
  const [files, setFiles] = useState(initialFiles);

  const handleFile = (e: any) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] || null }));
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    console.log("KTP/KK:", data, files);
    alert("Pengajuan KTP/KK berhasil dikirim");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h1 className="text-xl font-bold mb-4">🪪 KTP / KK</h1>

        <div className="bg-yellow-50 border p-3 rounded mb-4 text-sm">
          KK & Surat RT
        </div>

        <form onSubmit={handleSend} autoComplete="off">
          <div className="bg-gray-50 border p-4 rounded-xl mb-4">
            <p className="font-semibold mb-2">Data Diri</p>

            <input
              name="name"
              onChange={handleChange}
              placeholder="Nama"
              className="w-full border p-2 rounded mb-2"
            />

            <input
              name="nik"
              onChange={handleChange}
              placeholder="NIK"
              className="w-full border p-2 rounded mb-2"
            />

            <input
              name="address"
              onChange={handleChange}
              placeholder="Alamat"
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="bg-gray-50 border p-4 rounded-xl mb-4">
            <p className="font-semibold mb-2">Pengajuan</p>

            <select
              name="type"
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            >
              <option value="">Pilih Jenis</option>
              <option value="ktp">KTP</option>
              <option value="kk">KK</option>
            </select>

            <textarea
              name="purpose"
              onChange={handleChange}
              className="w-full border p-2 rounded h-24"
              placeholder="Keperluan"
            />
          </div>

          <button className="w-full bg-green-600 text-white p-3 rounded-xl">
            Kirim
          </button>

          <BackButton />
        </form>
      </div>
    </div>
  );
}
