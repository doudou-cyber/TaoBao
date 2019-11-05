<template>
    <div class="rushToBuy">
        <Rob></Rob>
    </div>
</template>
<script>
    import Rob from "./rob";
    export default {
        components:{
            Rob
        }
    }
</script>
<style scoped>
/* scoped 让当前样式只对当前组件生效 */
    .rushToBuy{
        width: 100%;
        height: 2.3rem;
        background: khaki;
        margin-top:0.1rem; 
    }
   
</style>