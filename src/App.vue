<template>
  <div id="nav">
    <img src="@/assets/GU_wordmark.png" alt="" />
    <!-- <router-link to="/">Home</router-link>  -->
    <router-link to="/pythonpuzzle">Python Puzzle</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  img {
    max-height: 50px;
    height: auto;
    margin-right: auto;
  }
  #nav {
    height: 60px;
    margin: 0px;
    padding: 10px;
    align-items: center;
    background: var(--primary);
    display: flex;

    a {
      font-weight: bold;
      color: #2c3e50;
      margin: 0px 20px;
      text-decoration: none;

      &.router-link-exact-active {
        color: #ffffff;
      }

      &:hover {
        color: #ffffff;
      }
    }
  }
  body {
    margin: 0px;
  }
</style>
