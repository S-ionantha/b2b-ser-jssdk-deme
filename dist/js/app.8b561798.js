(function(){"use strict";var __webpack_modules__={7481:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1305),vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__),element_plus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6607);__webpack_exports__["Z"]={name:"CodeArea",components:{MonacoEditor:vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default(),ElButton:element_plus__WEBPACK_IMPORTED_MODULE_1__.mi},data(){return{editor:null,code:"",options:{theme:"vs",selectOnLineNumbers:!1,lineNumbers:"off",roundedSelection:!1,readOnly:!1,automaticLayout:!0,glyphMargin:!0,showFoldingControls:"always",formatOnPaste:!0,formatOnType:!0,folding:!0},moduleCode:{refreshTicket:{name:"刷新ticket(异步)",code:["function success (data) {","    print(data);","}","function error (data) {","    print('error');","    print(data);","}","function refreshTicket() {","    window.acgAppSdk.refreshTicket(","        null,","        {","            success: success,","            error: error","        }","    )","}","refreshTicket();"]},refreshTicketSync:{name:"刷新ticket(同步)",code:["async function refreshTicket() {","    try {","        let data = await window.acgAppSdk.refreshTicket()","        print(data);","        return data;","    } catch (error) {","        print('error');","        print(error);","    }","    ","}","refreshTicket();"]},restartApp:{name:"重启应用",code:["window.acgAppSdk.restartApp()"]}}}},created(){this.rewritePrint()},methods:{rewritePrint(){window.print=e=>{"运行中..."===this.$refs.res.innerHTML&&(this.$refs.res.innerHTML=""),this.$refs.res.innerHTML+="object"===typeof e?JSON.stringify(e,null,4):e}},resetEditor(e){this.editor.setValue(e.join("\n")),this.clean()},runCode(){this.$refs.res.innerHTML="运行中...";let newCode=`${this.editor.getValue()}`;try{let res=eval(newCode);console.log(res)}catch(error){this.$refs.res.innerHTML=error.message}},clean(){this.$refs.res.innerHTML=""},initEditor(e){this.editor=e,this.editor.setValue(this.moduleCode.refreshTicket.code.join("\n"))}}}},5199:function(e,r,t){var _=t(9242),n=t(3396);function o(e,r,t,_,o,i){const a=(0,n.up)("code-area"),c=(0,n.up)("module-list");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(a),(0,n.Wm)(c)])}var i=t(7139);const a=(0,n._)("h3",null,"SDK功能展示",-1),c={class:"module-list"},s={class:"code-area"},u={class:"btn-area"},l=(0,n.Uk)("运行"),d=(0,n.Uk)("清空"),p={ref:"res",class:"res code"};function f(e,r,t,_,o,f){const w=(0,n.up)("el-button"),k=(0,n.up)("MonacoEditor");return(0,n.wg)(),(0,n.iD)("div",null,[a,(0,n._)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.moduleCode,(e=>((0,n.wg)(),(0,n.j4)(w,{key:e.name,type:"primary",onClick:r=>f.resetEditor(e.code)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["onClick"])))),128))]),(0,n._)("div",s,[(0,n.Wm)(k,{height:"300",width:"500",class:"vs",style:{"text-align":"left","background-color":"#fff"},language:"javascript",code:o.code,editorOptions:o.options,onMounted:f.initEditor,onCodeChange:e.onCodeChange},null,8,["code","editorOptions","onMounted","onCodeChange"]),(0,n._)("div",u,[(0,n.Wm)(w,{class:"btn",type:"primary",onClick:f.runCode},{default:(0,n.w5)((()=>[l])),_:1},8,["onClick"]),(0,n.Wm)(w,{class:"btn",type:"primary",onClick:f.clean},{default:(0,n.w5)((()=>[d])),_:1},8,["onClick"])]),(0,n._)("div",p,null,512)])])}var w=t(7481),k=t(89);const b=(0,k.Z)(w.Z,[["render",f]]);var m=b;const h=(0,n._)("h3",null,"功能案例",-1),g={class:"module-list"},v=(0,n.Uk)("获取商品展示列表"),y={class:"good-list"},C=["src"],O={class:"card-info"},E={class:"bottom-wrap"},M=(0,n._)("span",{class:"price-icon"},"￥",-1),q={class:"price"},T={class:"sales-volume"},L={class:"name"};function P(e,r,t,_,o,a){const c=(0,n.up)("el-button"),s=(0,n.up)("el-card");return(0,n.wg)(),(0,n.iD)("div",null,[h,(0,n._)("div",g,[(0,n.Wm)(c,{type:"primary",onClick:a.getList},{default:(0,n.w5)((()=>[v])),_:1},8,["onClick"])]),(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.goodList,(e=>((0,n.wg)(),(0,n.j4)(s,{key:e.id,class:"card","body-style":{padding:"0px"}},{default:(0,n.w5)((()=>[(0,n._)("img",{src:e.canonicalImage,class:"image"},null,8,C),(0,n._)("div",O,[(0,n._)("div",E,[M,(0,n._)("span",q,(0,i.zw)(e.price[0].price),1),(0,n._)("span",T," /"+(0,i.zw)(e.price[0].unitCode),1)]),(0,n._)("div",L,(0,i.zw)(e.name),1)])])),_:2},1024)))),128))])])}var D=t(6607),j=t(8298),A=t(6265),S=t.n(A),W={name:"ModuleList",data(){return{goodList:[]}},components:{ElButton:D.mi,ElCard:j.Kf},methods:{async getList(){let e;try{e=await window.acgAppSdk.refreshTicket()}catch(n){e=n}let r=new URLSearchParams(window.location.search.substring(1));console.log(r.get("env"));let t=r.get("env"),{data:_}=await S()({url:"/api/list",method:"get",params:{ticket:e.ticket,env:t}});this.goodList=_.data.data.list,console.log(_,_.data.data.list)}}};const x=(0,k.Z)(W,[["render",P]]);var U=x,K={name:"App",components:{CodeArea:m,ModuleList:U}};const B=(0,k.Z)(K,[["render",o]]);var H=B;t(4415);const I=(0,_.ri)(H);I.mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(r,t,_,n){if(!t){var o=1/0;for(s=0;s<e.length;s++){t=e[s][0],_=e[s][1],n=e[s][2];for(var i=!0,a=0;a<t.length;a++)(!1&n||o>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[a])}))?t.splice(a--,1):(i=!1,n<o&&(o=n));if(i){e.splice(s--,1);var c=_();void 0!==c&&(r=c)}}return r}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[t,_,n]}}(),function(){__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(r,{a:r}),r}}(),function(){__webpack_require__.d=function(e,r){for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,t){var _,n,o=t[0],i=t[1],a=t[2],c=0;if(o.some((function(r){return 0!==e[r]}))){for(_ in i)__webpack_require__.o(i,_)&&(__webpack_require__.m[_]=i[_]);if(a)var s=a(__webpack_require__)}for(r&&r(t);c<o.length;c++)n=o[c],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return __webpack_require__.O(s)},t=self["webpackChunkb2b_ser_jssdk_deme"]=self["webpackChunkb2b_ser_jssdk_deme"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(5199)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.8b561798.js.map