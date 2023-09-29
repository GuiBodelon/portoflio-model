<template>
  <q-page class="column justify-center items-center text-center">
    <div class="text-h2 text-weight-bolder">Guilherme Bodelon</div>
    <q-carousel animated v-model="slide" autoplay infinite class="bg-transparent text-weight-regular"
      :class="$q.dark.isActive ? 'text-light' : 'text-dark'" transition-prev="scale" transition-next="scale"
      style="height: 100px;">
      <q-carousel-slide :name="1">
        <div class="text-h5">Full Stack Developer</div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <div class="text-h5">Web Designer</div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const slide = ref(1)
</script>
