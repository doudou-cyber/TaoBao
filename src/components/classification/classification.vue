<template>
    <div class="classification">
        <ClassificationClass></ClassificationClass>
    </div>
</template>
<script>
    import ClassificationClass from "./ClassificationClass"
    export default {
         components:{
            ClassificationClass
        }
    }
  
</script>
<style scoped>
/* scoped 让当前样式只对当前组件生效 */
    .classification{
        width: 100%;
        height: 1.7rem;
        background: forestgreen;
    }
  
</style>