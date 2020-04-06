<template>

  <div class="switch-theme-con">
    <el-row class="switch-theme" type="flex" justify="center" align="middle">
        <a @click="setTheme">

          <i class="el-icon-platform-eleme"/>
        </a>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'themeDropdownMenu',
    data () {
      return {
      };
    },
    methods: {
      setTheme () {
        this.$store.commit('ChangeMenuTheme')
      }
    }
  }
</script>
