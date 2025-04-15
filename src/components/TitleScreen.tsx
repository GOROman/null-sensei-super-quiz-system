import type { FC } from "react";
import { Button } from "@/components/ui/button";

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
    <Button
      className="w-full max-w-xs px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700 mb-4"
      onClick={onStart}
      aria-label="クイズを始める"
      variant="default"
    >
      クイズを始める
    </Button>
  </section>
);

export default TitleScreen;
