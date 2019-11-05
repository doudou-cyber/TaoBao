<template>
    <div class="Popular">
        <div class="Popular1"><span class="Popular1P">热门</span><span class="Popular1F">糖酥饼真香警告 | 食说</span></div>
        <div class="Popular2"><span class="Popular2P">热门</span><span class="Popular2F">这减肥道菜，既开胃又不失营养</span></div>
   </div>
    
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
/* scoped 让当前样式只对当前组件生效 */
    .Popular{
        width: 2.4rem;
        height: 0.66rem;
        margin-left: 0.6rem ;
        margin-top: -0.67rem;
        position: relative;
        
    }
   .Popular1P{
       width: 0.3rem;
       height: 0.19rem;
       border: 0.01rem solid red;
       font-size: 0.14rem;
       position: absolute;
       top: 0.37rem;
       left: 0.05rem;
       color: red;
       border-radius: 0.05rem;
   }
   .Popular2P{
       width: 0.3rem;
       height: 0.19rem;
       border: 0.01rem solid red;
       font-size: 0.14rem;
       position: absolute;
       top: 0.07rem;
       left: 0.05rem;
       color: red;
       border-radius: 0.05rem;
   }
   .Popular1{
        width: 2.4rem;
         height: 0.3rem;
         padding-top: 0.03rem;
   }
   .Popular2{
        width: 2.4rem;
         height: 0.3rem;
         padding-top: 0.03rem;
   }
   .Popular1F{
       display: inline-block;
       font-size: 0.14rem;
       position: absolute;
       top: 0.38rem;
       left: 0.39rem;
   }
   .Popular2F{
       display: inline-block;
       font-size: 0.14rem;
       position: absolute;
       top: 0.07rem;
       left: 0.39rem;
   }
</style>