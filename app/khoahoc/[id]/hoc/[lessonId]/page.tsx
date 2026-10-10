import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { getLessonById, getLessonsByCourseId } from "@/data/lessons";

type Props = {
  params: Promise<{ id: string; lessonId: string }>;
};

export default async function LessonPage({ params }: Props) {
  const { id, lessonId } = await params;
  const courseId = Number(id);
  const course = getCourseById(courseId);
  const lesson = getLessonById(lessonId);

  if (!course || !lesson || lesson.courseId !== courseId) {
    notFound();
  }

  const allLessons = getLessonsByCourseId(courseId);
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={`/khoahoc/${course.id}/hoc`}
            className="flex items-center gap-2 text-blue-600 font-medium hover:underline text-sm"
          >
            ← Danh sách bài học
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>{course.icon}</span>
            <span className="hidden sm:inline">{course.title}</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Tiêu đề bài học */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Tuần {lesson.week}</span>
            <span>•</span>
            <span className="capitalize">{lesson.type}</span>
            <span>•</span>
            <span>{lesson.duration} phút</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {lesson.title}
          </h1>
        </div>

        {/* Nội dung bài học */}
        <div className="space-y-8">
          {/* Từ vựng */}
          {lesson.content.vocabulary && (
            <section className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span>📖</span> Từ vựng
              </h2>
              <div className="space-y-3">
                {lesson.content.vocabulary.map((item) => (
                  <div
                    key={item.word}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition"
                  >
                    <div className="font-semibold text-blue-600 min-w-[120px]">
                      {item.word}
                    </div>
                    <div className="text-slate-700">{item.meaning}</div>
                    <div className="text-sm text-slate-500 italic sm:ml-auto">
                      {item.example}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Ngữ pháp */}
          {lesson.content.grammar && (
            <section className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span>📝</span> Ngữ pháp: {lesson.content.grammar.title}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                {lesson.content.grammar.explanation}
              </p>
              <div className="space-y-2">
                {lesson.content.grammar.examples.map((ex) => (
                  <div
                    key={ex}
                    className="px-4 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm"
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hội thoại */}
          {lesson.content.dialogue && (
            <section className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span>💬</span> Hội thoại mẫu
              </h2>
              <div className="space-y-3">
                {lesson.content.dialogue.map((line, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      line.speaker === "A" ? "" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                        line.speaker === "A"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {line.speaker}
                    </div>
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm max-w-[80%] ${
                        line.speaker === "A"
                          ? "bg-blue-50 text-slate-800"
                          : "bg-green-50 text-slate-800"
                      }`}
                    >
                      {line.text}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Luyện tập */}
          {lesson.content.practice && (
            <section className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span>🎯</span> Luyện tập
              </h2>
              <div className="space-y-3">
                {lesson.content.practice.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-700">{task}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Nút điều hướng */}
        <div className="mt-12 flex items-center justify-between gap-4">
          {prevLesson ? (
            <Link
              href={`/khoahoc/${course.id}/hoc/${prevLesson.id}`}
              className="flex-1 px-5 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition text-sm font-medium text-center"
            >
              ← {prevLesson.title}
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextLesson ? (
            <Link
              href={`/khoahoc/${course.id}/hoc/${nextLesson.id}`}
              className="flex-1 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium text-center"
            >
              {nextLesson.title} →
            </Link>
          ) : (
            <Link
              href={`/khoahoc/${course.id}/hoc`}
              className="flex-1 px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition text-sm font-medium text-center"
            >
              Hoàn thành ✓
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
