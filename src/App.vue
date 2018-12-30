<template>
  <div id="app">
    <Skeleton />
  </div>
</template>

<script>
  import Skeleton from './components/Skeleton';

  export default {
    name: 'App',
    components: {
      Skeleton
    }
  }

</script>

<style>
  #app {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

</style>
