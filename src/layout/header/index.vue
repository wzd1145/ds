<template>
  <div class="header">
    <div class="left">
      <div class="logo">
        <img class="iconimg" src="../../assets/ele.png" alt="" /> 积云编程
      </div>
      <span class="aaa">
        <el-icon size="28px"><Expand /></el-icon>
      </span>
      <span class="aaa"
        ><el-icon size="28px"><RefreshLeft /></el-icon
      ></span>
    </div>
    <div></div>
    <div class="right">
      <div class="tx">
        <el-avatar :src="menus.avatar" />
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ menus.username }}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from '@element-plus/icons-vue'
import { getinfo } from '../../api/user'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const menus = reactive({
  avatar: '',
  username: ''
})

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
const apiinfo = async () => {
  await getinfo().then((res) => {
    // console.log(res)
    menus.avatar = res.data.avatar
    menus.username = res.data.username
    console.log(menus)
  })
}
apiinfo()
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.left {
  color: white;
  display: flex;
  .aaa {
    line-height: 64px;
    margin: 5px;
  }
  .logo {
    width: 229px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 28px;
  }
  .iconimg {
    width: 32px;
    height: 32px;
  }
}
.right {
  display: flex;
}
.tx {
  line-height: 90px;
}
.el-dropdown-link {
  color: wheat;
  line-height: 64px;
}
</style>
