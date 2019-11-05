<template>
    <div class="rob">
        <div class="robFont">
            <span>淘抢购</span>
            <img src="../../../static/shouye/27.jpg" alt="">
        </div>
        <div class="robImg">
            <img src="../../../static/shouye/30.jpg" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
/* scoped 让当前样式只对当前组件生效 */
    *{
        margin: 0;
        padding: 0;
    }
    .rob{
        width: 50%;
        height: 50%;
        margin-top:0.1rem; 
    }
   .robFont{
       font-size: 0.18rem;
       color: red;
       width: 50%;
       text-align: center;
   }
   .robFont img{
        width: 80%;
        height: 0.8rem;
        padding-top: 0.07rem;
   }
   .robImg{
        width: 50%;
        height: 99%;
        margin-top: -1.15rem;
        margin-left: 0.94rem;
   }
   .robImg img{
        width: 100%;
        height: 100%;
        
   }
</style>