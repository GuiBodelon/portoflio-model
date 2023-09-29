<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="scale-app" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

</script>
