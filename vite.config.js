import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        findid: resolve(__dirname, './src/pages/findId.html'),
        findpw: resolve(__dirname, './src/pages/findPw.html'),
        login: resolve(__dirname, './src/pages/login.html'),
        logout: resolve(__dirname, './src/pages/logout.html'),
        onboarding: resolve(__dirname, './src/pages/onboarding.html'),
        popup: resolve(__dirname, './src/pages/popup.html'),
        profiles: resolve(__dirname, './src/pages/profiles.html'),
        profilesForEdit: resolve(__dirname, './src/pages/profilesForEdit.html'),
        search: resolve(__dirname, './src/pages/search.html'),
        signup: resolve(__dirname, './src/pages/signUp.html'),
      },
    },
  },
});
