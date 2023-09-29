<template>
  <div class="cardServico q-mt-sm q-gutter-y-md">
    <q-icon size="xl" color="primary">
      <i :class="icon"></i>
    </q-icon>
    <div class="text-h6 text-weight-bold" :class="$q.dark.isActive ? 'text-white' : 'text-dark'">
      {{ title }}
    </div>
    <p class="text-body2">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
export interface ServiceCardProps {
  cardKey?: string;
  title: string;
  icon: string;
  text: string;
}

// Configuração das propriedades padrão
withDefaults(defineProps<ServiceCardProps>(), {
  cardKey: '',
  title: '',
  icon: '',
  text: '',
});
</script>

<style lang="scss" scoped>
.cardServico {

  .text-body2 {
    font-weight: 400px;
    font-family: Mulish;
  }

}
</style>
