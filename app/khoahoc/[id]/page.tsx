import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = getCourseById(Number(id));

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
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

      <section className="max-w-5xl mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="text-xs font-medium text-blue-600 mb-2">
              {course.phase}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-medium text-slate-400">
                {course.level}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                {course.badge}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {course.title}
            </h1>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {course.longDescription}
            </p>

            <div className="flex flex-wrap gap-5 text-sm text-slate-500 mb-8">
              <span>📖 {course.lessons} bài học</span>
              <span>⏱️ {course.duration}</span>
              <span>🤖 AI đồng hành</span>
            </div>

            <Link
              href={`/khoahoc/${course.id}/hoc`}
              className="inline-block px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Bắt đầu học ngay
            </Link>
          </div>

          <div
            className={`w-full md:w-48 h-48 rounded-3xl bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl shadow-xl shrink-0`}
          >
            {course.icon}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              Bạn sẽ nhận được gì?
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-100"
                >
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              Lộ trình học
            </h2>
            <div className="space-y-4">
              {course.curriculum.map((week) => (
                <div
                  key={week.week}
                  className="bg-white rounded-2xl border border-slate-100 p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold flex items-center justify-center">
                      {week.week}
                    </span>
                    <h3 className="font-semibold text-slate-900">
                      {week.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 ml-11">
                    {week.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="text-sm text-slate-600 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sticky top-24">
            <h3 className="font-bold text-slate-900 mb-4">Thông tin khóa học</h3>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div className="flex justify-between">
                <span>Số bài học</span>
                <span className="font-medium text-slate-900">
                  {course.lessons}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Thời lượng</span>
                <span className="font-medium text-slate-900">
                  {course.duration}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Trình độ</span>
                <span className="font-medium text-slate-900">{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span>AI hỗ trợ</span>
                <span className="font-medium text-green-600">Có</span>
              </div>
            </div>

            <Link
              href={`/khoahoc/${course.id}/hoc`}
              className="block w-full text-center py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Bắt đầu học ngay
            </Link>
            <p className="text-center text-xs text-slate-400 mt-3">
              Miễn phí • Không cần thẻ tín dụng
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
