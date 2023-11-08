<template>
  <div id="work-experience">
    <div class="single-experience" v-for="experience in experiences" :key="experience.description">
      <div class="header">
        <span class="title">{{ experience.title }}</span>
        <span class="at">@</span>
        <a class="with-icon" :href="experience.companyLink" target="_blank"><span class="company">{{ experience.company }}</span></a>
      </div>
      <span class="time">{{ experience.time }}</span>
      <div class="description">{{ experience.description }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">

const experiences = [
  {
    time: "10/2019 - 10/2022",
    title: "B.Sc. Computer Science",
    company: "DHBW Heidenheim",
    description: "Dual studies in the field of technical computer science with a focus on Data Science. Final grade: 1.5",
    companyLink: "https://www.dhbw-heidenheim.de/"
  },
  {
    time: "12/2022",
    title: "Building AI - Advanced Coding",
    company: "University of Helsinki",
    description: "",
    companyLink: "https://certificates.mooc.fi/validate/acvdf23c0bh"
  }
]
</script>
  
<style lang="scss" scoped>
#work-experience {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: 1rem;
  align-content: space-evenly;
  overflow: visible;
}

.single-experience {
  background-color: #ffffff26;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;

  .header {
    margin-bottom: 0rem;
    box-shadow: 0 10px 10px -8px #ffffff;

    .title {
      font-weight: bold;
      font-family: monospace;
    }

    .at {
      display: inline-block;
      margin-inline: 0.5rem;
      font-size: 0.8rem;
      transform: translateY(-2px);
    }

    .company {
      font-family: monospace;
      font-size: 0.9rem;
    }
  }

  .time {
    font-size: 0.9rem;
    font-family: monospace;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  .description {
    text-align: start;
    font-size: 1rem;
  }
}
</style>