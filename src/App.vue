<template>
    <div class="container">
        <code-area>
        </code-area>
        <module-list>

        </module-list>

    </div>
</template>

<script>
import CodeArea from "./components/CodeArea.vue";
import ModuleList from "./components/ModuleList.vue";
export default {
    name: "App",
    components: {
        CodeArea,
        ModuleList,
    },
};
</script>

<style>
#app {
    padding: 12px;
    display: flex;
    justify-content: center;
}
.container {
    max-width: 1200px;
}
</style>