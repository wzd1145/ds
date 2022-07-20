<template>
  <div class="gooods">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all">全部</el-tab-pane>
      <el-tab-pane label="审核中" name="examine">审核中</el-tab-pane>
      <el-tab-pane label="出售中" name="Sold">出售中</el-tab-pane>
      <el-tab-pane label="已下架" name="Removed">已下架</el-tab-pane>
      <el-tab-pane label="库存预警" name="stock">库存预警</el-tab-pane>
      <el-tab-pane label="回收站" name="recycle">回收站</el-tab-pane>
    </el-tabs>
    <div class="header">
      <div class="header-left">
        <el-form-item label="关键词 : ">
          <el-input
            v-model="name"
            placeholder="商品名称"
            style="width: 300px"
          />
        </el-form-item>
        <el-form-item label="商品分类 : ">
          <el-select v-model="region" placeholder="请选择商品分类">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </div>
      <div class="header-right">
        <el-button type="primary" zise="mini">搜索</el-button>
        <el-button zise="mini">重置</el-button>
        <el-button type="primary" plain zise="mini">收起</el-button>
      </div>
    </div>
    <div>
      <el-button type="primary">新增</el-button>
      <el-button type="warning">恢复商品</el-button>
      <el-button type="danger">批量删除</el-button>
      <el-button>上架</el-button>
      <el-button>下架</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="商品" />
      <el-table-column prop="name" label="实际销量" />
      <el-table-column prop="state" label="商品状态" />
      <el-table-column prop="city" label="审核状态" />
      <el-table-column prop="address" label="总库存" />
      <el-table-column fixed="right" label="操作">
        <template #default>
          <el-button link type="primary" size="small">修改</el-button>
          <el-button link type="primary" size="small">商品规格</el-button>
          <el-button link type="primary" size="small">设置轮播图</el-button>
          <el-button link type="primary" size="small">商品详细</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GoodsApi from '@/api/goodsList'
const name = ref('')
const region = ref('')

const getcategory = async () => {
  await GoodsApi.getcategory().then((res) => {
    console.log(res)
  })
}
getcategory()
const getgoods = async () => {
  await GoodsApi.getgoods().then((res) => {
    console.log(res)
  })
}
getgoods()
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}
.header-left {
  display: flex;
  .el-form-item {
    padding: 0 10px;
  }
}
.header-right {
}
</style>
