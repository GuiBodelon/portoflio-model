<template>
  <q-layout view="lHh Lpr lFf" class="text-poppins">
    <div class="menu-toggle lt-md" @click="isDrawerVisible = !isDrawerVisible">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <q-drawer show-if-above side="left" :width="activeDrawerWidth" :breakpoint="1024" v-model="isDrawerVisible">
      <SideBar />
    </q-drawer>
    <!-- Mobile Navigation -->
    <!-- End Mobile Navigation -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition :name="currentAnimation" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <ArrowsNav />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import shuffle from 'lodash/shuffle';
import SideBar from 'components/ExternalComponents/SideBar.vue';
import ArrowsNav from 'components/ExternalComponents/ArrowsNav.vue';

const isDrawerVisible = ref(true);
const activeDrawerWidth = ref(550);

const handleResize = () => {
  activeDrawerWidth.value = window.innerWidth <= 550 ? window.innerWidth : 550;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

/////Animações dinâmicas de transição de rota/////
// Importando a função useRoute() que provavelmente é parte de um framework Vue.js ou similar
const route = useRoute();

// Uma lista de nomes de animações possíveis
const animations = [
  'scale-app',
  'fade',
  'slide',
  'slide-down',
  'grow-in',
  'grow-out',
  'slither',
  'drain'
];

// Uma variável reativa para armazenar a lista de animações selecionadas
const selectedAnimations = ref<string[]>([]);

// Uma variável reativa para manter o índice atual na lista de animações
const currentIndex = ref<number>(-1);

// Uma função para obter uma animação aleatória da lista
const getRandomAnimation = () => {
  // Se a lista de animações selecionadas estiver vazia, embaralha a lista e reinicia o índice
  if (selectedAnimations.value.length === 0) {
    selectedAnimations.value = shuffle(animations);
    currentIndex.value = 0;
  }

  // Remove a próxima animação da lista e a armazena em uma variável temporária
  const nextAnimation = selectedAnimations.value.splice(currentIndex.value, 1)[0];

  // Se todas as animações foram usadas, reinicie a lista
  if (selectedAnimations.value.length === 0) {
    selectedAnimations.value = shuffle(animations);
    currentIndex.value = 0;
  }

  // Retorna a próxima animação
  return nextAnimation;
};

// Uma variável reativa para armazenar a animação atual (inicializada com uma animação aleatória)
const currentAnimation = ref<string>(getRandomAnimation());

// Configura um observador para a rota
watch(route, () => {
  // Quando a rota muda, atualiza a variável currentAnimation com uma nova animação aleatória
  currentAnimation.value = getRandomAnimation();
});
/////Fim animações dinâmicas de transição de rota/////
</script>

<style lang="scss" scoped>
* {
  overflow: hidden;
}

.menu-toggle {
  position: absolute;
  display: block;
  width: 48px;
  height: 48px;
  line-height: 46px;
  text-align: center;
  background-color: #5050f5;
  right: 10px;
  font-size: 19px;
  top: 10px;
  border-radius: 30px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 10000;
}

.menu-toggle span {
  display: block;
  position: absolute;
  height: 3px;
  width: 50%;
  background: #fff;
  border-radius: 5px;
  opacity: 1;
  left: 25%;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.menu-toggle span:nth-child(1) {
  top: 16px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.menu-toggle span:nth-child(2) {
  top: 22px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.menu-toggle span:nth-child(3) {
  top: 28px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.menu-toggle.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 13px;
  left: 15px;
}

.menu-toggle.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 30px;
  left: 15px;
}
</style>
