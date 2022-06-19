<template>
 <el-container style="height:100%">
  <el-aside width="auto">
    <common-aside></common-aside>
  </el-aside>
   <el-container >
     <el-header>
       <common-header/>
     </el-header>

      <el-main>
       
        <router-view></router-view>
      </el-main>
    </el-container>
</el-container>
</template>

<script>
import commonAside from '../components/CommonAside.vue'
import commonHeader from '../components/CommonHeader.vue'
export default {
name: 'Main',
  components: {
    commonAside,
    commonHeader
  },
data(){
  return{};
}
}
</script>

<style lang='less' scope>
.el-header {
  background-color: #545c64;
}
.el-main {
  padding-top: 0;
}
</style>

