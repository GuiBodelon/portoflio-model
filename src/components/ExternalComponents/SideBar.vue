<template>
  <q-scroll-area class="fit">
    <div class="row" style="height: 100vh;">
      <div class="bg-darker col-2 gt-xs column justify-between text-mulish">
        <q-list>
          <MenuLinks v-for="link in updatedMenuLinks()" :key="link.title" v-bind="link" />
        </q-list>
        <div class="q-pa-md flex justify-center">
          <q-btn color="primary" icon="admin_panel_settings" to="/painel-adm/login">
            <q-tooltip class="bg-white">
              <div class="text-black text-body2">{{ $t('sideBar.panel.btnLogin') }}</div>
            </q-tooltip>
          </q-btn>
        </div>
      </div>
      <!-- Cabeçalho da página -->
      <div class="col-12 col-sm-10 q-pt-xl column justify-between items-center text-center bg-dark text-white">
        <div class="column justify-center items-center">
          <!-- Imagem de perfil -->
          <q-img src="/imgs/guilherme_bodelon.jpeg" class="perfilImg" />

          <div class="q-mt-lg">
            <!-- Título da página -->
            <div class="text-h4">{{ $t('sideBar.panel.title') }}</div>
            <!-- Subtítulo da página -->
            <div class="text-subtitle1">{{ $t('sideBar.panel.subtitle') }}</div>
            <q-list class="lt-sm">
              <MenuLinks v-for="link in updatedMenuLinks()" :key="link.title" v-bind="link" />
            </q-list>
            <div class="q-mt-lg">
              <!-- Botões de redes sociais -->
              <q-btn icon="fa-brands fa-whatsapp" size="md" padding="sm" flat rounded />
              <q-btn icon="fa-brands fa-linkedin" size="md" padding="sm" flat rounded />
              <q-btn icon="fa-brands fa-instagram" size="md" padding="sm" flat rounded />
              <q-btn icon="fa-solid fa-store" size="md" padding="sm" flat rounded />
            </div>
            <div class="q-mt-xl">
              <!-- Botão para download do CV -->
              <q-btn flat rounded label="Download CV" no-caps size="lg" class="btnDownloadCV" />
            </div>
          </div>
        </div>

        <div class="full-width q-px-xs-lg q-px-md-xl column q-mb-lg q-gutter-y-md q-mt-xs-lg">
          <!-- Botão para alternar entre Dark Mode e Light Mode -->
          <ButtonSwitchLight />
          <!-- Alterar idioma do i18n-->
          <LanguageSelector dark />
          <div class="text-caption text-light" v-html="$t('sideBar.panel.copyright')"></div>
        </div>
      </div>
    </div>
  </q-scroll-area>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n'
import MenuLinks, { MenuLinkProps } from 'components/ExternalComponents/MenuLinks.vue';
import ButtonSwitchLight from 'components/shared/ButtonSwitchLight.vue'
import LanguageSelector from '../shared/LanguageSelector.vue';

const { t, locale } = useI18n({ useScope: 'global' })
// Método computado para atualizar a array menuLinks quando a linguagem muda
const updatedMenuLinks = () => {
  const menuLinks: MenuLinkProps[] = [
    {
      id: 1,
      title: t('sideBar.menu.menuLink1'),
      icon: 'lnr lnr-home',
      link: '/',
      routeName: 'home'
    },
    {
      id: 2,
      title: t('sideBar.menu.menuLink2'),
      icon: 'lnr lnr-user',
      link: 'sobre-mim',
      routeName: 'sobre-mim'
    },
    {
      id: 3,
      title: t('sideBar.menu.menuLink3'),
      icon: 'lnr lnr-graduation-hat',
      link: 'curriculo',
      routeName: 'curriculo'
    },
    {
      id: 4,
      title: t('sideBar.menu.menuLink4'),
      icon: 'lnr lnr-briefcase',
      link: 'portfolio',
      routeName: 'portfolio'
    },
    {
      id: 5,
      title: t('sideBar.menu.menuLink5'),
      icon: 'lnr lnr-envelope',
      link: 'contato',
      routeName: 'contato'
    },
  ];

  return menuLinks;
}

// Use o método computado em vez da variável menuLinks
const menuLinks = updatedMenuLinks();

// Assine a mudança de idioma para atualizar a array quando necessário
watch(locale, () => {
  // Atualize o título de cada link com base no idioma atual
  menuLinks.forEach(link => {
    link.title = t('sideBar.menu.menuLink' + link.id);
  });
});
</script>

<style lang="scss" scoped>
.perfilImg {
  min-width: calc(400px - 200px);
  max-width: calc(400px - 200px);
  background-color: $white;
  border: 3px solid $white;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.text-h4 {
  font-weight: 600;
}

.btnDownloadCV {
  background-color: transparent;
  color: #f5f5f5 !important;
  border: 2px solid #fff !important;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 25px 25px -10px rgba(0, 0, 0, .3);
  border-radius: 30px !important;
  font-size: 15px !important;

  &:hover {
    background-color: #fff !important;
    border-color: #fff !important;
    color: $primary !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  }
}

.bottomButtons {
  min-width: 100%;
}
</style>
