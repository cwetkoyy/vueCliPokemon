<template>
  <div>
    <!-- Shows which versus which pokemon is the battle -->
    <BattleField />

    <!-- Helps with making some actions to exist the battle -->
    <CombatOptions />

    <!-- Shows how many damage you and opponent took  -->
    <BattleLog />

  </div>
</template>

<script>
  import BattleField from './CombatScreen/BattleField.vue';
  import CombatOptions from './CombatScreen/CombatOptions.vue';
  import BattleLog from './CombatScreen/BattleLog.vue';


  export default {
    name: 'CombatScreen',
    components: {
      BattleField,
      CombatOptions,
      BattleLog
    },
  }

</script>
