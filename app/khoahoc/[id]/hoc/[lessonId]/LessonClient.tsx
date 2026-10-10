
"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lesson } from "@/data/lessons";
import type { Course } from "@/data/courses";

type Props = {
  course: Course;
  lesson: Lesson;
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
};

export default function LessonClient({
  course,
  lesson,
  prevLesson,
  nextLesson,
}: Props) {
  const questions = lesson.content.practice || lesson.questions || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  console.log("Questions:", questions); // ← xem trong Console

  const q = questions[current];

  const checkAnswer = (ans: string) => {
    if (!q) return false;
    const correct = q.correctAnswer;
    if (Array.isArray(correct)) {
      return correct.some((c) => c.toLowerCase() === ans.toLowerCase());
    }
    return correct.toLowerCase() === ans.toLowerCase();
  };

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);
    if (checkAnswer(selected)) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setChecked(false);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={`/khoahoc/${course.id}/hoc`}
            className="text-blue-600 font-medium hover:underline text-sm"
          >
            ← Danh sách bài học
          </Link>
          <div className="text-sm text-slate-500">
            {course.icon} {course.title}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="text-sm text-slate-500 mb-2">
            Tuần {lesson.week} • {lesson.type} • {lesson.duration} phút
          </div>
          <h1 className="text-3xl font-bold text-slate-900">{lesson.title}</h1>
        </div>

        {/* Từ vựng */}
        {lesson.content.vocabulary && (
          <section className="bg-white rounded-2xl border p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">📖 Từ vựng</h2>
            <div className="space-y-3">
              {lesson.content.vocabulary.map((item) => (
                <div
                  key={item.word}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-xl bg-slate-50"
                >
                  <div className="font-semibold text-blue-600 min-w-[100px]">
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

        {/* Hội thoại */}
        {lesson.content.dialogue && (
          <section className="bg-white rounded-2xl border p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">💬 Hội thoại</h2>
            <div className="space-y-3">
              {lesson.content.dialogue.map((line, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${line.speaker === "B" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      line.speaker === "A"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {line.speaker}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${
                      line.speaker === "A" ? "bg-blue-50" : "bg-green-50"
                    }`}
                  >
                    {line.text}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LUYỆN TẬP */}
        <section className="bg-white rounded-2xl border p-6">
          <h2 className="text-lg font-semibold mb-4">
            🎯 Luyện tập ({questions.length} câu)
          </h2>

          {questions.length === 0 ? (
            <p className="text-red-500">Không có câu hỏi nào!</p>
          ) : done ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">
                {score >= questions.length * 0.7 ? "🎉" : "💪"}
              </div>
              <h3 className="text-2xl font-bold mb-2">Hoàn thành!</h3>
              <p className="mb-4">
                Đúng <b className="text-blue-600">{score}</b>/{questions.length} câu
              </p>
              <button
                onClick={() => {
                  setCurrent(0);
                  setSelected(null);
                  setChecked(false);
                  setScore(0);
                  setDone(false);
                }}
                className="px-5 py-2 rounded-xl border text-sm"
              >
                Làm lại
              </button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-slate-500 mb-2">
                Câu {current + 1}/{questions.length}
              </p>
              <p className="text-lg font-medium mb-5">{q?.question}</p>

              {/* Multiple choice */}
              {q?.type === "multiple_choice" && q.options && (
                <div className="space-y-3 mb-6">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => !checked && setSelected(opt)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${
                        selected === opt
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:bg-slate-50"
                      } ${
                        checked
                          ? checkAnswer(opt)
                            ? "border-green-500 bg-green-50"
                            : selected === opt
                            ? "border-red-400 bg-red-50"
                            : ""
                          : ""
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Fill / Translate */}
              {(q?.type === "fill_blank" || q?.type === "translate") && (
                <div className="mb-6">
                  <input
                    type="text"
                    value={selected || ""}
                    onChange={(e) => setSelected(e.target.value)}
                    disabled={checked}
                    placeholder="Nhập đáp án..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"
                  />
                  {checked && (
                    <p
                      className={`mt-2 text-sm ${
                        checkAnswer(selected || "")
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {checkAnswer(selected || "")
                        ? "✓ Đúng!"
                        : `✗ Đáp án: ${q.correctAnswer}`}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-end">
                {!checked ? (
                  <button
                    onClick={handleCheck}
                    disabled={!selected}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm disabled:opacity-40"
                  >
                    Kiểm tra
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm"
                  >
                    {current + 1 < questions.length
                      ? "Câu tiếp →"
                      : "Xem kết quả"}
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Điều hướng */}
        <div className="mt-12 flex gap-4">
          {prevLesson ? (
            <Link
              href={`/khoahoc/${course.id}/hoc/${prevLesson.id}`}
              className="flex-1 px-5 py-3 rounded-xl border text-center text-sm"
            >
              ← {prevLesson.title}
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextLesson ? (
            <Link
              href={`/khoahoc/${course.id}/hoc/${nextLesson.id}`}
              className="flex-1 px-5 py-3 rounded-xl bg-blue-600 text-white text-center text-sm"
            >
              {nextLesson.title} →
            </Link>
          ) : (
            <Link
              href={`/khoahoc/${course.id}/hoc`}
              className="flex-1 px-5 py-3 rounded-xl bg-green-600 text-white text-center text-sm"
            >
              Hoàn thành ✓
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
