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
  },
  {
    id: 2,
    title: "Giao tiếp nâng cao",
    level: "Intermediate",
    description: "Luyện nói tự tin trong công việc, thuyết trình và thảo luận nhóm.",
    lessons: 32,
    duration: "6 tuần",
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "Luyện phát âm chuẩn",
    level: "All levels",
    description: "AI phân tích và chỉnh sửa phát âm theo thời gian thực.",
    lessons: 18,
    duration: "3 tuần",
    color: "from-violet-500 to-indigo-400",
  },
  {
    id: 4,
    title: "IELTS Speaking",
    level: "Advanced",
    description: "Luyện Speaking Part 1-2-3 với AI chấm điểm và góp ý chi tiết.",
    lessons: 40,
    duration: "8 tuần",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const course = courses.find((c) => c.id === Number(params.id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy khóa học</h1>
          <Link href="/khoahoc" className="text-blue-600 hover:underline">
            ← Quay lại danh sách khóa học
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/khoahoc"
            className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            ← Quay lại khóa học
          </Link>
          <Link href="/" className="text-sm text-slate-600 hover:text-blue-600">
            Trang chủ
          </Link>
        </div>
      </header>

      {/* Nội dung chi tiết */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-3xl mb-6`}
        >
          {course.id === 1 && "🗣️"}
          {course.id === 2 && "💼"}
          {course.id === 3 && "🎤"}
          {course.id === 4 && "🎯"}
        </div>

        <div className="mb-2 text-sm font-medium text-slate-400">
          {course.level}
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {course.title}
        </h1>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          {course.description}
        </p>

        <div className="flex gap-6 text-slate-500 mb-10">
          <span>📖 {course.lessons} bài học</span>
          <span>⏱️ {course.duration}</span>
        </div>

        <button className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Bắt đầu học ngay
        </button>
      </div>
    </div>
  );
}
