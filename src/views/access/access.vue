<style lang="scss">
    @import './access.scss';
</style>
<template>
    <div class="access">
        <el-row>
            <el-col :span="8">
                <el-card>
                    <p slot="title">
                      <i class="el-icon-platform-eleme"/>
                        当前用户
                    </p>
                    <div class="access-user-con access-current-user-con">
                        <img :src="avatorPath" alt="" style="background: #2db7f5;margin-left: 10px;">
                        <p>当前用户权限值:<b>{{ accessCode }}</b></p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16" class="padding-left-10">
                <el-card>
                    <p slot="title">
                      <i class="el-icon-platform-eleme"/>
                        不同权限用户的不同菜单
                    </p>
                    <div class="access-user-con access-change-access-con">
                        <el-col span="8">
                            <el-row type="flex" justify="center" align="middle" class="access-change-access-con-row">
                                <i-switch :value="switchValue" @on-change="changeAccess" size="large"></i-switch>
                            </el-row>
                        </el-col>
                        <el-col span="16" class="padding-left-10">
                            <el-row type="flex" justify="center" align="middle" class="access-change-access-con-row">
                                <p>您可以通过左侧的开关来切换当前用户的权限值，然后您可以观察左侧菜单栏的变化，如果当前用户的权限值是<b> 0 </b>，则左侧菜单栏会显示’权限测试页‘这一项('权限测试页'只用于测试，点击不会跳转)。</p>
                            </el-row>
                        </el-col>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    name: 'access_index',
    data () {
        return {
            accessCode: parseInt(Cookies.get('access')),
            switchValue: parseInt(Cookies.get('access')) === 1
        };
    },
    computed: {
        avatorPath () {
            return require('../../assets/avator.png')
        }
    },
    methods: {
        changeAccess (res) {
            if (res) {
                this.accessCode = 1;
                Cookies.set('access', 1);
            } else {
                this.accessCode = 0;
                Cookies.set('access', 0);
            }
            console.log(res)
            // this.$store.commit('updateMenulist');
        }
    }
};
</script>

<style>

</style>
