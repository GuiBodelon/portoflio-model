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
      <div class="col-12 col-sm-10 q-pt-xl column justify-between items-center text-center"
        :class="$q.dark.isActive ? 'bg-dark text-light' : 'bg-lighter text-dark'">
        <div class="column justify-center items-center">
          <q-img src="/imgs/profile_placeholder.png" :class="['perfilImg', $q.dark.isActive ? 'dark' : 'light']" />

          <div class="q-mt-lg">
            <div class="text-h4">{{ $t('sideBar.panel.title') }}</div>
            <div class="text-subtitle1">{{ $t('sideBar.panel.subtitle') }}</div>
            <q-list class="lt-sm">
              <MenuLinks v-for="link in updatedMenuLinks()" :key="link.title" v-bind="link" />
            </q-list>
            <SocialButtons />
            <div class="q-mt-xl flex justify-center">
              <ButtonCV />
            </div>
          </div>
        </div>
        <div class="full-width q-px-xs-lg q-px-md-xl column q-mb-lg q-gutter-y-md q-mt-xs-lg">
          <ButtonSwitchLight />
          <LanguageSelector :dark="$q.dark.isActive ? 'dark' : 'light'" />
          <div class="text-caption text-lighter" v-html="$t('sideBar.panel.copyright')"></div>
        </div>
      </div>
    </div>
  </q-scroll-area>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import MenuLinks, { MenuLinkProps } from 'components/ExternalComponents/MenuLinks.vue';
import ButtonSwitchLight from 'components/ExternalComponents/SideBar/ButtonSwitchLight.vue';
import LanguageSelector from 'components/ExternalComponents/SideBar/LanguageSelector.vue';
import SocialButtons from 'components/ExternalComponents/SideBar/SocialButtons.vue';
import ButtonCV from 'components/ExternalComponents/SideBar/ButtonCV.vue';

const { t, locale } = useI18n({ useScope: 'global' });

const updatedMenuLinks = () => {
  const menuLinks: MenuLinkProps[] = [
    { id: 1, title: t('sideBar.menu.menuLink1'), icon: 'lnr lnr-home', link: '/', routeName: 'home' },
    { id: 2, title: t('sideBar.menu.menuLink2'), icon: 'lnr lnr-user', link: 'sobre-mim', routeName: 'sobre-mim' },
    { id: 3, title: t('sideBar.menu.menuLink3'), icon: 'lnr lnr-graduation-hat', link: 'curriculo', routeName: 'curriculo' },
    { id: 4, title: t('sideBar.menu.menuLink4'), icon: 'lnr lnr-briefcase', link: 'portfolio', routeName: 'portfolio' },
    { id: 5, title: t('sideBar.menu.menuLink5'), icon: 'lnr lnr-envelope', link: 'contato', routeName: 'contato' },
  ];

  return menuLinks;
}

const menuLinks = updatedMenuLinks();

watch(locale, () => {
  menuLinks.forEach(link => {
    link.title = t('sideBar.menu.menuLink' + link.id);
  });
});
</script>

<style lang="scss" scoped>
.perfilImg {
  min-width: calc(400px - 200px);
  max-width: calc(400px - 200px);
  border-radius: 50%;

  &.dark {
    box-shadow: -10px -10px 30px $dark,
      10px 10px 30px $darker,
      inset -10px -10px 10px $darker,
      inset 10px 10px 10px $dark;
  }

  &.light {
    box-shadow: -10px -10px 30px rgba(255, 255, 255, 0.6),
      10px 10px 30px rgba(0, 0, 0, 0.1),
      inset -10px -10px 10px rgba(0, 0, 0, 0.1),
      inset 10px 10px 10px rgba(255, 255, 255, 0.6);
  }
}

.text-h4 {
  font-weight: 600;
}
</style>
