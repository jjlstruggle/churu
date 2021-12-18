<template>
  <div class="banner">
    <img src="../../assets/banner_flow.png" alt="" />
  </div>
  <!-- 流程 -->
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activity"
        :key="index"
        :color="activity.color"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
    <div class="word">
      <div class="yellow">发起申报</div>
      <div :class="data.infoStatus.is_Registered ? 'yellow' : 'black'">
        等待提交
      </div>
      <div :class="data.infoStatus.is_Available ? 'yellow' : 'black'">
        等待审批
      </div>
      <div :class="data.infoStatus.Is_Finished ? 'yellow' : 'black'">
        等待审批
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import classname from "../../utils/classname";
import { CheckInfoStatus } from "../../apis/agent.js";
export default {
  props: ["ZGH", "ID", "Phone_no"],
  setup(props) {
    const { ZGH, ID, Phone_no } = props;
    let data = reactive({
      infoStatus: [],
      teacherInfo: [],
    });
    let activity = reactive([
      {
        content: "",
        timestamp: "",
        color: "#FFC94D",
      },
      {
        content: "进校人员填写信息",
        timestamp: "",
        color: "#AEAEAE",
      },
      {
        content: "",
        timestamp: "",
        color: "#AEAEAE",
      },
      {
        content: "单位领导",
        timestamp: "",
        color: "#AEAEAE",
      },
      {
        content: "申请成功",
        color: "#AEAEAE",
      },
    ]);
    onMounted(async () => {
      const p = await CheckInfoStatus(ZGH, ID, Phone_no);
      data.infoStatus = p.data.infoStatus;
      data.teacherInfo = p.data.teacherInfo;
      console.log(data.infoStatus.is_Available);
      activity[0].content = data.teacherInfo.xm;
      activity[2].content = data.teacherInfo.xm;
      activity[0].timestamp = p.data.createTime;
      activity[1].timestamp = data.infoStatus.registerTime;
      activity[2].timestamp = data.infoStatus.teacherHandlerTime;
      activity[3].timestamp = data.infoStatus.leaderHandlerTime;
      if (data.infoStatus.is_Registered) {
        activity[1].color = "#FFC94D";
      }
      if (data.infoStatus.is_Available) {
        activity[2].color = "#FFC94D";
      }
      if (data.infoStatus.Is_Finished) {
        activity[3].color = "#FFC94D";
      }
    });
    return {
      data,
      activity,
      classname,
    };
  },
};
</script>
<style scoped>
.yellow {
  color: #ffc94d;
}
.el-timeline-item__content {
  color: #aeaeae;
}
.block {
  color: #aeaeae;
  margin: 0 auto;
  margin-top: 4vh;
  width: 80vw;
  display: flex;
  justify-content: space-between;
}
.block .word {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35vh;
}
.el-timeline-item {
  position: relative;
  padding-bottom: 20px;
  height: 11vh;
}
</style>
