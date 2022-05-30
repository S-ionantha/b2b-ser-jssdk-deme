<template>
    <div>
        <h3>SDK功能展示</h3>
        <div class="module-list">
            <el-button
                type="primary"
                @click="resetEditor('refreshTicket')"
            >刷新ticket(异步)</el-button>
            <el-button
                type="primary"
                @click="resetEditor('refreshTicketSync')"
            >刷新ticket(同步)</el-button>
        </div>

        <div class="code-area">
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
            <div class="btn-area">
                <el-button
                    class="btn"
                    type="primary"
                    @click="runCode"
                >运行</el-button>
                <el-button
                    class="btn"
                    type="primary"
                    @click="clean"
                >清空</el-button>
            </div>

            <div
                ref="res"
                class="res code"
            ></div>
        </div>

        <h3>功能案例</h3>
        <div class="module-list">
            <el-button
                type="primary"
                @click="getList"
            >获取商品展示列表</el-button>
        </div>

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
                "function error (data) {",
                "    print('error');",
                "    print(data);",
                "}",
                "function refreshTicket() {",
                "    window.acgAppSdk.refreshTicket(",
                "        null,",
                "        {",
                "            success: success,",
                "            error: error",
                "        }",
                "    )",
                "}",
                "refreshTicket();",
            ],
            refreshTicketSync: [
                "async function refreshTicket() {",
                "    let data = await window.acgAppSdk.refreshTicket()",
                "    print(data);",
                "    return data;",
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
                this.$refs.res.innerHTML +=
                    typeof data === "object"
                        ? JSON.stringify(data, null, 4)
                        : data;
            };
        },

        resetEditor(key) {
            this.editor.setValue(this[key].join("\n"));
            this.clean();
        },

        runCode() {
            this.$refs.res.innerHTML = "运行中...";
            let newCode = `${this.editor.getValue()}`;
            try {
                let res = eval(newCode);
                console.log(res);
            } catch (error) {
                this.$refs.res.innerHTML = error.message;
            }
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
* {
    padding: 0;
    margin: 0;
}
h3 {
    margin-top: 20px;
}
.module-list {
    margin: 10px 0;
}
.code-area {
    display: flex;
    /* justify-content: space-around; */
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
.btn-area {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}
.btn-area .btn {
    width: 100%;
    margin-left: 0 !important;
    margin-bottom: 10px;
}
</style>
