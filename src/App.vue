<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="我是传过来的props" @onEvent="getDataHandle"/>
  <h1>这是显示从子组件传来的数据{{message}}</h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      message:''
    }
  },
  methods:{
    getDataHandle(data){
      this.message=data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
