(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=a(5),s=a(4),u=(a(26),a(12)),m=a(13),i=a(15),_=a(14),E=a(16),h=(a(27),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"scoreToText",value:function(e){var t=["FRIENDSHIP","LOVE","AFFECTION","MARRIAGE","ENEMIES","SWEETHEART"],a=e%t.length;return 0==a?t[t.length-1]:t[a-1]}},{key:"render",value:function(){var e=this,t=this.props,a=t.onName1Change,n=t.onName2Change,o=t.name_1,l=t.name_2,c=t.name_1_score,s=t.name_2_score,u=t.total_score;return r.a.createElement("div",{className:"flames-container"},r.a.createElement("h1",null,"FLAMES"),r.a.createElement("div",{className:"flames-yourname flames-input"},r.a.createElement("label",null,"Your Name "),r.a.createElement("input",{type:"text",onChange:a})),r.a.createElement("div",{className:"flames-crushname flames-input"},r.a.createElement("label",null,"Your Crush "),r.a.createElement("input",{type:"text",onChange:n})),r.a.createElement("div",{className:"flames-button"},r.a.createElement("button",{onClick:function(){var t=o.split(""),a=l.split(""),n=t.filter(function(e){return!a.includes(e)}),r=a.filter(function(e){return!t.includes(e)});console.log("LENGTH = ",n.length),e.props.onLightFire({name_1_score:n.length,name_2_score:r.length,total_score:n.length+r.length})}},"Predict Future")),r.a.createElement("div",{className:"flames-result"},r.a.createElement("label",{className:"yours"},"You towards your crush:",r.a.createElement("br",null),this.scoreToText(c)),r.a.createElement("label",{className:"crush"},"Your crush towards you:",r.a.createElement("br",null),this.scoreToText(s)),r.a.createElement("label",{className:"together"},"Future Together: ",this.scoreToText(u)),r.a.createElement("div",{className:"again"},r.a.createElement("button",null,"Try Again!"))))}}]),t}(n.Component)),p=Object(c.b)(function(e){return{name_1:e.name_1,name_2:e.name_2,name_1_score:e.name_1_score,name_2_score:e.name_2_score,total_score:e.total_score}},function(e){return{onName1Change:function(t){return e({type:"CHANGE_NAME_1",payload:t.target.value})},onName2Change:function(t){return e({type:"CHANGE_NAME_2",payload:t.target.value})},onLightFire:function(t){return e(function(e){return{type:"COMPUTE_SCORES",payload:e}}(t))}}})(h);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d={name_1:"",name_2:"",name_1_score:0,name_2_score:0,total_score:0},g=Object(s.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("ACTION == ",t.payload),t.type){case"CHANGE_NAME_1":return Object.assign({},e,{name_1:t.payload});case"CHANGE_NAME_2":return Object.assign({},e,{name_2:t.payload});case"COMPUTE_SCORES":return console.log(e),Object.assign({},e,{name_1_score:t.payload.name_1_score,name_2_score:t.payload.name_2_score,total_score:t.payload.total_score});default:return e}});l.a.render(r.a.createElement(c.a,{store:g},r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.078ebcd3.chunk.js.map