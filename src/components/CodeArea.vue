<template>
    <div>
        <h3>SDK功能展示</h3>
        <div class="module-list">
            <template
                v-for="item in moduleCode"
                :key="item.name"
            >

                <el-button
                    type="primary"
                    @click="resetEditor(item.code)"
                >{{item.name}}</el-button>
            </template>
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
    </div>
</template>

<script>
import MonacoEditor from "vue-monaco-editor";

export default {
    name: "CodeArea",
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
            moduleCode: {
                refreshTicket: {
                    name: "刷新ticket(异步)",
                    code: [
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
                },
                refreshTicketSync: {
                    name: "刷新ticket(同步)",
                    code: [
                        "async function refreshTicket() {",
                        "    try {",
                        "        let data = await window.acgAppSdk.refreshTicket()",
                        "        print(data);",
                        "        return data;",
                        "    } catch (error) {",
                        "        print('error');",
                        "        print(error);",
                        "    }",
                        "    ",
                        "}",
                        "refreshTicket();",
                    ],
                },
                restartApp: {
                    name: "重启应用",
                    code: ["window.acgAppSdk.restartApp()"],
                },
            },
        };
    },
    created() {
        this.rewritePrint();
    },
    methods: {
        /**
         * 重写输出函数
         */
        rewritePrint() {
            window.print = (data) => {
                if (this.$refs.res.innerHTML === "运行中...") {
                    this.$refs.res.innerHTML = "";
                }
                this.$refs.res.innerHTML +=
                    typeof data === "object"
                        ? JSON.stringify(data, null, 4)
                        : data;
            };
        },

        /**
         * 重设编辑器内容
         */
        resetEditor(code) {
            this.editor.setValue(code.join("\n"));
            this.clean();
        },

        /**
         * 执行代码
         */
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

        /**
         * 清除结果
         */
        clean() {
            this.$refs.res.innerHTML = "";
        },

        /**
         * 初始化编辑器
         */
        initEditor(editor) {
            this.editor = editor;
            this.editor.setValue(this.moduleCode.refreshTicket.code.join("\n"));
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