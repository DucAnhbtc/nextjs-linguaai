import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { getLessonById, getLessonsByCourseId } from "@/data/lessons";
import LessonClient from "./LessonClient";

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
    <LessonClient
      course={course}
      lesson={lesson}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
    />
  );
}
