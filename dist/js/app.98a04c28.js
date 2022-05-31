(function(){"use strict";var __webpack_modules__={7481:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1305),vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__),element_plus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6607);__webpack_exports__["Z"]={name:"CodeArea",components:{MonacoEditor:vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default(),ElButton:element_plus__WEBPACK_IMPORTED_MODULE_1__.mi},data(){return{editor:null,code:"",options:{theme:"vs",selectOnLineNumbers:!1,lineNumbers:"off",roundedSelection:!1,readOnly:!1,automaticLayout:!0,glyphMargin:!0,showFoldingControls:"always",formatOnPaste:!0,formatOnType:!0,folding:!0},moduleCode:{refreshTicket:{name:"刷新ticket(异步)",code:["function success (data) {","    print(data);","}","function error (data) {","    print('error');","    print(data);","}","function refreshTicket() {","    window.acgAppSdk.refreshTicket(","        null,","        {","            success: success,","            error: error","        }","    )","}","refreshTicket();"]},refreshTicketSync:{name:"刷新ticket(同步)",code:["async function refreshTicket() {","    try {","        let data = await window.acgAppSdk.refreshTicket()","        print(data);","        return data;","    } catch (error) {","        print('error');","        print(error);","    }","    ","}","refreshTicket();"]},restartApp:{name:"重启应用",code:["window.acgAppSdk.restartApp()"]}}}},created(){this.rewritePrint()},methods:{rewritePrint(){window.print=e=>{"运行中..."===this.$refs.res.innerHTML&&(this.$refs.res.innerHTML=""),this.$refs.res.innerHTML+="object"===typeof e?JSON.stringify(e,null,4):e}},resetEditor(e){this.editor.setValue(e.join("\n")),this.clean()},runCode(){this.$refs.res.innerHTML="运行中...";let newCode=`${this.editor.getValue()}`;try{let res=eval(newCode);console.log(res)}catch(error){this.$refs.res.innerHTML=error.message}},clean(){this.$refs.res.innerHTML=""},initEditor(e){this.editor=e,this.editor.setValue(this.moduleCode.refreshTicket.code.join("\n"))}}}},328:function(e,r,t){var n=t(9242),_=t(3396);const o={class:"container"};function i(e,r,t,n,i,a){const c=(0,_.up)("code-area"),s=(0,_.up)("module-list");return(0,_.wg)(),(0,_.iD)("div",o,[(0,_.Wm)(c),(0,_.Wm)(s)])}var a=t(7139);const c=(0,_._)("h3",null,"SDK功能展示",-1),s={class:"module-list"},u={class:"code-area"},l={class:"btn-area"},d=(0,_.Uk)("运行"),p=(0,_.Uk)("清空"),f={ref:"res",class:"res code"};function w(e,r,t,n,o,i){const w=(0,_.up)("el-button"),k=(0,_.up)("MonacoEditor");return(0,_.wg)(),(0,_.iD)("div",null,[c,(0,_._)("div",s,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(o.moduleCode,(e=>((0,_.wg)(),(0,_.j4)(w,{key:e.name,type:"primary",onClick:r=>i.resetEditor(e.code)},{default:(0,_.w5)((()=>[(0,_.Uk)((0,a.zw)(e.name),1)])),_:2},1032,["onClick"])))),128))]),(0,_._)("div",u,[(0,_.Wm)(k,{height:"300",width:"500",class:"vs",style:{"text-align":"left","background-color":"#fff"},language:"javascript",code:o.code,editorOptions:o.options,onMounted:i.initEditor,onCodeChange:e.onCodeChange},null,8,["code","editorOptions","onMounted","onCodeChange"]),(0,_._)("div",l,[(0,_.Wm)(w,{class:"btn",type:"primary",onClick:i.runCode},{default:(0,_.w5)((()=>[d])),_:1},8,["onClick"]),(0,_.Wm)(w,{class:"btn",type:"primary",onClick:i.clean},{default:(0,_.w5)((()=>[p])),_:1},8,["onClick"])]),(0,_._)("div",f,null,512)])])}var k=t(7481),b=t(89);const m=(0,b.Z)(k.Z,[["render",w]]);var h=m;const g=(0,_._)("h3",null,"功能案例",-1),v={class:"module-list"},y=(0,_.Uk)("获取商品展示列表"),C={key:0,class:"good-list"},O=["src"],q={class:"card-info"},E={class:"bottom-wrap"},M=(0,_._)("span",{class:"price-icon"},"￥",-1),T={class:"price"},L={class:"sales-volume"},P={class:"name"};function D(e,r,t,n,o,i){const c=(0,_.up)("el-button"),s=(0,_.up)("el-card");return(0,_.wg)(),(0,_.iD)("div",null,[g,(0,_._)("div",v,[(0,_.Wm)(c,{type:"primary",onClick:i.getList},{default:(0,_.w5)((()=>[y])),_:1},8,["onClick"])]),o.goodList.length?((0,_.wg)(),(0,_.iD)("div",C,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(o.goodList,(e=>((0,_.wg)(),(0,_.j4)(s,{key:e.id,class:"card","body-style":{padding:"0px"},onClick:r=>i.go(e)},{default:(0,_.w5)((()=>{var r,t;return[(0,_._)("img",{src:e.canonicalImage,class:"image"},null,8,O),(0,_._)("div",q,[(0,_._)("div",E,[M,(0,_._)("span",T,(0,a.zw)(null===(r=e.price[0])||void 0===r?void 0:r.price),1),(0,_._)("span",L," /"+(0,a.zw)(null===(t=e.price[0])||void 0===t?void 0:t.unitCode),1)]),(0,_._)("div",P,(0,a.zw)(e.name),1)])]})),_:2},1032,["onClick"])))),128))])):(0,_.kq)("",!0)])}var j=t(6607),A=t(8298),S=t(6265),W=t.n(S),x={name:"ModuleList",data(){return{goodList:[]}},components:{ElButton:j.mi,ElCard:A.Kf},methods:{async getList(){let e;this.goodList=[];try{e=await window.acgAppSdk.refreshTicket()}catch(_){e=_}let r=new URLSearchParams(window.location.search.substring(1));console.log(r.get("env"));let t=r.get("env"),{data:n}=await W()({url:"/api/list",method:"get",params:{ticket:e.ticket,env:t}});this.goodList=n.data.data.list||[],console.log(n,n.data.data.list)},go(e){window.open(e.pc_url)}}};const U=(0,b.Z)(x,[["render",D]]);var K=U,B={name:"App",components:{CodeArea:h,ModuleList:K}};const H=(0,b.Z)(B,[["render",i]]);var I=H;t(4415);const R=(0,n.ri)(I);R.mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(r,t,n,_){if(!t){var o=1/0;for(s=0;s<e.length;s++){t=e[s][0],n=e[s][1],_=e[s][2];for(var i=!0,a=0;a<t.length;a++)(!1&_||o>=_)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[a])}))?t.splice(a--,1):(i=!1,_<o&&(o=_));if(i){e.splice(s--,1);var c=n();void 0!==c&&(r=c)}}return r}_=_||0;for(var s=e.length;s>0&&e[s-1][2]>_;s--)e[s]=e[s-1];e[s]=[t,n,_]}}(),function(){__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(r,{a:r}),r}}(),function(){__webpack_require__.d=function(e,r){for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,_,o=t[0],i=t[1],a=t[2],c=0;if(o.some((function(r){return 0!==e[r]}))){for(n in i)__webpack_require__.o(i,n)&&(__webpack_require__.m[n]=i[n]);if(a)var s=a(__webpack_require__)}for(r&&r(t);c<o.length;c++)_=o[c],__webpack_require__.o(e,_)&&e[_]&&e[_][0](),e[_]=0;return __webpack_require__.O(s)},t=self["webpackChunkb2b_ser_jssdk_deme"]=self["webpackChunkb2b_ser_jssdk_deme"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(328)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.98a04c28.js.map