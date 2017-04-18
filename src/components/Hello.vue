<template>
  <div class="hello">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <h1 class="chenxubaio-style">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <template v-for="item in items">
      <div>{{item.test}}</div>
    </template>
    <el-button type="primary" @click="onBack">进入demo</el-button>
    <el-button type="primary">主要按钮</el-button>

  </div>
</template>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'hello',
    data () {
      return {
        msg: '中间主体内容'
      }
    },
    computed: {
      ...mapState({
        items: state => state.test.items
      })
    },
    methods: {
      onBack() {
        this.$router.push({
          path: "demo"
        });
      },

    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log("要离开了");
      next();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
</style>
