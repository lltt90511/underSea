var BindingLayer = cc.Layer.extend({
	bindingscene:null,
    editBox1:null,
    editBox2:null,
    isGetCode:false,
    sendNumber:"",
	ctor:function () {
        this._super();

        console.log("BindingLayer ctor");
        this.bindingscene = ccs.load(res.binding_json);
        this.addChild(this.bindingscene.node);

        this.initView();
        return true;
    },
    initView:function() {
    	var back = ccui.helper.seekWidgetByName(this.bindingscene.node,"back");
        back.addTouchEventListener(this.onBack,this);
        if (userData.uphoneNummber === undefined || userData.uphoneNummber === null){
            this.initEditBox1();
        }
        else{

        }
    },
    onBack:function(target,event){
    	if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onBack!!!!"+target+event);
            this.removeFromParentAndCleanup(true);
        }
    },
    initEditBox1:function(){
        var text_3 = ccui.helper.seekWidgetByName(this.bindingscene.node,"text_3");
        text_3.setVisible(false);
        var input_3 = ccui.helper.seekWidgetByName(this.bindingscene.node,"input_3");
        input_3.setVisible(false);
        var label_3 = ccui.helper.seekWidgetByName(this.bindingscene.node,"label_3");
        label_3.setVisible(false); 
        var unRegister = ccui.helper.seekWidgetByName(this.bindingscene.node,"unRegister");
        unRegister.setVisible(false); 
        unRegister.setTouchEnabled(false);
        var input_1 = ccui.helper.seekWidgetByName(this.bindingscene.node,"input_1");
        var inputSize1 = input_1.getContentSize();
        this.editBox1 = new cc.EditBox(cc.size(inputSize1.width-60,inputSize1.height),new cc.Scale9Sprite(res.empty));
        this.editBox1.setDelegate(this); 
        this.editBox1.setTag(1);  
        this.editBox1.setPosition(cc.p(170,1285));
        this.editBox1.setAnchorPoint(cc.p(0,0.5));
        this.editBox1.setFontSize(40);
        this.editBox1.setPlaceholderFontSize(40);
        this.editBox1.setReturnType(1);
        this.editBox1.setMaxLength(20);
        this.editBox1.setPlaceHolder("请输入您的手机号码");
        this.editBox1.setString("");
        this.bindingscene.node.addChild(this.editBox1);
        var input_2 = ccui.helper.seekWidgetByName(this.bindingscene.node,"input_2");
        var inputSize2 = input_2.getContentSize();
        this.editBox2 = new cc.EditBox(cc.size(inputSize2.width-60,inputSize2.height),new cc.Scale9Sprite(res.empty));
        this.editBox2.setDelegate(this); 
        this.editBox2.setTag(2);    
        this.editBox2.setPosition(cc.p(170,1065));
        this.editBox2.setAnchorPoint(cc.p(0,0.5));
        this.editBox2.setFontSize(40);
        this.editBox2.setPlaceholderFontSize(40);
        this.editBox2.setReturnType(1);
        this.editBox2.setMaxLength(10);
        this.editBox2.setPlaceHolder("请输入验证码");
        this.editBox2.setString("");
        this.bindingscene.node.addChild(this.editBox2);
        var send = ccui.helper.seekWidgetByName(this.bindingscene.node,"send");
        send.addTouchEventListener(this.onSend,this);
        var btn = ccui.helper.seekWidgetByName(this.bindingscene.node,"btn");
        btn.addTouchEventListener(this.onBinding,this);
    },
    initEditBox2:function(){

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
    onSend:function(target,event){
        if (this.isGetCode){
            return;
        }
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onSend!!!!");
            var string = this.editBox1.getString();
            if (this.editBox1.getString() === ""){
                console.log("empty!!!!");
                currentScene.addChild(new AlertLayer(this,"请输入您的手机号码"),100);
            }
            else if (this.editBox1.getString().length !== 11){
                console.log("11!!!!");
                currentScene.addChild(new AlertLayer(this,"请输入正确的手机号码"),100);
            }
            else{
                if (isNaN(string)){
                    console.log("not number!!!!");
                    currentScene.addChild(new AlertLayer(this,"手机号码应该为数字"),100);
                }
                else{
                    var callStr = "4001^&^1^&^"+string;
                    socketCall(callStr);
                }
            }
        }

    },
    onBinding:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onBinding!!!!");
            var string = this.editBox2.getString();
            if (this.editBox1.getString() === ""){
                console.log("empty!!!!");
                currentScene.addChild(new AlertLayer(this,"请输入验证码"),100);
            }
            else{
                if (isNaN(string)){
                    console.log("not number!!!!");
                    currentScene.addChild(new AlertLayer(this,"验证码应该为数字"),100);
                }
                else{
                    var callStr = "5001^&^1^&^"+string+this.sendNumber;
                    socketCall(callStr);
                }
            }
        }
    },
    confirmFunc:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("confirmFunc@@!!!!");
        }
    }
});