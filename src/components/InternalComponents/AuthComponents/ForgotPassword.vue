<template>
  <div class="col-12" :key="forgotPasswordKey">
    <div v-if="!linkEnviado && !operationError">
      <div class="q-mb-xl">
        <div class="text-h5 text-bold text-uppercase">{{ $t('components.internal.auth.forgotPassword.title') }}</div>
        <div class="text-body1 q-mt-md">{{ $t('components.internal.auth.forgotPassword.instructions') }}</div>
      </div>
      <div class="row">
        <q-form @submit="onSubmitForgotPassword" class="q-gutter-lg col-12">
          <q-input v-model="email" dense :label="$t('components.internal.auth.forgotPassword.email.label')"
            :hint="$t('components.internal.auth.forgotPassword.email.hint')" type="email" lazy-rules
            :rules="[val => rules(val, 'components.internal.auth.forgotPassword.email.rule')]"
            :class="$q.dark.isActive ? 'isDark' : 'isLight'">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <div class="flex q-gutter-y-sm">
            <ButtonAuth :label="$t('components.internal.auth.forgotPassword.submitLabel')" class="q-mr-sm" />
            <q-btn color="secondary" :label="$t('components.internal.auth.forgotPassword.backLabel')" to="login" />
          </div>
        </q-form>
      </div>
    </div>

    <div v-if="linkEnviado">
      <div class="text-h5 text-uppercase text-weight-bold">{{
        $t('components.internal.auth.forgotPassword.onSuccess.title') }}</div>
      <div class="text-body1 q-my-md">
        <p v-html="$t('components.internal.auth.forgotPassword.onSuccess.instructions', { email })"></p>
      </div>
      <div class="row q-gutter-y-lg q-gutter-x-sm">
        <ButtonAuth :label="$t('components.internal.auth.forgotPassword.onSuccess.doneLabel')" :to="buttonAuth[1].to" />
        <q-btn color="secondary" :label="$t('components.internal.auth.forgotPassword.onSuccess.restartLabel')"
          @click="resetOperation" />
      </div>
    </div>

    <div v-if="operationError">
      <div class="text-h5 text-uppercase text-weight-bold">{{
        $t('components.internal.auth.forgotPassword.onError.title') }}</div>

      <div class="bg-dark text-white q-pa-md q-my-lg rounded-borders">
        <div class="row justify-center items-center">
          <q-icon name="do_not_disturb_on" color="negative" size="lg" class="col-2" />
          <div class="col-10">
            <span class="text-weight-bold">{{ $t('components.internal.auth.forgotPassword.onError.errorMessage', {
              email
            }) }}</span><br />
            <span class="text-light text-weight-medium">{{
              $t('components.internal.auth.forgotPassword.onError.suggestion') }}</span>
          </div>
        </div>
      </div>
      <div class="flex q-gutter-y-sm">
        <ButtonAuth :label="$t('components.internal.auth.forgotPassword.onError.registerLabel')" :to="buttonAuth[2].to"
          class="q-mr-sm" />
        <q-btn color="secondary" :label="$t('components.internal.auth.forgotPassword.onError.restartLabel')"
          @click="resetOperation" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ButtonAuth, { ButtonAuthProps } from '../ButtonAuth.vue';
import { requestPasswordReset, resetPassword } from 'src/services/AuthServices/forgot-password-service';

const { t } = useI18n({ useScope: 'global' });

const forgotPasswordKey = ref(0);

const buttonAuth: ButtonAuthProps[] = [
  {
    label: t('components.internal.auth.forgotPassword.submitLabel'),
  },
  {
    label: t('components.internal.auth.forgotPassword.onSuccess.doneLabel'),
    to: 'login',
  },
  {
    label: t('components.internal.auth.forgotPassword.onError.registerLabel'),
    to: 'cadastro',
  },
];

const email = ref('');
const linkEnviado = ref(false);
const operationError = ref(true);

const rules = (val: string, ruleKey: string) => {
  return (val && val.length > 0) || t(ruleKey);
};

const onSubmitForgotPassword = async () => {
  try {
    // Chame a função de pedido de redefinição de senha do serviço
    const requestResult = await requestPasswordReset(email.value);

    if (requestResult) {
      // Pedido de redefinição bem-sucedido, defina linkEnviado como true
      linkEnviado.value = true;
    } else {
      // Lide com erros de pedido de redefinição aqui
    }
  } catch (error) {
    // Lide com erros de pedido de redefinição aqui
  }
};

const resetOperation = () => {
  email.value = '';
  linkEnviado.value = false;
  operationError.value = false;
  forgotPasswordKey.value++;
};
</script>

