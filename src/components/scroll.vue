<template>
  <div class="box">
    <span class="line l1" :ref="setL1" />
    <span class="line l2" :ref="setL2" />
    <div
      class="list"
      :ref="setRef"
      :style="{
        transform: `translateY(${
          drag
            ? state.height - state.padding
            : default_height * -select - state.padding
        }px)`,
      }"
    >
      <div :class="select === 0 ? 'select' : 'default'" v-if="!useDefault">
        待选择
      </div>
      <template v-for="(i, index) in item">
        <div
          :class="
            useDefault
              ? select === index
                ? 'select'
                : 'default'
              : select === index + 1
              ? 'select'
              : 'default'
          "
        >
          {{ i }}
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, reactive } from "vue";
export default {
  props: [
    "item",
    "default_select",
    "type",
    "setHistory",
    "setPeople",
    "setTemperature",
    "setSymptoms",
    "getVal",
    "useDefault",
  ],
  setup(props) {
    const {
      setHistory,
      setPeople,
      setTemperature,
      setSymptoms,
      type,
      item,
      getVal,
      useDefault,
    } = props;
    let select = ref(0);
    let default_height = ref(0);
    let drag = ref(false);
    let state = reactive({
      box: null,
      l1: null,
      l2: null,
      height: 0,
      padding: 0,
    });
    if (props.default_select !== undefined) {
      select.value = props.default_select;
    }
    onMounted(() => {
      const { box, l1, l2 } = state;
      let list = [...box.querySelectorAll(".list>div")];
      setTimeout(() => {
        state.padding =
          (state.box.clientHeight - list[0].clientHeight * list.length) / 2;
        default_height.value = l2.offsetTop - l1.offsetTop;
        list.forEach((el) => {
          el.style.height = default_height.value + "px";
        });
      });
      let $y, y, curSelect;
      let move = (e) => {
        let touch = e.targetTouches[0];
        let _y = touch.clientY;
        state.height = state.height + _y - y;
        y = _y;
        if (
          parseInt((y - $y) / default_height.value) >= 1 ||
          parseInt((y - $y) / default_height.value) <= -1
        ) {
          select.value = curSelect - parseInt((y - $y) / default_height.value);
        }
        select.value =
          select.value > list.length - 1
            ? list.length - 1
            : select.value < 0
            ? 0
            : select.value;
      };
      box.addEventListener("touchstart", function (e) {
        state.height = default_height.value * -select.value;
        curSelect = select.value;
        drag.value = true;
        let touch = e.targetTouches[0];
        y = $y = touch.clientY;
        document.ontouchmove = move;
      });
      box.addEventListener("touchend", function (e) {
        document.ontouchmove = null;
        select.value =
          select.value > list.length - 1
            ? list.length - 1
            : select.value < 0
            ? 0
            : select.value;
        curSelect = select.value;
        drag.value = false;
        if (getVal) {
          if (useDefault) {
            getVal(item[select.value]);
          } else {
            getVal(select.value === 0 ? "待选择" : item[select.value - 1]);
          }
        }
        if (type === "history") {
          setHistory(select.value === 0 ? "待选择" : item[select.value - 1]);
        } else if (type === "people") {
          setPeople(select.value === 0 ? "待选择" : item[select.value - 1]);
        } else if (type === "temperature") {
          setTemperature(
            select.value === 0 ? "待选择" : item[select.value - 1]
          );
        } else if (type === "symptoms") {
          setSymptoms(select.value === 0 ? "待选择" : item[select.value - 1]);
        }
      });
    });
    function setRef(el) {
      state.box = el;
    }
    function setL1(el) {
      state.l1 = el;
    }
    function setL2(el) {
      state.l2 = el;
    }
    return {
      select,
      state,
      drag,
      default_height,
      setRef,
      setL1,
      setL2,
      useDefault,
    };
  },
};
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.line {
  width: 100%;
  height: 1px;
  display: block;
  background-color: #bfbfbf;
  position: absolute;
  top: 40%;
}

.list {
  position: absolute;
  top: 40%;
  padding: 140px 0;
  width: 100%;
  transition: all 0.1s;
}

.list > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.l2 {
  top: calc(40% + 72px);
}

.default {
  opacity: 0.5;
}
</style>
