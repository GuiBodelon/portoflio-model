<template>
  <q-select v-model="selectedLocale" :options="localeOptions" :label="$t('components.shared.languageSelector.label')"
    outlined emit-value :prefix="$t('components.shared.languageSelector.prefix')" map-options :label-color="labelColor"
    @update:modelValue="updateLanguage">
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-icon :name="scope.opt.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
          <q-item-label caption>{{ scope.opt.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:append>
      <q-avatar>
        <q-icon name="la la-language" size="md" />
      </q-avatar>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useI18n } from 'vue-i18n'

export interface LanguageSelectorProps {
  labelColor?: string;
}
withDefaults(defineProps<LanguageSelectorProps>(), {
  labelColor: 'white',
});

const { locale } = useI18n({ useScope: 'global' })
const userStore = useUserStore();

const selectedLocale = ref(userStore.language);

const localeOptions = [
  { value: 'pt-BR', label: 'Português', icon: 'svguse:/icons/flags/pt-br.svg#flag-icons-br' },
  { value: 'en-US', label: 'English', icon: 'svguse:/icons/flags/en-us.svg#flag-icons-us' },
];

// Função para atualizar o idioma na store
const updateLanguage = (value: string) => {
  userStore.setLanguage(value);
  locale.value = value;
};
</script>
