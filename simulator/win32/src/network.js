var network = cc.Class.extend({
	websocket:null,
	//创建一个socket连接 func是连接成功的回调
	contect:function(func){
		var _this = this;
	    if (this.websocket !== null)
	        return
	    this.websocket = new WebSocket("ws://"+ip+":"+port+"/");
	    this.websocket.onopen = function (ev) {
	        console.log("Send Text WS was opened.");
	        if (func !== undefined && func !== null && typeof func === "function"){
	        	 console.log("func!!!!!");
	        	 func();
	        }
	    };
	    this.websocket.onerror = function (ev) {
	        console.log("Send Text fired an error");
	    };
	    this.websocket.onmessage = function(ev) {
	        console.log("get Text WS from server");
	        console.log(JSON.stringify(ev));
	        console.log(ev.data);
	        var data = JSON.parse(ev.data);
	        var callFunc = _this.getCallFunc(data.functionName).bind(_this);
	        if (callFunc !== undefined || callFunc !== null){
	        	if (data.p[0] !== undefined || _this.funcList[data.p[0]] !== null){
	        		callFunc(data.p[0]); 
	        	}
	        	else{
	        		callFunc(data.p); 
	        	}
	        }
		};
		this.websocket.onclose = function(ev) {
	        console.log("Send Text WS was colse.");
		};
	},
	//socketStr 由接口号和参数字段拼接的字符串，通过socket发送。字符串通过"^&^"来拼接。
	socketCall:function(socketStr){
		this.websocket.send(socketStr);
	    console.log("WebSocket send !!!!!"+socketStr);
	},
	//发送自定义事件
	pushEvent:function(custom,data){
	    var event = new cc.EventCustom(custom);
	    event.setUserData(data);
	    cc.eventManager.dispatchEvent(event);
	},
	//注册回调方法。
	getCallFunc:function(name) {
		switch (name) {
			//login
			case 1002:
				return this.onLoginSucceed;
			break;
			case 1003:
				return this.onLoginFailed;
			break;
			//change info
			case 2002:
				return this.onChangeNameSucceed;
			break;
			case 2003:
				return this.onChangeNameFailed;
			break;
			case 2102:
				return this.onChangeSexSucceed;
			break;
			case 2103:
				return this.onChangeSexFailed;
			break;
			//system message
			case 3001:
				return this.onSystemContext;
			break;
	   		//get phone code
			case 4002:
				return this.onGetPhoneCodeSucceed;
			break;
			case 4003:
				return this.onGetPhoneCodeFailed;
			break;
	   		//bind phone
			case 5002:
				return this.onRegisterPhoneSucceed;
			break;
			case 5003:
				return this.onRegisterPhoneFailed;
			break;
	   		//enter game
			case 6002:
				return this.onEnterGameSucceed;
			break;
			case 6003:
				return this.onEnterGameFailed;
			break;
			case 6102:
				return this.onGetUserListSucceed;
			break;
			case 6103:
				return this.onGetUserListFailed;
			break;
	   		//leave game
			case 7002:
				return this.onLeaveGameSucceed;
			break;	
			case 7003:
				return this.onLeaveGameFailed;
			break;
			//game notice
			case 7104:
				return this.onEnterGameNotice;
			break;	
			case 7105:
				return this.onExitGameNotice;
			break;
			//game status	 
			case 8002:
				return this.onGetGameStatus;
			break;	
			//bet
			case 9002:
				return this.onBetSucceed;
			break;	
			case 9003:
				return this.onBetFailed;
			break;	  
			//send chat
			case 11002:
				return this.onSendMessageSucceed;
			break;	
			case 11003:
				return this.onSendMessageFailed;
			break;
			case 11004:
				return this.onGetprivateMessage;
			break;	
	   		//get chat 
			case 12002:
				return this.onGetMessage;
			break;
			case 12003:
				return this.onGetSysMessage;
			break;	
	   		//daily gift
			case 15002:
				return this.onGetDailyGiftSucceed;
			break;
			case 15003:
				return this.onGetDailyGiftFailed;
			break;	
	   		//exchange
			case 17002:
				return this.onExchangeSucceed;
			break;
			case 17003:
				return this.onExchangeFailed;
			break;
			case 18002:
				return this.onGetCharmSucceed;
			break;
			case 18003:
				return this.onGetCharmFailed;
			break;
			case 18004:
				return this.onGetCharm;
			break;
	   		//charge
			case 21002:
				return this.onGetChargeIdSucceed;
			break;
			case 21003:
				return this.onGetChargeIdFailed;
			break;
			//mora game 
			case 30002:
				return this.onFingerGameInviteSucceed;
			break;
			case 30003:
				return this.onFingerGameInviteFailed;
			break;
			case 30004:
				return this.onFingerGameInvite;
			break;

			case 31002:
				return this.onFingerGameInviteAgreeSucceed;
			break;
			case 31003:
				return this.onFingerGameInviteAgreeFailed;
			break;

			case 32002:
				return this.onFingerGameInviteRefuse;
			break;
			case 33002:
				return this.onFingerGameInviteCancel;
			break;

			case 34002:
				return this.onFingerGameBetSucceed;
			break;
			case 34003:
				return this.onFingerGameBetFailed;
			break;

			case 35002:
				return this.onFingerGameGuessSucceed;
			break;
			case 35003:
				return this.onFingerGameGuessFailed;
			break;
			case 35004:
				return this.onFingerGameEndTime;
			break;
			case 35005:
				return this.onFingerGameResult;
			break;

			case 36002:
				return this.onFingerGameLeave;
			break;
			default:
				return null;
		}
	},
	onLoginSucceed:function(data){
	    console.log("onLoginSucceed!!!!!");
	    for(var j in data){
	        userData[j] = data[j];
	        if (data[j] !== null){
	            console.log(j+data[j]+"@@"+userData[j]);
	        }
	    }
	    currentScene = new MainScene();
	    cc.director.runScene(currentScene);
	},
	onLoginFailed:function(data){
	    console.log("onLoginFailed!!!!!");
	},
	onChangeNameSucceed:function(data){
	    console.log("onChangeNameSucceed!!!!!");
	},
	onChangeNameFailed:function(data){
	    console.log("onChangeNameFailed!!!!!");
	},
	onChangeSexSucceed:function(data){
	    console.log("onChangeSexSucceed!!!!!");
	},
	onChangeSexFailed:function(data){
	    console.log("onChangeSexFailed!!!!!");
	},
	onSystemContext:function(data){
	    console.log("onSystemContext!!!!!");
	},
	onGetPhoneCodeSucceed:function(data){
	    console.log("onGetPhoneCodeSucceed!!!!!");
	},
	onGetPhoneCodeFailed:function(data){
	    console.log("onGetPhoneCodeFailed!!!!!");
	},
	onRegisterPhoneSucceed:function(data){
	    console.log("onRegisterPhoneSucceed!!!!!");
	},
	onRegisterPhoneFailed:function(data){
	    console.log("onRegisterPhoneFailed!!!!!");
	},
	onEnterGameSucceed:function(data){
	    console.log("onEnterGameSucceed!!!!!");
	    currentScene = new FishScene();
	    currentScene.initView(data);
	    cc.director.runScene(currentScene);
	},
	onEnterGameFailed:function(data){
	    console.log("onEnterGameFailed!!!!!");
	},
	onGetUserListSucceed:function(data){
	    console.log("onGetUserListSucceed!!!!!");
	},
	onGetUserListFailed:function(data){
	    console.log("onGetUserListFailed!!!!!");
	},
	onLeaveGameSucceed:function(data){
	    console.log("onLeaveGameSucceed!!!!!");
	},
	onLeaveGameFailed:function(data){
	    console.log("onLeaveGameFailed!!!!!");
	},
	onEnterGameNotice:function(data){
	    console.log("onEnterGameNotice!!!!!");
	},
	onExitGameNotice:function(data){
	    console.log("onExitGameNotice!!!!!");
	},
	onGetGameStatus:function(data){
	    console.log("onGetGameStatus!!!!!");
	    this.pushEvent("ON_GET_GAME_STATUS",data);
	},
	onBetSucceed:function(data){
	    console.log("onBetSucceed!!!!!");
	    userdata.owncash = userdata.owncash - data.betMoney;
	    this.pushEvent("ON_BET_SUCCEED",data);
	    this.pushEvent("ON_CHANGE_GOLD");
	},
	onBetFailed:function(data){
	    console.log("onBetFailed!!!!!");
	    this.pushEvent("ON_BET_FAILED",data);
	},
	onSendMessageSucceed:function(data){
	    console.log("onSendMessageSucceed!!!!!");
	},
	onSendMessageFailed:function(data){
	    console.log("onSendMessageFailed!!!!!");
	},
	onGetprivateMessage:function(data){
	    console.log("onGetprivateMessage!!!!!");
	},
	onGetMessage:function(data){
	    console.log("onGetMessage!!!!!");
	},
	onGetSysMessage:function(data){
	    console.log("onGetSysMessage!!!!!");
	},
	onGetDailyGiftSucceed:function(data){
	    console.log("onGetDailyGiftSucceed!!!!!");
	},
	onGetDailyGiftFailed:function(data){
	    console.log("onGetDailyGiftSucceed!!!!!");
	},
	onExchangeSucceed:function(data){
	    console.log("onExchangeSucceed!!!!!");
	},
	onExchangeFailed:function(data){
	    console.log("onExchangeFailed!!!!!");
	},
	onGetCharmSucceed:function(data){
	    console.log("onGetCharmSucceed!!!!!");
	},
	onGetCharmFailed:function(data){
	    console.log("onGetCharmFailed!!!!!");
	},
	onGetCharm:function(data){
	    console.log("onGetCharm!!!!!");
	},
	onGetChargeIdSucceed:function(data){
	    console.log("onGetChargeIdSucceed!!!!!");
	},
	onGetChargeIdFailed:function(data){
	    console.log("onGetChargeIdFailed!!!!!");
	},
	onFingerGameInviteSucceed:function(data){
	    console.log("onFingerGameInviteSucceed!!!!!");
	},
	onFingerGameInviteFailed:function(data){
	    console.log("onFingerGameInviteFailed!!!!!");
	},
	onFingerGameInvite:function(data){
	    console.log("onFingerGameInvite!!!!!");
	},
	onFingerGameInviteAgreeSucceed:function(data){
	    console.log("onFingerGameInviteAgreeSucceed!!!!!");
	},
	onFingerGameInviteAgreeFailed:function(data){
	    console.log("onFingerGameInviteAgreeFailed!!!!!");
	},
	onFingerGameInviteRefuse:function(data){
	    console.log("onFingerGameInviteRefuse!!!!!");
	},
	onFingerGameInviteCancel:function(data){
	    console.log("onFingerGameInviteCancel!!!!!");
	},
	onFingerGameBetSucceed:function(data){
	    console.log("onFingerGameBetSucceed!!!!!");
	},
	onFingerGameBetFailed:function(data){
	    console.log("onFingerGameBetFailed!!!!!");
	},
	onFingerGameGuessSucceed:function(data){
	    console.log("onFingerGameGuessSucceed!!!!!");
	},
	onFingerGameGuessFailed:function(data){
	    console.log("onFingerGameGuessFailed!!!!!");
	},
	onFingerGameEndTime:function(data){
	    console.log("onFingerGameEndTime!!!!!");
	},
	onFingerGameResult:function(data){
	    console.log("onFingerGameResult!!!!!");
	},
	onFingerGameLeave:function(data){
	    console.log("onFingerGameLeave!!!!!");
	}
});