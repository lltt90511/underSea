var CommonTopLayer = cc.Layer.extend({
	commonTopScene:null,
	goldLabel:null,
	vipImage:null,
    targetObj:null,

    listener1:null,
	ctor:function (_targetObj) {
        this._super();

        console.log("CommonTopLayer ctor");
        this.commonTopScene = ccs.load(res.commonTop_json);
        this.addChild(this.commonTopScene.node);
        this.targetObj = _targetObj;
        this.initView();
        return true;
    },
    initView:function() {
    	var name = ccui.helper.seekWidgetByName(this.commonTopScene.node,"name");
        setTextString(name,userData.nickName);
    	this.goldLabel = ccui.helper.seekWidgetByName(this.commonTopScene.node,"num");
        setTextString(this.goldLabel,userData.owncash);
    	this.vipImage = ccui.helper.seekWidgetByName(this.commonTopScene.node,"vip");
        this.vipImage.loadTexture("res/qietu/user/v"+userData.viplevel+".png");
        var exchange = ccui.helper.seekWidgetByName(this.commonTopScene.node,"add");
    	exchange.addTouchEventListener(this.onExchange,this); 
        var charge = ccui.helper.seekWidgetByName(this.commonTopScene.node,"get");
    	charge.addTouchEventListener(this.onCharge,this); 
    	var back = ccui.helper.seekWidgetByName(this.commonTopScene.node,"close");
    	back.addTouchEventListener(this.onBack,this);

    	this.initListener();
    },
    initListener:function() {
    	this.listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_CHANGE_GOLD",
            callback: this.onChangeGold.bind(this)
        });    
        cc.eventManager.addListener(this.listener1, 1);
    },
    onChangeGold:function(event) {
    	this.goldLabel.setString(userData.owncash);
        this.goldLabel.setContentSize(this.goldLabel.getVirtualRendererSize());
    },
    onExchange:function(target,event) {
    	if (event === ccui.Widget.TOUCH_ENDED){
        	console.log("onExchange");
            this.targetObj.showExchange();
    	}
    },
    onCharge:function(target,event) {
    	if (event === ccui.Widget.TOUCH_ENDED){
        	console.log("onCharge");
    	}
    },
    onBack:function(target,event) {
    	if (event === ccui.Widget.TOUCH_ENDED){
        	console.log("onBack");
            this.targetObj.showBack();
    	}
    },
    onExit:function() {
        console.log("CommonTopLayer onExit");
        cc.eventManager.removeListener(listener1); 
    }
});