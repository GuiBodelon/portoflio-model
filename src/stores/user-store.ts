import { defineStore } from 'pinia';

// Define a interface para o estado da store
interface UserState {
  language: string;
  darkMode: boolean;
  user: {
    userName: string;
    token: string;
    token_type: string;
    isLoggedIn: boolean;
  };
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    language: localStorage.getItem('userLanguage') || 'pt-BR',
    darkMode: localStorage.getItem('userDarkMode') === 'true',
    user: JSON.parse(localStorage.getItem('user') || '{}'),
  }),
  getters: {
    currentLanguage: (state) => state.language,
    isDarkMode: (state) => state.darkMode,
    loggedInUser: (state) => state.user,
  },
  actions: {
    setLanguage(newLanguage: string) {
      this.language = newLanguage;
      localStorage.setItem('userLanguage', newLanguage);
    },
    toggleDarkMode(newDarkMode: boolean) {
      this.darkMode = newDarkMode;
      localStorage.setItem('userDarkMode', String(newDarkMode));
    },
    loginUser(
      newUserName: string,
      newToken: string,
      newTokenType: string,
      newLoggedIn: boolean
    ) {
      this.user.userName = newUserName;
      this.user.token = newToken;
      this.user.token_type = newTokenType;
      this.user.isLoggedIn = newLoggedIn;
      localStorage.setItem('user', JSON.stringify(this.user));
    },
  },
});
