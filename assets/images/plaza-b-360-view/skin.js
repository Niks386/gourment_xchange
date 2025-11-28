// Garden Gnome Software - Skin
// Pano2VR 7.1.10/21009
// Filename: restaurant.ggsk
// Generated 2025-11-25T11:34:20

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._aritist_impression=document.createElement('div');
		els=me._aritist_impression__img=document.createElement('img');
		els.className='ggskin ggskin_aritist_impression';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAAuCAYAAADk+JZBAAAABHNCSVQICAgIfAhkiAAAIABJREFUeF7tXAeQVVW2hYZuaIIK5pxzQsUAZmdQ8QsmQBQMgMRBUUF0puDjDI4yoKIgIsMoQRHGEUSRDyqIihhBDCgCYkSMg5gVFP5ap866tft47n0PGv6fKu6tuvXSPWnvtdcO53RXrZJfuQRyCeQSqKQEqlayfd48l0AugVwCVXIiyUGQSyCXQKUlkBNJpUWYd5BLIJdATiQ5BnIJ5BKotARyIqm0CPMOcgnkEsiJJMdALoFcApWWwP83kcTGX1tgVYXmXKh9pYXmO/hPmceGWs/G6CdNRsXoaH2woTVk6aaYsTeGLDZEn+G6/mPWUsgYYouPtdF34cLs57Cd/VzZ9pxnllCLEXixoI/N28opbawNNYfK9LMhwFxsH+'+
			'uq3zQSiGEjTQZZusnCZiECypJ5sbgpVm7F2lwW5jjf9bHtrDlm4m5dB9PzfLXvw0Vp0HBwtctqL1KITXx9xy1ENLbfYkghbR7huosBbwjiNK/DvnSnrSfUSTFePabHYg0ny6Bjc7HyKYQRrjFt/qEcQlymrSk2vpV/1nihzAthsRDm1gVnWfjMkmkWHopxSHYNafpy6yiWSGKKKvHtbR8W7CHwLYmwrW4rpLT2GsOOqXZ2gWsCY4spsxC5WQ8YA2y4DslR/YZzyCIXeY6QYGNzYL+2bzs3q8u0vrLIJwRc2HeM7NLWpfFj+tUctA69WqOSjkN8WWyEcgjxkYXNsK1kF3NyGjOGKz4f4tE6wRD/do1Wv2EbqwsrQ42lfsK5FbOuEKsxWwj7D20yiqN1IRIJTourFgiSAwjsfP01MGrbvjp+Y3vbhwVZaDQSgB3bEpAF'+
			'ptqGCw6Z24IvBvo0sFsS1HsLBjt3vre/he+ltLBPCzTJkvLU+zRDsuC2a7IgtiRhjT6L0GOOJEb6HMeuRTq2pM92sbVIx8JEiA3hK2yrtXGMYttajIRzDudqMS196hmNZ42c67NtQnlrnSFmrFFLj+F6OI4uOw5lIrlYcrY2Z4kyLTKzfBBbR4xQ3XyKIRI7AQGDRFDqFcfv+IwG5oJ+8bcWZ0HCdrrZD28JSAqQYERGtr1IyCrPGpvGtIoJBafPlpgscEMlSYACK5+185By0+aRFmlZEEu2moc1HMpzdUSuArbkE1uP5BTOIYwcQmOQDMKoyYI5NBitR/KJYUS6tRiRPjgnyTXEhggoxJfVpcYNdaO2HNMandYWyj6G5xiWs3QWjiMdhYQdytCSiGQQYl66tLIkPuyYVhch4cWiDMNR7m3MFm1wUCGaKZZIBFARSB'+
			'kGqvH000//7oQTThijGaxcufLhevXqdcfnVf6W4rQotmfbmmvXrv0wnPmvv/763apVq5Z9/vnnc3bbbbcB3nBkLCXffvvtuDp16jQO29nPVatW3dMIocovv/wyp1q1ajvxGfQ7fNttt73BPM91OfB9880399auXfugkpKSupjbqp9//nnps88+O6hJkyazvII4D/c8fn8vaw7ffffdc3Xr1m2reXz22Wd/3GabbbqyzU8//TS7vLy8Jd4KxOzTAeadd97pttNOO51Xo0aN3fks5PFvXI9jztfh489epgSMQGO9jyURGrDrE3P9XHOFbLbzc7LG50Bq9fH+++8P3H333YcZOSaeDXOaCxltxT6//vrryVtssQX1bY3MyRO6mhDTFfS7/Icffnh77ty590G2T+JZYiTRMduuXr16TvXq1Xe0MvY6WQ7ZLth6662v9DIQ'+
			'vkTwXO/7WbrB2HOg59Z+znw0kX8MAy+88MLfTj75ZM2T66zQBjr7Q4rO/uTXZmVTAgz2wfy7ef0uwzqP9HNR35J14nC/+OKLwZjzXjVr1twDOqT9ENcrsJbF77777pTDDjtsvJeHnI36EtGVQi7LJJf33ntv0B577HEnPldwFhan0DPndoRfQ4g5izvXbSEisV5LJFIT7dy9YsWKESCOkzVBGMn7MJKm+Pwj7p9wk1CobAnfkQjucixskdrFXj/99NNp22+/fW8vZC64BER1z+abb350VjsI+hA/pjMWEMLMsrKyHfh+2bJlI3feeeeBXoCJwjDvJ2C824f9EryLFi0atv/++w83bQjWt7LmAAN7EQbWwc9jDcbtteOOO3ZiGw/kC017J1cotzfIs32sX8xvoZcrZWrlGhKJPDLlzJsA+kh9Qja74b08jYyvFGvsus'+
			'8++1yt52Csr4II2xjZ86dqL730UosjjzzyL3oOhvcC9HEJPovY+JNzFtDV6Cxd0RCmTZv2x+bNm4uo3RicM9Y7I6YPjfv9998vAkmdE4zLtmVY75tZugHBPb/ZZptd7OVQcExiYOnSpUP33ntvGp6w7OYJnV2bprMff/zx7Vq1ajX3bUSU1YCFa4UFyODj0tLS4/0z8vYittKFCxd222uvvS6BQddPWxPnBz3MB96oBzobqwv2RUKiXBarD8oe49JuFUE7W/nggw967rLLLpfxvZ8bnTZtWE7MRnTrFJHYMIsTqoG7lr9rY7Bn4O3r2EXOnj27P6KUCfjue9wCPR/hotS+DhY2P0vhFND48eOvadOmzRy/4BJ45+H169cng6deMBYSTeIFAMqpAiUAMRqKGYzfk5D2448/vmmHHXY4La1DRkmPPvpor7PPPvtZPEN5'+
			'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'+
			'L4X2jpclvJIxQvAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="aritist_impression";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 137px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._aritist_impression.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._aritist_impression.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width < 991)) && 
				((player.getViewerSize(true).height < 991))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._aritist_impression.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._aritist_impression.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._aritist_impression.style.transition='transform 0s';
				if (me._aritist_impression.ggCurrentLogicStateScaling == 0) {
					me._aritist_impression.ggParameter.sx = 0.6;
					me._aritist_impression.ggParameter.sy = 0.6;
					me._aritist_impression.style.transform=parameterToTransform(me._aritist_impression.ggParameter);
					skin.updateSize(me._aritist_impression);
				}
				else {
					me._aritist_impression.ggParameter.sx = 1;
					me._aritist_impression.ggParameter.sy = 1;
					me._aritist_impression.style.transform=parameterToTransform(me._aritist_impression.ggParameter);
					skin.updateSize(me._aritist_impression);
				}
			}
		}
		me._aritist_impression.logicBlock_scaling();
		me._aritist_impression.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._aritist_impression);
		el=me._instructions_show_timer=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=5000;
		el.ggId="Instructions Show Timer";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 197px;';
		hs+='left : calc(50% - ((197px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((197px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 197px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._instructions_show_timer.ggIsActive=function() {
			return (me._instructions_show_timer.ggTimestamp + me._instructions_show_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._instructions_show_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._instructions_show_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._instructions_show_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._instructions_show_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._instructions_show_timer.style.transition='';
				if (me._instructions_show_timer.ggCurrentLogicStateVisible == 0) {
					me._instructions_show_timer.style.visibility="hidden";
					me._instructions_show_timer.ggVisible=false;
				}
				else {
					me._instructions_show_timer.style.visibility=(Number(me._instructions_show_timer.style.opacity)>0||!me._instructions_show_timer.style.opacity)?'inherit':'hidden';
					me._instructions_show_timer.ggVisible=true;
				}
			}
		}
		me._instructions_show_timer.logicBlock_visible();
		me._instructions_show_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._instructions.style.transition='none';
			} else {
				me._instructions.style.transition='all 500ms linear 0ms';
			}
			me._instructions.style.opacity='0';
			me._instructions.style.visibility='hidden';
			me._instructions_hide_timer.ggTimeout=Number("0.5") * 1000.0;
			me._instructions_hide_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._instructions_show_timer.ggCurrentLogicStateVisible = -1;
		me._instructions_show_timer.ggUpdateConditionTimer=function () {
			me._instructions_show_timer.logicBlock_visible();
		}
		me._instructions_show_timer.ggUpdatePosition=function (useTransition) {
		}
		el=me._instructions=document.createElement('div');
		els=me._instructions__img=document.createElement('img');
		els.className='ggskin ggskin_instructions';
		hs=basePath + 'images/instructions.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Instructions";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 197px;';
		hs+='left : calc(50% - ((197px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((197px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 197px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._instructions.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instructions.ggUpdatePosition=function (useTransition) {
		}
		me._instructions_show_timer.appendChild(me._instructions);
		el=me._instructions_hide_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="Instructions Hide Timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 197px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 197px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._instructions_hide_timer.ggIsActive=function() {
			return (me._instructions_hide_timer.ggTimestamp + me._instructions_hide_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instructions_hide_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._instructions_hide_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._instructions_hide_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._instructions_hide_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._instructions_hide_timer.style.transition='';
				if (me._instructions_hide_timer.ggCurrentLogicStateVisible == 0) {
					me._instructions_hide_timer.style.visibility="hidden";
					me._instructions_hide_timer.ggVisible=false;
				}
				else {
					me._instructions_hide_timer.style.visibility=(Number(me._instructions_hide_timer.style.opacity)>0||!me._instructions_hide_timer.style.opacity)?'inherit':'hidden';
					me._instructions_hide_timer.ggVisible=true;
				}
			}
		}
		me._instructions_hide_timer.logicBlock_visible();
		me._instructions_hide_timer.ggDeactivate=function () {
			me._instructions_show_timer.style.transition='none';
			me._instructions_show_timer.style.visibility='hidden';
			me._instructions_show_timer.ggVisible=false;
		}
		me._instructions_hide_timer.ggCurrentLogicStateVisible = -1;
		me._instructions_hide_timer.ggUpdateConditionTimer=function () {
			me._instructions_hide_timer.logicBlock_visible();
		}
		me._instructions_hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._instructions_show_timer.appendChild(me._instructions_hide_timer);
		me.divSkin.appendChild(me._instructions_show_timer);
		me._aritist_impression.logicBlock_scaling();
		me._instructions_show_timer.logicBlock_visible();
		me._instructions_hide_timer.logicBlock_visible();
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('Hotspot 1')) {
				for(var i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
					hotspotTemplates['Hotspot 1'][i].ggEvent_changenode();
				}
			}
			me._instructions_show_timer.logicBlock_visible();
			me._instructions_hide_timer.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._aritist_impression.logicBlock_scaling();
		});
	};
	function SkinHotspotClass_large_infotag(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._large_infotag=document.createElement('div');
		el.ggId="Large Infotag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 118px;';
		hs+='position : absolute;';
		hs+='top : 387px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._large_infotag.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._large_infotag.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),"_self");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._large_infotag.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._large_infotag.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['large_infotag']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._large_infotag.onmouseleave=function (e) {
			me.elementMouseOver['large_infotag']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._large_infotag.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 161px;';
		hs+='left : calc(50% - ((161px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((161px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 161px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._large_infotag.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);";
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._large_infotag.appendChild(me._text_1);
		me.elementMouseOver['large_infotag']=false;
			me.__div = me._large_infotag;
	};
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 126px;';
		hs+='position : absolute;';
		hs+='top : 316px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot_1.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);";
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_10.ggUpdateText();
		});
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_1.appendChild(me._text_10);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 99px;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._rectangle_1.style.transition='none';
			} else {
				me._rectangle_1.style.transition='all 1000ms ease-in-out 0ms';
			}
			me._rectangle_1.ggParameter.sx=2;me._rectangle_1.ggParameter.sy=2;
			me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
			setTimeout(function() {skin.updateSize(me._rectangle_1);}, 1050);
		}
		me._timer_1.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._rectangle_1.style.transition='none';
			} else {
				me._rectangle_1.style.transition='all 1000ms ease-in-out 0ms';
			}
			me._rectangle_1.ggParameter.sx=1;me._rectangle_1.ggParameter.sy=1;
			me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
			setTimeout(function() {skin.updateSize(me._rectangle_1);}, 1050);
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._timer_1);
		me._hotspot_1.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #eb3b1d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 99px;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_1.appendChild(me._rectangle_2);
		me.elementMouseOver['hotspot_1']=false;
		me._timer_1.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_1.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_1.ggUpdateConditionTimer();
				if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
					me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
					if (me._timer_1.ggLastIsActive) {
						if (player.transitionsDisabled) {
							me._rectangle_1.style.transition='none';
						} else {
							me._rectangle_1.style.transition='all 1000ms ease-in-out 0ms';
						}
						me._rectangle_1.ggParameter.sx=2;me._rectangle_1.ggParameter.sy=2;
						me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
						setTimeout(function() {skin.updateSize(me._rectangle_1);}, 1050);
					} else {
						if (player.transitionsDisabled) {
							me._rectangle_1.style.transition='none';
						} else {
							me._rectangle_1.style.transition='all 1000ms ease-in-out 0ms';
						}
						me._rectangle_1.ggParameter.sx=1;me._rectangle_1.ggParameter.sy=1;
						me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
						setTimeout(function() {skin.updateSize(me._rectangle_1);}, 1050);
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me._hotspot_1;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='Hotspot 1') {
				hotspot.skinid = 'Hotspot 1';
				hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'Large Infotag';
				hsinst = new SkinHotspotClass_large_infotag(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._instructions_show_timer.ggUpdateConditionTimer();
		if (me._instructions_show_timer.ggLastIsActive!=me._instructions_show_timer.ggIsActive()) {
			me._instructions_show_timer.ggLastIsActive=me._instructions_show_timer.ggIsActive();
			if (me._instructions_show_timer.ggLastIsActive) {
			} else {
				if (player.transitionsDisabled) {
					me._instructions.style.transition='none';
				} else {
					me._instructions.style.transition='all 500ms linear 0ms';
				}
				me._instructions.style.opacity='0';
				me._instructions.style.visibility='hidden';
				me._instructions_hide_timer.ggTimeout=Number("0.5") * 1000.0;
				me._instructions_hide_timer.ggTimestamp=skin.ggCurrentTime;
			}
		}
		me._instructions_hide_timer.ggUpdateConditionTimer();
		if (me._instructions_hide_timer.ggLastIsActive!=me._instructions_hide_timer.ggIsActive()) {
			me._instructions_hide_timer.ggLastIsActive=me._instructions_hide_timer.ggIsActive();
			if (me._instructions_hide_timer.ggLastIsActive) {
			} else {
				me._instructions_show_timer.style.transition='none';
				me._instructions_show_timer.style.visibility='hidden';
				me._instructions_show_timer.ggVisible=false;
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};