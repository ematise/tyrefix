"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      const data = await res.json();
      setError(data.error ?? "Eroare");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Admin Tyrefix</h1>
          <p className="text-gray-500 text-sm mt-1">Introdu parola pentru acces</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2" htmlFor="password">
              Parolă
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            {loading ? "Se verifică…" : "Intră"}
          </button>
        </form>
      </div>
    </div>
  );
}
