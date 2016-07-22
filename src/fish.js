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
	singleIndex:0,
    finishCircleCnt:0,
    insideId:1,
    outsideId:1,

	singleGoldArr:[],
	isBetList:[],
	betList:[],
	betBtnList:[],
	lightList:[],
    fishList:[],
    resultName:[],
    betTypeList:{3,4,5,6,13,14},

	fishLayer:null,
	rebetBtn:null,
	cdNumber:null,
	helpLayer:null,

	bottomLayer:null,
	bottomLayout:null,
    bottomLayoutText:null,
    bottomLayoutBg:null,

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
			this.singleGoldArr[betData.id] = betData.gold;
		}

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
    },
    initData:function() {
        if (this.fishData.type === 100) {
            if (this.betEndTime < 10) {
                this.cdNumber.setString("0"+this.betEndTime);
                if (this.betEndTime < 5) {
                    this.cdNumber.setColor(cc.color(255,0,0,255));
                }
            }
            else{
                this.cdNumber.setString(this.betEndTime.toString());
            }
            this.schedule(this.startFishTimer.bind(this),1);
            this.changeTouchEnabled(true);
        }
        else if (this.fishData.type === 200 || this.fishData.type === 201) {
            this.cdNumber.setString("00");
            this.cdNumber.setColor(cc.color(204,255,255,255));
            this.rebetBtn.setBright(false);
            this.rebetBtn.setTouchEnabled(false);
            this.bottomLayout.setVisible(true);
            this.bottomLayout.setTouchEnabled(true);
            this.playFishEffect();
            if (this.fishData.type === 200) {
                this.bottomLayoutText.setString("开奖中......");
            }
            else {
                this.bottomLayoutText.setString("开奖中，请稍后...");
                if (this.fishData.GameResult.f[1] === 1 || this.fishData.GameResult.f[1] === 3 || this.fishData.GameResult.f[1] === 4){

                }
            }
        }
    },
    initFish:function() {
    	var fish = ccui.helper.seekWidgetByName(this.fishscene.node,"fish");
    	var helpBtn = ccui.helper.seekWidgetByTag(this.fishscene.node,27476);
    	helpBtn.addTouchEventListener(this.onShowOrHideHelp,this);
    },
    initBottom:function() {
    	for (var i=1;i<7;i++) {
            var bet = ccui.helper.seekWidgetByName(this.fishscene.node,"bet_"+i);
            bet.setName(i.toString);
            this.betList[i] = bet;
            bet.addTouchEventListener(this.onBet,this);
            this.isBetList[i] = this.betTypeList[i-1];
            if (i < 5) {
        		var betBtn = ccui.helper.seekWidgetByName(this.fishscene.node,"btn_"+i);
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
        this.showOrHideObj(this.helpLayer,false);
    	this.helpLayer.addTouchEventListener(this.onHelpBack,this);
    	var helpBackBtn = ccui.helper.seekWidgetByTag(this.fishscene.node,27445);
    	helpBackBtn.addTouchEventListener(this.onHelpBack,this);
    },
    initListener:function() {
    	var _listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_GET_GAME_STATUS",
            callback: this.onGetGameStatus.bind(this)
        });    
        cc.eventManager.addListener(_listener1, 1);
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
            console.log("onShowOrHideHelp!!!!"); 
            this.showOrHideObj(this.helpLayer,true);   	
        }
    },
    changeTouchEnabled:function(flag) {
        if (!this.isRepeat) {
            this.rebetBtn.setBright(flag);
            this.rebetBtn.setTouchEnabled(flag);
        }
        for (var i in this.isBet){
            this.betList[i].setTouchEnabled(flag);
        }
    },
    playFishEffect:function() {
        this.unschedule(this.startFishTimer);
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
            console.log("func!!!!"+st);
            if (_this.fishData.type === 100) {
                _this.endEffect();
                return;
            }
            console.log("show!!!!");
            _this.lightList[tag][st].setVisible(true);
                        var delayTime = cc.delayTime(delay);
                        var callFunc = cc.callFunc(function(target,data){
                console.log("callFunc!!!!");
                _this.lightList[tag][st].stopAllActions();
                var _st = st;
                if (_this.fishData.type === 201) {
                    var resultCnt = tag === 0 ? _this.fishData.GameResult.f[1] : _this.fishData.GameResult.f[0];
                    var _id = tag === 0 ? st + 12 : st;
                    delay = 0.4;
                    if (_this.fishTypeList[_id].id === resultCnt) {
                        console.log("finish!!!!");
                        this.resultName[tag] = _this.fishTypeList[_id].name;
                        _this.finishCircleCnt = _this.finishCircleCnt + 1;
                        _this.lastOpenId[tag] = st;
                        _this.lightList[tag][st].setVisible(false);
                        if (_this.finishCircleCnt === 2) {
                            _this.endEffect();
                        }
                        return;
                    }
                }
                cnt = cnt + 1;
                st = st + 1;
                if (_this.fishData.type === 200) {
                    if (cnt > 4) {
                        delay = 0.1;
                    }
                    else if (cnt > 8) {
                        delay = 0.05;
                    }
                }
                console.log("st!!!!%d,%d",st,maxNum+1);
                if (st === (maxNum + 1)) {
                    console.log("reset st!!!!%d,%d",st,maxNum+1);
                    st = 1;
                }
                _this.lightList[tag][_st].setVisible(false);
                func();
            },_this);
            var seq = cc.sequence(delayTime,callFunc); 
            _this.lightList[tag][st].runAction(seq);
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
        for (var i in isBetList) {
            isBetList[0] = false;
        }
    },
    onBet:function(target,event) {
        if (event == ccui.Widget.TOUCH_ENDED){
        }
    },
    onBetBtn:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
    		var name = Number(target.getName());
    		this.singleIndex = name;
            console.log("onBetBtn!!!!"+name);
    		for (var i=1;i<5;i++){
    			if (this.singleIndex === i){
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
    onHelpBack:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
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
    startFishTimer:function(){
    	if (this.isRepeat) {
    	console.log("startFishTimer1!!!!"+this.isRepeat);
    		this.isRepeat = false;
    		this.unschedule(this.startFishTimer);
    	}
    	else{
    	console.log("startFishTimer2!!!!"+this.fishData.type);
    		if (this.fishData.type === 100){
    			if (this.bottomLayout.isVisible()){
    				this.showOrHideObj(this.bottomLayout,false);
    			}
    			this.betEndTime = this.betEndTime - 1;
    	console.log("startFishTimer2!!!!"+this.betEndTime);
    			if (this.betEndTime < 0){
    				this.betEndTime = 0;
    				socketCall("8001");
    				this.unschedule(this.startFishTimer);
    			}
	    		if (this.betEndTime < 10){
	    			this.cdNumber.setString("0"+this.betEndTime);
		    		if (this.betEndTime < 5) {
		    			this.cdNumber.setColor(cc.color(255,0,0,255));
		    			var blink = cc.blink(0.5,1);
		    			this.cdNumber.runAction(blink);
		    		}
	    		}
	    		else{
	    			this.cdNumber.setString(this.betEndTime.toString());
	    		}
    		}
            else
            {
    			this.unschedule(this.startFishTimer);
            }
    	}
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