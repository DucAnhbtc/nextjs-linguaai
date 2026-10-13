"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  password: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function DangKy() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || !trimmedEmail || !password || !confirm) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (trimmedName.length < 2) {
      setError("Họ tên phải có ít nhất 2 ký tự");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Email không hợp lệ (ví dụ: ten@gmail.com)");
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu tối thiểu 6 ký tự");
      return;
    }

    if (password !== confirm) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    // Đọc danh sách user
    let users: User[] = [];
    try {
      users = JSON.parse(localStorage.getItem("aunora_users") || "[]");
    } catch {
      users = [];
    }

    console.log("Danh sách user hiện có:", users); // xem trong F12 → Console

    const exists = users.some((u) => u.email === trimmedEmail);
    if (exists) {
      setError("Email này đã được đăng ký. Hãy đăng nhập.");
      return;
    }

    users.push({
      name: trimmedName,
      email: trimmedEmail,
      password,
    });
    localStorage.setItem("aunora_users", JSON.stringify(users));

    localStorage.setItem("aunora_logged_in", "true");
    localStorage.setItem(
      "aunora_user",
      JSON.stringify({ name: trimmedName, email: trimmedEmail })
    );

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
            A
          </div>
          <h1 className="text-2xl font-bold">Đăng ký tài khoản</h1>
          <p className="text-gray-500 text-sm mt-1">
            Bắt đầu học tiếng Anh miễn phí với AI
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ten@gmail.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tối thiểu 6 ký tự"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Tạo tài khoản
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Đã có tài khoản?{" "}
          <Link href="/dangnhap" className="text-blue-600 font-medium hover:underline">
            Đăng nhập
          </Link>
        </p>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            ← Về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
