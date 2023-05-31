export default defineNuxtPlugin((nuxtApp) => {
  const { githubToken } = useRuntimeConfig();
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    token.value = githubToken;
  });
});
