<template>
  <div>
    <div class="main-header">
      <!--设置菜单默认选中条目-->
      <div mode="horizontal" :active-name="$route.path.split('/')[1]" @on-select="selectMenu">
        <div class="navicon-con">
          <!--菜单的缩进和展开功能-->
          <Button :style="{transform: 'rotateZ(' + (this.sidebar ? '90' : '0') + 'deg)'}" type="text"
                  @click="toggleSideBar">
            <i class="el-icon-platform-eleme"/>
          </Button>
        </div>
        <breadcrumbNav/>
        <div class="layout-nav">
          <div class="main-header-operate">
            <div class="header-avator-con-icon">
              <div>
                <screenfull style="margin-top: 4px"/>
              </div>
              <div>
                <themeDropMenu @on-select="selectMenu"/>
              </div>
            </div>
            <div class="header-avator-con">
              <div class="user-dropdown-menu-con">
                <el-row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                  <el-dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                    <el-dropdown-menu><a href="javascript:void(0)">
                      <span class="main-user-name">{{userName}}</span>
                      <!--下拉按钮，以后会用到-->
                      <i class="el-icon-platform-eleme"/>

                    </a></el-dropdown-menu>
                    <el-dropdown-menu slot="list">
                      <el-dropdown-menu name="loginout" divided>退出登录</el-dropdown-menu>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <el-avatar :src="avator" style="background: #2db7f5;margin-left: 10px;"/>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="tags-con" :style="{'padding-left': sidebar?closeSidebarWidth:openSidebarWidth}">
      <tagsOpened  @on-select="selectMenu" :pageTagsList="pageTagsList"></tagsOpened>
    </div>-->
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import breadcrumbNav from './BreadcrumbNav.vue';
  import tagsOpened from './TagsOpened.vue';
  import screenfull from '@/components/main/Screenfull.vue';
  import themeDropMenu from '@/components/main/ThemeDropMenu.vue';
  import avator from '@/assets/avator.png';

  export default {
    name: 'navbar',
    components: {
      breadcrumbNav,
      tagsOpened,
      screenfull,
      themeDropMenu,
    },
    data() {
      return {
        avator: avator,
        //侧边栏关闭宽度
        closeSidebarWidth:'90px',
        //侧边栏打开宽度
        openSidebarWidth:'200px'
      };
    },
    props: ['menuActive'],
    computed: {
      pageTagsList() {
        return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
      },
      ...mapGetters([
        'sidebar',
        'userInfo',
      ]),
      userName() {
        if (this.userInfo === null && this.userInfo !== "") {
          return ""
        } else {
          return this.userInfo.userName
        }
      },
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ChangeSidebar')
      },
      handleClickUserDropdown(e) {
        if (e === "loginout") {
          this.$store.dispatch('LogOut').then(() => {
            location.reload();
          });
        }
      },
      //选中导航菜单回调
      selectMenu(name) {
        this.$emit("select", name);

      }
    }
  }
</script>
