<template>
  <div>
     test
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '09:41:00',
        value2: ['09:41:00', '12:00:00'],
        open: false,
        value3: '',
      }
    },
    methods: {
      handleClick() {
        this.open = !this.open;
      },
      handleChange(time) {
        this.value3 = time;
      },
      handleClear() {
        this.open = false;
      },
      handleOk() {
        this.open = false;
      }
    }
  }
</script>
<style type="text/css">
  .doc-header {
    width: 100%;
    border-bottom: 1.5px dashed #062873;
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 30px
  }

  .doc-content {
    margin-top: 10px;
    margin-bottom: 50px;
    padding: 5px;
    line-height: 20px
  }

  .doc-content p {
    fout-size: 30px;
    margin-bottom: 5px;
    margin-top: 5px
  }

  .doc-content h2 {
    margin-bottom: 10px;
    margin-top: 10px
  }
</style>
