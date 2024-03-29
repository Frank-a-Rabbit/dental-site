

/* 



  ================================================

  PVII Pop Menu Magic 2 scripts

  Copyright (c) 2008-2012 Project Seven Development

  www.projectseven.com

  Version:  1.5.3 - script build: 1-45

  ================================================

  

*/



var p7PMMover='_over';

var p7PMMopen='_overdown';

var p7PMMmark='_down';

var p7PMMi=false,p7PMMa=false,p7PMMctl=[],p7PMMadv=[];

function P7_PMMset(){

	var i,h,sh,hd,x,v;

	if(!document.getElementById){

		return;

	}

	sh='.p7PMM div {position:absolute;display:none;}\n';

	if(document.styleSheets){

		h='\n<st' + 'yle type="text/css">\n'+sh+'\n</s' + 'tyle>';

		document.write(h);

	}

	else{

		h=document.createElement('style');

		h.type='text/css';

		h.appendChild(document.createTextNode(sh));

		hd=document.getElementsByTagName('head');

		hd[0].appendChild(h);

	}

}

P7_PMMset();

function P7_PMMaddLoad(){

	if(window.addEventListener){

		if(!/KHTML|WebKit/i.test(navigator.userAgent)){

			document.addEventListener("DOMContentLoaded", P7_PMMinit, false);

		}

		window.addEventListener("load",P7_PMMinit,false);

		window.addEventListener("unload",P7_PMMbb,false);

		document.addEventListener("keydown",P7_PMMkey,false);

	}

	else if(document.addEventListener){

		document.addEventListener("load",P7_PMMinit,false);

	}

	else if(window.attachEvent){

		document.write("<script id=p7ie_ppm defer src=\"//:\"><\/script>");

		document.getElementById("p7ie_ppm").onreadystatechange=function(){

			if (this.readyState=="complete"){

				if(p7PMMctl.length>0){

					P7_PMMinit();

				}

			}

		};

		window.attachEvent("onload",P7_PMMinit);

		window.attachEvent("onunload",P7_PMMbb);

		document.attachEvent("onkeydown",P7_PMMkey);

	}

	else if(typeof window.onload=='function'){

		var p7loadit=onload;

		window.onload=function(){

			p7loadit();

			P7_PMMinit();

		};

	}

	else{

		window.onload=P7_PMMinit;

	}

}

P7_PMMaddLoad();

function P7_PMMbb(){

	P7_PMMshutall();

}

function P7_PMMop(){

	if(!document.getElementById){

		return;

	}

	p7PMMctl[p7PMMctl.length]=arguments;

}

