const mock = require("mockjs");
mock.mock("/FillTable", "post", () => ({
  state: {
    status: 200,
    msg: "操作成功",
  },
  data: null,
}));

mock.mock("/Upload", "post", () => ({
  state: {
    status: 200,
    msg: "操作成功",
  },
  data: {
    fileurl: "url",
  },
}));
