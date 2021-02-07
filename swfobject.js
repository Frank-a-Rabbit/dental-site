// /**
//  * SWFObject v1.4.4: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
//  *
//  * SWFObject is (c) 2006 Geoff Stearns and is released under the MIT License:
//  * http://www.opensource.org/licenses/mit-license.php
//  *
//  * **SWFObject is the SWF embed script formerly known as FlashObject. The name was changed for
//  *   legal reasons.
//  */
// if(typeof deconcept=="undefined"){var deconcept=new Object();}
// if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}
// if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}
// deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){if(!document.getElementById){return;}
// this.DETECT_KEY=_b?_b:"detectflash";
// this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);
// this.params=new Object();
// this.variables=new Object();
// this.attributes=new Array();
// if(_1){this.setAttribute("swf",_1);}
// if(id){this.setAttribute("id",id);}
// if(w){this.setAttribute("width",w);}
// if(h){this.setAttribute("height",h);}
// if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}
// this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();
// if(c){this.addParam("bgcolor",c);}
// var q=_8?_8:"high";
// this.addParam("quality",q);
// this.setAttribute("useExpressInstall",_7);
// this.setAttribute("doExpressInstall",false);
// var _d=(_9)?_9:window.location;
// this.setAttribute("xiRedirectUrl",_d);
// this.setAttribute("redirectUrl","");
// if(_a){this.setAttribute("redirectUrl",_a);}};
// deconcept.SWFObject.prototype={setAttribute:function(_e,_f){
// this.attributes[_e]=_f;
// },getAttribute:function(_10){
// return this.attributes[_10];
// },addParam:function(_11,_12){
// this.params[_11]=_12;
// },getParams:function(){
// return this.params;
// },addVariable:function(_13,_14){
// this.variables[_13]=_14;
// },getVariable:function(_15){
// return this.variables[_15];
// },getVariables:function(){
// return this.variables;
// },getVariablePairs:function(){
// var _16=new Array();
// var key;
// var _18=this.getVariables();
// for(key in _18){_16.push(key+"="+_18[key]);}
// return _16;},getSWFHTML:function(){var _19="";
// if(navigator.plugins&amp;&amp;navigator.mimeTypes&amp;&amp;navigator.mimeTypes.length){
// if(this.getAttribute("doExpressInstall")){
// this.addVariable("MMplayerType","PlugIn");}
// _19="<embed type="\&quot;application/x-shockwave-flash\&quot;" src="\&quot;&quot;+this.getAttribute(&quot;swf&quot;)+&quot;\&quot;" width="\&quot;&quot;+this.getAttribute(&quot;width&quot;)+&quot;\&quot;" height="\&quot;&quot;+this.getAttribute(&quot;height&quot;)+&quot;\&quot;&quot;;" _19+=" id=\" "+this.getattribute("id")+"\"="" name="\&quot;&quot;+this.getAttribute(&quot;id&quot;)+&quot;\&quot;" ";="" var="" _1a="this.getParams();" for(var="" key="" in="" _1a){_19+="[key]+&quot;=\&quot;&quot;+_1a[key]+&quot;\&quot;" ";}="" _1c="this.getVariablePairs().join(&quot;&amp;&quot;);" if(_1c.length="">0){_19+="flashvars=\""+_1c+"\"";}_19+="/&gt;";
// }else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");}
// _19="<object id="\&quot;&quot;+this.getAttribute(&quot;id&quot;)+&quot;\&quot;" classid="\&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\&quot;" width="\&quot;&quot;+this.getAttribute(&quot;width&quot;)+&quot;\&quot;" height="\&quot;&quot;+this.getAttribute(&quot;height&quot;)+&quot;\&quot;">";
// _19+="<param name="\&quot;movie\&quot;" value="\&quot;&quot;+this.getAttribute(&quot;swf&quot;)+&quot;\&quot;">";
// var _1d=this.getParams();
// for(var key in _1d){_19+="<param name="\&quot;&quot;+key+&quot;\&quot;" value="\&quot;&quot;+_1d[key]+&quot;\&quot;">";}
// var _1f=this.getVariablePairs().join("&amp;");
// if(_1f.length&gt;0){_19+="<param name="\&quot;flashvars\&quot;" value="\&quot;&quot;+_1f+&quot;\&quot;">";}_19+="</object>";}
// return _19;
// },write:function(_20){
// if(this.getAttribute("useExpressInstall")){
// var _21=new deconcept.PlayerVersion([6,0,65]);
// if(this.installedVer.versionIsValid(_21)&amp;&amp;!this.installedVer.versionIsValid(this.getAttribute("version"))){
// this.setAttribute("doExpressInstall",true);
// this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));
// document.title=document.title.slice(0,47)+" - Flash Player Installation";
// this.addVariable("MMdoctitle",document.title);}}
// if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){
// var n=(typeof _20=="string")?document.getElementById(_20):_20;
// n.innerHTML=this.getSWFHTML();return true;
// }else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}
// return false;}};
// deconcept.SWFObjectUtil.getPlayerVersion=function(){
// var _23=new deconcept.PlayerVersion([0,0,0]);
// if(navigator.plugins&amp;&amp;navigator.mimeTypes.length){
// var x=navigator.plugins["Shockwave Flash"];
// if(x&amp;&amp;x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}
// }else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}
// catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
// _23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}
// catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}
// catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
// return _23;};
// deconcept.PlayerVersion=function(_27){
// this.major=_27[0]!=null?parseInt(_27[0]):0;
// this.minor=_27[1]!=null?parseInt(_27[1]):0;
// this.rev=_27[2]!=null?parseInt(_27[2]):0;
// };
// deconcept.PlayerVersion.prototype.versionIsValid=function(fv){
// if(this.major<fv.major){return false;}="" if(this.major="">fv.major){return true;}
// if(this.minor<fv.minor){return false;}="" if(this.minor="">fv.minor){return true;}
// if(this.rev</fv.minor){return></fv.major){return>