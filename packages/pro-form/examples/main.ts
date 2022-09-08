import { createApp } from 'vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import ProForm from '@ant-design-vue/pro-form';
import App from './App.vue';
import router from './router';
import icons from './icons';

// functional
import 'ant-design-vue/es/result/style';
import 'ant-design-vue/es/button/style';
import 'ant-design-vue/es/message/style';
import 'ant-design-vue/dist/antd.dark.less';
import '@ant-design-vue/pro-layout/dist/style.css';
// TODO: 样式问题
import 'ant-design-vue/dist/antd.css';
import '@ant-design-vue/pro-form/style.less';

const app = createApp(App);

app.use(router);
app.use(ProLayout).use(PageContainer).use(ProForm).use(icons).mount('#app');
