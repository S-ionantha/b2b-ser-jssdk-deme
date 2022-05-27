<template>
    <div>
        编辑功能
        <div class="code-area">
            <!-- <div
                ref="code"
                class="code"
            ></div> -->
            <MonacoEditor
                height="300"
                width="500"
                class="vs"
                style="text-align: left;background-color: #fff"
                language="javascript"
                :code="code"
                :editorOptions="options"
                @mounted="onMounted"
                @codeChange="onCodeChange"
            >
            </MonacoEditor>
            <el-button
                type="primary"
                @click="runCode"
            >运行</el-button>
            <div
                ref="res"
                class="res code"
            ></div>
        </div>

    </div>
</template>

<script>
import MonacoEditor from "vue-monaco-editor";
export default {
    name: "App",
    components: {
        MonacoEditor,
    },
    data() {
        return {
            editor: null,
            code: "", //"// 用于存储输出值\nlet print;\n\n",
            options: {
                theme: "vs",
                selectOnLineNumbers: false,
                lineNumbers: "off",
                roundedSelection: false,
                readOnly: false,
                automaticLayout: true,
                glyphMargin: true,
                showFoldingControls: "always",
                formatOnPaste: true,
                formatOnType: true,
                folding: true,
            },
            refreshTicket: [
                "function success (data) {",
                "    print(data);",
                "}",
                "function refreshTicket() {",
                "    window.acgAppSdk.refreshTicket(",
                "        null,",
                "        {",
                "            success: success",
                "        }",
                "    )",
                "}",
                "refreshTicket();",
            ],
        };
    },
    mounted() {
        // this.editor = monaco.editor.create(this.$refs.code, {
        //     value: this.code,
        //     language: "javascript",
        //     lineNumbers: false,
        //     lineHeight: 20, // 行高
        //     tabSize: 4, // 缩进
        //     overviewRulerBorder: false,
        //     overviewRulerLanes: false,
        //     theme: "vs-dark",
        //     minimap: {
        //         // 关闭代码缩略图
        //         enabled: false, // 是否启⽤预览图
        //     },
        //     fontSize: "14px",
        //     autoIndent: true,
        // });
        // let data = eval(this.code);
        // console.log(this.editor.getValue());
        // this.$refs.res.innerHTML = this.editor.getValue()
        window.print = (data) => {
            this.$refs.res.innerHTML =
                typeof data === "object" ? JSON.stringify(data, null, 4) : data;
        };
    },
    methods: {
        runCode() {
            let newCode = `${this.editor.getValue()}`;
            let res = eval(newCode);
            console.log(res);
            // this.$refs.res.innerHTML = res;
        },
        onMounted(editor) {
            this.editor = editor;
            this.editor.setValue(this.refreshTicket.join("\n"));
        },

        onCodeChange(editor) {
            console.log(editor.getValue());
        },
    },
};
</script>

<style>
.code-area {
    display: flex;
    justify-content: space-around;
}
.code {
    border: 1px solid black;
    width: 500px;
    height: 300px;
    white-space: pre-wrap;
}
.res {
    overflow: scroll;
}
</style>