function P7_PMMinit(){

	var i,j,jj,k,tM,tA,tU,lv,pp,clv,fs,tS,d=1,cl,tp,uh=0,cN,tD,tN,iM,tw,ow,oh,sh;

	if(p7PMMi){

		return;

	}

	p7PMMi=true;

	document.p7PMMpreload=[];

	sh=document.getElementById('p7PMMshowall');

	if(sh){

		sh.pmmShowAllState='off';

		sh.onclick=function(){

			return P7_PMMshowAll(this,1);

		};

	}

	for(k=0;k<p7PMMctl.length;k++){

		tM=document.getElementById(p7PMMctl[k][0]);

		if(tM){

			tM.p7opt=p7PMMctl[k];

			if(typeof(opera)!='undefined'||navigator.appVersion.indexOf("MSIE 5")>-1){

				tM.p7opt[2]=0;

			}

			if(P7_PMMisMobile()){

				tM.p7opt[15]=2;

			}

			P7_PMMremClass(tM,'p7PMMnoscript');

			tM.pmmshut=true;

			tM.style.position='relative';

			tM.style.zIndex='999999';

			tM.p7PMMtmr=null;

			tD=tM.getElementsByTagName("DIV");

			for(i=0;i<tD.length;i++){

				tD[i].setAttribute("id",tM.id+'d'+(i+2));

				tD[i].p7state='closed';

				tD[i].pmmmenu=tM.id;

			}

			tM.pmmFixed=false;

			pp=tM;

			while(pp){

				if(P7_PMMgetPropValue(pp,'position','position')=='fixed'){

					tM.pmmFixed=true;

					break;

				}

				if(pp.nodeName=="BODY"){

					break;

				}

				pp=pp.parentNode;

			}

			tU=tM.getElementsByTagName("UL");

			for(i=0;i<tU.length;i++){

				tU[i].setAttribute("id",tM.id+'u'+(i+1));

				lv=1;

				pp=tU[i].parentNode;

				while(pp){

					if(pp.id&&pp.id==tM.id){

						break;

					}

					if(pp.tagName&&pp.tagName=="UL"){

						lv++;

					}

					pp=pp.parentNode;

				}

				tU[i].pmmlevel=lv;

				clv='level_'+lv;

				P7_PMMsetClass(tU[i],clv);

				tN=tU[i].childNodes;

				if(tN){

					fs=-1;

					jj=0;

					for(j=0;j<tN.length;j++){

						if(tN[j].tagName&&tN[j].tagName=="LI"){

							jj++;

							tA=tN[j].getElementsByTagName("A")[0];

							if(fs<0){

								P7_PMMsetClass(tA,'pmmfirst');

								P7_PMMsetClass(tN[j],'pmmfirst');

							}

							fs=j;

							tA.setAttribute("id",tM.id+'a'+(d));

							d++;

							tA.pmmlevel=lv;

							tA.pmmdiv=tU[i].parentNode.id;

							tA.pmmmenu=tM.id;

							if(i==0){

								P7_PMMsetClass(tN[j],('root_'+jj));

							}

							if(tM.p7opt[15]!=1){

								tA.onclick=function(){

									return P7_PMMclick(this);

								};

							}

							tS=tN[j].getElementsByTagName("UL");

							if(tS&&tS.length>0){

								tA.pmmsub=tS[0].parentNode.id;

								tA.p7state='closed';

								if(tM.p7opt[13]==1&&lv==1){

									P7_PMMsetClass(tA,'trig_closed_up');

									P7_PMMsetClass(tA.parentNode,'trig_closed_up');

								}

								else if(tM.p7opt[5]==1){

									P7_PMMsetClass(tA,'trig_closed_left');

									P7_PMMsetClass(tA.parentNode,'trig_closed_left');

								}

								else{

									P7_PMMsetClass(tA,'trig_closed');

									P7_PMMsetClass(tA.parentNode,'trig_closed');

								}

							}

							else{

								tA.pmmsub=false;

							}

							if(!tM.p7opt[15]||tM.p7opt[15]<2){

								tA.onmouseover=function(){

									P7_PMMtrig(this);

								};

							}

							tA.hasImg=false;

							var sr,x,fnA,fnB,swp,s1,s2,s3;

							iM=tA.getElementsByTagName("IMG");

							if(iM&&iM[0]){

								iM[0].pmmdiv=tA.pmmdiv;

								sr=iM[0].getAttribute("src");

								swp=tM.p7opt[9];

								iM[0].pmmswap=swp;

								x=sr.lastIndexOf(".");

								fnA=sr.substring(0,x);

								fnB='.'+sr.substring(x+1);

								s1=fnA+p7PMMover+fnB;

								s2=fnA+p7PMMopen+fnB;

								s3=fnA+p7PMMmark+fnB;

								if(swp==1){

									iM[0].p7imgswap=[sr,s1,s1,s1];

									P7_PMMpreloader(s1);

								}

								else if(swp==2){

									iM[0].p7imgswap=[sr,s1,s2,s2];

									P7_PMMpreloader(s1,s2);

								}

								else if(swp==3){

									iM[0].p7imgswap=[sr,s1,s2,s3];

									P7_PMMpreloader(s1,s2,s3);

								}

								else{

									iM[0].p7imgswap=[sr,sr,sr,sr];

								}

								iM[0].p7state='closed';

								iM[0].mark=false;

								iM[0].rollover=tM.p7opt[10];

								if(swp>0){

									tA.hasImg=true;

									iM[0].onmouseover=function(){

										P7_PMMimovr(this);

									};

									iM[0].onmouseout=function(){

										P7_PMMimout(this);

									};

								}

							}

						}

					}

					if(fs>0){

						P7_PMMsetClass(tA,'pmmlast');

						P7_PMMsetClass(tN[fs],'pmmlast');

					}

				}

			}

			if(tM.p7opt[6]==1){

				tw=tM.offsetWidth;

				oh=tM.offsetHeight;

				ow=P7_PMMgetPropValue(tU[0],'position','position');

				tM.style.height=oh+'px';

				tU[0].style.position="absolute";

				uh=tU[0].offsetWidth;

				tU[0].style.position=ow;

				tM.style.height='auto';

				uh=(uh>=tw)?tw:uh;

				tU[0].style.marginLeft=((tw-uh)/2)+'px';

			}

			if(!tM.p7opt[15]||tM.p7opt[15]<2){

				tM.onmouseout=function(evt){

					var k,rt,pp,tD,m=true;

					evt=(evt)?evt:((event)?event:null);

					if(evt){

						rt=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;

						if(rt){

							pp=rt.parentNode;

							while(pp){

								if(pp&&pp.id&&typeof(pp.id)=='string'&&pp.id.indexOf(this.id)==0){

									m=false;

									break;

								}

								pp=pp.parentNode;

							}

						}

						if(m){

							if(this.p7PMMtmr){

								clearTimeout(this.p7PMMtmr);

							}

							if(this.p7opt[8]==1){

								this.p7PMMtmr=setTimeout("P7_PMMshut('"+this.id+"')",360);

							}

							else{

								P7_PMMshut(this.id);

							}

						}

					}

				};

			}

			if(tM.p7opt[11]==1){

				P7_PMMcurrentMark(tM);

			}

		}

	}

	p7PMMa=true;

}

