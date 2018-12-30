<template>
  <div class="Skeleton">
    <!-- WINNER LAYOUT-->
    <WinnerScreen v-if="checkWinner()" />

    <!-- FIGHT LAYOUT-->
    <CombatScreen v-else />
  </div>
</template>

<script>
  import CombatScreen from './ScreensComponents/CombatScreen.vue';
  import WinnerScreen from './ScreensComponents/WinnerScreen.vue';

  import {
    mapState
  } from 'vuex';
  

  export default {
    name: 'Skeleton',
    components: {
      CombatScreen,
      WinnerScreen
    },
    computed: {
      ...mapState({
        pikachuHealth: state => state.pikachu.health,
        rattataHealth: state => state.rattata.health,
      })
    },
    methods: {
      checkWinner() {
        return this.pikachuHealth <= 0 || this.rattataHealth <= 0;
      }
    },
  }

</script>
