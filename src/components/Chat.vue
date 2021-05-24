<template>
  <h1>Chat</h1>
  <div class="shadow-box chat-window" v-if="name">
    <div class="chat-box">
      <div class="chat-messages" v-for="message in documents" :key="message.id">
        <Message
          :message="message"
          :myName="name"
          reply="true"
          @sendReply="
            (reply) => {
              sendReply(reply, message);
            }
          "
        />
      </div>
    </div>
    <form
      action=""
      class="chat-text-box"
      autocomplete="off"
      @submit.prevent="sendMessage"
    >
      <input type="text" v-model="messageText" placeholder="Aa" />
      <button>
        <span class="material-icons">
          send
        </span>
      </button>
    </form>
  </div>
  <div v-if="!name">
    <form @submit.prevent="setName">
      <p>What should we call you?</p>
      <input type="text-area" name="name" placeholder="name" />
      <button>Enter Chat</button>
    </form>
  </div>
</template>

<script>
  import getCollection from "@/composables/getCollection.js";
  import useCollection from "@/composables/useCollection.js";
  import useDocument from "@/composables/useDocument.js";

  import Message from "@/components/Message.vue";
  import { timestamp } from "@/firebase/config.js";
  import { ref } from "vue";

  export default {
    components: {
      Message,
    },
    setup() {
      const startOfDay = new Date();
      startOfDay.setHours(startOfDay.getHours()-1);

      const { documents } = getCollection("messages", "time", [
        "time",
        ">=",
        startOfDay,
      ]);
      const { addDoc } = useCollection("messages");

      const name = ref("");

      const messageText = ref("");

      const sendReply = async (reply, message) => {
        if (reply) {
          const { updateDoc } = useDocument("messages", message.id);
          let newReply = {
            message: reply.text,
            name: reply.name, //this is the problem
            replies: [],
          };
          let newMessage = { ...message, replies: [...message.replies, newReply] };

          await updateDoc(newMessage);
        }
      };

      const sendMessage = async () => {
        let message = {
          message: messageText.value,
          time: timestamp(),
          name: name.value,
          replies: [],
        };

        console.log(message);
        if (message.message) {
          await addDoc(message);
          messageText.value = "";
        }
      };

      const setName = (e) => {
        name.value = e.target.name.value;
      };

      return {
        documents,
        name,
        setName,
        messageText,
        sendMessage,
        sendReply,
      };
    },
  };
</script>

<style lang="scss">
  .chat-window {
    width: 80%;
    max-width: 1000px;
    min-width: 500px;
    margin: 20px auto;
  }
  .chat-box {
    position: relative;

    height: 500px;
    overflow-y: auto;
  }
  .chat-messages {
    display: flex;
    flex-direction: column;
  }
  .chat-text-box {
    padding: 0 10px;
    padding-right: 20px;
    text-align: left;
    background: rgba(75, 75, 75, 0.055);
    max-width: 1000px;
    min-width: 500px;
    display: flex;

    & input {
      margin: 5px;
      width: 90%;
      margin-right: auto;
      background: #fefefe;
      border-radius: 20px;
      padding: 2px 10px;
      height: 2em;

      &:focus {
        outline: none;
      }
    }

    & button {
      margin-left: auto;
      border: none;
      background: none;
      color: var(--accent);
    }
  }
</style>
