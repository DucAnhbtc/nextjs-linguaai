export type Question = {
  id: string;
  type: "multiple_choice" | "fill_blank" | "translate" | "reorder";
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
};

export type Lesson = {
  id: string;
  courseId: number;
  week: number;
  order: number;
  title: string;
  type: "vocabulary" | "grammar" | "speaking" | "listening" | "review";
  duration: number;
  content: {
    vocabulary?: {
      word: string;
      meaning: string;
      example: string;
      phonetic?: string;
    }[];
    grammar?: {
      title: string;
      explanation: string;
      examples: string[];
    };
    dialogue?: {
      speaker: string;
      text: string;
    }[];
    practice?: Question[];
  };
  questions: Question[];
  miniTest: Question[];
};

export const lessons: Lesson[] = [
  {
    id: "1-1-1",
    courseId: 1,
    week: 1,
    order: 1,
    title: "Hello & Goodbye",
    type: "vocabulary",
    duration: 20,
    content: {
      vocabulary: [
        { word: "Hello", meaning: "Xin chào", example: "Hello, how are you?", phonetic: "/həˈloʊ/" },
        { word: "Hi", meaning: "Chào (thân mật)", example: "Hi, nice to meet you.", phonetic: "/haɪ/" },
        { word: "Good morning", meaning: "Chào buổi sáng", example: "Good morning, everyone!", phonetic: "/ɡʊd ˈmɔːrnɪŋ/" },
        { word: "Good afternoon", meaning: "Chào buổi chiều", example: "Good afternoon, teacher.", phonetic: "/ɡʊd ˌæftərˈnuːn/" },
        { word: "Good evening", meaning: "Chào buổi tối", example: "Good evening, sir.", phonetic: "/ɡʊd ˈiːvnɪŋ/" },
        { word: "Goodbye", meaning: "Tạm biệt", example: "Goodbye, see you later!", phonetic: "/ɡʊdˈbaɪ/" },
        { word: "See you", meaning: "Hẹn gặp lại", example: "See you tomorrow!", phonetic: "/siː juː/" },
        { word: "Bye", meaning: "Tạm biệt (ngắn)", example: "Bye! Take care.", phonetic: "/baɪ/" },
      ],
    },
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "“Hello” nghĩa là gì?",
        options: ["Tạm biệt", "Xin chào", "Cảm ơn", "Xin lỗi"],
        correctAnswer: "Xin chào",
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Bạn dùng gì để chào buổi sáng?",
        options: ["Good evening", "Good morning", "Goodbye", "See you"],
        correctAnswer: "Good morning",
      },
      {
        id: "q3",
        type: "multiple_choice",
        question: "“Bye” dùng khi nào?",
        options: ["Khi chào buổi sáng", "Khi tạm biệt", "Khi cảm ơn", "Khi xin lỗi"],
        correctAnswer: "Khi tạm biệt",
      },
      {
        id: "q4",
        type: "fill_blank",
        question: "Điền từ còn thiếu: _____ morning, teacher!",
        correctAnswer: "Good",
      },
      {
        id: "q5",
        type: "translate",
        question: "Dịch sang tiếng Anh: “Hẹn gặp lại”",
        correctAnswer: "See you",
      },
      {
        id: "q6",
        type: "multiple_choice",
        question: "Cách chào thân mật nhất là:",
        options: ["Good evening", "Hello", "Hi", "Good afternoon"],
        correctAnswer: "Hi",
      },
    ],
    miniTest: [
      {
        id: "t1",
        type: "multiple_choice",
        question: "“Good evening” dùng vào lúc nào?",
        options: ["Buổi sáng", "Buổi trưa", "Buổi tối", "Khi tạm biệt"],
        correctAnswer: "Buổi tối",
      },
      {
        id: "t2",
        type: "multiple_choice",
        question: "Chọn câu đúng:",
        options: ["Hello, how are you?", "Goodbye, how are you?", "See you, how are you?", "Morning good"],
        correctAnswer: "Hello, how are you?",
      },
      {
        id: "t3",
        type: "fill_blank",
        question: "Điền từ: _____ you tomorrow!",
        correctAnswer: "See",
      },
      {
        id: "t4",
        type: "translate",
        question: "Dịch: “Tạm biệt”",
        correctAnswer: "Goodbye",
      },
      {
        id: "t5",
        type: "multiple_choice",
        question: "Khi gặp giáo viên buổi chiều, bạn nói:",
        options: ["Good morning", "Good afternoon", "Good evening", "Bye"],
        correctAnswer: "Good afternoon",
      },
    ],
  },
  {
    id: "1-1-2",
    courseId: 1,
    week: 1,
    order: 2,
    title: "Số từ 1–100",
    type: "vocabulary",
    duration: 25,
    content: {
      vocabulary: [
        { word: "one", meaning: "1", example: "I have one book.", phonetic: "/wʌn/" },
        { word: "two", meaning: "2", example: "Two apples please.", phonetic: "/tuː/" },
        { word: "three", meaning: "3", example: "She is three years old.", phonetic: "/θriː/" },
        { word: "four", meaning: "4", example: "I have four sisters.", phonetic: "/fɔːr/" },
        { word: "five", meaning: "5", example: "Give me five!", phonetic: "/faɪv/" },
        { word: "ten", meaning: "10", example: "I need ten dollars.", phonetic: "/ten/" },
        { word: "twenty", meaning: "20", example: "Twenty students are here.", phonetic: "/ˈtwenti/" },
        { word: "fifty", meaning: "50", example: "It costs fifty thousand.", phonetic: "/ˈfɪfti/" },
        { word: "one hundred", meaning: "100", example: "One hundred percent!", phonetic: "/wʌn ˈhʌndrəd/" },
      ],
    },
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "“Three” là số mấy?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Số 10 trong tiếng Anh là:",
        options: ["two", "twelve", "ten", "twenty"],
        correctAnswer: "ten",
      },
      {
        id: "q3",
        type: "fill_blank",
        question: "Điền số: I have _____ (2) brothers.",
        correctAnswer: "two",
      },
      {
        id: "q4",
        type: "multiple_choice",
        question: "“Twenty” là số nào?",
        options: ["12", "20", "22", "2"],
        correctAnswer: "20",
      },
      {
        id: "q5",
        type: "translate",
        question: "Dịch: “Năm”",
        correctAnswer: "five",
      },
      {
        id: "q6",
        type: "multiple_choice",
        question: "100 trong tiếng Anh là:",
        options: ["one thousand", "one hundred", "one million", "ten"],
        correctAnswer: "one hundred",
      },
    ],
    miniTest: [
      {
        id: "t1",
        type: "multiple_choice",
        question: "Chọn số đúng cho “four”:",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      {
        id: "t2",
        type: "fill_blank",
        question: "She is _____ (3) years old.",
        correctAnswer: "three",
      },
      {
        id: "t3",
        type: "multiple_choice",
        question: "“Fifty” nghĩa là:",
        options: ["15", "50", "55", "5"],
        correctAnswer: "50",
      },
      {
        id: "t4",
        type: "translate",
        question: "Dịch: “Hai mươi”",
        correctAnswer: "twenty",
      },
      {
        id: "t5",
        type: "multiple_choice",
        question: "I need _____ dollars. (10)",
        options: ["two", "ten", "twenty", "one"],
        correctAnswer: "ten",
      },
    ],
  },
  {
    id: "1-1-3",
    courseId: 1,
    week: 1,
    order: 3,
    title: "Giới thiệu tên",
    type: "speaking",
    duration: 20,
    content: {
      dialogue: [
        { speaker: "A", text: "Hello! What's your name?" },
        { speaker: "B", text: "My name is Minh. What's your name?" },
        { speaker: "A", text: "I'm Lan. Nice to meet you." },
        { speaker: "B", text: "Nice to meet you too!" },
      ],
      vocabulary: [
        { word: "What's your name?", meaning: "Bạn tên gì?", example: "What's your name?", phonetic: "/wɒts jɔːr neɪm/" },
        { word: "My name is...", meaning: "Tên tôi là...", example: "My name is Minh.", phonetic: "/maɪ neɪm ɪz/" },
        { word: "I'm...", meaning: "Tôi là...", example: "I'm Lan.", phonetic: "/aɪm/" },
        { word: "Nice to meet you", meaning: "Rất vui được gặp bạn", example: "Nice to meet you!", phonetic: "/naɪs tuː miːt juː/" },
      ],
    },
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "Cách hỏi tên người khác:",
        options: ["How are you?", "What's your name?", "Where are you from?", "How old are you?"],
        correctAnswer: "What's your name?",
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "“Nice to meet you” nghĩa là:",
        options: ["Tạm biệt", "Xin chào", "Rất vui được gặp bạn", "Cảm ơn"],
        correctAnswer: "Rất vui được gặp bạn",
      },
      {
        id: "q3",
        type: "fill_blank",
        question: "Điền: My _____ is Nam.",
        correctAnswer: "name",
      },
      {
        id: "q4",
        type: "translate",
        question: "Dịch: “Tôi là Lan”",
        correctAnswer: "I'm Lan",
      },
      {
        id: "q5",
        type: "multiple_choice",
        question: "Khi được giới thiệu, bạn đáp lại:",
        options: ["Goodbye", "Nice to meet you too", "Good morning", "See you"],
        correctAnswer: "Nice to meet you too",
      },
    ],
    miniTest: [
      {
        id: "t1",
        type: "multiple_choice",
        question: "“What's your name?” dùng để:",
        options: ["Hỏi tuổi", "Hỏi tên", "Hỏi quê quán", "Tạm biệt"],
        correctAnswer: "Hỏi tên",
      },
      {
        id: "t2",
        type: "fill_blank",
        question: "_____ to meet you!",
        correctAnswer: "Nice",
      },
      {
        id: "t3",
        type: "translate",
        question: "Dịch: “Tên tôi là Minh”",
        correctAnswer: "My name is Minh",
      },
      {
        id: "t4",
        type: "multiple_choice",
        question: "Chọn câu đúng:",
        options: ["My name Minh", "I name is Minh", "My name is Minh", "Name my is Minh"],
        correctAnswer: "My name is Minh",
      },
      {
        id: "t5",
        type: "multiple_choice",
        question: "Khi người khác nói “Nice to meet you”, bạn nói:",
        options: ["Hello", "Nice to meet you too", "Goodbye", "Thank you"],
        correctAnswer: "Nice to meet you too",
      },
    ],
  },
];

lessons.forEach((lesson) => {
  lesson.content.practice = lesson.questions;
});

export function getLessonsByCourseId(courseId: number) {
  return lessons.filter((l) => l.courseId === courseId);
}

export function getLessonById(id: string) {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByWeek(courseId: number, week: number) {
  return lessons.filter((l) => l.courseId === courseId && l.week === week);
}
