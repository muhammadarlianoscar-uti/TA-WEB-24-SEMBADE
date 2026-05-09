"use client"
import { useState } from "react"

export default function KTPPage() {
  const [data, setData] = useState({
    name: "",
    nik: "",
    address: "",
    type: "",
    purpose: ""
  })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="p-6 max-w-xl mx-auto">

      <div className="bg-white p-6 rounded-2xl shadow">

        <h1 className="text-xl font-bold mb-4">🪪 KTP / KK</h1>

        <div className="bg-yellow-50 border p-3 rounded mb-4 text-sm">
          KK & Surat RT
        </div>

        <div className="bg-gray-50 border p-4 rounded-xl mb-4">
          <p className="font-semibold mb-2">Data Diri</p>

          <input name="name" onChange={handleChange} placeholder="Nama"
            className="w-full border p-2 rounded mb-2" />

          <input name="nik" onChange={handleChange} placeholder="NIK"
            className="w-full border p-2 rounded mb-2" />

          <input name="address" onChange={handleChange} placeholder="Alamat"
            className="w-full border p-2 rounded" />
        </div>

        <div className="bg-gray-50 border p-4 rounded-xl mb-4">
          <p className="font-semibold mb-2">Pengajuan</p>

          <select name="type" onChange={handleChange}
            className="w-full border p-2 rounded mb-2">
            <option value="">Pilih Jenis</option>
            <option value="ktp">KTP</option>
            <option value="kk">KK</option>
          </select>

          <textarea name="purpose" onChange={handleChange}
            className="w-full border p-2 rounded h-24"
            placeholder="Keperluan" />
        </div>

        <button className="w-full bg-green-600 text-white p-3 rounded-xl">
          Kirim
        </button>

      </div>
    </div>
  )
}
