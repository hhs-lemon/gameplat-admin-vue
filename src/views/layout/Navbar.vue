<template>
  <div>
    <div class="main-header">
      <!--设置菜单默认选中条目-->
      <el-menu mode="horizontal" :active-name="$route.path.split('/')[1]" @select="selectMenu">
        <div class="navicon-con">
          <!--菜单的缩进和展开功能-->
          <Button
            :style="{transform: 'rotateZ(' + (this.sidebar ? '90' : '0') + 'deg)'}"
            type="text"
            @click="toggleSideBar"
          >
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </div>
        <breadcrumbNav />
        <div class="layout-nav">
          <div class="main-header-operate">
             <div class="header-avator-con-icon">
              <div class="screen-full">
                <screenfull/>
              </div>
              <div class="screen-full">
                <themeDropMenu @on-select="selectMenu"/>
              </div>
            </div>
            <div class="header-avator-con">
              <div class="user-dropdown-menu-con">
                <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                  <el-dropdown trigger="click" @command="handleClickUserDropdown">
                    <span class="main-user-name">
                      {{userName}}
                      <Icon type="arrow-down-b"></Icon>
                    </span>
                    <!--下拉按钮，以后会用到-->
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-avatar :src="avator" style="background: #2db7f5;margin-left: 10px;"></el-avatar>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </el-menu>
    </div>
    <!--    <div class="tags-con" :style="{'padding-left': sidebar?closeSidebarWidth:openSidebarWidth}">
      <tagsOpened  @on-select="selectMenu" :pageTagsList="pageTagsList"></tagsOpened>
    </div>-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import breadcrumbNav from "./BreadcrumbNav.vue";
import tagsOpened from "./TagsOpened.vue";
import screenfull from "@/components/main/Screenfull.vue";
import themeDropMenu from "@/components/main/ThemeDropMenu.vue";
import avator from "@/assets/avator.png";

export default {
  name: "navbar",
  components: {
    breadcrumbNav,
    tagsOpened,
    screenfull,
    themeDropMenu
  },
  data() {
    return {
      avator: avator,
      //侧边栏关闭宽度
      closeSidebarWidth: "90px",
      //侧边栏打开宽度
      openSidebarWidth: "200px"
    };
  },
  props: ["menuActive"],
  computed: {
    pageTagsList() {
      return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
    },
    ...mapGetters(["sidebar", "userInfo"]),
    userName() {
      if (this.userInfo === null && this.userInfo !== "") {
        return "";
      } else {
        return this.userInfo.userName;
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ChangeSidebar");
    },
    handleClickUserDropdown(e) {
      console.log(e);
      if (e === "logout") {
        this.$store.dispatch("LogOut").then(() => {
          location.reload();
        });
      }
    },
    //选中导航菜单回调
    selectMenu(name) {
      this.$emit("select", name);
    }
  }
};
</script>
<style lang="less" scoped>
.screen-full {
  height: 100%;
  padding-top: 15px;
}
</style>
