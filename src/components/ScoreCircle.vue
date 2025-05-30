<template>
   <div class="center">
        <div class="progress">
            <svg class="box" viewBox="30 30 130 130" :key="youScore"  >
                <circle class="circle1" cx="100" cy="100" r="0"></circle>
                <circle class="circle2" transform-origin="top" :stroke-dasharray="calcDashArray(18)" :stroke-dashoffset="calcDashOffset(18,'t')" cx="100" cy="100" r="18"></circle>
                <circle class="circle3" cx="100" cy="100" r="36" :stroke-dasharray="calcDashArray(36)" :stroke-dashoffset="calcDashOffset(36,'a')" ></circle>
                <circle class="circle4" cx="100" cy="100" r="54" :stroke-dasharray="calcDashArray(54)" :stroke-dashoffset="calcDashOffset(54,'y')" ></circle>
            </svg>
        </div>
    </div>
</template>
<script setup lang="ts">
 import { defineProps } from 'vue';
 import type { Scores } from '@/interfaces/Scores';

const props = defineProps<Scores>();

const calcDashArray = (radius:number) => {
    const circumference = Math.PI * (radius * 2);
    return Math.round(circumference * 100) / 100;
};
/* Function to calculate circumference :the distance around the boundary of a circle
 And to calculate the dashoffset of circle in relation to the score  */
const calcDashOffset = (radius:number, scoreType:string) => {
    const circumference = Math.PI * (radius * 2);
    let score :number = 0;
    switch (scoreType) {
        case 'y' : score = props.youScore; break;
        case 'a' : score = props.avgScore; break;
        case 't' : score = props.targetScore;
                           break;
    }
    const dashOffset = ((100 - score) / 100) * circumference;
    return Math.round(dashOffset * 100) / 100;
};

</script>
<style lang="postcss" scoped>
.box{
    @apply w-[300px] h-[300px] md:w-[400px] md:h-[400px];
}
.center {
   @apply w-full h-full flex items-center justify-center bg-transparent;
}

.progress {
    @apply bg-transparent rounded-[5mm] flex items-center justify-center relative;
}
circle {
    fill: none;
}
svg {
    @apply [transform:rotate(90_0,0)];
}
.circle1 {
    @apply stroke-[transparent] stroke-[1.5rem];
}
@keyframes dash {
  from {
    stroke-dashoffset: 100;
  }
}
.circle2 {
    @apply stroke-[#588157] stroke-[0.625rem] animate-[dash_2s_linear_forwards] ;
    stroke-linecap: round;
    @apply [transform:rotate(90_0,0)];
}
.circle3 {
    @apply stroke-[#3b60e4] stroke-[0.625rem] ;
    stroke-linecap: round;
    @apply animate-[dash_2s_linear_forwards] [transform:rotate(90_0,0)];
}
.circle4 {
    @apply stroke-[#edc727] stroke-[0.625rem];
    stroke-linecap: round;
    @apply animate-[dash_2s_linear_forwards] [transform:rotate(90_0,0)];
}
</style>
