var FishLayer = cc.Layer.extend({
	fishscene:null,
	fishData:[],
	fishList:{
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
	lastOpenId:{inside:1,outside:1},
	gameId:0,
	betEndTime:0,
	toNextTime:10,
	isDoBet:false,
	isRepeat:false,
	singleIndex:0,

	singleGoldArr:[],
	isBetList:[],
	betList:[],
	betBtnList:[],
	outsideLightList:[],
	insideLightList:[],

	fishLayer:null,
	rebetBtn:null,
	cdNumber:null,
	helpLayer:null,

	bottomLayer:null,
	bottomLayout:null,

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
    },
    initFish:function() {
    	var fish = ccui.helper.seekWidgetByName(this.fishscene.node,"fish");
    	var helpBtn = ccui.helper.seekWidgetByTag(this.fishscene.node,27476);
    	helpBtn.addTouchEventListener(this.onShowOrHideHelp,this);
    },
    initBottom:function() {
    	for (var i=1;i<5;i++) {
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
    	for (var i=1;i<13;i++){
    		var outsideLight = ccui.helper.seekWidgetByName(this.fishscene.node,"btn_"+i);
    		outsideLight.setVisible(false);
    		outsideLightList[i] = outsideLight;
    	}
    	for (var i=1;i<7;i++){
    		var insideLight = ccui.helper.seekWidgetByName(this.fishscene.node,"btn_"+i);
    		insideLight.setVisible(false);
    		insideLightList[i] = insideLight;
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
    onBet:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
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
    	if (data.type === 100) {
    		this.toNextTime = 10;
    		if (this.isDoBet) {
    			this.isDoBet = false;
    		}
    		this.betEndTime = 20 - data.time;
    		if (this.betEndTime < 10){
    			this.cdNumber.setString("0"+this.betEndTime);
	    		if (this.betEndTime < 5) {
	    			this.cdNumber.setColor(cc.color(255,0,0,255));
	    		}
    		}
    		else{
    			this.cdNumber.setString(this.betEndTime.toString());
    		}
    		this.schedule(this.startFishTimer.bind(this),1);
    	}
    	else if (data.type === 200) {

    	}
    	else if (data.type === 201) {

    	}
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