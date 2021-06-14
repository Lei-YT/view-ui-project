<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$Notice.config({
      top: 50,
      duration: 3,
    });
    console.log(
      `%c 残联 %c ${this.version} %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  },
  methods: {},
};
</script>

<style>
[v-cloak] {
  display: none;
}

div.ivu-table-wrapper {
  position: relative;
  border: 1px solid #eee;
  border-bottom: 0;
  border-right: 0;
}
div.ivu-table-border th {
  border-right: 1px solid #eee;
}
div.ivu-table td,
div.ivu-table th {
  border-bottom: 1px solid #eee;
}
div.ivu-table th {
  background-color: #fcfcfc;
  color: #999;
}
div.ivu-table-border td,
div.ivu-table-border th {
  border-right: 1px solid #eee;
}
div.ivu-table:after {
  background-color: #eee;
}
div.ivu-table:before {
  background-color: #eee;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.breadcrumb-buttons-bar {
  position: fixed;
  top: 53px;
  right: 20px;
}
.top-tools {
  position: fixed;
  top: 53px;
  right: 20px;
}
.cursor,
.shubiao {
  cursor: pointer;
}
.move {
  cursor: move;
}

.action-list-link p {
  padding: 5px 0;
  color: #2d8cf0;
  font-size: 14px;
}
.action-list-link p:hover {
  color: #000;
}
.span-text-bar {
  background-color: #eee;
  border-radius: 3px;
  color: #777;
  height: 24px;
}

.dom-tree-wrap {
  padding-top: 10px;
  position: relative;
}
.dom-tree-wrap:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0px;
  width: 20px;
  height: 10px;
  border-style: none none none solid;
  border-width: 1px;
  border-color: #ccc;
  /* background-color: #eee; */
}

.dom-tree-wrap div.dom-tree-ul,
.dom-tree-wrap div.dom-tree-ul div.dom-tree-ul {
  margin: 0;
  padding: 0 0 0 20px;
}

.dom-tree-wrap div.dom-tree-ul div.dom-tree-li {
  list-style: none;
  position: relative;
}

.dom-tree-wrap div.dom-tree-ul div.dom-tree-li:before {
  position: absolute;
  content: "";
  top: -1px;
  left: -20px;
  width: 20px;
  height: 16px;
  border-style: none none solid solid;
  border-width: 1px;
  border-color: #ccc;
}

.dom-tree-wrap div.dom-tree-ul div.dom-tree-li:not(:last-child):after {
  position: absolute;
  content: "";
  top: -3px;
  left: -20px;
  bottom: -3px;
  width: 20px;
  border-style: none none none solid;
  border-width: 1px;
  border-color: #ccc;
}

.blue {
  color: #2d8cf0;
}

.green {
  color: #19be6b;
}
.hui {
  color: #999;
}

.b-tree {
  /* border-left:#ccc 0.5px solid; */
  padding: 5px 0 0 20px;
  position: relative;
}
.b-tree:before {
  position: absolute;
  content: "";
  top: 9px;
  left: -1px;
  width: 13px;
  height: 16px;
  border-style: solid none none none;
  border-width: 1px;
  border-color: #ccc;
  /* background-color: #eee; */
}
.b-tree:after {
  position: absolute;
  content: "";
  top: 9px;
  left: 2px;
  bottom: 7px;
  width: 10px;
  border-style: none solid none none;
  border-width: 1px;
  border-color: #ccc;
  /* background-color: #eee; */
}
.b-tree-item {
  padding: 0 0 8px 0;
}

ul.ivu-menu-light.ivu-menu-vertical
  li.ivu-menu-item-active.ivu-menu-item-selected {
  background-color: #eee;
}
/* ul.ivu-menu-vertical li.ivu-menu-item,
ul.ivu-menu-vertical li.ivu-menu-submenu-title{
  padding:14px 24px

} */

.ivu-table-tbody tr td.vertical-align {
  vertical-align: top;
}
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
