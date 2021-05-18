<template>
  <div class="shadow-box">
      <h2>{{message.name}}</h2>
      <p>{{time}}</p>
      <p>{{message.message}}</p>
      <div v-for="(reply, index) in message.replies" :key="index">
          <Message :message="reply" />
      </div>

  </div>
</template>

<script>
import { computed} from 'vue'

export default {
    props: ["message"],
    setup(props) {

        const time = computed(() => {
            return new Date(props.message.time.toDate()).toLocaleTimeString();
        })

        // const day = ref(time.value.getDate());
        // const hour = ref(time.value.getHours());
        // const seconds = ref(time.value.getSeconds());

        return {time}
    }
}
</script>

<style>
.shadow-box{
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
    display: inline-block;
    padding: 20px
}
</style>