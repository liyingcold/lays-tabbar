<!--  -->
<template>
        <tab-bar>
        <tab-bar-item path="/home">
            <font-awesome-icon slot="item-icon-active" icon="home" size="lg" color="rgb(34, 152, 231)"/>
            <font-awesome-icon slot="item-icon" icon="home" size="lg" />
            <div slot="item-text"><span>首页</span></div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <font-awesome-icon slot="item-icon-active" icon="bars" size="lg" color="rgb(34, 152, 231)"/>
            <font-awesome-icon slot="item-icon" icon="bars" size="lg" />
            <div slot="item-text"><span>分类</span></div>
        </tab-bar-item>
        <tab-bar-item path="/shoppingCart">
            <font-awesome-icon slot="item-icon-active" icon="cart-arrow-down" size="lg" color="rgb(34, 152, 231)"/>
            <font-awesome-icon slot="item-icon" icon="cart-arrow-down" size="lg" />
            <div slot="item-text"><span>购物车</span></div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <font-awesome-icon slot="item-icon-active" icon="bed" size="lg" color="rgb(34, 152, 231)"/>
            <font-awesome-icon slot="item-icon" icon="bed" size="lg" />
            <div slot="item-text"><span>我的</span></div>
        </tab-bar-item>
        </tab-bar>
</template>

<script>

import TabBar from './TabBar'
import TabBarItem from './TabBarItem'

    export default {
        name:"MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
 @import "../../assets/css/base.css";
</style>