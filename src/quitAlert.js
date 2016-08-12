var QuitAlertLayer = cc.Layer.extend({
	quitAlertscene:null,
	gameId:0,

	ctor:function (_id) {
        this._super();

        console.log("QuitAlertLayer ctor");
        this.quitAlertscene = ccs.load(res.quitAlert_json);
        this.addChild(this.quitAlertscene.node);

        this.gameId = _id;

        this.initView();
 
        return true;
    },
    initView:function () {
    	var confirm = ccui.helper.seekWidgetByTag(this.quitAlertscene.node,3581);
    	confirm.addTouchEventListener(this.onConfirm,this);
    	var cancle = ccui.helper.seekWidgetByTag(this.quitAlertscene.node,3571);
    	cancle.addTouchEventListener(this.onCancle,this);
    	var check1 = ccui.helper.seekWidgetByTag(this.quitAlertscene.node,3589);
        check1.addEventListener(this.onCheck, this);
    	var check2 = ccui.helper.seekWidgetByTag(this.quitAlertscene.node,3593);
        check2.addEventListener(this.onCheck, this);
    },
    onConfirm:function (target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onConfirm!!!!");
            nc.socketCall(new Array(7001,this.gameId));
        }
    },
    onCancle:function (target,event) {
    	if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onCancle!!!!");
            this.removeFromParent(true);
        }
    },
    onCheck:function (target,type) {
    	var tag = target.getTag();
    	switch (type) {
            case ccui.CheckBox.EVENT_SELECTED:
                console.log("checkbox select");
                switch (tag) {
                	case 3589:
                	console.log("musicOpen false");
                	musicOpen = false;
                	break;
                	case 3593:
                	console.log("effectOpen false");
                	effectOpen = false;
                	break;
                }
                break;
            case ccui.CheckBox.EVENT_UNSELECTED:
                console.log("checkbox unselect");
                switch (tag) {
                	case 3589:
                	console.log("musicOpen true");
                	musicOpen = true;
                	break;
                	case 3593:
                	console.log("effectOpen true");
                	effectOpen = true;
                	break;
                }
                break;
            default:
                break;
        }
    }
});