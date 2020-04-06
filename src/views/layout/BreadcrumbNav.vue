<!--顶部导航-->
<template>
  <div>
    <!-- 这里显示 index 小于 maxItem 的内容 -->
    <el-menu :default-active="this.$route.path"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
    <a class="el-menu-demo el-menu--horizontal el-menu" style="float:left;"
       v-for="(item,index) in currentPathArr" :href="item.path" :key="item.name"
         v-if="!item.hidden && index < maxItem">
      <!--这里设置一个长度大于了多少就下拉显示一级菜单-->
      <el-menu-item :name="item.path.split('/')[1]" v-if="item.children.length>0">
        <i class="el-icon-platform-eleme"/>
        {{item.title}}
      </el-menu-item>

      <el-menu-item :name="item.path.split('/')[1]" v-if="item.children.length<=0">
        <router-link tag='span' :to="item.path + '/' + item.children[0].path"
                     style="display: inline-block;height:100%;width:100%">
          <i class="el-icon-platform-eleme"/>
          {{item.title}}
        </router-link>
      </el-menu-item>
    </a>
    </el-menu>
    <!--<el-submenu name="group" v-if="maxItem !== currentPathArr.length && maxItem <= currentPathArr.length" index="1">
      <template slot="title">
        <i class="el-icon-platform-eleme"/>
        &lt;!&ndash;其他内容&ndash;&gt;
      </template>
      <el-menu-item-group title="列表">
        <div v-for="(item,index) in currentPathArr" :href="item.path" :key="item.name"
             v-if="!item.hidden && index >= maxItem">
          &lt;!&ndash;无二级菜单&ndash;&gt;
          <el-menu :name="item.path.split('/')[1]" v-if="item.children.length>0">
            <i class="el-icon-platform-eleme"/>
            <span class="dropdownItemIcon">{{item.title}}</span>
          </el-menu>
          &lt;!&ndash;有二级菜单&ndash;&gt;
          <el-menu :name="item.path.split('/')[1]" v-if="item.children.length<=0">
            <router-link tag='span' :to="item.path + '/' + item.children[0].path"
                         style="display: inline-block;height:100%;width:100%">
              <i class="el-icon-platform-eleme"/>
              <span class="dropdownItemIcon">{{item.title}}</span>
            </router-link>
          </el-menu>
        </div>
      </el-menu-item-group>
    </el-submenu>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        iconSize: 14,
        //超过几个列表后显示下拉菜单 (前面有两个隐藏列，所以需要加上2)
        maxItem: 7
      }
    },
    computed: {
      currentPathArr() {
        console.log(this.$store.state.app.routers);
        return this.$store.state.app.routers;
      },
    }
  }
</script>
