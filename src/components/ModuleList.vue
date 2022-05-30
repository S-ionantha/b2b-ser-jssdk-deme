<template>
    <div>
        <h3>功能案例</h3>
        <div class="module-list">
            <el-button
                type="primary"
                @click="getList"
            >获取商品展示列表</el-button>
        </div>
        <div class="good-list">
            <template
                v-for="item in goodList"
                :key="item.id"
            >
                <el-card :body-style="{ padding: '0px' }">
                    <img
                        :src="item.pc_url"
                        class="image"
                    />
                    <div style="padding: 14px">
                        <span>{{item.name}}</span>
                        <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button
                                text
                                class="button"
                            >Operating</el-button>
                        </div>
                    </div>
                </el-card>
            </template>

        </div>
    </div>
</template>

<script>
import { ElButton, ElCard } from "element-plus";
import axios from "axios";
export default {
    name: "ModuleList",
    data() {
        return {
            goodList: [],
        };
    },
    components: {
        ElButton,
        ElCard,
    },
    methods: {
        async getList() {
            let data;
            try {
                data = await window.acgAppSdk.refreshTicket();
            } catch (error) {
                data = error;
            }

            let url = window.top.location.search || window.location.search;

            let params = new URLSearchParams(url.substring(1));

            console.log(params.get("env"));

            // https://app.ionantha.tech
            let { data: list } = await axios({
                url: "/api/list",
                method: "get",
                params: {
                    ticket: data.ticket,
                    env: params.get("env"),
                },
            });

            this.goodList = list;
            console.log(list);
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
