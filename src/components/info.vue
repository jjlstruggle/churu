<template>
  <div class="box">
    <div class="audit-box">
      <div class="title" style="margin-bottom: 20px">基本信息</div>
      <div v-if="user === 'agent'" class="item">
        <div class="flex-side">
          <div class="tab1">{{ end ? "核查信息页面" : "填报链接" }}</div>
          <div class="tab2">
            <span
              class="c"
              style="
                background-color: #ffc94d;
                color: #fff;
                border-radius: 20px;
              "
            >
              复制
            </span>
            https://www.baidu.com/
          </div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">进校人员姓名</div>
          <div class="tab2">{{ name }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">进校人员手机号</div>
          <div class="tab2">{{ phone }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">入校事由</div>
          <div class="tab2">{{ reason }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">预计进校时间</div>
          <div class="tab2">{{ inTime }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">预计出校时间</div>
          <div class="tab2">{{ outTime }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">备注</div>
          <div class="tab2">{{ note }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">证件类型</div>
          <div class="tab2">{{ certificate }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">证件号码</div>
          <div class="tab2">{{ certificateCode }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">车牌号</div>
          <div class="tab2">{{ license }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">14天内是否有中高风险地区旅居史</div>
          <div class="tab2">{{ hasHistory }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">14天内是否接触中高风险地区旅居史人员</div>
          <div class="tab2">{{ contact }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item">
        <div class="flex-side">
          <div class="tab1">今日提问是否正常</div>
          <div class="tab2">{{ temperature }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="item" style="margin-bottom: 10px">
        <div class="flex-side">
          <div class="tab1">今日是否有与新冠病毒有关症状</div>
          <div class="tab2">{{ symptoms }}</div>
        </div>
        <span class="divider"></span>
      </div>
      <div class="head" v-if="user === 'agent'">
        <button class="btn">
          {{ end ? "发送核查信息短信" : "发送填报链接短信" }}
        </button>
      </div>
      <div class="title">附件</div>
      <div class="annex">
        <div>渝康码</div>
        <img :src="attachment1" alt="" />
      </div>
      <span class="divider"></span>
      <div class="annex">
        <div>行程码</div>
        <img :src="attachment2" alt="" />
      </div>
      <span class="divider"></span>
      <div class="annex cascade">
        <div>新冠疫苗接种信息</div>
        <img :src="attachment3" alt="" />
      </div>
      <span class="divider"></span>
      <div class="annex cascade">
        <div>核酸检测报告</div>
        <img :src="attachment4" alt="" />
      </div>
      <span class="divider"></span>
      <div class="title">其他</div>
    </div>
    <div class="audit-box item">
      <div class="flex-side">
        <div class="tab1">其他说明</div>
        <div class="tab2">{{ instructions }}</div>
      </div>
      <span class="divider"></span>
      <div class="flex-side">
        <div class="tab1">经办人：</div>
        <div class="tab2">{{ agent }}</div>
      </div>
      <span class="divider"></span>
      <div class="flex-side">
        <div class="tab1">部门信息</div>
        <div class="tab2">{{ department }}</div>
      </div>
      <span class="divider"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "name",
    "phone",
    "reason",
    "inTime",
    "outTime",
    "note",
    "certificate",
    "certificateCode",
    "license",
    "hasHistory",
    "contact",
    "temperature",
    "symptoms",
    "attachment1",
    "attachment2",
    "attachment3",
    "attachment4",
    "instructions",
    "agent",
    "department",
    "user",
    "end",
  ],
};
</script>
<style scoped>
.box {
  color: #6b6b6b;
  font-weight: 700;
}

.title {
  font-size: 35px;
  background-color: #f7f7f7;
  padding: 0.5vh 15px;
  color: #888888;
  font-weight: 500;
}
.audit-box {
  background-color: #fff;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 10px;
}

.tab1 {
  font-size: 27px;
  color: #6b6b6b;
}

.tab2 {
  font-size: 27px;
  color: #6b6b6b;
}

.annex {
  font-size: 27px;
  display: flex;
  padding: 12px;
  position: relative;
  height: 16vh;
}

.annex.cascade {
  flex-direction: column;
}

.annex > img {
  width: 140px;
  height: 140px;
  position: absolute;
  left: 125px;
}

.annex.cascade > img {
  top: 48px;
}

.btn {
  border: 0;
  outline: none;
  padding: 16px 48px;
  margin: 0 8px;
  color: #fff;
  font-size: 40px;
  border-radius: 30px;
  background: url("../assets/btn_back.png") center no-repeat;
  background-size: 100%;
}

.head {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.c {
  padding: 1px 12px;
  text-align: center;
  margin: 0 3px;
}

.item {
  margin: 0 30px;
}
</style>
