"use client";
import BackButton from "@/app/components/backbutton";
import { useState } from "react";

export default function DomisiliPage() {
  const initialData = {
    name: "",
    nik: "",
    address: "",
    purpose: "",
  };

  const initialFiles = {
    ktp: null as File | null,
    kk: null as File | null,
  };

  const [data, setData] = useState(initialData);
  const [files, setFiles] = useState(initialFiles);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFile = (e: any) => {
    const { name, files } = e.target;
    setFiles((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    console.log("DOMISILI:", data, files);
    alert("Pengajuan Surat Domisili berhasil dikirim");

    setData(initialData);
    setFiles(initialFiles);
    e.target.reset();
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h1 className="text-xl font-bold mb-4">📄 Surat Domisili</h1>

        {/* SYARAT */}
        <div className="bg-yellow-50 border p-3 rounded mb-4 text-sm">Syarat :
          Fotokopi KTP & KK
        </div>

        <form onSubmit={handleSend} autoComplete="off">
          {/* DATA */}
          <div className="bg-gray-50 border p-4 rounded-xl mb-4">
            <p className="font-semibold mb-2">Data Diri</p>

            <input
              name="name"
              value={data.name}
              placeholder="Nama"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mb-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              name="nik"
              value={data.nik}
              placeholder="NIK"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mb-2 focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              name="address"
              value={data.address}
              placeholder="Alamat"
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          {/* KEPERLUAN */}
          <div className="bg-gray-50 border p-4 rounded-xl mb-4">
            <p className="font-semibold mb-2">Keperluan</p>

            <textarea
              name="purpose"
              value={data.purpose}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded h-24 focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Contoh: untuk melamar kerja"
            />
          </div>

          {/* UPLOAD */}
          <div className="bg-gray-50 border p-4 rounded-xl mb-4">
            <p className="font-semibold mb-2">Upload Dokumen</p>

            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-1">
                Upload KTP
              </label>
              <label className="flex items-center justify-center bg-white border border-gray-300 p-2.5 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <span className="text-sm text-gray-500">
                  {files.ktp ? files.ktp.name : "Pilih file KTP"}
                </span>
                <input
                  type="file"
                  name="ktp"
                  onChange={handleFile}
                  className="hidden"
                  accept="image/*,.pdf"
                  required
                />
              </label>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Upload KK
              </label>
              <label className="flex items-center justify-center bg-white border border-gray-300 p-2.5 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <span className="text-sm text-gray-500">
                  {files.kk ? files.kk.name : "Pilih file KK"}
                </span>
                <input
                  type="file"
                  name="kk"
                  onChange={handleFile}
                  className="hidden"
                  accept="image/*,.pdf"
                  required
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 mb-4"
          >
            Kirim
          </button>
        </form>

        <BackButton />
      </div>
    </div>
  );
}
