import axios from "axios";

export const postFillTable = async (info) => {
  let p = await axios.post("http://172.20.2.139:50051/FillTable", info);
  return p.data;
};

export const getUrl = async (info) => {
  let p = await axios.post("http://172.20.2.139:50051/Upload", info);
  return p.data;
};
