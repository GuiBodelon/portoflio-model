<template>
  <q-btn :label="label" :type="type" :size="size" :to="to" class="btnAuth" />
</template>

<script setup lang="ts">
export interface ButtonAuthProps {
  label: string;
  type?: string;
  size?: string;
  to?: string;
}
withDefaults(defineProps<ButtonAuthProps>(), {
  label: '',
  type: 'submit',
  size: 'md',
  to: '',
});
</script>

<style lang="scss">
.btnAuth {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  color: $white;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  flex-shrink: 0;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }
}

@media (min-width: $breakpoint-md-max) {
  .btnAuth {
    padding: 0 2.6rem;
  }
}
</style>
