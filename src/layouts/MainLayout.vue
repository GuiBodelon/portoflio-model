<template>
  <q-layout view="lHh Lpr lFf" class="text-poppins">
    <q-drawer show-if-above side="left" :width="550">
      <PageSideHeader class="col-10" />
    </q-drawer>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition :name="currentAnimation" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
    <div class="lmpixels-arrows-nav">
      <div class="lmpixels-arrow-right" @click="nextRoute">
        <i class="lnr lnr-chevron-right"></i>
      </div>
      <div class="lmpixels-arrow-left" @click="previousRoute">
        <i class="lnr lnr-chevron-left"></i>
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import shuffle from 'lodash/shuffle';
import PageSideHeader from 'components/ExternalComponents/SideBar.vue';

/////Navigation Arrows/////
// Variável de estado para acompanhar a rota atual
const currentRoute = ref<number>(0);

// Obtendo o objeto router do Vue Router
const router = useRouter();

// Função para avançar para a próxima rota
const nextRoute = () => {
  if (currentRoute.value < routes.length - 1) {
    currentRoute.value++;
  } else {
    // Redirecionar para a primeira rota se estiver na última rota
    currentRoute.value = 0;
  }
  navigateToRoute();
};

// Função para voltar para a rota anterior
const previousRoute = () => {
  if (currentRoute.value > 0) {
    currentRoute.value--;
  } else {
    // Redirecionar para a última rota se estiver na primeira rota
    currentRoute.value = routes.length - 1;
  }
  navigateToRoute();
};

// Função para navegar para a rota atual usando o Vue Router
const navigateToRoute = () => {
  const routeName = routes[currentRoute.value];
  router.push({ name: routeName });
};

// Array de rotas
const routes = ['home', 'sobre-mim', 'curriculo', 'portfolio', 'contato'];
/////Fim Navigation Arrows/////

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
  console.log(currentAnimation.value);
  console.log(selectedAnimations.value)
});
/////Fim animações dinâmicas de transição de rota/////
</script>

<style lang="scss" scoped>
/* --- LMPixels Arrow Nav --- */
.lmpixels-arrows-nav {
  position: fixed;
  padding: 10px 0;
  width: 60px;
  right: 15px;
  bottom: 15px;
  background-color: $dark;
  border: 2px solid $primary;
  border-radius: 35px;
  z-index: 98;
  list-style: none;
  -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, .15);
  -moz-box-shadow: 0 0 30px -5px rgba(0, 0, 0, .15);
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, .15);
}

.lmpixels-arrows-nav div {
  display: block;
  position: relative;
  text-align: center;
  color: #b5b6b7;
  padding: 10px;
  font-size: 24px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.lmpixels-arrows-nav div:hover {
  color: $primary;
  cursor: pointer;
}

/* --- End LMPixels Arrow Nav --- */

* {
  overflow: hidden;
}
</style>
