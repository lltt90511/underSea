var tipList = {
    1:"选择单注可以调整您的单次下注金额哦\n！！！",
    2:"当奖金池的金额越高，您能中奖的概率\n更高哦！！",
    3:"点击记录可以查看游戏最近的开奖记录\n！！",
    4:"每天都有抽奖机会，为您带来丰厚的\n奖励哦！！",
    5:"输光了怎么办，不用担心，签到抽奖\n免费拿金币！！"
};
var LoadingLayer = cc.Layer.extend({
    sprite:null,
    loadingscene:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        this.loadingscene = ccs.load(res.startLoading_json);
        this.addChild(this.loadingscene.node);

        /* you can create scene with following comment code instead of using csb file.
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        */
        this.initView();
        return true;
    },
    initView:function(){
        console.log("initView!!!!!!!!!");
        var title = ccui.helper.seekWidgetByName(this.loadingscene.node, "title");
        var num = ccui.helper.seekWidgetByName(this.loadingscene.node, "num");
        var tip = ccui.helper.seekWidgetByName(this.loadingscene.node, "tip");
        var loadingBg = this.loadingscene.node.getChildByName("LoadingBg");
        var loadingBar = loadingBg.getChildByName("LoadingBar");
        var random = Math.ceil((Math.random()+0.25)*4);
        console.log("initView!!!!!!!!!"+random);
        tip.setString("游戏小贴士："+tipList[random]);
        tip.setContentSize(tip.getVirtualRendererSize());
        var _this = this;
        // var xhr = cc.loader.getXMLHttpRequest();
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
        //         cc.log("is get!!!!!!!!!!!!!!");
        //         var obj = JSON.parse(xhr.responseText);
        //         // console.log(xhr.responseText);
        //         console.log("finish!!!!!!!!!");
        //         loadingBar.setPercent(100);
        //         num.setString("100%");
        //         num.setContentSize(num.getVirtualRendererSize());
        //         ip = obj.SocketIp;
        //         port = obj.SocketPort;
        //         _this.scheduleOnce(function(){
        //             cc.director.replaceScene(new StartScene());
        //         },0.05);
        //     }
        // };
        // xhr.open("GET", "http://hd.lovefriday.cn:8080/updateFilesTest/cfg.json", true);
        // xhr.send();
    },
});

var LoadingScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LoadingLayer();
        this.addChild(layer);
    }
});