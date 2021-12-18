<template>
  <el-dialog
    v-model="dialogVisible"
    width="80%"
    top="27vh"
    :show-close="false"
    :close-on-click-modal="false"
    custom-class="dialog"
  >
    <div
      v-if="type === 'access'"
      class="dialog-header"
    >
      同意申请
    </div>
    <div
      v-else-if="type === 'overrule'"
      class="dialog-header"
    >
      驳回申请
    </div>
    <div v-else class="dialog-header" >
      终止申请
    </div>
    <div class="textarea" v-if="content || false">
      <el-input
        placeholder="填写审批意见"
        v-model="val"
        :rows="4"
        type="textarea"
      />
    </div>
    <div v-if="content && type === 'access'" class="remark">
      注：同意申请后将生成核查信息页面链接并自动发送短信通知进校人员
    </div>
    <div v-else-if="content && type === 'overrule'" class="remark">
      注：驳回申请状态，进校人员可修改信息再提交
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="
            if (onOk) {
              onOk(val);
            }
          "
          size="small"
          >确定</el-button
        >
        <el-button
          @click="
            if (onCancel) {
              onCancel(val);
            }
          "
          size="small"
          >取消</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    dialogVisible: Boolean,
    type: String,
    content: Boolean,
    onOk: Function,
    onCancel: Function,
  },
  setup() {
    let val = ref("");
    
    return {
      val,
    };
  },
};
</script>
<style scoped>
.remark {
  padding: 0 60px;
  font-size: 24px;
  color: #bfbfbf;
  font-family: PingFangSC-regular;
  color: rgba(191, 191, 191, 100);
}
.textarea {
  padding: 0 60px;
  margin-top: 48px;
  font-size: 24px;
}

.dialog-header {
  padding-top: 56px ;
  font-size: 1rem;
  color: #000000;
  text-align: center;
  font-weight: bold;
}
.dialog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dialog-footer .el-button{
  width: 50vw;
  height: 7vh;
  border:none;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
}
.dialog-footer .el-button:nth-child(2){
  color: #5B6A91;
}
</style>
<style>

.el-dialog.dialog > div:nth-child(1) {
  display: none;
}
.el-dialog.dialog > div:nth-child(2) {
  padding: 0;
}
</style>
