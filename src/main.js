import Vue from 'vue'
import App from './App.vue'
import Util from './libs/util';
import store from '@/store'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'flex.css'
import '@/plugins/axios'

Vue.use(ViewUI);
import mixins from '@/mixins'
Vue.mixin(mixins)
import lodash from 'lodash'
Vue.prototype._ = lodash

if (process.env.NODE_ENV === 'development') {
    require('@/mock')
}

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
