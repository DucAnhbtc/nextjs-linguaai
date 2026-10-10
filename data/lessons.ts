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
