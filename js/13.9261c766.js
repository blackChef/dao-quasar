(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{e3c3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("h2",[t._v("文章标题")]),a("q-btn",{attrs:{color:"primary",label:"修改删除"},on:{click:t.edit}}),a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",{domProps:{innerHTML:t._s(t.editor)}})],1),a("comments")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-list",{staticClass:"rounded-borders",staticStyle:{"max-width":"550px"},attrs:{bordered:""}},[a("q-item-label",{attrs:{header:""}},[t._v("Friends")]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar2.jpg"}})])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[a("span",{staticClass:"text-weight-bold"},[t._v("Janet")])]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v("\n          I'll be in your neighborhood doing errands this\n          weekend. Do you want to grab brunch?\n        ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[t._v("1 min ago")])],1),a("q-separator",{attrs:{inset:"item"}}),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar4.jpg"}})])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[a("span",{staticClass:"text-weight-bold"},[t._v("John")])]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v("Can we schedule a call for tomorrow?")])],1),a("q-item-section",{attrs:{side:"",top:""}},[t._v("1 min ago")])],1)],1)],1)},r=[],o={data:function(){return{comments:[],submitting:!1,value:"",pagination:{pageSize:10,position:"both"}}},created:function(){},props:{aid:{type:String,default:""}},methods:{getComments:function(){var t=this;this.$axios.get("/api/comments/articles/"+this.aid).then((function(e){console.log(e),200===e.status&&(t.comments=e.data.body)})).catch((function(e){t.$message.error("获取失败")}))},handleSubmit:function(){var t=this;if(this.value){this.submitting=!0;var e={username:this.$store.state.username,userid:this.$store.state.userid,content:this.value,avatar:this.$store.state.avatar};this.$axios.post("/api/comments/"+this.aid,e).then((function(a){console.log(a),200===a.status&&(t.submitting=!1,t.comments.push(e),t.value="")})).catch((function(e){t.submitting=!1,t.$message.error("评论失败")}))}},handleChange:function(t){this.value=t.target.value}}},c=o,l=a("2877"),m=a("eebe"),d=a.n(m),u=a("1c1c"),p=a("0170"),h=a("66e5"),v=a("4074"),b=a("cb32"),g=a("eb85"),f=a("714f"),q=Object(l["a"])(c,n,r,!1,null,null,null),w=q.exports;d()(q,"components",{QList:u["a"],QItemLabel:p["a"],QItem:h["a"],QItemSection:v["a"],QAvatar:b["a"],QSeparator:g["a"]}),d()(q,"directives",{Ripple:f["a"]});var _={name:"Article",components:{Comments:w},props:{id:String},data:function(){return{editor:"What you see is <b>what</b> you get."}},methods:{edit:function(){},del:function(){}}},Q=_,C=a("9989"),$=a("9c40"),x=a("f09f"),y=a("a370"),S=Object(l["a"])(Q,i,s,!1,null,"3d937864",null);e["default"]=S.exports;d()(S,"components",{QPage:C["a"],QBtn:$["a"],QCard:x["a"],QCardSection:y["a"]})}}]);