import React, { useEffect, useRef } from "react";
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
  // --- 効果音SE ---
  // "buu"は矩形波（square wave）で「ブー」音を再生
  const audioCtxRef = useRef<AudioContext | null>(null);
  const pinponLoadedRef = useRef(false);
  const buuLoadedRef = useRef(false);

  const playSE = async (type: "pinpon" | "buu") => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new window.AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (type === "pinpon" && !pinponLoadedRef.current) {
      await ctx.audioWorklet.addModule("/audio/PinponProcessor.js");
      pinponLoadedRef.current = true;
    }
    if (type === "buu" && !buuLoadedRef.current) {
      await ctx.audioWorklet.addModule("/audio/BuuProcessor.js");
      buuLoadedRef.current = true;
    }
    const node = new window.AudioWorkletNode(
      ctx,
      type === "pinpon" ? "pinpon-processor" : "buu-processor"
    );
    node.connect(ctx.destination);
  };

  useEffect(() => {
    if (isAnswered && isCorrect !== null) {
      playSE(isCorrect ? "pinpon" : "buu");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered, isCorrect]);

  const formatQuestionText = (text: string) =>
    text
      .replace(/(」|。|、|！|？|：)/g, '$1\n')
      .replace(/\n{2,}/g, '\n');

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-8 sm:px-8 sm:py-16 bg-gray-100 rounded-xl shadow-lg flex flex-col items-center min-h-screen border-8 border-blue-600">
      <div className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 self-start">第{questionNumber}問 / 全{totalQuestions}問</div>
      <h3
        className="text-center text-3xl sm:text-4xl font-extrabold mb-10 text-gray-900 tracking-widest uppercase break-words drop-shadow whitespace-pre-line"
        data-testid="question-text"
        tabIndex={0}
        aria-label={`問題: ${question.question}`}
      >
        {formatQuestionText(question.question)}
      </h3>
      <ul className="list-none p-0 flex flex-col gap-7 w-full max-w-2xl">
        {question.options.map((choice, idx) => {
          let btnClass = "w-full px-8 py-6 text-2xl sm:text-3xl font-semibold rounded-full border-4 text-center transition focus:outline-none focus:ring-4 ";
          if (isAnswered) {
            if (selected === idx) {
              btnClass += idx === question.answerIndex
                ? "bg-yellow-400 text-gray-900 border-yellow-500 " // 正解
                : "bg-red-600 text-yellow-100 border-red-700 ";   // 不正解
            } else {
              btnClass += "bg-gray-800 text-gray-500 border-gray-700 ";
            }
          } else {
            btnClass += selected === idx
              ? "bg-blue-700 text-white border-blue-700 hover:bg-blue-800"
              : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100";
          }
          if (disabled) btnClass += " opacity-50 cursor-not-allowed";
          return (
            <li key={idx} className="m-0 p-0 w-full">
              <Button
                type="button"
                className={btnClass}
                onClick={() => onSelect(idx)}
                disabled={disabled || isAnswered}
                aria-pressed={selected === idx}
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
        <div className="mt-8 text-[8rem] sm:text-[10rem] font-extrabold mb-4 text-center text-blue-700" aria-live="polite">
          {isCorrect ? "⭕️" : "❌"}
          <div className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            {isCorrect ? "正解！" : "不正解"}
          </div>
          {!isCorrect && (
            <div className="mt-2 text-lg text-blue-600 font-semibold">
              正解: {question.options[question.answerIndex]}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default QuestionCard;
