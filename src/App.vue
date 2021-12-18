<template>
  <!-- <Header canReturn title="test" /> -->
  <div class="body">
    <!-- <i class="back"></i> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
.header {
  background-color: #219688;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #fff;
  padding: 0 30px;
  align-items: center;
  padding-top: 30px;
  border-bottom: 1px solid var(--el-border-color-base);
}

.body {
  position: relative;
  background-color: transparent;
}

.back {
  position: absolute;
  top: 0;
  width: 100%;
  padding-bottom: 70%;
  background-color: #219688;
  border-radius: 0 0 50% 50%;
  z-index: -1;
}
</style>
