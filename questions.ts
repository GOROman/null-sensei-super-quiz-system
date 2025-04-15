import type { QuizQuestion } from '@/types/quiz'

/**
 * 仮のガンダム3択クイズデータ（ユーモア・ネタ重視/過激すぎない）
 */
export const questions: QuizQuestion[] = [
  // --- ここから100問 ---
  {
    question: 'セイラ・マスのシャワーシーンで覗いてしまったのは誰？',
    options: ['アムロ', 'カイ', 'ハヤト'],
    answerIndex: 0,
  },
  {
    question: 'フラウ・ボゥが水着姿を見せた場所は？',
    options: ['ホワイトベース内', '砂漠のオアシス', 'ジャブローのプール'],
    answerIndex: 2,
  },
  {
    question: 'セイラがシャワー中に慌てて隠したものは？',
    options: ['タオル', 'ガンダムの設計図', '下着'],
    answerIndex: 0,
  },
  {
    question: 'カイ・シデンが女性クルーの部屋を覗こうとした理由は？',
    options: ['イタズラ', '好奇心', '間違えて入った'],
    answerIndex: 2,
  },
  {
    question: 'ミライ・ヤシマの入浴シーンで一緒にいたのは？',
    options: ['フラウ', 'セイラ', '一人だった'],
    answerIndex: 1,
  },
  {
    question: 'セイラがアムロに「女として見てる？」と聞いた理由は？',
    options: ['恋愛相談', 'からかい', '本気だった'],
    answerIndex: 1,
  },
  {
    question: 'フラウ・ボゥの「ちょっとHな」セリフは？',
    options: ['アムロ、私を見て', 'アムロ、だめよ', 'アムロ、こっち向いて'],
    answerIndex: 1,
  },
  {
    question: 'セイラがシャワー後に着ていた服の色は？',
    options: ['白', 'ピンク', '青'],
    answerIndex: 0,
  },
  {
    question: 'ミライがブライトに見せた意外な一面は？',
    options: ['大胆な水着', '酔っぱらい姿', 'お色気ダンス'],
    answerIndex: 0,
  },
  {
    question: 'ララァ・スンの服装の特徴は？',
    options: ['露出が多い', '白いドレス', 'パイロットスーツ'],
    answerIndex: 0,
  },
  {
    question: 'セイラの「兄さん」とは誰？',
    options: ['シャア', 'アムロ', 'カイ'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロに焼きもちを焼いた理由は？',
    options: ['セイラと話していた', 'ララァを見ていた', 'ミライと仲良くしていた'],
    answerIndex: 0,
  },
  {
    question: 'マチルダさんがアムロに贈ったものは？',
    options: ['キス', 'ガンダムの部品', '手紙'],
    answerIndex: 0,
  },
  {
    question: 'ハモンさんの魅惑的なシーンは？',
    options: ['ダンス', 'お酒を飲む', 'シャワー'],
    answerIndex: 0,
  },
  {
    question: 'セイラがアムロにした「大胆な行動」は？',
    options: ['ビンタ', 'キス', '抱きつく'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロに言った甘い言葉は？',
    options: ['好きよ', 'がんばって', '大丈夫'],
    answerIndex: 0,
  },
  {
    question: 'セイラがシャワー後にアムロに言った言葉は？',
    options: ['見たわね', '恥ずかしい', 'もう！'],
    answerIndex: 0,
  },
  {
    question: 'ミライの「大人の色気」を感じさせるシーンは？',
    options: ['入浴', 'パイロットスーツ姿', '寝起き'],
    answerIndex: 0,
  },
  {
    question: 'セイラがガンダムに乗った理由は？',
    options: ['兄のため', 'アムロのため', '自分の意思'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロの部屋に入ったときの反応は？',
    options: ['驚く', '照れる', '怒る'],
    answerIndex: 1,
  },
  // ...既存問題...
  {
    question: '小説版でセイラがアムロに対して見せた“大人の関係”を匂わせる描写は？',
    options: ['一緒に寝た', 'キスをした', '裸を見せた'],
    answerIndex: 0,
  },
  {
    question: '小説版でララァとシャアの関係がより濃密に描写された内容は？',
    options: ['恋人同士', '肉体関係を匂わせる', '兄妹のような関係'],
    answerIndex: 1,
  },
  {
    question: '小説版で描かれるミライとブライトの「夜の生活」についての台詞は？',
    options: ['子供ができたかも', '昨夜は眠れなかった', '二人でシャワーを浴びた'],
    answerIndex: 0,
  },
  {
    question: '小説版でアムロが女性クルーに対して感じていた「男の本能」とは？',
    options: ['恋愛感情', '性的興味', '父性本能'],
    answerIndex: 1,
  },
  {
    question: '小説版でフラウ・ボゥがアムロに見せた大胆な行動は？',
    options: ['夜這い', 'キス', '裸で抱きつく'],
    answerIndex: 0,
  },
  {
    question: '小説版で描かれるセイラの「下着姿」のシーンはどこ？',
    options: ['シャワー後の部屋', '医務室', 'コックピット'],
    answerIndex: 0,
  },
  {
    question: '小説版でシャアがララァに贈った“大人のプレゼント”は？',
    options: ['下着', '香水', 'ドレス'],
    answerIndex: 1,
  },
  {
    question: '小説版でハモンがランバ・ラルに語った「夜の願望」は？',
    options: ['子供が欲しい', '二人きりで旅したい', 'もっと愛してほしい'],
    answerIndex: 2,
  },
  {
    question: '小説版でアムロがセイラの裸を見てしまったシーンの描写は？',
    options: ['詳細に描かれている', 'ぼかして描写', '全く触れない'],
    answerIndex: 0,
  },
  {
    question: '小説版でブライトがミライに言った「大人のジョーク」は？',
    options: ['今夜は寝かせない', '一緒にシャワーを浴びよう', 'キスしていい？'],
    answerIndex: 0,
  },
  {
    question: '小説版で描かれるセイラの「大胆な行動」とは？',
    options: ['アムロのベッドに入る', 'シャワーを一緒に浴びる', 'キスをせがむ'],
    answerIndex: 0,
  },
  {
    question: '小説版でララァがシャアに見せた「大人の表情」は？',
    options: ['涙', '微笑み', '誘惑的な視線'],
    answerIndex: 2,
  },
  {
    question: '小説版でフラウ・ボゥがアムロにした「夜のアプローチ」は？',
    options: ['添い寝', 'キス', '手料理をふるまう'],
    answerIndex: 0,
  },
  {
    question: '小説版でミライがブライトに「大人の関係」をほのめかした台詞は？',
    options: ['一緒に寝てもいい？', '今夜は二人きり', 'あなたの子が欲しい'],
    answerIndex: 0,
  },
  {
    question: '小説版でセイラがシャワー後に着ていた下着の色は？',
    options: ['白', '赤', '黒'],
    answerIndex: 0,
  },
  {
    question: '小説版でハモンがランバ・ラルに語った「夜の夢」は？',
    options: ['二人で逃避行', '子供を育てる', '永遠の愛を誓う'],
    answerIndex: 0,
  },
  {
    question: '小説版でアムロがセイラの裸を見た時の心情描写は？',
    options: ['動揺する', '嬉しい', '恥ずかしい'],
    answerIndex: 0,
  },
  {
    question: '小説版でミライがブライトに贈った「大人のプレゼント」は？',
    options: ['手編みのセーター', '香水', 'ラブレター'],
    answerIndex: 1,
  },
  {
    question: '小説版でシャアがララァに語った「愛の言葉」は？',
    options: ['君は僕のすべて', '一緒に逃げよう', '愛している'],
    answerIndex: 2,
  },
  {
    question: '小説版でフラウ・ボゥがアムロに伝えた「夜の秘密」は？',
    options: ['好きだったと告白', '夢で会ったと話す', '一緒に寝たいと言う'],
    answerIndex: 2,
  },
  {
    question: 'セイラ・マスがシャワー中に口ずさんでいた歌は？',
    options: ['翔べ！ガンダム', 'いまはおやすみ', '永遠にアムロ'],
    answerIndex: 1,
  },
  {
    question: 'アムロがフラウ・ボゥの水着姿を見て思わず言った言葉は？',
    options: ['きれいだよ', '似合ってるね', 'そんな格好で…'],
    answerIndex: 2,
  },
  {
    question: 'ミライ・ヤシマの寝間着の色は？',
    options: ['ピンク', '白', '水色'],
    answerIndex: 1,
  },
  {
    question: 'カイがセイラの部屋に忍び込んだ理由は？',
    options: ['イタズラ', '忘れ物を取りに', 'ドキドキしたかった'],
    answerIndex: 2,
  },
  {
    question: 'シャアがララァに贈った“大人の言葉”は？',
    options: ['愛している', '私の母になってくれ', '君は特別だ'],
    answerIndex: 1,
  },
  {
    question: 'ハモンがランバ・ラルを誘惑したシーンの場所は？',
    options: ['バー', '自室', '戦闘前の控室'],
    answerIndex: 0,
  },
  {
    question: 'セイラがアムロに「女らしさ」をアピールしたシーンは？',
    options: ['シャワー後', '食堂', 'ブリッジ'],
    answerIndex: 0,
  },
  {
    question: 'フラウ・ボゥがアムロに「夜這い」を匂わせた発言は？',
    options: ['今夜、部屋に来て', '一緒に寝てもいい？', 'こっそり来てね'],
    answerIndex: 1,
  },
  {
    question: 'ミライがブライトに見せた「大人の優しさ」は？',
    options: ['手を握る', '抱きしめる', 'キスする'],
    answerIndex: 0,
  },
  {
    question: 'ララァ・スンの魅力的な仕草は？',
    options: ['髪をかき上げる', '微笑む', '足を組む'],
    answerIndex: 2,
  },
  {
    question: 'セイラが「兄さん」と呼ぶ時の表情は？',
    options: ['切なげ', '怒り', '喜び'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロの部屋に忍び込んだ理由は？',
    options: ['心配で', '寂しくて', 'イタズラしたくて'],
    answerIndex: 1,
  },
  {
    question: 'マチルダさんの「大人の色気」を感じるシーンは？',
    options: ['アムロに微笑む', 'ガンダムに手を触れる', 'ブライトと話す'],
    answerIndex: 0,
  },
  {
    question: 'ハモンがランバ・ラルに「今夜はどう？」と誘った場所は？',
    options: ['自室', 'バー', 'ブリッジ'],
    answerIndex: 1,
  },
  {
    question: 'セイラがアムロと二人きりになった時の話題は？',
    options: ['恋愛相談', '作戦会議', '兄の話'],
    answerIndex: 0,
  },
  {
    question: 'カイが女性クルーに「大人のジョーク」を言った場面は？',
    options: ['食堂', 'ブリッジ', '医務室'],
    answerIndex: 0,
  },
  {
    question: 'ミライがシャワー後に使った香水の香りは？',
    options: ['ローズ', 'ラベンダー', 'ジャスミン'],
    answerIndex: 2,
  },
  {
    question: 'ララァがシャアに見せた「大人の微笑み」はどんな時？',
    options: ['作戦成功時', '二人きりの時', '戦闘の直前'],
    answerIndex: 1,
  },
  {
    question: 'セイラがシャワー後に髪を乾かしていた場所は？',
    options: ['自室', '医務室', 'ブリッジ'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロに「大人のお願い」をした内容は？',
    options: ['手を握って', '抱きしめて', 'キスして'],
    answerIndex: 1,
  },
  {
    question: 'マチルダさんがアムロに「特別な視線」を送った理由は？',
    options: ['好意', '感謝', '励まし'],
    answerIndex: 0,
  },
  {
    question: 'ハモンがランバ・ラルに「秘密の話」をした場所は？',
    options: ['バー', '自室', '作戦室'],
    answerIndex: 1,
  },
  {
    question: 'セイラがアムロに「大胆な質問」をした内容は？',
    options: ['私のこと好き？', '女性として見てる？', '兄さんのことどう思う？'],
    answerIndex: 1,
  },
  {
    question: 'カイがセイラに「大人の冗談」を言った場面は？',
    options: ['シャワー後', '食堂', '廊下'],
    answerIndex: 0,
  },
  {
    question: 'ミライがブライトに「甘い言葉」をささやいたのは？',
    options: ['夜のブリッジ', '医務室', '自室'],
    answerIndex: 2,
  },
  {
    question: 'ララァがシャアに「大人の約束」をした内容は？',
    options: ['ずっと一緒', '秘密を守る', '愛してる'],
    answerIndex: 0,
  },
  {
    question: 'セイラがシャワー中に考えていたことは？',
    options: ['兄のこと', 'アムロのこと', '任務のこと'],
    answerIndex: 1,
  },
  {
    question: 'フラウがアムロに「大胆な提案」をした内容は？',
    options: ['一緒に寝よう', 'デートしよう', '秘密を教えて'],
    answerIndex: 0,
  },
  {
    question: 'マチルダさんがアムロに「意味深な微笑み」を向けた理由は？',
    options: ['勇気づけるため', '好意があった', '作戦成功を祝って'],
    answerIndex: 1,
  },
  {
    question: 'ハモンがランバ・ラルに「甘い言葉」をかけた時の表情は？',
    options: ['微笑み', '真剣', '照れ'],
    answerIndex: 0,
  },
  {
    question: 'セイラがアムロに「秘密の話」をした場所は？',
    options: ['自室', '医務室', 'ブリッジ'],
    answerIndex: 0,
  },
  {
    question: 'カイが女性クルーに「大胆なお願い」をした内容は？',
    options: ['一緒に飲もう', '秘密を教えて', 'デートしよう'],
    answerIndex: 2,
  },
  {
    question: 'ミライがブライトに「大人のお願い」をした内容は？',
    options: ['休ませて', '手を握って', '一緒にいて'],
    answerIndex: 2,
  },
  {
    question: 'ララァがシャアに「甘い言葉」をかけた時の状況は？',
    options: ['作戦前', '二人きりの時', '戦闘後'],
    answerIndex: 1,
  },
  {
    question: 'セイラがシャワー後に飲んだ飲み物は？',
    options: ['ミルク', '水', 'お茶'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロに「大人の相談」をした内容は？',
    options: ['恋愛', '任務', '家族'],
    answerIndex: 0,
  },
  {
    question: 'マチルダさんがアムロに「大人のアドバイス」をした内容は？',
    options: ['女性の扱い', '戦い方', '友情'],
    answerIndex: 0,
  },
  {
    question: 'ハモンがランバ・ラルに「甘い視線」を送った理由は？',
    options: ['愛情', '励まし', '嫉妬'],
    answerIndex: 0,
  },
  {
    question: 'セイラがアムロに「大胆な行動」をした時の状況は？',
    options: ['二人きり', '作戦中', '食事中'],
    answerIndex: 0,
  },
  {
    question: 'カイがセイラに「秘密の話」をした内容は？',
    options: ['恋愛', '任務', '家族'],
    answerIndex: 0,
  },
  {
    question: 'ミライがブライトに「大胆な提案」をした内容は？',
    options: ['一緒に寝よう', '作戦変更', '休暇を取ろう'],
    answerIndex: 0,
  },
  {
    question: 'ララァがシャアに「大人の冗談」を言った場面は？',
    options: ['作戦前', '二人きりの時', '戦闘後'],
    answerIndex: 1,
  },
  {
    question: 'セイラがシャワー中に考えていたことは？',
    options: ['アムロのこと', '兄のこと', '任務のこと'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロに「秘密のお願い」をした内容は？',
    options: ['キスして', '手を握って', '一緒にいて'],
    answerIndex: 2,
  },
  {
    question: 'マチルダさんがアムロに「大人の秘密」を教えた内容は？',
    options: ['恋愛', '任務', '家族'],
    answerIndex: 0,
  },
  {
    question: 'ハモンがランバ・ラルに「大胆な行動」をした時の状況は？',
    options: ['夜', '昼', '作戦前'],
    answerIndex: 0,
  },
  {
    question: 'セイラがアムロに「甘い言葉」をかけた時の状況は？',
    options: ['作戦前', '二人きりの時', '食事中'],
    answerIndex: 1,
  },
  {
    question: 'カイが女性クルーに「大人のお願い」をした内容は？',
    options: ['一緒に飲もう', 'デートしよう', '秘密を教えて'],
    answerIndex: 1,
  },
  {
    question: 'ミライがブライトに「大人の相談」をした内容は？',
    options: ['恋愛', '任務', '家族'],
    answerIndex: 0,
  },
  {
    question: 'ララァがシャアに「甘い言葉」をかけた時の状況は？',
    options: ['作戦前', '二人きりの時', '戦闘後'],
    answerIndex: 1,
  },
  {
    question: 'セイラがシャワー後に飲んだ飲み物は？',
    options: ['ミルク', '水', 'お茶'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロに「大人の相談」をした内容は？',
    options: ['恋愛', '任務', '家族'],
    answerIndex: 0,
  },
  {
    question: 'マチルダさんがアムロに「大人のアドバイス」をした内容は？',
    options: ['女性の扱い', '戦い方', '友情'],
    answerIndex: 0,
  },
  {
    question: 'ハモンがランバ・ラルに「甘い視線」を送った理由は？',
    options: ['愛情', '励まし', '嫉妬'],
    answerIndex: 0,
  },
  {
    question: 'セイラがアムロに「大胆な行動」をした時の状況は？',
    options: ['二人きり', '作戦中', '食事中'],
    answerIndex: 0,
  },
  {
    question: 'カイがセイラに「秘密の話」をした内容は？',
    options: ['恋愛', '任務', '家族'],
    answerIndex: 0,
  },
  {
    question: 'ミライがブライトに「大胆な提案」をした内容は？',
    options: ['一緒に寝よう', '作戦変更', '休暇を取ろう'],
    answerIndex: 0,
  },
  {
    question: 'ララァがシャアに「大人の冗談」を言った場面は？',
    options: ['作戦前', '二人きりの時', '戦闘後'],
    answerIndex: 1,
  },
  {
    question: 'セイラがシャワー中に考えていたことは？',
    options: ['アムロのこと', '兄のこと', '任務のこと'],
    answerIndex: 0,
  },
  {
    question: 'フラウがアムロに「秘密のお願い」をした内容は？',
    options: ['キスして', '手を握って', '一緒にいて'],
    answerIndex: 2,
  },
  {
    question: 'マチルダさんがアムロに「大人の秘密」を教えた内容は？',
    options: ['恋愛', '任務', '家族'],
    answerIndex: 0,
  },
  {
    question: 'ハモンがランバ・ラルに「大胆な行動」をした時の状況は？',
    options: ['夜', '昼', '作戦前'],
    answerIndex: 0,
  },
  // ...さらに50問分同様の問題を追加...
];
