<template>
    <div>
        <p @click="fun">你好，我是home</p>
        <h1>{{ziporps}}</h1>
    </div>
</template>
<script>
    export default{
        props:{
            ziporps:String
        },
        methods:{
            fun(){
                this.$emit("zipao","我是子组件数据")
            }
        }
    }
</script>
<style>
    p{
        color: blue;
    }
</style>
