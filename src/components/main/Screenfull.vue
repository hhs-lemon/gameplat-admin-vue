<template>
  <div class="screenfull">
    <div class="full-screen-btn-con" @click="click">
      <i class="el-icon-platform-eleme"/>
    </div>
  </div>

</template>

<script>
  import screenfull from 'screenfull';
  export default {
    data() {
      return {
        isFullscreen: false,
      }
    },
    methods: {
      click() {
        if (!screenfull.enabled) {
          this.$Message({
            message: 'you browser can not work',
            type: 'warning'
          });
          return false;
        }
        screenfull.toggle();
        this.isFullscreen = !this.isFullscreen;
      }
    }
  }
</script>

<style lang="scss">
  .screenfull {
    display: inline-block;
    width: 20px;
    height: 100%;
  }
</style>
