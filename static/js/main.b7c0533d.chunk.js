(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),i=n.n(o),c=(n(26),n(27),n(1)),l=n(3),u=n(5),s=n.n(u),p=n(8),m=n(4),d=n(2),f={topBarColor:"#000000",containerColor:"#ffffffBF"};var h=Object(d.a)("div",{target:"eysoe8k0"})({name:"6j1wp6",styles:"width:100vw;height:100vh;position:absolute;"}),g=Object(d.a)("img",{target:"eysoe8k1"})({name:"1yrme5c",styles:"width:100vw;height:100vh;object-fit:cover;position:absolute;"}),b=Object(d.a)("h6",{target:"eysoe8k2"})({name:"1b036dr",styles:"color:black;font-size:0.5rem;position:relative;"}),x=Object(d.a)("img",{target:"eysoe8k3"})({name:"ypzi7g",styles:"position:absolute;width:25px;height:25px;left:-30px;cursor:pointer;"}),v=Object(d.a)("div",{target:"eysoe8k4"})("position:absolute;display:flex;align-items:center;justify-content:center;bottom:10px;right:10px;width:200px;height:20px;border-radius:15px;background:",f.containerColor,";color:black;"),y=function(e){var t=e.source,n=e.refresh,r=a.a.createElement("a",{style:{color:"black"},href:t.url},"Photo"),o=a.a.createElement("a",{style:{color:"black"},href:"https://www.pexels.com/"},"Pexels");return console.log(JSON.stringify(t)),a.a.createElement(h,null,a.a.createElement(g,{src:t.photo}),a.a.createElement(v,null,a.a.createElement(x,{src:"./img/refreshIcon.png",onClick:function(){return n()}}),a.a.createElement(b,null,r," by ",t.name," on ",o)))},j=n(9);function E(){var e=Object(c.a)(["\n  0% {\n    background-position: 0 50%;\n  }\n  60% {\n    background-position: 100% 50%;\n  }\n  0% {\n    background-position: 0 50%;\n  }\n"]);return E=function(){return e},e}var w=Object(j.b)(E()),k=Object(d.a)("div",{target:"etbcjui0"})("width:100vw;height:100vh;position:absolute;z-index:-1;color:#fff;background:linear-gradient(-45deg,#EE7752,#E73C7E,#23A6D5,#23D5AB);background-size:400% 400%;animation:",w," 10s infinite;"),O=function(){return a.a.createElement(k,null)},z=function(){var e="563492ad6f917000010000015540ea62c00045ccab7c66e3dad97150",t=Object(r.useState)({photo:null,url:null,name:null}),n=Object(m.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(!1),l=Object(m.a)(c,2),u=l[0],d=l[1],f=function(){var e=Object(p.a)(s.a.mark((function e(t){var n,r,a,o,c,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),n=Math.floor(999*Math.random())+1,e.prev=2,e.next=5,fetch("https://api.pexels.com/v1/search?query=landscape&per_page=1&page=".concat(n),{headers:{Authorization:t}});case 5:return r=e.sent,e.next=8,r.json();case 8:if(a=e.sent,o=a.photos[0].width,c=a.photos[0].height,l=o>1.4*c,!(o<1e3||c<1e3)&&l){e.next=16;break}throw(u=new Error).message="too small",u;case 16:i({photo:a.photos[0].src.large2x,url:a.photos[0].url,name:a.photos[0].photographer}),d(!1),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0),f(t);case 24:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f(e)}),[e]),a.a.createElement(a.a.Fragment,null,u?a.a.createElement(O,null):a.a.createElement(y,{source:o,refresh:function(){f(e)}}))};var C=Object(d.a)("div",{target:"e1mjlsnr0"})("margin:20px;bottom:0px;left:0px;position:absolute;background:",f.containerColor,";width:250px;display:flex;flex-direction:column;align-items:center;border-radius:15px;border-color:",f.containerColor,";border-width:0px;border-style:solid;transition:0.6s;"),S=Object(d.a)("h6",{target:"e1mjlsnr1"})({name:"vsudrm",styles:"color:black;font-size:8px;"}),H=Object(d.a)("img",{target:"e1mjlsnr2"})({name:"1xqxhw1",styles:"position:absolute;width:25px;height:25px;top:5px;left:5px;cursor:pointer;"}),F=Object(d.a)("img",{target:"e1mjlsnr3"})({name:"1uvmssk",styles:"width:240px;height:260px;border-radius:15px;padding-top:5px;padding-bottom:1px;object-fit:cover;display:block;margin:0px;top:0px;"}),M=function(e){var t=e.source,n=e.newImage,o=Object(r.useState)(!1),i=Object(m.a)(o,2),c=i[0],l=i[1],u=function(){l(!c)},s=a.a.createElement("a",{style:{color:"black"},href:t.url},"Photo"),p=a.a.createElement("a",{style:{color:"black"},href:"https://www.pexels.com/"},"Pexels");return a.a.createElement(C,{style:{height:c?"280px":"270px"}},c?a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{src:t.photo,onClick:function(){return u()}}),a.a.createElement(S,null,s," by ",t.name," on ",p)):a.a.createElement(F,{src:t.photo,onClick:function(){return u()}}),a.a.createElement(H,{src:"./img/refreshIcon.png",onClick:n}))},L=function(){var e="563492ad6f917000010000015540ea62c00045ccab7c66e3dad97150",t=Object(r.useState)({photo:null,url:null,name:null}),n=Object(m.a)(t,2),o=n[0],i=n[1],c=function(){var e=Object(p.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(999*Math.random())+1,e.prev=1,e.next=4,fetch("https://api.pexels.com/v1/search?query=puppy&per_page=1&page=".concat(n),{headers:{Authorization:t}});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,i({photo:a.photos[0].src.medium,url:a.photos[0].url,name:a.photos[0].photographer}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),c(t);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c(e)}),[e]),a.a.createElement(M,{source:o,newImage:function(){c(e)}})},D=n(10),B=n.n(D),I=n(35);n(14);function R(){var e=Object(c.a)(['\n  font-family: "Fira Sans", sans-serif;\n  font-size: 1.1rem;\n']);return R=function(){return e},e}function q(){var e=Object(c.a)(['\n  font-family: "Merriweather", sans-serif;\n  font-size: 1.6rem;\n']);return q=function(){return e},e}function A(){var e=Object(c.a)(["\ncursor: pointer;\n  background-color: black;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 16px;\n  border-radius: 50%;\n  vertical-align: top;\n  text-align: center;\n  float: right;\n  margin-top: -45px;\n"]);return A=function(){return e},e}function T(){var e=Object(c.a)(["\n\n  text-align: center;\n  width: 80%;\n  margin-top: 5%;\n  box-sizing: border-box;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 10px;\n  font-size: 1.2rem;\n  background-color: lightblue;\n"]);return T=function(){return e},e}function Y(){var e=Object(c.a)(["\n  position: relative;\n  text-align: center;\n  width: 180px;\n  height: 50px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    border-color: grey;\n    color: grey;\n    transition: border-color ease-in 0.2s, color ease-in 0.2s;\n  }\n"]);return Y=function(){return e},e}var _=l.a.div(Y()),N=l.a.input(T()),P=l.a.div(A()),J=l.a.h1(q()),U=l.a.h3(R()),W=function(e){var t=e.city,n=e.country,o=e.SearchCity,i=Object(r.useState)(!1),c=Object(m.a)(i,2),l=c[0],u=c[1],s=Object(r.useState)(""),p=Object(m.a)(s,2),d=p[0],f=p[1];return a.a.createElement("div",null,l?a.a.createElement(_,{onBlur:function(){return u(!1)}},a.a.createElement("form",null,a.a.createElement(N,{type:"text",value:d,onChange:function(e){return f(e.target.value)}}),a.a.createElement("button",{hidden:!0,onClick:function(e){return function(e){e.preventDefault(),o(d)}(e)}},"Search")),a.a.createElement(P,{onClick:function(){return u(!1)}},"x")):a.a.createElement(_,{onClick:function(){return u(!0)}},a.a.createElement(J,null,t),a.a.createElement(U,null,n)))};function K(){var e=Object(c.a)(["\n    max-width: 128px;\n    height: 64px;\n    object-fit: cover;\n  "]);return K=function(){return e},e}var Q=function(e){var t="";switch(e.condition){case"Clouds":t="./img/Clouds.png";break;case"Clear":t="./img/Clear.png";break;case"Haze":t="./img/Haze.png";break;case"Hail":t="./img/Hail.png";break;case"Fog":t="./img/Fog.png";break;case"Tornado":t="./img/Tornado.png";break;case"Dust":t="./img/Dust.png";break;case"Mist":t="./img/Fog.png";break;case"Snow":t="./img/Snow.png";break;case"Rain":t="./img/Rain.png";break;case"Drizzle":t="./img/Drizzle.png";break;case"Thunderstorm":t="./img/SevereThunderstorm.png";break;default:t="./img/Fog.png"}var n=l.a.img(K());return a.a.createElement(n,{src:t,alt:"Weather Icon"})};function X(){var e=Object(c.a)(['\n    font-family: "Merriweather", sans-serif;\n    font-size: 1.2rem;\n    white-space: nowrap;\n  ']);return X=function(){return e},e}function $(){var e=Object(c.a)(['\n    font-family: "Fira Sans", sans-serif;\n    font-size: 2rem;\n    font-weight: 200;\n  ']);return $=function(){return e},e}var G=function(e){var t=e.temp,n=e.description,r=l.a.h1($()),o=l.a.h3(X());return a.a.createElement(a.a.Fragment,null,a.a.createElement(o,null,n),a.a.createElement(r,null,t," \xb0C"))};function V(){var e=Object(c.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #3498db;\n  width: 90px;\n  height: 90px;\n  position: absolute;\n  -webkit-animation: "," 2s linear infinite; /* Safari */\n  animation: "," 2s linear infinite;\n"]);return V=function(){return e},e}function Z(){var e=Object(c.a)(["\n  animation: "," ease 2.5s infinite;\n"]);return Z=function(){return e},e}function ee(){var e=Object(c.a)(["\n  margin: 0 auto;\n  margin-left: 10px;\n  margin-right: 0px;\n  width: 200px;\n  height: 240px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ee=function(){return e},e}function te(){var e=Object(c.a)(["\n0%{opacity: 1}\n25%, 75% {opacity: 0.5}\n50%{opacity: 0.1}\n"]);return te=function(){return e},e}function ne(){var e=Object(c.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return ne=function(){return e},e}var re=Object(j.b)(ne()),ae=Object(j.b)(te()),oe=l.a.div(ee()),ie=l.a.h4(Z(),ae),ce=l.a.div(V(),re,re),le=function(){return a.a.createElement(oe,null,a.a.createElement(ie,null,"Loading"),a.a.createElement(ce,null))};function ue(){var e=Object(c.a)(["\n    margin: 0 auto;\n    margin-left: 5px;\n    margin-right: 0px;\n    background: ",";\n    width: 200px;\n    height: 240px;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 0;\n    flex-shrink: 0;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 15px;\n  "]);return ue=function(){return e},e}var se=function(e){var t=e.city,n=e.country,r=e.temp,o=e.condition,i=e.description,c=e.SearchCity,u=e.loading,s=0,p=0,m=null;r>12?(p=(s=255*(1-(r-12)/28))-150,m="linear-gradient(\n      to top,\n      rgb(255, ".concat(s,", 0),\n      rgb(255, ").concat(p,", 0)\n    )")):r<=12&&(p=(s=255*(1-(r+20)/32))+150,m="linear-gradient(\n      to bottom,\n      rgb(0, ".concat(s,", 255),\n      rgb(0, ").concat(p,", 255)\n    )"));var d=l.a.div(ue(),m);return a.a.createElement("div",null," ",u?a.a.createElement(le,null):a.a.createElement(d,null,a.a.createElement(W,{city:t,country:n,SearchCity:c}),a.a.createElement(Q,{condition:o}),a.a.createElement(G,{temp:r,condition:o,description:i})))},pe=n(18),me=n.n(pe);function de(){var e=Object(c.a)(["\n  margin: 0 auto;\n  margin-left: 10px;\n  margin-right: 0px;\n  width: 160px;\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 15px;\n  color: black;\n"]);return de=function(){return e},e}function fe(){var e=Object(c.a)(["\n  font-size: 1.5rem;\n"]);return fe=function(){return e},e}var he=l.a.h2(fe()),ge=l.a.div(de()),be=function(e){var t=e.timezone,n=e.firstHour,r=1e3*n.dt,o=me.a.tz(r,t).format("HH : mm"),i=n.weather[0].main,c=n.weather[0].description,l=n.temp.toFixed(1),u=n.feels_like.toFixed(1),s=n.wind_speed.toFixed(0),p=n.clouds;return a.a.createElement(ge,null,a.a.createElement(he,null,o),a.a.createElement(Q,{condition:i}),a.a.createElement("h4",null,c),a.a.createElement("h4",null,"Temp: ",l),a.a.createElement("h4",null,"Realfeel: ",u),a.a.createElement("h4",null,"Wind speed: ",s," m/s"),a.a.createElement("h4",null,"Cloud cover: ",p,"%"))};function xe(){var e=Object(c.a)(["\n  cursor: pointer;\n  margin-left: 0;\n  margin-right: 0;\n  width: 30px;\n  text-align: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  color: black;\n"]);return xe=function(){return e},e}function ve(){var e=Object(c.a)(["\n  margin: 20px;\n  position: absolute;\n  top: 10vh;\n  left: 0px;\n  background: ",";\n  width: 240px;\n  height: 250px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 15px;\n  overflow: hidden;\n  transition: 0.6s;\n"]);return ve=function(){return e},e}var ye=l.a.div(ve(),f.containerColor),je=l.a.h4(xe()),Ee=function(e){var t=e.weather,n=e.SearchCity,o=e.loading,i=Object(r.useState)(!1),c=Object(m.a)(i,2),l=c[0],u=c[1],s=function(){u(!l)};return a.a.createElement(ye,{style:{width:l?"750px":"240px"}},a.a.createElement(se,{city:t.city,country:t.country,temp:t.temp,condition:t.condition,description:t.description,SearchCity:n,loading:o}),l?a.a.createElement(a.a.Fragment,null,a.a.createElement(je,{onClick:function(){return s()}},"<"),a.a.createElement(be,{timezone:t.timezone,firstHour:t.firstHour})," ",a.a.createElement(be,{timezone:t.timezone,firstHour:t.secondHour}),a.a.createElement(be,{timezone:t.timezone,firstHour:t.thirdHour})):a.a.createElement(je,{onClick:function(){return s()}},">"))};var we=Object(d.a)("div",{target:"e1d7txbw0"})({name:"16ey72d",styles:"position:relative;color:white;cursor:pointer;text-align:center;"}),ke=Object(d.a)("div",{target:"e1d7txbw1"})({name:"la3nd4",styles:"font-size:1.5rem;"}),Oe=Object(d.a)("div",{target:"e1d7txbw2"})({name:"1u5mj14",styles:"font-size:0.9rem;align-self:bottom;margin-top:5px;"}),ze=Object(d.a)("img",{target:"e1d7txbw3"})({name:"1jmi0n4",styles:"position:absolute;width:20px;height:20px;left:-5px;bottom:0px;cursor:pointer;"}),Ce=function(e){var t=e.weather,n=e.loading,o=e.SearchCity,i=e.Refresh,c=Object(r.useState)(!1),l=Object(m.a)(c,2),u=l[0],s=l[1],p=t.temp,d=t.condition,f=new Date,h=f.getHours()+":"+((f.getMinutes()<10?"0":"")+f.getMinutes()),g=function(){s(!u),console.log(u)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(we,null,a.a.createElement(ke,{onClick:function(){return g()}},p," \xb0C, ",d),a.a.createElement(Oe,{onClick:function(){return g()}},t.city," at ",h," "),a.a.createElement(ze,{src:"./img/refreshIcon.png",onClick:i})),a.a.createElement(I.a,{in:u,timeout:10,classNames:"grow",unmountOnExit:!0},a.a.createElement(Ee,{weather:t,SearchCity:o,loading:n})))},Se=function(e){var t=e.defaultLocation,n=Object(r.useState)(!1),o=Object(m.a)(n,2),i=o[0],c=o[1],l=Object(r.useState)(!1),u=Object(m.a)(l,2),d=u[0],f=u[1],h=Object(r.useState)({city:null,country:null,temp:null,condition:null,description:null,timezone:null,firstHour:null,secondHour:null}),g=Object(m.a)(h,2),b=g[0],x=g[1],v=function(){var e=Object(p.a)(s.a.mark((function e(n){var r,a,o,i,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),0==n.length&&(n=t),e.prev=2,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=5560e13322a467495b0570013f6d52de"));case 5:return r=e.sent,e.next=8,r.json();case 8:return a=e.sent,o=a.coord.lat,i=a.coord.lon,e.prev=11,e.next=14,fetch("\n      https://api.openweathermap.org/data/2.5/onecall?lat=".concat(o,"&lon=").concat(i,"&units=metric&appid=\n5560e13322a467495b0570013f6d52de"));case 14:return l=e.sent,e.next=17,l.json();case 17:u=e.sent,x({city:a.name,country:a.sys.country,temp:a.main.temp.toFixed(1),condition:a.weather[0].main,description:a.weather[0].description,timezone:u.timezone,firstHour:u.hourly[1],secondHour:u.hourly[3],thirdHour:u.hourly[5]}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),c(!0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(2),c(!0);case 29:f(!1);case 30:case"end":return e.stop()}}),e,null,[[2,26],[11,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){v(t)}),[t]),a.a.createElement("div",null,i?a.a.createElement("div",{style:{color:"black"}},"There has been an error",a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return c(!1)}},"Reset")):a.a.createElement(Ce,{weather:b,SearchCity:function(e){v(e)},Refresh:function(){v(t)},loading:d}))};var He=Object(d.a)("div",{target:"eh1zshs0"})({name:"811aag",styles:"position:relative;color:white;cursor:pointer;font-size:1.5rem;"}),Fe=Object(d.a)("div",{target:"eh1zshs1"})("margin:20px;padding:0px;position:fixed;top:10vh;right:0px;background:",f.containerColor,";border-radius:15px;border-color:",f.containerColor,";border-width:5px;border-style:solid;display:flex;flex-direction:column;align-items:center;transition:0.6s;"),Me=Object(d.a)("img",{target:"eh1zshs2"})({name:"xqhvrf",styles:"position:relative;max-width:70vw;max-height:70vh;border-radius:15px;padding-left:00px;padding-right:0px;padding-top:0px;padding-bottom:5px;object-fit:cover;"}),Le=Object(d.a)("div",{target:"eh1zshs3"})({name:"aurfjf",styles:"position:absolute;background-color:rgba(255,255,255,0.8);border-radius:5px;margin-right:5px;padding:10px;max-width:80%;color:black;opacity:0;top:5vh;transition:opacity 0.7s ease;text-align:center;"}),De=Object(d.a)("div",{target:"eh1zshs4"})('font-size:1.5rem;color:black;padding-left:20px;padding-right:20px;padding-bottom:5px;padding-top:0px;font-style:italic;position:relative;align-self:center;cursor:pointer;&:hover{color:"#202020";}&:hover + ',Le,"{opacity:1;}"),Be=function(e){var t=e.srcURL,n=e.alt,o=Object(r.useState)(!1),i=Object(m.a)(o,2),c=i[0],l=i[1],u=function(){l(!c)},s=t.hdurl,p=t.title,d=t.explanation;return"image"!==t.media_type&&(s=n.hdurl,p=n.title,d=n.explanation),a.a.createElement(a.a.Fragment,null,a.a.createElement(He,{onClick:function(){return u()}},"NASA Photo"),a.a.createElement(I.a,{in:c,timeout:10,classNames:"grow",unmountOnExit:!0},a.a.createElement(Fe,{onClick:function(){return u()},onMouseLeave:function(){return u()}},a.a.createElement(Me,{src:s}),a.a.createElement(De,null,p),a.a.createElement(Le,null,d))))},Ie=function(){var e="JONKqHY7Uyoo0HqQBfrzdYIi0P1rfhTgio2YoHX6",t=Object(r.useState)(""),n=Object(m.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(""),l=Object(m.a)(c,2),u=l[0],d=l[1],f=function(){var e=Object(p.a)(s.a.mark((function e(t){var n,r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(t));case 3:return n=e.sent,e.next=6,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(t,"&date=2017-07-20"));case 6:return r=e.sent,e.next=9,n.json();case 9:return a=e.sent,e.next=12,r.json();case 12:o=e.sent,i(a),d(o),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f(e)}),[e]),a.a.createElement(Be,{srcURL:o,alt:u})};var Re=Object(d.a)("div",{target:"el7kx4v0"})({name:"1pov8h0",styles:"position:relative;width:100vw;height:10vh;margin-top:0px;padding:5px;padding-left:2%;padding-right:2%;background:rgba(32,32,32,0.8);display:flex;justify-content:space-between;align-items:center;"}),qe=Object(d.a)("div",{target:"el7kx4v1"})({name:"wmnbku",styles:"font-size:2rem;"}),Ae=function(e){var t=e.defaultLocation,n=B()().format("dddd Do MMMM YYYY");return a.a.createElement(Re,null,a.a.createElement(Se,{defaultLocation:t}),a.a.createElement(qe,null,n),a.a.createElement(Ie,null))};function Te(){var e=Object(c.a)(["\n  position: relative;\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n"]);return Te=function(){return e},e}var Ye=l.a.div(Te()),_e=function(e){var t=e.defaultLocation;return a.a.createElement(Ye,null,a.a.createElement(z,null),a.a.createElement(Ae,{defaultLocation:t}),a.a.createElement(L,null))};var Ne=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(_e,{defaultLocation:"Boston, US"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b7c0533d.chunk.js.map