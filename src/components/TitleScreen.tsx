import type { FC } from "react";

/**
 * TitleScreen component props.
 */
type TitleScreenProps = {
  /**
   * Function to call when the start button is clicked.
   */
  onStart: () => void;
};

/**
 * TitleScreen component.
 *
 * Displays the title screen of the quiz with a start button.
 */
const TitleScreen: FC<TitleScreenProps> = ({ onStart }) => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 p-4 sm:p-8">
    <h1 className="text-2xl sm:text-4xl font-extrabold mb-8 text-pink-700 drop-shadow text-center">
      ちょっとHなガンダム3択クイズ
    </h1>
    <button
      className="w-full max-w-xs px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 text-lg sm:text-xl font-bold mb-4"
      onClick={onStart}
      aria-label="クイズを始める"
    >
      クイズを始める
    </button>
  </section>
);

export default TitleScreen;
