var ExchangeLayer = cc.Layer.extend({
  	exchangeScene:null,
  	checkList1:[],
  	checkList2:[],
  	checkNum1:2,
  	checkNum2:6,
  	selectNum:1,
  	selectType:1,
  	selectArr:new Array(1,5,10,50,100),
  	gameId:0,
  	bigNum:0,
  	smallNum:0,

  	gold1:null,
  	gold2:null,

    listener1:null,

	  ctor:function (_gameId) {
        this._super();

        console.log("ExchangeLayer ctor");
        this.exchangeScene = ccs.load(res.exchange_json);
        this.addChild(this.exchangeScene.node);

        this.gameId = _gameId;

        if (this.gameId === 11) {
        	this.bigNum = 100000;
        	this.smallNum = 1000;
        } 
 		else if (this.gameId === 12 || this.gameId === 10){
    		this.bigNum = 100;
    		this.smallNum = 10;
		}

        this.initView();
        this.initListener();

        return true;
    },
    initView:function () {
    	var bgPanel = ccui.helper.seekWidgetByTag(this.exchangeScene.node,17167);
	    bgPanel.addTouchEventListener(this.onBack,this);
	    var back = ccui.helper.seekWidgetByTag(this.exchangeScene.node,17212);
	    back.addTouchEventListener(this.onBack,this);
	    var confirm = ccui.helper.seekWidgetByTag(this.exchangeScene.node,20013);
        confirm.addTouchEventListener(this.onConfirm,this);
        this.gold1 = ccui.helper.seekWidgetByTag(this.exchangeScene.node,20038);
	    this.gold2 = ccui.helper.seekWidgetByTag(this.exchangeScene.node,20040);
	    this.onChangeGold();
        for (var i=1;i<=this.checkNum1;i++) {
            var bar = ccui.helper.seekWidgetByTag(this.exchangeScene.node,20002);
            var check = ccui.helper.seekWidgetByName(this.exchangeScene.node,"check_"+i);
            check.setName(i.toString());
            check.addEventListenerCheckBox(this.onCheck1, this);
            check.setTouchEnabled(i===1?false:true);
            check.setSelectedState(i===1?true:false);
            this.checkList1[i] = check;
        }
        for (var i=1;i<=this.checkNum2;i++) {
            var bar = ccui.helper.seekWidgetByTag(this.exchangeScene.node,20010);
            var check = ccui.helper.seekWidgetByName(this.exchangeScene.node,"check_"+i);
            check.setName(i.toString());
            check.addEventListenerCheckBox(this.onCheck2, this);
            check.setTouchEnabled(i===1?false:true);
            check.setSelectedState(i===1?true:false);
            this.checkList2[i] = check;
        }
        var text1 = ccui.helper.seekWidgetByTag(this.exchangeScene.node,20012);
        setTextString(text1,"大喇叭("+this.bigNum+")");
        var text2 = ccui.helper.seekWidgetByTag(this.exchangeScene.node,20017);
        setTextString(text2,"小喇叭("+this.smallNum+")");
    },
    initListener:function() {
    	this.listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_CHANGE_GOLD",
            callback: this.onChangeGold.bind(this)  
        });    
        cc.eventManager.addListener(this.listener1, 1);
    },
    onBack:function (target,event) {
      	if (event === ccui.Widget.TOUCH_ENDED) {
            this.removeFromParent(true);
      	}	
    },
    onConfirm:function (target,event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
            var p = this.selectType === 1 ? this.bigNum : this.smallNum;
            var n = 0;
            if (this.selectNum < 6) {
                n = this.selectArr[this.selectNum];
            }
            else {
                n = Math.floor(userdata.owncharm/p);
            }
            if (userData.owncharm < n*p) {
                currentScene.addChild(new AlertLayer(this,"点数不足，请前往商城充值",true),100);
                return;
            }
            nc.socketCall(new Array(17001,n*p));
        }   
    },
    onChangeGold:function () {
        setTextString(this.gold1,userData.owncash);
        setTextString(this.gold2,userData.owncharm);
    },
    onCheck1:function(target,type) {
        var tag = target.getTag();
        var id = Number(target.getName());
        this.selectType = id;
        if (type === ccui.CheckBox.EVENT_SELECTED) {
            for (var i in this.checkList1) {
                if (this.checkList1[i].getTag() === tag) {
                    this.checkList1[i].setSelectedState(true);
                    this.checkList1[i].setTouchEnabled(false);
                }
                else {
                    this.checkList1[i].setSelectedState(false);
                    this.checkList1[i].setTouchEnabled(true);
                }
            }         
        }
    },
    onCheck2:function(target,type) {
        var tag = target.getTag();
        var id = Number(target.getName());
        this.selectNum = id;
        if (type === ccui.CheckBox.EVENT_SELECTED) {
            for (var i in this.checkList2) {
                if (this.checkList2[i].getTag() === tag) {
                    this.checkList2[i].setSelectedState(true);
                    this.checkList2[i].setTouchEnabled(false);
                }
                else {
                    this.checkList2[i].setSelectedState(false);
                    this.checkList2[i].setTouchEnabled(true);
                }
            }         
        }
    },
    onExit:function(){
        cc.eventManager.removeListener(this.listener1); 
    }
});