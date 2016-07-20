var ip="120.27.156.196";
var port=41111;
var websocket=null;
var userData=[];
var currentScene=null;

//创建一个socket连接 func是连接成功的回调
var contect = function(func){
    if (websocket !== null)
        return
    websocket = new WebSocket("ws://"+ip+":"+port+"/");
    websocket.onopen = function (ev) {
        console.log("Send Text WS was opened.");
        if (func !== undefined && func !== null && typeof func === "function"){
        	 console.log("func!!!!!");
        	 func();
        }
    };
    websocket.onerror = function (ev) {
        console.log("Send Text fired an error");
    };
    websocket.onmessage = function(ev) {
        console.log("get Text WS from server");
        console.log(JSON.stringify(ev));
        console.log(ev.data);
        var data = JSON.parse(ev.data);
        console.log(data.p[0]);
        if(funcList[data.functionName] !== undefined || funcList[data.functionName] !== null){
          console.log("call onLoginSucceed!!!!");
          if (data.p[0] !== undefined || funcList[data.p[0]] !== null){
          console.log("data.p[0]!!!!");
             funcList[data.functionName](data.p[0]);
          }
          else{
          console.log("data.p!!!!");
             funcList[data.functionName](data.p);
          }
        }
	  };
	  websocket.onclose = function(ev) {
        console.log("Send Text WS was colse.");
	  };
};

//socketStr 由接口号和参数字段拼接的字符串，通过socket发送。字符串通过"^&^"来拼接。
var socketCall = function(socketStr){
	  websocket.send(socketStr);
    console.log("WebSocket send !!!!!"+socketStr);
};

var onLoginSucceed = function(data){
    console.log("onLoginSucceed!!!!!");
    for(var j in data){
        userData[j] = data[j];
        if (data[j] !== null){
            console.log(j+data[j]+"@@"+userData[j]);
        }
    }
    currentScene = new MainScene();
    cc.director.runScene(currentScene);
};

var onEnterGameSucceed = function(data){
    console.log("onEnterGameSucceed!!!!!");
    currentScene = new FishScene();
    currentScene.initView(data);
    cc.director.runScene(currentScene);
};

var onEnterGameFailed = function(data){
    console.log("onEnterGameFailed!!!!!");
};

var onEnterGameNotice = function(data){
    console.log("onEnterGameNotice!!!!!");
};

var onExitGameNotice = function(data){
    console.log("onExitGameNotice!!!!!");
};

var onGetGameStatus = function(data){
    console.log("onGetGameStatus!!!!!");
    pushEvent("ON_GET_GAME_STATUS",data);
};

var pushEvent = function(custom,data){
    var event = new cc.EventCustom(custom);
    event.setUserData(data);
    cc.eventManager.dispatchEvent(event);
}

//注册回调方法，一定要放在方法定义的后面。
var funcList={
//    //network
//    // "onChangedNetwork" = "onChangedNetwork",

//    // //nc
//    // "onConnect" = "onConnect",
//    // "onClose" = "onClose",

   //login
   1002:onLoginSucceed,
   // 1003:onLoginFailed,

   // //change info
   // 2002:onChangeNameSucceed,
   // 2003:onChangeNameFailed,
   // 2102:onChangeSexSucceed,
   // 2103:onChangeSexFailed,

   // //system message
   // 3001:onSystemContext,

   // //get phone code
   // 4002:onGetPhoneCodeSucceed,
   // 4003:onGetPhoneCodeFailed,

   // //bind phone
   // 5002:onRegisterPhoneSucceed,
   // 5003:onRegisterPhoneFailed,

   //enter game
   6002:onEnterGameSucceed,
   6003:onEnterGameFailed,

   // //user list
   // 6102:onGetUserListSucceed,
   // 6103:onGetUserListFailed,

   // //leave game
   // 7002:onLeaveGameSucceed,
   // 7003:onLeaveGameFailed,

   // //game notice
   7104:onEnterGameNotice,
   7105:onExitGameNotice,

   // //game status
   8002:onGetGameStatus

   // //bet
   // 9002:onBetSucceed,
   // 9003:onBetFailed,

   // //send chat
   // 11002:onSendMessageSucceed,
   // 11003:onSendMessageFailed,
   // 11004:onGetprivateMessage,

   // //get chat 
   // 12002:onGetMessage,
   // 12003:onGetSysMessage,
   
   // //upload head image   
   // // onUploadImageSucceed:onUploadImageSucceed,
   // // onUploadImageFailed:onUploadImageFailed,
   // // onUpload:onUpload,
   // // onUploadError:onUploadError,
   // // onDownload:onDownload,
   // // onDownloadError:onDownloadError,
   // // onProgress:onProgress,
   // // onSetDefaultImageSucceed:onSetDefaultImageSucceed,
   // // onSetDefaultImageFailed:onSetDefaultImageFailed,
   // // onGetImageFileList:onGetImageFileList,
   // 13002:onUserChangeImageSucceed,
   // 13003:onUserChangeImageFailed,

   // //lottery random--
   // 14002:onGetRandomGoldSucceed,
   // 14003:onGetRandomGoldFailed,
   // 14004:onGetRandomGoldCnt,

   // //daily gift--
   // 15002:onGetDailyGiftSucceed,
   // 15003:onGetDailyGiftFailed,

   // //free gold--
   // 16002:onGetFreeGoldSucceed,
   // 16003:onGetFreeGoldFailed,

   // //exchange--
   // 17002:onExchangeSucceed,
   // 17003:onExchangeFailed,

   // //exchange--
   // 18002:onGetCharmSucceed,
   // 18003:onGetCharmFailed,
   // 18004:onGetCharm,

   // // user action--
   // 19002:onUserOperateSucceed,
   // 19003:onUserOperateFailed,

   // 20002:onSetPrivateSucceed,
   // 20003:onSetPrivateFailed,

   // //charge
   // 21002:onGetChargeIdSucceed,
   // 21003:onGetChargeIdFailed,

   // //mora game 
   // 30002:onFingerGameInviteSucceed,
   // 30003:onFingerGameInviteFailed,
   // 30004:onFingerGameInvite,

   // 31002:onFingerGameInviteAgreeSucceed,
   // 31003:onFingerGameInviteAgreeFailed,

   // 32002:onFingerGameInviteRefuse,

   // 33002:onFingerGameInviteCancel,

   // 34002:onFingerGameBetSucceed,
   // 34003:onFingerGameBetFailed,

   // 35002:onFingerGameGuessSucceed,
   // 35003:onFingerGameGuessFailed,
   // 35004:onFingerGameEndTime,
   // 35005:onFingerGameResult,

   // 36002:onFingerGameLeave,
};

