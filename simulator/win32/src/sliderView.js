var sliderView = ccui.Layout.extend({
	imageList:[],
	pageList:[],
	funcList:[],
	listCnt:0,
	startPosX:0,
    startPosY:0,
	middleIndex:0,
	itemWidth:0,
	lastDirection:0,
	moveDistance:0,
	timer:null,
	parentView:null,
	posX:0,
	posY:0,
	offsetWidth:0,
	moveDisable:0,
	center:null,
	page:null,
    endDirection:0,
	ctor:function (parent,x,y,offsetWidth,moveDisable) {
        this._super();
        console.log("sliderView ctor");
        this.parentView = parent;
        this.posX = x;
        this.posY = y;
        this.offsetWidth = offsetWidth;
        this.moveDisable = moveDisable;
    },
    pushItem:function(itemStr,flag,callBack){
    	var item = new ccui.ImageView();
    	item.loadTexture(itemStr);
    	item.setTag(this.listCnt);
      	item.setTouchEnabled(false);
      	this.funcList.push(callBack);
      	// item.addTouchEventListener(this.itemTouch,this);
        this.addChild(item); 
    	this.imageList.push(item);
    	this.listCnt = this.listCnt + 1;
    	if (flag === undefined || flag === null){
    		this.middleIndex = 0;
    	}     
    	this.itemWidth = item.getContentSize().width;
    	var page = new ccui.Button();
    	page.loadTextures("res/qietu/main2/bj01.png","res/qietu/main2/bj02.png","res/qietu/main2/bj02.png");
    	page.setTouchEnabled(false);
    	this.addChild(page); 
    	this.pageList.push(page);
    	this.resetAllChildPosition();
    },
    itemTouch:function(target,event){
    	if (event == ccui.Widget.TOUCH_MOVED){
        	console.log("TOUCH_MOVED@@!!");
    	}
    	else if (event == ccui.Widget.TOUCH_ENDED){
        	console.log("TOUCH_ENDED@@!!");
        	this.middleIndex = 1;
        	this.resetAllChildPosition(true,0.2);
        	var func = funcList[target.getTag()];
        	// if (func !== undefined || func !== null){
        	// 	func();
        	// }
    	}
    },
    resetAllChildPosition:function(isEffect,time){
    	var diff = 120;
   		var startX = 540 - (this.imageList.length-1)/2*diff;
    	for (var i in this.imageList){
    		var fx = 0;
    		var scale = 0;
    		if (i <= this.middleIndex-2 || i >= this.middleIndex+2){
    			scale = 0.5;
    			if (i <= this.middleIndex-2){
               		fx = this.posX - this.itemWidth/2 - this.itemWidth*0.7 - this.itemWidth*0.5*(this.middleIndex-2-i) - this.itemWidth*0.5/2 - (this.middleIndex-i)*this.offsetWidth;
            	}
            	else{
               		fx = this.posX + this.itemWidth/2 + this.itemWidth*0.7 + this.itemWidth*0.5*(i-this.middleIndex-2) + this.itemWidth*0.5/2 + (i-this.middleIndex)*this.offsetWidth;
            	}
    		}
    		else if (i <= this.middleIndex-1 || i >= this.middleIndex+1){
    			scale = 0.7;
            	if (i <= this.middleIndex-1){
               		fx = this.posX - this.itemWidth/2 - this.itemWidth*0.7/2 - this.offsetWidth;
               	}
            	else{
               		fx = this.posX + this.itemWidth/2 + this.itemWidth*0.7/2 + this.offsetWidth;
            	}
    		}
    		else{
    			scale = 1;
    			fx = this.posX;
    		}
	    	if (isEffect){            
	    		this.imageList[i].setTouchEnabled(false);
            	this.parentView.setTouchEnabled(false);
            	var move = cc.moveTo(time,cc.p(fx,this.posY));
            	var scale = cc.scaleTo(time,scale);
            	var objList = [];
            	objList.push(this.imageList[i]);
            	objList.push(this.parentView);
            	var callFunc = cc.callFunc(function(target,data){
        				console.log("callFunc@@!!"+data);
               			data[0].setTouchEnabled(true);
            			data[1].setTouchEnabled(true);
                },this,objList);
            	var spawn = cc.spawn(move,scale);
            	var seq = cc.sequence(spawn,callFunc);
            	this.imageList[i].runAction(seq);
            	var delay = cc.delayTime(time+0.2);
            	var objList_delay = [];
            	objList_delay.push(this.imageList[i]);
            	objList_delay.push(this.pageList[i]);
            	objList_delay.push(this.middleIndex);
            	objList_delay.push(i);
            	var callFunc_delay = cc.callFunc(function(target,data){
		            if (data[3] == data[2]){
        				console.log("false@@!!"+data);
		            	data[0].setColor(cc.color(255,255,255,255));
		            	data[1].setBright(false);
		            }
		            else{
        				console.log("true@@!!"+data);
		            	data[0].setColor(cc.color(128,128,128,255));
		            	data[1].setBright(true);
		            }
                },this,objList_delay); 
                var seq_delay = cc.sequence(delay,callFunc_delay); 
                this.pageList[i].runAction(seq_delay);
	    	}
	    	else{
    			this.imageList[i].setScale(scale);
            	this.imageList[i].setPosition(cc.p(fx,this.posY));
            	this.pageList[i].setPosition(cc.p(startX + diff*i,124));
	            if (i == this.middleIndex){
	            	this.imageList[i].setColor(cc.color(255,255,255,255));
	            	this.pageList[i].setBright(false);
	            }
	            else{
	            	this.imageList[i].setColor(cc.color(128,128,128,255));
	            	this.pageList[i].setBright(true);
	            }
	    	}
    	}
    },
    refresh:function(diffxx){
      	var time = 0.1;
        var direction = diffxx > 0 ? 1 : -1;
      	for(var i in this.imageList){
	      	var diffx = diffxx;
	      	var v = this.imageList[i];
	      	if (i == this.middleIndex + direction*2 || i == this.middleIndex - direction){
	      		var scale = v.getScaleX();
	      		diffx = (this.itemWidth/2*1.2+this.offsetWidth)/(this.itemWidth/2*1.7+this.offsetWidth)*diffx;
	      		var per = Math.abs(diffx)/(this.itemWidth/2*1.2+this.offsetWidth);
	      		if (i == this.middleIndex + direction*2){
	      			if ((scale+per*0.2) > 0.7){
	                  	v.setScale(0.7);
	          		}
	               	else{
	                  	v.setScale(scale+per*0.2);
	               	}
	      		}
	      		else{
	      			if ((scale-per*0.2) < 0.5){
	                  	v.setScale(0.5);
	                }  	
	               	else{
	                  	v.setScale(scale-per*0.2);
	               	}
	      		}
	      	}
	      	else if (i == this.middleIndex + direction || i == this.middleIndex){
	      		var scale = v.getScaleX();
	        	var per = Math.abs(diffx)/(this.itemWidth/2*1.7+this.offsetWidth);
	        	if (i == this.middleIndex + direction){
	           		if ((scale+per*0.3) >= 1){
	              		v.setScale(1);
	              		this.middleIndex = this.middleIndex + direction;
	           		} 
	           		else{
	              		v.setScale(scale+per*0.3);
	           		}
	 			}
	        	else{
	           		if ((scale-per*0.3) < 0.7){
	           			v.setScale(0.7);
	           		}
	              	else{
	              		v.setScale(scale-per*0.3);
	              	}
	        	}
	      	}
	      	else{
	      		diffx = (this.itemWidth/2*1+this.offsetWidth)/(this.itemWidth/2*1.7+this.offsetWidth)*diffx;
	      	}
         	v.setPosition(cc.p(v.getPositionX()+diffx,v.getPositionY()));
      	}
	},
	timerFunc:function(){
        this.middleIndex = this.middleIndex + this.endDirection; 
        if (this.middleIndex <= 1 || this.middleIndex >= this.listCnt) {
            this.unschedule(timerFunc);
            if (this.middleIndex <= 0 || this.middleIndex > this.listCnt) {
                this.middleIndex = this.middleIndex - this.endDirection;
            }
            this.resetAllChildPosition(true,0.2);
        }
        else{
            this.resetAllChildPosition(true,0.2);
        }
    },

    addTouchEvent:function(){
        var touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,                       // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan: function (touch, event) {     //实现 onTouchBegan 事件处理回调函数         
                console.log("onTouchBegan@@!!");
                var pos = touch.getLocation();
                this.startPosX = pos.x;
                this.startPosY = pos.y;
                this.moveDistance = 0;
                this.lastDirection = 0;
                return true;
            },
            onTouchMoved: function (touch, event) {         //实现onTouchMoved事件处理回调函数, 触摸移动时触发
                console.log("onTouchMoved@@!!");
                var pos = touch.getLocation();
                var diffx = pos.x-this.startPosX;
                var direction = diffx > 0 ? 1 : -1;
                if (this.moveDisable === 0) {
                    if(this.lastDirection === 0 || direction === this.lastDirection){
                        this.lastDirection = direction;
                        this.refresh(diffx);
                        this.moveDistance = this.moveDistance + diffx;
                    }
                    else if(this.lastDirection !== 0 && direction !== this.lastDerection){
                        this.lastDirection = direction;
                        this.resetAllChildPosition();
                        this.moveDistance = 0;
                    }
                }
                else{
                    this.lastDerection = direction;
                }
                this.startPosX = pos.x;
            },
            onTouchEnded: function (touch, event) {         // 实现onTouchEnded事件处理回调函数
                console.log("onTouchEnded@@!!");
                if (this.moveDisable === 0) {
                    console.log("onTouchEnded@@1!!");
                    if (Math.abs(this.moveDistance) > 500) {
                        if (this.moveDistance > 500) {
                            this.endDirection = -1;
                        }
                        else{
                            this.endDirection = 1;
                        }
                        this.schedule(this.timerFunc,0.2);
                    }
                    else {
                        var objPosX = 0;
                        var objPosY = 0;
                        var objWidth = 0;
                        var flag = false;
                        if (this.middleIndex - 1 > 0){
                            objPosX = this.list[this.middleIndex-1].getPositionX();
                            objPosY = this.list[this.middleIndex-1].getPositionY();
                            objWidth = this.list[this.middleIndex-1].getScaleX()*this.itemWidth;
                            if (objPosX > x - this.itemWidth/2 - objWidth/2) {
                                this.middleIndex = this.middleIndex - 1;
                                flag = true;
                            }
                        }
                        if (flag == false){
                            if (this.middleIndex + 1 <= this.listCnt) {
                                objPosX = this.list[this.middleIndex+1].getPositionX();
                                objPosY = this.list[this.middleIndex+1].getPositionY();
                                objWidth = this.list[this.middleIndex+1].getScaleX()*this.itemWidth;
                                if (objPosX < x + this.itemWidth/2 + objWidth/2) {
                                    this.middleIndex = this.middleIndex + 1;
                                    flag = true;
                                }
                            }
                        }
                        this.resetAllChildPosition(true,0.2);
                    }
                }
                else{
                    if (this.middleIndex + this.lastDerection > 0 && this.middleIndex + this.lastDerection <= this.listCnt) {
                        this.middleIndex = this.middleIndex + this.lastDerection;
                        this.resetAllChildPosition(true,0.2);
                    }
                }
            }
        });
        // this.setTouchEnabled(true);
        cc.eventManager.addListener(touchListener,this);
    }
});