<template>
  <router-view v-slot="{ Component }">
    <transition name="slither" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useUserStore } from './stores/user-store';

//User Store
const userStore = useUserStore()

//Dark Mode
const $q = useQuasar();
onMounted(() => {
  $q.dark.set(userStore.isDarkMode);
});

//Vue i18n
const { locale } = useI18n({ useScope: 'global' })
// Defina o idioma ativo
locale.value = userStore.language; // Assumindo que sua store tem uma propriedade chamada 'locale'

</script>

<style lang="scss"></style>
