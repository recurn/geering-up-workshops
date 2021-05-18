<template>
  <h1>Python Puzzle</h1>
  <h2>Code</h2>
  <div class="copy-nav">
    <button @click="copy">Copy</button>
    <a href="https://codecollab.io" target="blank">Editor</a>
  </div>

  <code>
    <pre class="prettyprint lang-py code-block">
       
# welcoming the user
name = input("What is your name? ")
 
print("Hello, " + name " ,Time to play hangman!")
 
print(" ")
 
print("Start guessing...")
 
# here we set the secret
word = "science"
 
# creates an variable with an empty value
guesses = ''
 
# determine the number of turns
turns = 10
 
# Create a while loop
# check if the turns are more than zero
while "_______":
 
    # make a counter that starts with zero
    missing_letters = 0
 
    # for every character in our secret word
    for char in "______":
 
        # see if the character is in the players guesses
        if "_____" in "_____":
 
            # print then out the character
            print("_____",end = ' ')
 
        else:
 
            # if not found, print a dash
            print("_",end = ' ')
 
            # and increase the failed counter with one
            missing_letters = "____ _____"
 
    # if missing_letters is equal to zero
    # print You Won
    if missing_letters == 0:
        print("You won")
        # exit the script
        "_____"
 
    # ask the user go guess a character
    guess = input("guess a character:")
 
    # set the players guess to guesses
    guesses += "_____"
 
    # if the guess is not found in the secret word
    if "____" not in "_____":
        # turns counter decreases with 1 (now 9)
        turns = "___ ___"
 
        # print wrong
        print("Wrong")
 
    # how many turns are left
    print("You have", + turns, 'more guesses')
 
    # if the turns are equal to zero
    if turns == 0:
        # print "You Lose"
        print("You Lose")
        "______"
 
    </pre>
  </code>
  <Chat />
</template>

<script>
  import Chat from "@/components/Chat.vue";
  export default {
    components: { Chat },
    methods: {
      copy() {
        let text = document.getElementsByClassName("code-block")[0].textContent;

        //This will not work for anyone using IE. They will have to copy it manually.
        navigator.clipboard.writeText(text).then(
          () => {
            alert("Code has been copied!");
          },
          () => {
            alert("ERROR. Code not copied!");
          }
        );
      },
    },
  };
</script>

<style lang="scss">
  .copy-nav button,
  .copy-nav a {
    display: inline-block;
    padding: 5px 10px;
    margin: auto 10px;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    background: none;
    border-radius: 3px;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
      background: black;
      color: white;
    }
  }
  code {
    display: inline-block;
    margin: auto;
  }
  pre {
    padding: 20px !important;
    background: #f1f1f1;
    text-align: left;
  }
</style>
