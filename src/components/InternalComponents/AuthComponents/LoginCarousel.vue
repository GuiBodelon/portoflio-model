<template>
  <q-carousel v-model="slide" swipeable animated control-type="flat" control-color="white" navigation infinite
    transition-prev="jump-right" transition-next="jump-left" class="bg-transparent carousel full-height">
    <q-carousel-slide name="first" class="column flex-center glassPanel">
      <q-icon name="la la-project-diagram" size="90px" />
      <div class="q-mt-lg text-center text-h4 text-weight-medium">
        {{ $t('components.internal.auth.carousel.firstSlide.title') }}
      </div>
      <div class="q-mt-md">
        <div class="q-gutter-y-lg text-left text-body1 text-weight-medium">
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="la la-universal-access" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.firstSlide.topic1.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="app_registration" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.firstSlide.topic2.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm topicContainer">
            <q-icon name="explore" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.firstSlide.topic3.text') }}
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="second" class="column no-wrap flex-center glassPanel">
      <q-icon name="fa-regular fa-lightbulb" size="90px" />
      <div class="q-mt-lg text-center text-h4 text-weight-medium">
        {{ $t('components.internal.auth.carousel.secondSlide.title') }}
      </div>
      <div class="q-mt-md">
        <div class="q-gutter-y-lg text-left text-body1 text-weight-medium">
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="la la-cogs" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.secondSlide.topic1.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="la la-brain" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.secondSlide.topic2.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm topicContainer">
            <q-icon name="la la-check-circle" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.secondSlide.topic3.text') }}
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="third" class="column no-wrap flex-center glassPanel">
      <q-icon name="la la-rocket" size="90px" />
      <div class="q-mt-lg text-center text-h4 text-weight-medium">
        {{ $t('components.internal.auth.carousel.thirdSlide.title') }}
      </div>
      <div class="q-mt-md">
        <div class="q-gutter-y-lg text-left text-body1 text-weight-medium">
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="la la-dollar-sign" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.thirdSlide.topic1.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="la la-chart-line" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.thirdSlide.topic2.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm topicContainer">
            <q-icon name="la la-trophy" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.thirdSlide.topic3.text') }}
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="fourth" class="column no-wrap flex-center glassPanel">
      <q-icon name="la la-crop-alt" size="90px" />
      <div class="q-mt-md text-center text-h4 text-weight-medium">
        {{ $t('components.internal.auth.carousel.fourthSlide.title') }}
      </div>
      <div class="q-mt-md">
        <div class="q-gutter-y-lg text-left text-body1 text-weight-medium">
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="la la-palette" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.fourthSlide.topic1.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm q-mb-lg topicContainer">
            <q-icon name="la la-mobile" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.fourthSlide.topic2.text') }}
            </div>
          </div>
          <q-separator spaced inset dark />
          <div class="row items-center q-gutter-x-sm topicContainer">
            <q-icon name="la la-eye" color="amber" size="40px" class="col-1" />
            <div class="col-10 topicText bold">
              {{ $t('components.internal.auth.carousel.fourthSlide.topic3.text') }}
            </div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const slide = ref('first')

</script>

<style lang="scss" scoped>
.carousel {
  max-height: 60vh;
}

.glassPanel {
  border-radius: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  background-color: rgba($color: $light, $alpha: .05);
}

.q-carousel {
  background-color: #333;
  /* Cor de fundo do carrossel */
  border-radius: 10px;
  overflow: hidden;
}

/* Estilos para os slides */
.q-carousel-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: #fff;
  /* Cor do texto */
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.q-carousel-slide:hover {
  transform: scale(1.05);
  /* Efeito de escala ao passar o mouse */
}

/* Estilos para os textos complementares */
.topicContainer {
  .q-icon {
    color: #FFD700;
    transition: transform 0.2s ease;
  }

  .topicText {
    color: $light;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    .q-icon {
      transform: rotate(45deg);
    }

    .topicText {
      color: $white
    }
  }
}
</style>
