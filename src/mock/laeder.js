const mock = require("mockjs");
mock.mock("/LeaderMenu", "post", () => ({
  result: {
    status: "200",
    msg: "查看成功",
  },
  list: [
    {
      ryId: "1001",
      exname: "吉良吉影",
      phone_no: "15922761230",
      lxrq: "2021-10-21",
      nxrq: "2021-10-22",
      head_Status: "1",
      head_Remark: "无",
      is_Finished: false,
    },
    {
      ryId: "1002",
      exname: "吉良",
      phone_no: "14922761230",
      lxrq: "2019-10-21",
      NXRQ: "2019-10-22",
      head_Status: "1",
      head_Remark: "无",
      is_Finished: false,
    },
  ],
}));
