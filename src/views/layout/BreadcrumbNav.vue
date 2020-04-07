<!--顶部导航-->
<template>
  <div style="display:flex;">
    <!-- 这里显示 index 小于 maxItem 的内容 -->
    <div v-for="(item,index) in currentPathArr" :href="item.path" :key="item.name"
         v-if="!item.hidden && index < maxItem">
      <!--这里设置一个长度大于了多少就下拉显示一级菜单-->
      <el-menu-item :index="item.path.split('/')[1]" v-if="item.children.length>0">
        <Icon :type="item.icon" :size="iconSize" :key="item.path"></Icon>
        {{item.title}}
      </el-menu-item>

      <el-menu-item :index="item.path.split('/')[1]" v-if="item.children.length<=0">
        <router-link tag='span' :to="item.path + '/' + item.children[0].path"
                     style="display: inline-block;height:100%;width:100%">
          <Icon :type="item.icon" :size="iconSize" :key="item.path"></Icon>
          {{item.title}}
        </router-link>
      </el-menu-item>
    </div>
    <el-submenu index="group" v-if="maxItem !== currentPathArr.length && maxItem <= currentPathArr.length">
      <template slot="title">
        <Icon type="stats-bars"/>
        <!--其他内容-->
      </template>
      <el-menu-item-group title="列表">
        <div v-for="(item,index) in currentPathArr" :href="item.path" :key="item.name"
             v-if="!item.hidden && index >= maxItem">
          <!--无二级菜单-->
          <el-menu-item :index="item.path.split('/')[1]" v-if="item.children.length>0">
            <Icon :type="item.icon" :size="iconSize" :key="item.path" style="width: 20px"/>
            <span class="dropdownItemIcon">{{item.title}}</span>
          </el-menu-item>
          <!--有二级菜单-->
          <el-menu-item :index="item.path.split('/')[1]" v-if="item.children.length<=0">
            <router-link tag='span' :to="item.path + '/' + item.children[0].path"
                         style="display: inline-block;height:100%;width:100%">
              <Icon :type="item.icon" :size="iconSize" :key="item.path" style="width: 20px"/>
              <span class="dropdownItemIcon">{{item.title}}</span>
            </router-link>
          </el-menu-item>
        </div>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        iconSize: 14,
        //超过几个列表后显示下拉菜单 (前面有两个隐藏列，所以需要加上2)
        maxItem: 10
      }
    },
    computed: {
      currentPathArr() {
        console.log('****==', this.$store.state.app.routers)
        return this.$store.state.app.routers;
      },
    }
  }
</script>
