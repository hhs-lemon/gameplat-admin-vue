<style lang="scss">
    @import '../../styles/common.scss';
    @import './error-page.scss';
</style>

<template>
    <div class="error-page">
        <el-row>
            <Card>
                <p slot="title">
                    404-页面不存在
                </p>
                <el-row>
                    <Col span="10">
                        <Card dis-hover>
                            <el-row>
                                <div class="error-page-show">
                                    <error404></error404>
                                </div>
                                <div class="error-page-cover"></div>
                            </el-row>
                        </Card>
                    </Col>
                    <Col span="14" class="padding-left-10">
                        <el-row type="flex" align="middle" class="error-page-intro-con">
                            <p>当访问的页面不存在时会跳转到404页面，您可以在浏览器地址栏中修改url为一个不存在的路径，体验一下效果</p>
                        </el-row>
                    </Col>
                </el-row>
            </Card>
        </el-row>
        <el-row class="margin-top-10">
            <Card>
                <p slot="title">
                    403-权限不足
                </p>
                <el-row>
                    <Col span="10">
                        <Card dis-hover>
                            <el-row>
                                <div class="error-page-show">
                                    <error403></error403>
                                </div>
                                <div class="error-page-cover"></div>
                            </el-row>
                        </Card>
                    </Col>
                    <Col span="14" class="padding-left-10">
                        <el-row type="flex" align="middle" class="error-page-intro-con">
                            <p>在当前登录用户不具有执行当前操作的权限时跳转到该页面，您可以在ajax请求方法中判断返回的状态码为403时跳转到该页面</p>
                        </el-row>
                    </Col>
                </el-row>
            </Card>
        </el-row>
        <el-row class="margin-top-10">
            <Card>
                <p slot="title">
                    500-服务端错误
                </p>
                <el-row>
                    <Col span="10">
                        <Card dis-hover>
                            <el-row>
                                <div class="error-page-show">
                                    <error500></error500>
                                </div>
                                <div class="error-page-cover"></div>
                            </el-row>
                        </Card>
                    </Col>
                    <Col span="14" class="padding-left-10">
                        <el-row type="flex" align="middle" class="error-page-intro-con">
                            <p>当请求之后出现服务端错误时跳转到该页面，您可以在ajax请求方法中判断返回的状态码为500时跳转到该页面</p>
                        </el-row>
                    </Col>
                </el-row>
            </Card>
        </el-row>
    </div>
</template>

<script>
import Error404 from './404.vue';
import Error500 from './500.vue';
import Error403 from './403.vue';
export default {
    components: {
        Error404,
        Error500,
        Error403
    }
};
</script>
