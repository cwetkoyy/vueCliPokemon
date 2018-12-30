import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types.js';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameHasStarted: false,
    checkWinner: false,
    battleLog: [],

    /* Pikachu */
    pikachu: {
      health: 100,
      name: 'pikachu',
      tackle() {
        return Math.floor(Math.random() * (4 - 10) + 10);
      },
      thunderBolt() {
        return Math.floor(Math.random() * (11 - 21) + 21);
      },
      heal: 10,
      battleLog: {
        hit: 'Pikachu attacks: ',
        heal: 'Pikachu takes potion: +'
      },
    },

    /* Rattata */
    rattata: {
      health: 100,
      name: 'rattata',
      bite() {
        return Math.floor(Math.random() * (7 - 13) + 13);
      },
      battleLog: {
        hit: 'Rattata attacks: ',
      }
    },

    /* Show log */
    showLog(battleLog, pikachuAction, pikachuDMG, rattataAction, rattataDMG, thunderBolt = '', heal = ' dmg ') {
      battleLog.push(pikachuAction + pikachuDMG + heal + thunderBolt);
      battleLog.push(rattataAction + rattataDMG + " dmg");
    }
  },

  mutations: {
    // Start game
    [types.GAME_HAS_STARTED]: (state, value) => {
      state.gameHasStarted = value;
      if (value) {
        state.pikachu.health = 100;
        state.rattata.health = 100;
        state.battleLog = [];
      }
    },

    /* Gameplay Mutations */
    // Tackle
    [types.TACKLE]: state => {
      const pikachuTackle = state.pikachu.tackle();
      const rattataBite = state.rattata.bite();

      // battle calculations
      state.rattata.health -= pikachuTackle;
      state.pikachu.health -= rattataBite;

      //push data into the log
      state.showLog(state.battleLog, state.pikachu.battleLog.hit, pikachuTackle,
        state.rattata.battleLog.hit, rattataBite);

    },

    // Thunder bolt
    [types.THUNDER_BOLT]: state => {
      const pikachuThunderBolt = state.pikachu.thunderBolt();
      const rattataBite = state.rattata.bite();

      state.rattata.health -= pikachuThunderBolt;
      state.pikachu.health -= rattataBite;

      state.showLog(state.battleLog, state.pikachu.battleLog.hit, pikachuThunderBolt, state.rattata.battleLog
        .hit,
        rattataBite, " { it's super effective! }");
    },

    // Get potion
    [types.GET_POTION]: state => {
      const pikachuHeal = state.pikachu.heal;
      const rattataBite = state.rattata.bite();

      state.pikachu.health += pikachuHeal;
      state.pikachu.health -= rattataBite;

      state.showLog(state.battleLog, state.pikachu.battleLog.heal, pikachuHeal, state.rattata.battleLog.hit,
        rattataBite, '', ' health ');
    },

    // Give up
    [types.GIVE_UP]: state => state.gameHasStarted = false,
  },


  actions: {
    // Start game
    [types.ACTION_GAME_HAS_STARTED]: ({
      commit
    }, value) => {
      commit(types.GAME_HAS_STARTED, value);
    },

    /* Gameplay ACTIONS */
    // Tackle
    [types.ACTION_TACKLE]: ({
      commit
    }) => commit(types.TACKLE),

    // Thunder bolt
    [types.ACTION_THUNDER_BOLT]: ({
      commit
    }) => commit(types.THUNDER_BOLT),

    // Get potion
    [types.ACTION_GET_POTION]: ({
      commit
    }) => commit(types.GET_POTION),

    // Give up
    [types.ACTION_GIVE_UP]: ({
      commit
    }) => commit(types.GIVE_UP),
  },
});
