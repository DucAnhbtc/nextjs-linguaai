import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            L
          </div>
          <span className="text-xl font-bold text-gray-800">LinguaAI</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Trang chủ
          </Link>
          <Link href="/khoahoc" className="hover:text-blue-600">
            Khóa học
          </Link>
          <a href="#" className="hover:text-blue-600">
            Tính năng
          </a>
          <a href="#" className="hover:text-blue-600">
            Về chúng tôi
          </a>
        </nav>

        <Link
          href="/khoahoc"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          Bắt đầu học →
        </Link>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>✨</span> AI đồng hành cùng bạn
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Học tiếng Anh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              giao tiếp thật dễ dàng
            </span>{" "}
            <br />
            cùng LinguaAI
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Luyện nói thực tế, được AI góp ý ngay lập tức.  
            Bắt đầu miễn phí – nâng cấp khi cần.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-7 py-3.5 rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2">
              🚀 Học thử miễn phí 🚀
            </button>

            {/* Nút này giờ đã nhấn được */}
            <Link
              href="/khoahoc"
              className="border border-gray-300 bg-white px-7 py-3.5 rounded-full font-medium hover:bg-gray-50 transition flex items-center gap-2"
            >
              ▶ Xem khóa học
            </Link>
          </div>

          {/* Small features */}
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">⚡</span> Luyện nói AI
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">📚</span> Lộ trình cá nhân hóa
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">🛡️</span> Học mọi lúc, mọi nơi
            </div>
          </div>
        </div>

        {/* Right side - Robot */}
        <div className="relative flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center relative">
            <div className="text-8xl">🤖</div>
            <div className="absolute -top-4 -left-6 bg-white shadow-lg rounded-2xl px-4 py-2 text-sm font-medium">
              Hello!
            </div>
            <div className="absolute top-10 -right-8 bg-white shadow-lg rounded-2xl px-4 py-2 text-sm font-medium">
              How are you?
            </div>
            <div className="absolute bottom-16 -left-10 bg-blue-600 text-white shadow-lg rounded-2xl px-4 py-2 text-sm font-medium">
              Listening
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
              💬
            </div>
            <h3 className="font-semibold text-lg mb-2">Nói tiếng Anh tự tin</h3>
            <p className="text-gray-600 text-sm">
              Luyện phát âm, giao tiếp trong các tình huống thực tế.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4">
              🧠
            </div>
            <h3 className="font-semibold text-lg mb-2">AI thông minh, cá nhân hóa</h3>
            <p className="text-gray-600 text-sm">
              Hiểu trình độ và nhu cầu học của bạn.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">
              📊
            </div>
            <h3 className="font-semibold text-lg mb-2">Tiến bộ rõ rệt</h3>
            <p className="text-gray-600 text-sm">
              Theo dõi kết quả học tập mỗi ngày.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl mb-4">
              ❤️
            </div>
            <h3 className="font-semibold text-lg mb-2">Học thật vui</h3>
            <p className="text-gray-600 text-sm">
              Giao diện hiện đại, thân thiện, truyền cảm hứng.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t">
        © 2026 LinguaAI. Học tiếng Anh thông minh hơn với AI.
      </footer>
    </main>
  );
}
