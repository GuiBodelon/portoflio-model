<template>
  <div class="flex items-center text-mulish text-weight-bold">
    <div :class="isDarkModeActive ? '' : 'text-primary '">Light</div>
    <q-toggle v-model="isDarkModeActive" checked-icon="dark_mode" :color="isDarkModeActive ? 'primary' : 'dark'"
      unchecked-icon="light_mode" @update:model-value="toggleDarkMode(isDarkModeActive)">
    </q-toggle>
    <div :class="isDarkModeActive ? 'text-primary' : ''">Dark</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const userStore = useUserStore();
const isDarkModeActive = ref(userStore.isDarkMode)

function toggleDarkMode(val: boolean) {
  $q.dark.set(val)
  userStore.toggleDarkMode(val);
  isDarkModeActive.value = val
}


</script>
