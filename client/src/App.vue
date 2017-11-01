<template>

  <div class="wrapper" id="app">
    <IGHeader/>

    <router-view></router-view>
  </div>
</template>

<script>
import IGHeader from './components/Header';
import IGArticle from './components/Article';

export default {
  name: 'app',
  components: {
    IGHeader,
    IGArticle,
    IGFooter: () => import('./components/Footer'),
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
.wrapper {
  width: 100%;
  height: 100%;
}

.nav {
  position: absolute;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
}

.nav ul {
  list-style: none
}

.nav ul li a {
  text-decoration: none;
  color: #444;
}
.nav ul li a:hover {
  text-decoration: underline;
}
</style>
