import Vue from 'vue'
import Vuex from 'vuex'
import config from '../../package.json'
Vue.use(Vuex)

var COPY_DATA = localStorage.getItem('COPY_DATA');
var MENU_DATA = localStorage.getItem('MENU_DATA');
export default new Vuex.Store({
    state: {
        projectName: config.name,
        version: config.version,
        // login: Cookies.get('IS_LOGIN') || '',
        // token: Cookies.get('TOKEN') || '',
        // userName: Cookies.get('USER_NAME') || '',
        // side: (Cookies.get('SIDE') == 'true') ? true : false,
        menuList: MENU_DATA ? JSON.parse(MENU_DATA) : [],
        copyData: COPY_DATA ? JSON.parse(COPY_DATA) : [],
    },
    mutations: {
        // login(state, data) {
        //     Cookies.set('IS_LOGIN', data);
        //     state.login = data;
        // },
        // token(state, data) {
        //     Cookies.set('TOKEN', data);
        //     state.token = data;
        // },
        // userName(state, data) {
        //     Cookies.set('USER_NAME', data);
        //     state.userName = data;
        // },
        copyData(state, data) {
            localStorage.setItem('COPY_DATA', JSON.stringify(data))
            state.copyData = data;
        },
        menuList(state, data) {
            localStorage.setItem('MENU_DATA', JSON.stringify(data))
            state.menuList = data;
        },
    },
    actions: {},
    modules: {}
})
