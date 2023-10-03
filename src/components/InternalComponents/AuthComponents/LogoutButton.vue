<template>
  <q-btn icon="logout" :label="$t('components.internal.auth.logout.buttonLabel')" class="btnAuth" @click="onLogout" />
</template>

<script setup lang="ts">
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';
import { logoutUser } from 'src/services/AuthServices/login-service';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

const router = useRouter()

async function onLogout() {
  try {
    const sucess = await logoutUser();
    if (sucess) {
      Notify.create({
        progress: true,
        color: 'positive',
        textColor: 'white',
        icon: 'fa-solid fa-circle-check',
        message: t('components.internal.auth.logout.notificationMessage'),
      });
      router.push({ name: 'login' })
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss">
.btnAuth {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  color: $white;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  flex-shrink: 0;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }
}

@media (min-width: $breakpoint-md-max) {
  .btnAuth {
    padding: 0 2.6rem;
  }
}
</style>
