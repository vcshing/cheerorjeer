var lang
var appConfigArr = []
var defaultLangArr = []
var menuArr= []
var menuSiteArr= []
var loopLangArr = []

appConfigArr={
  "appName" :	"Cheer or Jeer",
  "appDescription"	:	"Cheer or Jeer",
  "androidAppLink"	:"https://play.google.com/store/apps/details?id=com.skyexplorer.cheerorjeer",
  "androidAdmobBannerID"	:"ca-app-pub-3715336230214756/4252746061",
  "androidAdmobInterstitialID"	:"ca-app-pub-3715336230214756/6930880290"
}



defaultLangArr.push("Other Apps");
defaultLangArr.push("Share Apps");
defaultLangArr.push("Default Language");


ion.sound({
    sounds: [
        {name: "audience_boo"},
        {name: "clapping_and_cheers"},
        {name: "clapping"},
    ],

    path: "sound/",
    preload: true,
    multiplay: false,
    volume: 1
});
