<template>
    <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
            <swipe-item class="slide6"></swipe-item>
    </swipe>
</template>
<script>
    export default {
        
    }
</script>
<style>
/* scoped 让当前样式只对当前组件生效 */
    /* .RotationChart{
        width: 100%;
        height: 1.2rem;
        background: aqua;
        margin-top: 0.33rem;
    }
   .ChartImg1{
       width: 100%;
       height: 100%;
   } */
   @import 'vue-swipe/dist/vue-swipe.css';
    .my-swipe {
    height: 1.5rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: 0.33rem;
    }

    .slide1 {
    background-image: url(../../../static/shouye/2.jpg);
    color: #fff;
    background-size: 100% 100%;
    }

    .slide2 {
    background-image: url(../../../static/shouye/10.jpg);
    background-size: 100% 100%;
   /* color: #000;  */
    }

    .slide3 {
    background-image: url(../../../static/shouye/17.jpg);
    background-size: 100% 100%;
    color: #fff;
    }

    .slide4 {
    background-image: url(../../../static/shouye/5.jpg);
    color: #fff;
    background-size: 100% 100%;
    }

    .slide5 {
    background-image: url(../../../static/shouye/33.jpg);
    background-size: 100% 100%;
   /* color: #000;  */
    }

    .slide6 {
    background-image: url(../../../static/shouye/9.jpg);
    background-size: 100% 100%;
    color: #fff;
    }
</style>