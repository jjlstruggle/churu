import axios from "axios";

export const leaderGetDetail = async (info) => {
  const p = await axios.post("http://172.20.2.139:50051/LeadercheckRequest", info);
  return p.data;
};

export const getDetail = async (info) => {
  const p = await axios.post("http://172.20.2.139:50051/checkRequest", info);
  return p.data;
};

export const check = async (info) => {
  const p = await axios.post("http://172.20.2.139:50051/LeaderCheckOver", info);
  console.log(p);
  return p.data;
};

export const CheckOver = async (info) => {
  const p = await axios.post("http://172.20.2.139:50051/CheckOver", info);
  return p.data;
};
