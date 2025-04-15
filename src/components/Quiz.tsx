import React, { useState, useMemo, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * クイズ進行管理コンポーネント
 * - 問題番号・選択肢・スコア管理
 * - 何問目か表示
 */
const Quiz = () => {
  // クイズ開始時に10問シャッフル抽出
  const quizQuestions = useMemo(() => shuffle(questions).slice(0, 10), []);
  const totalQuestions = quizQuestions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // プログレスバー用
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // 回答済み時にプログレスバーを3秒で進め、自動で次へ
  useEffect(() => {
    if (isAnswered) {
      setProgress(0);
      let elapsed = 0;
      timerRef.current = setInterval(() => {
        elapsed += 100;
        setProgress((elapsed / 3000) * 100);
        if (elapsed >= 3000) {
          clearInterval(timerRef.current!);
          handleNext();
        }
      }, 100);
      return () => clearInterval(timerRef.current!);
    } else {
      setProgress(0);
      if (timerRef.current) clearInterval(timerRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered]);

  const handleSelect = (choiceIdx: number) => {
    if (isAnswered) return;
    setSelected(choiceIdx);
    const correct = choiceIdx === currentQuestion.answerIndex;
    setIsCorrect(correct);
    setIsAnswered(true);
    if (correct) setScore((prev) => prev + 1);
  };

  // 「次へ」ボタン or 自動遷移時
  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (currentQuestionIndex + 1 >= totalQuestions) {
      setIsFinished(true);
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelected(undefined);
    setIsAnswered(false);
    setIsCorrect(null);
    setProgress(0);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelected(undefined);
    setIsAnswered(false);
    setIsCorrect(null);
    setIsFinished(false);
    setScore(0);
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };
  if (isFinished) {
    return <Result score={score} total={totalQuestions} onRetry={handleRetry} />;
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">

      <QuestionCard
        question={currentQuestion}
        onSelect={handleSelect}
        selected={selected}
        disabled={isAnswered}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
      />
      {isAnswered && (
        <>
          <Button
            className="mt-8 w-full max-w-xs px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700"
            onClick={handleNext}
            aria-label={currentQuestionIndex + 1 >= totalQuestions ? "リザルトを見る" : "次へ"}
            variant="default"
          >
            {currentQuestionIndex + 1 >= totalQuestions ? "リザルトを見る" : "次へ"}
          </Button>
          {/* プログレスバー */}
          <div className="w-full max-w-xs h-2 bg-gray-200 rounded mt-3 overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Quiz;
