import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Giao tiếp cơ bản",
    level: "Beginner",
    description: "Học các mẫu câu giao tiếp hàng ngày, chào hỏi, giới thiệu bản thân.",
    lessons: 24,
    duration: "4 tuần",
    color: "from-blue-500 to-cyan-400",
    badge: "Phổ biến",
  },
  {
    id: 2,
    title: "Giao tiếp nâng cao",
    level: "Intermediate",
    description: "Luyện nói tự tin trong công việc, thuyết trình và thảo luận nhóm.",
    lessons: 32,
    duration: "6 tuần",
    color: "from-purple-500 to-pink-400",
    badge: "Hot",
  },
  {
    id: 3,
    title: "Luyện phát âm chuẩn",
    level: "All levels",
    description: "AI phân tích và chỉnh sửa phát âm theo thời gian thực.",
    lessons: 18,
    duration: "3 tuần",
    color: "from-violet-500 to-indigo-400",
    badge: "AI",
  },
  {
    id: 4,
    title: "IELTS Speaking",
    level: "Advanced",
    description: "Luyện Speaking Part 1-2-3 với AI chấm điểm và góp ý chi tiết.",
    lessons: 40,
    duration: "8 tuần",
    color: "from-emerald-500 to-teal-400",
    badge: "Mới",
  },
];

export default function KhoaHocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
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

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
          <span>📚</span>
          <span>Khóa học được thiết kế bởi AI</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Chọn khóa học phù hợp với{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            trình độ của bạn
          </span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tất cả khóa học đều có AI đồng hành, luyện nói thực tế và nhận góp ý ngay lập tức.
        </p>
      </section>

      {/* Danh sách khóa học */}
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
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mb-5`}
              >
                {course.id === 1 && "🗣️"}
                {course.id === 2 && "💼"}
                {course.id === 3 && "🎤"}
                {course.id === 4 && "🎯"}
              </div>

              <div className="mb-1">
                <span className="text-sm font-medium text-slate-400">
                  {course.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                {course.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1.5">
                  📖 {course.lessons} bài học
                </span>
                <span className="flex items-center gap-1.5">
                  ⏱️ {course.duration}
                </span>
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
