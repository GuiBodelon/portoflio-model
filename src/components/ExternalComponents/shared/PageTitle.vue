<template>
  <div class="page-title">
    <div class="second-word">{{ firstWord }} <span>{{ secondWord }}</span></div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
interface PageTitleProps {
  firstWord: string;
  secondWord?: string;
}

// Configuração das propriedades padrão
withDefaults(defineProps<PageTitleProps>(), {
  firstWord: '',
  secondWord: '',
});

</script>

<style lang="scss" scoped>
.page-title div {
  position: relative;
  z-index: 1;
}

.page-title .second-word span {
  color: #5050f5 !important;
}
</style>
