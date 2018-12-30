<template>
  <div id="battleField">
    <!-- Pokemon Component Instances -->
    <Pokemon :pokemon="pikachu" />
    <Pokemon :pokemon="rattata" />
    
  </div>
</template>

<script>
  import PokemonComponent from '../../HelperComponents/PokemonComponent.vue';
  
  import {
    mapState
  } from 'vuex';


  export default {
    name: 'BattleField',
    components: {
      Pokemon: PokemonComponent
    },
    computed: {
      ...mapState({
        pikachu: state => state.pikachu,
        rattata: state => state.rattata,
      })
    }
  }

</script>

<style scoped>
  #battleField {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 30%;
    align-items: center;
  }

</style>
