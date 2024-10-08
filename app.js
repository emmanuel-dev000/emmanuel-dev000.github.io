
const datetimeText = document.getElementById("datetimeText");
datetimeText.textContent += getCopyrightText();

function getCopyrightText() {
  var date = new Date();
  return " 2023 - " + date.getFullYear() + " Emmanuel Pangan";
}

const headerNameText = document.getElementById("headerNameText");
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
  headerName: "Emmanuel Pangan",
  subtitle: "Backend developer by day 🌞 Game developer by night 🌜",
  about: [
      "🌏 Hello, world!",
      "I'm a Full Stack Developer with expertise in C#, ASP.Net, and Angular by day. And I dive into Godot and game development by night. I'm eager to delve more into the world of Azure and expand my cloud computing skills. Additionally, I'm passionate on learning Japanese with my level currently at N5, and the journey has been incredibly rewarding so far!",
      "I'm always looking for new people to connect with! 👋",
      "And lastly, you could actually switch to Japanese with this button: 日本語"
  ],
  project01Description: "Play as the Thief, and sneak into the dungeon filled with hidden and fake traps in this platformer adventure game available in Windows and Web.",
  project02Description: "Play in solo or duo, and help King and Queen solve various puzzles in this heartwarming puzzle-platformer game available in Windows and Web.",
  project03Description: "Play and venture into the depths of the Yggdrasil to slay the beast, in this action-packed turn-based adventure game playable in Gameboy, Gameboy emulators, and Web."
};

function setAllTextsToEng() {
  headerNameText.innerHTML = engTranslation.headerName;
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
  headerName: "パンガン エマニュエル",
  subtitle: "「朝はバックエンド 🌞 夕はゲーム 🌜」私の開発のルーティーンです。",
  about: [
      "🌏　ハローワルド！",
      "ソフトウェア開発者としてC＃、ASP.Net、とAngularを毎昼やっております。そして、毎晩はGodotとゲームの開発もします。もっと習ってのためにもAzureとクラウドを勉強しています。と、今も日本語能力試験やっていますがN5中レベルです。",
      "新しい出会いに仕事コネクトを嬉しいです。👋",
      "最後に英語翻訳もあります、このボタンです: English。"
  ],
  project01Description: "プレイヤにThiefでーを使って、ダンジョンの中に沢山偽物トラップで避ける。WindowsとWebがフリープレイです。",
  project02Description: "プレイヤーにKingとQueenに助けるんだそして色々なパズルの解答を出す、SoloかDuoが出来る。WindowsとWebがフリープレイです。",
  project03Description: "プレイヤーにYggdrasilの木の下でアドベンチャー始まっているとビーストで戦闘する。GameboyとGameboy emulatorとWebがフリープレイです。"
};

function setAllTextsToJp() {
  headerNameText.innerHTML = jpTranslation.headerName;
  subtitleText.innerHTML = jpTranslation.subtitle;

  for (let i = 0; i < jpTranslation.about.length; ++i) {
    const text = jpTranslation.about[i];
    aboutParagraphTexts[i].innerHTML = text;
  }

  project01DescriptionText.innerHTML = jpTranslation.project01Description;
  project02DescriptionText.innerHTML = jpTranslation.project02Description;
  project03DescriptionText.innerHTML = jpTranslation.project03Description;
}

function hideJumboReadMore() {
    const jumboReadMore = document.getElementById("jumboReadMore");
    if (jumboReadMore === null) {
        return;
    }

    jumboReadMore.style.visibility = "hidden";
}

function showJumboReadMore() {
    const jumboReadMore = document.getElementById("jumboReadMore");
    if (jumboReadMore === null) {
        return;
    }

    jumboReadMore.style.visibility = "visible";
}