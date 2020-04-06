<style lang="scss">
  @import './styles/to-do-list-item.scss';
</style>

<template>
  <el-row class="to-do-list-item">
    <el-col :span="2" class="height-100">
      <el-row type="flex" justify="center" align="middle" class="height-100">
        <el-checkbox v-model="todoitem"/>
      </el-row>
    </el-col>
    <el-col :span="22" class="height-100">
      <el-row type="flex" justify="start" align="middle" class="height-100">
        <p class="to-do-list-item-text" @click="handleHasDid" :class="{hasDid: todoitem}">{{ content }}</p>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'toDoListItem',
    data() {
      return {
        todoitem: false
      };
    },
    props: {
      content: String
    },
    methods: {
      handleHasDid() {
        this.todoitem = !this.todoitem;
      }
    }
  };
</script>
