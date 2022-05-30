<template>
    <div>
        <h3>功能案例</h3>
        <div class="module-list">
            <el-button
                type="primary"
                @click="getList"
            >获取商品展示列表</el-button>
        </div>
        <div
            v-if="goodList.length"
            class="good-list"
        >
            <template
                v-for="item in goodList"
                :key="item.id"
            >
                <el-card
                    class="card"
                    :body-style="{ padding: '0px' }"
                    @click="go(item)"
                >
                    <img
                        :src="item.canonicalImage"
                        class="image"
                    />
                    <div class="card-info">
                        <div class="bottom-wrap">
                            <span class="price-icon">￥</span><span class="price">{{ item.price[0]?.price }}</span><span class="sales-volume">&nbsp;/{{ item.price[0]?.unitCode }}</span>
                        </div>
                        <div class="name">{{ item.name }}</div>
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
            this.goodList = [];
            let data;
            try {
                data = await window.acgAppSdk.refreshTicket();
            } catch (error) {
                data = error;
            }

            let params = new URLSearchParams(
                window.location.search.substring(1)
            );

            console.log(params.get("env"));
            let env = params.get("env");

            // https://app.ionantha.tech
            let { data: list } = await axios({
                url: "/api/list",
                method: "get",
                params: {
                    ticket: data.ticket,
                    env: env,
                },
            });

            this.goodList = list.data.data.list || [];
            console.log(list, list.data.data.list);
        },
        go(data) {
            window.open(data.pc_url);
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
.good-list {
    display: flex;
    flex-wrap: wrap;
    height: 1200px;
}

.card {
    width: 255px;
    height: 360px;
    margin-left: 10px;
    margin-bottom: 10px;
}
.card .image {
    height: 255px;
    width: 255px;
}
.card-info {
    display: inline-block;
    padding: 12px;
    font-size: 14px;
    color: #303133;
    vertical-align: top;
}
.bottom-wrap {
    color: #fd503e;
    font-weight: 500;
}
.price {
    font-size: 19px;
}
.sales-volume {
    font-size: 14px;
}
.name {
    width: 231px;
    font-weight: 500;
    margin-top: 4px;
    line-height: 22px;
    font-size: 17px;
    color: #1f1f1f;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