function P7_PMMshut(d){

	var k,tM,tD;

	if(d){

		tM=document.getElementById(d);

		if(tM){

			tD=tM.getElementsByTagName("DIV");

			if(tD&&tD.length){

				if(!tM.pmmshut){

					tM.pmmshut=true;

					for(k=tD.length-1;k>-1;k--){

						if(tD[k].p7state&&tD[k].p7state=='open'){

							P7_PMMclose(tD[k]);

						}

					}

				}

			}

		}

	}

}

function P7_PMMshutall(){

	if(p7PMMctl&&p7PMMctl.length){

		for(var i=0;i<p7PMMctl.length;i++){

			P7_PMMshut(p7PMMctl[i][0]);

		}

	}

}

function P7_PMMpreloader(){

	var i,x;

	for(i=0;i<arguments.length;i++){

		x=document.p7PMMpreload.length;

		document.p7PMMpreload[x]=new Image();

		document.p7PMMpreload[x].src=arguments[i];

	}

}

function P7_PMMimovr(im){

	var m=false,a=im.parentNode,r=im.rollover;

	if(im.mark){

		m=(r>1)?true:false;

	}

	else if(im.p7state=='open'){

		m=(r==1||r==3)?true:false;

	}

	else{

		m=true;

	}

	if(m){

		im.src=im.p7imgswap[1];

	}

}

function P7_PMMimout(im){

	var a=im.parentNode,r=im.rollover;

	if(im.mark){

		if(im.p7state=='open'){

			im.src=im.p7imgswap[2];

		}

		else{

			im.src=im.p7imgswap[3];

		}

	}

	else if(im.p7state=='open'){

		if(r==1||r==3){

			im.src=im.p7imgswap[2];

		}

	}

	else{

		im.src=im.p7imgswap[0];

	}

}

