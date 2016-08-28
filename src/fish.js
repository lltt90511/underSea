var FishLayer = cc.Layer.extend({
	fishscene:null,
	fishData:[],
	fishTypeList:{
	  1:{id:1,name:'大捕获',res:'13',fishType:0,seqId:1,multi:0.0,multiEffect:'8,4,10,2'},
	  2:{id:8,name:'珊瑚鱼',res:'10',fishType:0,seqId:2,multi:0.0,multiEffect:''},
	  3:{id:3,name:'鲨鱼',res:'1',fishType:0,seqId:3,multi:50.0,multiEffect:''},
	  4:{id:7,name:'烛光鱼',res:'2',fishType:0,seqId:4,multi:0.0,multiEffect:''},
	  5:{id:4,name:'魔鬼鱼',res:'3',fishType:0,seqId:5,multi:20.0,multiEffect:''},
	  6:{id:10,name:'水母',res:'4',fishType:0,seqId:6,multi:0.0,multiEffect:''},
	  7:{id:2,name:'小捕获',res:'14',fishType:0,seqId:7,multi:0.0,multiEffect:''},
	  8:{id:11,name:'蝴蝶鱼',res:'5',fishType:0,seqId:8,multi:0.0,multiEffect:''},
	  9:{id:5,name:'灯笼鱼',res:'6',fishType:0,seqId:9,multi:10.0,multiEffect:''},
	  10:{id:9,name:'海豚',res:'7',fishType:0,seqId:10,multi:0.0,multiEffect:''},
	  11:{id:6,name:'海龟',res:'8',fishType:0,seqId:11,multi:5.0,multiEffect:''},
	  12:{id:12,name:'海星',res:'9',fishType:0,seqId:12,multi:0.0,multiEffect:''},
	  13:{id:13,name:'对虾',res:'11',fishType:1,seqId:1,multi:1.5,multiEffect:''},
	  14:{id:14,name:'螃蟹',res:'12',fishType:1,seqId:2,multi:1.5,multiEffect:''},
	  15:{id:13,name:'对虾',res:'11',fishType:1,seqId:3,multi:1.5,multiEffect:''},
	  16:{id:14,name:'螃蟹',res:'12',fishType:1,seqId:4,multi:1.5,multiEffect:''},
	  17:{id:13,name:'对虾',res:'11',fishType:1,seqId:5,multi:1.5,multiEffect:''},
	  18:{id:14,name:'螃蟹',res:'12',fishType:1,seqId:6,multi:1.5,multiEffect:''},
	},
	lastOpenId:{0:1,1:1},
	gameId:0,
	betEndTime:0,
	toNextTime:10,
	isDoBet:false,
	isRepeat:false,
    isPlaying:false,
	singleIndex:1,
    finishCircleCnt:0,
    insideId:1,
    outsideId:1,

    armature1:null,
    armature2:null,

    singleArr:["玫瑰","千纸鹤","水晶鞋","兰博基尼"],
	singleGoldArr:[],
	isBetList:[],
	betList:[],
    betMaskList:[],
    betImgList:[],
	betBtnList:[],
	lightList:[],
    fishList:[],
    resultName:[],
    betTypeList:[3,4,5,6,13,14],
    betOwn:[],

	fishLayer:null,
	rebetBtn:null,
	cdNumber:null,
	helpLayer:null,
	bottomLayer:null,
	bottomLayout:null,
    bottomLayoutText:null,
    bottomLayoutBg:null,
    commonTopLayer:null,
    chatLayer:null,
    bigWinLayer:null,
    panel_shayu:null,
    panel_moguiyu:null,

    listener1:null,
    listener2:null,
    listener3:null,
    listener4:null,
	ctor:function (data) {
        this._super();
        console.log("FishLayer ctor");
        this.fishscene = ccs.load(res.fish_json);
        this.addChild(this.fishscene.node);

        this.onUpdateGameData(data);
		this.gameId = data.gameid;
		if (data.type === 100) {
			this.betEndTime = 20 - data.time;
		}
		else{
			this.betEndTime = 20;
		}
		for (var i in data.bet){
			var betData = data.bet[i];
            console.log("betData.id"+betData.id+betData.gold);
			this.singleGoldArr[betData.id] = betData.gold;
            console.log("singleGoldArr.id"+this.singleGoldArr[betData.id]);
		}

        ccs.armatureDataManager.addArmatureFileInfo(res.ani_shayu_json);
        ccs.armatureDataManager.addArmatureFileInfo(res.ani_moguiyu_json);
        ccs.armatureDataManager.addArmatureFileInfo(res.ani_denglongyu_json);
        ccs.armatureDataManager.addArmatureFileInfo(res.ani_wugui_json);
        ccs.armatureDataManager.addArmatureFileInfo(res.ani_gold_json);

        this.initView();
        this.initFish();
        this.initBottom();
        this.initHelp();
        this.initListener();

        return true;
    },
    initView:function() {
    	this.cdNumber = ccui.helper.seekWidgetByTag(this.fishscene.node,14821);
    	this.bottomLayout = ccui.helper.seekWidgetByTag(this.fishscene.node,15111);
    	this.bottomLayout.setTouchEnabled(false);
        this.bottomLayoutText = ccui.helper.seekWidgetByTag(this.fishscene.node,15112);
        this.bottomLayoutBg = ccui.helper.seekWidgetByTag(this.fishscene.node,24117);
        this.rebetBtn = ccui.helper.seekWidgetByTag(this.fishscene.node,14797);
        this.rebetBtn.addTouchEventListener(this.onRepeatBet,this);
        this.bigWinLayer = ccui.helper.seekWidgetByTag(this.fishscene.node,24871);
        this.panel_shayu = ccui.helper.seekWidgetByTag(this.fishscene.node,14854);
        this.panel_moguiyu = ccui.helper.seekWidgetByTag(this.fishscene.node,14872);
        this.lightList[0] = [];
        this.lightList[1] = [];
        this.fishList[0] = [];
        this.fishList[1] = [];
        for (var i in this.fishTypeList){
            var v = this.fishTypeList[i];
            if (v.fishType === 0){ 
                var outside = ccui.helper.seekWidgetByName(this.fishscene.node,"panel_outside_"+v.seqId);
                var light = outside.getChildByName("light");
                light.setVisible(false);
                this.lightList[1][v.seqId] = light;
                var fish = outside.getChildByName("fish");
                this.fishList[1][v.seqId] = fish;
            }
            else if(v.fishType === 1){
                var inside = ccui.helper.seekWidgetByName(this.fishscene.node,"panel_inside_"+v.seqId);
                var light = inside.getChildByName("light");
                light.setVisible(false);
                this.lightList[0][v.seqId] = light;
                var fish = inside.getChildByName("fish");
                this.fishList[0][v.seqId] = fish;
            }
        }
        this.initData();
        this.schedule(this.startFishTimer.bind(this),1);

        this.commonTopLayer = new CommonTopLayer(this);
        this.commonTopLayer.setPosition(cc.p(0,1750));
        this.fishscene.node.addChild(this.commonTopLayer,5);

        this.chatLayer = new ChatLayer();
        this.chatLayer.setPosition(cc.p(0,0));
        this.fishscene.node.addChild(this.chatLayer,5);
    },
    initData:function() {
        if (this.fishData.type === 100) {
            if (this.betEndTime < 10) {
                this.cdNumber.setString("0"+this.betEndTime);
                if (this.betEndTime < 5) {
                    cc.audioEngine.playEffect(res.effect_1,false);
                    this.cdNumber.setColor(cc.color(255,0,0,255));
                }
            }
            else{
                this.cdNumber.setString(this.betEndTime.toString());
            }
            if (this.isDoBet) {
                this.isDoBet = false;
            }
            this.hiddenAllLight();
            this.rebetBtn.setVisible(true);
            this.rebetBtn.setTouchEnabled(true);
            this.changeTouchEnabled(true);
            this.bottomLayout.setTouchEnabled(false);
            this.bottomLayout.setVisible(false);
            this.bottomLayoutBg.setVisible(false);
        }
        else if (this.fishData.type === 200 || this.fishData.type === 201) {
            this.cdNumber.setString("00");
            this.cdNumber.setColor(cc.color(204,255,255,255));
            this.rebetBtn.setVisible(false);
            this.rebetBtn.setTouchEnabled(false);
            this.bottomLayout.setVisible(true);
            this.bottomLayout.setTouchEnabled(true);
            this.bottomLayoutBg.setVisible(false);
            if (!this.isPlaying) {
                this.playFishEffect();
            }
            if (this.fishData.type === 200) {
                this.bottomLayoutText.setString("开奖中，请稍后...");
            }
            else {
                this.toNextTime = 10;
                // if (this.isPlaying) {
                //     this.bottomLayoutText.setString("开奖中，请稍后...");
                // }
                if (this.fishData.GameResult.f[1] === 1 || this.fishData.GameResult.f[1] === 3 || this.fishData.GameResult.f[1] === 4){
                    this.setIsBigWin();
                }
            }
        }
    },
    initFish:function() {
    	// var fish = ccui.helper.seekWidgetByName(this.fishscene.node,"fish");
    	var helpBtn = ccui.helper.seekWidgetByTag(this.fishscene.node,27476);
    	helpBtn.addTouchEventListener(this.onShowOrHideHelp,this);
    },
    initBottom:function() {
    	for (var i=1;i<7;i++) {
            var bet = ccui.helper.seekWidgetByName(this.fishscene.node,"bet_"+i);
            bet.setName(i.toString());
            this.betList[i] = bet;
            bet.addTouchEventListener(this.onBet,this);
            var list = [];
            list[0] = false;
            list[1] = i;
            this.isBetList[this.betTypeList[i-1]] = list;
            var mask = ccui.helper.seekWidgetByName(bet,"mask");
            mask.setVisible(false);
            mask.setTouchEnabled(false);
            this.betMaskList[i] = mask;
            var img = ccui.helper.seekWidgetByName(mask,"img");
            img.setVisible(false);
            this.betImgList[i] = img;
            if (i < 5) {
        		var betBtn = ccui.helper.seekWidgetByName(this.fishscene.node,"btn_"+i);
                var betBtnText = ccui.helper.seekWidgetByName(betBtn,"text");
                betBtnText.setString(this.singleArr[i-1]);
                betBtnText.setContentSize(betBtnText.getVirtualRendererSize());
                var betBtnNum = ccui.helper.seekWidgetByName(betBtn,"num");
                betBtnNum.setString(this.singleGoldArr[i]);
                betBtnNum.setContentSize(betBtnNum.getVirtualRendererSize());
        		if (i === 1){
                   betBtn.setTouchEnabled(false);
                   betBtn.setBright(false);
                   var text = betBtn.getChildByName("text");
                   text.setColor(cc.color(42,25,6,255));
                   var num = betBtn.getChildByName("num");
                   num.setColor(cc.color(42,25,6,255));
        		}
        		else{
                   betBtn.setTouchEnabled(true);
                   betBtn.setBright(true);
                   var text = betBtn.getChildByName("text");
                   text.setColor(cc.color(254,177,23,255));
                   var num = betBtn.getChildByName("num");
                   num.setColor(cc.color(254,177,23,255));
        		}
        		betBtn.setName(i.toString());
        		this.betBtnList[i] = betBtn;
        		betBtn.addTouchEventListener(this.onBetBtn,this);
            }
    	}
    },
    initHelp:function() {
    	this.helpLayer = ccui.helper.seekWidgetByTag(this.fishscene.node,27477);
        this.helpLayer.setZOrder(20);
        this.showOrHideObj(this.helpLayer,false);
    	this.helpLayer.addTouchEventListener(this.onHelpBack,this);
    	var helpBackBtn = ccui.helper.seekWidgetByTag(this.fishscene.node,27445);
    	helpBackBtn.addTouchEventListener(this.onHelpBack,this);
    },
    initListener:function() {
    	this.listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_GET_GAME_STATUS",
            callback: this.onGetGameStatus.bind(this)
        });
        cc.eventManager.addListener(this.listener1, 1);
        this.listener2 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_BET_SUCCEED",
            callback: this.onBetSucceed.bind(this)
        });
        cc.eventManager.addListener(this.listener2, 2);
        this.listener3 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_BET_FAILED",
            callback: this.onBetFailed.bind(this)
        });
        cc.eventManager.addListener(this.listener3, 3);
        this.listener4 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_LEAVE_GAME_SUCCEED",
            callback: this.onLeaveGameSucceed.bind(this)
        });
        cc.eventManager.addListener(this.listener4, 4);
    },
    onUpdateGameData:function(data) {
    	this.fishData = [];
		for(var i in data){
        	console.log(data[i]);
			this.fishData[i] = data[i];
		}
    },
    hiddenAllLight:function(){
    	for (var i in this.lightList[0]){
    		this.lightList[0][i].setVisible(false);
    	}
    	for (var i in this.lightList[1]){
    		this.lightList[1][i].setVisible(false);
    	}
    },
    showOrHideObj:function(obj,flag) {
    	console.log("showOrHideObj"+obj+flag);
        obj.setVisible(flag);
    	obj.setTouchEnabled(flag);
    },
    onShowOrHideHelp:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
            cc.audioEngine.playEffect(res.effect_3,false);
            console.log("onShowOrHideHelp!!!!"); 
            this.showOrHideObj(this.helpLayer,true);   	
        }
    },
    changeTouchEnabled:function(flag) {
        if (!this.isRepeat) {
            this.rebetBtn.setBright(flag);
            this.rebetBtn.setTouchEnabled(flag);
        }
        for (var i in this.isBet) {
            this.betList[i].setTouchEnabled(flag);
        }
    },
    playFishEffect:function() {
        // this.unschedule(this.startFishTimer);
        this.isPlaying = true;
        this.changeTouchEnabled(false);
        this.playCircle(6,0);
        this.playCircle(12,1);
    },
    playCircle:function(maxNum, tag) {
        var st = this.lastOpenId[tag];
        var delay = 0.2;
        var cnt = 0;
        var _this = this;
        var func = function(){
            // console.log("func!!!!"+st);
            if (_this.fishData.type === 100) {
                _this.endEffect();
                return;
            }
            // console.log("show!!!!"+tag);
            _this.lightList[tag][st].setVisible(true);
            var delayTime = cc.delayTime(delay);
            var callFunc = cc.callFunc(function(target,data){
                // console.log("callFunc!!!!");
                _this.lightList[tag][st].stopAllActions();
                var _st = st;
                if (_this.fishData.type === 201) {
                    var resultCnt = tag === 0 ? _this.fishData.GameResult.f[1] : _this.fishData.GameResult.f[0];
                    var _id = tag === 0 ? st + 12 : st;
                    delay = 0.4;
                    if (_this.fishTypeList[_id].id === resultCnt) {
                        console.log("finish!!!!");
                        _this.resultName[tag] = _this.fishTypeList[_id].name;
                        _this.finishCircleCnt = _this.finishCircleCnt + 1;
                        _this.lastOpenId[tag] = st;
                        // _this.lightList[tag][st].setVisible(false);
                        if (_this.finishCircleCnt === 2) {
                            _this.endEffect();
                        }
                        return;
                    }
                }
                cnt = cnt + 1;
                st = st + 1;
                if (_this.fishData.type === 200) {
                    if (cnt > 8) {
                        delay = 0.05;
                    }
                    else if (cnt > 4) {
                        delay = 0.1;
                    }
                }
                // console.log("st!!!!%d,%d",st,maxNum+1);
                if (st === (maxNum + 1)) {
                    // console.log("reset st!!!!%d,%d",st,maxNum+1);
                    st = 1;
                }
                _this.lightList[tag][_st].setVisible(false);
                func();
            },_this);
            var seq = cc.sequence(delayTime,callFunc); 
            _this.lightList[tag][st].runAction(seq);
            if (tag === 1) {
                cc.audioEngine.playEffect(res.effect_2,false);
            } 
        };
        func();
    },
    endEffect:function() {
        if (this.isDoBet) {
            var delayTime = cc.delayTime(3.0);
            var callFunc = cc.callFunc(function(target,data){
                target.isPlaying = false;
            },this);
            var seq = cc.sequence(delayTime,callFunc); 
            this.runAction(seq);
        }
        else{
            this.isPlaying = false;
        }
        for (var i in this.isBetList) {
            this.isBetList[i][0] = false;
        }
        for (var j=1;j<7;j++) {
            this.betMaskList[j].setVisible(false);
            this.betMaskList[j].setTouchEnabled(false);
            this.betImgList[j].setVisible(false);
        }
        this.betOwn = [];
        this.betEndTime = 20;
        this.finishCircleCnt = 0;
        if (this.isRepeat) {
            this.isRepeat = false;
        }
        this.checkWinResult();
        if (this.fishData.GameResult !== undefined && this.fishData.GameResult !== null && this.fishData.GameResult.f !== undefined && this.fishData.GameResult.f !== null) {
            if (this.fishData.GameResult.f[1] === 1 || this.fishData.GameResult.f[1] === 3 || this.fishData.GameResult.f[1] === 4) {
                this.fishList[1][1].stopAllActions();
                this.fishList[1][1].setRotation(0);
                this.fishList[1][3].setVisible(true);
                this.armature1.removeFromParent(true);
                this.armature1 = null;
                this.fishList[1][5].setVisible(true);
                this.armature2.removeFromParent(true);
                this.armature2 = null;
                this.stopAllActions();
                this.bigWinLayer.removeAllChildrenWithCleanup(true);
                this.showArmature("gold",cc.p(SceneWidth/2,260),1,0,90);
                if (this.fishData.GameResult.f[1] === 1) {
                    var dabuhuo = new cc.Sprite("res/qietu/fish/fish_13.png");
                    dabuhuo.setAnchorPoint(cc.p(0.5,0));
                    dabuhuo.setPosition(cc.p(SceneWidth/2,230));
                    this.bigWinLayer.addChild(dabuhuo,100);
                    var rotateto1 = cc.rotateTo(0.6,15);
                    var rotateto2 = cc.rotateTo(0.6,0);
                    var seq1 = cc.sequence(rotateto1,rotateto2);
                    dabuhuo.runAction(cc.repeatForever(seq1));
                    this.showArmature("shayu",cc.p(400,400),1,-60,100);
                    this.showArmature("moguiyu",cc.p(680,500),1,-150,100);
                    this.showArmature("denglongyu",cc.p(440,220),1,0,100);
                    this.showArmature("wugui",cc.p(640,220),1,0,100);
                }
                else if (this.fishData.GameResult.f[1] === 3) {
                    this.showArmature("shayu",cc.p(SceneWidth/2,692/2),1.5,-30,100);
                }
                else if (this.fishData.GameResult.f[1] === 4) {
                    this.showArmature("moguiyu",cc.p(SceneWidth/2,692/2),1.5,-150,100);
                }
                var delayTime = cc.delayTime(2.0);
                var callFunc = cc.callFunc(function(target,data){
                    target.bigWinLayer.removeAllChildrenWithCleanup(true);
                    target.goBo();
                },this);
                var seq = cc.sequence(delayTime,callFunc);
                this.runAction(seq);
            }
        }
    },
    checkWinResult:function () {
        if (this.fishData.type === 201) {
            var message = [];
            message.type = 0;
            message.cnt = this.fishData.GameResult.c;
            message.outside = this.resultName[1];
            message.inside = this.resultName[0];
            this.chatLayer.setMessage(message,1); 
            this.chatLayer.setMessage(message,3); 
            var isInResult = false;
            if (this.fishData.GameResult.u && this.fishData.GameResult.u.length > 0) {
                for (var i in this.fishData.GameResult.u) {
                    var resultMsg = [];
                    var v = this.fishData.GameResult.u[i];
                    if (v.i === userData.uidx) {
                        isInResult = true;
                        if (v.m > 0) {
                            this.bottomLayoutText.setString("恭喜您获得"+v.m+"点游戏豆");
                            this.bottomLayoutBg.setVisible(true);
                        }
                    }
                    resultMsg.type = 1
                    resultMsg.name = v.i === userData.uidx ? "你" : v.e;
                    resultMsg.id = v.i;
                    resultMsg.msg = v.m.toString();
                    this.chatLayer.setMessage(resultMsg,1);
                    if (v.i === userData.uidx) {
                        this.chatLayer.setMessage(resultMsg,3) 
                    }
                }
            }
            if (!isInResult && this.isDoBet) {
                this.bottomLayoutText.setString("很遗憾您没有中奖！") 
                this.bottomLayoutBg.setVisible(true);
            }
        }
    },
    showExchange:function () {
        this.fishscene.node.addChild(new ExchangeLayer(this.gameId),100);
    },
    showBack:function () {
        this.fishscene.node.addChild(new QuitAlertLayer(this.gameId),100);
    },
    onBet:function(target,event) {
        if (event === ccui.Widget.TOUCH_ENDED){
            cc.audioEngine.playEffect(res.effect_3,false);
            var id = Number(target.getName());
            console.log("onBet!!!!"+id+name);
            this.betMaskList[id].setVisible(true);
            this.betMaskList[id].setTouchEnabled(true);
            var needGold = this.singleGoldArr[this.singleIndex];
            nc.socketCall(new Array(9001,this.betTypeList[id-1],needGold));
        }
    },
    onBetBtn:function(target,event) {
    	if (event === ccui.Widget.TOUCH_ENDED){
            cc.audioEngine.playEffect(res.effect_3,false);
    		var id = Number(target.getName());
    		this.singleIndex = id;
            console.log("onBetBtn!!!!"+id);
    		for (var i=1;i<5;i++) {
    			if (this.singleIndex === i) {
                    this.betBtnList[i].setTouchEnabled(false);
                    this.betBtnList[i].setBright(false);
                    var text = this.betBtnList[i].getChildByName("text");
                    text.setColor(cc.color(42,25,6,255));
                    var num = this.betBtnList[i].getChildByName("num");
                    num.setColor(cc.color(42,25,6,255));
    			}
    			else{
                    this.betBtnList[i].setTouchEnabled(true);
                    this.betBtnList[i].setBright(true);
                    var text = this.betBtnList[i].getChildByName("text");
                    text.setColor(cc.color(254,177,23,255));
                    var num = this.betBtnList[i].getChildByName("num");
                    num.setColor(cc.color(254,177,23,255));
    			}
    		}
    	}
    },
    onRepeatBet:function(target,event) {
        if (event === ccui.Widget.TOUCH_ENDED){
            cc.audioEngine.playEffect(res.effect_3,false);
            console.log("onRepeatBet!!!!");  
            if (!this.isRepeat) {
                this.isRepeat = true;
            }
            var totalCnt = 0;
            for (var i in betHistoryList) {
                totalCnt = totalCnt + betHistoryList[i];
            }
            if (totalCnt > userData.owncash){
                currentScene.addChild(new AlertLayer(this,"余额不足！",true),100);
            }
            else {
                for (var i in betHistoryList) {
                    var delayTime = cc.delayTime(0.1);
                    var callFunc = cc.callFunc(function(target,data){
                        nc.socketCall(new Array(9001,data,betHistoryList[data]));
                    },this,i);
                    var seq = cc.sequence(delayTime,callFunc);
                    this.runAction(seq);
                }
            }
        }
    },
    onHelpBack:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
            cc.audioEngine.playEffect(res.effect_3,false);
            console.log("onHelpBack!!!!");    	
            this.showOrHideObj(this.helpLayer,false);
        }
    },
    onGetGameStatus:function(event) {
    	console.log("onGetGameStatus!!!!"+event+event.getUserData());
    	var data = event.getUserData();
    	this.onUpdateGameData(data);
    	this.initData();
    },
    onBetSucceed:function(event) {
        console.log("onBetSucceed0!!!!"+event+event.getUserData());
        var data = event.getUserData();
        if (!this.isBetList[data.betid][0]) {
            this.isBetList[data.betid][0] = true;
        }
        if (!this.isDoBet) {
            this.isDoBet = true;
        }
        var equipId = 0;
        for (var i in this.singleGoldArr) {
            if (data.betMoney === this.singleGoldArr[i]) {
                equipId = i;
                break;
            }
        }
        if (!this.betMaskList[this.isBetList[data.betid][1]].isVisible()) {
            this.betMaskList[this.isBetList[data.betid][1]].setVisible(true);
            this.betMaskList[this.isBetList[data.betid][1]].setTouchEnabled(true);
        }
        if (this.rebetBtn.isVisible()) {
            this.rebetBtn.setVisible(false);
            this.rebetBtn.setTouchEnabled(false);
        }
        this.betImgList[this.isBetList[data.betid][1]].setVisible(true);
        this.betImgList[this.isBetList[data.betid][1]].loadTexture("res/qietu/fish/equip_"+equipId+".png");
        this.betOwn[data.betid] = data.betMoney;
        for (var i in this.betOwn) {
            betHistoryList[i] = this.betOwn[i];
        }
    },
    onBetFailed:function(event) {
        var data = event.getUserData();
        if (data.msg !== undefined || data.msg !== null) {
            currentScene.addChild(new AlertLayer(this,data.msg,true),100);
        }
        this.betMaskList[this.isBetList[data.betid][1]].setVisible(false);
        this.betMaskList[this.isBetList[data.betid][1]].setTouchEnabled(false);
        this.betImgList[this.isBetList[data.betid][1]].setVisible(false);
    },
    onLeaveGameSucceed:function(event) {
        var data = event.getUserData(); 
        if (data.gameid === this.gameId) {
            this.removeFromParent(true);
        }
    },
    startFishTimer:function(){
        console.log("startFishTimer2!!!!"+this.fishData.type);
		if (this.fishData.type === 100){
			if (this.bottomLayout.isVisible()){
				this.showOrHideObj(this.bottomLayout,false);
			}
			this.betEndTime = this.betEndTime - 1;
	        console.log("startFishTimer2!!!!"+this.betEndTime);
			if (this.betEndTime < 0){
				this.betEndTime = 0;
				// nc.socketCall(new Array(8001));
				// this.unschedule(this.startFishTimer);
			}
    		if (this.betEndTime < 10){
    			this.cdNumber.setString("0"+this.betEndTime);
	    		if (this.betEndTime < 5) {
                    cc.audioEngine.playEffect(res.effect_1,false);
	    			this.cdNumber.setColor(cc.color(255,0,0,255));
	    			var blink = cc.blink(0.5,1);
	    			this.cdNumber.runAction(blink);
	    		}
    		}
    		else{
    			this.cdNumber.setString(this.betEndTime.toString());
    		}
		}
        else if (this.fishData.type === 201) {
            this.toNextTime = this.toNextTime - 1;
            if (this.toNextTime < 0) {
                this.toNextTime = 10;
            }
            if (!this.isPlaying) {
                this.bottomLayoutText.setString("等待开始...还剩"+this.toNextTime+"秒");
            }
            else {
                if (!this.isDoBet) {
                    this.bottomLayoutText.setString("开奖中，请稍后...");
                }
            }
        }
    },
    setIsBigWin:function () {
        this.showLight(cc.p(545,530));
        this.showLight(cc.p(320,250));
        this.showLight(cc.p(760,250));

        this.showArmature("shayu",cc.p(260,250),1,0,100);
        this.showArmature("moguiyu",cc.p(700,250),1,0,100);

        var dabuhuo = new cc.Sprite("res/qietu/fish/fish_13.png");
        dabuhuo.setAnchorPoint(cc.p(0.5,0));
        dabuhuo.setPosition(cc.p(545,445));
        this.bigWinLayer.addChild(dabuhuo,100);
        var rotateto1 = cc.rotateTo(0.6,15);
        var rotateto2 = cc.rotateTo(0.6,0);
        var seq1 = cc.sequence(rotateto1,rotateto2);
        dabuhuo.runAction(cc.repeatForever(seq1));

        var rotateto3 = cc.rotateTo(0.6,15);
        var rotateto4 = cc.rotateTo(0.6,0);
        var seq2 = cc.sequence(rotateto3,rotateto4);
        this.fishList[1][1].runAction(cc.repeatForever(seq2));

        this.fishList[1][3].setVisible(false);
        if (this.armature1 === undefined || this.armature1 === null) {
            this.armature1 = ccs.Armature.create("shayu");
        }
        var anim1 = this.armature1.getAnimation();
        this.panel_shayu.addChild(this.armature1,10);
        this.armature1.setPosition(cc.p(85,50));
        this.armature1.setScaleX(270/480);
        this.armature1.setScaleY(203/280);
        anim1.playWithIndex(0);

        this.fishList[1][5].setVisible(false);
        if (this.armature2 === undefined || this.armature2 === null) {
            this.armature2 = ccs.Armature.create("moguiyu");
        }
        var anim2 = this.armature2.getAnimation();
        this.panel_moguiyu.addChild(this.armature2,10);
        this.armature2.setPosition(cc.p(75,75));
        this.armature2.setScaleX(175/320);
        this.armature2.setScaleY(233/360);
        anim2.playWithIndex(0);

        var delayTime = cc.delayTime(2.0);
        var callFunc = cc.callFunc(function(target,data){
            target.bigWinLayer.removeAllChildrenWithCleanup(true);
        },this);
        var seq = cc.sequence(delayTime,callFunc);
        this.runAction(seq);
    },
    showLight:function (_p) {
        var light = new cc.Sprite(res.light);
        light.setPosition(_p);
        this.bigWinLayer.addChild(light,90);
        var rotateby = cc.rotateBy(1.0,60);
        light.runAction(cc.repeatForever(rotateby));
    },
    showArmature:function (_str,_p,_s,_r,_z) {
        console.log("showArmature!!!!"+_str);
        var armature = ccs.Armature.create(_str);
        armature.setPosition(_p);
        armature.setScale(_s);
        armature.setRotation(_r);
        var anim = armature.getAnimation();
        this.bigWinLayer.addChild(armature,_z);
        anim.playWithIndex(0);
    },
    goBo:function () {
        var bo = new cc.Sprite(res.bo);
        bo.setAnchorPoint(cc.p(0,0));
        bo.setPosition(cc.p(-768,0));
        this.bigWinLayer.addChild(bo,100);
        var move1 = cc.moveTo(1.0,cc.p(SceneWidth+768,0));
        var callFunc1 = cc.callFunc(function(target,data){
            bo.setFlippedX(true);
        },this);
        var move2 = cc.moveTo(1.0,cc.p(-768,0));
        var callFunc2 = cc.callFunc(function(target,data){
            bo.removeFromParent(true);
        },this);
        var seq = new cc.sequence(move1,callFunc1,move2,callFunc2);
        bo.runAction(seq);
    },
    onExit:function() {
        cc.eventManager.removeListener(this.listener1); 
        cc.eventManager.removeListener(this.listener2); 
        cc.eventManager.removeListener(this.listener3); 
        cc.eventManager.removeListener(this.listener4); 
    }
});

var FishScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
    },
    initView:function(data){
        var layer = new FishLayer(data);
        this.addChild(layer);
    }
});