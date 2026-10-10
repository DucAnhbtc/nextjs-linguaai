import Link from "next/link";
import { courses } from "@/data/courses";

export default function KhoaHocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className="text-xl font-bold text-slate-800">LinguaAI</span>
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            ← Về trang chủ
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
          <span>📅</span>
          <span>Lộ trình 12 tháng • Từ mất gốc đến giao tiếp thành thạo</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Chọn khóa học theo{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            lộ trình của bạn
          </span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          8 khóa học có thể học song song. Tổng thời gian khoảng 12 tháng tùy
          trình độ và thời gian học mỗi ngày (khuyến nghị 2 giờ/ngày).
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-3xl border border-slate-100 p-6 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="absolute top-5 right-5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                  {course.badge}
                </span>
              </div>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mb-4`}
              >
                {course.icon}
              </div>

              <div className="text-xs font-medium text-blue-600 mb-1">
                {course.phase}
              </div>

              <div className="mb-1">
                <span className="text-sm font-medium text-slate-400">
                  {course.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                {course.title}
              </h3>

              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span>📖 {course.lessons} bài học</span>
                <span>⏱️ {course.duration}</span>
              </div>

              <Link
                href={`/khoahoc/${course.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-blue-600 transition"
              >
                Xem chi tiết →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
