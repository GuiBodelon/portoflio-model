<template>
  <q-page class="q-pa-xl">
    <div class="row justify-start items-start">
      <div class="col-12">
        <div class="page-title">
          <div class="text-h4 text-weight-bold" v-html="$t('pages.external.aboutMe.aboutMeText.title')"></div>
        </div>
      </div>
    </div>

    <div class="row q-mt-lg q-col-gutter-x-xl">
      <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 text-body1 text-mulish"
        :class="$q.dark.isActive ? 'text-light' : 'text-dark'">
        <p>{{ $t('pages.external.aboutMe.aboutMeText.intro1') }}</p>
        <p>{{ $t('pages.external.aboutMe.aboutMeText.intro2') }}</p>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
        <ul class="q-gutter-y-md text-mulish text-body2 q-pa-none">
          <li class="q-gutter-x-sm">
            <span class="text-primary text-weight-bold">{{ $t('pages.external.aboutMe.aboutMeText.age.title') }}</span>
            <span :class="$q.dark.isActive ? 'text-light' : 'text-dark'">{{
              $t('pages.external.aboutMe.aboutMeText.age.value') }}</span>
          </li>
          <li class="q-gutter-x-sm">
            <span class="text-primary text-weight-bold">{{ $t('pages.external.aboutMe.aboutMeText.residence.title')
            }}</span>
            <span :class="$q.dark.isActive ? 'text-light' : 'text-dark'">{{
              $t('pages.external.aboutMe.aboutMeText.residence.value') }}</span>
          </li>
          <li class="q-gutter-x-sm">
            <span class="text-primary text-weight-bold">{{ $t('pages.external.aboutMe.aboutMeText.email.title') }}</span>
            <span :class="$q.dark.isActive ? 'text-light' : 'text-dark'">{{
              $t('pages.external.aboutMe.aboutMeText.email.value') }}</span>
          </li>
          <li class="q-gutter-x-sm">
            <span class="text-primary text-weight-bold">{{ $t('pages.external.aboutMe.aboutMeText.phone.title') }}</span>
            <span :class="$q.dark.isActive ? 'text-light' : 'text-dark'">{{
              $t('pages.external.aboutMe.aboutMeText.phone.value') }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="row q-mt-lg q-col-gutter-md" :class="$q.dark.isActive ? 'text-light' : 'text-dark'">
      <div class="col-12">
        <div class="page-subtitle" :class="$q.dark.isActive ? 'text-white' : 'text-dark'">
          <div class="text-h6 text-weight-bold" v-html="$t('pages.external.aboutMe.whatIDo.title')"></div>
        </div>
      </div>
      <div v-for="service in serviceCard" :key="service.title" class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <ServiceCard :icon="service.icon" :title="service.title" :text="service.text" />
      </div>
      <div class="col-12">
        <q-separator spaced :dark="$q.dark.isActive" :color="$q.dark.isActive ? '' : 'grey-5'" />
        <div class="page-subtitle q-mt-xl" :class="$q.dark.isActive ? 'text-white' : 'text-dark'">
          <div class="text-h6 text-weight-bold" v-html="$t('pages.external.aboutMe.marketingTitle')"></div>
        </div>
      </div>
      <div v-for="service in serviceCardMarketing" :key="service.title" class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <ServiceCard :icon="service.icon" :title="service.title" :text="service.text" />
      </div>
    </div>
  </q-page>
</template>



<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch } from 'vue';
import ServiceCard, { ServiceCardProps } from 'src/components/ExternalComponents/ServiceCard.vue';

const { t, locale } = useI18n({ useScope: 'global' })

const updatedServiceCards = () => {
  const serviceCard: ServiceCardProps[] = [
    {
      cardKey: 'systemsAndFeatures',
      title: t('pages.external.aboutMe.serviceCards.systemsAndFeatures.title'),
      icon: 'lnr lnr-screen',
      text: t('pages.external.aboutMe.serviceCards.systemsAndFeatures.text'),
    },
    {
      cardKey: 'webDesign',
      title: t('pages.external.aboutMe.serviceCards.webDesign.title'),
      icon: 'lnr lnr-laptop-phone',
      text: t('pages.external.aboutMe.serviceCards.webDesign.text'),
    },
    {
      cardKey: 'landingPages',
      title: t('pages.external.aboutMe.serviceCards.landingPages.title'),
      icon: 'lnr lnr-chart-bars',
      text: t('pages.external.aboutMe.serviceCards.landingPages.text'),
    },
    {
      cardKey: 'virtualStores',
      title: t('pages.external.aboutMe.serviceCards.virtualStores.title'),
      icon: 'lnr lnr-store',
      text: t('pages.external.aboutMe.serviceCards.virtualStores.text'),
    },
  ];

  const serviceCardMarketing: ServiceCardProps[] = [
    {
      cardKey: 'artDirection',
      title: t('pages.external.aboutMe.serviceCardsMarketing.artDirection.title'),
      icon: 'lnr lnr-picture',
      text: t('pages.external.aboutMe.serviceCardsMarketing.artDirection.text'),
    },
    {
      cardKey: 'socialMediaManagement',
      title: t('pages.external.aboutMe.serviceCardsMarketing.socialMediaManagement.title'),
      icon: 'lnr lnr-user',
      text: t('pages.external.aboutMe.serviceCardsMarketing.socialMediaManagement.text'),
    },
    {
      cardKey: 'imageAndVideoCapture',
      title: t('pages.external.aboutMe.serviceCardsMarketing.imageAndVideoCapture.title'),
      icon: 'lnr lnr-camera-video',
      text: t('pages.external.aboutMe.serviceCardsMarketing.imageAndVideoCapture.text'),
    },
    {
      cardKey: 'creativeDirection',
      title: t('pages.external.aboutMe.serviceCardsMarketing.creativeDirection.title'),
      icon: 'lnr lnr-layers',
      text: t('pages.external.aboutMe.serviceCardsMarketing.creativeDirection.text'),
    },
    {
      cardKey: 'trafficManagement',
      title: t('pages.external.aboutMe.serviceCardsMarketing.trafficManagement.title'),
      icon: 'lnr lnr-pie-chart',
      text: t('pages.external.aboutMe.serviceCardsMarketing.trafficManagement.text'),
    },
    {
      cardKey: 'platforms',
      title: t('pages.external.aboutMe.serviceCardsMarketing.platforms.title'),
      icon: 'lnr lnr-laptop-phone',
      text: t('pages.external.aboutMe.serviceCardsMarketing.platforms.text'),
    },
  ];

  return { serviceCard, serviceCardMarketing };
};


const { serviceCard, serviceCardMarketing } = updatedServiceCards();

watch(locale, () => {
  // Atualize o título de cada link com base no idioma atual
  serviceCard.forEach(card => {
    card.title = t('pages.external.aboutMe.serviceCards.' + card.cardKey + '.title');
    card.text = t('pages.external.aboutMe.serviceCards.' + card.cardKey + '.text');
  });
  serviceCardMarketing.forEach(card => {
    card.title = t('pages.external.aboutMe.serviceCardsMarketing.' + card.cardKey + '.title');
    card.text = t('pages.external.aboutMe.serviceCardsMarketing.' + card.cardKey + '.text');
  });
});
</script>

<style lang="scss" scoped>
.text-body1 {
  font-size: 15px;
}

ul {
  list-style: none;
}

span {
  color: $primary;
}
</style>
