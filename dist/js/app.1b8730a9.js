(function(){"use strict";var __webpack_modules__={7481:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1305),vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__),element_plus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6607);__webpack_exports__["Z"]={name:"CodeArea",components:{MonacoEditor:vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default(),ElButton:element_plus__WEBPACK_IMPORTED_MODULE_1__.mi},data(){return{editor:null,code:"",options:{theme:"vs",selectOnLineNumbers:!1,lineNumbers:"off",roundedSelection:!1,readOnly:!1,automaticLayout:!0,glyphMargin:!0,showFoldingControls:"always",formatOnPaste:!0,formatOnType:!0,folding:!0},moduleCode:{refreshTicket:{name:"刷新ticket(异步)",code:["function success (data) {","    print(data);","}","function error (data) {","    print('error');","    print(data);","}","function refreshTicket() {","    window.acgAppSdk.refreshTicket(","        null,","        {","            success: success,","            error: error","        }","    )","}","refreshTicket();"]},refreshTicketSync:{name:"刷新ticket(同步)",code:["async function refreshTicket() {","    try {","        let data = await window.acgAppSdk.refreshTicket()","        print(data);","        return data;","    } catch (error) {","        print('error');","        print(error);","    }","    ","}","refreshTicket();"]},restartApp:{name:"重启应用",code:["window.acgAppSdk.restartApp()"]},rebuyApp:{name:"获取应用续费链接(异步)",code:["function success (data) {","    print(data);","}","function error (data) {","    print('error');","    print(data);","}","function rebuyApp() {","    window.acgAppSdk.rebuyApp(","        {","            appId: 172,","            version: 'v_1.0.0.1',","            duration: 3,","        },","        {","            success: success,","            error: error","        }","    )","}","rebuyApp();"]},rebuyAppSync:{name:"获取应用续费链接(同步)",code:["async function rebuyApp() {","    try {","        let data = await window.acgAppSdk.rebuyApp()","        print(data);","        return data;","    } catch (error) {","        print('error');","        print(error);","    }","    ","}","rebuyApp();"]}}}},created(){this.rewritePrint()},methods:{rewritePrint(){window.print=e=>{"运行中..."===this.$refs.res.innerHTML&&(this.$refs.res.innerHTML=""),this.$refs.res.innerHTML+="object"===typeof e?JSON.stringify(e,null,4):e}},resetEditor(e){this.editor.setValue(e.join("\n")),this.clean()},runCode(){this.$refs.res.innerHTML="运行中...";let newCode=`${this.editor.getValue()}`;try{let res=eval(newCode);console.log(res)}catch(error){this.$refs.res.innerHTML=error.message}},clean(){this.$refs.res.innerHTML=""},initEditor(e){this.editor=e,this.editor.setValue(this.moduleCode.refreshTicket.code.join("\n"))}}}},543:function(e,r,t){var n=t(9242),o=t(3396);function _(e,r,t,n,_,i){const a=(0,o.up)("code-area"),c=(0,o.up)("module-list");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a),(0,o.Wm)(c)])}var i=t(7139);const a=(0,o._)("h3",null,"SDK功能展示",-1),c={class:"module-list"},s={class:"code-area"},u={class:"btn-area"},d=(0,o.Uk)("运行"),l=(0,o.Uk)("清空"),p={ref:"res",class:"res code"};function f(e,r,t,n,_,f){const w=(0,o.up)("el-button"),k=(0,o.up)("MonacoEditor");return(0,o.wg)(),(0,o.iD)("div",null,[a,(0,o._)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.moduleCode,(e=>((0,o.wg)(),(0,o.j4)(w,{key:e.name,type:"primary",onClick:r=>f.resetEditor(e.code)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["onClick"])))),128))]),(0,o._)("div",s,[(0,o.Wm)(k,{height:"300",width:"500",class:"vs",style:{"text-align":"left","background-color":"#fff"},language:"javascript",code:_.code,editorOptions:_.options,onMounted:f.initEditor,onCodeChange:e.onCodeChange},null,8,["code","editorOptions","onMounted","onCodeChange"]),(0,o._)("div",u,[(0,o.Wm)(w,{class:"btn",type:"primary",onClick:f.runCode},{default:(0,o.w5)((()=>[d])),_:1},8,["onClick"]),(0,o.Wm)(w,{class:"btn",type:"primary",onClick:f.clean},{default:(0,o.w5)((()=>[l])),_:1},8,["onClick"])]),(0,o._)("div",p,null,512)])])}var w=t(7481),k=t(89);const b=(0,k.Z)(w.Z,[["render",f]]);var m=b;const h=(0,o._)("h3",null,"功能案例",-1),g={class:"module-list"},v=(0,o.Uk)("获取商品展示列表"),y={key:0,class:"good-list"},C=["src"],O={class:"card-info"},q={class:"bottom-wrap"},E=(0,o._)("span",{class:"price-icon"},"￥",-1),M={class:"price"},T={class:"sales-volume"},A={class:"name"};function L(e,r,t,n,_,a){const c=(0,o.up)("el-button"),s=(0,o.up)("el-card");return(0,o.wg)(),(0,o.iD)("div",null,[h,(0,o._)("div",g,[(0,o.Wm)(c,{type:"primary",onClick:a.getList},{default:(0,o.w5)((()=>[v])),_:1},8,["onClick"])]),_.goodList.length?((0,o.wg)(),(0,o.iD)("div",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.goodList,(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.id,class:"card","body-style":{padding:"0px"},onClick:r=>a.go(e)},{default:(0,o.w5)((()=>{var r,t;return[(0,o._)("img",{src:e.canonicalImage,class:"image"},null,8,C),(0,o._)("div",O,[(0,o._)("div",q,[E,(0,o._)("span",M,(0,i.zw)(null===(r=e.price[0])||void 0===r?void 0:r.price),1),(0,o._)("span",T," /"+(0,i.zw)(null===(t=e.price[0])||void 0===t?void 0:t.unitCode),1)]),(0,o._)("div",A,(0,i.zw)(e.name),1)])]})),_:2},1032,["onClick"])))),128))])):(0,o.kq)("",!0)])}var P=t(6607),D=t(8298),S=t(6265),j=t.n(S),W={name:"ModuleList",data(){return{goodList:[]}},components:{ElButton:P.mi,ElCard:D.Kf},methods:{async getList(){let e;this.goodList=[];try{e=await window.acgAppSdk.refreshTicket()}catch(o){e=o}let r=new URLSearchParams(window.location.search.substring(1));console.log(r.get("env"));let t=r.get("env"),{data:n}=await j()({url:"/api/list",method:"get",params:{ticket:e.ticket,env:t}});this.goodList=n.data.data.list,console.log(n,n.data.data.list)},go(e){window.open(e.pc_url)}}};const x=(0,k.Z)(W,[["render",L]]);var U=x,K={name:"App",components:{CodeArea:m,ModuleList:U}};const B=(0,k.Z)(K,[["render",_]]);var H=B;t(4415);const I=(0,n.ri)(H);I.mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(r,t,n,o){if(!t){var _=1/0;for(s=0;s<e.length;s++){t=e[s][0],n=e[s][1],o=e[s][2];for(var i=!0,a=0;a<t.length;a++)(!1&o||_>=o)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[a])}))?t.splice(a--,1):(i=!1,o<_&&(_=o));if(i){e.splice(s--,1);var c=n();void 0!==c&&(r=c)}}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,n,o]}}(),function(){__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(r,{a:r}),r}}(),function(){__webpack_require__.d=function(e,r){for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,o,_=t[0],i=t[1],a=t[2],c=0;if(_.some((function(r){return 0!==e[r]}))){for(n in i)__webpack_require__.o(i,n)&&(__webpack_require__.m[n]=i[n]);if(a)var s=a(__webpack_require__)}for(r&&r(t);c<_.length;c++)o=_[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return __webpack_require__.O(s)},t=self["webpackChunkb2b_ser_jssdk_deme"]=self["webpackChunkb2b_ser_jssdk_deme"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(543)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.1b8730a9.js.map