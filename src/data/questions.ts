// 仮のクイズデータ（例）
// QuizQuestion型を利用
import type { QuizQuestion } from "../types/quiz"

export const questions: QuizQuestion[] = [
  {
    id: "gundam-001",
    question: "アムロ・レイが初めて搭乗したモビルスーツは？",
    options: ["ガンダム","ザク","グフ"],
    answer: 0,
    explanation: "アムロが初搭乗したのはRX-78-2 ガンダム。"
  },
  {
    id: "gundam-002",
    question: "シャア・アズナブルの愛機の色は？",
    options: ["青","赤","黄色"],
    answer: 1,
    explanation: "シャア専用機は赤色で有名。"
  },
  {
    id: "gundam-003",
    question: "ハロは何のためのロボット？",
    options: ["戦闘","ペット","通信"],
    answer: 1,
    explanation: "ハロは主にペット・おもちゃ的存在。"
  }
]
