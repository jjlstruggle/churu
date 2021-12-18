const mock = require("mockjs");

mock.mock("/LeadercheckRequest", "post", () => ({
  result: {
    status: "200",
    msg: "审核界面成功",
  },
  data: {
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
    path: ["a", "b", "c", "d"],
    cause: "考试",
    lxrq: 564541121,
    nxrq: 156154511,
    xm: "王",
    link: "xxx",
    zgh: 166,
    department: "安发学院",
  },
}));

mock.mock("/LeaderCheckOver", "post", () => ({
  state: {
    status: "200",
    msg: "成功",
  },
  data: null,
}));
