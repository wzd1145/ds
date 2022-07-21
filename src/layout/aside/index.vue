<template>
  <el-menu
    active-text-color="#559eff"
    class="el-menu-vertical-demo"
    :default-active="$router.path"
    text-color="#303133"
    unique-opened
    router
  >
    <el-sub-menu :index="item.id" v-for="(item, i) in list.value" :key="i">
      <template #title>
        <el-icon>
          <component :is="iconPath(item.icon)"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item-group v-for="(menu, index) in item.child" :key="index">
        <el-menu-item
          :index="menu.frontpath"
          @click="addtags(menu.name, menu.frontpath)"
        >
          <el-icon>
            <component :is="iconPath(menu.icon)"></component>
          </el-icon>
          {{ menu.name }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { iconPath } from './icon'
import { getinfo } from '../../api/user'
import { reactive } from 'vue'
const list = reactive({})
// const tags = reactive([])
const apiinfo = async () => {
  await getinfo().then((res) => {
    list.value = res.data.menus
    // console.log(list.value)
  })
}
apiinfo()
// const addtags = (name, path) => {
//   console.log(name, path)
//   tags.push({
//     name: name,
//     path: path
//   })
//   console.log(tags)
//   localStorage.setItem('tags', JSON.stringify(tags))
// }
</script>
<style lang="scss" scoped></style>
