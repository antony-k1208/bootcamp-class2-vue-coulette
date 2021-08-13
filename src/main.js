import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import ClButton from "./components/ClButton.vue";

const app = createApp(App);

app.component("ClButton", ClButton);
app.mount("#app");
