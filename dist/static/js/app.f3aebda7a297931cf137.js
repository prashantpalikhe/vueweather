webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return o}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return s}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return l});var r="SELECT_UNIT",i="GET_CURRENT_LOCATION_REQUEST",a="GET_CURRENT_LOCATION_SUCCESS",u="GET_CURRENT_LOCATION_FAILURE",o="GET_LOCATION_FOR_ADDRESS_REQUEST",c="GET_LOCATION_FOR_ADDRESS_SUCCESS",s="GET_LOCATION_FOR_ADDRESS_FAILURE",d="GET_WEATHER_REQUEST",f="GET_WEATHER_SUCCESS",l="GET_WEATHER_FAILURE"},,,,,,,,,,,,,,,,function(t,e,n){"use strict";e.a=function(t){return"number"!=typeof t?t:Math.round(t)}},function(t,e,n){"use strict";var r=n(10),i=n.n(r),a=function t(e,n,r,a,u,o,c,s,d,f,l){i()(this,t),this.temperature=e,this.apparentTemperature=n,this.summary=r,this.icon=a,this.precipProbability=u,this.humidity=o,this.windSpeed=c,this.windBearing=s,this.cloudCover=d,this.pressure=f,this.period=l};e.a=a},function(t,e,n){"use strict";var r=n(10),i=n.n(r),a=function t(e,n,r,a,u){i()(this,t),this.max=e,this.min=n,this.time=r,this.icon=a,this.summary=u};e.a=a},,,,,,,,,,,,,,,,function(t,e,n){function r(t){n(132)}var i=n(7)(n(77),n(146),r,"data-v-4ca927e2",null);t.exports=i.exports},function(t,e,n){"use strict";var r=n(27),i=n(26),a=n(86),u=n(84),o=n(83),c=n(85);r.a.use(i.a),e.a=new i.a.Store({state:a.a,getters:u.a,actions:o.a,mutations:c.a})},function(t,e,n){function r(t){n(134)}var i=n(7)(n(72),n(148),r,null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),i=n.n(r),a=n(142),u=n.n(a),o=n(143),c=n.n(o),s=n(140),d=n.n(s),f=n(141),l=n.n(f),h=n(26);e.default={name:"app",components:{Search:u.a,UnitSwitcher:c.a,CurrentWeather:d.a,DailyWeather:l.a},computed:i()({},n.i(h.b)(["location","weather"])),methods:i()({},n.i(h.c)(["selectUnit","getCurrentLocation","getLocationForAddress"]),{onQueryEntered:function(t){this.getLocationForAddress(t)},onUnitChanged:function(t){this.selectUnit(t)}}),created:function(){this.getCurrentLocation()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(34),i=n(51),a=n.n(i),u=n(33);e.default={name:"CurrentWeather",components:{WeatherIcon:a.a},filters:{round:u.a},props:{data:{type:r.a,required:!0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(35),i=n(51),a=n.n(i),u=n(33),o=n(78);e.default={name:"DailyWeather",components:{WeatherIcon:a.a},filters:{round:u.a,day:o.a},props:{data:{type:r.a,required:!0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search",methods:{submitForm:function(){this.$emit("onQueryEntered",this.$refs.city.value)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),i=n.n(r),a=n(26);n(17);e.default={computed:i()({},n.i(a.b)(["units"])),methods:{selectUnit:function(t){this.$emit("onUnitChanged",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(139),i=n.n(r),a=i()(window);e.default={name:"WeatherIcon",props:{size:{type:Number,default:32},name:{type:String,required:!0}},mounted:function(){this.setIcon(this.name)},updated:function(){this.setIcon(this.name)},beforeDestroy:function(){this.icon.remove(this.$refs.canvas)},methods:{setIcon:function(t){this.icon=new a({color:"white"}),this.icon.set(this.$refs.canvas,t),this.icon.play()}}}},function(t,e,n){"use strict";var r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];e.a=function(t){if("number"!=typeof t)return t;var e=new Date(t);return r[e.getDay()]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(27),i=n(53),a=n.n(i),u=n(52);r.a.config.productionTip=!1,new r.a({el:"#app",template:"<App/>",components:{App:a.a},store:u.a})},function(t,e,n){"use strict";var r=n(10),i=n.n(r),a=function t(e,n,r){i()(this,t),this.latitude=e,this.longitude=n,this.name=r};e.a=a},function(t,e,n){"use strict";var r=n(10),i=n.n(r),a=function t(e,n,r){i()(this,t),this.location=e,this.current=n,this.forecast=r};e.a=a},function(t,e,n){"use strict";var r=n(89),i=n.n(r),a=n(80),u=n(81),o=n(34),c=n(35),s=n(54),d=n(137),f={GEOCODE:"https://maps.googleapis.com/maps/api/geocode/json?address=",FORECAST:"https://api.forecast.io/forecast/4891dee8e0ca9cf8fdb7ad6dd07fef9f/",LOCATOR:"http://ip-api.com/json"};e.a={getLocationForAddress:function(t){return s.get(""+f.GEOCODE+t).then(function(t){var e=t.data.results[0],n=e.formatted_address,r=e.geometry.location,i=r.lat,u=r.lng;return new a.a(i,u,n)})},getWeather:function(t,e){return new i.a(function(n,r){var i=""+f.FORECAST+t.latitude+","+t.longitude+"?units="+e.value+"&exclude=minutely,hourly,alerts,flag";d(i,function(e,i){if(e)return r(e);var a=i.daily.data.shift(),s=new o.a(i.currently.temperature,i.currently.apparentTemperature,i.currently.summary,i.currently.icon,i.currently.precipProbability,i.currently.humidity,i.currently.windSpeed,i.currently.windBearing,i.currently.cloudCover,i.currently.pressure,i.currently.time>a.sunsetTime||i.currently.time<a.sunriseTime?"night":"day"),d=i.daily.data.map(function(t){var e=t.temperatureMax,n=t.temperatureMin,r=t.time,i=t.icon,a=t.summary;return new c.a(e,n,r,i,a)}),f=new u.a(t,s,d);return n(f)})})},getCurrentLocation:function(){return s.get(f.LOCATOR).then(function(t){var e=t.data;return new a.a(e.lat,e.lon,e.city+", "+e.country)})}}},function(t,e,n){"use strict";var r=n(82),i=n(17);e.a={selectUnit:function(t,e){var n=t.commit,r=t.dispatch;n(i.a,e),r("getWeather")},getCurrentLocation:function(t){var e=t.dispatch,n=t.commit;return n(i.b),r.a.getCurrentLocation().then(function(t){n(i.c,t),e("getWeather")}).catch(function(){return n(i.d)})},getLocationForAddress:function(t,e){var n=t.dispatch,a=t.commit;return a(i.e),r.a.getLocationForAddress(e).then(function(t){a(i.f,t),n("getWeather")}).catch(function(){return a(i.g)})},getWeather:function(t){var e=t.getters,n=t.commit,a=t.state;return n(i.h),r.a.getWeather(a.location,e.selectedUnit).then(function(t){n(i.i,t)}).catch(function(){return n(i.j)})}}},function(t,e,n){"use strict";e.a={selectedUnit:function(t){return t.units.find(function(t){return!0===t.selected})}}},function(t,e,n){"use strict";var r,i=n(90),a=n.n(i),u=n(17);e.a=(r={},a()(r,u.a,function(t,e){t.units=t.units.map(function(t){return t.selected=!1,t}),t.units.find(function(t){return t.value===e.value}).selected=!0}),a()(r,u.b,function(t){t.location=null}),a()(r,u.c,function(t,e){t.location=e}),a()(r,u.d,function(t){t.location=null}),a()(r,u.e,function(t){t.location=null}),a()(r,u.f,function(t,e){t.location=e}),a()(r,u.g,function(t){t.location=null}),a()(r,u.h,function(t){t.weather=null}),a()(r,u.i,function(t,e){t.weather=e}),a()(r,u.j,function(t){t.weather=null}),r)},function(t,e,n){"use strict";e.a={units:[{display:"C",value:"uk",selected:!0},{display:"F",value:"us",selected:!1}],location:null,weather:null}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,n){function r(t){n(131)}var i=n(7)(n(73),n(145),r,"data-v-1af1aaf6",null);t.exports=i.exports},function(t,e,n){function r(t){n(130)}var i=n(7)(n(74),n(144),r,"data-v-02f4f316",null);t.exports=i.exports},function(t,e,n){function r(t){n(135)}var i=n(7)(n(75),n(149),r,"data-v-b87b863a",null);t.exports=i.exports},function(t,e,n){function r(t){n(133)}var i=n(7)(n(76),n(147),r,"data-v-665f1b00",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"daily-weather",attrs:{title:t.data.summary}},[n("p",[n("strong",[t._v("H")]),t._v(t._s(t._f("round")(t.data.max))+"\n    "),n("strong",[t._v("L")]),t._v(t._s(t._f("round")(t.data.min))+"\n  ")]),t._v(" "),n("weather-icon",{attrs:{name:t.data.icon,size:32}}),t._v(" "),n("p",[t._v(t._s(t._f("day")(1e3*t.data.time)))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"current-weather"},[n("p",{staticClass:"current-weather__temperature"},[t._v(t._s(t._f("round")(t.data.apparentTemperature))+"°")]),t._v(" "),n("div",[n("p",[t._v("Precipitation: "+t._s(t._f("round")(100*t.data.precipProbability))+"%")]),t._v(" "),n("p",[t._v("Humidity: "+t._s(t._f("round")(100*t.data.humidity))+"%")]),t._v(" "),n("p",[t._v("Wind: "+t._s(t._f("round")(1.60934*t.data.windSpeed))+"km/h")])]),t._v(" "),n("weather-icon",{attrs:{size:200,name:t.data.icon}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather-icon"},[n("canvas",{ref:"canvas",attrs:{width:t.size,height:t.size}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit-switcher"},t._l(t.units,function(e){return n("button",{class:{selected:e.selected},on:{click:function(n){t.selectUnit(e)}}},[t._v("\n    "+t._s(e.display)+"\n  ")])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",class:t.weather?t.weather.current.period:"",attrs:{id:"app"}},[n("div",{staticClass:"app-container"},[n("search",{on:{onQueryEntered:t.onQueryEntered}}),t._v(" "),t.weather?n("div",[n("div",{staticClass:"app-meta"},[t.location?n("p",[t._v(t._s(t.location.name))]):t._e(),t._v(" "),n("unit-switcher",{on:{onUnitChanged:t.onUnitChanged}})],1),t._v(" "),n("current-weather",{attrs:{data:t.weather.current}}),t._v(" "),n("div",{staticClass:"forecast"},t._l(t.weather.forecast,function(t){return n("daily-weather",{key:t.time,attrs:{data:t}})}))],1):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){e.preventDefault(),t.submitForm(e)}}},[n("input",{ref:"city",attrs:{type:"text",placeholder:"Which city are you in?",autofocus:""}})])},staticRenderFns:[]}}],[79]);
//# sourceMappingURL=app.f3aebda7a297931cf137.js.map