(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,1771,1088,118],[0,0,1965,1105],[0,1107,994,662],[996,1107,985,657]]},
		{name:"index_atlas_2", frames: [[0,0,1986,1117]]},
		{name:"index_atlas_3", frames: [[0,0,2017,1135]]},
		{name:"index_atlas_4", frames: [[0,0,2019,1136]]},
		{name:"index_atlas_5", frames: [[0,0,2025,1139]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.anterior = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.siguiente = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.siguiente_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.siguiente();
	this.instance.setTransform(0,0,0.1275,0.1275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.6,83.8);


(lib.btnjuego = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// texto
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(27.05,28.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("EguAAKZIAA0xMBcBAAAIAAUxg");
	this.shape.setTransform(294.475,66.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990033").s().p("EguAAKZIAA0xMBcBAAAIAAUxg");
	this.shape_1.setTransform(294.475,66.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("EguAAKZIAA0xMBcBAAAIAAUxg");
	this.shape_2.setTransform(294.475,66.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,589,133);


(lib.anterior_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.anterior();
	this.instance.setTransform(0,0,0.1275,0.1275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.7,84.4);


// stage content:
(lib.docsamu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.siguiente.addEventListener("click", ira1.bind(this));
		
		function ira1()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		
		this.siguiente.addEventListener("click", ira2.bind(this));
		
		function ira2()
		{
			this.gotoAndStop(2);
		}
		
		
		this.anterior.addEventListener("click", ira0.bind(this));
		
		function ira0()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		
		this.siguiente.addEventListener("click", ira3.bind(this));
		
		function ira3()
		{
			this.gotoAndStop(3);
		}
		
		
		this.anterior.addEventListener("click", ira1.bind(this));
		
		function ira1()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_3 = function() {
		this.stop();
		
		
		this.siguiente.addEventListener("click", ira4.bind(this));
		
		function ira4()
		{
			this.gotoAndStop(4);
		}
		
		
		this.anterior.addEventListener("click", ira2.bind(this));
		
		function ira2()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		
		
		this.anterior.addEventListener("click", ira3.bind(this));
		
		function ira3()
		{
			this.gotoAndStop(3);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.siguiente.addEventListener("click", ira5.bind(this));
		
		function ira5()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.anterior.addEventListener("click", atras4.bind(this));
		
		function atras4()
		{
			this.gotoAndStop(4);
		}
		
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.BTNjuego.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("BuildWeb/index.html", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// siguiente_png
	this.siguiente = new lib.siguiente_1();
	this.siguiente.name = "siguiente";
	this.siguiente.setTransform(870.55,69.7,1,1,0,0,0,62.8,41.9);
	new cjs.ButtonHelper(this.siguiente, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.siguiente).wait(4).to({_off:true},1).wait(1));

	// anterior_png
	this.anterior = new lib.anterior_1();
	this.anterior.name = "anterior";
	this.anterior.setTransform(90.15,70,1,1,0,0,0,63.4,42.2);
	new cjs.ButtonHelper(this.anterior, 0, 1, 1);

	this.BTNjuego = new lib.btnjuego();
	this.BTNjuego.name = "BTNjuego";
	this.BTNjuego.setTransform(478.45,304.55,1,1,0,0,0,294.4,66.5);
	new cjs.ButtonHelper(this.BTNjuego, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.anterior}]},1).to({state:[{t:this.anterior},{t:this.BTNjuego}]},4).wait(1));

	// Capa_1
	this.instance = new lib._1();
	this.instance.setTransform(-11,-3,0.4869,0.5327);

	this.instance_1 = new lib._2();
	this.instance_1.setTransform(-13,-4,0.4867,0.5335);

	this.instance_2 = new lib._3();
	this.instance_2.setTransform(-10,-3,0.4861,0.5332);

	this.instance_3 = new lib._4();
	this.instance_3.setTransform(-4,-3,0.4872,0.5417);

	this.instance_4 = new lib._5();
	this.instance_4.setTransform(-3,-3,0.4911,0.5476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(467,296,505.6,307.70000000000005);
// library properties:
lib.properties = {
	id: '521FBE2A71DC4330886A08701816E4DF',
	width: 960,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1767665314241", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1767665314241", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1767665314241", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png?1767665314241", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png?1767665314242", id:"index_atlas_5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['521FBE2A71DC4330886A08701816E4DF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;