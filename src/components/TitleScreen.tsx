import React from 'react'

/**
 * ガンダム3択クイズ タイトル画面コンポーネント
 * - タイトル、説明、スタートボタンを中央寄せで表示
 * - スタートボタン押下でクイズ本編開始（親からonStartを受け取る）
 */
type TitleScreenProps = {
  onStart: () => void
}

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => (
  <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
    <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center">
      ちょっとHなガンダム3択クイズ
    </h1>
    <p className="mb-8 text-lg md:text-xl text-center max-w-md">
      ガンダムにまつわる“ちょっとH”なネタをクイズで出題！<br />
      ユーモア重視＆全年齢向け。全問正解なるか！？
    </p>
    <button
      className="px-8 py-4 bg-pink-600 hover:bg-pink-700 rounded-full shadow-lg text-xl font-semibold transition-colors"
      onClick={onStart}
      type="button"
      aria-label="クイズを始める"
    >
      クイズを始める
    </button>
  </section>
)

export default TitleScreen
