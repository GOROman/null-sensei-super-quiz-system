import React from "react";
import type { QuizQuestion } from "@/types/quiz";

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
    <section className="bg-white rounded shadow p-4 sm:p-6 w-full max-w-md mx-auto">
      <div className="text-xs text-gray-500 mb-1">
        第{questionNumber}問 / 全{totalQuestions}問
      </div>
      <h3 className="text-base sm:text-lg font-bold mb-4 text-blue-900" data-testid="question-text">
        {question.question}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {question.options.map((choice, idx) => {
          let btnClass = "w-full px-3 sm:px-4 py-2 rounded border text-left transition ";
          if (isAnswered) {
            if (idx === question.answerIndex) {
              btnClass += "bg-green-500 text-white border-green-600 ";
            } else if (selected === idx) {
              btnClass += "bg-red-500 text-white border-red-600 ";
            } else {
              btnClass += "bg-gray-100 border-gray-300 ";
            }
          } else {
            btnClass += selected === idx
              ? "bg-blue-600 text-white border-blue-600 "
              : "bg-gray-100 border-gray-300 hover:bg-blue-100 ";
          }
          if (disabled) btnClass += "opacity-50 cursor-not-allowed ";

          return (
            <li key={idx}>
              <button
                type="button"
                className={btnClass}
                onClick={() => onSelect(idx)}
                disabled={disabled}
                aria-label={`選択肢${idx + 1}: ${choice}`}
                data-testid={`choice-${idx}`}
              >
                {choice}
              </button>
            </li>
          );
        })}
      </ul>
      {isAnswered && (
        <div className="mt-4 text-xl sm:text-2xl" aria-live="polite">
          {isCorrect ? "⭕️ 正解！" : "❌ 不正解"}
        </div>
      )}
    </section>
  );
};

export default QuestionCard;