function P7_PMMtrig(a){

	var dV;

	dV=document.getElementById(a.pmmmenu);

	if(dV.p7PMMtmr){

		clearTimeout(dV.p7PMMtmr);

	}

	if(a.pmmsub){

		if(dV.p7opt[8]==1){

			dV.p7PMMtmr=setTimeout("P7_PMMopen('"+a.id+"')",160);

		}

		else{

			P7_PMMopen(a.id);

		}

	}

	else{

		if(dV.p7opt[8]==1){

			dV.p7PMMtmr=setTimeout("P7_PMMtoggle('"+a.id+"')",160);

		}

		else{

			P7_PMMtoggle(a.id);

		}

	}

}

function P7_PMMclick(a){

	var m=false,tM,h,d,wH;

	tM=document.getElementById(a.pmmmenu);

	P7_PMMshutOthers(a.pmmmenu);

	h=a.getAttribute("href");

	wH=window.location.href;

	if(h&&h!=''){

		if(a.href!=wH&&a.href!=wH+'#'){

			if(h.search(/javas/i)!=0){

				if(!a.pmmsub||a.p7state=='open'){

					m=true;

				}

			}

		}

	}

	if(!m){

		if(!tM.p7opt[15]||tM.p7opt[15]==0||tM.p7opt[15]==2){

			if(!a.p7state||a.p7state=='open'){

				P7_PMMtoggle(a.id,1);

			}

			else{

				P7_PMMopen(a.id,null,1);

			}

		}

	}

	else{

		P7_PMMshutall();

	}

	return m;

}

