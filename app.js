
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
const project04DescriptionText = document.getElementById("project04DescriptionText");

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
  subtitle: "Software Developer by day 🌞 Game Developer by night 🌜",
  about: [
      "🌏 Hello, world!",
      "I'm a Software Developer with expertise in C#, ASP.Net, and Angular by day. And I dive into Unity3D and game development by night. I'm eager to delve more into the world of Azure and expand my cloud computing skills.",
      "I'm also passionate in learning Japanese with my level currently at N4, and the journey has been incredibly rewarding so far!",
      "And lastly, you could actually switch to Japanese with this button: 日本語"
  ],
  project01Description: "Play as the Thief, and sneak into the dungeon filled with hidden and fake traps in this platformer adventure game available in Windows and Web.",
  project02Description: "Play in solo or duo, and help King and Queen solve various puzzles in this heartwarming puzzle-platformer game available in Windows and Web.",
  project03Description: "Play and venture into the depths of the Yggdrasil to slay the beast, in this action-packed turn-based adventure game playable in Gameboy, Gameboy emulators, and Web.",
  project04Description: "The royal couple: King and Queen are back again in their romantic adventure! Playable in Web and Windows. Note: The current version is still in demo."
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
  project04DescriptionText.innerHTML = engTranslation.project04Description;

}

const jpTranslation = {
  headerName: "パンガン•エマニュエル",
  subtitle: "「昼はソフトウェアデヴェロッパー 🌞 夕はゲームクリエイター 🌜」",
  about: [
      "🌏　ハローワルド！",
      "ソフトウェア開発者としてC＃、ASP.Net、とAngularを毎昼やっております。そして、毎晩はUnity3Dとゲームの開発もします。もっと習うためにもAzureとクラウドを勉強しています。",
      "上に、日本語能力試験もします、N4レベルです。",
      "ちなみに英語翻訳もあります、このボタンで: English"
  ],
  project01Description: "プレイヤにThiefでーを使って、ダンジョンの中に沢山偽物トラップで避ける。WindowsとWebがフリープレイです。",
  project02Description: "プレイヤーにKingとQueenに助けるんだそして色々なパズルの解答を出す、SoloかDuoが出来る。WindowsとWebがフリープレイです。",
  project03Description: "プレイヤーにYggdrasilの木の下でアドベンチャー始まっているとビーストで戦闘する。GameboyとGameboy emulatorとWebがフリープレイです。",
  project04Description: "ザローヤルファミリー：KingとQueenが戻りました！一緒に彼らのロマンティックアドベンチャーに助らるか？WebとWindowsでプレイ出来る。なお、今のバージョンアップデートはまだDemoです。"
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
  project04DescriptionText.innerHTML = jpTranslation.project04Description;
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
