
const datetimeText = document.getElementById("datetimeText");
datetimeText.textContent += getCopyrightText();

function getCopyrightText() {
  var date = new Date();
  return " 2023 - " + date.getFullYear() + " Emmanuel Pangan";
}

const subtitleText = document.getElementById("subtitleText");
const aboutParagraphTexts = [
  document.getElementById("aboutParagraph01Text"),
  document.getElementById("aboutParagraph02Text"),
  document.getElementById("aboutParagraph03Text"),
  document.getElementById("aboutParagraph04Text")
];
const project01DescriptionText = document.getElementById("project01DescriptionText");
const project02DescriptionText = document.getElementById("project02DescriptionText");
const project03DescriptionText = document.getElementById("project03DescriptionText");

const toggleLanguageButton = document.getElementById("toggleLanguageButton");
function toggleLanguage() {
  if (toggleLanguageButton.innerHTML === "English") {
    toggleLanguageButton.innerHTML = "日本語";
    setAllTextsToEng();
  } else {
    toggleLanguageButton.innerHTML = "English";
    setAllTextsToJp();
  }
}

const engTranslation = {
  subtitle: "Backend developer by day 🌞 Game developer by night 🌜",
  about: [
      "In my 3 years of making games using Unity3D, I did game jams: week-long trash games, and other not-so trashy, fully-fledge games you see below. I also joined a couple of indie studios helping them with their respective games.",
      "Now I'm enjoying working on a Spring Boot project. And has this crazy idea of making this static website in a LinkedIn style, so others can sign up too. Too crazy right?",
      "I'm also doing an animedb website, a chat app for anime with a chatbot. So stay tuned for it! In the future, I would like to combine the things I've learned in making games and what I'm currently learning in the backend.",
      "And lastly, you could actually switch to Japanese with this button: 日本語"
  ],
  project01Description: "Play as the Thief, and sneak into the dungeon filled with hidden and fake traps in this platformer adventure game available in Windows and Web.",
  project02Description: "Play in solo or duo, and help King and Queen solve various puzzles in this heartwarming puzzle-platformer game available in Windows and Web.",
  project03Description: "Play and venture into the depths of the Yggdrasil to slay the beast, in this action-packed turn-based adventure game playable in Gameboy, Gameboy emulators, and Web."
};

function setAllTextsToEng() {
  subtitleText.innerHTML = engTranslation.subtitle;

  for (let i = 0; i < engTranslation.about.length; ++i) {
    const text = engTranslation.about[i];
    aboutParagraphTexts[i].innerHTML = text;
  }

  project01DescriptionText.innerHTML = engTranslation.project01Description;
  project02DescriptionText.innerHTML = engTranslation.project02Description;
  project03DescriptionText.innerHTML = engTranslation.project03Description;

}

const jpTranslation = {
  subtitle: "「朝はバックエンド 🌞 夕はゲーム 🌜」私の開発のルーティーンです。",
  about: [
      "三年間にUnity3Dを沢山ゲーム作ってました。一週間くらいのゴミゲームと長い時間くらいの少しゴミじゃないゲーム、って下に見える。 二つのIndie Studio会社も入りました。",
      "今回はSpring Bootな色々なプロジェクトを楽しくった、作ります。ヤバイなイデアもある、こちのサイトでLinkedInスタイルが作りませんか、どうかなヤバイか。",
      "今もanimedbのサイトはchatbotアプリのアニメよりwith chatbotが作ります。楽しんでね!そんな未来にゲームとバックエンドをコンビネーションをする、って私の夢です。",
      "最後に英語翻訳もある、このボタンで: English"
  ],
  project01Description: "プレイヤにThiefでーを使って、ダンジョンの中に沢山偽物トラップで避ける。WindowsとWebがフリープレイです。",
  project02Description: "プレイヤーにKingとQueenに助けるんだそして色々なパズルの解答を出す、SoloかDuoが出来る。WindowsとWebがフリープレイです。",
  project03Description: "プレイヤーにYggdrasilの木の下でアドベンチャー始まっているとビーストで戦闘する。GameboyとGameboy emulatorとWebがフリープレイです。"
};

function setAllTextsToJp() {
  subtitleText.innerHTML = jpTranslation.subtitle;

  for (let i = 0; i < jpTranslation.about.length; ++i) {
    const text = jpTranslation.about[i];
    aboutParagraphTexts[i].innerHTML = text;
  }

  project01DescriptionText.innerHTML = jpTranslation.project01Description;
  project02DescriptionText.innerHTML = jpTranslation.project02Description;
  project03DescriptionText.innerHTML = jpTranslation.project03Description;
}
