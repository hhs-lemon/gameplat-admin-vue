<style rel="stylesheet/scss" lang="scss">
  @import "./home.scss";
  @import "../../styles/common.scss";
</style>
<template>
  <div class="home-main">
    <el-row :gutter="10">
      <el-col :md="24" :lg="24">
        <el-row class-name="home-page-row1" :gutter="10">
          <!--用户-->
          <el-col :md="12" :lg="12" :style="{marginBottom: '10px'}">
            <el-card>
              <el-row type="flex" class="user-infor">
                <el-col :span="6">
                  <el-row class-name="made-child-con-middle" type="flex" align="middle">
                    <img class="avator-img" :src="avatorPath" style="background: #2db7f5;margin-left: 10px;"/>
                  </el-row>
                </el-col>
                <el-col :span="12" style="padding-left:6px;">
                  <el-row class-name="made-child-con-middle" type="flex" align="middle">
                    <div>
                      <b class="card-user-infor-name">admin</b>
                      <p>super admin</p>
                    </div>
                  </el-row>
                </el-col>
              </el-row>
              <div class="line-gray"></div>
              <el-row class="margin-top-8">
                <el-col :span="6"><p class="notwrap">上次登录时间:</p></el-col>
                <el-col :span="12" class="padding-left-8">2017.09.12-13:32:20</el-col>
              </el-row>
              <el-row class="margin-top-8">
                <el-col :span="6"><p class="notwrap">上次登录地点:</p></el-col>
                <el-col :span="12" class="padding-left-8">北京</el-col>
              </el-row>
            </el-card>
          </el-col>
          <!--待办事务-->
          <el-col :md="12" :lg="12" :style="{marginBottom: '10px'}">
            <el-card>
              <p slot="title" class="card-title">
                待办事项
              </p>
              <a type="text" slot="extra" @click.prevent="addNewToDoItem">
              </a>
              <div class="to-do-list-con">
                <div v-for="(item, index) in toDoList" :key="'todo-item' + (toDoList.length - index)"
                     class="to-do-item">
                  <to-do-list-item :content="item.title"/>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="margin-top-10">
      <el-col :md="24" :lg="12" :style="{marginBottom: '10px'}">
        <el-card>
          <p slot="title" class="card-title">
            上周每日来访量统计
          </p>
          <div class="data-source-row">
            <visite-volume/>
          </div>
        </el-card>
      </el-col>
      <el-col :md="24" :lg="12" :style="{marginBottom: '10px'}">
        <el-card>
          <p slot="title" class="card-title">
            数据来源统计
          </p>
          <div class="data-source-row">
            <data-source-pie/>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="margin-top-10">
      <el-card>
        <p slot="title" class="card-title">
          上周每日服务调用量(万)
        </p>
        <div class="line-chart-con">
          <service-requests/>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
  import avator from '@/assets/avator.png';
  import toDoListItem from './components/toDoListItem.vue';//待办事项
  import visiteVolume from './components/visiteVolume.vue';//上周每日来访量统计
  import dataSourcePie from './components/dataSourcePie.vue';// 数据来源统计
  import serviceRequests from './components/serviceRequests.vue';//上周每日服务调用量

  export default {
    name: 'home',
    components: {
      toDoListItem,
      visiteVolume,
      dataSourcePie,
      serviceRequests
    },
    data() {
      return {
        toDoList: [
          {
            title: '学习完整的iView组件学习完整的iView组件'
          },
          {
            title: '学习完整的iView组件'
          },
          {
            title: '学习完整的iView组件'
          }
        ],
        showAddNewTodo: false,
        newToDoItemValue: '',
        avatorPath: avator,
      };
    },

    computed: {
      name() {
        return this.$route.path


      },
      // avatorPath() {
      //   console.log(localStorage.avatorImgPath);
      //   return localStorage.avatorImgPath;
      // }
    },
    methods: {
      addNewToDoItem() {
        this.showAddNewTodo = true;
      },
      addNew() {
        if (this.newToDoItemValue.length !== 0) {
          this.toDoList.unshift({
            title: this.newToDoItemValue
          });
          setTimeout(() => {
            this.newToDoItemValue = '';
          }, 200);
          this.showAddNewTodo = false;
        } else {
          this.$Message.error('请输入待办事项内容');
        }
      },
      cancelAdd() {
        this.showAddNewTodo = false;
        this.newToDoItemValue = '';
      }
    }
  }
</script>


