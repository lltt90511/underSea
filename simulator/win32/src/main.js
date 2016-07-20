var MainLayer = cc.Layer.extend({
    sprite:null,
    mainscene:null,
    settingVis:false,
    settingPanel:null,
    settingBtnList:null,
    settingPosList:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        this.mainscene = ccs.load(res.main_json);
        this.addChild(this.mainscene.node);

        this.settingBtnList = new Array();
        this.settingPosList = new Array();

        this.initView();
        return true;
    },
    initView:function(){
        console.log("MainLayer initView");
        this.initTop();
        this.initTopBtn();
        this.initBottomBtn();
        this.initMiddle();
    },
    initTop:function(){
        var top = ccui.helper.seekWidgetByName(this.mainscene.node,"top");
        var headImage = ccui.helper.seekWidgetByName(top,"image");
        headImage.setTouchEnabled(true);
        headImage.addTouchEventListener(this.onSelfInfo,this);
        var name = ccui.helper.seekWidgetByName(top,"name");
        name.setString(userData.nickName);
        var vip = ccui.helper.seekWidgetByName(top,"vip");
        vip.loadTexture("res/qietu/user/v"+(userData.viplevel+1)+".png");
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
        this.settingPanel = ccui.helper.seekWidgetByName(bottom,"setting_panel");
        this.settingPanel.setVisible(false);
        for (var i=1;i<=5;i++){
            this.settingBtnList[i] = ccui.helper.seekWidgetByName(this.settingPanel,"btn"+i);
            this.settingPosList[i] = this.settingBtnList[i].getPosition();
            this.settingBtnList[i].setTouchEnabled(false);
        }
        var dating = ccui.helper.seekWidgetByName(bottom,"dating");
        dating.addTouchEventListener(this.onDaTing,this);
        var shangcheng = ccui.helper.seekWidgetByName(bottom,"shangcheng");
        shangcheng.addTouchEventListener(this.onShangCheng,this);
        var huodong = ccui.helper.seekWidgetByName(bottom,"huodong");
        huodong.addTouchEventListener(this.onHuodong,this);
        var shezhi = ccui.helper.seekWidgetByName(bottom,"shezhi");
        shezhi.addTouchEventListener(this.onShezhi,this);
        var paihang = ccui.helper.seekWidgetByName(bottom,"paihang");
        this.showOrHidden(paihang,false);
    },
    initMiddle:function(){
        console.log("initMiddle!!!!!!!!!!!!!!");
        var middle = ccui.helper.seekWidgetByName(this.mainscene.node,"middle");
        middle.setVisible(false);
        middle.setTouchEnabled(false);
        var middleView = new sliderView(this.mainscene.node,540,694,0,0);
        // middleView.setTouchEnabled(true);
        middleView.setPosition(middle.getPosition());
        middleView.setContentSize(middle.getSize());
        console.log("initMiddle!!!!!!!!!!!!!!"+middle.getSize().width+middle.getSize().height);
        middleView.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        middleView.setBackGroundColor(cc.color(255,255,255,255));
        middleView.pushItem("res/game01.png");
        middleView.pushItem("res/game02.png");
        middleView.pushItem("res/game03.png");
        middleView.addTouchEvent();
        this.mainscene.node.addChild(middleView);
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
    onShangCheng:function(target,event){
        if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onShangCheng!!!!");
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
            for(var i=1;i<=5;i++){
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
                    for(var i=1;i<=5;i++){
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
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});