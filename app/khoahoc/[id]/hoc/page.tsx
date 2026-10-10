import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { getLessonsByCourseId } from "@/data/lessons";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HocPage({ params }: Props) {
  const { id } = await params;
  const courseId = Number(id);
  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  const courseLessons = getLessonsByCourseId(courseId);

  // Nhóm bài học theo tuần
  const lessonsByWeek = course.curriculum.map((week) => {
    const weekLessons = courseLessons.filter((l) => l.week === week.week);
    return {
      ...week,
      lessonsData: weekLessons,
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={`/khoahoc/${course.id}`}
            className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            ← Quay lại khóa học
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{course.icon}</span>
            <span className="font-semibold text-slate-800 hidden sm:block">
              {course.title}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Bắt đầu học: {course.title}
          </h1>
          <p className="text-slate-600">
            Chọn tuần và bài học bạn muốn học
          </p>
        </div>

        {/* Danh sách tuần + bài học */}
        <div className="space-y-6">
          {lessonsByWeek.map((week) => (
            <div
              key={week.week}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold flex items-center justify-center">
                  {week.week}
                </span>
                <h2 className="font-semibold text-slate-900">
                  Tuần {week.week}: {week.title}
                </h2>
                <span className="ml-auto text-xs text-slate-400">
                  {week.lessonsData.length > 0
                    ? `${week.lessonsData.length} bài`
                    : "Sắp có"}
                </span>
              </div>

              <div className="divide-y divide-slate-50">
                {week.lessonsData.length > 0 ? (
                  week.lessonsData.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/khoahoc/${course.id}/hoc/${lesson.id}`}
                      className="flex items-center justify-between px-5 py-4 hover:bg-blue-50/50 transition group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-medium flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600">
                          {lesson.order}
                        </span>
                        <div>
                          <span className="text-slate-700 group-hover:text-blue-700 font-medium">
                            {lesson.title}
                          </span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                              {lesson.type}
                            </span>
                            <span className="text-xs text-slate-400">
                              {lesson.duration} phút
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-slate-400 group-hover:text-blue-500 text-sm">
                        Học →
                      </span>
                    </Link>
                  ))
                ) : (
                  week.lessons.map((lessonTitle, index) => (
                    <div
                      key={lessonTitle}
                      className="flex items-center justify-between px-5 py-4 opacity-60"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 text-xs font-medium flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-slate-500">{lessonTitle}</span>
                      </div>
                      <span className="text-xs text-slate-400">Sắp ra mắt</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
