<template>
  <div class="header">
    <div class="left">
      <div class="logo">
        <img class="iconimg" src="../../assets/ele.png" alt="" /> 积云编程
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import {} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.left {
  color: white;
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
</style>
