<template>
  <Header :canReturn="true" title="进校人员信息收集"></Header>
  <h1 class="title">基本信息</h1>
  <div class="table">
    <div class="info-box">
      <div class="table-head">
        <span style="color: #c63f47; margin: 0 3px">*</span>姓名
      </div>
      <input
        class="info base-font"
        v-model="info.name"
        placeholder="请输入姓名"
      />
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="table-head">
        <span style="color: #c63f47; margin: 0 3px">*</span>手机号码
      </div>
      <input
        class="info base-font"
        v-model="info.phone"
        placeholder="请输入手机号"
      />
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="table-head">
        <span style="color: #c63f47; margin: 0 3px">*</span>证件类型
      </div>
      <div class="flex-side">
        <div>{{ info.certificate }}</div>
        <div
          @click="
            drawer = true;
            state.list = ['身份证'];
          "
          class="wait-select"
        >
          待选择<el-icon><arrow-right /></el-icon>
        </div>
      </div>
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="table-head">
        <span style="color: #c63f47; margin: 0 3px">*</span>证件号码
      </div>
      <input
        class="info base-font"
        v-model="info.certificateCode"
        placeholder="请输入您的证件号码"
      />
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="table-head">
        <span style="color: #c63f47; margin: 0 3px">*</span>车牌号
      </div>
      <input
        class="info base-font"
        v-model="info.license"
        placeholder="请输入您的车牌号码"
      />
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="flex-side">
        <div class="box2">
          <span style="color: #c63f47; margin: 0 3px">*</span
          >14天内是否接触中高风险地区旅居史
        </div>
        <div
          @click="
            () => {
              state.list = ['是', '否'];
              type = 'history';
              handleClick(state.list);
              drawer = true;
            }
          "
          class="wait-select"
        >
          {{ info.history }}<el-icon><arrow-right /></el-icon>
        </div>
      </div>
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="flex-side">
        <div class="box2">
          <span style="color: #c63f47; margin: 0 3px">*</span
          >14天内是否接触中高风险地区旅居史人员
        </div>
        <div
          @click="
            () => {
              state.list = ['是', '否'];
              type = 'people';
              handleClick(state.list);
              drawer = true;
            }
          "
          class="wait-select"
        >
          {{ info.people }}<el-icon><arrow-right /></el-icon>
        </div>
      </div>
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="flex-side">
        <div class="box2">
          <span style="color: #c63f47; margin: 0 3px">*</span>今日体温是否正常
        </div>
        <div
          @click="
            () => {
              state.list = ['是', '否'];
              type = 'temperature';
              handleClick(state.list);
              drawer = true;
            }
          "
          class="wait-select"
        >
          {{ info.temperature }}<el-icon><arrow-right /></el-icon>
        </div>
      </div>
    </div>
    <span class="divider"></span>
    <div class="info-box">
      <div class="flex-side">
        <div class="box2">
          <span style="color: #c63f47; margin: 0 3px">*</span
          >今日是否有与新冠病毒有关症状
        </div>
        <div
          @click="
            () => {
              state.list = ['是', '否'];
              type = 'symptoms';
              handleClick(state.list);
              drawer = true;
            }
          "
          class="wait-select"
        >
          {{ info.symptoms }}<el-icon><arrow-right /></el-icon>
        </div>
      </div>
    </div>
    <span class="divider"></span>
  </div>
  <h1 class="title">附件</h1>
  <div class="f_box">
    <div class="base-font f_title">渝康码</div>
    <div class="fujian">
      <Upload :getFile="getFile1" />
      <div v-if="!info.file[0]">上传图片</div>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <span class="_divider"></span>
  </div>
  <div>
    <div class="base-font f_title">行程码</div>
    <div class="fujian">
      <Upload :getFile="getFile2" />
      <div v-if="!info.file[1]">上传图片</div>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <span class="_divider"></span>
  </div>
  <div>
    <div class="base-font f_title">新冠疫苗接种信息</div>
    <div class="fujian">
      <Upload :getFile="getFile3" />
      <div v-if="!info.file[2]">上传图片</div>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <span class="_divider"></span>
  </div>
  <div>
    <div class="base-font f_title">核酸检测报告</div>
    <div class="fujian">
      <Upload :getFile="getFile4" />
      <div v-if="!info.file[3]">上传图片</div>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <span class="_divider"></span>
  </div>
  <div class="fujian">
    <Upload :getFile="getFile5" />
    <div v-if="!info.file[4]">上传其他相关图片</div>
  </div>
  <h1 class="title">附件</h1>
  <div class="f_box box3">
    <div class="info-box">
      <div class="table-head">其他说明</div>
      <input
        class="info base-font"
        v-model="info.others"
        placeholder="填写其他需要说明的情况"
      />
    </div>
  </div>
  <div
    style="display: flex; justify-content: center; position: relative; top: 2vh"
  >
    <button class="btn" @click="handlePost">完成并提交</button>
  </div>
  <el-drawer
    v-model="drawer"
    direction="btt"
    custom-class="drawer"
    size="50%"
    :with-header="false"
    :destroy-on-close="true"
  >
    <Scroll
      :item="state.list"
      :setHistory="setHistory"
      :setPeople="setPeople"
      :setTemperature="setTemperature"
      :setSymptoms="setSymptoms"
      :type="type"
      :default_select="default_select"
    />
  </el-drawer>
