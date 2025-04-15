import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { useSE } from "@/hooks/useSE";

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
const TitleScreen: FC<TitleScreenProps> = ({ onStart }) => {
  const playSE = useSE();
  const handleStart = () => {
    playSE("start");
    onStart();
  };
  return (
    <section className="w-full max-w-xl mx-auto px-8 py-16 bg-gray-100 rounded-xl shadow-lg flex flex-col items-center min-h-screen border-8 border-blue-600">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-700 tracking-widest uppercase mb-12 drop-shadow text-center">
        ちょっと<p></p>Ｈな<p></p>ガンダム<p></p>３択クイズ
      </h1><br></br><br></br>
      <Button
        className="w-full max-w-xs px-12 py-8 text-3xl sm:text-4xl font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg border-4 border-blue-700 transition-all duration-300 mb-8"
        onClick={handleStart}
        aria-label="クイズを始める"
        variant="default"
      >
        クイズを始める
      </Button>
    </section>
  );
};

export default TitleScreen;
