<template>
  <q-form @submit="onSubmitRegister" class="col-12 row q-gutter-md">
    <div class="col-12 q-mb-xs-md q-mb-xl">
      <div class="text-h2 text-bold">{{ $t('components.internal.auth.register.title') }}</div>
    </div>
    <q-input v-model="fullName" dense :label="$t('components.internal.auth.register.fullName.label')"
      :hint="$t('components.internal.auth.register.fullName.hint')" lazy-rules
      :rules="[val => rules(val, 'components.internal.auth.register.fullName.rule')]" class="col-12"
      :class="$q.dark.isActive ? 'isDark' : 'isLight'">
      <template v-slot:prepend>
        <q-icon name="badge" />
      </template>
    </q-input>

    <q-input v-model="email" dense :label="$t('components.internal.auth.register.email.label')"
      :hint="$t('components.internal.auth.register.email.hint')" type="email" lazy-rules
      :rules="[val => rules(val, 'components.internal.auth.register.email.rule')]" class="col-12"
      :class="$q.dark.isActive ? 'isDark' : 'isLight'">
      <template v-slot:prepend>
        <q-icon name="mail" />
      </template>
    </q-input>

    <q-input v-model="user" dense :label="$t('components.internal.auth.register.user.label')"
      :hint="$t('components.internal.auth.register.user.hint')" lazy-rules
      :rules="[val => rules(val, 'components.internal.auth.register.user.rule')]" class="col-12"
      :class="$q.dark.isActive ? 'isDark' : 'isLight'">
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
    </q-input>

    <div class="col-12">
      <div class="row q-col-gutter-md">
        <q-input v-model="password" dense :type="isPwd ? 'password' : 'text'"
          :label="$t('components.internal.auth.register.password.label')"
          :hint="$t('components.internal.auth.register.password.hint')" class="col-12 col-md-6" lazy-rules
          :rules="[val => rules(val, 'components.internal.auth.register.password.rule')]"
          :class="$q.dark.isActive ? 'isDark' : 'isLight'">
          <template v-slot:prepend>
            <q-icon name="key" />
          </template>
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>

        <q-input v-model="passwordConfirmation" dense :type="isPwd ? 'password' : 'text'"
          :label="$t('components.internal.auth.register.passwordConfirmation.label')"
          :hint="$t('components.internal.auth.register.passwordConfirmation.hint')" class="col-12 col-md-6" lazy-rules
          :rules="[val => rules(val, 'components.internal.auth.register.passwordConfirmation.rule')]"
          :class="$q.dark.isActive ? 'isDark' : 'isLight'">
          <template v-slot:prepend>
            <q-icon name="check" />
          </template>
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="col-12 q-mt-md">
      <ButtonAuth :label="$t('components.internal.auth.register.registerLabel')" class="full-width" />
    </div>
    <div class="col-12 q-mt-md q-mb-xs-lg">
      <q-btn flat :label="$t('components.internal.auth.register.alreadyRegisteredLabel')" to="login" />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';
import { registerUser } from 'src/services/AuthServices/register-service';
import ButtonAuth from '../ButtonAuth.vue';

const router = useRouter()
const { t } = useI18n({ useScope: 'global' });

const rules = (val: string, ruleKey: string) => {
  return (val && val.length > 0) || t(ruleKey);
};

const fullName = ref('');
const user = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const isPwd = ref(true);

const onSubmitRegister = async () => {
  try {
    // Verificar se as senhas coincidem antes de continuar
    if (password.value !== passwordConfirmation.value) {
      // Senhas não coincidem, exibir uma mensagem de erro
      Notify.create({
        progress: true,
        textColor: 'white',
        icon: 'warning',
        color: 'negative',
        message: 'As senhas não coincidem.',
        actions: [
          {
            icon: 'close',
            color: 'white',
          },
        ],
      });
      return; // Abortar o registro
    }

    // Chamar a função de registro do serviço
    const registrationResult = await registerUser(fullName.value, email.value, user.value, password.value);

    // Verifique o resultado do registro (você pode definir sua lógica de redirecionamento aqui)
    if (registrationResult) {
      // Registro bem-sucedido
      Notify.create({
        progress: true,
        color: 'positive',
        textColor: 'white',
        icon: 'fa-solid fa-circle-check',
        message: t('components.internal.auth.register.notificationMessage'),
      });
      router.push({ name: 'login' });
    }
  } catch (error) {
    // Lide com erros de registro aqui
  }
};
</script>

<style lang="scss"></style>
