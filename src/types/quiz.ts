// クイズ問題型定義（QuizQuestion）
// - id: 識別子
// - question: 問題文
// - options: 選択肢（3択）
// - answer: 正解インデックス（0,1,2）
// - explanation: 解説

export type QuizQuestion = {
  id: string
  question: string
  options: [string, string, string]
  answer: 0 | 1 | 2
  explanation?: string
}
