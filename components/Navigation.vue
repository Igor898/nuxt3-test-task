<template>
  <div>
    <img
      src="/public/logo.png"
      alt=""
      class="rounded-xl displ-none"
      style="width: 120px"
    />
    <h1 class="text-h4 displ-none mt-5">Наследие</h1>
    <div class="flex-container displ-none">
      <p class="text-subtitle-1">
        <img src="/public/Premium.png" alt="" />
        Документы проверены &bull;
        <v-icon
          style="color: #337566; font-size: 21px; margin-bottom: 2px"
          icon="mdi-star"
        ></v-icon>
        4.7 &bull; 19 отзывов
      </p>
    </div>
    <button class="mt-2 button-show displ-none">Показать номер телефона</button>
    <v-container>
      <div class="d-flex justify-center mb-8">
        <button class="flex_buttons">
          <NuxtLink class="flex_buttons-link" to="/products"
            >Товары и услуги</NuxtLink
          >
        </button>
        <button class="flex_buttons">
          <NuxtLink class="flex_buttons-link" to="/agents">Агенты</NuxtLink>
        </button>
        <button class="flex_buttons">
          <NuxtLink class="flex_buttons-link" to="/about"
            >О компании</NuxtLink
          >
        </button>
      </div>
    </v-container>
    <hr style="border: 1px solid #cccccc" />
  </div>
</template>
<style scoped lang="sass">
@import '@/styles/main'
</style>