<template>
    <div class="top">
        <img class="topImg" src="../../../static/shouye/16.png" alt="">
        <input class="test" type="text" value="寻找宝贝店铺">
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    html{
        font-size: 26.67vw;
    }
    .top{
        width: 100%;
        height: 0.33rem;
        background-color: #ff852a;
        position: fixed;
        top: 0;
    }
    .test{
        text-align: center;
        width: 3.2rem;
        height: 0.21rem;
        position: absolute;
        right: 0.07rem;
        top: 0.05rem;
        background-color: #ff4e22;
        color: white;
        border: none;
        background-image: url(../../../static/shouye/16.png);
        border-radius: 0.05rem;
    }
    .topImg{
        width: 0.34rem;
        height: 0.3rem;
        position: absolute;
        left: 0.05rem;        
    }
</style>