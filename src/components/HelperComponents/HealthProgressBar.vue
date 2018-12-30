<template>
  <div class="progress-bar-outer">
    <div class="progress-bar" :style="{width: $helper.getPokemonHealth(pokemonHealth, true)}">
      {{ $helper.getPokemonHealth(pokemonHealth)}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HealthProgressBar',
    props: {
      pokemonHealth: Number
    }
  }

</script>

<style scoped>
  .progress-bar-outer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 10%;
    background: lightgrey;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    font-size: 2.2vw;
  }

  .progress-bar {
    transition: all 0.2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: green;
  }

</style>
