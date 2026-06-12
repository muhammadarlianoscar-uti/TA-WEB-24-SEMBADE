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
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        
        {/* JUDUL */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">📄</span>
          <h1 className="text-2xl font-bold text-emerald-800">Surat Domisili</h1>
        </div>

        {/* SYARAT */}
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl mb-8 font-medium shadow-sm">
          Syarat : Fotokopi KTP & KK
        </div>

        <form onSubmit={handleSend} autoComplete="off">
          
          {/* DATA DIRI */}
          <div className="border border-slate-200 p-6 rounded-xl mb-6 bg-slate-50/50">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">Data Diri</h2>

            <input
              name="name"
              value={data.name}
              placeholder="Nama Lengkap"
              onChange={handleChange}
              required
              // PERBAIKAN: Teks diubah jadi hitam pekat (text-slate-800) dan border jelas (border-slate-300)
              className="w-full border border-slate-300 p-3 rounded-lg mb-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
            />

            <input
              name="nik"
              value={data.nik}
              placeholder="NIK"
              onChange={handleChange}
              required
              className="w-full border border-slate-300 p-3 rounded-lg mb-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
            />

            <input
              name="address"
              value={data.address}
              placeholder="Alamat Lengkap"
              onChange={handleChange}
              required
              className="w-full border border-slate-300 p-3 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
            />
          </div>

          {/* KEPERLUAN */}
          <div className="border border-slate-200 p-6 rounded-xl mb-6 bg-slate-50/50">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">Keperluan</h2>

            <textarea
              name="purpose"
              value={data.purpose}
              onChange={handleChange}
              required
              placeholder="Contoh: untuk melamar kerja / pendaftaran sekolah"
              className="w-full border border-slate-300 p-3 rounded-lg h-28 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm resize-y"
            />
          </div>

          {/* UPLOAD */}
          <div className="border border-slate-200 p-6 rounded-xl mb-8 bg-slate-50/50">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">Upload Dokumen</h2>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Upload KTP
              </label>
              <label className="flex items-center justify-center bg-white border border-dashed border-slate-400 p-4 rounded-lg cursor-pointer hover:bg-slate-100 transition shadow-sm">
                <span className="text-sm font-medium text-slate-600">
                  {files.ktp ? `✅ ${files.ktp.name}` : "📁 Pilih file KTP"}
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Upload KK
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
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-bold p-4 rounded-xl hover:bg-emerald-700 transition shadow-md mb-6 text-lg"
          >
            Kirim Pengajuan
          </button>
        </form>

        <div className="flex justify-center border-t border-slate-100 pt-6">
          <BackButton />
        </div>
      </div>
    </div>
  );
}