function P7_PMMopen(d,bp,ck){

	var i,tA,tM,tD,w,h,mT,mL,pp,xx=0,yy=0,wd,pb,pr,sct,aw,sc,pt,pl,iM;

	tA=document.getElementById(d);

	if(!bp){

		P7_PMMtoggle(d);

	}

	if(tA.p7state=='open'){

		return;

	}

	tA.p7state='open';

	if(tA.hasImg){

		iM=tA.getElementsByTagName("IMG")[0];

		iM.p7state='open';

		iM.src=iM.p7imgswap[2];

	}

	tA.className=tA.className.replace('trig_closed','trig_open');

	tA.parentNode.className=tA.parentNode.className.replace('trig_closed','trig_open');

	tM=document.getElementById(tA.pmmmenu);

	tD=document.getElementById(tA.pmmsub);

	tD.p7trigger=tA.id;

	tD.p7state='open';

	tM.pmmshut=false;

	tD.style.visibility="hidden";

	tD.style.display="block";

	tD.style.height='auto';

	tD.style.width='auto';

	w=tD.offsetWidth;

	h=tD.offsetHeight;

	aw=tA.parentNode.offsetWidth;

	mT=(tA.parentNode.offsetHeight*-1)+tM.p7opt[3];

	if(tM.p7opt[5]==1){

		mL=(w*-1)-tM.p7opt[4];

	}

	else{

		mL=tA.offsetWidth+tM.p7opt[4];

	}

	if(tM.p7opt[1]==1&&tA.pmmlevel==1){

		mT=0;

		mL=0;

		if(tM.p7opt[7]==1){

			mL=((w-aw)/2)*-1;

		}

		else if(tM.p7opt[7]==2){

			if(tA.className.indexOf('pmmlast')>-1){

				mL=(w-aw)*-1;

			}

			else if(tA.className.indexOf('pmmfirst')==-1){

				mL=((w-aw)/2)*-1;

			}

			else{

				mL=0;

			}

		}

	}

	if(tM.p7opt[13]==1){

		mT-=h;

		if(tM.p7opt[1]==1&&tA.pmmlevel==1){

			mT-=tA.offsetHeight;

		}

	}

	wd=P7_PMMwin();

	pp=tA;

	while(pp){

		xx+=(pp.offsetLeft)?pp.offsetLeft:0;

		yy+=(pp.offsetTop)?pp.offsetTop:0;

		if(typeof(opera)!='undefined'){

			if(pp.nodeName=="BODY"){

				yy-=(pp.offsetTop)?pp.offsetTop:0;

			}

		}

		pp=pp.offsetParent;

	}

	if(!tM.pmmFixed){

		sc=document.body.parentNode.scrollTop;

		if(!sc){

			sc=document.body.scrollTop;

			if(!sc){

				sc=window.scrollY?window.scrollY:0;

			}

		}

		yy-=sc;

		sc=document.body.parentNode.scrollLeft;

		if(!sc){

			sc=document.body.scrollLeft;

			if(sc){

				sc=window.scrollX?window.scrollX:0;

			}

		}

		xx-=sc;

	}

	pr=xx+mL+w;

	pb=yy+mT+h+tA.offsetHeight;

	if(pr>wd[1]){

		if(tM.p7opt[1]==1&&tA.pmmlevel==1){

			mL=mL-(pr-wd[1]+2);

		}

		else{

			mL=w*-1;

		}

	}

	if(pb>wd[0]){

		mT=mT-(pb-wd[0]+2);

	}

	pt=yy+mT+tA.offsetHeight;

	if(pt<0){

		mT=mT-pt+2;

	}

	pl=xx+mL;

	if(pl<0){

		mL=mL-pl+2;

	}

	tD.style.marginTop=mT+'px';

	tD.style.marginLeft=mL+'px';

	if(p7PMMa&&tM.p7opt[2]>0){

		var dfs,fsA,tU=tD.getElementsByTagName('UL')[0],cb=0;

		fsA=tU.getElementsByTagName("A")[0];

		if(tM.p7opt[2]==3){

			if(tM.p7opt[1]==1&&tU.pmmlevel==2){

				cb=2;

			}

			else{

				cb=1;

			}

		}

		if(tM.p7opt[2]==1||cb==1){

			tU.pmmTargetA=100;

			tU.pmmCurrentA=5;

			tU.style.fontSize=tU.pmmCurrentA+'%';

			tU.style.visibility="visible";

			tU.parentNode.style.visibility="visible";

			if(!tU.animArunning){

				tU.animArunning=true;

				tU.animA=setInterval("P7_PMManimA('"+tU.id+"')", 10);

			}

		}

		else if(tM.p7opt[2]==2||cb==2){

			dfs=P7_PMMgetPropValue(fsA,'lineHeight','line-height');

			tU.pmmDefLineHeight=(dfs)?dfs:'normal';

			tU.pmmTargetB=120;

			tU.pmmCurrentB=5;

			tU.style.lineHeight=tU.pmmCurrentB+'%';

			tU.style.visibility="visible";

			tU.parentNode.style.visibility="visible";

			if(!tU.animBrunning){

				tU.animBrunning=true;

				tU.animB=setInterval("P7_PMManimB('"+tU.id+"')", 10);

			}

		}

		else if(tM.p7opt[2]==4){

			tU.pmmTargetC=0;

			tU.pmmCurrentC=-100;

			tU.style.textIndent=tU.pmmCurrentC+'px';

			tU.style.visibility="visible";

			tU.parentNode.style.visibility="visible";

			if(!tU.animCrunning){

				tU.animCrunning=true;

				tU.animC=setInterval("P7_PMManimC('"+tU.id+"')", 10);

			}

		}

	}

	else{

		tD.style.visibility="visible";

	}

}

function P7_PMMtoggle(d,bp){

	var i,a,tA,tD,pp;

	a=document.getElementById(d);

	pp=a.parentNode;

	while(pp){

		if(pp.tagName&&pp.tagName=="UL"){

			break;

		}

		pp=pp.parentNode;

	}

	tD=pp.getElementsByTagName("DIV");

	if(tD&&tD.length>0){

		for(i=tD.length-1;i>-1;i--){

			if(tD[i].p7state&&tD[i].p7state=='open'){

				if(bp==1||(!bp&&tD[i].p7trigger!=a.id)){

					P7_PMMclose(tD[i]);

				}

			}

		}

	}

}

