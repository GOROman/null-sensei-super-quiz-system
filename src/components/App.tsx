import { useState } from "react";
import TitleScreen from "./TitleScreen";
import Quiz from "./Quiz";

/**
 * アプリの状態管理用Reactコンポーネント
 * - クイズ開始前はTitleScreen
 * - 開始後はQuiz
 */
const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  return showQuiz
    ? <Quiz />
    : <TitleScreen onStart={() => setShowQuiz(true)} />;
};

export default App;
