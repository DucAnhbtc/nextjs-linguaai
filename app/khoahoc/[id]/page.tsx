import Link from "next/link";
import { notFound } from "next/navigation";

const courses = [
  {
    id: 1,
    title: "Giao tiếp cơ bản",
    level: "Beginner",
    description:
      "Học các mẫu câu giao tiếp hàng ngày, chào hỏi, giới thiệu bản thân.",
    longDescription:
      "Khóa học dành cho người mới bắt đầu. Bạn sẽ học cách chào hỏi, giới thiệu bản thân, hỏi đường, gọi món và giao tiếp trong các tình huống đời thường một cách tự tin.",
    lessons: 24,
    duration: "4 tuần",
    color: "from-blue-500 to-cyan-400",
    badge: "Phổ biến",
    icon: "🗣️",
  },
  {
    id: 2,
    title: "Giao tiếp nâng cao",
    level: "Intermediate",
    description:
      "Luyện nói tự tin trong công việc, thuyết trình và thảo luận nhóm.",
    longDescription:
      "Khóa học giúp bạn giao tiếp chuyên nghiệp trong môi trường công sở: họp nhóm, thuyết trình, đàm phán và networking bằng tiếng Anh.",
    lessons: 32,
    duration: "6 tuần",
    color: "from-purple-500 to-pink-400",
    badge: "Hot",
    icon: "💼",
  },
  {
    id: 3,
    title: "Luyện phát âm chuẩn",
    level: "All levels",
    description: "AI phân tích và chỉnh sửa phát âm theo thời gian thực.",
    longDescription:
      "Khóa học tập trung vào phát âm chuẩn. AI sẽ phân tích giọng nói của bạn theo thời gian thực và chỉ ra lỗi cần sửa.",
    lessons: 18,
    duration: "3 tuần",
    color: "from-violet-500 to-indigo-400",
    badge: "AI",
    icon: "🎤",
  },
  {
    id: 4,
    title: "IELTS Speaking",
    level: "Advanced",
    description:
      "Luyện Speaking Part 1-2-3 với AI chấm điểm và góp ý chi tiết.",
    longDescription:
      "Khóa học chuyên sâu luyện IELTS Speaking Part 1, 2, 3. AI sẽ chấm điểm theo band, chỉ ra lỗi và đưa ra cách cải thiện cụ thể.",
    lessons: 40,
    duration: "8 tuần",
    color: "from-emerald-500 to-teal-400",
    badge: "Mới",
    icon: "🎯",
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    notFound();
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
          {course.icon}
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-medium text-slate-400">
            {course.level}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
            {course.badge}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {course.title}
        </h1>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          {course.longDescription}
        </p>

        <div className="flex gap-6 text-slate-500 mb-10">
          <span>📖 {course.lessons} bài học</span>
          <span>⏱️ {course.duration}</span>
          <span>🤖 AI đồng hành</span>
        </div>

        <button className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          Bắt đầu học ngay
        </button>
      </div>
    </div>
  );
}
