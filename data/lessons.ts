import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonById, getLessonsByCourseId, Question } from "@/data/lessons";

interface PageProps {
  params: {
    id: string;
    lessonId: string;
  };
}

export default function LessonPage({ params }: PageProps) {
  const courseId = Number(params.id);
  const lesson = getLessonById(params.lessonId);

  if (!lesson || lesson.courseId !== courseId) {
    notFound();
  }

  const allLessons = getLessonsByCourseId(courseId).sort((a, b) => {
    if (a.week !== b.week) return a.week - b.week;
    return a.order - b.order;
  });

  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href={`/khoahoc/${courseId}/hoc`}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            ← Danh sách bài học
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span>🌱</span>
            <span>Tiếng Anh từ mất gốc</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-sm text-slate-500 mb-1">
            Tuần {lesson.week} • {lesson.type} • {lesson.duration} phút
          </p>
          <h1 className="text-3xl font-bold text-slate-900">{lesson.title}</h1>
        </div>

        {lesson.content.vocabulary && lesson.content.vocabulary.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">📖 Từ vựng</h2>
            <div className="space-y-3">
              {lesson.content.vocabulary.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-slate-100 last:border-0"
                >
                  <div className="sm:w-36 font-semibold text-blue-600">{item.word}</div>
                  <div className="sm:w-40 text-slate-700">{item.meaning}</div>
                  <div className="flex-1 text-slate-500 italic text-sm">{item.example}</div>
                  {item.phonetic && (
                    <div className="text-xs text-slate-400 font-mono">{item.phonetic}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {lesson.content.dialogue && lesson.content.dialogue.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">💬 Hội thoại mẫu</h2>
            <div className="space-y-4">
              {lesson.content.dialogue.map((line, idx) => (
                <div
                  key={idx}
                  className={`flex ${line.speaker === "B" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      line.speaker === "A"
                        ? "bg-blue-100 text-blue-900 rounded-bl-none"
                        : "bg-emerald-100 text-emerald-900 rounded-br-none"
                    }`}
                  >
                    <span className="font-semibold mr-2">{line.speaker}</span>
                    {line.text}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {lesson.content.practice && lesson.content.practice.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">🎯 Luyện tập</h2>
            <div className="space-y-5">
              {lesson.content.practice.map((task, index) => (
                <QuestionCard key={task.id} task={task} index={index} />
              ))}
            </div>
          </section>
        )}

        {lesson.miniTest && lesson.miniTest.length > 0 && (
          <section className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">📝 Bài kiểm tra nhỏ</h2>
            <p className="text-sm text-slate-500 mb-5">
              Làm bài để kiểm tra mức độ nắm vững kiến thức
            </p>
            <div className="space-y-5">
              {lesson.miniTest.map((task, index) => (
                <QuestionCard key={task.id} task={task} index={index} isTest />
              ))}
            </div>
          </section>
        )}

        <div className="flex items-center justify-between gap-4 pt-4">
          {prevLesson ? (
            <Link
              href={`/khoahoc/${courseId}/hoc/${prevLesson.id}`}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-medium"
            >
              ← {prevLesson.title}
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/khoahoc/${courseId}/hoc/${nextLesson.id}`}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
            >
              {nextLesson.title} →
            </Link>
          ) : (
            <Link
              href={`/khoahoc/${courseId}/hoc`}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
            >
              Hoàn thành tuần →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

function QuestionCard({
  task,
  index,
  isTest = false,
}: {
  task: Question;
  index: number;
  isTest?: boolean;
}) {
  return (
    <div
      className={`p-4 rounded-xl border ${
        isTest ? "border-amber-200 bg-amber-50/50" : "border-slate-200 bg-slate-50/50"
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
            isTest ? "bg-amber-200 text-amber-800" : "bg-blue-100 text-blue-700"
          }`}
        >
          {index + 1}
        </span>
        <p className="text-slate-800 font-medium pt-0.5">{task.question}</p>
      </div>

      {task.type === "multiple_choice" && task.options && (
        <div className="ml-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {task.options.map((opt) => (
            <button
              key={opt}
              className="text-left px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition text-sm"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {(task.type === "fill_blank" || task.type === "translate") && (
        <div className="ml-10">
          <input
            type="text"
            placeholder="Nhập câu trả lời..."
            className="w-full max-w-md px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      )}
    </div>
  );
}
