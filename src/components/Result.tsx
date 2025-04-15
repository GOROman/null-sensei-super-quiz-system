import React from "react";
import { Button } from "@/components/ui/button";

/**
 * クイズリザルト画面
 * - 正答数・正答率・ランク表示
 * - X（旧Twitter）ポスト機能付き
 */
/**
 * クイズリザルト画面
 * - 正答数・正答率・ランク表示
 * - X（旧Twitter）ポスト機能付き
 * @param score 正解数
 * @param total 問題数
 * @param onRetry リトライ時のコールバック
 */
type ResultProps = {
  score: number;
  total: number;
  onRetry: () => void;
};

const getRank = (rate: number): string => {
  if (rate === 1) return "Sランク！パーフェクト！";
  if (rate >= 0.8) return "Aランク！すごい！";
  if (rate >= 0.6) return "Bランク";
  if (rate >= 0.4) return "Cランク";
  return "がんばろう！";
};

function Result({ score, total, onRetry }: ResultProps) {
  const rate = score / total;
  const percent = Math.round(rate * 100);
  const rank = getRank(rate);
  const shareText = encodeURIComponent(
    `ガンダム3択クイズに挑戦！\n${total}問中${score}問正解（正答率${percent}%） #ガンダムクイズ https://gundam-quiz.windsurf.build/`
  );
  const tweetUrl = `https://twitter.com/intent/tweet?text=${shareText}`;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-pink-700 text-center">リザルト</h2>
      <div className="text-xl sm:text-2xl mb-4 text-blue-900">{score} / {total} 問正解</div>
      <div className="text-base sm:text-xl mb-4 text-gray-700">正答率: {percent}%</div>
      <div className="text-base sm:text-lg mb-8 font-bold text-pink-600">{rank}</div>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs mx-auto">
        <Button
          className="w-full px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700"
          onClick={onRetry}
          aria-label="もう一度挑戦"
          variant="default"
        >
          もう一度挑戦！
        </Button>
        <Button
          asChild
          className="w-full px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-sky-400 text-white shadow hover:bg-sky-500 text-center"
          aria-label="Xでポスト"
          variant="secondary"
        >
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'\n'}Xでポスト！
          </a>
        </Button>
      </div>
    </section>
  );
}

export default Result;
