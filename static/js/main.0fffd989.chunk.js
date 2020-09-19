(this["webpackJsonpreact-redux-axios-themoviedb-api"]=this["webpackJsonpreact-redux-axios-themoviedb-api"]||[]).push([[0],{42:function(e,t,a){e.exports=a(73)},47:function(e,t,a){},52:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(47),a(10)),s=a(12),i=a(3),m=(a(52),a(9));function d(e){var t=Object(i.e)();return r.a.createElement("div",{className:"card mb-3 shadow-sm bg-white",onClick:function(){return t.push({pathname:"/details",state:{movie:e.movie}})},style:{cursor:"pointer",borderRadius:0}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path),className:"card-img",alt:"...",style:{borderRadius:0}})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body",style:{borderRadius:0}},r.a.createElement("h5",{className:"card-title title"},e.movie.title),r.a.createElement("p",{className:"card-text overview"},e.movie.overview),r.a.createElement("p",{className:"vote_average"},r.a.createElement("strong",null,"Ratings"),": ",e.movie.vote_average,r.a.createElement("span",{className:"ml-1"},r.a.createElement(m.a,{icon:"star",style:{color:"#f1c40f"}}))),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted release_date"},e.movie.release_date))))))}function u(e){return r.a.createElement("div",{className:"list-group",style:{paddingTop:60}},e.movies.map((function(e){return r.a.createElement(d,{key:e.id,movie:e})})))}var v=a(17),p=a.n(v),E=a(25),g=a(38),b=a.n(g).a.create({baseURL:"https://api.themoviedb.org/4/list/",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODdlOGVmMjE4OTg3MzBkZDJlNGE4NmMzYjQzMWE2MiIsInN1YiI6IjVmNjNkN2I4ODQ0NDhlMDAzOTY0ZTlhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wtu2oJrBrUWOKcOQzhNpp9As-LldDARUkaot28I9o9Y")}}),f=function(){return{type:"RESET_NEXT_PAGE"}},h={getMovies:function(){return function(){var e=Object(E.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("1?page=1");case 3:a=e.sent,n=a.data,r=n.results,t({type:"GET_MOVIES",payload:{moviesData:r}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},getMoreMovies:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(a){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.get("1?page=".concat(e));case 3:n=t.sent,r=n.data,c=r.results,a({type:"GET_MORE_MOVIES",payload:{moviesData:c}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}},N=Object(l.b)((function(e){return{movies:e.movies,nextPage:e.nextPage}}),h)((function(e){return console.log(e.movies),Object(n.useEffect)((function(){e.getMovies()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-8 offset-md-2 mt-5"},r.a.createElement(u,{movies:e.movies}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{className:"btn btn-block btn-lg p-3 mb-3 loadMore",style:{backgroundColor:"#25b09c",color:"#fff",borderRadius:0},onClick:function(){return e.getMoreMovies(e.nextPage)}},"Load More",r.a.createElement(m.a,{className:"ml-2 ",icon:"sync"})))))})),y=a(13),O=a(39),x=a(26),_=a(11),w={movies:[],loading:!0,nextPage:2},j="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.c,M=Object(y.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_MOVIES":return Object(_.a)(Object(_.a)({},e),{},{movies:n.moviesData,loading:!1});case"GET_MORE_MOVIES":return Object(_.a)(Object(_.a)({},e),{},{movies:[].concat(Object(x.a)(e.movies),Object(x.a)(n.moviesData)),loading:!1,nextPage:e.nextPage+1});case"RESET_NEXT_PAGE":return Object(_.a)(Object(_.a)({},e),{},{nextPage:2});default:return e}}),j(Object(y.a)(O.a))),I=a(16),k=a(18),R=a(40);I.b.add(R.a,k.b,k.d,k.a,k.c);var P={resetNextPage:f},T=Object(l.b)((function(e){return{}}),P)((function(e){var t=Object(i.f)(),a=Object(i.e)();return r.a.createElement("div",{className:"container",style:{paddingTop:60}},r.a.createElement("div",{className:"col-md-8 offset-md-2 mt-5"},r.a.createElement("div",{className:"card mb-3 shadow-sm bg-white ",style:{display:"flex",position:"relative",borderRadius:0}},r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",style:{position:"absolute",right:18,top:9,fontSize:26,zIndex:1,cursor:"pointer",color:"#000"},onClick:function(){e.resetNextPage(),a.push("/")}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.state.movie.poster_path),className:"card-img",alt:"...",style:{borderRadius:0}})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body",style:{borderRadius:0}},r.a.createElement("h5",{className:"card-title title"},t.state.movie.title),r.a.createElement("p",{className:"card-text overview"},t.state.movie.overview),r.a.createElement("p",{className:"original_language"},r.a.createElement("strong",null,"Language"),":"," ",t.state.movie.original_language.toUpperCase(),r.a.createElement("span",{className:"ml-2"},r.a.createElement(m.a,{icon:"language",style:{color:"#3498db",fontSize:"22"}}))),r.a.createElement("p",{className:"vote_average"},r.a.createElement("strong",null,"Ratings"),": ",t.state.movie.vote_average,r.a.createElement("span",{className:"ml-2"},r.a.createElement(m.a,{icon:"star",style:{color:"#f1c40f"}}))),r.a.createElement("p",{className:"vote_count"},r.a.createElement("strong",null,"Vote Count:")," ",t.state.movie.vote_count,r.a.createElement("span",{className:"ml-2"},r.a.createElement(m.a,{icon:"vote-yea",style:{color:"#2ecc71"}}))),r.a.createElement("p",{className:"card-text release_date"},r.a.createElement("small",{className:"text-muted"},t.state.movie.release_date))))))))})),C=a(41);var D={resetNextPage:f},J=Object(l.b)((function(e){return{}}),D)((function(e){return r.a.createElement("nav",{className:"navbar navbar-primary bg-primary container-fluid fixed-top"},r.a.createElement(s.b,{to:"/",className:"navbar-brand mb-0 h1 ml-5",onClick:function(){return e.resetNextPage()}},"theMovieDB API"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ico4e/React-Redux-Axios-theMovieDB-API",className:"mr-5","data-tip":"Code Github"},r.a.createElement(C.a,{place:"bottom",type:"dark",effect:"solid"}),r.a.createElement(m.a,{icon:["fab","github"],style:{color:"#fff"}})))}));function S(e){return r.a.createElement("div",null,r.a.createElement(J,null),e.children)}var z=function(){return r.a.createElement(s.a,null,r.a.createElement(l.a,{store:M},r.a.createElement("div",{className:"App"},r.a.createElement(S,null,r.a.createElement(i.a,{exact:!0,path:"/",component:N}),r.a.createElement(i.a,{exact:!0,path:"/details",component:T})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0fffd989.chunk.js.map