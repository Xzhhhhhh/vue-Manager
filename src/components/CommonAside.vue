<template>
  <el-menu
    default-active="1-4-1"
    text-color="#fff"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "猪猪" : "学生课程管理系统" }}</h3>
    <el-menu-item
      @click="clickmenu(item)"
      v-for="item in nochildren"
      :index="item.path"
      :key="item.path"
    >
      <span slot="title">{{ item.menuName }}</span>
    </el-menu-item>
    <!-- 有子孩子的一级菜单 -->
    <el-submenu v-for="item in haschildren" :index="item.path" :key="item.path">
      <template slot="title">
        <span slot="title">{{ item.menuName }}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickmenu(subItem)" :index="subItem.path">{{
          subItem.menuName
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          menuName: "课程管理",
          name:'course',
          path: "/course",
          children: [
            {
              menuName: "课程列表",
              name:'courselist',
              path: "/courselist",
            },
            {
              menuName: "我的课程",
              name:'mycourse',
              path: "/mycourse",
            },
          ],
        },
        {
          menuName: "信息管理",
          path: "/message",
          children: [
            {
              menuName: "我的信息",
              name:'mymsg',
              path: "/mymsg",
            },
            {
              menuName: "修改信息",
              name:'editmsg',
              path: "/editmsg",
            },
          ],
        },
        {
          menuName: "成绩管理",
          name:'grade',
          path: "/grade",
        },
        {
          menuName: "聊天室",
          name: 'Im',
          path: '/im',
        }
      ],
      isCollapse: false,
    };
  },
  methods: {
    clickmenu(item) {
      this.$router.push({
        name: item.name,
      });
      console.log(item);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    haschildren() {
      return this.menuList.filter((item) => item.children);
    },
    nochildren() {
      return this.menuList.filter((item) => !item.children);
    },
  },
};
</script>

