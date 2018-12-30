export default {
  install(Vue) {
    Vue.prototype.$helper = {
      // makes strings to uppercase
      pokemonNameUpperCase(pokemonName) {
        return pokemonName.toUpperCase();
      },

      // finds even index and color them differently
      evenRow(index) {
        return index % 2 === 0;
      },

      // helps with using health for persentage in css width of progress bar
      getPokemonHealth(pokemonHealth, usedInCss = false) {
        const concatToHealth = usedInCss ? '%' : '';
        return pokemonHealth + concatToHealth;
      },

      // gets proper image, watching if state is battle or win
      getImageUrl(pokemonImageName, win = false) {
        if (pokemonImageName === 'pikachu' && win) pokemonImageName = 'pikachu-win';
        const images = require.context('../assets/images/', false, /\.png$/);
        return images(`./${pokemonImageName}.png`);
      },
    }
  }
};
