"use client";
import Link from "next/link";
import { useState } from "react";

export default function PelayananPage() {
  const [open, setOpen] = useState(false);

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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const finalCategory =
      form.category === "lainnya" ? form.customCategory : form.category;

    const data = {
      ...form,
      category: finalCategory,
    };

    console.log("DATA:", data);
    alert("Pengaduan berhasil dikirim");
  };
  setForm(initialFormState);
  e.target.reset();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Pelayanan Desa</h1>

      {/* ================= ADMINISTRASI ================= */}
      <div className="mb-10">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center bg-green-600 text-white p-4 rounded-xl"
        >
          <span className="font-semibold">🏛️ Administrasi Desa</span>
          <span>{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div className="grid md:grid-cols-3 gap-4 mt-4">
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

      <div className="bg-green-600 p-6 rounded-xl shadow">
        <h2 className="font-semibold text-white font-semibold mb-8">
          Form Pengaduan Masyarakat
        </h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          {/* 2 kolom */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              placeholder="Nama"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg bg-white"
            />
            <div className="relative w-full">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full appearance-none border p-3 rounded-lg bg-white pr-10"
                required
              >
                <option value="" disabled>
                  Jenis Pengaduan
                </option>
                <option value="jalan">Jalan Rusak</option>
                <option value="sampah">Sampah</option>
                <option value="lampu">Lampu Jalan</option>
                <option value="lainnya">Lainnya</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* lainnya */}
          {form.category === "lainnya" && (
            <input
              name="customCategory"
              value={form.customCategory}
              placeholder="Tulis jenis pengaduan"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg bg-white mt-4"
              required
            />
          )}

          {form.category && form.category !== "" && (
            <>
              {/* alamat */}
              <input
                name="address"
                value={form.address}
                placeholder="Alamat / Patokan Lokasi"
                onChange={handleChange}
                className="w-full border p-3 rounded-lg bg-white mt-4"
                required
              />

              {/* deskripsi BESAR */}
              <textarea
                name="description"
                value={form.description}
                placeholder="Deskripsikan pengaduan secara lengkap..."
                onChange={handleChange}
                className="w-full border p-4 rounded-lg mt-4 h-44 bg-white"
                required
              />

              {/* upload */}
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-white">
                  Upload Foto
                </label>

                <label className="flex items-center justify-center bg-white border border-gray-300 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition text-gray-600">
                  <span className="text-sm">
                    {form.image ? form.image.name : "Pilih foto pengaduan"}
                  </span>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="hidden"
                    accept="image/*"
                  />
                </label>

                <p className="text-xs text-white mt-1">
                  Maksimal 5MB (jpg/png)
                </p>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 px-6 rounded-lg mt-6 hover:bg-yellow-400 transition font-medium"
              >
                Kirim Pengaduan
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

// ================= CARD =================
function Card({ title, desc, link }: any) {
  return (
    <Link href={link}>
      <div
        className="bg-green-600 text-white p-4 rounded-xl 
                      hover:bg-green-700 transition cursor-pointer 
                      h-40 shadow flex flex-col justify-between"
      >
        {/* Judul */}
        <h3 className="font-semibold text-lg">{title}</h3>

        {/* Deskripsi putih */}
        <div className="bg-white text-gray-700 text-sm p-2 rounded">{desc}</div>
      </div>
    </Link>
  );
}
