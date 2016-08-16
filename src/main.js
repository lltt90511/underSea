var MainLayer = cc.Layer.extend({
    sprite:null,
    mainscene:null,
    settingVis:false,
    settingPanel:null,
    settingBtnList:null,
    settingPosList:null,
    settingFuncList:null,
    listener1:null,
    ctor:function () {
        this._super();

        this.mainscene = ccs.load(res.main_json);
        this.addChild(this.mainscene.node);

        this.settingBtnList = new Array();
        this.settingPosList = new Array();
        this.settingFuncList = new Array();

        this.settingFuncList[1] = this.onAbout;
        this.settingFuncList[2] = this.onBinding;
        this.settingFuncList[3] = this.onSetting;
        this.settingFuncList[4] = this.onSelfInfo;

        this.initView();
        return true;
    },
    initView:function(){
        console.log("MainLayer initView");
        this.initTop();
        this.initTopBtn();
        this.initBottomBtn();
        this.initMiddle();
        this.listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "login_succeed",
            callback: function(event){
                // 可以通过getUserData来设置需要传输的用户自定义数据
                console.log("login_succeed!!!!!!!");
            }
        });    
        cc.eventManager.addListener(this.listener1, 1);
    },
    initTop:function(){
        var top = ccui.helper.seekWidgetByName(this.mainscene.node,"top");
        var headImage = ccui.helper.seekWidgetByName(top,"image");
        headImage.setTouchEnabled(true);
        headImage.addTouchEventListener(this.onSelfInfo,this);
        var name = ccui.helper.seekWidgetByName(top,"name");
        name.setString(userData.nickName);
        name.setContentSize(name.getVirtualRendererSize());
        var vip = ccui.helper.seekWidgetByName(top,"vip");
        vip.loadTexture("res/qietu/user/v"+userData.viplevel+".png");
        var gold = ccui.helper.seekWidgetByName(top,"gold");
        var goldNum = ccui.helper.seekWidgetByName(top,"gold_num");
        goldNum.setString(userData.owncash);
        goldNum.setContentSize(goldNum.getVirtualRendererSize());
        var chongzhi = ccui.helper.seekWidgetByName(top,"btn_chongzhi");
        chongzhi.addTouchEventListener(this.onShangCheng,this);
        var lingqu = ccui.helper.seekWidgetByName(top,"btn_lingqu");
        lingqu.addTouchEventListener(this.onLingqu,this);
    },
    initTopBtn:function(){
        var topBtnList = ccui.helper.seekWidgetByName(this.mainscene.node,"top_btn_list");
        var jiangli = ccui.helper.seekWidgetByName(topBtnList,"jiangli");
        this.showOrHidden(jiangli,false);
        var youjian = ccui.helper.seekWidgetByName(topBtnList,"youjian");
        this.showOrHidden(youjian,false);
        var choujiang = ccui.helper.seekWidgetByName(topBtnList,"choujiang");
        this.showOrHidden(choujiang,false);
        var vip = ccui.helper.seekWidgetByName(topBtnList,"VIP");
        this.showOrHidden(vip,false);
        var kefu = ccui.helper.seekWidgetByName(topBtnList,"kefu");
        this.showOrHidden(kefu,false);
        var yaoqianshu = ccui.helper.seekWidgetByName(topBtnList,"yaoqianshu");
        this.showOrHidden(yaoqianshu,false);
    },
    initBottomBtn:function(){
        var bottom = ccui.helper.seekWidgetByName(this.mainscene.node,"bottom");
        this.showOrHidden(bottom,false);
        this.settingPanel = ccui.helper.seekWidgetByName(bottom,"setting_panel");
        this.settingPanel.setVisible(false);
        for (var i=1;i<5;i++){
            this.settingBtnList[i] = ccui.helper.seekWidgetByName(this.settingPanel,"btn"+i);
            this.settingPosList[i] = this.settingBtnList[i].getPosition();
            this.settingBtnList[i].setTouchEnabled(false);
            this.settingBtnList[i].addTouchEventListener(this.settingFuncList[i],this);
        }
        var settingBtn = ccui.helper.seekWidgetByName(this.settingPanel,"btn5");
        this.showOrHidden(settingBtn,false);
        var dating = ccui.helper.seekWidgetByName(bottom,"dating");
        this.showOrHidden(dating,false);
        dating.addTouchEventListener(this.onDaTing,this);
        var shangcheng = ccui.helper.seekWidgetByName(bottom,"shangcheng");
        this.showOrHidden(shangcheng,false);
        shangcheng.addTouchEventListener(this.onShangCheng,this);
        var huodong = ccui.helper.seekWidgetByName(bottom,"huodong");
        this.showOrHidden(huodong,false);
        huodong.addTouchEventListener(this.onHuodong,this);
        var shezhi = ccui.helper.seekWidgetByName(bottom,"shezhi");
        this.showOrHidden(shezhi,false);
        shezhi.addTouchEventListener(this.onShezhi,this);
        var paihang = ccui.helper.seekWidgetByName(bottom,"paihang");
        this.showOrHidden(paihang,false);
    },
    initMiddle:function(){
        console.log("initMiddle!!!!!!!!!!!!!!");
        var middle = ccui.helper.seekWidgetByName(this.mainscene.node,"middle");
        // middle.setVisible(false);
        // middle.setTouchEnabled(false);
        var middleView = new sliderView(this.mainscene.node,540,694,0,0);
        // middleView.setTouchEnabled(true);
        middleView.setPosition(cc.p(0,0));
        middleView.setContentSize(middle.getSize());
        // console.log("initMiddle!!!!!!!!!!!!!!"+middle.getSize().width+middle.getSize().height);
        // middleView.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        // middleView.setBackGroundColor(cc.color(255,255,255,255));
        var funcList = [
        function(){
            nc.socketCall(new Array(6001,12));
        },
        function(){
            nc.socketCall(new Array(6001,11));
        },
        function(){
            nc.socketCall(new Array(6001,10));
        }];
        // for(var i=1;i<4;i++){
        //     middleView.pushItem(res["game"+i],funcList[i-1]);
        // }
        middleView.pushItem(res["game1"],funcList[0]);
        middle.addChild(middleView);
        cc.eventManager.addListener(middleView.touchListener,middleView);
    },
    showOrHidden:function(obj,flag){
        // console.log("showOrHidden!!!!"+obj+flag);
        obj.setVisible(flag);
        obj.setTouchEnabled(flag);
    },
    onSelfInfo:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onSelfInfo!!!!"+target+event);
        }
    },
    onSetting:function(target,event){

    },
    onBinding:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onAbout!!!!"+target+event);
            this.settingVis = !this.settingVis;
            this.switchSetting();
            var binding = new BindingLayer();
            this.addChild(binding);
        }

    },
    onShangCheng:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onShangCheng!!!!");
            var charge = new ChargeLayer(1);
            this.addChild(charge);
        }
    },
    onAbout:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onAbout!!!!"+target+event);
            this.settingVis = !this.settingVis;
            this.switchSetting();
            var about = new AboutLayer();
            this.addChild(about);
        }

    },
    onLingqu:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
        }
    },
    onDaTing:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
        }
    },
    onHuodong:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
        }
    },
    onPaihang:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
        }
    },
    onShezhi:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onShezhi!!!!");
            if(this.settingVis){
                this.settingVis = false;
            }
            else{
                this.settingVis = true;
            }
            this.settingPanel.setVisible(this.settingVis);
            for(var i=1;i<5;i++){
                if(this.settingVis){
                    this.settingBtnList[i].setPositionY(this.settingPosList[1].y);
                    var move = cc.moveTo(0.2,this.settingPosList[i]);
                    var callFunc = cc.callFunc(function(target,data){
                        data.setTouchEnabled(true);
                    },this,this.settingBtnList[i]); 
                    var seq = cc.sequence(move,callFunc);
                    this.settingBtnList[i].runAction(seq);
                } 
                else{
                    for(var i=1;i<5;i++){
                        this.settingBtnList[i].setTouchEnabled(false);
                        this.settingBtnList[i].setPositionY(this.settingPosList[i].y);
                    }
                }
            }
        }
    },
    switchSetting:function(){
        console.log("switchSetting!!!!"+this.settingVis);
        this.settingPanel.setVisible(this.settingVis);
        for(var i=1;i<=5;i++){
            if(this.settingVis){
                this.settingBtnList[i].setPositionY(this.settingPosList[1]);
                var move = cc.moveTo(0.2,this.settingPosList[i]);
                var callFunc = cc.callFunc(function(){
                    showOrHidden(this.settingBtnList[i],true);
                },this); 
                var seq = cc.sequence(move,callFunc);
                this.settingBtnList[i].runAction(seq);
            } 
            else{

            }
        }
    },
    onExit:function() {
        cc.eventManager.removeListener(this.listener1); 
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});