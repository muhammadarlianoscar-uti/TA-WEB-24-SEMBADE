"use client";
import Link from "next/link";
import { useState } from "react";

export default function PelayananPage() {
  const [open, setOpen] = useState(false);

  // data awal form
  const initialFormState = {
    name: "",
    category: "",
    customCategory: "",
    address: "",
    description: "",
    image: null as File | null,
  };
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files?.[0] || null });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // memproses data saat form dikirim
  const handleSubmit = (e: any) => {
    // mencegah refresh halaman otomatis saat submit
    e.preventDefault();

    const finalCategory =
      form.category === "lainnya" ? form.customCategory : form.category;

    const data = {
      ...form,
      category: finalCategory,
    };

    console.log("DATA:", data);
    alert("Pengaduan berhasil dikirim");

    setForm(initialFormState);
    e.target.reset();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-emerald-800">Pelayanan Desa</h1>

      {/* ================= ADMINISTRASI ================= */}
      <div className="mb-12">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center bg-emerald-600 hover:bg-emerald-700 transition-colors text-white p-4 rounded-xl shadow-sm"
        >
          <span className="font-semibold text-lg">🏛️ Administrasi Desa</span>
          <span>{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div className="grid md:grid-cols-3 gap-4 mt-4 animate-fade-in">
            <Card
              title="📄 Surat Domisili"
              desc="Surat keterangan tempat tinggal untuk keperluan administrasi seperti sekolah dan pekerjaan."
              link="/pelayanan/domisili"
            />
            <Card
              title="💸 SKTM"
              desc="Surat untuk pengajuan bantuan sosial atau beasiswa sebagai bukti kondisi ekonomi."
              link="/pelayanan/sktm"
            />
            <Card
              title="🪪 KTP / KK"
              desc="Surat pengantar untuk pembuatan atau pembaruan KTP dan Kartu Keluarga."
              link="/pelayanan/ktp-kk"
            />
          </div>
        )}
      </div>

      {/* ================= PENGADUAN ================= */}
      <div className="bg-emerald-600 p-8 rounded-2xl shadow-lg border border-emerald-500">
        <h2 className="text-xl font-bold text-white mb-6">
          Form Pengaduan Masyarakat
        </h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          {/* 2 kolom */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              placeholder="Nama Lengkap"
              onChange={handleChange}
              // PERBAIKAN: Teks hitam (text-slate-800) dan outline fokus hijau
              className="w-full border-0 p-3 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-sm"
            />
            <div className="relative w-full">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full appearance-none border-0 p-3 rounded-lg bg-white pr-10 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-sm"
                required
              >
                <option value="" disabled>Jenis Pengaduan</option>
                <option value="jalan">Jalan Rusak</option>
                <option value="sampah">Sampah</option>
                <option value="lampu">Lampu Jalan</option>
                <option value="lainnya">Lainnya</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* lainnya */}
          {form.category === "lainnya" && (
            <input
              name="customCategory"
              value={form.customCategory}
              placeholder="Tulis jenis pengaduan spesifik..."
              onChange={handleChange}
              className="w-full border-0 p-3 rounded-lg bg-white mt-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-sm"
              required
            />
          )}

          {form.category && form.category !== "" && (
            <div className="mt-4">
              {/* alamat */}
              <input
                name="address"
                value={form.address}
                placeholder="Alamat / Patokan Lokasi Lengkap"
                onChange={handleChange}
                className="w-full border-0 p-3 rounded-lg bg-white mt-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-sm"
                required
              />

              {/* deskripsi BESAR */}
              <textarea
                name="description"
                value={form.description}
                placeholder="Deskripsikan pengaduan secara lengkap..."
                onChange={handleChange}
                className="w-full border-0 p-4 rounded-lg mt-4 h-40 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-sm resize-y"
                required
              />

              {/* upload */}
              <div className="mt-6 bg-emerald-700/50 p-5 rounded-xl border border-emerald-500/50">
                <label className="block mb-2 text-sm font-semibold text-emerald-50">
                  Upload Bukti Foto
                </label>

                <label className="flex items-center justify-center bg-white border border-dashed border-emerald-300 p-4 rounded-lg cursor-pointer hover:bg-emerald-50 transition shadow-sm">
                  <span className="text-sm font-medium text-slate-600">
                    {form.image ? `✅ ${form.image.name}` : "📁 Pilih foto pengaduan"}
                  </span>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="hidden"
                    accept="image/*"
                  />
                </label>

                <p className="text-xs text-emerald-100 mt-2">
                  Maksimal 5MB (Format didukung: JPG/PNG)
                </p>
              </div>

              <button
                type="submit"
                // PERBAIKAN: Warna tombol diselaraskan jadi emerald gelap, bukan biru/kuning
                className="w-full bg-emerald-900 text-white font-bold p-4 rounded-xl mt-6 hover:bg-emerald-800 transition shadow-md text-lg"
              >
                Kirim Pengaduan Sekarang
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

// ================= CARD =================
function Card({ title, desc, link }: any) {
  // PERBAIKAN: Desain Card diperbarui agar tulisannya lebih kontras dan kotaknya lebih mewah
  return (
    <Link href={link}>
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md transition cursor-pointer h-full flex flex-col gap-3">
        <h3 className="font-bold text-lg text-emerald-800">{title}</h3>
        <div className="text-slate-600 text-sm leading-relaxed">{desc}</div>
      </div>
    </Link>
  );
}