function P7_PMMclose(d,bp){

	var a,h,w,tM,iM;

	a=document.getElementById(d.p7trigger);

	a.p7state='closed';

	d.p7state='closed';

	a.className=a.className.replace('trig_open','trig_closed');

	a.parentNode.className=a.parentNode.className.replace('trig_open','trig_closed');

	if(a.hasImg){

		iM=a.getElementsByTagName("IMG")[0];

		iM.p7state='closed';

		if(iM.mark){

			iM.src=iM.p7imgswap[3];

		}

		else{

			iM.src=iM.p7imgswap[0];

		}

	}

	d.style.display='none';

}

function P7_PMMmark(){

	p7PMMadv[p7PMMadv.length]=arguments;

}

function P7_PMMcurrentMark(el){

	var j,i,wH,cm=false,mt=['',1,'',''],op,r1,k,kk,tA,aU,pp,a,im,x;

	wH=window.location.href;

	if(el.p7opt[12]!=1){

		wH=wH.replace(window.location.search,'');

	}

	if(wH.charAt(wH.length-1)=='#'){

		wH=wH.substring(0,wH.length-1);

	}

	for(k=0;k<p7PMMadv.length;k++){

		if(p7PMMadv[k][0]&&p7PMMadv[k][0]==el.id){

			mt=p7PMMadv[k];

			cm=true;

			break;

		}

	}

	op=mt[1];

	if(op<1){

		return;

	}

	r1=/index\.[\S]*/i;

	k=-1;

	kk=-1;

	tA=el.getElementsByTagName("A");

	for(j=0;j<tA.length;j++){

		aU=tA[j].href.replace(r1,'');

		if(op>0){

			if(tA[j].href==wH||aU==wH){

				k=j;

				kk=-1;

			}

		}

		if(op==2){

			if(tA[j].firstChild){

				if(tA[j].firstChild.nodeValue==mt[2]){

					kk=j;

				}

			}

		}

		if(op==3&&tA[j].href.indexOf(mt[2])>-1){

			kk=j;

		}

		if(op==4){

			for(x=2;x<mt.length;x+=2){

				if(wH.indexOf(mt[x])>-1){

					if(tA[j].firstChild&&tA[j].firstChild.nodeValue){

						if(tA[j].firstChild.nodeValue==mt[x+1]){

							kk=j;

						}

					}

				}

			}

		}

	}

	k=(kk>k)?kk:k;

	if(k>-1){

		pp=tA[k].parentNode;

		while(pp){

			if(pp.tagName&&pp.tagName=='LI'){
				P7_PMMsetClass(pp,'li_current_mark');

				a=pp.getElementsByTagName('A');

				if(a&&a[0]){

					P7_PMMsetClass(a[0],'current_mark');

					if(a[0].hasImg){

						im=a[0].getElementsByTagName('IMG')[0];

						im.mark=true;

						im.src=im.p7imgswap[3];

					}

				}

			}

			else{

				if(pp==el){

					break;

				}

			}

			pp=pp.parentNode;

		}

	}

}

function P7_PMManimA(dd){

	var tD,nv,fr=10,dy=10;

	tD=document.getElementById(dd);

	if(tD){

		nv=tD.pmmCurrentA+fr;

		if(nv>=tD.pmmTargetA){

			nv=tD.pmmTargetA;

		}

		tD.pmmCurrentA=nv;

		tD.style.fontSize=nv+'%';

		if(nv===tD.pmmTargetA){

			clearInterval(tD.animA);

			tD.animArunning=false;

		}

	}

}

function P7_PMManimB(dd){

	var tD,nv,fr=10,dy=10;

	tD=document.getElementById(dd);

	if(tD){

		nv=tD.pmmCurrentB+fr;

		if(nv>=tD.pmmTargetB){

			nv=tD.pmmTargetB;

		}

		tD.pmmCurrentB=nv;

		tD.style.lineHeight=nv+'%';

		if(nv===tD.pmmTargetB){

			clearInterval(tD.animB);

			tD.animBrunning=false;

			tD.style.lineHeight=tD.pmmDefLineHeight;

		}

	}

}

