import Link from "next/link";

export default function DangNhap() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
            L
          </div>
          <h1 className="text-2xl font-bold">Đăng nhập</h1>
          <p className="text-gray-500 text-sm mt-1">
            Chào mừng bạn quay lại LinguaAI
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-600">Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Đăng nhập
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Chưa có tài khoản?{" "}
          <Link
            href="/dangky"
            className="text-blue-600 font-medium hover:underline"
          >
            Đăng ký ngay
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
