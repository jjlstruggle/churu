import { createRouter, createWebHashHistory } from "vue-router";
import Audit from "../pages/audit";
import Collect from "../pages/collect";
import Leader from "../pages/leader";
import Agent from "../pages/agent/index";
import Apply from "../pages/agent/apply";
import flow from "../pages/agent/flow";
import approve from "../pages/agent/approve.vue";

const routes = [
  {
    path: "/audit",
    component: Audit,
    props: (route) => ({
      RyId: route.query.Ryid,
      Phone_no: route.query.Phone_no,
      ZGH: route.query.ZGH,
    }),
  },
  {
    path: "/collect",
    component: Collect,
    props: (route) => ({
      RyId: route.query.RyId,
    }),
  },
  {
    path: "/leader",
    component: Leader,
    props: (route) => ({
      ZGH: route.query.ZGH,
    }),
  },
  {
    path: "/apply",
    component: Apply,
  },
  {
    path: "/flow",
    component: flow,
    props: (route) => ({
      ZGH: route.query.ZGH,
      ID: route.query.ID,
      Phone_no: route.query.Phone_no,
    }),
  },
  {
    path: "/agent",
    component: Agent,
    props: (route) => ({
      ZGH: route.query.ZGH,
    }),
  },
  {
    path: "/approve",
    component: approve,
    props: (route) => ({
      RyId: route.query.RyId,
    }),
  },
];

export default createRouter({
  history: createWebHashHistory("./"),
  routes,
});
