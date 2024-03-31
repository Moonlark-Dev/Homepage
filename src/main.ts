import { createApp } from 'vue';
import App from './App.vue';

import { default as ElementPlus } from 'element-plus';
import 'element-plus/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);

app.use(ElementPlus as any);
app.mount('#app');
