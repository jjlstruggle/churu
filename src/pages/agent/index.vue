<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #f7f7f7;
    "
  >
    <Header title="校外进出校" :canReturn="true"></Header>
    <router-link to="/apply">
      <div class="header2 header">
        <div class="midDiv">
          <img src="../../assets/pickers_icon_entrance.png" alt="" />
          <a class="declareWord">申报入口</a>
        </div>
      </div>
    </router-link>
    <div
      style="
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #f7f7f7;
      "
    >
      <div style="flex: 1" class="record-box">
        <div>审批记录({{ count }}条)</div>
        <template v-for="item of state.list">
          <Record
            :page="
              item.is_Registered
                ? item.status === 0
                  ? 'success'
                  : item.status === 1
                  ? 'wait-write'
                  : item.status === 4
                  ? 'wait-approval'
                  : 'fail'
                : 'wait-write'
            "
            :status="
              item.is_Registered
                ? item.status === 0
                  ? '审批通过'
                  : item.status === 1
                  ? '待填写'
                  : item.status === 4
                  ? '待审批'
                  : '未通过'
                : '待填写'
            "
            :name="item.exname"
            :phone="item.phone_no"
            :inTime="handle(item.lxrq)"
            :outTime="handle(item.nxrq)"
            :detail="
              () => {
                watchDetail(item.ryId);
              }
            "
            :edit="
              () => {
                edit(item.ryId);
              }
            "
            :process="
              () => {
                watchProcess(ZGH, item.ryId, item.phone_no);
              }
            "
            :_delete="
              () => {
                deleteRequest(ZGH, item.ryId);
              }
            "
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, reactive } from "vue";
import router from "../../router";
import classname from "../../utils/classname";
import { getAgentAllMenu, deleteRy } from "../../apis/agent.js";
import dayjs from "dayjs";
export default {
  props: ["ZGH"],
  setup(props) {
    const { ZGH } = props;
    //所有审批数据
    function watchProcess(ZGH, ID, Phone_no) {
      router.push(`/flow`);
    }
    function watchDetail(Ryid, ZGH, Phone_no) {
      router.push(`/audit?Ryid=${Ryid}&ZGH=${ZGH}&Phone=${Phone_no}`);
    }
    function edit() {
      router.push(`/collect`);
    }
    function deleteRequest(ZGH, RyId) {
      deleteRy(ZGH, RyId);
    }
    let page = ref("wait-approval");
    let count = ref(0);
    let state = reactive({
      list: [],
    });
    onMounted(async () => {
      const p = await getAgentAllMenu();
      state.list = p.data;
      count.value = state.list.length;
    });
    function handle(time) {
      let $time = dayjs(time);
      return $time.year() + "-" + ($time.month() + 1) + "-" + $time.date();
    }
    return {
      page,
      count,
      state,
      classname,
      watchDetail,
      watchProcess,
      handle,
      edit,
      deleteRequest,
    };
  },
};
</script>
<style scoped>
/* 头部样式 */
.header2 {
  width: 100%;
  height: 11vh;
  background-color: #fafcf1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .midDiv {
  display: flex;
  align-items: center;
}
.header .midDiv img {
  width: 11vw;
  margin-right: 1rem;
}
.header .midDiv .declareWord {
  font-size: 2.3rem;
  color: #ffc94d;
  text-decoration: none;
}

.nav-box {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.nav-item {
  position: relative;
  flex: 0.5;
  text-align: center;
  padding: 30px 0;
  color: #aaa;
  transition: all 0.3s;
}
.nav-item.active {
  color: #009688;
}

.border {
  height: 5px;
  background-color: #009688;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.spacer {
  width: 2px;
  height: 42px;
  display: block;
  background-color: rgb(197, 197, 197);
}

.record-box {
  font-size: 21px;
}

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
  font-size: 36px !important;
  color: #ed9520;
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
  color: #fff;
}
</style>
