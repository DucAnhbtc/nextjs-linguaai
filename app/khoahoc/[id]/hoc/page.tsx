export type Lesson = {
  id: string; // ví dụ: "1-1-1" = courseId-week-lessonIndex
  courseId: number;
  week: number;
  order: number;
  title: string;
  type: "vocabulary" | "grammar" | "speaking" | "listening" | "review";
  duration: number; // phút
  content: {
    vocabulary?: { word: string; meaning: string; example: string }[];
    grammar?: { title: string; explanation: string; examples: string[] };
    dialogue?: { speaker: string; text: string }[];
    practice?: string[];
  };
};

export const lessons: Lesson[] = [
  // ========== KHÓA 1: Tiếng Anh từ mất gốc ==========
  // Tuần 1
  {
    id: "1-1-1",
    courseId: 1,
    week: 1,
    order: 1,
    title: "Hello & Goodbye",
    type: "vocabulary",
    duration: 15,
    content: {
      vocabulary: [
        { word: "Hello", meaning: "Xin chào", example: "Hello, how are you?" },
        { word: "Hi", meaning: "Chào (thân mật)", example: "Hi, nice to meet you." },
        { word: "Good morning", meaning: "Chào buổi sáng", example: "Good morning, everyone!" },
        { word: "Good afternoon", meaning: "Chào buổi chiều", example: "Good afternoon, teacher." },
        { word: "Good evening", meaning: "Chào buổi tối", example: "Good evening, sir." },
        { word: "Goodbye", meaning: "Tạm biệt", example: "Goodbye, see you later!" },
        { word: "See you", meaning: "Hẹn gặp lại", example: "See you tomorrow!" },
        { word: "Bye", meaning: "Tạm biệt (ngắn)", example: "Bye! Take care." },
      ],
      practice: [
        "Hãy chào bạn của bạn bằng tiếng Anh",
        "Nói 'Good morning' với giáo viên",
        "Tạm biệt người bạn khi rời đi",
      ],
    },
  },
  {
    id: "1-1-2",
    courseId: 1,
    week: 1,
    order: 2,
    title: "Số từ 1–100",
    type: "vocabulary",
    duration: 20,
    content: {
      vocabulary: [
        { word: "one", meaning: "1", example: "I have one book." },
        { word: "two", meaning: "2", example: "Two apples please." },
        { word: "three", meaning: "3", example: "She is three years old." },
        { word: "ten", meaning: "10", example: "I need ten dollars." },
        { word: "twenty", meaning: "20", example: "Twenty students are here." },
        { word: "fifty", meaning: "50", example: "It costs fifty thousand." },
        { word: "one hundred", meaning: "100", example: "One hundred percent!" },
      ],
      practice: [
        "Đếm từ 1 đến 20",
        "Nói số tuổi của bạn",
        "Nói số điện thoại của bạn",
      ],
    },
  },
  {
    id: "1-1-3",
    courseId: 1,
    week: 1,
    order: 3,
    title: "Giới thiệu tên",
    type: "speaking",
    duration: 15,
    content: {
      dialogue: [
        { speaker: "A", text: "Hello! What's your name?" },
        { speaker: "B", text: "My name is Minh. What's your name?" },
        { speaker: "A", text: "I'm Lan. Nice to meet you." },
        { speaker: "B", text: "Nice to meet you too!" },
      ],
      practice: [
        "Giới thiệu tên của bạn",
        "Hỏi tên người đối diện",
        "Nói 'Nice to meet you'",
      ],
    },
  },

  // Tuần 2
  {
    id: "1-2-1",
    courseId: 1,
    week: 2,
    order: 1,
    title: "Từ vựng gia đình",
    type: "vocabulary",
    duration: 18,
    content: {
      vocabulary: [
        { word: "father / dad", meaning: "Bố", example: "This is my father." },
        { word: "mother / mom", meaning: "Mẹ", example: "My mother is a teacher." },
        { word: "brother", meaning: "Anh/em trai", example: "I have one brother." },
        { word: "sister", meaning: "Chị/em gái", example: "She is my sister." },
        { word: "parents", meaning: "Bố mẹ", example: "My parents live in Hanoi." },
        { word: "family", meaning: "Gia đình", example: "I love my family." },
      ],
      practice: [
        "Giới thiệu các thành viên trong gia đình",
        "Nói số anh chị em của bạn",
      ],
    },
  },
  {
    id: "1-2-2",
    courseId: 1,
    week: 2,
    order: 2,
    title: "Màu sắc",
    type: "vocabulary",
    duration: 15,
    content: {
      vocabulary: [
        { word: "red", meaning: "Màu đỏ", example: "I like red." },
        { word: "blue", meaning: "Màu xanh dương", example: "The sky is blue." },
        { word: "green", meaning: "Màu xanh lá", example: "Green is my favorite color." },
        { word: "yellow", meaning: "Màu vàng", example: "The sun is yellow." },
        { word: "black", meaning: "Màu đen", example: "She has a black bag." },
        { word: "white", meaning: "Màu trắng", example: "I wear a white shirt." },
      ],
      practice: [
        "Nói màu sắc yêu thích của bạn",
        "Mô tả màu của đồ vật xung quanh",
      ],
    },
  },
  {
    id: "1-2-3",
    courseId: 1,
    week: 2,
    order: 3,
    title: "This / That",
    type: "grammar",
    duration: 15,
    content: {
      grammar: {
        title: "This / That",
        explanation:
          "This dùng cho vật ở gần. That dùng cho vật ở xa.",
        examples: [
          "This is my book. (gần)",
          "That is your bag. (xa)",
          "This is my sister.",
          "That is my house over there.",
        ],
      },
      practice: [
        "Chỉ vào đồ vật gần bạn và nói 'This is...'",
        "Chỉ vào đồ vật xa và nói 'That is...'",
      ],
    },
  },
];

// Helper functions
export function getLessonsByCourseId(courseId: number) {
  return lessons.filter((l) => l.courseId === courseId);
}

export function getLessonById(id: string) {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByWeek(courseId: number, week: number) {
  return lessons.filter((l) => l.courseId === courseId && l.week === week);
}
