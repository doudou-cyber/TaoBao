<template>
  <div>
    <p>hello{{test}}</p> 
    <button @click="fun()">点击触发函数</button>

     <!-- 3,使用组件 -->
    <Home ziporps="我是父组件的数据" @zipao="fufun"></Home>
  </div>
  
</template>

<script>
  //1，先引用
  import Home from "./home";
  export default {
    //2,在调用
    components:{
      Home
    },
    data(){
      return{
        test:"变量"
      }
    },
    methods:{
      fun(){
        console.log("haha");
      },
      fufun(e){//形参必须    里面是发送过来的数据
        console.log(e);
      }
    },
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
