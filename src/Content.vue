<template>
  <div id="content-container">
    <div id="col1">
      <Transition :name="animationName + 'Before'">
        <span class="before" :key="currentPage" v-if="currentPage > 0">{{ pages[currentPage - 1].title }}</span>
      </Transition>
      <Transition :name="animationName">
        <span :key="currentPage">{{ pages[currentPage].title }}</span>
      </Transition>
      <Transition :name="animationName + 'After'">
        <span class="after" :key="currentPage" v-if="currentPage < pages.length - 1">{{ pages[currentPage + 1].title
        }}</span>
      </Transition>
    </div>
    <div id="col2" @wheel="stopIfScrollable" @touchstart="stopIfScrollable"
      :class="overflowInCol2Allowed ? '' : 'overflow-hidden'">
      <Transition :name="animationName" @before-enter="preventOverflowInCol2" @before-leave="preventOverflowInCol2"
        @after-enter="allowOverflowInCol2" @after-leave="allowOverflowInCol2">
        <Header v-if="currentPage === 0" />
        <WorkExperience v-else-if="currentPage === 1" />
        <Education v-else-if="currentPage === 2" />
        <Projects v-else-if="currentPage === 3" />
      </Transition>
    </div>
    <div id="scroll-indicator" :class="currentPage === 0 ? '' : 'hidden'"></div>
  </div>
</template>

<script setup lang="ts">
import { Transition, computed, h, onMounted, onUnmounted, ref } from 'vue';
import WorkExperience from './WorkExperience.vue';
import Education from './Education.vue';
import Projects from './Projects.vue';
import Header from './Header.vue';

const pages = [
  {
    title: "Finn Melzer",
    content: ""
  },
  {
    title: "Work Experience",
    content: h('WorkExperience')
  },
  {
    title: "Education",
    content: "Content 3"
  },
  {
    title: "Projects",
    content: "Content 5"
  },
]

const currentPage = ref(0);
const animationName = ref('countUp')

const stopIfScrollable = (e: WheelEvent | TouchEvent) => {
  const target = e.target as HTMLElement;
  if (target.scrollHeight > target.clientHeight) {
    e.stopPropagation();
  }
}

const overflowInCol2Allowed = ref(true);
const preventOverflowInCol2 = () => {
  overflowInCol2Allowed.value = false;
}
const allowOverflowInCol2 = () => {
  overflowInCol2Allowed.value = true;
}

onMounted(() => {
  let dontScroll = false;
  window.onwheel = (e) => {
    if(dontScroll) {
      return;
    }
    if (e.deltaY > 0) {
      if (currentPage.value < pages.length - 1) {
        animationName.value = 'countUp';
        currentPage.value++;
      }
    } else {
      if (currentPage.value > 0) {
        animationName.value = 'countDown';
        currentPage.value--;
      }
    }
    dontScroll = true;
    setTimeout(() => {
      dontScroll = false;
    }, 300)
  }
  window.onkeydown = (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown' || e.key === 'Enter') {
      if (currentPage.value < pages.length - 1) {
        animationName.value = 'countUp';
        currentPage.value++;
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (currentPage.value > 0) {
        animationName.value = 'countDown';
        currentPage.value--;
      }
    } else if (e.key === 'Home') {
      animationName.value = 'countDown';
      currentPage.value = 0;
    } else if (e.key === 'End') {
      animationName.value = 'countUp';
      currentPage.value = pages.length - 1;
    }
  }
  // scroll for mobile
  window.ontouchstart = (e) => {
    const startY = e.touches[0].clientY;
    const startPage = currentPage.value;
    window.ontouchmove = (e) => {
      // scroll only one page max
      const deltaY = startY - e.touches[0].clientY;
      console.log(deltaY);
      if (deltaY > 0) {
        if (startPage < pages.length - 1) {
          animationName.value = 'countUp';
          currentPage.value = startPage + 1;
        }
      } else if (deltaY < 0) {
        if (startPage > 0) {
          animationName.value = 'countDown';
          currentPage.value = startPage - 1;
        }
      }
      window.ontouchmove = null;
    }
  }
})

