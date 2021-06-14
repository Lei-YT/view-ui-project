import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    meta: {
        title: '残联'
    },
    component: (resolve) => require(['@/views/index.vue'], resolve)
}];
const router = new VueRouter({
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
