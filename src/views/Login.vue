<template>
  <button id="login" @click="login">Login</button>
</template>

<script>
  //   import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  //   import { provider } from "@/firebase/config.js";
  import firebase from "firebase/app";
  import { provider } from "@/firebase/config.js";
  import getUser from "@/composables/getUser.js";

  export default {
    setup() {
      const user = getUser();

      const login = () => {
        firebase
          .auth()
          .signInWithRedirect(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(token);
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
            // Handle Errors here.
            //   var errorCode = error.code;
            //   var errorMessage = error.message;
            //   // The email of the user's account used.
            //   var email = error.email;
            //   // The firebase.auth.AuthCredential type that was used.
            //   var credential = error.credential;
            // ...
          });
      };
      return { login, user };
    },
  };
</script>

<style>
#login{
  margin: 50px auto;
}
</style>
