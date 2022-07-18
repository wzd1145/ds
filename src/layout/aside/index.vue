<template>
  <el-menu
    default-active="2"
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo"
    unique-opened
    router
  >
    <el-sub-menu :index="item.desc" v-for="(item, i) in list.value" :key="i">
      <template #title>
        <el-button
          style="border: none; background-color: none; padding: 0; color: black"
          :icon="item.icon"
          size="small"
        ></el-button>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item-group v-for="(menu, index) in item.child" :key="index">
        <el-menu-item :index="menu.frontpath">
          <el-button
            style="
              border: none;
              background-color: none;
              padding: 0;
              color: black;
            "
            :icon="menu.icon"
            size="small"
          ></el-button>
          {{ menu.name }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { getinfo } from '../../api/user'
import { reactive } from 'vue'
const list = reactive({})
const apiinfo = async () => {
  await getinfo().then((res) => {
    list.value = res.data.menus
    // console.log(list.value)
  })
}
apiinfo()
</script>
<style lang="scss" scoped></style>
