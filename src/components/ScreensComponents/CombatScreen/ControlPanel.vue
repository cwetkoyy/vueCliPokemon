<template>
  <div id="combatOptions">
    <Button v-for="button in buttons" :key="button.id" :buttonId="button.id" :clickEvent="button.clickEvent" :text="button.text" />
  </div>
</template>

<script>
  import ButtonComponet from '../../HelperComponents/ButtonComponent';


  export default {
    name: 'ControlPanel',
    components: {
      Button: ButtonComponet
    },
    props: {
      tackle: Function,
      thunderBolt: Function,
      getPotion: Function,
      giveUp: Function
    },
    data() {
      return {
        buttons: [{
            id: 'tackle',
            clickEvent: this.tackle,
            text: 'TACKLE'
          },
          {
            id: 'thunder-bolt',
            clickEvent: this.thunderBolt,
            text: 'THUNDER BOLT'
          },
          {
            id: 'heal',
            clickEvent: this.getPotion,
            text: 'GET POTION'
          },
          {
            id: 'give-up',
            clickEvent: this.giveUp,
            text: 'GIVE UP'
          },
        ],
      }
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
