<template>
  <div class="pokemon">
    <img :src="$helper.getImageUrl(pokemonName, winner)" v-bind:alt="pokemonName">
  </div>
</template>

<script>
  export default {
    name: 'PokemonImage',
    props: {
      pokemonName: String,
      winner: Boolean
    },
  }

</script>

<style scoped>
  .pokemon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 50%;
  }

  .pokemon img {
    align-self: center;
    width: 30%;
    height: 10%;
  }

</style>
