(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{MxoS:function(t,e,n){"use strict";n.r(e);var r=n("wTIg"),a=n("q1tI"),i=n("8+79"),o=n("yDd/"),c=n("FMSq"),s=n("+KJ9"),u=n("MUpH"),l=n("Wbzz"),d=n("lYvG"),b=n("qKvR"),p=function(t){var e=t.author;return Object(b.jsx)(h,null,Object(b.jsx)(g,{as:e.authorsPage?l.Link:"div",to:e.slug,"data-a11y":"false","aria-label":"Author's bio"},Object(b.jsx)(f,null,Object(b.jsx)(x,{src:e.avatar.medium}))),Object(b.jsx)(j,{dangerouslySetInnerHTML:{__html:e.bio}}))},h=Object(r.a)("div",{target:"ei2lcmf0"})({name:"3j1lrl",styles:"display:flex;align-items:center;position:relative;left:-10px;"}),g=Object(r.a)("div",{target:"ei2lcmf1"})("display:block;position:relative;height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;margin:10px 26px 10px 10px;&::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,0.25);}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),x=Object(r.a)(d.c,{target:"ei2lcmf2"})({name:"uodor8",styles:"border-radius:50%;"}),f=Object(r.a)("div",{target:"ei2lcmf3"})({name:"wibiw4",styles:"height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;overflow:hidden;"}),j=Object(r.a)("p",{target:"ei2lcmf4"})("max-width:430px;font-size:14px;line-height:1.45;color:",(function(t){return t.theme.colors.grey}),";a{color:",(function(t){return t.theme.colors.grey}),";text-decoration:underline;}"),m=n("KZxh"),O=n("sczP"),v=n("kx/E");function w(){var t=Object(u.a)(["\n    font-size: 22px;\n  "]);return w=function(){return t},t}function y(){var t=Object(u.a)(["\n    font-size: 24px\n  "]);return y=function(){return t},t}function k(){var t=Object(u.a)(["\n    width: 100%;\n  "]);return k=function(){return t},t}function S(){var t=Object(u.a)(["\n    width: 80%;\n  "]);return S=function(){return t},t}function z(){var t=Object(u.a)(["\n    display: none;\n  "]);return z=function(){return t},t}function M(){var t=Object(u.a)(["\n    display: none;\n  "]);return M=function(){return t},t}function T(){var t=Object(u.a)(["\n    margin-bottom: 60px;\n  "]);return T=function(){return t},t}function C(){var t=Object(u.a)(["\n    margin-bottom: 80px;\n  "]);return C=function(){return t},t}var L=function(t){var e=t.authors,n=Object(a.useContext)(v.a),r=n.gridLayout,o=void 0===r?"tiles":r,c=n.hasSetGridLayout,s=n.setGridLayout,u=Object(l.useStaticQuery)("3372861117").site.edges[0].node.siteMetadata.hero,d=c&&"tiles"===o,h=e.find((function(t){return t.featured}));if(!h)throw new Error("\n      No featured Author found.\n      Please ensure you have at least featured Author.\n  ");return Object(b.jsx)(i.a,{relative:!0,id:"Articles__Hero"},Object(b.jsx)(A,{style:{maxWidth:u.maxWidth+"px"}},Object(b.jsx)(H,{dangerouslySetInnerHTML:{__html:u.heading}})),Object(b.jsx)(_,null,Object(b.jsx)(p,{author:h}),Object(b.jsx)(q,null,Object(b.jsx)(I,{onClick:function(){return s("tiles")},active:d,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(b.jsx)(m.a.Tiles,null)),Object(b.jsx)(I,{onClick:function(){return s("rows")},active:!d,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(b.jsx)(m.a.Rows,null)))))},_=Object(r.a)("div",{target:"eimgbv60"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",O.a.desktop(C()),";",O.a.tablet(T()),";",O.a.phablet(M()),";"),q=Object(r.a)("div",{target:"eimgbv61"})("display:flex;align-items:center;",O.a.tablet(z()),";"),A=Object(r.a)("div",{target:"eimgbv62"})("margin:60px 0;",O.a.desktop(S())," ",O.a.tablet(k())),H=Object(r.a)("h1",{target:"eimgbv63"})("font-style:normal;font-weight:400;font-size:28px;line-height:1.15;color:gray;a{color:gray;}",O.a.desktop(y())," ",O.a.phablet(w())),I=Object(r.a)("button",{target:"eimgbv64"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}"),R=n("dqaN"),G=(e.default=function(t){var e=t.location,n=t.pageContext,r=n.group,a=n.additionalContext.authors;return Object(b.jsx)(c.a,null,Object(b.jsx)(o.a,{pathname:e.pathname}),Object(b.jsx)(L,{authors:a}),Object(b.jsx)(i.a,{narrow:!0},Object(b.jsx)(R.a,{articles:r}),Object(b.jsx)(J,{show:n.pageCount>1},Object(b.jsx)(s.a,n))),Object(b.jsx)(G,null))},Object(r.a)("div",{target:"e156l9wa0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";")),J=Object(r.a)("div",{target:"e156l9wa1"})((function(t){return t.show&&"margin-top: 95px;"}))}}]);
//# sourceMappingURL=component---src-narative-gatsby-theme-novela-templates-articles-template-tsx-2e0d2da4e292465540d8.js.map