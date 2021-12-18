import { createApp } from "vue";
import router from "./router";
import "element-plus/dist/index.css";
import "./global.css";
import App from "./App.vue";
import Dialog from "./components/dialog.vue";
import Record from "./components/record.vue";
import Header from "./components/header.vue";
import Info from "./components/info.vue";
import Scroll from "./components/scroll.vue";
import Upload from "./components/upload.vue";
import * as ElIcon from "@element-plus/icons";

// mock here
import "./mock/audit";
import "./mock/laeder";

const transElIconName = (iconName) =>
  iconName.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase()).substring(1);

const app = createApp(App);

for (let iconName in ElIcon) {
  app.component(transElIconName(iconName), ElIcon[iconName]);
}

// 此处判断是经办人还是领到
sessionStorage.setItem("user",'leader')

app.component("Dialog", Dialog);
app.component("Record", Record);
app.component("Header", Header);
app.component("Info", Info);
app.component("Scroll", Scroll);
app.component("Upload", Upload);

app.use(router);
app.mount("#app");
