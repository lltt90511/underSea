var ChargeLayer = cc.Layer.extend({
	chargescene:null,
	chargeListIOS:new Array(6,12,30,60,118,298),
	chargeListANDROID:new Array(10,50,100,200,500,1000),
	alertType:0,
	chargeNum:0,
	recommendId:0,

	editBox1:null,
	editBox2:null,
	gold1:null,
	gold2:null,

    listener1:null,
    listener2:null,

	ctor:function (_type) {
        this._super();

        console.log("ChargeLayer ctor");
        this.chargescene = ccs.load(res.charge_json);
        this.addChild(this.chargescene.node);

        this.alertType = _type;

        this.initView();
        this.initInput();
        this.initListener();

        nc.socketCall(new Array(21001,-10000,0,0));

        return true;
    },
    initView:function () {
        if (this.alertType === 2) {
        	var bg = ccui.helper.seekWidgetByTag(this.chargescene.node,20212);
        	bg.setVisible(false);
    	  	var bgPanel = ccui.helper.seekWidgetByTag(this.chargescene.node,20041);
		    bgPanel.addTouchEventListener(this.onBack,this);
        }
    	var back = ccui.helper.seekWidgetByName(this.chargescene.node,"back");
        back.addTouchEventListener(this.onBack,this);
    	var conirm = ccui.helper.seekWidgetByName(this.chargescene.node,"confirm");
        conirm.addTouchEventListener(this.onConfirm,this);
       	this.gold1 = ccui.helper.seekWidgetByTag(this.chargescene.node,20082);
       	this.gold2 = ccui.helper.seekWidgetByTag(this.chargescene.node,20085);
        var bar = ccui.helper.seekWidgetByTag(this.chargescene.node,20087);
        for (var i=1;i<7;i++) {
        	var btn = ccui.helper.seekWidgetByName(this.chargescene.node,"btn_"+i);
        	btn.setName(this.chargeListANDROID[i].toString());
        	btn.setTitleText(this.chargeListANDROID[i]+"元1");
        	btn.addTouchEventListener(this.onBtn,this);
        }
    },
    initInput:function () {
    	var tuijianBg = ccui.helper.seekWidgetByTag(this.chargescene.node,20123);
    	var inputSize1 = tuijianBg.getContentSize();
    	this.editBox1 = new cc.EditBox(cc.size(inputSize1.width-60,inputSize1.height),new cc.Scale9Sprite(res.empty));
        this.editBox1.setDelegate(this); 
        this.editBox1.setTag(1);  
        this.editBox1.setPosition(cc.p(275,915));
        this.editBox1.setAnchorPoint(cc.p(0,0.5));
        this.editBox1.setFontSize(40);
        this.editBox1.setPlaceholderFontSize(40);
        this.editBox1.setReturnType(1);
        this.editBox1.setMaxLength(20);
        this.editBox1.setPlaceHolder("请输入推荐人ID");
        this.editBox1.setString("");
        this.chargescene.node.addChild(this.editBox1,1);
        
        var jineBg = ccui.helper.seekWidgetByTag(this.chargescene.node,20156);
    	var inputSize2 = jineBg.getContentSize();
    	this.editBox2 = new cc.EditBox(cc.size(inputSize2.width,inputSize2.height),new cc.Scale9Sprite(res.empty));
        this.editBox2.setDelegate(this); 
        this.editBox2.setTag(2);  
        this.editBox2.setPosition(cc.p(545,640));
        this.editBox2.setAnchorPoint(cc.p(0,0.5));
        this.editBox2.setFontSize(40);
        this.editBox2.setPlaceholderFontSize(40);
        this.editBox2.setReturnType(1);
        this.editBox2.setMaxLength(20);
        this.editBox2.setPlaceHolder("请输入充值金额");
        this.editBox2.setString("");
        this.chargescene.node.addChild(this.editBox2,1);
    },
    initListener:function() {
    	this.listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_CHANGE_GOLD",
            callback: this.onChangeGold.bind(this)
        });
        cc.eventManager.addListener(this.listener1, 1);
        this.listener2 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_GET_CHARGEID_SUCCEED",
            callback: this.onGetChargeIdSucceed.bind(this)
        });
        cc.eventManager.addListener(this.listener2, 2);
    },
    onChangeGold:function() {
        setTextString(this.gold1,userData.owncash);
        setTextString(this.gold2,userData.owncharm);
    },
    onGetChargeIdSucceed:function(data) {
    	if (data.money === -100) {
    		if (data.transid !== 0) {
    			this.recommendId = data.transid;
    			setTextString(this.editBox1,this.recommendId);
    		}
    	} 
    	else {

    	}
    },
    onBack:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onBack!!!!");
            this.removeFromParent(true);
        }
    },
    onBtn:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onBtn!!!!"+Number(target.getName()));
            this.chargeNum = Number(target.getName());
        }
    },
    onConfirm:function(target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onConfirm!!!!");
          	nc.socketCall(new Array(21001,this.chargeNum*100,this.recommendId,2));
        }
    },
    editBoxEditingDidBegin: function (sender) {
        console.log("editBoxEditingDidBegin!!!!%d",sender.getTag());
    },
    editBoxEditingDidEnd: function (sender) {
        console.log("editBoxEditingDidEnd!!!!");
    },
    editBoxTextChanged: function (sender, text) {
        console.log("editBoxTextChanged!!!!");
    },
    editBoxReturn: function (sender) {
        console.log("editBoxReturn!!!!");
    },
    onExit:function() {
        cc.eventManager.removeListener(this.listener1); 
        cc.eventManager.removeListener(this.listener2); 
    }
});