onUnmounted(() => {
  window.onwheel = null;
  window.onkeydown = null;
  window.ontouchstart = null;
})

</script>

<style lang="scss">
/* col1 and two should be next to each other, but stack ontop on small screens*/
#content-container {
  color: #fff;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 28em 1fr;
  grid-template-rows: 100%;
  overflow: visible;
  --offsetBefore: -250px;
  --offsetAfter: 250px;
}

@media (max-width: 880px) {
  #content-container {
    grid-template-columns: 100%;
    grid-template-rows: max-content 1fr;
    --offsetBefore: -100px;
    --offsetAfter: 400px
  }
}


#col1,
#col2 {
  float: left;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 1rem;

  &>* {
    grid-row: 1;
    grid-column: 1;
  }

  &>span {
    white-space: pre;
  }
}

#col1 {
  font-size: 3.5rem;
  font-family: 'VT323', sans-serif;
}

#col2 {
  z-index: 1;
  justify-items: start;
  align-items: start;
  padding: 2rem;
  font-size: 1.2rem;
  overflow-y: auto;

  &.overflow-hidden {
    overflow-y: hidden;
  }
}

@media (max-width: 880px) {

  #col1,
  #col2 {
    justify-items: initial;
    align-items: initial;
  }

  #col1 {
    padding-block-end: 0;
  }

}

.before {
  filter: invert(1) grayscale(1) opacity(0.5);
  position: relative;
  top: var(--offsetBefore)
}

.after {
  filter: invert(1) grayscale(1) opacity(0.5);
  position: relative;
  top: var(--offsetAfter)
}

.countUp-enter-from {
  opacity: 0;
  transform: translateY(var(--offsetAfter));
}

.countUpBefore-enter-from {
  opacity: 0;
  transform: translateY(calc(-1 * var(--offsetBefore)));
}

.countUpAfter-enter-from {
  opacity: 0;
  transform: translateY(var(--offsetAfter));
}

.countUp-leave-to {
  opacity: 0;
  transform: translateY(var(--offsetBefore));
}

.countUpBefore-leave-to {
  opacity: 0;
  transform: translateY(var(--offsetBefore));
}

.countUpAfter-leave-to {
  opacity: 0;
  transform: translateY(calc(-1 * var(--offsetAfter)));
}

.countDown-enter-from {
  opacity: 0;
  transform: translateY(var(--offsetBefore));
}

.countDownBefore-enter-from {
  opacity: 0;
  transform: translateY(var(--offsetBefore));
}

.countDownAfter-enter-from {
  opacity: 0;
  transform: translateY(calc(-1 * var(--offsetAfter)));
}

.countDown-leave-to {
  opacity: 0;
  transform: translateY(var(--offsetAfter));
}

.countDownBefore-leave-to {
  opacity: 0;
  transform: translateY(calc(-1 * var(--offsetBefore)));
}

.countDownAfter-leave-to {
  opacity: 0;
  transform: translateY(var(--offsetAfter));
}

.countUp-enter-active,
.countUp-leave-active,
.countDown-enter-active,
.countDown-leave-active,
.countUpBefore-enter-active,
.countUpAfter-enter-active,
.countUpBefore-leave-active,
.countUpAfter-leave-active,
.countDownBefore-enter-active,
.countDownAfter-enter-active,
.countDownBefore-leave-active,
.countDownAfter-leave-active {
  transition: all 0.5s ease;
}

#scroll-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  margin: 10px;

  border-left: #fff 2px solid;
  border-bottom: #fff 2px solid;
  width: 20px;
  height: 20px;
  border-bottom-left-radius: 10%;

  opacity: 0.5;
  transition: 0.5s;

  &.hidden {
    opacity: 0;
  }

  animation: scroll 1.5s ease infinite;

  @keyframes scroll {
    0% {
      bottom: 0;
    }

    50% {
      bottom: 5px;
    }

    100% {
      bottom: 0;
    }
  }
}
</style>
