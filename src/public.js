var ip = "120.27.156.196";
var port = 41111;
var DEFAULT_FONT = "";//"Microsoft YaHei UI Bold";
var userData = [];
var currentScene = null;
var nc = new network();
var SceneWidth = 1080;
var SceneHeight = 1920;
var betHistoryList = new Array();
var musicOpen = true;
var effectOpen = true;
var musicPercent = 50;
var effectPercent = 50;

var setTextString = function(target,str) {
	target.setString(str);
	target.setContentSize(target.getVirtualRendererSize());
};

