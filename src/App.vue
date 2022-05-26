<template>
    <div>
        编辑功能
        <div
            ref="code"
            class="code"
        ></div>

        <div
            ref="res"
            class="code"
        ></div>

    </div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
export default {
    name: "App",
    data() {
        return {
            editor: null,
            code: `window.acgAppSdk.refreshTicket(\n\tnull,\n\t{\n\t\tsuccess: (data) => {\n\t\t\tconsole.log(data)\n\t\t}\n\t}\n)\nconsole.log(123)`,
        };
    },
    mounted() {
        this.editor = monaco.editor.create(this.$refs.code, {
            value: this.code,
            language: "javascript",
            lineNumbers: false,
            lineHeight: 20, // 行高
            tabSize: 4, // 缩进
            overviewRulerBorder: false,
            overviewRulerLanes: false,
            theme: "vs-dark",
            minimap: {
                // 关闭代码缩略图
                enabled: false, // 是否启⽤预览图
            },
            fontSize: "14px",
            autoIndent: true,
        });
        // let data = eval(this.code);
        // console.log(this.editor.getValue());

        // this.$refs.res.innerHTML = this.editor.getValue()
    },
    method: {},
};
</script>

<style>
.code {
    border: 1px solid black;
    width: 500px;
    height: 300px;
    white-space: pre-wrap;
}
</style>
