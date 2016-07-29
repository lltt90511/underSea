var ChatLayer = cc.Layer.extend({
	chatScene:null,
	replaceStr:"''",

    nameType:0,
	currentTabCnt:1,
	isPrivate:0,
    privateCnt:0,
    max_list_y:-500,
    isShowSay:false,
    targetId:-1,
    targetName:"",
    WIDTH:1080,
    fontHeight:52,
    defultTitleW:110,
    messageCnt1:0,
    messageCnt2:0,

    tabBtnList:[],
    listViewList:[],
	messageList:[],
    targetList:[],
    userRankList:[],

    tabText1:null,
    tabText2:null,
    checkBox:null,
    say:null,
    sayText:null,
    sayBg:null,
    sayLabelList:[],
    sayLineList:[],

    listener1:null,
    listener2:null,
    listener3:null,
    listener4:null,
    listener5:null,
    listener6:null,
    listener7:null,
    listener8:null,
    listener9:null,
    listener10:null,

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
            var tabBtn = ccui.helper.seekWidgetByName(this.chatScene.node,"tab_"+i);
            tabBtn.setName(i.toString());
            tabBtn.addTouchEventListener(this.onTab,this);
            this.tabBtnList[i] = tabBtn;
            var listView = ccui.helper.seekWidgetByName(this.chatScene.node,"listView"+i);
            listView.setVisible(i === 1?true:false);
            listView.setTouchEnabled(i === 1?true:false);
            listView.removeAllItems();
            this.listViewList[i] = listView;
    	}
        this.tabText1 = ccui.helper.seekWidgetByTag(this.chatScene.node,15044);
        this.tabText2 = ccui.helper.seekWidgetByTag(this.chatScene.node,17404);
        this.checkBox = ccui.helper.seekWidgetByName(this.chatScene.node,"check");
        this.checkBox.addEventListener(this.onCheck, this);
        var sendBtn = ccui.helper.seekWidgetByName(this.chatScene.node,"send");
        sendBtn.addClickEventListener(this.onSend.bind(this));
    	this.initListener();
    	this.initEditBox();
        this.resetTabStatus();
        this.resetPanelSay();

        nc.socketCall({1:6101,2:0});
    },
    initListener:function() {
    	this.listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_SEND_MESSAGE_SUCCEED",
            callback: this.onSendMessageSucceed.bind(this)
        });    
        cc.eventManager.addListener(this.listener1, 1);
        this.listener2 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_SEND_MESSAGE_FAILED",
            callback: this.onSendMessageFailed.bind(this)
        });    
        cc.eventManager.addListener(this.listener2, 2);
        this.listener3 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_GET_MESSAGE",
            callback: this.onSendMessageSucceed.bind(this)
        });    
        cc.eventManager.addListener(this.listener3, 3);
        this.listener4 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_ENTER_GAME_NOTICE",
            callback: this.onEnterGameNotice.bind(this)
        });    
        cc.eventManager.addListener(this.listener4, 4);
        this.listener5 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_EXIT_GAME_NOTICE",
            callback: this.onExitGameNotice.bind(this)
        });    
        cc.eventManager.addListener(this.listener5, 5);
        this.listener6 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_GET_USER_LIST_SUCCEED",
            callback: this.onGetUserListSucceed.bind(this)
        });    
        cc.eventManager.addListener(this.listener6, 6);
        this.listener7 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_GET_USER_LIST_FAILED",
            callback: this.onGetUserListFailed.bind(this)
        });    
        cc.eventManager.addListener(this.listener7, 7);
        this.listener8 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_SYSTEM_CONTEXT",
            callback: this.onSystemContext.bind(this)
        });    
        cc.eventManager.addListener(this.listener8, 8);
        this.listener9 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_GET_SYSTEM_MESSAGE",
            callback: this.onGetSystemMessage.bind(this)
        });    
        cc.eventManager.addListener(this.listener9, 9);
        this.listener10 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "ON_USER_OPERATE_SUCCEED",
            callback: this.onUserOperateSucceed.bind(this)
        });    
        cc.eventManager.addListener(this.listener10, 10);
    },
    initEditBox:function() {
    	var input = ccui.helper.seekWidgetByTag(this.chatScene.node,15059);
        var inputSize = input.getContentSize();
        this.editBox = new cc.EditBox(cc.size(inputSize.width-128,inputSize.height),new cc.Scale9Sprite(res.empty));
        this.editBox.setDelegate(this); 
        this.editBox.setTag(1);  
        this.editBox.setPosition(cc.p(418,55));
        this.editBox.setAnchorPoint(cc.p(0,0.5));
        this.editBox.setFontSize(40);
        this.editBox.setPlaceholderFontSize(40);
        this.editBox.setReturnType(1);
        this.editBox.setMaxLength(20);
        this.editBox.setPlaceHolder("");
        this.editBox.setString("");
        this.chatScene.node.addChild(this.editBox);
    },
    initRankView:function(_list) {
        var cnt = this.userRankList.length;
        for (var i in _list) {
            this.userRankList.push(_list[i]);
            addRankItem(_list[i],cnt);
            cnt = cnt + 1;
        }
    },
    addRankItem:function(item,index) {
        var obj = ccui.helper.seekWidgetByTag(this.chatScene.node,15114).clone();
        obj.setTouchEnabled(true);
        var user = [];
        user.grade = item._uGrade;
        user.id = item._uidx;
        user.name = item._nickName;
        user.sex = item._sex;
        user.pic = item._picUrl;
        obj.setUserData(user);
        obj.addTouchEventListener(this.onUser,this);
        var grade = ccui.helper.seekWidgetByName(obj,"grade");
        grade.loadTexture(res["v"+item.grade]);
        var name = ccui.helper.seekWidgetByName(obj,"name");
        setTextString(name,user.name);
        var id = ccui.helper.seekWidgetByName(name,"id");
        setTextString(id,"("+user.id+")");
        if (index !== undefined && index !== null && typeof index === "number") {
            this.listViewList[4].insertCustomItem(obj,index);
        }
        else {
            this.listViewList[4].pushBackCustomItem(obj);
        }
    },       
    resetTabStatus:function() {
        this.resetTab(1);
        this.resetTab(2);
        this.resetTab(3);
        this.resetTab(4);
        this.resetListOrder();
    },
    resetTab:function(tag) {
        var flag = true;
        if (tag === this.currentTabCnt) {
            flag = false;
        }
        this.tabBtnList[tag].setBright(flag);
        this.tabBtnList[tag].setTouchEnabled(flag);
        this.listViewList[tag].setVisible(!flag);
        this.listViewList[tag].setTouchEnabled(!flag);
    },
    resetListOrder:function() {
        for (var i=1;i<5;i++) {
            if (i === this.currentTabCnt) {
                this.listViewList[i].setZOrder(10);
            }
            else {
                this.listViewList[i].setZOrder(0);
            }
        }
    },
    resetPanelSay:function() {
        this.sayText = ccui.helper.seekWidgetByTag(this.chatScene.node,19871);
        setTextString(this.sayText,"所有人");
        this.sayBg = ccui.helper.seekWidgetByTag(this.chatScene.node,18534);
        for (var i=1;i<7;i++) {
            var sayLabel = ccui.helper.seekWidgetByName(this.chatScene.node,"label_"+i);
            sayLabel.setName(i.toString());
            if (i === 1){
                sayLabel.setTouchEnabled(true);
            }
            sayLabel.addTouchEventListener(this.onSayLabel,this);
            this.sayLabelList[i] = sayLabel;
            if (i<6) {
                var sayLine = ccui.helper.seekWidgetByName(this.chatScene.node,"line_"+i);
                this.sayLineList[i] = sayLine;
            }
        }
        this.say = ccui.helper.seekWidgetByTag(this.chatScene.node,19869);
        this.say.setTouchEnabled(true);
        this.say.addTouchEventListener(this.onSay,this);
        this.setSayList();
    },
    setSayList:function() {
        for (var i=1;i<6;i++){
            if (this.targetList.length >= i){
                this.sayLineList[i].setVisible(true); 
                this.sayLabelList[i+1].setVisible(true);
                this.sayLabelList[i+1].setTouchEnabled(true);
                setTextString(this.sayLabelList[i+1],this.targetList[i]);
            }
            else{
                this.max_list_y = this.max_list_y + 80;
                this.sayLineList[i].setVisible(false); 
                this.sayLabelList[i+1].setVisible(false);
                this.sayLabelList[i+1].setTouchEnabled(false);
            }
        }
        this.sayBg.setContentSize(cc.size(390,-this.max_list_y));
        this.sayBg.setPositionY(this.max_list_y);
    },
    setPanelSay:function(_id,_name,_private) {
        this.nameType = 1;
        var isIn = false;
        for (var i in this.targetList) {
            if (_id === this.targetList[i].id && _name === this.targetList[i].name) {
                isIn = true;
                break;
            }
        }
        if (!isIn) {
            var _t = [];
            _t.id = _id;
            _t.name = _name;
            this.targetList.push(_t);
            if (this.targetList.length > 5) {
                var removeT = this.targetList.shift();
            }
            this.setSayList();
        }
        this.targetId = _id;
        this.targetName = _name;
        this.isPrivate = _private;
        setTextString(this.sayText,_name);
        this.checkBox.setTouchEnabled(true);
        this.checkBox.setSelectedState(_private === 1 ? true : false)
    },
    setMessage:function(message,id) {
        this.messageList[id].push(message);
        if (this.messageList[id].length > 50){
            this.messageList[id].shift();
            this.listViewList[id].removeItem(0);
        }
        this.addMessage(message,this.listViewList[id]);
    },
    addMessage:function(message, list, time){
        if (time === undefined || time === null) {
            time = 0.1;
        }
        var richWidth = 0;
        // var func = function(){
        var _label = new ccui.Text();
        _label.setFontSize(40);
        _label.setFontName(DEFAULT_FONT);
        var layout = new ccui.Layout();
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color(0,0,0,255));
        var richText = new ccui.RichText();
        richText.ignoreContentAdaptWithSize(false);
        richText.setContentSize(cc.size(this.WIDTH,this.fontHeight));
        if (message.time === undefined || message.time === null) {
            message.time = "";
        }
        var timeText = new ccui.RichElementText(1,cc.color(255,255,255,255),255,message.time,DEFAULT_FONT,40);
        richText.pushBackElement(timeText);
        _label.setString(message.time); 
        richWidth = richWidth + _label.getContentSize().width;
        switch (message.type) {
            case -3: 
            var text1 = new ccui.RichElementText(2,cc.color(255,0,0,255),255,"系统消息:"+message.msg,DEFAULT_FONT,40);
            richText.pushBackElement(text1);
            _label.setString(nowStr+"系统消息:"+message.msg);
            richWidth = _label.getContentSize();
            break;
            case -2:
            case 3:
            case 4:
            case 5:
            var say = "对";
            var msg = message.msg;
            if (message.type === -2) {
                say = "被";
            }
            else{
                msg = "说："+message.msg;
                if (message.type === 5) {
                    say = "悄悄对";
                }
            }
            var image1 = new ccui.RichElementImage(2, cc.color(255,255,255,255), 255, res["v"+message[0].grade]);
            richText.pushBackElement(image1);
            richWidth = richWidth + this.defultTitleW;
            var text1 = new ccui.RichElementText(3,cc.color(254,177,23,255),255,message[0].name,DEFAULT_FONT,40);         
            richText.pushBackElement(text1); 
            _label.setString(message[0].name);
            var _layout = new ccui.Layout();
            _layout.setUserData(message[0]);
            _layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            _layout.setBackGroundColor(cc.color(255,0,0,255));
            _layout.setContentSize(cc.size(_label.getContentSize().width,this.fontHeight));
            _layout.setPosition(cc.p(richWidth,0));       
            _layout.setTouchEnabled(true);
            _layout.addTouchEventListener(this.onTouchName,this);
            layout.addChild(_layout,1);
            richWidth = richWidth + _label.getContentSize().width;
            var text2 = new ccui.RichElementText(4,cc.color(255,255,255,255),255,say,DEFAULT_FONT,40)         
            richText.pushBackElement(text2); 
            _label.setString(say);    
            richWidth = richWidth + _label.getContentSize().width;
            var image2 = new ccui.RichElementImage(5, cc.color(255,255,255,255), 255, res["v"+message[1].grade]);
            richText.pushBackElement(image2);
            richWidth = richWidth + this.defultTitleW;
            var text3 = new ccui.RichElementText(6,cc.color(254,177,23,255),255,message[1].name,DEFAULT_FONT,40);         
            richText.pushBackElement(text3);
            _label.setString(message[1].name);
            var _layout1 = new ccui.Layout();
            _layout1.setUserData(message[1]);
            _layout1.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            _layout1.setBackGroundColor(cc.color(255,0,0,255));
            _layout1.setContentSize(cc.size(_label.getContentSize().width,this.fontHeight)); 
            _layout1.setPosition(cc.p(richWidth,0));     
            _layout1.setTouchEnabled(true);
            _layout1.addTouchEventListener(this.onTouchName,this);
            layout.addChild(_layout1,1);
            richWidth = richWidth + _label.getContentSize().width;
            var text4 = new ccui.RichElementText(7,cc.color(255,255,255,255),255,msg,DEFAULT_FONT,40);         
            richText.pushBackElement(text4); 
            _label.setString(msg);
            richWidth = richWidth + _label.getContentSize().width;
            var h = this.fontHeight*(Math.ceil(richWidth/(this.WIDTH-52))-1);
            _layout.setPositionY(h);  
            _layout1.setPositionY(h);  
            break;
            case -1:
            var _welcome = "";
            var _room = "";
            if (message.grade < 11) {
                _welcome = "欢迎";
                _room = "进入房间";
            }
            else if (message.grade < 17){
                _welcome = "欢迎";
                _room = "莅临指导";
            }
            else if (message.grade < 25){
                _welcome = "热烈欢迎";
                _room = "屈尊降临"; 
            }
            else if (message.grade < 27){
                _welcome = "全体起立，恭候";
                _room = "大驾光临";
            }
            else if (message.grade === 27){
                _welcome = "全体起立，恭候";
                _room = "创世之神降临凡间";
            }
            else if (message.grade === 28){
                _welcome = "全体起立，恭候";
                _room = "宇宙霸主降临凡间";
            }
            var text1 = new ccui.RichElementText(2,cc.color(255,252,204,255),255,_welcome,DEFAULT_FONT,40);
            richText.pushBackElement(text1);
            _label.setString(_welcome); 
            richWidth = richWidth + _label.getContentSize().width;
            var image1 = new ccui.RichElementImage(3, cc.color(255,255,255,255), 255, res["v"+message.grade]);
            richText.pushBackElement(image1);
            richWidth = richWidth + this.defultTitleW;
            var text2 = new ccui.RichElementText(4,cc.color(253,78,62,255),255,message.name,DEFAULT_FONT,40);         
            richText.pushBackElement(text2);
            _label.setString(message.name);
            var _layout = new ccui.Layout();
            _layout.setUserData(message);
            _layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            _layout.setBackGroundColor(cc.color(255,0,0,255));
            _layout.setContentSize(cc.size(_label.getContentSize().width,this.fontHeight)); 
            _layout.setPosition(cc.p(richWidth,0));     
            _layout.setTouchEnabled(true);
            _layout.addTouchEventListener(this.onTouchName,this);
            layout.addChild(_layout,1);
            richWidth = richWidth + _label.getContentSize().width;
            var text3 = new ccui.RichElementText(5,cc.color(255,252,204,255),255,_room,DEFAULT_FONT,40);
            richText.pushBackElement(text3);
            _label.setString(_room); 
            richWidth = richWidth + _label.getContentSize().width;
            var h = this.fontHeight*(Math.ceil(richWidth/(this.WIDTH-52))-1);
            _layout.setPositionY(h);  
            break;
            case 0:
            var text1 = new ccui.RichElementText(2,cc.color(255,252,204,255),255,"第【"+message.cnt+"】轮游戏，选中的海洋生物是",DEFAULT_FONT,40);
            richText.pushBackElement(text1);
            _label.setString("第【"+message.cnt+"】轮游戏，选中的海洋生物是"); 
            richWidth = richWidth + _label.getContentSize().width;
            var text2 = new ccui.RichElementText(3,cc.color(253,78,62,255),255,message.inside,DEFAULT_FONT,40);
            richText.pushBackElement(text23);
            _label.setString(message.inside); 
            richWidth = richWidth + _label.getContentSize().width;
            var text3 = new ccui.RichElementText(4,cc.color(255,252,204,255),255,"和",DEFAULT_FONT,40);
            richText.pushBackElement(text3);
            _label.setString("和"); 
            richWidth = richWidth + _label.getContentSize().width;
            var text4 = new ccui.RichElementText(5,cc.color(253,78,62,255),255,message.outside,DEFAULT_FONT,40);
            richText.pushBackElement(text4);
            _label.setString(message.outside); 
            richWidth = richWidth + _label.getContentSize().width;
            break;
            case 1:
            var image1 = new ccui.RichElementImage(2, cc.color(255,255,255,255), 255, res["v"+message.grade]);
            richText.pushBackElement(image1);
            richWidth = richWidth + this.defultTitleW;
            var text1 = new ccui.RichElementText(3,cc.color(254,177,23,255),255,message.name,DEFAULT_FONT,40);
            richText.pushBackElement(text1);
            _label.setString(message.name); 
            richWidth = richWidth + _label.getContentSize().width;
            var text2 = new ccui.RichElementText(4,cc.color(255,255,255,255),255,"获得",DEFAULT_FONT,40);         
            richText.pushBackElement(text2);  
            _label.setString("获得"); 
            richWidth = richWidth + _label.getContentSize().width;
            var text3 = new ccui.RichElementText(5,cc.color(253,78,62,255),255,message.msg,DEFAULT_FONT,40);         
            richText.pushBackElement(text3); 
            _label.setString(message.msg); 
            richWidth = richWidth + _label.getContentSize().width;
            var text4 = new ccui.RichElementText(6,cc.color(255,255,255,255),255,"点游戏豆",DEFAULT_FONT,40);         
            richText.pushBackElement(text4);
            _label.setString("点游戏豆"); 
            richWidth = richWidth + _label.getContentSize().width;
            break;
            case 2:
            var image1 = new ccui.RichElementImage(2, cc.color(255,255,255,255), 255, res["v"+message.grade]);
            richText.pushBackElement(image1);
            richWidth = richWidth + this.defultTitleW;
            var text1 = new ccui.RichElementText(3,cc.color(253,78,62,255),255,message.name,DEFAULT_FONT,40);         
            richText.pushBackElement(text1);
            _label.setString(message.name);
            var _layout = new ccui.Layout();
            _layout.setUserData(message);
            _layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            _layout.setBackGroundColor(cc.color(255,0,0,255));
            _layout.setContentSize(cc.size(_label.getContentSize().width,this.fontHeight)); 
            _layout.setPosition(cc.p(richWidth,0));     
            _layout.setTouchEnabled(true);
            _layout.addTouchEventListener(this.onTouchName,this);
            layout.addChild(_layout,1);
            richWidth = richWidth + _label.getContentSize().width;
            var text2 = new ccui.RichElementText(4,cc.color(255,255,255,255),255,"说："+message.msg,DEFAULT_FONT,40);         
            richText.pushBackElement(text2);
            _label.setString("说："+message.msg); 
            richWidth = richWidth + _label.getContentSize().width;
            var h = this.fontHeight*(Math.ceil(richWidth/(this.WIDTH-52))-1);
            _layout.setPositionY(h);  
            break;
            default:
            break;
        }
        richText.setContentSize(cc.size(this.WIDTH-52, this.fontHeight*Math.ceil(richWidth/(this.WIDTH-52))));
        layout.setContentSize(cc.size(richText.getContentSize().width+20,richText.getContentSize().height));
        richText.setAnchorPoint(cc.p(0,0));
        richText.setPosition(cc.p(-richText.getContentSize().width/2,-richText.getContentSize().height/2));
        layout.addChild(richText);   
        list.pushBackCustomItem(layout);
        // }
    },
    onTab:function(target,event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
            var id = Number(target.getName());
            this.currentTabCnt = id;
            if (id === 2) {
                this.privateCnt = 0;
                setTextString(this.tabText1,"私聊");
            }
            this.resetTabStatus();
        }
    },
    onSend:function() {
        console.log("onSend");
        var str = this.editBox.getString();
        if (str === undefined || str === null || str === "" ) {
            return;
        } 
        var reg = new RegExp('"',"g");
        str = str.replace(reg,this.replaceStr);
        if (this.nameType === 0) {
            this.targetId = -1;
            this.targetName = "";
        }
        nc.socketCall({1:11001,2:this.targetId,3:this.isPrivate,4:str});
        this.editBox.setString("");
    },
    onCheck:function(target,type) {
        // if (this.nameType === 0) {
        //     return;
        // }
        switch (type) {
            case ccui.CheckBox.EVENT_SELECTED:
                console.log("checkbox select");
                // target.image.setVisible(true);
                this.isPrivate = true;
                break;
            case ccui.CheckBox.EVENT_UNSELECTED:
                console.log("checkbox unselect");
                // target.image.setVisible(false);
                this.isPrivate = false;
                break;
            default:
                break;
        }
    },
    onSay:function(target,event) {
            console.log("onSay");
        if (event === ccui.Widget.TOUCH_ENDED) {
            // if (this.targetList.length === 0){
            //     return;
            // }
            console.log("onSay1");
            this.say.setTouchEnabled(false);
            var posY = this.sayBg.getPositionY();
            var movePos = cc.p(0,0);
            if (this.isShowSay) {
                this.isShowSay = false;
                movePos = cc.p(0,this.max_list_y);
            }
            else {
                this.isShowSay = true;
            }
            var move = cc.moveTo(0.5,movePos);
            var _this = this;
            var callFunc = cc.callFunc(function(target,data){
                _this.say.setTouchEnabled(true);
            },this);
            var seq = cc.sequence(move,callFunc); 
            this.sayBg.runAction(seq);
        }
    },
    onSayLabel:function(target,event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
            var id = Number(target.getName());
            if (id === 1) {
                this.targetId = -1;
                this.targetName = ""; 
                this.nameType = 0;
                this.isPrivate = 0;
                this.checkBox.setTouchEnabled(false);
                if (this.checkBox.getSelectedState()) {
                    this.checkBox.setSelectedState(false);
                }
                setTextString(this.sayText,"所有人");
            }
            else {
                this.targetId = this.targetList[id].id;
                this.targetName = this.targetList[id].name;
                this.nameType = 1;
                this.isPrivate = 0;
                this.checkBox.setTouchEnabled(true) ;
                setTextString(this.sayText,this.targetName);
            }
            if (this.isShowSay) {
                this.say.setTouchEnabled(false);
                this.isShowSay = false;
                var move = cc.moveTo(0.5,cc.p(0,this.max_list_y));
                var _this = this;
                var callFunc = cc.callFunc(function(target,data){
                    _this.say.setTouchEnabled(true);
                },this);
                var seq = cc.sequence(move,callFunc); 
                this.sayBg.runAction(seq);
            }
        }
    },
    onTouchName:function(target,event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
            var data = target.getUserData();
            console.log("onTouchName!!!!%d@@%s",data.id,data.name);
        }
    },
    onUser:function(target,event) {
        if (event === ccui.Widget.TOUCH_ENDED) {
            var data = target.getUserData();
            console.log("onTouchName!!!!%d@@%s",data.id,data.name);
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
    onSendMessageSucceed:function(event){
        var data = event.getUserData(); 
        var message = [];
        if (typeof data.to === "number" && data.to === -1) {
            message.type = 2;
            message.name = data.from._nickName;
            message.id = data.from._uidx;
            message.grade = data.from._uGrade;
            message.sex = data.from._sex;
            message.pic = data.from._picUrl;
            if (data.from._uidx === userData.uidx) {
                message.name = "你";
            }
            this.messageCnt1 = this.messageCnt1 + 1;
        } 
        else if (typeof data.to === "object") {
            message[0] = [];
            message[1] = [];
            message[0].name = data.from._nickName;
            message[0].id = data.from._uidx;
            message[0].grade = data.from._uGrade;
            message[0].sex = data.from._sex;
            message[0].pic = data.from._picUrl;
            message[1].name = data.to._nickName;
            message[1].id = data.to._uidx;
            message[1].grade = data.to._uGrade;
            message[1].sex = data.to._sex;
            message[1].pic = data.to._picUrl;
            if (data.qiaoqiao > 0) {
                message.type = 5;
            }
            else if (data.from._uidx === userData.uidx || data.to._uidx === userData.uidx){
                message.type = 4;
                if (data.from._uidx === userData.uidx) {
                    message[0].name = "你";
                }
                else if (data.to._uidx === userData.uidx) {
                    message[1].name = "你";
                }
            }
            else {
                message.type = 3;
            }
            this.messageCnt2 = this.messageCnt2 + 1;
            this.privateCnt = this.privateCnt + 1;
            if (this.currentTabCnt !== 2 && message.type !== 3) {
                setTextString(this.tabText1,"私聊("+this.privateCnt+")");
            }
        } 
        console.log("this.replaceStr!!!!"+this.replaceStr);
        var reg = new RegExp(this.replaceStr,"g");
        message.msg = data.con.replace(reg,'"');
        message.private = data.qiaoqiao;
        var myDate = new Date();
        var h = myDate.getHours();
        var m = myDate.getMinutes();
        var hs = h.toString();
        var ms = m.toString();
        if (h < 10) {
            hs = "0" + hs;
        }
        if (m < 10) {
            ms = "0" + ms;
        }
        message.time = hs + ":" + ms;
        var id = 1;
        if (message.type === 4 || message.type === 5){
            id = 2;
        }
        this.setMessage(message,id);
    },
    onSendMessageFailed:function(event){
        var data = event.getUserData(); 
    },
    onEnterGameNotice:function(event){
        var data = event.getUserData(); 
    },
    onExitGameNotice:function(event){
        var data = event.getUserData(); 
    },
    onGetUserListSucceed:function(event){
        var data = event.getUserData(); 
    },
    onGetUserListFailed:function(event){
        var data = event.getUserData(); 
    },
    onSystemContext:function(event){
        var data = event.getUserData(); 
    },
    onGetSystemMessage:function(event){
        var data = event.getUserData(); 
    },
    onUserOperateSucceed:function(event){
        var data = event.getUserData(); 
    },
    onExit:function(){
        cc.eventManager.removeListener(this.listener1); 
        cc.eventManager.removeListener(this.listener2); 
        cc.eventManager.removeListener(this.listener3);
        cc.eventManager.removeListener(this.listener4); 
        cc.eventManager.removeListener(this.listener5); 
        cc.eventManager.removeListener(this.listener6);
        cc.eventManager.removeListener(this.listener7);
        cc.eventManager.removeListener(this.listener8); 
        cc.eventManager.removeListener(this.listener9); 
        cc.eventManager.removeListener(this.listener10);  
    }
});