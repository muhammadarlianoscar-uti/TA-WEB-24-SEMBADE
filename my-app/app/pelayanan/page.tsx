"use client";
import Link from "next/link";
import { useState } from "react";

export default function PelayananPage() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    customCategory: "",
    address: "",
    description: "",
    image: null as File | null,
  });

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

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Pelayanan Desa</h1>


      {/* ================= PENGADUAN ================= */}

      <div>
        <h2>Form Pengaduan Masyarakat</h2>

        <form onSubmit={handleSubmit}>
          {/* nama */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Nama"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg bg-white"
            />
            <select
              name="category"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg bg-white"
              required
            >
              <option value="">Jenis Pengaduan</option>
              <option value="jalan">Jalan Rusak</option>
              <option value="sampah">Sampah</option>
              <option value="lampu">Lampu Jalan</option>
              <option value="lainnya">Lainnya</option>
            </select>

          </div>

          {/* lainnya */}
          {form.category === "lainnya" && (
            <input
              name="customCategory"
              placeholder="Tulis jenis pengaduan"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg bg-white mt-4"
              required
            />
          )}

          {/* alamat */}
          <input
            name="address"
            placeholder="Alamat / Patokan Lokasi"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg bg-white mt-4"
            required
          />

          {/* deskripsi BESAR */}
          <textarea
            name="description"
            placeholder="Deskripsikan pengaduan secara lengkap..."
            onChange={handleChange}
            className="w-full border p-4 rounded-lg mt-4 h-44 bg-white"
            required
          />

          {/* upload */}
          <div className="mt-4">
            <label>
              Upload Foto
            </label>

            <div>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full text-sm"
              />
            </div>

            <p className="text-xs mt-1">Maksimal 5MB (jpg/png)</p>
          </div>

          <button>
            Kirim Pengaduan
          </button>
        </form>
      </div>
    </div>
  );
}



