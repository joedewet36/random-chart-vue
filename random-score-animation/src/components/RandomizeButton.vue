<template>
  <button type="button" @click="handleClick"
    class="btn">
    {{ title }}
    <svg class="icon" width="25" height="24" viewBox="0 0 25 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.963 4.43301C7.77756 2.86067 10.099 1.99666 12.5 2.00001C18.023 2.00001 22.5 6.47701 22.5 12C22.5 14.136 21.83 16.116 20.69 17.74L17.5 12H20.5C20.5001 10.4316 20.0392 8.89781 19.1747 7.58927C18.3101 6.28072 17.0799 5.25517 15.6372 4.64013C14.1944 4.0251 12.6027 3.84771 11.06 4.13003C9.5172 4.41234 8.09145 5.14191 6.96 6.22801L5.963 4.43301ZM19.037 19.567C17.2224 21.1393 14.901 22.0034 12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 9.86401 3.17 7.88401 4.31 6.26001L7.5 12H4.5C4.49987 13.5684 4.96075 15.1022 5.82534 16.4108C6.68992 17.7193 7.92007 18.7449 9.36282 19.3599C10.8056 19.9749 12.3973 20.1523 13.94 19.87C15.4828 19.5877 16.9085 18.8581 18.04 17.772L19.037 19.567Z"
        fill="#1A1A1A" />
    </svg>

  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['data-emitted']);
defineProps<{ title: String }>();
interface Scores {
  youScore: Number,
  avgScore: Number,
  targetScore: Number
};
const randInt = () => { return Math.floor(Math.random() * 100) + 1; };
const handleClick = () => {
  const scoreObject:Scores = {
   youScore: randInt(),
   avgScore: randInt(),
   targetScore: randInt()
  };
  emit('data-emitted', scoreObject);
};
</script>
<style lang="postcss" scoped>
   .btn{
    @apply flex flex-row px-5 justify-center items-center w-40 h-12;
    @apply gap-x-2 bg-yellow-500 rounded-lg not-italic font-medium text-base text-gray-900;
    @apply hover:bg-yellow-400 hover:text-white focus:ring-4 focus:outline-none focus:bg-yellow-600;
  }
  .icon{
    @apply w-6 h-6 text-gray-800 dark:text-white;
  }
</style>
