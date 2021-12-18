<template>
  <Info
    :name="state.detail.info.exname"
    :phone="state.detail.info.phone_no"
    :reason="state.detail.cause"
    :inTime="state.detail.lxrq"
    :outTime="state.detail.nxrq"
    :note="state.detail.info.enote"
    :certificate="state.detail.info.type"
    :certificateCode="state.detail.info.typeNumber"
    :license="state.detail.info.carNumber"
    :hasHistory="state.detail.info.is_high_area ? '是' : '否'"
    :contact="state.detail.info.is_high_people ? '是' : '否'"
    :temperature="state.detail.info.is_tmp_ok ? '是' : '否'"
    :symptoms="state.detail.info.is_sick ? '是' : '否'"
    :attachment1="state.detail.path[0]"
    :attachment2="state.detail.path[1]"
    :attachment3="state.detail.path[2]"
    :attachment4="state.detail.path[3]"
    :instructions="state.detail.info.enote"
    :agent="state.detail.xm"
    :department="state.detail.department"
  />
  <div class="bottom flex-side content">
    <button
      class="btn"
      @click="
        type = 'access';
        dialogVisible = true;
      "
    >
      通 过
    </button>
    <button
      class="btn"
      @click="
        type = 'overrule';
        dialogVisible = true;
      "
    >
      驳 回
    </button>
    <button
      class="btn"
      @click="
        type = 'cancel';
        dialogVisible = true;
      "
    >
      终 止
    </button>
  </div>
  <Dialog
    :content="true"
    :type="type"
    :dialogVisible="dialogVisible"
    :onOk="handleOk"
  />
</template>
<script>
import { onMounted, ref, reactive } from "vue";
import { getDetail, check } from "../../apis/audit.js";
export default {
  props: ["RyId]"],
  setup(props) {
    const { RyId } = props;
    let dialogVisible = ref(false);
    let type = ref("access");
    let state = reactive({
      detail: {
        info: {
          type: 1,
          is_high_people: true,
          exname: "吉林",
          phone_no: "159",
          ryId: "a9999",
          is_high_area: true,
          enote: "无",
          carNumber: "川A",
          is_tmp_ok: true,
          typeNumber: "4210",
          is_sick: true,
        },
        path: ["", "", "", ""],
        cause: "考试",
        lxrq: 564541121,
        nxrq: 156154511,
        xm: "王",
        link: "xxx",
        zgh: 166,
        department: "安发学院",
      },
    });
    function handleOk(val) {
      check({
        RyId,
        Head_Remark: val,
        Choose: type.value === "access" ? 0 : type.value === "cancel" ? 1 : 2,
      });
      dialogVisible.value = false;
    }
    onMounted(async () => {
      const p = await getDetail();
    });
    return {
      dialogVisible,
      type,
      state,
      handleOk,
    };
  },
};
</script>
<style scoped>
.bottom {
  background-color: #f7f7f7;
  padding: 2vh 0;
}
.btn {
  height: 6vh;
  width: 33vw;
  color: #f97024;
  font-weight: 700;
  border: none;
  background-color: #ffffff;
}
</style>
