<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #f7f7f7;
    "
  >
    <div class="nav-box">
      <div
        :class="classname('nav-item', page === 'wait-approval' ? 'active' : '')"
        @click="
          () => {
            page = 'wait-approval';
          }
        "
      >
        待审批
        <span class="border" v-if="page === 'wait-approval'" />
      </div>
      <span class="spacer"></span>
      <div
        :class="classname('nav-item', page === 'hanlde-leader' ? 'active' : '')"
        @click="
          () => {
            page = 'hanlde-leader';
          }
        "
      >
        全部审批
        <span class="border" v-if="page === 'hanlde-leader'" />
      </div>
    </div>
    <div style="flex: 1" class="record-box">
      <div>
        {{ page === "wait-approval" ? "待" : "" }}审批记录({{ count }}条)
      </div>
      <template v-if="page === 'hanlde-leader'" v-for="item of state.list">
        <Record
          :page="page"
          :status="
            item.head_Status === 0
              ? '通过'
              : item.head_Status === 1
              ? '驳回'
              : '未通过'
          "
          :color="item.head_Status === 1 ? '#219688' : '#ff6200'"
          :name="item.exname"
          :phone="item.phone_no"
          :inTime="item.lxrq"
          :outTime="item.nxrq"
          :detail="
            () => {
              watchDetail(item.ryId);
            }
          "
        />
      </template>
      <template v-if="page === 'wait-approval'" v-for="item of state.wait">
        <Record
          :page="page"
          status="待审批"
          :name="item.exname"
          :phone="item.phone_no"
          :inTime="item.lxrq"
          :outTime="item.nxrq"
        />
      </template>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, reactive, watch } from "vue";
import router from "../../router";
import classname from "../../utils/classname";
import { getLeaderMenu } from "../../apis/leader.js";
export default {
  props: ["ZGH"],
  setup(props) {
    const { ZGH } = props;
    function watchDetail(id) {
      router.push(`/audit?uid=${id}`);
    }
    let page = ref("wait-approval");
    let count = ref(0);
    watch(page, () => {
      if (page.value === "wait-approval") {
        count.value = state.wait.length;
      } else {
        count.value = state.list.length;
      }
    });
    let state = reactive({
      list: [],
      wait: [],
    });
    onMounted(async () => {
      const p = await getLeaderMenu(ZGH);
      state.wait = p.list.filter((el) => el.Head_status === 4);
      state.list = p.list;
      if (page.value === "wait-approval") {
        count.value = state.wait.length;
      } else {
        count.value = state.list.length;
      }
    });
    return {
      page,
      count,
      state,
      classname,
      watchDetail,
    };
  },
};
</script>
<style scoped>
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
  padding: 15px 30px;
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
