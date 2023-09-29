<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar style="height: 80px;">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" size="lg" />
        <q-toolbar-title>Header</q-toolbar-title>
        <q-space />
        <ButtonSwitchLight />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="500" bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-list class="fit column q-pb-lg">
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.routeName == route.name" v-ripple :to="menuItem.routeName">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" size="md" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
        <q-space />
        <div>
          <q-item>
            <LanguageSelector :bg-color="$q.dark.isActive ? 'dark' : 'white'"
              :label-color="$q.dark.isActive ? 'white' : 'black'" color=" primary" outlined class="full-width" />
          </q-item>
          <q-item>
            <LogoutButton class="full-width" />
          </q-item>
        </div>
      </q-list>
    </q-drawer>

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
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import LanguageSelector from 'src/components/shared/LanguageSelector.vue';
import ButtonSwitchLight from 'src/components/shared/ButtonSwitchLight.vue';
import LogoutButton from 'src/components/InternalComponents/AuthComponents/LogoutButton.vue';

const route = useRoute();
const drawer = ref(false);

const menuList = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    routeName: 'dashboard',
    separator: true
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Teste',
    routeName: 'teste',
    separator: false
  }
]
</script>
