/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-03-14 11:14:25
 * @LastEditTime: 2023-10-13 17:22:05
 * @LastEditors: YangJianFei
 * @FilePath: \@mozhou-tech/vue3-baidumap\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import BaiduMap from 'c'
import Router from './router';
import '@/assets/css/common.scss';
import './util/AreaRestriction_min';

const app = createApp(App);

app.use(BaiduMap, {
    // v: '2.0',
    ak: 'K4xNelJzfT0LC060TRGSOeEw8V18fB0n',
    // type: 'WebGL',
    baseUrl: 'https://api.map.baidu.com'
});
app.use(Router);
app.mount('#app');
