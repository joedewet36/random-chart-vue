
<template lang="">
   <div :class="cardClass">
          <div class="card-description-row">
            <span class="icon" :style="iconStyle"></span>
            <span class="card-description">
             {{description}}
            </span>
            <span class="card-score" :style="scoreStyle" >{{score}}</span>
          </div>
        </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue';
interface Props {
  description: String
  score?: Number,
  small: Boolean,
  iconColor : String
};
const props = defineProps<Props>();
/* For Bigger Card  */
const cardClass = computed(() => {
  return props.small ? 'card-sm' : 'card';
});
/* Colour for Card  */
const iconStyle = computed(() => {
  return props.iconColor ? { backgroundColor: props.iconColor } : {};
});
/* For Bigger Card  */
const scoreStyle = computed(() => {
    return !props.small ? { marginTop: '5rem', marginBottom: '1rem', fontWeight: 600, fontSize: '48px' } : {};
});

</script>
<style lang="postcss" scoped>
.card-score {
  @apply flex justify-items-end justify-end text-2xl md:text-4xl rounded-full px-8 sticky;
}
.card-description-row{
  @apply flex flex-row mt-4 w-full sticky;
}
.card-description{
  @apply flex items-start w-3/5 text-lg not-italic font-semibold capitalize text-gray-700 sticky;
}
.icon{
  @apply flex items-start w-3 mt-1 h-3 me-3 rounded-[50%]
}
.card {
  @apply flex flex-col items-start bg-no-repeat bg-gray-100 border w-[16rem] border-gray-100 rounded-xl mr-2 pl-2;
}
.card-sm {
  @apply flex flex-col h-[4rem] w-[16rem] items-start bg-no-repeat flex-nowrap bg-gray-100 border border-gray-100 rounded-xl mr-2 pl-2;
}
</style>
