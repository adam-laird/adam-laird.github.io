(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{39:function(e,t,n){},46:function(e,t,n){e.exports=n.p+"static/media/find.14cb388a.png"},47:function(e,t,n){e.exports=n.p+"static/media/x-mark.19a5fc61.png"},52:function(e,t,n){e.exports=n(73)},57:function(e,t,n){},58:function(e,t,n){},69:function(e,t,n){e.exports=n.p+"static/media/hiking_icon.b5808945.ico"},70:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(31),i=n.n(o),c=(n(57),n(58),n(6)),l=n(7),s=n(11),u=n.n(s),p=n(20),m=n(8),d=n(5),h={topBarColor:"#000000",containerColor:"#ffffffBF"};var f=Object(d.a)("div",{target:"eysoe8k0"})({name:"6j1wp6",styles:"width:100vw;height:100vh;position:absolute;"}),g=Object(d.a)("img",{target:"eysoe8k1"})({name:"1yrme5c",styles:"width:100vw;height:100vh;object-fit:cover;position:absolute;"}),b=Object(d.a)("h6",{target:"eysoe8k2"})({name:"1b036dr",styles:"color:black;font-size:0.5rem;position:relative;"}),v=Object(d.a)("img",{target:"eysoe8k3"})({name:"ypzi7g",styles:"position:absolute;width:25px;height:25px;left:-30px;cursor:pointer;"}),x=Object(d.a)("div",{target:"eysoe8k4"})("position:absolute;display:flex;align-items:center;justify-content:center;bottom:10px;right:10px;width:200px;height:20px;border-radius:15px;background:",h.containerColor,";color:black;"),y=function(e){var t=e.source,n=e.refresh,r=a.a.createElement("a",{style:{color:"black"},href:t.url},"Photo"),o=a.a.createElement("a",{style:{color:"black"},href:"https://www.pexels.com/"},"Pexels");return console.log(JSON.stringify(t)),a.a.createElement(f,null,a.a.createElement(g,{src:t.photo}),a.a.createElement(x,null,a.a.createElement(v,{src:"./img/refreshIcon.png",onClick:function(){return n()}}),a.a.createElement(b,null,r," by ",t.name," on ",o)))},j=n(24);function k(){var e=Object(c.a)(["\n  0% {\n    background-position: 0 50%;\n  }\n  60% {\n    background-position: 100% 50%;\n  }\n  0% {\n    background-position: 0 50%;\n  }\n"]);return k=function(){return e},e}var w=Object(j.b)(k()),E=Object(d.a)("div",{target:"etbcjui0"})("width:100vw;height:100vh;position:absolute;z-index:-1;color:#fff;background:linear-gradient(-45deg,#EE7752,#E73C7E,#23A6D5,#23D5AB);background-size:400% 400%;animation:",w," 10s infinite;"),O=function(){return a.a.createElement(E,null)},C=function(){var e="563492ad6f917000010000015540ea62c00045ccab7c66e3dad97150",t=Object(r.useState)({photo:null,url:null,name:null}),n=Object(m.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(!1),l=Object(m.a)(c,2),s=l[0],d=l[1],h=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,a,o,c,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),n=Math.floor(999*Math.random())+1,e.prev=2,e.next=5,fetch("https://api.pexels.com/v1/search?query=landscape&per_page=1&page=".concat(n),{headers:{Authorization:t}});case 5:return r=e.sent,e.next=8,r.json();case 8:if(a=e.sent,o=a.photos[0].width,c=a.photos[0].height,l=o>1.4*c,!(o<1e3||c<1e3)&&l){e.next=16;break}throw(s=new Error).message="too small",s;case 16:i({photo:a.photos[0].src.large2x,url:a.photos[0].url,name:a.photos[0].photographer}),d(!1),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),h(t);case 24:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h(e)}),[e]),a.a.createElement(a.a.Fragment,null,s?a.a.createElement(O,null):a.a.createElement(y,{source:o,refresh:function(){h(e)}}))};var z=Object(d.a)("div",{target:"e1mjlsnr0"})("margin:20px;bottom:0px;left:0px;position:absolute;background:",h.containerColor,";width:250px;display:flex;flex-direction:column;align-items:center;border-radius:15px;border-color:",h.containerColor,";border-width:0px;border-style:solid;transition:0.6s;"),S=Object(d.a)("h6",{target:"e1mjlsnr1"})({name:"vsudrm",styles:"color:black;font-size:8px;"}),F=Object(d.a)("img",{target:"e1mjlsnr2"})({name:"1xqxhw1",styles:"position:absolute;width:25px;height:25px;top:5px;left:5px;cursor:pointer;"}),_=Object(d.a)("img",{target:"e1mjlsnr3"})({name:"1uvmssk",styles:"width:240px;height:260px;border-radius:15px;padding-top:5px;padding-bottom:1px;object-fit:cover;display:block;margin:0px;top:0px;"}),H=function(e){var t=e.source,n=e.newImage,o=Object(r.useState)(!1),i=Object(m.a)(o,2),c=i[0],l=i[1],s=function(){l(!c)},u=a.a.createElement("a",{style:{color:"black"},href:t.url},"Photo"),p=a.a.createElement("a",{style:{color:"black"},href:"https://www.pexels.com/"},"Pexels");return a.a.createElement(z,{style:{height:c?"280px":"270px"}},c?a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{src:t.photo,onClick:function(){return s()}}),a.a.createElement(S,null,u," by ",t.name," on ",p)):a.a.createElement(_,{src:t.photo,onClick:function(){return s()}}),a.a.createElement(F,{src:"./img/refreshIcon.png",onClick:n}))},M=function(){var e="563492ad6f917000010000015540ea62c00045ccab7c66e3dad97150",t=Object(r.useState)({photo:null,url:null,name:null}),n=Object(m.a)(t,2),o=n[0],i=n[1],c=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(999*Math.random())+1,e.prev=1,e.next=4,fetch("https://api.pexels.com/v1/search?query=puppy&per_page=1&page=".concat(n),{headers:{Authorization:t}});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,i({photo:a.photos[0].src.medium,url:a.photos[0].url,name:a.photos[0].photographer}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),c(t);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c(e)}),[e]),a.a.createElement(H,{source:o,newImage:function(){c(e)}})},T=n(30),I=n.n(T),D=n(74);n(39);function P(){var e=Object(c.a)(['\n  font-family: "Fira Sans", sans-serif;\n  font-size: 1.1rem;\n']);return P=function(){return e},e}function R(){var e=Object(c.a)(['\n  font-family: "Merriweather", sans-serif;\n  font-size: 1.6rem;\n']);return R=function(){return e},e}function N(){var e=Object(c.a)(["\ncursor: pointer;\n  background-color: black;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 16px;\n  border-radius: 50%;\n  vertical-align: top;\n  text-align: center;\n  float: right;\n  margin-top: -45px;\n"]);return N=function(){return e},e}function A(){var e=Object(c.a)(["\n\n  text-align: center;\n  width: 80%;\n  margin-top: 5%;\n  box-sizing: border-box;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 10px;\n  font-size: 1.2rem;\n  background-color: lightblue;\n"]);return A=function(){return e},e}function L(){var e=Object(c.a)(["\n  position: relative;\n  text-align: center;\n  width: 180px;\n  height: 50px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    border-color: grey;\n    color: grey;\n    transition: border-color ease-in 0.2s, color ease-in 0.2s;\n  }\n"]);return L=function(){return e},e}var q=l.a.div(L()),U=l.a.input(A()),Y=l.a.div(N()),B=l.a.h1(R()),J=l.a.h3(P()),Z=function(e){var t=e.city,n=e.country,o=e.SearchCity,i=Object(r.useState)(!1),c=Object(m.a)(i,2),l=c[0],s=c[1],u=Object(r.useState)(""),p=Object(m.a)(u,2),d=p[0],h=p[1];return a.a.createElement("div",null,l?a.a.createElement(q,{onBlur:function(){return s(!1)}},a.a.createElement("form",null,a.a.createElement(U,{type:"text",value:d,onChange:function(e){return h(e.target.value)}}),a.a.createElement("button",{hidden:!0,onClick:function(e){return function(e){e.preventDefault(),o(d)}(e)}},"Search")),a.a.createElement(Y,{onClick:function(){return s(!1)}},"x")):a.a.createElement(q,{onClick:function(){return s(!0)}},a.a.createElement(B,null,t),a.a.createElement(J,null,n)))};function G(){var e=Object(c.a)(["\n    max-width: 128px;\n    height: 64px;\n    object-fit: cover;\n  "]);return G=function(){return e},e}var W=function(e){var t="";switch(e.condition){case"Clouds":t="./img/Clouds.png";break;case"Clear":t="./img/Clear.png";break;case"Haze":t="./img/Haze.png";break;case"Hail":t="./img/Hail.png";break;case"Fog":t="./img/Fog.png";break;case"Tornado":t="./img/Tornado.png";break;case"Dust":t="./img/Dust.png";break;case"Mist":t="./img/Fog.png";break;case"Snow":t="./img/Snow.png";break;case"Rain":t="./img/Rain.png";break;case"Drizzle":t="./img/Drizzle.png";break;case"Thunderstorm":t="./img/SevereThunderstorm.png";break;default:t="./img/Fog.png"}var n=l.a.img(G());return a.a.createElement(n,{src:t,alt:"Weather Icon"})};function X(){var e=Object(c.a)(['\n    font-family: "Merriweather", sans-serif;\n    font-size: 1.2rem;\n    white-space: nowrap;\n  ']);return X=function(){return e},e}function Q(){var e=Object(c.a)(['\n    font-family: "Fira Sans", sans-serif;\n    font-size: 2rem;\n    font-weight: 200;\n  ']);return Q=function(){return e},e}var V=function(e){var t=e.temp,n=e.description,r=l.a.h1(Q()),o=l.a.h3(X());return a.a.createElement(a.a.Fragment,null,a.a.createElement(o,null,n),a.a.createElement(r,null,t," \xb0C"))};function K(){var e=Object(c.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #3498db;\n  width: 90px;\n  height: 90px;\n  position: absolute;\n  -webkit-animation: "," 2s linear infinite; /* Safari */\n  animation: "," 2s linear infinite;\n"]);return K=function(){return e},e}function $(){var e=Object(c.a)(["\n  animation: "," ease 2.5s infinite;\n"]);return $=function(){return e},e}function ee(){var e=Object(c.a)(["\n  margin: 0 auto;\n  margin-left: 10px;\n  margin-right: 0px;\n  width: 200px;\n  height: 240px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ee=function(){return e},e}function te(){var e=Object(c.a)(["\n0%{opacity: 1}\n25%, 75% {opacity: 0.5}\n50%{opacity: 0.1}\n"]);return te=function(){return e},e}function ne(){var e=Object(c.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return ne=function(){return e},e}var re=Object(j.b)(ne()),ae=Object(j.b)(te()),oe=l.a.div(ee()),ie=l.a.h4($(),ae),ce=l.a.div(K(),re,re),le=function(){return a.a.createElement(oe,null,a.a.createElement(ie,null,"Loading"),a.a.createElement(ce,null))};function se(){var e=Object(c.a)(["\n    margin: 0 auto;\n    margin-left: 5px;\n    margin-right: 0px;\n    background: ",";\n    width: 200px;\n    height: 240px;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 0;\n    flex-shrink: 0;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 15px;\n  "]);return se=function(){return e},e}var ue=function(e){var t=e.city,n=e.country,r=e.temp,o=e.condition,i=e.description,c=e.SearchCity,s=e.loading,u=0,p=0,m=null;r>12?(p=(u=255*(1-(r-12)/28))-150,m="linear-gradient(\n      to top,\n      rgb(255, ".concat(u,", 0),\n      rgb(255, ").concat(p,", 0)\n    )")):r<=12&&(p=(u=255*(1-(r+20)/32))+150,m="linear-gradient(\n      to bottom,\n      rgb(0, ".concat(u,", 255),\n      rgb(0, ").concat(p,", 255)\n    )"));var d=l.a.div(se(),m);return a.a.createElement("div",null," ",s?a.a.createElement(le,null):a.a.createElement(d,null,a.a.createElement(Z,{city:t,country:n,SearchCity:c}),a.a.createElement(W,{condition:o}),a.a.createElement(V,{temp:r,condition:o,description:i})))},pe=n(44),me=n.n(pe);function de(){var e=Object(c.a)(["\n  margin: 0 auto;\n  margin-left: 10px;\n  margin-right: 0px;\n  width: 160px;\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 15px;\n  color: black;\n"]);return de=function(){return e},e}function he(){var e=Object(c.a)(["\n  font-size: 1.5rem;\n"]);return he=function(){return e},e}var fe=l.a.h2(he()),ge=l.a.div(de()),be=function(e){var t=e.timezone,n=e.firstHour,r=1e3*n.dt,o=me.a.tz(r,t).format("HH : mm"),i=n.weather[0].main,c=n.weather[0].description,l=n.temp.toFixed(1),s=n.feels_like.toFixed(1),u=n.wind_speed.toFixed(0),p=n.clouds;return a.a.createElement(ge,null,a.a.createElement(fe,null,o),a.a.createElement(W,{condition:i}),a.a.createElement("h4",null,c),a.a.createElement("h4",null,"Temp: ",l),a.a.createElement("h4",null,"Realfeel: ",s),a.a.createElement("h4",null,"Wind speed: ",u," m/s"),a.a.createElement("h4",null,"Cloud cover: ",p,"%"))};function ve(){var e=Object(c.a)(["\n  cursor: pointer;\n  margin-left: 0;\n  margin-right: 0;\n  width: 30px;\n  text-align: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  color: black;\n"]);return ve=function(){return e},e}function xe(){var e=Object(c.a)(["\n  margin: 20px;\n  position: absolute;\n  top: 10vh;\n  left: 0px;\n  background: ",";\n  width: 240px;\n  height: 250px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 15px;\n  overflow: hidden;\n  transition: 0.6s;\n"]);return xe=function(){return e},e}var ye=l.a.div(xe(),h.containerColor),je=l.a.h4(ve()),ke=function(e){var t=e.weather,n=e.SearchCity,o=e.loading,i=Object(r.useState)(!1),c=Object(m.a)(i,2),l=c[0],s=c[1],u=function(){s(!l)};return a.a.createElement(ye,{style:{width:l?"750px":"240px"}},a.a.createElement(ue,{city:t.city,country:t.country,temp:t.temp,condition:t.condition,description:t.description,SearchCity:n,loading:o}),l?a.a.createElement(a.a.Fragment,null,a.a.createElement(je,{onClick:function(){return u()}},"<"),a.a.createElement(be,{timezone:t.timezone,firstHour:t.firstHour})," ",a.a.createElement(be,{timezone:t.timezone,firstHour:t.secondHour}),a.a.createElement(be,{timezone:t.timezone,firstHour:t.thirdHour})):a.a.createElement(je,{onClick:function(){return u()}},">"))};var we=Object(d.a)("div",{target:"e1d7txbw0"})({name:"16ey72d",styles:"position:relative;color:white;cursor:pointer;text-align:center;"}),Ee=Object(d.a)("div",{target:"e1d7txbw1"})({name:"la3nd4",styles:"font-size:1.5rem;"}),Oe=Object(d.a)("div",{target:"e1d7txbw2"})({name:"1u5mj14",styles:"font-size:0.9rem;align-self:bottom;margin-top:5px;"}),Ce=Object(d.a)("img",{target:"e1d7txbw3"})({name:"1jmi0n4",styles:"position:absolute;width:20px;height:20px;left:-5px;bottom:0px;cursor:pointer;"}),ze=function(e){var t=e.weather,n=e.loading,o=e.SearchCity,i=e.Refresh,c=Object(r.useState)(!1),l=Object(m.a)(c,2),s=l[0],u=l[1],p=t.temp,d=t.condition,h=new Date,f=h.getHours()+":"+((h.getMinutes()<10?"0":"")+h.getMinutes()),g=function(){u(!s),console.log(s)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(we,null,a.a.createElement(Ee,{onClick:function(){return g()}},p," \xb0C, ",d),a.a.createElement(Oe,{onClick:function(){return g()}},t.city," at ",f," "),a.a.createElement(Ce,{src:"./img/refreshIcon.png",onClick:i})),a.a.createElement(D.a,{in:s,timeout:10,classNames:"grow",unmountOnExit:!0},a.a.createElement(ke,{weather:t,SearchCity:o,loading:n})))},Se=function(e){var t=e.defaultLocation,n=Object(r.useState)(!1),o=Object(m.a)(n,2),i=o[0],c=o[1],l=Object(r.useState)(!1),s=Object(m.a)(l,2),d=s[0],h=s[1],f=Object(r.useState)({city:null,country:null,temp:null,condition:null,description:null,timezone:null,firstHour:null,secondHour:null}),g=Object(m.a)(f,2),b=g[0],v=g[1],x=function(){var e=Object(p.a)(u.a.mark((function e(n){var r,a,o,i,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),0==n.length&&(n=t),e.prev=2,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=5560e13322a467495b0570013f6d52de"));case 5:return r=e.sent,e.next=8,r.json();case 8:return a=e.sent,o=a.coord.lat,i=a.coord.lon,e.prev=11,e.next=14,fetch("\n      https://api.openweathermap.org/data/2.5/onecall?lat=".concat(o,"&lon=").concat(i,"&units=metric&appid=\n5560e13322a467495b0570013f6d52de"));case 14:return l=e.sent,e.next=17,l.json();case 17:s=e.sent,v({city:a.name,country:a.sys.country,temp:a.main.temp.toFixed(1),condition:a.weather[0].main,description:a.weather[0].description,timezone:s.timezone,firstHour:s.hourly[1],secondHour:s.hourly[3],thirdHour:s.hourly[5]}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),c(!0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(2),c(!0);case 29:h(!1);case 30:case"end":return e.stop()}}),e,null,[[2,26],[11,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x(t)}),[t]),a.a.createElement("div",null,i?a.a.createElement("div",{style:{color:"black"}},"There has been an error",a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return c(!1)}},"Reset")):a.a.createElement(ze,{weather:b,SearchCity:function(e){x(e)},Refresh:function(){x(t)},loading:d}))};var Fe=Object(d.a)("div",{target:"eh1zshs0"})({name:"811aag",styles:"position:relative;color:white;cursor:pointer;font-size:1.5rem;"}),_e=Object(d.a)("div",{target:"eh1zshs1"})("margin:20px;padding:0px;position:fixed;top:10vh;right:0px;background:",h.containerColor,";border-radius:15px;border-color:",h.containerColor,";border-width:5px;border-style:solid;display:flex;flex-direction:column;align-items:center;transition:0.6s;"),He=Object(d.a)("img",{target:"eh1zshs2"})({name:"xqhvrf",styles:"position:relative;max-width:70vw;max-height:70vh;border-radius:15px;padding-left:00px;padding-right:0px;padding-top:0px;padding-bottom:5px;object-fit:cover;"}),Me=Object(d.a)("div",{target:"eh1zshs3"})({name:"aurfjf",styles:"position:absolute;background-color:rgba(255,255,255,0.8);border-radius:5px;margin-right:5px;padding:10px;max-width:80%;color:black;opacity:0;top:5vh;transition:opacity 0.7s ease;text-align:center;"}),Te=Object(d.a)("div",{target:"eh1zshs4"})('font-size:1.5rem;color:black;padding-left:20px;padding-right:20px;padding-bottom:5px;padding-top:0px;font-style:italic;position:relative;align-self:center;cursor:pointer;&:hover{color:"#202020";}&:hover + ',Me,"{opacity:1;}"),Ie=function(e){var t=e.srcURL,n=e.alt,o=Object(r.useState)(!1),i=Object(m.a)(o,2),c=i[0],l=i[1],s=function(){l(!c)},u=t.hdurl,p=t.title,d=t.explanation;return"image"!==t.media_type&&(u=n.hdurl,p=n.title,d=n.explanation),a.a.createElement(a.a.Fragment,null,a.a.createElement(Fe,{onClick:function(){return s()}},"NASA Photo"),a.a.createElement(D.a,{in:c,timeout:10,classNames:"grow",unmountOnExit:!0},a.a.createElement(_e,{onClick:function(){return s()},onMouseLeave:function(){return s()}},a.a.createElement(He,{src:u}),a.a.createElement(Te,null,p),a.a.createElement(Me,null,d))))},De=function(){var e="JONKqHY7Uyoo0HqQBfrzdYIi0P1rfhTgio2YoHX6",t=Object(r.useState)(""),n=Object(m.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(""),l=Object(m.a)(c,2),s=l[0],d=l[1],h=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(t));case 3:return n=e.sent,e.next=6,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(t,"&date=2017-07-20"));case 6:return r=e.sent,e.next=9,n.json();case 9:return a=e.sent,e.next=12,r.json();case 12:o=e.sent,i(a),d(o),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h(e)}),[e]),a.a.createElement(Ie,{srcURL:o,alt:s})};var Pe=Object(d.a)("div",{target:"el7kx4v0"})({name:"1pov8h0",styles:"position:relative;width:100vw;height:10vh;margin-top:0px;padding:5px;padding-left:2%;padding-right:2%;background:rgba(32,32,32,0.8);display:flex;justify-content:space-between;align-items:center;"}),Re=Object(d.a)("div",{target:"el7kx4v1"})({name:"wmnbku",styles:"font-size:2rem;"}),Ne=function(e){var t=e.defaultLocation,n=I()().format("dddd Do MMMM YYYY");return a.a.createElement(Pe,null,a.a.createElement(Se,{defaultLocation:t}),a.a.createElement(Re,null,n),a.a.createElement(De,null))};function Ae(){var e=Object(c.a)(["\n  position: relative;\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n"]);return Ae=function(){return e},e}var Le=l.a.div(Ae()),qe=function(e){var t=e.defaultLocation;return a.a.createElement(Le,null,a.a.createElement(C,null),a.a.createElement(Ne,{defaultLocation:t}),a.a.createElement(M,null))},Ue=n(48),Ye=n(9),Be=n(15),Je=n(16),Ze=n(18),Ge=n(17),We=n(27),Xe=(n(68),"#df2935"),Qe="#0cce6b",Ve="#2ab7ca",Ke="#fbfaf8",$e="#0d1821",et=function(e){Object(Ze.a)(n,e);var t=Object(Ge.a)(n);function n(){return Object(Be.a)(this,n),t.apply(this,arguments)}return Object(Je.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.onClick;return t.map((function(e){return a.a.createElement(We.b,{key:e.name,longitude:parseFloat(e.long),latitude:parseFloat(e.lat)},a.a.createElement("svg",{height:20,viewBox:"0 0 24 24",style:e.done?{cursor:"pointer",fill:"".concat(Qe),stroke:"".concat($e),transform:"translate(".concat(-10,"px,").concat(-20,"px)")}:{cursor:"pointer",fill:"".concat(Xe),stroke:"".concat($e),transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){return n(e)}},a.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})))}))}}]),n}(r.PureComponent);var tt=Object(d.a)("div",{target:"e1455p770"})({name:"18a5ayt",styles:"position:absolute;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;top:10px;left:5vw;height:5vh;width:90vw;"}),nt=Object(d.a)("div",{target:"e1455p771"})({name:"ov9hag",styles:"height:5vh;width:5vh;cursor:pointer;"}),rt=Object(d.a)("div",{target:"e1455p772"})("box-sizing:border-box;height:100%;width:100%;border-radius:50%;text-align:center;line-height:2.5rem;font-size:1.2rem;&:hover{border:solid ",$e," 3px;font-size:1.5rem;line-height:2.2rem;}"),at=function(e){Object(Ze.a)(n,e);var t=Object(Ge.a)(n);function n(){return Object(Be.a)(this,n),t.apply(this,arguments)}return Object(Je.a)(n,[{key:"render",value:function(){var e=this.props,t=e.hikes,n=e.onClick;if(!t)return null;for(var r=t.length,o=0,i=0;i<t.length;i++)t[i].done&&o++;var c=o/r*100;console.log(c);var l=t.slice(0,25).map((function(e,t){return a.a.createElement(nt,{key:e.name,onClick:function(){return n(e)}},a.a.createElement(rt,{style:e.done?{backgroundColor:"".concat(Qe)}:{backgroundColor:"".concat(Xe)}},t+1))})),s=t.slice(25,50).map((function(e,t){return a.a.createElement(nt,{key:e.name,onClick:function(){return n(e)}},a.a.createElement(rt,{style:e.done?{backgroundColor:"".concat(Qe)}:{backgroundColor:"".concat(Xe)}},t+26))}));return t&&a.a.createElement("div",null,a.a.createElement(tt,null,l),a.a.createElement(tt,{style:{top:"8vh"}},s))}}]),n}(r.PureComponent),ot=n(46),it=n.n(ot);var ct=Object(d.a)("div",{target:"e199ng9b0"})({name:"ojqyia",styles:"position:relative;height:100%;width:100%;"}),lt=Object(d.a)("img",{target:"e199ng9b1"})({name:"gzimr9",styles:"position:relative;width:100%;height:100%;object-fit:scale-down;"}),st=function(e){Object(Ze.a)(n,e);var t=Object(Ge.a)(n);function n(){return Object(Be.a)(this,n),t.apply(this,arguments)}return Object(Je.a)(n,[{key:"render",value:function(){return a.a.createElement(ct,null,a.a.createElement(lt,{src:it.a,alt:" "}))}}]),n}(r.PureComponent),ut=n(47),pt=n.n(ut);var mt=Object(d.a)("div",{target:"eo4mngh0"})({name:"ojqyia",styles:"position:relative;height:100%;width:100%;"}),dt=Object(d.a)("img",{target:"eo4mngh1"})({name:"gzimr9",styles:"position:relative;width:100%;height:100%;object-fit:scale-down;"}),ht=function(e){Object(Ze.a)(n,e);var t=Object(Ge.a)(n);function n(){return Object(Be.a)(this,n),t.apply(this,arguments)}return Object(Je.a)(n,[{key:"render",value:function(){return a.a.createElement(mt,null,a.a.createElement(dt,{src:pt.a,alt:" "}))}}]),n}(r.PureComponent);var ft=Object(d.a)("div",{target:"e1otop60"})("position:fixed;cursor:default;top:50%;left:50%;transform:translate(-50%,-50%);background-color:",Ke,";border-radius:10px;height:64vh;width:50vw;padding:5px;border:solid 4px ",$e,";"),gt=Object(d.a)("div",{target:"e1otop61"})("position:fixed;cursor:default;top:50%;left:50%;transform:translate(-50%,-50%);background-color:",Ke,";border-radius:10px;height:25vh;width:30vw;padding:15px;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;border-style:solid;border-color:",$e,";border-width:4px;"),bt=Object(d.a)("img",{target:"e1otop62"})({name:"zsubmv",styles:"position:relative;width:98%;height:80%;object-fit:cover;border-radius:10px;margin-bottom:0px;"}),vt=Object(d.a)("div",{target:"e1otop63"})({name:"jf9q5h",styles:"position:fixed;cursor:pointer;top:0px;right:0px;height:2rem;width:2rem;margin-top:0.5rem;margin-right:0.5rem;transition:transform 0.2s;&:hover{transform:scale(1.25);}"}),xt=Object(d.a)("div",{target:"e1otop64"})({name:"1pmmhyb",styles:"position:fixed;cursor:pointer;top:0px;left:0px;height:2rem;width:2rem;margin-top:0.5rem;margin-left:0.5rem;transition:transform 0.2s;&:hover{transform:scale(1.25);}"}),yt=Object(d.a)("div",{target:"e1otop65"})("width:60%;height:30%;border-radius:10px;background-color:",Ve,";font-size:1.2rem;line-height:3.5rem;cursor:pointer;"),jt=Object(d.a)("div",{target:"e1otop66"})("width:60%;height:30%;border-radius:10px;background-color:",Ve,";text-align:center;vertical-align:center;cursor:pointer;"),kt=Object(d.a)("label",{target:"e1otop67"})({name:"dlhds1",styles:"display:block;text-align:center;line-height:3.5rem;font-size:1.2rem;width:100%;height:100%;cursor:pointer;"}),wt=Object(d.a)("h2",{target:"e1otop68"})({name:"1h8xm7p",styles:"font-size:1.8rem;margin-block-start:0.83em;margin-block-end:0.83em;margin-inline-start:0px;margin-inline-end:0px;"}),Et=function(e){Object(Ze.a)(n,e);var t=Object(Ge.a)(n);function n(){var e;return Object(Be.a)(this,n),(e=t.call(this))._flyingFunction=function(t,n,r){console.log(e.state.flying),e.setState({flying:!0}),r(t,n),console.log(e.state.flying),setTimeout((function(){e.setState({flying:!1})}),7e3)},e.state={image:null,flying:!1},e}return Object(Je.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.info.name!==e.info.name&&this.setState({image:null})}},{key:"render",value:function(){var e=this,t=this.props,n=t.info,a=t.func,o=t.closeFunc,i=t.flyFunc;return console.log("info"),console.log(n),n.done?r.createElement(ft,{style:this.state.flying?{animation:"fadeInOut 7s linear 0s 1"}:null},r.createElement(xt,{onClick:function(){return e._flyingFunction(n.long,n.lat,i)}},r.createElement(st,null)),r.createElement(vt,{onClick:function(){return o()}},r.createElement(ht,null)),r.createElement(wt,null,n.name),r.createElement(bt,{src:n.pic})):r.createElement(gt,{style:this.state.flying?{animation:"fadeInOut 7s linear 0s 1"}:null},r.createElement(xt,{onClick:function(){return e._flyingFunction(n.long,n.lat,i)}},r.createElement(st,null)),r.createElement(vt,{onClick:function(){return o()}},r.createElement(ht,null)),r.createElement(wt,null,n.name),this.state.image?r.createElement(yt,{className:"hvr-outline-out",onClick:function(){return a(n,e.state.image)}},"Hike completed!"):r.createElement(jt,null,r.createElement("input",{type:"file",onChange:function(t){return e.setState({image:t.target.files[0]})},id:"ImageToUpload",style:{display:"none"}}),r.createElement(kt,{htmlFor:"ImageToUpload",className:"hvr-outline-out"},"Upload a photo")))}}]),n}(r.PureComponent),Ot=(n(69),function(e){Object(Ze.a)(n,e);var t=Object(Ge.a)(n);function n(){var e;Object(Be.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hikes:null,loading:!1,chosenFeature:null,viewport:{latitude:44.323,longitude:-99.264,zoom:3.47},mapControl:{dragPan:!0,dragRotate:!0,doubleClickZoom:!0,scrollZoom:!0,touchZoom:!0,touchRotate:!0}},e._onViewportChange=function(t){return e.setState({viewport:t})},e._onClickMarker=function(t){e.setState({chosenFeature:t}),e._toggleInteractive(!1)},e._onCompleted=function(){var t=Object(p.a)(u.a.mark((function t(n,r){var a,o,i,c,l,s,p,m;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null,console.log(r),(o=new FormData).append("file",r),o.append("upload_preset","dayhikes"),o.append("cloud_name","adamlairdcloud"),t.next=8,fetch("https://api.cloudinary.com/v1_1/adamlairdcloud/image/upload",{method:"post",body:o});case 8:return i=t.sent,t.next=11,i.json();case 11:return c=t.sent,console.log("hike"),console.log(n),a=c.url,console.log(a),t.next=18,fetch("https://guarded-wildwood-70330.herokuapp.com/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.name,toUpdate:[{done:!0,pic:a}]})});case 18:return l=t.sent,t.next=21,l.json();case 21:return s=t.sent,console.log("new change result"),console.log(s),t.next=26,fetch("https://guarded-wildwood-70330.herokuapp.com/getall",{method:"GET",headers:{"Content-Type":"application/json"}});case 26:return p=t.sent,t.next=29,p.json();case 29:m=t.sent,console.log("jsonResult"),console.log(m),e.setState({hikes:m});case 33:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e._toggleInteractive=function(t){e.setState({mapControl:{dragPan:t,dragRotate:t,doubleClickZoom:t,scrollZoom:t,touchZoom:t,touchRotate:t}})},e._closePopup=function(){e.setState({chosenFeature:null}),e._toggleInteractive(!0)},e._flyToHike=function(t,n){console.log("LONG AND LAT"),console.log(t+" "+n),e.setState({viewport:{latitude:Number(n),longitude:Number(t),zoom:11,transitionInterpolator:new We.a({speed:1.2}),transitionDuration:"6000"}})},e}return Object(Je.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),document.title="Roses Day Hikes",e.next=4,fetch("https://guarded-wildwood-70330.herokuapp.com/getall",{method:"GET",headers:{"Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,this.setState({hikes:n}),this.setState({loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_renderOverlay",value:function(){return r.createElement(at,{hikes:this.state.hikes,onClick:this._onClickMarker})}},{key:"_renderPopup",value:function(){var e=this.state.chosenFeature;return e&&r.createElement(Et,{info:e,func:this._onCompleted,closeFunc:this._closePopup,flyFunc:this._flyToHike})}},{key:"render",value:function(){var e=this.state,t=e.viewport,n=e.hikes,a=e.mapControl;return r.createElement(We.c,Object.assign({},t,a,{width:"100vw",height:"100vh",mapStyle:"mapbox://styles/mapbox/outdoors-v11",minZoom:2.47,onViewportChange:this._onViewportChange,mapboxApiAccessToken:"pk.eyJ1IjoibGFpcmR5NTQ1MiIsImEiOiJja2d5OHkzeDMwcmJjMndwaWJjdG44ZXY4In0.Y0c3nuXuC0tNYpf5QX3wSA"}),this.state.loading?null:r.createElement(et,{data:n,onClick:this._onClickMarker}),this._renderPopup(),this._renderOverlay())}}]),n}(r.Component));n(70);var Ct=function(){return a.a.createElement("div",{className:"AppRDH"},a.a.createElement(Ot,null))};var zt=function(){return a.a.createElement(Ue.a,null,a.a.createElement(Ye.c,null,a.a.createElement(Ye.a,{path:"/RosesDayHikes"},a.a.createElement("div",{className:"AppRDH"},a.a.createElement(Ct,null))),a.a.createElement(Ye.a,{path:"/"},a.a.createElement("div",{className:"App"},a.a.createElement(qe,{defaultLocation:"Boston, US"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(zt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.7c320bdf.chunk.js.map