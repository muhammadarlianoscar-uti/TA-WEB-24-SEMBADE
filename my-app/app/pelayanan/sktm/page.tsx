"use client"
import { useState } from "react"

export default function SKTMPage() {
  const [data, setData] = useState({
    name: "",
    nik: "",
    address: "",
    job: "",
    income: ""
  })

  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleFile = (e: any) => {
    setFile(e.target.files[0])
  }

  return (
    <div className="p-6 max-w-xl mx-auto">

      <div className="bg-white p-6 rounded-2xl shadow">

        <h1 className="text-xl font-bold mb-4">💸 SKTM</h1>

        <div className="bg-yellow-50 border p-3 rounded mb-4 text-sm">
          KTP, KK, Surat RT
        </div>

        <div className="bg-gray-50 border p-4 rounded-xl mb-4">
          <p className="font-semibold mb-2">Data Diri</p>

          <input name="name" onChange={handleChange} placeholder="Nama"
            className="w-full border p-2 rounded mb-2" />

          <input name="nik" onChange={handleChange} placeholder="NIK"
            className="w-full border p-2 rounded mb-2" />

          <input name="address" onChange={handleChange} placeholder="Alamat"
            className="w-full border p-2 rounded" />
          
          <input name="purpose" onChange={handleChange} placeholder="Keperluan"
            className="w-full border p-2 mt-2 rounded" />
        </div>

<div className="bg-gray-50 border p-4 rounded-xl mb-4">
  <p className="font-semibold mb-2">Kondisi</p>

  {/* Input Pekerjaan */}
  <input 
    name="job" 
    value={data.job}
    onChange={handleChange} 
    placeholder="Pekerjaan"
    className="w-full border p-2 rounded mb-2" 
  />

  {/* Dropdown Penghasilan */}
  <select 
    name="income" 
    value={data.income}
    onChange={handleChange}
    className="w-full border p-2 rounded bg-white text-gray-700"
    required
  >
    <option value="">Pilih Penghasilan Per Bulan</option>
    <option value="< 1jt">Kurang dari Rp 1.000.000</option>
    <option value="1jt - 2jt">Rp 1.000.000 - Rp 2.000.000</option>
    <option value="2jt - 3jt">Rp 2.000.000 - Rp 3.000.000</option>
    <option value="3jt - 5jt">Rp 3.000.000 - Rp 5.000.000</option>
    <option value="> 5jt">Lebih dari Rp 5.000.000</option>
  </select>
</div>

        <div className="bg-blue-100 border border-blue-300 p-1 rounded text-center mb-4">
          <p>Upload KTP</p>
          <input type="file" onChange={handleFile} />
        </div>
        <div className="bg-blue-100 border border-blue-300 p-1 rounded text-center mb-4">
          <p>Upload KK</p>
          <input type="file" onChange={handleFile} />
        </div>
        <div className="bg-blue-100 border border-blue-300 p-1 rounded text-center mb-4">
          <p>Upload Surat RT</p>
          <input type="file" onChange={handleFile} />
        </div>

        <button className="w-full bg-green-600 text-white p-3 rounded-xl">
          Kirim
        </button>

      </div>
    </div>
  )
}
