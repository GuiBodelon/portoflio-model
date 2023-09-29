<template>
  <q-page>
    <div class="bg-auth flex justify-center items-center" :class="$q.dark.isActive ? 'bgDark' : 'bgLight'">
      <div class="authBox row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 firstHalf text-white flex justify-center items-center">
          <LoginCarousel class="full-width q-px-xl" />
          <span class="text-weight-medium text-subtitle1 text-center" v-html="$t('sideBar.panel.copyright')"></span>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 secondHalf column text-montserrat"
          :class="$q.dark.isActive ? 'bgDark' : 'bgLight'">
          <router-view v-slot="{ Component }">
            <transition name="scale-app" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LoginCarousel from 'src/components/InternalComponents/AuthComponents/LoginCarousel.vue';
</script>

<style lang="scss" scoped>
$border-radius: 60px;

.bg-auth {
  height: 100vh !important;

  &.bg {
    &Light {
      background: rgb(80, 80, 245);
      background: linear-gradient(45deg, rgba(80, 80, 245, 1) 0%, rgba(156, 39, 176, 1) 100%);

    }

    &Dark {
      background: rgb(40, 40, 155);
      background: linear-gradient(45deg, rgba(40, 40, 155, 1) 0%, rgba(78, 19, 88, 1) 100%);
    }
  }

  .authBox {
    border-radius: $border-radius;
    box-shadow: rgb(45, 1, 71) 0px 20px 30px -10px;
    width: 60%;
    height: 80vh;

    .firstHalf {
      background: url(/imgs/bg-login.jpg) center center no-repeat;
      background-size: cover;
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      width: 50%;
      height: 100%;
      //background-color: rgba($color: $dark, $alpha: .5);
    }

    .secondHalf {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;

      &.bg {
        &Light {
          background: rgb(242, 242, 242);
          background: linear-gradient(90deg, rgba(242, 242, 242, 1) 0%, rgba(255, 255, 255, 1) 100%);
        }

        &Dark {
          background-color: $darker;
        }
      }
    }
  }
}

$border-radius: 60px;


@media (max-width: $breakpoint-md-max) {
  .bg-auth {
    .authBox {
      height: 100vh;
      width: 100vw;

      .firstHalf {
        display: none;
      }

      .secondHalf {
        border-radius: 0;
      }
    }
  }
}
</style>
