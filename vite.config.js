import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'docs');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        findid: resolve(root, 'pages', 'findId.html'),
        findpw: resolve(root, 'pages', 'findPw.html'),
        login: resolve(root, 'pages', 'login.html'),
        logout: resolve(root, 'pages', 'logout.html'),
        onboarding: resolve(root, 'pages', 'onboarding.html'),
        popup: resolve(root, 'pages', 'popup.html'),
        profilepopup: resolve(root, 'pages', 'profilePopup.html'),
        profiles: resolve(root, 'pages', 'profiles.html'),
        profilesForEdit: resolve(root, 'pages', 'profilesForEdit.html'),
        search: resolve(root, 'pages', 'search.html'),
        signup: resolve(root, 'pages', 'signUp.html'),
      },
    },
  },
});
