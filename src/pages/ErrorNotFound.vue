<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ $t('notFound.text') }}
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="blue" unelevated :label="$t('notFound.button.label')" no-caps
        @click="goBack" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>
