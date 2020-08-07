(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1261:function(n,a,t){n.exports={basic:t(1301)}},1301:function(n,a,t){n.exports={content:{"zh-CN":[["p","默认文字效果"]],"en-US":[["p","Default text effect."],["style","\n/* 通用样式 */\n.texty-demo {\n  font-size: 32px;\n  text-align: center;\n}\n"]]},meta:{order:2,title:{"zh-CN":"基本效果","en-US":"basic motion"},filename:"components/others/demo/basic.md",id:"components-others-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Texty <span class="token keyword">from</span> <span class="token string">\'rc-texty\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'rc-texty/assets/index.css\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>texty-demo<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">64</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Texty</span><span class="token punctuation">></span></span>Ant Motion<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Texty</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> Texty <span class="token keyword">from</span> <span class="token string">\'rc-texty\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'rc-texty/assets/index.css\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>texty-demo<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token operator">:</span> <span class="token number">64</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Texty</span></span><span class="token punctuation">></span></span>Ant Motion<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Texty</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n,a=t(0),s=(t(4),(n=t(1306))&&n.__esModule?n:{default:n});return t(1302),a.createElement("div",{className:"texty-demo",style:{marginTop:64}},a.createElement(s.default,null,"Ant Motion"))},style:"\n/* 通用样式 */\n.texty-demo {\n  font-size: 32px;\n  text-align: center;\n}\n"}},1302:function(n,a,t){},1306:function(n,a,t){"use strict";t.r(a);var s=t(3),e=t.n(s),o=t(6),p=t.n(o),c=t(5),i=t.n(c),r=t(9),u=t.n(r),l=t(0),d=t(18),y=t(2),k=t.n(y),m={left:{x:30,opacity:0},right:{x:-30,opacity:0},top:{y:-30,opacity:0},bottom:{y:30,opacity:0},alpha:{opacity:0},scale:{scale:0,opacity:0},scaleBig:{scale:2,opacity:0},scaleX:{opacity:0,scaleX:0},scaleY:{opacity:0,scaleY:0},"mask-bottom":{opacity:0,scale:.8,y:"100%"},"mask-top":{opacity:0,scale:.8,y:"-100%"},flash:{enter:[{opacity:0,type:"from",duration:150},{opacity:0,duration:150},{opacity:1,duration:150}],leave:[{opacity:0,duration:150},{opacity:1,duration:150},{opacity:0,duration:150}]},bounce:{enter:[{opacity:0,type:"set"},{y:-30,opacity:1,duration:300},{y:15,duration:200},{y:-10,duration:200},{y:5,duration:200},{y:0,duration:200}],leave:[{y:5,duration:200},{y:-10,duration:200},{y:15,duration:200},{y:-30,opacity:0,duration:300}]},swing:{enter:[{opacity:0,type:"set"},{x:10,opacity:1,duration:150},{x:-10,duration:150},{x:8,duration:100},{x:-8,duration:100},{x:5,duration:100},{x:-5,duration:100},{x:0,duration:100}],leave:[{x:-5,duration:100},{x:5,duration:100},{x:-8,duration:100},{x:8,duration:100},{x:-10,duration:150},{x:10,opacity:0,duration:150}]},"swing-rotate":{enter:[{opacity:0,transformOrigin:"50% 0",type:"set"},{rotate:30,opacity:1,duration:300},{rotate:-30,duration:300},{rotate:15,duration:200},{rotate:-15,duration:200},{rotate:5,duration:100},{rotate:-5,duration:100},{rotate:0,duration:50}],leave:[{rotate:-5,duration:100},{rotate:5,duration:100},{rotate:-15,duration:200},{rotate:15,duration:200},{rotate:-30,duration:300},{rotate:30,opacity:0,duration:300}]},"swing-y":{enter:[{opacity:0,type:"set"},{y:10,opacity:1,duration:150},{y:-10,duration:150},{y:8,duration:100},{y:-8,duration:100},{y:5,duration:100},{y:-5,duration:100},{y:0,duration:100}],leave:[{y:-5,duration:100},{y:5,duration:100},{y:-8,duration:100},{y:8,duration:100},{y:-10,duration:150},{y:10,opacity:0,duration:150}]}},f=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]])}return t};function g(n,a){return"function"==typeof n?n(a):n}var x=function(n){function a(){p()(this,a);var t=i()(this,n.apply(this,arguments));return t.getChildrenToRender=function(n){if(!n)return[];var a=t.props.split;return(a?a(n):n.split("")).map((function(n,a){return l.createElement("span",{key:n+"-"+a.toString()},n)}))},t.getEnterOrLeave=function(n,a,s){var o=t.props,p=o.mode,c=o.type,i=o.enter,r=o.appear,u=o.interval,l=o.duration;if(!r&&"enter"===a||s<0)return null;var d=e()({},n,{type:a}),y=g(l,d),k=g(u,d),f=void 0;if("function"==typeof u)f=k;else switch(p){case"reverse":f=(s-n.index)*k;break;case"sync":f=0;break;case"random":f=s*k*Math.random();break;default:f=n.index*k}f+=g(t.props.delay,d);var x="enter"===a?"from":"to",h=t.props[a]||i;return h&&"function"==typeof h?h=h(e()({},n,{delay:f})):h||(h=m[c]),h.enter&&(h=h[a]||h.etner),Array.isArray(h)?h.map((function(n,a){return a||n.duration&&"set"!==n.type?1!==a||h[0].duration&&"set"!==n.type?e()({delay:a?0:f},n):e()({delay:f},n):n})):e()({delay:f,duration:y,type:x},h)},t}return u()(a,n),a.prototype.render=function(){var n,a=this,t=this.props,s=t.prefixCls,o=t.type,p=t.className,c=t.enter,i=(t.mode,t.duration,t.delay,t.interval,t.children),r=(t.split,f(t,["prefixCls","type","className","enter","mode","duration","delay","interval","children","split"])),u=this.getChildrenToRender(i),y=k()(s,((n={})[o]=o&&!c,n[p]=!!p,n));return l.createElement(d.TweenOneGroup,e()({},r,{className:y,enter:function(n){return a.getEnterOrLeave(n,"enter",u.length-1)},leave:function(n){return a.getEnterOrLeave(n,"leave",a.tweenGrooup.keysToLeave.length-1)},ref:function(n){a.tweenGrooup=n}}),u)},a}(l.Component),h=x;x.defaultProps={type:"top",mode:"smooth",prefixCls:"texty",component:"div",delay:0,interval:50,appear:!0};a.default=h}}]);