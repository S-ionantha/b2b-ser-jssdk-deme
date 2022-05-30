(function(){"use strict";var __webpack_modules__={1993:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1305),vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6265),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);__webpack_exports__["Z"]={name:"App",components:{MonacoEditor:vue_monaco_editor__WEBPACK_IMPORTED_MODULE_0___default()},data(){return{editor:null,code:"",options:{theme:"vs",selectOnLineNumbers:!1,lineNumbers:"off",roundedSelection:!1,readOnly:!1,automaticLayout:!0,glyphMargin:!0,showFoldingControls:"always",formatOnPaste:!0,formatOnType:!0,folding:!0},refreshTicket:["function success (data) {","    print(data);","}","function error (data) {","    print('error');","    print(data);","}","function refreshTicket() {","    window.acgAppSdk.refreshTicket(","        null,","        {","            success: success,","            error: error","        }","    )","}","refreshTicket();"],refreshTicketSync:["async function refreshTicket() {","    try {","        let data = await window.acgAppSdk.refreshTicket()","        print(data);","        return data;","    } catch (error) {","        print('error');","        print(error);","    }","    ","}","refreshTicket();"],restartApp:["window.acgAppSdk.restartApp()"]}},created(){this.rewritePrint()},methods:{rewritePrint(){window.print=e=>{"运行中..."===this.$refs.res.innerHTML&&(this.$refs.res.innerHTML=""),this.$refs.res.innerHTML+="object"===typeof e?JSON.stringify(e,null,4):e}},resetEditor(e){this.editor.setValue(this[e].join("\n")),this.clean()},runCode(){this.$refs.res.innerHTML="运行中...";let newCode=`${this.editor.getValue()}`;try{let res=eval(newCode);console.log(res)}catch(error){this.$refs.res.innerHTML=error.message}},clean(){this.$refs.res.innerHTML=""},initEditor(e){this.editor=e,this.editor.setValue(this.refreshTicket.join("\n"))},onCodeChange(e){console.log(e.getValue())},async getList(){let e=await window.acgAppSdk.refreshTicket();console.log(e);let{data:r}=await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/list?ticket=${e.ticket}`);console.log(r),print(r)}}}},9235:function(e,r,_){var t=_(9242),n=_(3396);const i=(0,n._)("h3",null,"SDK功能展示",-1),o={class:"module-list"},a=(0,n.Uk)("刷新ticket(异步)"),c=(0,n.Uk)("刷新ticket(同步)"),s=(0,n.Uk)("重启应用"),u={class:"code-area"},l={class:"btn-area"},p=(0,n.Uk)("运行"),d=(0,n.Uk)("清空"),f={ref:"res",class:"res code"},k=(0,n._)("h3",null,"功能案例",-1),w={class:"module-list"},b=(0,n.Uk)("获取商品展示列表");function h(e,r,_,t,h,m){const g=(0,n.up)("el-button"),y=(0,n.up)("MonacoEditor");return(0,n.wg)(),(0,n.iD)("div",null,[i,(0,n._)("div",o,[(0,n.Wm)(g,{type:"primary",onClick:r[0]||(r[0]=e=>m.resetEditor("refreshTicket"))},{default:(0,n.w5)((()=>[a])),_:1}),(0,n.Wm)(g,{type:"primary",onClick:r[1]||(r[1]=e=>m.resetEditor("refreshTicketSync"))},{default:(0,n.w5)((()=>[c])),_:1}),(0,n.Wm)(g,{type:"primary",onClick:r[2]||(r[2]=e=>m.resetEditor("restartApp"))},{default:(0,n.w5)((()=>[s])),_:1})]),(0,n._)("div",u,[(0,n.Wm)(y,{height:"300",width:"500",class:"vs",style:{"text-align":"left","background-color":"#fff"},language:"javascript",code:h.code,editorOptions:h.options,onMounted:m.initEditor,onCodeChange:m.onCodeChange},null,8,["code","editorOptions","onMounted","onCodeChange"]),(0,n._)("div",l,[(0,n.Wm)(g,{class:"btn",type:"primary",onClick:m.runCode},{default:(0,n.w5)((()=>[p])),_:1},8,["onClick"]),(0,n.Wm)(g,{class:"btn",type:"primary",onClick:m.clean},{default:(0,n.w5)((()=>[d])),_:1},8,["onClick"])]),(0,n._)("div",f,null,512)]),k,(0,n._)("div",w,[(0,n.Wm)(g,{type:"primary",onClick:m.getList},{default:(0,n.w5)((()=>[b])),_:1},8,["onClick"])])])}var m=_(1993),g=_(89);const y=(0,g.Z)(m.Z,[["render",h]]);var v=y,O=_(837);_(4415);const E=(0,t.ri)(v);E.use(O.Z),E.mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(_.exports,_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(r,_,t,n){if(!_){var i=1/0;for(s=0;s<e.length;s++){_=e[s][0],t=e[s][1],n=e[s][2];for(var o=!0,a=0;a<_.length;a++)(!1&n||i>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](_[a])}))?_.splice(a--,1):(o=!1,n<i&&(i=n));if(o){e.splice(s--,1);var c=t();void 0!==c&&(r=c)}}return r}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[_,t,n]}}(),function(){__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(r,{a:r}),r}}(),function(){__webpack_require__.d=function(e,r){for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,_){var t,n,i=_[0],o=_[1],a=_[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(t in o)__webpack_require__.o(o,t)&&(__webpack_require__.m[t]=o[t]);if(a)var s=a(__webpack_require__)}for(r&&r(_);c<i.length;c++)n=i[c],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return __webpack_require__.O(s)},_=self["webpackChunkb2b_ser_jssdk_deme"]=self["webpackChunkb2b_ser_jssdk_deme"]||[];_.forEach(r.bind(null,0)),_.push=r.bind(null,_.push.bind(_))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(9235)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.6518c308.js.map