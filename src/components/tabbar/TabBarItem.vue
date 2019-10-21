<!--  -->
<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot> </div>
        
    </div>
</template>

<script>
    export default {
        name:"TabBarItem",
        props:{
            path:String ,
            activeColor:{
                type:String,
                default:'rgb(34, 152, 231)'
            }
        },
        data() {
            return {
                // isActive:true
            }
        },
        computed: {
            isActive(){
                // 哪一个路由处于活跃，获取哪一个的路径
                // 如果当前路由path和获取路由是一个path，就表明该路径所在路由处于活跃状态
                // indexOf==-1表示没找到
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}
            }
        },
        methods: {
            itemClick(){
                // 跳转的路径不能是固定值
                this.$router.replace(this.path)
            }
        },
    }
</script>

<style scoped>
    @import "../../assets/css/base.css";
</style>

