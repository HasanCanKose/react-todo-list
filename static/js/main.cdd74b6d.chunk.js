(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),c=a.n(s),l=(a(14),a(8)),r=a(1),o=a(2),m=a(4),u=a(3),d=a(5),h=(a(15),function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleChange,n=e.handleSubmit,s=e.editItem;return i.a.createElement("div",{className:"input"},i.a.createElement("h1",{className:"text"},"Todo Input"),i.a.createElement("form",{className:"input-form",onSubmit:n},i.a.createElement("input",{className:"input-text",type:"text",placeholder:"Add a todo item",value:t,onChange:a}),i.a.createElement("button",{className:s?"input-button-edit":"input-button",type:"submit"},s?"Edit Item":"Add Item")))}}]),t}(n.Component)),p=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.handleDelete,n=e.handleEdit;return i.a.createElement("li",{className:"item"},i.a.createElement("div",{className:"title"},i.a.createElement("h6",{className:"item-text"},t)),i.a.createElement("div",{className:"todo-icon"},i.a.createElement("span",{className:"edit",onClick:n},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("span",{className:"delete",onClick:a},i.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.clearList,n=e.handleDelete,s=e.handleEdit;return i.a.createElement("div",{className:"list"},i.a.createElement("h1",{className:"text"},"Todo List"),i.a.createElement("ul",{className:"list-ul"},t.map((function(e){return i.a.createElement(p,{key:e.id,title:e.title,handleDelete:function(){return n(e.id)},handleEdit:function(){return s(e.id)}})})),i.a.createElement("button",{className:"list-button",type:"button",onClick:a},"Clear List")))}}]),t}(n.Component),b=a(18),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={id:a.state.id,title:a.state.item},n=[].concat(Object(l.a)(a.state.items),[t]);""!==a.state.item?a.setState({items:n,item:"",id:Object(b.a)(),editItem:!1}):alert("The input bar is empty!")},a.clearList=function(){a.setState({items:[]})},a.handleDelete=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter((function(t){return t.id!==e})),n=a.state.items.find((function(t){return t.id===e}));a.setState({items:t,item:n.title,editItem:!0,id:e})},a.state={items:[],id:Object(b.a)(),item:"",editItem:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem}),i.a.createElement(f,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.cdd74b6d.chunk.js.map