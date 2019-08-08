(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(70)},52:function(e,t,a){},53:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n,o=a(0),i=a.n(o),r=a(7),l=a.n(r),c=(a(52),a(53),a(24)),m=a(103),p=a(104),d=a(101),h=a(26),s=a(15),u=a(31),f=a(27),w=a(32),g=a(33),C=function(e){function t(e){var a;Object(h.a)(this,t);var n=(a=Object(u.a)(this,Object(f.a)(t).call(this,e))).props.data,o=n.lng,i=n.lat;return a.state={center:{lng:o,lat:i}},a}return Object(w.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.data.name!==e.data.name){var t=this.props.data,a=t.lng,n=t.lat;this.setState({center:{lng:a,lat:n}})}}},{key:"render",value:function(){var e=this.props.data,t=e.lng,a=e.lat,n={lng:t,lat:a},o={position:"relative",width:"100%",height:"400px"};return t&&a?i.a.createElement("div",{style:o},i.a.createElement(g.Map,{style:o,google:this.props.google,initialCenter:n,center:n,zoom:11,ref:this.locationRef})):i.a.createElement("div",{style:o},i.a.createElement(g.Map,{style:o,google:this.props.google,initialCenter:this.state.center,center:this.state.center,zoom:11,ref:this.locationRef}))}}]),t}(i.a.Component),E=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyCXWQkmdPXNbv6Zj5dW3GN5mpPM1zTh7nI"})(C),v=a(107),b=a(108),y=function(e){function t(e){return Object(h.a)(this,t),Object(u.a)(this,Object(f.a)(t).call(this,e))}return Object(w.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.main,a=e.weather,n=e.name;return t&&a&&n?i.a.createElement("div",null,i.a.createElement(d.a,{variant:"h4",component:"h4"},n),i.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a[0].icon,"@2x.png")}),i.a.createElement(d.a,{variant:"h5",component:"h5"},a[0].main),i.a.createElement(d.a,{variant:"h5",component:"h5",style:{padding:"20px"}},Math.ceil(t.temp)+"\xb0"),i.a.createElement(d.a,{variant:"subtitle1",component:"h2"},"Today's High: ",t.temp_max,"\xb0 \xa0 Today's Low: ",t.temp_min,"\xb0"),i.a.createElement(d.a,{variant:"subtitle2",component:"h2",style:{padding:"10px"}},"Humidity: ",t.humidity,"%")):i.a.createElement("div",null,i.a.createElement(d.a,{variant:"subtitle2`",component:"h2",style:{padding:"20px"}},"The search could not return any result!"),i.a.createElement(d.a,{variant:"h5",component:"h5",style:{padding:"10px"}},"Please be a little more specific."),i.a.createElement(d.a,{variant:"subtitle1",component:"h2"},"You can use the map to look around the globe!"))}}]),t}(i.a.Component),x=a(105),A=a(106),O=i.a.createContext(),k={name:"",weather:[{main:"",icon:""}],main:{temp:"",temp_max:"",temp_min:""},lng:-73.97,lat:40.76};function j(e,t){if("404"===t.payload.cod||"400"===t.payload.cod)return{name:"",weather:[{main:"",icon:""}],main:{temp:"",temp_max:"",temp_min:""}};var a=t.payload,n=a.name,o=a.weather,i=a.main,r=a.coord,l=r.lon,c=r.lat;switch(t.type){case"RECEIVE_LOCATION":return{name:n,weather:o,main:i,lng:l,lat:c};default:return e}}function N(e){n||(fetch("https://api.openweathermap.org/data/2.5/weather?zip=10022,us&units=imperial&appid=a673f727f21560d303446f34d91487b1").then(function(e){return e.json()}).then(function(e){r({type:"RECEIVE_LOCATION",payload:e})}),n=!0);var t=i.a.useReducer(j,k),a=Object(c.a)(t,2),o=a[0],r=a[1];return i.a.createElement(O.Provider,{value:{fetchData:function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=imperial&appid=a673f727f21560d303446f34d91487b1")).then(function(e){return e.json()}).then(function(e){r({type:"RECEIVE_LOCATION",payload:e})},function(e){r({type:"RECEIVE_LOCATION",payload:k})})},weatherInfo:o}},e.children)}var V=Object(m.a)(function(e){return{root:{padding:e.spacing(3,2),margin:"50px"},bottomNav:{width:"100%",marginTop:20},flex:{display:"flex"},endTitle:{borderBottom:"1px dashed grey",paddingBottom:"10px"},weatherWindow:{marginTop:40,width:"40%",height:"400px"},mapWindow:{marginTop:20,width:"60%",height:"400px"},textField:{width:"100%",marginLeft:"40%"}}});function I(){var e=V(),t=i.a.useContext(O),a=t.fetchData,n=t.weatherInfo,o=i.a.useState(""),r=Object(c.a)(o,2),l=r[0],m=r[1],h=i.a.useState(0),s=Object(c.a)(h,2),u=s[0],f=s[1];return i.a.createElement("div",null,i.a.createElement(p.a,{className:e.root},i.a.createElement(d.a,{variant:"h4",component:"h4",style:{paddingBottom:"20px"}},"Yarden's Weather App"),i.a.createElement(d.a,{variant:"h5",component:"h5",className:e.endTitle},"Find out what's the weather like around the world!"),i.a.createElement("div",{className:e.flex},i.a.createElement("div",{className:e.weatherWindow},i.a.createElement(y,{data:n}),i.a.createElement(x.a,{value:u,onChange:function(e,t){f(t)},showLabels:!0,className:e.bottomNav},i.a.createElement(A.a,{label:"Github",onClick:function(){return window.open("https://github.com/yardenroee/WeatherApp","_blank")},icon:i.a.createElement("svg",{style:{width:32,height:32},viewBox:"0 0 24 24"},i.a.createElement("path",{fill:"#000000",d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}))}),i.a.createElement(A.a,{label:"LinkedIn",onClick:function(){return window.open("https://www.linkedin.com/in/yardenroee/","_blank")},icon:i.a.createElement("svg",{style:{width:32,height:32},viewBox:"0 0 24 24"},i.a.createElement("path",{fill:"#000000",d:"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"}))}),i.a.createElement(A.a,{label:"Portfolio",onClick:function(){return window.open("https://yardenroee.com/","_blank")},icon:i.a.createElement("svg",{style:{width:32,height:32},viewBox:"0 0 24 24"},i.a.createElement("path",{fill:"#000000",d:"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"}))}))),i.a.createElement("div",{id:"map",className:e.mapWindow},i.a.createElement(E,{data:n}))),i.a.createElement("div",{className:e.flex},i.a.createElement(b.a,{className:e.textField,id:"standard-dense",label:"Location",value:l,onChange:function(e){return m(e.target.value)}}),i.a.createElement(v.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){a(l),m("")}},"Search"))))}var T=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,null,i.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.9107cee1.chunk.js.map