(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"213e":function(t,e,a){"use strict";var s=a("68a4"),i=a.n(s);i.a},2676:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[t._m(0),s("div",{staticClass:"login_box"},[s("div",{staticClass:"log"},[1==t.type?s("div",{staticClass:"em"},[s("div",{staticClass:"tit"},[t._v("欢迎来到DAO")]),s("div",{staticClass:"email"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"val",attrs:{type:"text",name:"email",placeholder:"请输入您的邮箱"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"btn"},[s("button",{class:""!=t.email?"active":"",on:{click:t.next}},[t._v("下一步")])]),s("div",{staticClass:"bei"},[t._v("DAO是一个由用户自治的论坛，该论坛所有社区规则由用户集体投票制定，登录使用DAO代表您同意该论坛的所有社区规则。")])]):t._e(),2==t.type?s("div",{staticClass:"code"},[s("div",{staticClass:"back",on:{click:function(e){return t.back()}}},[s("img",{attrs:{src:a("aea7")}})]),s("div",{staticClass:"tit"},[s("div",[t._v("请输入验证码")]),s("div",{staticClass:"setcode"},[t._v("验证码已发送至 "+t._s(t.email))])]),s("div",{staticClass:"email"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"val",attrs:{type:"number",name:"code",placeholder:"四位数验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),s("div",{staticClass:"btn"},[s("button",{class:""!=t.code?"active":"",on:{click:function(e){return t.login()}}},[t._v("登录")])]),s("div",{staticClass:"beizhu"},[s("span",[t._v("未收到验证码？")]),s("span",{staticClass:"resetcode",on:{click:function(e){return t.next()}}},[t._v("重新发送")])])]):t._e()])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",[t._v("DAO论坛")]),a("div",{staticClass:"slogn"},[t._v("一个由用户自治的论坛")])])}],n=a("967e"),o=a.n(n),c=(a("96cf"),a("fa84")),A=a.n(c),l={name:"Login",data:function(){return{type:1,email:"",code:""}},created:function(){var t=localStorage.getItem("token");t&&this.$router.push({path:"/",query:{}})},methods:{next:function(){var t=A()(o.a.mark((function t(){var e,a,s,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this,a=e.email,s=/\w+@[a-z0-9]+\.[a-z]{2,4}/,s.test(a)?(i={code:0},0==i.code?(e.type=2,this.$q.notify({position:"center",message:"验证码发送成功"})):this.$q.notify({position:"center",message:i.message})):this.$q.notify({position:"center",message:"验证码格式不正确"});case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),back:function(){this.type=1},login:function(){var t=A()(o.a.mark((function t(){var e,a,s,i,n=this;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.clear(),"/user/login",{mail:this.email,code:this.code},e={code:0,token:"xx0p",data:{user:"test"}},0==e.code?(a=localStorage.setItem,localStorage.setItem=function(t,e){var s=new Event("setItemEvent");s.key=t,s.newValue=e,window.dispatchEvent(s),a.apply(this,arguments)},s=e.data.token,i=JSON.stringify(e.data.user),localStorage.setItem("token",s),localStorage.setItem("userinfo",i),setTimeout((function(){n.$router.push({path:"/",query:{token:s}})}),500)):this.$q.notify({position:"center",message:e.message});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},r=l,u=(a("213e"),a("2877")),d=Object(u["a"])(r,s,i,!1,null,"33c2d1df",null);e["default"]=d.exports},"68a4":function(t,e,a){},aea7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAKCAYAAAC5Sw6hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAACgAAAADKOW4WAAABYklEQVQoFZ2S20oCURSG11KTPGSDXvgGXTRORNGMdCXjiAfKLJN6r96gi6KsLpoizAgJwgNFN/kYBWVZFM5qL2GDgUa1b/bh/9e3/7XZqOrWFric83bj0oZ/jJiRTBGQ6QJwpsCBo5hurv6Vo8bNZXLghAgWXeCPFAGwITZ7mp4s/BamGdYK9PCAkO58IVceuVBNlILw+lARywVwu9fbjerxT0BOzxcD4k0QvZlm8+xZtAbQrpVfFG8wwwL0nDJHHgVSDatIAPtCbyljgTRD2NtPJIsMIxvq0EcFCeYQce2+dXEqNZ6ndbMkCnYIsI7+cI4DSL2fSG6YPoHeNPftEB1qRiontVg8uYGAu0Bw7VHc2UEIe74lkkXzljX5/kRV0cKMMBREy2EA2hb61XjUv3Rr213plfNQEIuziYLy2e1UxaNqiOARf6XmiwbywyDsHwkagNlA9BjyRDbr9fIbnw8bXxlvgZdcs8NbAAAAAElFTkSuQmCC"}}]);