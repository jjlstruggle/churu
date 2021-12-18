<template>
  <div style="position: relative" class="box">
    <el-icon><plus /></el-icon>
    <input
      type="file"
      style="
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
      "
      :ref="setIpt"
    />
    <img :ref="setImg" />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  props: ["getFile"],
  setup({ getFile }) {
    const ipt = ref(null);
    const img = ref(null);
    const setIpt = (el) => (ipt.value = el);
    const setImg = (el) => (img.value = el);
    onMounted(() => {
      ipt.value.onchange = () => {
        const file = ipt.value.files[0];
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          img.value.src = fileReader.result;
        };
        let fileReader2 = new FileReader();
        fileReader2.readAsArrayBuffer(file);
        fileReader2.onload = () => getFile(fileReader2.result);
      };
    });
    return {
      getFile,
      setIpt,
      setImg,
    };
  },
};
</script>
<style scoped>
.box {
  width: 81px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #219688;
  border: 1px solid #219688;
  margin: 27px;
}

.box > img {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
