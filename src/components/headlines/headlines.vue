<template>
    <div class="headlines">
        <HeadlinesPopular></HeadlinesPopular>
        <Popular></Popular>
        <HImg></HImg>
    </div>
</template>
<script>
    import HeadlinesPopular from "./headlinesPopular"
    import Popular from "./Popular"
    import HImg from "./hImg"
    export default {
         components:{
            HeadlinesPopular,
            Popular,
            HImg
        }
    }
</script>
<style scoped>
/* scoped 让当前样式只对当前组件生效 */
    .headlines{
        width: 100%;
        height: 0.66rem;
        background: white;
    }
   
</style>