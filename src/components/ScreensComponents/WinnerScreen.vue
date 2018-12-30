<template>
  <div id="winner">
    <h3>WINNER!</h3>

    <!-- Winner Pokemon Image -->
    <PokemonImage :pokemonName="findWinner" :winner="true" />

    <!-- Button to play new game -->
    <Button :buttonId="buttonagain.id" :clickEvent="startNewGame" :text="buttonagain.text" />
  </div>
</template>

<script>
  import ButtonComponent from '../HelperComponents/ButtonComponent';
  import PokemonImage from '../HelperComponents/PokemonImage.vue';
  import helperMixin from '../../mixins/helperMixin.js';


  export default {
    name: 'WinnerScreen',
    mixins: [helperMixin],
    components: {
      PokemonImage,
      Button: ButtonComponent,
    },
    props: {},
    data() {
      return {
        buttonagain: {
          id: 'play-again',
          text: 'PLAY AGAIN',
        }
      }
    }, 
  }

</script>

<style scoped>
  h3 {
    margin: 0;
    padding: 0;
  }

  #winner {
    display: flex;
    flex-direction: column;
    padding: 10% 0;
    text-align: center;
    font-size: 4vw;
  }
</style>
