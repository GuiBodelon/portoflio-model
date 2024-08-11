<template>
  <q-page class="row q-pa-xl justify-start items-start">
    <div class="col-12">
      <PageTitle class="text-h4 text-weight-bold q-mb-xl" firstWord="Portfólio" />
      <q-btn-toggle v-model="model" class="my-custom-toggle" no-caps rounded unelevated toggle-color="primary"
        color="white" text-color="primary" :options="portfolioOptions" />
    </div>
    <div class="col-12 b">
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageTitle from 'components/ExternalComponents/shared/PageTitle.vue'
const model = ref('all')
const portfolioOptions = ref([
  { label: 'Todos', value: 'all' },
  { label: 'Landing Pages', value: 'landingPages' },
  { label: 'Sistemas', value: 'systems' },
  { label: 'E-Commerces', value: 'e-commerces' }
])
</script>


<style lang="scss" scoped>
/* --- End of Portfolio --- */
</style>
