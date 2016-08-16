var StartLayer = cc.Layer.extend({
    sprite:null,
    startscene:null,
    totalStarNum:15,
    ctor:function () {
        this._super();
        
        cc.audioEngine.playMusic(res.bgMusic_1,true);

        var size = cc.winSize;

        this.startscene = ccs.load(res.start_json);
        this.addChild(this.startscene.node);

        this.initView();
        return true;
    },
    initView:function(){
        console.log("initView!!!!!!!!!");
        var startBtn = ccui.helper.seekWidgetByName(this.startscene.node, "btn");
        startBtn.addClickEventListener(this.onStart);
        var bg = ccui.helper.seekWidgetByName(this.startscene.node, "bg");
        var light = new cc.Sprite(res.guang);
        light.setPosition(540,1290);
        light.setScale(2.0);
        light.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
        bg.addChild(light);
        var repeat = cc.repeatForever(cc.rotateBy(60.0, 180));
        light.runAction(repeat);
        for(var i=1;i<=this.totalStarNum;i++){
            var time = Math.random() + 0.8;
            var blink = cc.repeatForever(cc.blink(time, 1));
            var name = "star_"+i;
            var star = ccui.helper.seekWidgetByName(this.startscene.node, name);
            star.runAction(blink);
        }
    },
    onStart:function(){        
        cc.audioEngine.playEffect(res.effect_3,false);
        console.log("onclick");
        nc.contect(function(){
            console.log("onContectSucceed!!!!!!!!!");
            nc.socketCall(new Array(1001,1,"aaa",1));
        });
    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});