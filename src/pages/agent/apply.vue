<template>
  <div class="banner" ref="banner">
    <img src="../../assets/banner_fill.png" alt="" />
  </div>
  <div class="content" ref="content">
    <div class="item name">
      <div class="word">经办人</div>
      <div>
        <input v-model="info.XM" placeholder="待填写" />
      </div>
    </div>
    <div class="item number">
      <div class="word">统一认证码</div>
      <div>
        <input v-model="info.ZGH" placeholder="待填写" />
      </div>
    </div>
    <div class="item department">
      <div class="word">部门信息</div>
      <div>
        <input v-model="info.Department" placeholder="待填写" />
      </div>
    </div>
    <div class="item exname">
      <div class="word">进校人员信息</div>
      <div>
        <input v-model="info.Exname" placeholder="待填写" />
      </div>
    </div>
    <div class="item phone">
      <div class="word">进校人员手机号</div>
      <div>
        <input v-model="info.Phone_no" placeholder="待填写" />
      </div>
    </div>
    <div class="item cause">
      <div class="word">入校事由</div>
      <div>
        <input v-model="info.Cause" placeholder="待填写" />
      </div>
    </div>
    <div class="item in">
      <div class="word">预计进校时间</div>
      <div @click="handleEnter">
        {{ info.LXRQ.d }}, {{ info.LXRQ.h }}, {{ info.LXRQ.m }}
      </div>
    </div>
    <div class="item out">
      <div class="word">预计出校时间</div>
      <div @click="handleLeave">
        {{ info.NXRQ.d }}, {{ info.NXRQ.h }}, {{ info.NXRQ.m }}
      </div>
    </div>
    <div class="item note">
      <div class="word">备注</div>
      <div>
        <input v-model="info.Note" placeholder="待填写" />
      </div>
    </div>
    <div class="subdiv">
      <button class="sub" @click="subinfo">{{ sub }}</button>
    </div>
  </div>
  <el-drawer
    v-model="drawer"
    direction="btt"
    custom-class="drawer"
    size="50%"
    :with-header="false"
    :destroy-on-close="true"
  >
    <div style="height: 100%; width: 100%; display: flex">
      <Scroll
        :item="date.list[0]"
        :default_select="default_select1"
        :getVal="getVal"
        :useDefault="true"
      />
      <Scroll
        :item="date.list[1]"
        :default_select="default_select2"
        :getVal="getVal2"
        :useDefault="true"
      />
      <Scroll
        :item="date.list[2]"
        :default_select="default_select3"
        :getVal="getVal3"
        :useDefault="true"
      />
    </div>
  </el-drawer>
</template>
<script>
import { ref, reactive, onMounted } from "vue";

import date from "../../utils/date";
import dayjs from "dayjs";
let hour = dayjs().hour();
let min = dayjs().minute();
import axios from "axios";
export default {
  setup() {
    let banner = ref(null);
    let content = ref(null);
    let sub = ref("提交申请");
    let drawer = ref(false);
    let default_select1 = date.list[0].indexOf(date.curDate);
    let default_select2 = date.list[1].indexOf(hour + "时");
    let default_select3 = date.list[2].indexOf(min + "分");
    let info = reactive({
      XM: "",
      ZGH: "",
      Department: "",
      Exname: "",
      Phone_no: "",
      Cause: "",
      LXRQ: { d: date.curDate, h: hour + "时", m: min + "分" },
      NXRQ: { d: date.curDate, h: hour + "时", m: min + "分" },
      Note: "",
    });
    function subinfo() {
      axios({
        method: "POST",
        url: "http://172.20.2.139:50051/FillRequest",
        data: info,
      }).then((e) => {
        this.$message({
          message: "提交成功",
          type: "success",
        });
      });
    }
    let type = ref("");
    function getVal(val) {
      if (type.value === "enter") {
        info.LXRQ.d = val;
      } else {
        info.NXRQ.d = val;
      }
    }
    function getVal2(val) {
      if (type.value === "enter") {
        info.LXRQ.h = val;
      } else {
        info.NXRQ.h = val;
      }
    }
    function getVal3(val) {
      if (type.value === "enter") {
        info.LXRQ.m = val;
      } else {
        info.NXRQ.m = val;
      }
    }
    function handleEnter() {
      type.value = "enter";
      drawer.value = true;
    }
    function handleLeave() {
      type.value = "leave";
      drawer.value = true;
    }
    onMounted(() => {
      setTimeout(() => {
        let height = banner.value.clientHeight;
        console.dir(banner.value);
        let boxheight = document.querySelector("body").clientHeight / 2 + "px";
        console.log(boxheight, height);
        content.value.style.height = boxheight;
        content.value.style.top = height + 20 + "px";
      }, 100);
    });

    return {
      info,
      sub,
      subinfo,
      drawer,
      default_select1,
      default_select2,
      default_select3,
      type,
      getVal,
      date,
      getVal2,
      getVal3,
      handleEnter,
      handleLeave,
      banner,
      content,
    };
  },
};
</script>

<style scoped>
/* 头部 */
.banner {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner img {
  width: 90vw;
}
.content {
  margin: 0 auto;
  width: 90vw;
  position: absolute;
  left: 0;
  right: 0;
}
.content .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  margin: 20px;
  color: #6b6b6b;
  font-weight: 500;
  font-size: 1.2rem;
}
.content .item input {
  text-align: end;
  height: 100%;
  width: 40vw;
  border: none;
  color: #6b6b6b;
  font-size: 1.2rem;
}

.subdiv {
  margin-top: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub {
  width: 75vw;
  height: 8vh;
  background-color: #ffc94d;
  border-radius: 50px;
  border: none;
  color: white;
  font-size: 1.3rem;
}

.word {
  font-size: small;
}
</style>
