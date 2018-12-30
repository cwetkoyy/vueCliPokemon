<template>
  <div id="combatOptions">
    <!-- When you haven't started the game -->
    <Button v-if="!gameHasStarted" :buttonId="buttonStart.id" :clickEvent="startNewGame" :text="buttonStart.text" />

    <!-- When you have started the game -->
    <ControlPanel v-else :tackle="tackle" :thunderBolt="thunderBolt" :getPotion="getPotion" :giveUp="giveUp" />

  </div>
</template>

<script>
  import ControlPanel from './ControlPanel';
  import ButtonComponet from '../../HelperComponents/ButtonComponent';
  import helperMixin from '../../../mixins/helperMixin.js';

  import {
    mapState,
    mapActions
  } from 'vuex';

  import {
    ACTION_TACKLE,
    ACTION_GIVE_UP,
    ACTION_THUNDER_BOLT,
    ACTION_GET_POTION
  } from '../../../store/types.js';


  export default {
    name: 'CombatOptions',
    mixins: [helperMixin],

    components: {
      ControlPanel,
      Button: ButtonComponet
    },
    data() {
      return {
        buttonStart: {
          id: 'start-game',
          text: 'START GAME',
        }
      }
    },
    computed: {
      ...mapState({
        gameHasStarted: state => state.gameHasStarted,
      }),
    },
    methods: {
      ...mapActions({
        tackle: ACTION_TACKLE,
        thunderBolt: ACTION_THUNDER_BOLT,
        getPotion: ACTION_GET_POTION,
        giveUp: ACTION_GIVE_UP,
      }),
    },
  }

</script>

<style scoped>
  #combatOptions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 30%;
    align-items: center;
    border: 1px solid black;
  }

</style>
