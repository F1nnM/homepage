<template>
  <div id="work-experience">
    <div class="single-experience" v-for="experience in experiences" :key="experience.description">
      <div class="header">
        <a :href="experience.url" target="_blank" v-if="experience.url" class="with-icon">
          <span class="title">{{ experience.title }}</span>
        </a>
        <span class="title" v-else>{{ experience.title }}</span>
      </div>
      <span class="time">{{ experience.time }}</span>
      <div class="description">{{ experience.description }}</div>
      <div class="tags">
        <span class="tag" v-for="tag in experience.technologies" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const experiences = [
  {
    time: "07/2023 - today",
    title: "PDF Editor",
    description: "Lead a development team to create a typescript module for complex manipulations of PDF files from scratch, as well as a browser-based editor and 3D viewer for PDF files with special color spaces, such as metallic colors.",
    url: null,
    technologies: ["Typescript", "Vue.js", "Babylon.js", "PDF", "Google Cloud" ]
  },
  {
    time: "06/2023 - today",
    title: "AI-based interiew processing",
    description: "Lead a development team to create a web-application for the automatic processing of stakeholder interviews. Recorded audio files are transcribed and analyzed with OpenAI's GPT, to extract clusters of interviewees, their needs and wants and general opportunites for a company.",
    url: null,
    technologies: ["Typescript", "Vue.js", "OpenAI / GPT", "Nest.js" ]
  },
  {
    time: "11/2022 - 09/2023",
    title: "Various business apps for the german railway",
    description: "Developed multiple full-stack web applications for the german railway, to support and modernize their business processes. The apps are used by many customers and employees daily.",
    url: null,
    technologies: ["Typescript", "Vue.js", "Kotlin", "Java", "PostgreSQL" ]
  },
  {
    time: "11/2022 - 09/2023",
    title: "Hyperparameter Optimization of Machine Learning Models",
    description: "Developed a machine-learning supported web application for the hyperparameter optimization of machine learning models to support the MlOps team of a large german company.",
    url: null,
    technologies: ["Python", "Streamlit", "Machine Learning"]
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

  .tags {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-family: monospace;

    & > span {
      background-color: #ffffff2c;
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
      border: 1px solid #ffffff4d;
    }
  }
}
</style>