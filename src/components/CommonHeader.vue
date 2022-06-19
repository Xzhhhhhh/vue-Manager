<template>
  <header>
    <div class="l-container">
      <el-button plain icon="el-icon-menu" size="mini"> </el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-container">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="user" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  name: "commonHeader",
  data() {
    return {
      userImg: require("../assets/images/2.jpg"),
    };
  },
};
</script>
<style lang="less"  scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between; //左右贴合
  align-items: center;
}
.l-container {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-container{
.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;

}

}
</style>