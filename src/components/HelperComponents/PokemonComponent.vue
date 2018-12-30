<template>
  <div :class="[pokemonName]">
    <!-- Pokemon Image -->
    <PokemonImage :pokemonName="pokemonName"/>

    <!-- Pokemon Name -->
    <div>{{$helper.pokemonNameUpperCase(pokemonName)}}</div>

    <!-- Pokemon Health Progress Bar -->
    <HealthProgressBar :pokemonHealth="pokemonHealth" />

  </div>
</template>

<script>
  import HealthProgressBar from './HealthProgressBar';
  import PokemonImage from './PokemonImage.vue';

  export default {
    name: 'PokemonComponent',
    components: {
      HealthProgressBar,
      PokemonImage
    },
    props: {
      pokemon: Object,
    },
    computed: {
      pokemonName() {
        return this.pokemon.name;
      },
       pokemonHealth() {
        return this.pokemon.health;
      }
    },
  }

</script>

<style scoped>
  .pikachu,
  .rattata {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
    width: 80%;
    font-size: 3vw;
  }

  .rattata {
    margin-top: 7%;
  }

</style>
