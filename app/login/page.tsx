'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HalamanRegister() {
  const router = useRouter();

  // State Form & UI
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    // Validasi Panjang NIK di Frontend
    if (nik.length !== 16) {
      setError('Nomor Induk Kependudukan (NIK) harus tepat 16 digit.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, nik, username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Terjadi kesalahan saat mendaftar.');
        setIsLoading(false);
      } else {
        setSuccess('Registrasi berhasil! Mengalihkan ke halaman masuk...');