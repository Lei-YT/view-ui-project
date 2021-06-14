const Mixin = {

    data() {
        return {
            apiUrl: window.apiUrl
        }
    },

    computed: {

        version() {
            return 'V' + ' ' + this.$store.state.version
        },
        // token() {
        //     return this.$store.state.token
        // },
        // userName() {
        //     return this.$store.state.userName
        // }
    },

    methods: {
        _M(msg) {
            this.$Message.info(msg);
        },
        _N(msg, title) {
            this.$Notice.warning({
                title: title ? title : '温馨提示',
                desc: msg
            });
        },
        _Model(msg, title) {
            this.$Modal.success({
                title: title ? title : '温馨提示',
                content: msg
            });
        },
        toLink(name) {
            this.$router.push({ name: name, query: { r: Math.random() } })
        },
        toLinkParams(params) {
            params.query.r = Math.random()
            this.$router.push(params)
        },
        back() {
            this.$router.go(-1)
        },
        openWindow(params) {
            const { href } = this.$router.resolve(params)
            window.open(href, '_blank')
        }
    },
    filters: {

    }
}


export default Mixin;
