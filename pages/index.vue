<template>
  <div>
    <h1>Добро пожаловать!</h1>
    <p>Это главная страница.</p>
    <NuxtLink to="/login">Перейти к товарам</NuxtLink>
  </div>
</template>
<style scoped lang="sass">
div
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  min-height: 100vh
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec)
  text-align: center
  padding: 20px

h1
  font-size: 32px
  font-weight: bold
  color: #333
  margin-bottom: 16px
  transition: transform 0.3s ease, color 0.3s ease

  &:hover
    transform: scale(1.1)
    color: #0056b3

p
  font-size: 18px
  color: #555
  margin-bottom: 20px
  transition: color 0.3s ease

  &:hover
    color: #007bff

a
  display: inline-block
  padding: 12px 24px
  font-size: 18px
  font-weight: bold
  color: white
  background-color: #007bff
  border-radius: 8px
  text-decoration: none
  transition: background 0.3s ease, transform 0.2s ease

  &:hover
    background-color: #0056b3
    transform: translateY(-3px)

  &:active
    transform: translateY(0)

</style>