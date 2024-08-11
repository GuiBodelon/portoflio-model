<template>
  <div class="row items-between container fit">
    <div class="col-12 row">
      <router-view v-slot="{ Component }">
        <transition name="scale-app" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div class="col-12 column justify-end items-center text-center q-gutter-y-md">
      <LanguageSelector :label-color="$q.dark.isActive ? 'white' : 'black'" class="full-width" />
      <div class="flex justify-between items-center full-width">
        <RouterLink to="/" class="simpleLink">
          <q-icon name="arrow_left" size="md" />
          {{ $t('components.internal.auth.login.backToSite') }}
        </RouterLink>
        <ButtonSwitchLight />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSelector from 'src/components/ExternalComponents/SideBar/LanguageSelector.vue';
import ButtonSwitchLight from 'src/components/ExternalComponents/SideBar/ButtonSwitchLight.vue';

const route = useRoute()
const routeName = ref(route.name)

watch(() => route.name, (newRouteName) => {
  routeName.value = newRouteName
})

</script>
<style lang="scss" scoped>
.container {
  padding: 12% 8% 5% 8%;

  .simpleLink {
    color: $primary;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      transform: translateX(-3px);
    }
  }
}
</style>
