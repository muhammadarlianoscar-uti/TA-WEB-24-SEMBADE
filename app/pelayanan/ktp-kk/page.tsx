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

    setData(initialData);
    setFiles(initialFiles);
    e.target.reset();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        
        {/* JUDUL */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🪪</span>
          <h1 className="text-2xl font-bold text-emerald-800">Pembuatan KTP / KK</h1>
        </div>

        {/* SYARAT */}
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl mb-8 font-medium shadow-sm">
          Syarat : Fotokopi KK & Surat Pengantar RT
        </div>

        <form onSubmit={handleSend} autoComplete="off">
          
          {/* DATA DIRI */}
          <div className="border border-slate-200 p-6 rounded-xl mb-6 bg-slate-50/50">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">Data Diri</h2>

            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              required
              className="w-full border border-slate-300 p-3 rounded-lg mb-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
            />

            <input
              name="nik"
              value={data.nik}
              onChange={handleChange}
              placeholder="NIK"
              required
              className="w-full border border-slate-300 p-3 rounded-lg mb-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
            />

            <input
              name="address"
              value={data.address}
              onChange={handleChange}
              placeholder="Alamat Lengkap"
              required
              className="w-full border border-slate-300 p-3 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
            />
          </div>

          {/* PENGAJUAN */}
          <div className="border border-slate-200 p-6 rounded-xl mb-6 bg-slate-50/50">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">Detail Pengajuan</h2>
            
            {/* PERBAIKAN: classname -> className */}
            <div className="relative w-full mb-4">
              <select
                name="type"
                value={data.type}
                onChange={handleChange}
                required
                className="w-full appearance-none border border-slate-300 p-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm pr-10"
              >
                <option value="" disabled>Pilih Jenis Pengajuan</option>
                <option value="ktp">Pembuatan KTP Baru / Perbaikan</option>
                <option value="kk">Pembuatan KK Baru / Perbaikan</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            <textarea
              name="purpose"
              value={data.purpose}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 p-3 rounded-lg h-28 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm resize-y"
              placeholder="Jelaskan Keperluan (Contoh: KTP Hilang, Pembaruan Status, dll)"
            />
          </div>

          {/* UPLOAD DOKUMEN */}
          <div className="border border-slate-200 p-6 rounded-xl mb-8 bg-slate-50/50">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">Upload Dokumen</h2>
            
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Upload Kartu Keluarga (KK)
              </label>
              <label className="flex items-center justify-center bg-white border border-dashed border-slate-400 p-4 rounded-lg cursor-pointer hover:bg-slate-100 transition shadow-sm">
                <span className="text-sm font-medium text-slate-600">
                  {files.kk ? `✅ ${files.kk.name}` : "📁 Pilih file KK"}
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

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Upload Surat Pengantar RT
              </label>
              <label className="flex items-center justify-center bg-white border border-dashed border-slate-400 p-4 rounded-lg cursor-pointer hover:bg-slate-100 transition shadow-sm">
                <span className="text-sm font-medium text-slate-600">
                  {files.suratRt ? `✅ ${files.suratRt.name}` : "📁 Pilih file Pengantar RT"}
                </span>
                <input
                  type="file"
                  name="suratRt"
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
            className="w-full bg-emerald-600 text-white font-bold p-4 rounded-xl hover:bg-emerald-700 transition shadow-md mb-6 text-lg"
          >
            Kirim Pengajuan KTP/KK
          </button>

        </form>

        {/* Letakkan BackButton di tengah bawah agar rapi */}
        <div className="flex justify-center border-t border-slate-100 pt-6">
          <BackButton />
        </div>

      </div>
    </div>
  );
}