function P7_PMManimC(dd){

	var tD,nv,fr=8,dy=10;

	tD=document.getElementById(dd);

	if(tD){

		nv=tD.pmmCurrentC+fr;

		if(nv>=tD.pmmTargetC){

			nv=tD.pmmTargetC;

		}

		tD.pmmCurrentC=nv;

		tD.style.textIndent=nv+'px';

		if(nv===tD.pmmTargetC){

			clearInterval(tD.animC);

			tD.animCrunning=false;

		}

	}

}

function P7_PMMsetClass(ob,cl){

	var cc,nc,r=/\s+/g;

	cc=ob.className;

	nc=cl;

	if(cc&&cc.length>0&&cc.indexOf(cl)==-1){

		nc=cc+' '+cl;

	}

	nc=nc.replace(r,' ');

	ob.className=nc;

}

function P7_PMMremClass(ob,cl){

	var cc,nc,r=/\s+/g;

	cc=ob.className;

	if(cc&&cc.indexOf(cl>-1)){

		nc=cc.replace(cl,'');

		nc=nc.replace(r,' ');

		nc=nc.replace(/\s$/,'');

		ob.className=nc;

	}

}

function P7_PMMwin(){

	var h,w;

	if(document.documentElement&&document.documentElement.clientHeight){

		w=document.documentElement.clientWidth;

		h=document.documentElement.clientHeight;

	}

	else if(window.innerHeight){

		if(document.documentElement.clientWidth){

			w=document.documentElement.clientWidth;

		}

		else{

			w=window.innerWidth;

		}

		h=window.innerHeight;

	}

	else if(document.body){

		w=document.body.clientWidth;

		h=document.body.clientHeight;

	}

	return [h,w];

}

function P7_PMMgetPropValue(ob,prop,prop2){

	var h,v=null;

	if(ob){

		if(ob.currentStyle){

			v=ob.currentStyle[prop];

		}

		else if(document.defaultView.getComputedStyle(ob,"")){

			v=document.defaultView.getComputedStyle(ob,"").getPropertyValue(prop2);

		}

		else{

			v=eval("ob.style."+prop);

		}

	}

	return v;

}

function P7_PMMshowAll(a,nt){

	var tA,k,tM,d;

	if(typeof(a)=='object'){

		tA=a;

	}

	else{

		tA=document.getElementById(a);

	}

	for(k=0;k<p7PMMctl.length;k++){

		tM=document.getElementById(p7PMMctl[k][0]);

		if(tM){

			if(nt==1||tA.pmmShowAllState=='off'){

				if(tA.pmmShowAllState=='off'){

					P7_PMMsetClass(tM,'p7PMMshowAll');

					tA.pmmShowAllState='on';

				}

			}

			else{

				P7_PMMremClass(tM,'p7PMMshowAll');

				tA.pmmShowAllState='off';

			}

		}

	}

	return false;

}

function P7_PMMkey(evt){

	evt=(evt)?evt:event;

	if(!evt.altKey&&!evt.ctrlKey){

		if(evt.keyCode==27){

			P7_PMMshutall();

		}

	}

}

function P7_PMMisMobile(){

	var i,m=false,ua=navigator.userAgent.toLowerCase();

	var dv=['iphone','ipad','ipod','android','windows ce','iemobile','windowsce','blackberry','palm','symbian','series60',

	'armv','arm7tdmi','opera mobi','opera mini','polaris','kindle','midp','mmp/','portalmmm','smm-mms','sonyericsson'];

	for(i=0;i<dv.length;i++){

		if(ua.search(dv[i])>-1){

			m=dv[i];

			break;

		}

	}

	return m;

}

function P7_PMMshutOthers(d){

	for(var i=0;i<p7PMMctl.length;i++){

		if(d!=p7PMMctl[i][0]){

			P7_PMMshut(p7PMMctl[i][0]);

		}

	}

}

