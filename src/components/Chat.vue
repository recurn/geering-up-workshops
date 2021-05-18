<template>
  <h1>Chat</h1>
  <div class="shadow-box" v-for="message in documents" :key="message.id">
      <Message :message="message" />
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection.js"
import Message from "@/components/Message.vue"


export default {
    components: {
        Message
    },
    setup() {
        const {documents} = getCollection("messages")


        return{
            documents
        }
    }
}
</script>

<style>

</style>