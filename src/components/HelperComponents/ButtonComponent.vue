<template>
  <div :id="buttonId" class="buttonStyle" @click='clickEvent'>{{text}}</div>
</template>

<script>
  export default {
    name: 'ButtonComponent',
    props: {
      buttonId: String,
      text: String,
      clickEvent: Function,
    },
  }

</script>

<style scoped>
  /* Base Button Style */
  .buttonStyle {
    font-size: 2.7vw;
    height: 40%;
    width: 25%;
    margin: 2%;
    padding: 0.5%;
    align-self: center;
    text-align: center;
  }

  /* Hover/Active Effects */
  #start-game:hover,
  #tackle:hover,
  #thunder-bolt:hover,
  #heal:hover,
  #give-up:hover,
  #play-again:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  #start-game:active,
  #tackle:active,
  #thunder-bolt:active,
  #heal:active,
  #give-up:active,
  #play-again:active {
     transform: scale(0.9);
  }

  /* Buttons Coloring */
  #start-game {
    background: #7bfccb;
  }
  
  #tackle {
    background: orangered;
  }

  #thunder-bolt {
    background: orange;
  }

  #heal {
    background: lightgreen;
  }

  #give-up {
    background: #f2f2f2;
  }

  #play-again {
    background: #7bfccb;
  }

</style>
