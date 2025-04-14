import type { FC } from "react";
import type { QuizQuestion } from "@/types/quiz";

/**
 * 1問分のクイズ表示・選択肢UIコンポーネント
 * @param question クイズ問題データ
 * @param onSelect 選択肢クリック時のコールバック
 * @param selected 選択中の選択肢インデックス
 * @param disabled ボタン無効化フラグ
 */
type Props = {
  question: QuizQuestion;
  onSelect: (choiceIndex: number) => void;
  selected?: number;
  disabled?: boolean;
};

const QuestionCard: FC<Props> = ({ question, onSelect, selected, disabled }) => {
  return (
    <section className="bg-white rounded shadow p-6 w-full max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-4 text-blue-900" data-testid="question-text">
        {question.text}
      </h3>
      <ul className="space-y-3">
        {question.choices.map((choice, idx) => (
          <li key={idx}>
            <button
              type="button"
              className={`w-full px-4 py-2 rounded border text-left transition
                ${selected === idx ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 border-gray-300 hover:bg-blue-100"}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => onSelect(idx)}
              disabled={disabled}
              data-testid={`choice-${idx}`}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuestionCard;
