import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinguaAI - Học tiếng Anh với AI",
  description: "Học tiếng Anh giao tiếp thông minh hơn với AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header dùng chung cho mọi trang */}
        <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className="text-xl font-bold text-gray-800">LinguaAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Trang chủ
            </Link>
            <Link href="/khoahoc" className="hover:text-blue-600">
              Khóa học
            </Link>
            <Link href="/#tinhnang" className="hover:text-blue-600">
              Tính năng
            </Link>
            <Link href="/#vechungtoi" className="hover:text-blue-600">
              Về chúng tôi
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dangnhap"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              Đăng nhập
            </Link>
            <Link
              href="/dangky"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Đăng ký
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
