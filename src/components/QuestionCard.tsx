import React from "react";
import type { QuizQuestion } from "@/types/quiz";
import { Button } from "@/components/ui/button";

/**
 * 1問分のクイズ表示・選択肢UIコンポーネント
 * @remarks レスポンシブ・アクセシビリティ・命名規則対応
 * @param question クイズ問題データ
 * @param onSelect 選択肢クリック時のコールバック
 * @param selected 選択中の選択肢インデックス
 * @param disabled ボタン無効化フラグ
 * @param questionNumber 現在の問題番号（1始まり）
 * @param totalQuestions 全問題数
 * @param isAnswered 回答済みフラグ
 * @param isCorrect 回答が正解かどうか
 */
type QuestionCardProps = {
  question: QuizQuestion;
  onSelect: (choiceIndex: number) => void;
  selected?: number;
  disabled?: boolean;
  questionNumber: number;
  totalQuestions: number;
  isAnswered: boolean;
  isCorrect: boolean | null;
};

function QuestionCard({
  question,
  onSelect,
  selected,
  disabled,
  questionNumber,
  totalQuestions,
  isAnswered,
  isCorrect,
}: QuestionCardProps) {
  return (
    <section className="flex flex-col justify-center items-center min-h-[60vh] bg-white rounded shadow p-4 sm:p-8 w-full max-w-2xl mx-auto">
      <div className="text-xs text-gray-500 mb-2 self-start">
        第{questionNumber}問 / 全{totalQuestions}問
      </div>
      <h3
        className="text-center text-2xl sm:text-3xl font-bold mb-8 text-blue-900 break-words"
        data-testid="question-text"
        tabIndex={0}
        aria-label={`問題: ${question.question}`}
      >
        {question.question}
      </h3>
      <ul className="list-none p-0 flex flex-col gap-7 w-full max-w-2xl">
        {question.options.map((choice, idx) => {
          let btnClass = "w-full px-8 py-6 text-2xl sm:text-3xl font-semibold rounded-2xl border-2 text-center transition focus:outline-none focus:ring-4 ";
          if (isAnswered) {
            if (selected === idx) {
              // 選択した選択肢のみ色を残す
              btnClass += idx === question.answerIndex
                ? "bg-green-500 text-white border-green-600 " // 正解を選んだ場合
                : "bg-red-500 text-white border-red-600 ";   // 不正解を選んだ場合
            } else {
              // 選択していないものはグレーアウト
              btnClass += "bg-gray-100 text-gray-400 border-gray-200 ";
            }
          } else {
            btnClass += selected === idx
              ? "bg-blue-600 text-white border-blue-600 "
              : "bg-gray-100 border-gray-300 hover:bg-blue-100 ";
          }
          if (disabled) btnClass += "opacity-50 cursor-not-allowed ";

          return (
            <li key={idx} className="m-0 p-0 w-full">
              <Button
                type="button"
                className={btnClass}
                onClick={() => onSelect(idx)}
                disabled={disabled}
                aria-label={`選択肢${idx + 1}: ${choice}`}
                data-testid={`choice-${idx}`}
                variant="ghost"
                tabIndex={0}
              >
                {choice}
              </Button>
            </li>
          );
        })}
      </ul>
      {isAnswered && (
        <div className="mt-8 text-2xl sm:text-3xl font-bold text-center" aria-live="polite">
          {isCorrect ? "⭕️ 正解！" : "❌ 不正解"}
          {!isCorrect && (
            <div className="mt-4 text-lg text-green-700 font-semibold">正解: {question.options[question.answerIndex]}</div>
          )}
        </div>
      )}
    </section>
  );
};

export default QuestionCard;
