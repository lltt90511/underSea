var ChatLayer = cc.Layer.extend({
	chatScene:null,
	
	currentTabCnt:0,
	isPrivate:false,

	messageList:[],

    listener1:null,
	ctor:function () {
        this._super();

        console.log("ChatLayer ctor");
        this.chatScene = ccs.load(res.chat_json);
        this.addChild(this.chatScene.node);

        this.initView();
        return true;
    },
    initView:function() {
    	for (var i=1;i<5;i++){
    		this.messageList[i] = [];
    	}
    	this.initListener();
    	this.initEditBox();
    },
    initListener:function() {
    	this.listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_CHANGE_GOLD",
            callback: this.onChangeGold.bind(this)
        });    
        cc.eventManager.addListener(this.listener1, 1);
    },
    initEditBox:function() {
    	var input = ccui.helper.seekWidgetByTag(this.chatScene.node,15059);
        var inputSize = input.getContentSize();
        this.editBox = new cc.EditBox(cc.size(inputSize.width-60,inputSize.height),new cc.Scale9Sprite(res.empty));
        this.editBox.setDelegate(this); 
        this.editBox.setTag(1);  
        this.editBox.setPosition(cc.p(170,1285));
        this.editBox.setAnchorPoint(cc.p(0,0.5));
        this.editBox.setFontSize(40);
        this.editBox.setPlaceholderFontSize(40);
        this.editBox.setReturnType(1);
        this.editBox.setMaxLength(20);
        this.editBox.setPlaceHolder("");
        this.editBox.setString("");
        this.chatScene.node.addChild(this.editBox);
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
});