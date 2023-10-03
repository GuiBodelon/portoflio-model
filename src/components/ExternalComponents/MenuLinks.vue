<template>
  <!-- Item de menu clicável -->
  <q-item clickable v-ripple :to="link" class="qItem q-pa-none full-width flex justify-center text-light"
    :class="route.name == routeName ? 'active' : ''">
    <!-- Seção do item de menu -->
    <q-item-section class="flex column justify-center items-center">
      <!-- Ícone do menu -->
      <span class="menu-icon q-mb-sm gt-xs" :class="icon"></span>
      <!-- Título do menu -->
      <div class="text-subtitle2">{{ title }}</div>
    </q-item-section>
  </q-item>
  <!-- Separador entre os itens de menu -->
  <q-separator class="separator" />
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import { useRoute } from 'vue-router';

// Definição das propriedades do componente MenuLinks
export interface MenuLinkProps {
  id: number;
  title: string;
  routeName: string;
  link?: string;
  icon?: string;
}

// Configuração das propriedades padrão
withDefaults(defineProps<MenuLinkProps>(), {
  link: '#',
  icon: '',
});

//
const route = useRoute();
</script>

<style lang="scss" scoped>
.qItem {
  height: 86px;

  .text-subtitle2 {
    font-size: 12px;
  }

  // Estilização para o item ativo
  &.active {

    .menu-icon,
    .text-subtitle2 {
      color: $primary;
    }
  }

  // Estilização ao passar o mouse sobre o item
  &:hover {

    .menu-icon,
    .text-subtitle2 {
      color: $primary;
    }
  }

  // Estilo do ícone do menu
  .menu-icon {
    font-size: 25px;
  }
}

// Estilo do separador
.separator {
  background-color: $dark !important;
}

@media (max-width: $breakpoint-xs-max) {
  .qItem {
    height: 20px;

    .text-subtitle2 {
      font-size: 16px;
    }
  }
}
</style>
