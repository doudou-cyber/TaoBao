<template>
    <div class="bottombar">
        
        <router-link to="/home">首页</router-link>
        <router-link to="/cars">购物车</router-link>
        <router-link to="/orderlist">订单列表</router-link>
        <router-link to="/my">我的淘宝</router-link>
        <router-link to="/more">更多</router-link>
    </div>
</template>a
<script>
    export default {
        
    }
</script>
<style scoped>
/* scoped 让当前样式只对当前组件生效 */
    
    a{
        font-size: 0.14rem;
        flex: 1;
        text-align: center;
        text-decoration: none;
        position: relative;
        top: 0.28rem;
        color: black;
    }
    .bottombar{
        width: 100%;
        height: 0.5rem;
        background: white;
        position: fixed;
        bottom: 0px;
        display: flex;
        flex-direction: row;
    }

</style>