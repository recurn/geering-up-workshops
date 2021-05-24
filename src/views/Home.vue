<template>
  <div class="home">
    <h1>Reid is cool.</h1>
    <p>And this is all I'm going to do today.</p>
  </div>
</template>

<script>
  import { useRouter } from "vue-router";

  export default {
    name: "Home",
    beforeMount() {
      const router = useRouter();
      router.push({ name: "Python Puzzle" });
    },
  };
</script>
