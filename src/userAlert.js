var UserAlertLayer = cc.Layer.extend({
	  userAlertScene:null,
    bgPanel:null,
	  bgImage:null,
	  user:[],
	  targetObj:null,
	  selectBtnTag:0,

	  ctor:function (_targetObj,_pos,_user) {
        this._super();

        console.log("UserAlertLayer ctor");
        this.userAlertScene = ccs.load(res.userAlert_json);
        this.addChild(this.userAlertScene.node);

        for (var i in _user) {
        	 this.user[i] = _user[i];
        }

        this.targetObj = _targetObj;
        this.initView(_pos);

        return true;
    },
    initView:function (_pos) {
    	  this.bgPanel = ccui.helper.seekWidgetByTag(this.userAlertScene.node,17293);
		    this.bgPanel.addTouchEventListener(this.onBack,this);
    	  this.bgImage = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19966);
    	  this.bgImage.setPosition(_pos);
    	  var head = ccui.helper.seekWidgetByTag(this.userAlertScene.node,17360);
    	  var name = ccui.helper.seekWidgetByTag(this.userAlertScene.node,17363);
    	  setTextString(name,this.user.name);
    	  var id = ccui.helper.seekWidgetByTag(this.userAlertScene.node,17364);
    	  setTextString(id,"("+this.user.id+")");
    	  var grade = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19664);
    	  grade.loadTexture(res["v"+this.user.grade]);
   		  var btn1 = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19967);
   		  var btn2 = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19971);
   		  var btn3 = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19975);
   		  var btn4 = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19977);
   		  var btn5 = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19979);
   		  var btn6 = ccui.helper.seekWidgetByTag(this.userAlertScene.node,19981);
    	  var isShow3 = false;
   		  var isShow4 = false;
   		  var isShow5 = false;
   		  var isShow6 = false;
		    var alertHeight = 590;
   		  if (userData.GM === 1) {
      	   	isShow3 = true;
      		  isShow4 = true;
      		  isShow5 = true;
      		  isShow6 = true;
   		  }
   		  else { 
   			    if (userData.uGrade > this.user.grade){
             		isShow3 = true;
             		isShow4 = true;
            		alertHeight = 450;
       			}	
       			else {
            		alertHeight = 310;
       			}
       			var offset = 590 - alertHeight;
        		head.setPositionY(head.getPositionY()-offset);
        		name.setPositionY(name.getPositionY()-offset);
        		id.setPositionY(id.getPositionY()-offset);
        		grade.setPositionY(grade.getPositionY()-offset);
        		btn1.setPositionY(btn1.getPositionY()-offset);
        		btn2.setPositionY(btn2.getPositionY()-offset);
        		btn3.setPositionY(btn3.getPositionY()-offset);
        		btn4.setPositionY(btn4.getPositionY()-offset);
        		btn5.setPositionY(btn5.getPositionY()-offset);
        		btn6.setPositionY(btn6.getPositionY()-offset);
       	}
   		  this.bgImage.setContentSize(cc.size(this.bgImage.getContentSize().width,alertHeight));
		    btn1.addTouchEventListener(this.onBtn.bind(this),this);
		    btn2.addTouchEventListener(this.onBtn.bind(this),this);		
		    btn3.addTouchEventListener(this.onBtn.bind(this),this);
   		  btn3.setVisible(isShow3);
   		  btn3.setTouchEnabled(isShow3);
		    btn4.addTouchEventListener(this.onBtn.bind(this),this);
   		  btn4.setVisible(isShow4);
   		  btn4.setTouchEnabled(isShow4);
		    btn5.addTouchEventListener(this.onBtn.bind(this),this);
   		  btn5.setVisible(isShow5);
   		  btn5.setTouchEnabled(isShow5);
		    btn6.addTouchEventListener(this.onBtn.bind(this),this);
   		  btn6.setVisible(isShow6);
   		  btn6.setTouchEnabled(isShow6);
    },
    onBack:function (target,event) {
      	if (event === ccui.Widget.TOUCH_ENDED) {
              this.removeFromParent(true);
      	}	
    },
    onBtn:function (target,event) {
    	  if (event === ccui.Widget.TOUCH_ENDED) {
            var tag = target.getTag();
            switch (tag) {
            	case 19967:
            	if (this.targetObj.setPanelSay !== undefined && this.targetObj.setPanelSay !== null) {
            		this.targetObj.setPanelSay(this.user.id,this.user.name,0);
            	}
            	this.removeFromParent(true);
            	break;
            	case 19971:
            	if (this.targetObj.setPanelSay !== undefined && this.targetObj.setPanelSay !== null) {
            		this.targetObj.setPanelSay(this.user.id,this.user.name,0);
            	}
            	this.removeFromParent(true);
            	break;
            	case 19975:
            	this.selectBtnTag = 3;
            	currentScene.addChild(new AlertLayer(this,"是否确定禁言该账号!",false,this.onAlertConfirm.bind(this)),100);
            	break;
            	case 19977:
            	this.selectBtnTag = 4;
            	currentScene.addChild(new AlertLayer(this,"是否确定解除该账号的禁言!",false,this.onAlertConfirm.bind(this)),100);
            	break;
            	case 19979:
            	this.selectBtnTag = 5;
            	currentScene.addChild(new AlertLayer(this,"是否确定封禁该账号!",false,this.onAlertConfirm.bind(this)),100);
            	break;
            	case 19981:
            	this.selectBtnTag = 6;
            	currentScene.addChild(new AlertLayer(this,"是否确定冻结该账号!",false,this.onAlertConfirm.bind(this)),100);
            	break;
            }
      	}	
    },
    onAlertConfirm:function() {
      	switch(this.selectBtnTag) {
        		case 3:
        		nc.socketCall(new Array(19001,1,this.user.id,5));
        		break;
        		case 4:
            	nc.socketCall(new Array(19001,2,this.user.id,0));
        		break;
        		case 5:
            	nc.socketCall(new Array(19001,11,this.user.id,0));
        		break;
        		case 6:
            	nc.socketCall(new Array(19001,12,this.user.id,0));
        		break;
      	}
        this.removeFromParent(true);
    }
});