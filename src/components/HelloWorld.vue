<template>
  <div class="hello">
    <h1>我是接受的props</h1>
    <h1>{{ msg }}</h1>

    <h1>{{ message }}</h1>
    <div v-html="rawHtml"></div>
    <div v-bind:id="message"></div>
    <div :id="message"></div>

    <div v-if="falg">nihao</div>
    <div v-else>nihao1</div>
    <h1>列表渲染</h1>
    <div v-show="falg2">nihao1</div>
      <ul>
        <li v-for="item in newsList" :key=item.id >
          {{ item.title }}
        </li>
      </ul>

    <h1>事件处理</h1>
    <button v-on:click="count+=1">点我加一</button>
    <button @click="clickHandle">点我减一(函数)</button>
    <h1>{{ count }}</h1>


    <ul>
      <li @click="clickSayNameHandle( item.title)" v-for="item in newsList" :key=item.id >
        {{ item.title }}
      </li>
    </ul>

    <h1>表单输入绑定</h1>
    <input type="text" v-model.lazy="usename">
    <input type="text" v-model.trim="usename">
    <p>{{usename}}</p>
    <button @click="clickUserNameHandle(usename)">获取用户名</button>

    <h1>自定义事件传递函数</h1>
    <button @click="sendClickHandle">自定义事件</button>
  </div>
</template>



<script>

export default {

  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      usename:'',
      message: 'werwe',
      rawHtml: "<a href='http://www/baidu.com'>hello</a>",
      falg: false,
      falg1: true,
      newsList: [
        {
          id: 10002,
          title: '今日新闻'
        },
        {
          id: 10003,
          title: '今日新闻'
        },
        {
          id: 10004,
          title: '今日新闻'
        },{
              id: 10002,
              title: '今日新闻'
          }
      ],
      count:1
    }
  },

  methods:{
    clickHandle(event){
      console.log(event)
      this.count-=1
    },
    clickSayNameHandle(data){
      console.log(data)
    },
    clickUserNameHandle(data){
      console.log(data)
    }
    ,sendClickHandle(){
      this.$emit('onEvent',this.message)
    },hello(){
      console.log('hello')
    },sendClickHandle1(){
      this.$emit('onEvent1',this.message)
    },sendClickHandle2(){
      this.$emit('onEvent2',this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
h1{
  color:#42b983
}
</style>
