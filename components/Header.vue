<template>
  <header>
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <h1 class="mr-8">Annoncé</h1>
          <v-btn color="#E8E8E8" elevation="2" class="displ-none" rounded large>
            <v-icon>mdi-dots-grid</v-icon>
            Все категории
          </v-btn>
        </div>
        <div class="d-flex">
          <div class="location displ-none">
            <span class="icon"><v-icon icon="mdi-map-marker"></v-icon></span>
            <span class="text mr-8">Ростов-на-Дону</span>
          </div>
          <div class="border-sm stick mr-8 displ-none"></div>
          <a href="#" class="button mr-8 displ-none">Разместить объявление</a>
          <div class="mobile-burger">&#9776;</div>
          <div class="user-profile">
            <v-btn color="#E8E8E8" class="rounded-pill burger-btn"
              ><span class="menu-icon">&#9776;</span>
              <img
                class="burger-btn_img"
                width="40px"
                height="40px"
                style="border-radius: 200px"
                :src="users.avatar"
                alt="photo"
            /></v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </header>
</template>
<style scoped lang="sass">
@import '@/styles/main'
</style>
<script setup lang="ts">
defineProps({
    users: {
    type: Object,
    required: true,
  },
});
</script>