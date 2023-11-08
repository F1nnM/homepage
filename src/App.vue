<template>
  <div id="container">
    <div id="background_container">
      <div id="background"></div>
    </div>
    <div id="content">
    <Content />
    </div>
  </div>
</template>
<script setup lang="ts">
import Content from './Content.vue';


</script>
<style lang="scss">

#container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

#background_container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  #background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    --barwidth: 500px;
    background-image: repeating-linear-gradient(45deg, #FFDFBA calc(1 * var(--barwidth)), #FFFFBA calc(2 * var(--barwidth)), #BAFFC9 calc(3 * var(--barwidth)), #BAE1FF calc(4 * var(--barwidth)), #DBBAFF calc(5 * var(--barwidth)), #FFBADA calc(6 * var(--barwidth)), #FFB8B3 calc(7 * var(--barwidth)), #FFDFBA calc(8 * var(--barwidth)));
    animation: gradient 15s linear infinite;
    --tile: calc(10 * var(--barwidth));

    background-size: var(--tile) var(--tile);
    @keyframes gradient {
      0% {
        background-position: 0px 0px;
      }
      100% {
        background-position: var(--tile) 0px;
      }
    }
  }
}

#content {
  width: 100vw;
  height: 400px;
  max-height: 80vh;
  background: #3b3b3bab;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  overflow: visible;
}
</style>