<template>
  <q-form @submit="onSubmitLogin" class="col-12 q-gutter-y-md">
    <div class="col-12 q-mb-xl">
      <div class="text-h2 text-bold">{{ $t('components.internal.auth.login.title') }}</div>
    </div>
    <q-input v-model="user" dense :label="$t('components.internal.auth.login.user.label')"
      :hint="$t('components.internal.auth.login.user.hint')" lazy-rules
      :rules="[val => rules(val, 'components.internal.auth.login.user.rule')]" class="col-12"
      :class="$q.dark.isActive ? 'isDark' : 'isLight'">
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
    </q-input>

    <q-input v-model="password" dense :type="isPwd ? 'password' : 'text'"
      :label="$t('components.internal.auth.login.password.label')"
      :hint="$t('components.internal.auth.login.password.hint')" lazy-rules
      :rules="[val => rules(val, 'components.internal.auth.login.password.rule')]" class="col-12"
      :class="$q.dark.isActive ? 'isDark' : 'isLight'">
      <template v-slot:prepend>
        <q-icon name="key" />
      </template>
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>

    <div class="col-12">
      <ButtonAuth :label="buttonAuth.label" class="full-width" />
    </div>

    <div class="col-12 row justify-between">
      <div class="col">
        <q-checkbox v-model="rememberMe" :label="$t('components.internal.auth.login.rememberMeLabel')" />
      </div>
      <div class="col flex justify-end items-center">
        <RouterLink to="esqueci-a-senha" dense flat no-caps class="simpleLink">
          {{ $t('components.internal.auth.login.forgotPasswordLabel') }}
        </RouterLink>
      </div>
    </div>
    <div class="col-12 flex justify-between items-center">
      <q-btn outline color="primary" :label="$t('components.internal.auth.login.registerLabel')" to="cadastro"
        class="full-width" />
    </div>
  </q-form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ButtonAuth, { ButtonAuthProps } from '../ButtonAuth.vue';
import { loginUser } from 'src/services/AuthServices/login-service';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import { useUserStore } from 'src/stores/user-store'

const router = useRouter()
const userStore = useUserStore()

const { t } = useI18n({ useScope: 'global' });

const rules = (val: string, ruleKey: string) => {
  return (val && val.length > 0) || t(ruleKey);
};

const user = ref('');
const password = ref('');
const isPwd = ref(true);
const rememberMe = ref(false);

const buttonAuth: ButtonAuthProps = {
  label: 'Login',
};

async function onSubmitLogin() {
  try {
    const loggedUser = await loginUser(user.value, password.value);
    if (loggedUser) {
      router.push({ name: 'dashboard' });
      Notify.create({
        progress: true,
        color: 'positive',
        textColor: 'white',
        icon: 'fa-solid fa-circle-check',
        message: t('components.internal.auth.login.notificationMessage') + userStore.user.userName,
      });
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
.simpleLink {
  color: $primary;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
}
</style>
