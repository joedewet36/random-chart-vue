<template>
  <div class="container">
    <div class="top">
      <div class="subtop">
        <h5 class="header">{{ title }}</h5>
        <p class="description">
          This graph shows a random set of scores, and can be regenerated using the
          'Randomize' button.
        </p>
      </div>
      <div class="btnsection">
        <RandomizeButton title="Randomize" @data-emitted="handleScores" />
      </div>
    </div>
    <div class="bottom">
      <div class="cards">
        <ScoreCard :score="youScore" description='Your Score' :small=false iconColor="#EDC727" />
        <ScoreCard :score="avgScore" description='Average' :small=true iconColor="#3B60E4" />
        <ScoreCard :score="targetScore" description='Target' :small=true iconColor="#588157" />
      </div>
      <div class="scorecircle">
        <ScoreCircle :you-score=youScore :avg-score=avgScore :target-score=targetScore />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import RandomizeButton from './RandomizeButton.vue';
import ScoreCard from './ScoreCard.vue';
import ScoreCircle from './ScoreCircle.vue';
import { defineProps, onMounted, ref } from 'vue';
import type { Scores } from '@/interfaces/Scores.ts';

const youScore = ref<number>(0);
const avgScore = ref<number>(0);
const targetScore = ref<number>(0);
defineProps<{ title: String }>();
const loadScores = async (y: number, a: number, t: number) => {
  youScore.value = y;
  avgScore.value = a;
  targetScore.value = t;
};
/* Function to handle event from Random Button load scores  */
const handleScores = async (scores: Scores) => {
  await loadScores(scores.youScore, scores.avgScore, scores.targetScore);
};
/* Lifecycle Hook load default value when mounted  */
onMounted(async () => {
  await loadScores(95, 43, 88);
});
</script>
<style lang="postcss" scoped>
.scorecircle {
  @apply flex bg-no-repeat lg:w-6/12  ml-2;
}
.cards {
  @apply flex flex-col lg:w-6/12 pt-2 lg:pt-0 pb-0 pl-6 pr-6 items-start gap-y-3;
}
.bottom {
  @apply flex flex-col md:flex-row items-center p-2;
  @apply border-2 border-transparent border-b-gray-200;
}
.btnsection {
  @apply flex items-end flex-col md:w-6/12 px-10 pb-4;
}
.subtop {
  @apply flex flex-col md:w-6/12 px-10 pb-4 items-start;
}
.top {
  @apply flex flex-col md:flex-row pb-4 items-center;
  @apply border-2 border-transparent border-b-gray-200;
}
.description {
  @apply font-inter text-sm text-left font-normal text-[#535151] mt-2
}
.header {
  @apply font-inter not-italic font-semibold text-[24px] leading-[120%] capitalize
}
.container {
  @apply flex flex-col lg:items-center w-full gap-x-4 font-inter font-feature-default antialiased;
 }
.card {
  @apply flex flex-col items-start bg-no-repeat bg-gray-100 ;
  @apply border w-[16rem] border-gray-100 rounded-xl mr-2 pl-2;
}
.card-sm {
  @apply flex flex-col h-[4rem] w-[16rem] items-start;
  @apply bg-no-repeat flex-nowrap bg-gray-100 border border-gray-100 rounded-xl mr-2 pl-2;
}
</style>
