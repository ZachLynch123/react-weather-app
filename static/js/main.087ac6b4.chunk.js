(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(41)},23:function(e,a,t){},28:function(e,a,t){},37:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(4),c=t.n(r),o=(t(23),t(5)),i=t(6),s=t(9),d=t(7),u=t(10),m=t(16),h=(t(28),t(8)),p=t.n(h),E=function(e){return l.a.createElement("div",{className:"current-container"},l.a.createElement("div",null,l.a.createElement("h1",{className:"City"},"Currently")),l.a.createElement("div",{className:"content"},l.a.createElement("div",{class:"degrees"},l.a.createElement("h1",{id:"temp"},Math.floor(e.data.currently.temperature)+"\xb0F")),l.a.createElement(p.a,{name:"darksky",iconId:e.data.currently.icon}),l.a.createElement("h1",{id:"desc"},e.data.currently.summary)))},y=(t(37),function(e){var a=e.day.time,t=new Date(1e3*a);return l.a.createElement("div",{className:"seven-day"},l.a.createElement("p",{className:"h5"},["Sun","Mon","Tues","Wed","Thur","Fri","Sat"][t.getDay()]),l.a.createElement(p.a,{name:"darksky",iconId:e.day.icon}),l.a.createElement("p",{className:"h5"},Math.floor(e.day.apparentTemperatureHigh)),l.a.createElement("p",{className:"h5"},Math.floor(e.day.apparentTemperatureLow)))}),b=t(3),f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={weatherData:[],isLoaded:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.latitude=this.props.location.latitude,this.longitude=this.props.location.longitude,fetch("https://api.darksky.net/forecast/2cd94b53ee1806c983d10d877b5c94bd/"+this.latitude+","+this.longitude,{mode:"cors",headers:{"Access-Control-Allow-Origin":!0}}).then(function(e){return e.json()}).then(function(a){e.setState({isLoaded:!0,weatherData:a})})}},{key:"render",value:function(){var e=this.state,a=e.isLoaded,t=e.weatherData;return a?l.a.createElement("div",{className:"App"},l.a.createElement(b.b,null,l.a.createElement(b.c,{className:"row-eq-height"},l.a.createElement(b.a,null,l.a.createElement("img",{src:"https://cdn.dribbble.com/users/324739/screenshots/1931921/landscape-loop-final.gif",alt:""})),l.a.createElement(b.a,null,l.a.createElement(E,{data:t,location:this.props.location}),l.a.createElement(b.c,null,l.a.createElement(b.a,null,l.a.createElement(y,{day:t.daily.data[0]})),l.a.createElement(b.a,null,l.a.createElement(y,{day:t.daily.data[1]})),l.a.createElement(b.a,null,l.a.createElement(y,{day:t.daily.data[2]})),l.a.createElement(b.a,null,l.a.createElement(y,{day:t.daily.data[3]})),l.a.createElement(b.a,null,l.a.createElement(y,{day:t.daily.data[4]})),l.a.createElement(b.a,null,l.a.createElement(y,{day:t.daily.data[5]})),l.a.createElement(b.a,null,l.a.createElement(y,{day:t.daily.data[6]}))))))):l.a.createElement("div",null,"Loading..")}}]),a}(n.Component),v=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?l.a.createElement(f,{location:this.props.coords}):l.a.createElement("div",null,"Getting the location data\u2026 "):l.a.createElement("div",null,"Geolocation is not enabled"):l.a.createElement("div",null,"Your browser does not support Geolocation")}}]),a}(l.a.Component),w=Object(m.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(39);c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.087ac6b4.chunk.js.map