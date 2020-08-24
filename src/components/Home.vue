<template>
  <el-button type="info" @click="logout">退出</el-button>
</template>
<script>
export default {
  methods: {
    logout () {
      // 清空 sessionStorage
      window.sessionStorage.clear()
      // 编程式导航
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped></style>
