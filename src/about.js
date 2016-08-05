var AboutLayer = cc.Layer.extend({
	aboutscene:null,
	ctor:function () {
        this._super();

        console.log("AboutLayer ctor");
        this.aboutscene = ccs.load(res.about_json);
        this.addChild(this.aboutscene.node);

        this.initView();
        return true;
    },
    initView:function() {
    	var panel = ccui.helper.seekWidgetByName(this.aboutscene.node,"Panel_24");
        panel.addTouchEventListener(this.onBack,this);
    	var back = ccui.helper.seekWidgetByName(this.aboutscene.node,"back");
        back.addTouchEventListener(this.onBack,this);
    },
    onBack:function(target,event){
    	if (event == ccui.Widget.TOUCH_ENDED){
            console.log("onBack!!!!"+target+event);
            this.removeFromParent(true);
        }
    }
});