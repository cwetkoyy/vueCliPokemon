import {mapState, mapActions} from 'vuex';
import {
  ACTION_GAME_HAS_STARTED
} from '../store/types.js';


export default {
  name: "helperMixin",
  methods: {
    ...mapActions({
      startGameController: ACTION_GAME_HAS_STARTED,
    }),

    // helps with turning on the game
    startNewGame() {
      this.startGameController(true); 
    },
  },
  computed: {
    ...mapState({
      pikachuHealth: state => state.pikachu.health,
      rattataHealth: state => state.rattata.health,
    }),
    
    // finds winner by comparing the health
    findWinner() {
      return this.pikachuHealth > this.rattataHealth ? 'pikachu' : 'rattata';
    }
  },
};
