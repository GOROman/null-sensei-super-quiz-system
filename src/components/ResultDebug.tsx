import Result from "../components/Result";

export default function ResultDebug() {
  return (
    <Result
      score={7}
      total={10}
      percent={70}
      militaryRank="大佐"
      rank="S"
      tweetUrl="https://x.com"
      handleRetry={() => alert("リトライ")}
    />
  );
}
