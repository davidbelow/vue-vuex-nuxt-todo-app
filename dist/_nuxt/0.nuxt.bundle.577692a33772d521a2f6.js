webpackJsonp([0],{180:function(t,e,s){var n=s(21)(s(183),s(187),null,null);t.exports=n.exports},183:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(50),a=s.n(n),o=s(79),r=s.n(o),i=s(78),c=s.n(i),u=s(28),l=s(77),p=s.n(l);e.default={fetch:function(){function t(t){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(e){var s,n=e.store,a=(e.redirect,e.error);return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("https://todos-cuvsmolowg.now.sh/todos");case 3:s=t.sent,n.commit("init",s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({statusCode:500,message:"Oops, try again"});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return t}(),data:function(){return{task:"some task"}},computed:a()({},s.i(u.mapState)({todos:function(t){return t.todos}})),methods:a()({},s.i(u.mapActions)(["add","remove","toggle"]))}},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"pa3 pa5-ns",on:{submit:function(e){e.preventDefault(),t.add(t.task)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],attrs:{type:"text"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),s("input",{attrs:{type:"submit",value:"Add"}})]),s("article",{staticClass:"pa3 pa5-ns"},[s("h1",{staticClass:"f4 bold center mw6"},[t._v("Todos")]),s("ul",{staticClass:"list pl0 ml0 center mw6 ba b--light-silver br2"},t._l(t.todos,function(e){return s("li",{staticClass:"flex items-center ph3 pv3 bb b--light-silver"},[s("span",{staticClass:"flex-auto",class:{strike:e.complete}},[t._v(t._s(e.id)+". "+t._s(e.task))]),s("button",{on:{click:function(s){t.toggle(e)}}},[s("img",{attrs:{src:"https://icon.now.sh/check",alt:""}})]),s("button",{on:{click:function(s){t.remove(e)}}},[s("img",{attrs:{src:"https://icon.now.sh/trash",alt:""}})])])}))])])},staticRenderFns:[]}}});