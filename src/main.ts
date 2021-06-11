import { createApp } from "vue";
import App from "./front/app/App.vue";
import "./front/app/index.css";
import { key, store } from "./front/app/store";

const app = createApp(App);
app.use(store, key);
app.mount("#app");
