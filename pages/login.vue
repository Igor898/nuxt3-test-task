<template>
  <v-container class="v-container">
    <v-form class="v-form" @submit.prevent="handleLogin">
      <v-text-field v-model="loginData.login" label="Логин" />
      <v-text-field v-model="loginData.password" label="Пароль" type="password" />
      <v-btn type="submit">Войти</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loginData = ref({
  login: '',
  password: '',
});

const handleLogin = async () => {
  const { data } = await useFetch('/api/login', {
    method: 'POST',
    body: { login: loginData.value.login, password: loginData.value.password },
  });
  if (data.value?.token) {
    localStorage.setItem('token', data.value.token);
    navigateTo('/products');
  }
};
</script>
<style scoped lang="sass">
.v-container
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  background: linear-gradient(135deg, #eef2f3, #d9e2ec)
  padding: 20px
  max-width: 100%

.v-form
  background: white
  padding: 40px
  border-radius: 12px
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1)
  width: 100%
  max-width: 400px
  display: flex
  flex-direction: column
  gap: 20px
  transition: all 0.3s ease-in-out

  &:hover
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15)

  ::v-deep(.v-input__control)
    border-radius: 8px
    border: 1px solid #ccc
    transition: border 0.3s ease

    &:hover
      border-color: #007bff

    &:focus-within
      border-color: #0056b3
      box-shadow: 0 0 5px rgba(0, 91, 187, 0.5)

  ::v-deep(.v-label)
    font-weight: 500
    color: #333

  ::v-deep(.v-btn)
    background: #007bff
    color: white
    font-weight: bold
    padding: 10px
    border-radius: 8px
    transition: background 0.3s ease, transform 0.2s ease

    &:hover
      background: #0056b3
      transform: translateY(-2px)

    &:active
      transform: translateY(0)

</style>