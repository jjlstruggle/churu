<template>
  <div class="header">
    <el-icon
      v-if="canReturn"
      @click="
        if (click) {
          click();
        }
      "
      ><arrow-left-bold
    /></el-icon>

    <div v-if="!canReturn" />
    <div>{{ title }}</div>
    <div :style="{ visibility: 'hidden' }">
      <el-icon
        v-if="canReturn"
        @click="
          if (click) {
            click();
          }
        "
        ><arrow-left-bold
      /></el-icon>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    canReturn: Boolean,
    title: String,
    click: Function,
  },
};
</script>
<style scoped>
.header {
  background-color: #ffc94d;
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
</style>
