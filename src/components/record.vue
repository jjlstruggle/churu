<template>
  <div class="card">
    <div class="card-head">
      <div
        :style="{
          color: '#F87023',
        }"
      >
        {{ status }}
      </div>
      <button
        class="btn"
        @click="
          if (detail) {
            detail();
          }
        "
      >
        详情 >
      </button>
    </div>
    <div class="card-item">
      <div>进校人员姓名</div>
      <div>{{ name }}</div>
    </div>
    <div class="card-item">
      <div>进校人员手机号</div>
      <div>{{ phone }}</div>
    </div>
    <div class="card-item">
      <div>进校时间</div>
      <div>{{ inTime }}</div>
    </div>
    <div class="card-item">
      <div>预计出校时间</div>
      <div>{{ outTime }}</div>
    </div>
    <span class="divider"></span>
    <div
      style="display: flex; align-items: center; justify-content: space-around"
      v-if="page === 'wait-write'"
    >
      <button
        class="btn"
        @click="
          if (process) {
            process();
          }
        "
        style="background-color: #ffc94d"
      >
        流程
      </button>
      <button
        class="btn"
        @click="
          if (edit) {
            edit();
          }
        "
      >
        修改
      </button>
      <button
        @click="
          if (_delete) {
            _delete();
          }
        "
        class="btn"
      >
        删除
      </button>
    </div>
    <div
      style="display: flex; align-items: center; justify-content: space-around"
      v-if="page === 'wait-approval'"
    >
      <button
        class="btn"
        @click="
          if (approval) {
            approval();
          }
        "
      >
        审批
      </button>
      <button
        class="btn"
        @click="
          if (process) {
            process();
          }
        "
      >
        流程
      </button>
    </div>
    <div
      style="display: flex; align-items: center; justify-content: space-around"
      v-else-if="page === 'success' || page === 'fail'"
    >
      <button
        class="btn"
        @click="
          if (process) {
            process();
          }
        "
      >
        流程
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    page: String,
    status: String,
    name: String,
    phone: String,
    inTime: String,
    outTime: String,
    detail: Function,
    process: Function,
    edit: Function,
    _delete: Function,
    approval: Function,
  },
};
</script>
<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  margin: 15px 0;
}
.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  width: 100;
  font-size: 36px !important;
}

.card-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  color: #9ca0a4;
}
.btn {
  border: 0;
  outline: none;
  padding: 8px 27px;
  margin: 0 8px;
  font-weight: 600;
  color: #ffc94d;
  background-color: white;
}
</style>
