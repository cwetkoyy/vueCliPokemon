<template>
  <div id="battleList">
    <!-- Battle log list rows -->
    <div id="battleLog" v-for="(battle, index) in battleLog" :key="index">
      <div :class="{ blue: $helper.evenRow(index), red: !$helper.evenRow(index) }">
        {{ battle }}
      </div>
    </div>

  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';


  export default {
    name: 'BattleLog',
    computed: {
      ...mapState({
        battleLog: state => state.battleLog,
      })
    }
  }

</script>

<style scoped>
  #battleLog {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 30%;
    align-items: center;
    border: 1px solid black;
  }

  .blue {
    padding: 1% 0;
    width: 100%;
    background: skyblue;
    color: blue;
    font-size: 3vw;
    text-align: center;
  }

  .red {
    padding: 1% 0;
    width: 100%;
    background: pink;
    color: #a80000;
    font-size: 3vw;
    text-align: center;
  }

</style>
