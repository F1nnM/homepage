<template>
  <div class="container">
    <a href="mailto:contact@mfinn.de" class="section" target="_blank">
      <svg-icon type="mdi" :path="mdiAt" size="50"></svg-icon>
    </a>
    <a href="https://github.com/F1nnM" class="section" target="_blank">
      <svg-icon type="mdi" :path="mdiGithub" size="50"></svg-icon>
    </a>
    <a href="https://www.linkedin.com/in/finn-melzer/" class="section" target="_blank">
      <svg-icon type="mdi" :path="mdiLinkedin" size="50"></svg-icon>
    </a>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMapMarker, mdiAt, mdiGithub, mdiLinkedin } from '@mdi/js';
</script>
    
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: max-content;
  align-content: space-evenly;
  gap: 1rem;
  justify-content: center;
  max-width: 600px;
  margin: auto;
}

.section {
  background-color: #ffffff26;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;

  &:hover {
    background-color: #ffffff4d;
  }
}
</style>