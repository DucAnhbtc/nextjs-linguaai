"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lesson, Question } from "@/data/lessons";
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
  const practiceQuestions = lesson.content.practice || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = practiceQuestions[currentIndex];

  const isCorrect = (answer: string) => {
    if (!currentQuestion) return false;
    const correct = currentQuestion.correctAnswer;
    if (Array.isArray(correct)) {
      return correct.some(
        (c) => c.toLowerCase().trim() === answer.toLowerCase().trim()
      );
    }
    return correct.toLowerCase().trim() === answer.toLowerCase().trim();
  };

  const handleSelect = (answer: string) => {
    if (isChecked) return;
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    if (!selectedAnswer || isChecked) return;
    setIsChecked(true);
    if (isCorrect(selectedAnswer)) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < practiceQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsChecked(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsChecked(false);
    setScore(0);
    setFinished(false);
  };

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

          {/* ========== PHẦN LUYỆN TẬP TƯƠNG TÁC ========== */}
          {practiceQuestions.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <span>🎯</span> Luyện tập
                </h2>
                {!finished && (
                  <span className="text-sm text-slate-500">
                    Câu {currentIndex + 1}/{practiceQuestions.length}
                  </span>
                )}
              </div>

              {/* Thanh tiến độ */}
              {!finished && (
                <div className="w-full h-2 bg-slate-100 rounded-full mb-6 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{
                      width: `${
                        ((currentIndex + (isChecked ? 1 : 0)) /
                          practiceQuestions.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              )}

              {/* Kết quả cuối */}
              {finished ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">
                    {score >= practiceQuestions.length * 0.7 ? "🎉" : "💪"}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Hoàn thành!
                  </h3>
                  <p className="text-slate-600 mb-1">
                    Bạn đúng{" "}
                    <span className="font-bold text-blue-600">{score}</span>/
                    {practiceQuestions.length} câu
                  </p>
                  <p className="text-sm text-slate-500 mb-6">
                    {score >= practiceQuestions.length * 0.7
                      ? "Xuất sắc! Hãy tiếp tục bài tiếp theo."
                      : "Cố gắng thêm nhé, ôn lại từ vựng rồi làm lại."}
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleRestart}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition text-sm font-medium"
                    >
                      Làm lại
                    </button>
                  </div>
                </div>
              ) : currentQuestion ? (
                <div>
                  {/* Câu hỏi */}
                  <p className="text-lg font-medium text-slate-800 mb-5">
                    {currentQuestion.question}
                  </p>

                  {/* Multiple choice */}
                  {currentQuestion.type === "multiple_choice" &&
                    currentQuestion.options && (
                      <div className="space-y-3">
                        {currentQuestion.options.map((option) => {
                          let btnClass =
                            "w-full text-left px-4 py-3 rounded-xl border transition text-sm font-medium ";

                          if (!isChecked) {
                            btnClass +=
                              selectedAnswer === option
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-700";
                          } else {
                            if (isCorrect(option)) {
                              btnClass +=
                                "border-green-500 bg-green-50 text-green-700";
                            } else if (selectedAnswer === option) {
                              btnClass +=
                                "border-red-400 bg-red-50 text-red-600";
                            } else {
                              btnClass += "border-slate-100 text-slate-400";
                            }
                          }

                          return (
                            <button
                              key={option}
                              onClick={() => handleSelect(option)}
                              disabled={isChecked}
                              className={btnClass}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    )}

                  {/* Fill blank / Translate */}
                  {(currentQuestion.type === "fill_blank" ||
                    currentQuestion.type === "translate") && (
                    <div>
                      <input
                        type="text"
                        value={selectedAnswer || ""}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        disabled={isChecked}
                        placeholder="Nhập câu trả lời..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-none text-sm"
                      />
                      {isChecked && (
                        <p
                          className={`mt-3 text-sm font-medium ${
                            isCorrect(selectedAnswer || "")
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {isCorrect(selectedAnswer || "")
                            ? "✓ Chính xác!"
                            : `✗ Đáp án đúng: ${
                                Array.isArray(currentQuestion.correctAnswer)
                                  ? currentQuestion.correctAnswer.join(" / ")
                                  : currentQuestion.correctAnswer
                              }`}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Nút Kiểm tra / Tiếp theo */}
                  <div className="mt-6 flex justify-end">
                    {!isChecked ? (
                      <button
                        onClick={handleCheck}
                        disabled={!selectedAnswer}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
                      >
                        Kiểm tra
                      </button>
                    ) : (
                      <button
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                      >
                        {currentIndex < practiceQuestions.length - 1
                          ? "Câu tiếp theo →"
                          : "Xem kết quả"}
                      </button>
                    )}
                  </div>
                </div>
              ) : null}
            </section>
          )}
        </div>

        {/* Nút điều hướng bài học */}
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
