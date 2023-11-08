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
    time: "11/2022 - today",
    title: "Lead Developer",
    company: "P&T Software",
    description: "As the lead developer on multiple concurrent projects, I am responsible for everything from the requirements analysis with customers over design and full-stack development of highly technical features to the guidance of multiple junior developers.",
    companyLink: "https://pt.software/"
  },
  {
    time: "10/2019 - 10/2022",
    title: "Junior Developer",
    company: "Wacker Chemie AG",
    description: "As part of my dual studies, I worked as full member of the dev team on multiple projects, focussed on full-stack web apps for business processes and machine learning.",
    companyLink: "https://www.wacker.com/"
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