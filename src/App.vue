<template>
    <div>
        SDK功能展示
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
                @mounted="initEditor"
                @codeChange="onCodeChange"
            >
            </MonacoEditor>
            <div>
                <el-button
                    type="primary"
                    @click="runCode"
                >运行</el-button>
                <el-button
                    type="primary"
                    @click="clean"
                >清空</el-button>
            </div>

            <div
                ref="res"
                class="res code"
            ></div>
        </div>

        商品展示
        <el-button
            type="primary"
            @click="getList"
        >获取商品展示列表</el-button>

    </div>
</template>

<script>
import MonacoEditor from "vue-monaco-editor";
import axios from "axios";
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
    created() {
        this.rewritePrint();
    },
    methods: {
        rewritePrint() {
            window.print = (data) => {
                this.$refs.res.innerHTML =
                    typeof data === "object"
                        ? JSON.stringify(data, null, 4)
                        : data;
            };
        },
        
        runCode() {
            this.$refs.res.innerHTML = '运行中...'
            let newCode = `${this.editor.getValue()}`;
            let res = eval(newCode);
            console.log(res)
        },

        clean() {
            this.$refs.res.innerHTML = "";
        },

        initEditor(editor) {
            this.editor = editor;
            this.editor.setValue(this.refreshTicket.join("\n"));
        },

        onCodeChange(editor) {
            console.log(editor.getValue());
        },

        async getList() {
            let { data } = await window.acgAppSdk.refreshTicket();
            console.log(data);
            // https://app.ionantha.tech
            let { data: list } = await axios.get(
                `/api/list?ticket=${data.ticket}`
            );
            console.log(list);
            print(list);
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