</template>
<script>
import { ref, reactive } from "vue";
import Upload from "../../components/upload.vue";
import { postFillTable, getUrl } from "../../apis/collect";
export default {
  props: ["RyId"],
  setup(props) {
    const { RyId } = props;
    let drawer = ref(false);
    let state = reactive({ list: ["是", "否"] });
    let type = ref(null);
    let info = reactive({
      name: "",
      phone: "",
      certificate: "身份证",
      certificateCode: "",
      license: "",
      history: "待选择",
      people: "待选择",
      temperature: "待选择",
      symptoms: "待选择",
      others: "",
      file: [],
    });
    let default_select = ref(0);
    const setHistory = (val) => (info.history = val);
    const setPeople = (val) => (info.people = val);
    const setTemperature = (val) => (info.temperature = val);
    const setSymptoms = (val) => (info.symptoms = val);
    const handleClick = (list) => {
      if (type.value === "sympoms") {
        for (let i = 0; i < list.length; i++) {
          if (list[i] === info.symptoms) {
            default_select.value = i + 1;
            break;
          }
          if (list[i] !== info.symptoms && i == list.length - 1) {
            default_select.value = 0;
          }
        }
      } else if (type.value === "temperature") {
        for (let i = 0; i < list.length; i++) {
          if (list[i] === info.temperature) {
            default_select.value = i + 1;
            break;
          }
          if (list[i] !== info.temperature && i == list.length - 1) {
            default_select.value = 0;
          }
        }
      } else if (type.value === "history") {
        for (let i = 0; i < list.length; i++) {
          if (list[i] === info.history) {
            default_select.value = i + 1;
            break;
          }
          if (list[i] !== info.history && i == list.length - 1) {
            default_select.value = 0;
          }
        }
      } else if (type.value === "people") {
        for (let i = 0; i < list.length; i++) {
          console.log(list[i], info.people);
          if (list[i] === info.people) {
            default_select.value = i + 1;
            break;
          }
          if (list[i] !== info.people && i == list.length - 1) {
            default_select.value = 0;
          }
        }
      }
    };
    const getFile1 = (file) => (info.file[0] = file);

    const getFile2 = (file) => (info.file[1] = file);
    const getFile3 = (file) => (info.file[2] = file);
    const getFile4 = (file) => (info.file[3] = file);
    const getFile5 = (file) => (info.file[4] = file);

    const handlePost = async () => {
      const p1 = await getUrl({ RyId, Photo: info.file[0], I: "0" });
      const p2 = await getUrl({ RyId, Photo: info.file[1], I: "1" });
      const p3 = await getUrl({ RyId, Photo: info.file[2], I: "2" });
      const p4 = await getUrl({ RyId, Photo: info.file[3], I: "3" });
      const p5 = await getUrl({ RyId, Photo: info.file[4], I: "4" });

      let pInfo = {
        Exname: info.name,
        Phone_no: info.phone,
        type: 1,
        TypeNumber: info.certificateCode,
        CarNumber: info.license,
        Is_high_area: info.history ? true : false,
        Is_high_people: info.people,
        Is_tem_ok: info.temperature,
        Is_sick: info.symptoms,
        Path: [
          p1.data.fileurl,
          p2.data.fileurl,
          p3.data.fileurl,
          p4.data.fileurl,
          p5.data.fileurl,
        ],
        Enote: info.others,
      };
      await postFillTable(pInfo);
    };
    return {
      drawer,
      info,
      state,
      type,
      default_select,
      setHistory,
      setPeople,
      setTemperature,
      setSymptoms,
      handleClick,
      handlePost,
      getFile1,
      getFile2,
      getFile3,
      getFile4,
      getFile5,
    };
  },
  components: { Upload },
};
</script>
<style scoped>
.f_box {
  padding-top: 30px;
}
.title {
  font-size: 48px;
  padding: 20px;
  background-color: #f7f7f7;
}

.table {
  background-color: #fff;
  padding: 0 20px;
}

.table-head {
  padding: 12px 0;
}

.info {
  margin: 12px 0;
  border: 0;
  outline: none;
  padding-left: 12px;
}

.box2 {
  font-size: 24px;
}

.wait-select {
  color: #219688;
  display: flex;
  align-items: center;
  font-size: 24px;
}

.fujian {
  display: flex;
  align-items: center;
  color: #219688;
  font-size: 27px;
}

.f_title {
  margin-left: 27px;
}

._divider {
  height: 1px;
  width: 90%;
  background-color: #bbb;
  margin: 15px 0;
}
.box3 {
  padding-left: 27px;
  border-bottom: 1px solid #bbb;
}
.btn {
  border: 0;
  outline: none;
  padding: 16px 32px;
  margin: 32px 8px;
  font-weight: 600;
  color: #fff;
  background-color: #219688;
}
</style>
