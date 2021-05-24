<template>
  <div class="flex-vert message" :style="align">
    <div class="flex-horz message-header">
      <h4>{{ message.name }}</h4>
      <p v-if="time">{{ time }}</p>
    </div>
    <div class="message-content">
      <p>{{ message.message }}</p>
      <div v-for="(reply, index) in message.replies" :key="index">
        <Message :message="reply" :name="reply.name"/>
      </div>
      <button v-if="!showReply && reply" @click="showReply = !showReply">
        <span class="material-icons">
          reply
        </span>
      </button>
      <form
        v-else-if="reply"
        action=""
        class="chat-reply-box"
        autocomplete="off"
        @submit.prevent="() => {$emit('sendReply', {text: replyText, name: myName}); replyText = ''; showReply = false}"
      >
        <input type="text" v-model="replyText" placeholder="Aa" />
        <button>
          <span class="material-icons">
            send
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import { computed, ref } from "vue";

  export default {
    props: ["message", "myName", "reply"],
    emits: ['sendReply'],
    setup(props) {
      const time = computed(() => {
        if (props.message.time) {
          return new Date(props.message.time.toDate()).toLocaleTimeString();
        }
        return null;
      });

      const showReply = ref(false);

      const replyText = ref("");

      const align = computed(() => {
        let style = "align-self: flex-start;";
        if (props.message.name == props.myName) {
          style = "align-self: flex-end; background: #88d9f1";
        }

        return style;
      });

      return { time, align, showReply, replyText };
    },
  };
</script>

<style lang="scss">
  .message {
    text-align: left;
    border-radius: 20px;
    padding: 10px;
    padding-left: 20px;
    margin: 15px;
    max-width: 50%;
    min-width: 300px;
    background: rgba(209, 209, 209, 0.472);

    & h4,
    p {
      padding: 0px 0px;
      margin: 0px 0px;
    }

    & button {
      display: inline-block;
      margin: 5px 0;
      padding: 0px;
      background: var(--accent);
      border: none;
      border-radius: 50px;
      padding: 8px;
      //   border: 1px solid black;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .shadow-box {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
    padding-top: 1px;
  }
  .flex-vert {
    display: flex;
    flex-basis: auto;

    align-self: center;
    flex-direction: column;
  }
  .flex-horz {
    display: flex;
    align-content: center;
    align-items: center;
  }
  .message-header {
    padding: 10px 0px;
  }
  .message-header p {
    font-size: 0.8rem;
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.37);
  }
  .message-content {
    margin-bottom: 5px;
  }
  .chat-reply-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;

    & input {
      height: 2em;
      border: 2px solid black;
      border-radius: 20px;
      padding: 2px 10px;

      &:focus{
        outline: none;
      }
    }


  }
</style>
