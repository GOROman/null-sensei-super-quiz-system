# ToDo: ちょっとHなガンダム3択クイズゲーム開発

## 優先度A（最優先で着手）
- [ ] Astro 5.x プロジェクト新規作成
- [ ] TypeScript, Tailwind CSS, Shadcn UI セットアップ
- [ ] クイズ用TypeScript型定義（QuizQuestion型）作成（`src/types/quiz.ts`）
- [ ] 仮のクイズデータ作成（`src/data/questions.ts`）

## 優先度B（A完了後に着手）
- [ ] タイトル画面（TitleScreen.tsx）作成
- [ ] Quiz.tsx（クイズ進行管理）作成
- [ ] QuestionCard.tsx（1問表示・選択肢UI）作成
- [ ] Result.tsx（最終スコア表示）作成
- [ ] トップページ（`src/pages/index.astro`）でクイズコンポーネント埋め込み

## 優先度C（B完了後に着手）
- [ ] レスポンシブ対応・デザイン調整（UIはTailwind/モバイル対応済）
- [ ] ファイル/コンポーネント命名規則遵守確認（ルール準拠）
- [ ] JSDocによる簡易ドキュメント追加（型・主要コンポーネントに記載）
- [ ] GitHub flow徹底（featureブランチ・PR運用実施）

## 優先度D（最終確認・将来拡張）
- [ ] クイズ進行・正誤判定・スコア表示の動作確認（全体動作・UI確認済）
- [ ] UI/UXのレスポンシブ・アクセシビリティ確認（主要要件カバー済）
- [x] クイズデータAPI化検討（APIエンドポイント実装済み）
- [ ] クイズ問題追加・難易度調整（100問・バリエーション追加済み）
