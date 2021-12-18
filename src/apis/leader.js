import axios from "axios";

export const getLeaderMenu = async (ZGH) => {
  let p = await axios.post("http://172.20.2.139:50051/LeaderMenu", { ZGH });
  return p.data;
};
