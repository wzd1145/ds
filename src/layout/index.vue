<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside style="width: 200px"><Aside></Aside></el-aside>
        <el-container>
          <el-main>
            <div style="width: 100%; height: 50px; background-color: red">
              <!-- <el-check-tag
                checked
                style="margin-right: 8px"
                v-for="(item, i) in list"
                :key="i"
                >{{ item }} <span> X </span></el-check-tag
              > -->
            </div>
            <Main></Main
          ></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './header'
import Aside from './aside'
import Main from './main'
// import { reactive } from 'vue'
// const list = reactive([JSON.parse(localStorage.getItem('tags'))])
// console.log(list)
</script>
<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 64px;
  background: #4338ca;
}
.el-aside {
  width: 250px;
}
.el-main {
  height: 92vh;
  overflow-x: hidden;
}
.el-main::-webkit-scrollbar {
  display: none;
}
</style>
