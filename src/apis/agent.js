import axios from "axios";

export const getAgentAllMenu = async (ZGH) => {
  let p = await axios.post("http://172.20.2.139:50051/AllMenu", { ZGH });
  return p.data;
};
export const getAgentMenu = async (ZGH) => {
  let d = await axios.get(`http://172.20.2.139:50051/Menu?ZGH=${ZGH}`);
  return d.data;
};
export const CheckInfoStatus = async (ZGH, ID, Phone_no) => {
  let p = await axios.post("http://172.20.2.139:50051/CheckInfoStatus", {
    ZGH,
    ID,
    Phone_no,
  });
  return p.data;
};
export const getDetail = async (RyId, ZGH, Phone_no) => {
  const p = await axios.post("http://172.20.2.139:50051/checkRequest", {
    RyId,
    ZGH,
    Phone_no,
  });
  return p.data;
};

export const check = async (ID) => {
  const p = await axios.post("http://172.20.2.139:50051/LeaderCheckOver", {
    ID,
  });
  return p.data;
};

export const deleteRy = async (ZGH, RyId) => {
  const p = await axios.post("http://172.20.2.139:50051/DeleteRy", {
    ZGH,
    RyId,
  });
  return p.data;
};
