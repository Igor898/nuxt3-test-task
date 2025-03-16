<template>
  <Header :users="users1" />
  <div class="mb-4 text-center">
    <Navigation />
  </div>
  <main>
    <div class="visible">
      <div class="d-flex flex-column align-center">
        <img
          src="/public/logo.png"
          alt=""
          class="rounded-xl"
          style="width: 120px"
        />
        <h1 class="text-h4 mt-5">Наследие</h1>
        <div class="flex-container">
          <p class="text-subtitle-1">
            <img src="/public/Premium.png" alt="" />
            Проверен &bull;
            <v-icon
              style="color: #337566; font-size: 21px; margin-bottom: 2px"
              icon="mdi-star"
            ></v-icon>
            4.7 &bull; 19 отзывов
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-space-between company-block">
      <v-container>
        <div class="about">
          <h1 class="about-title">О компании</h1>
          <p class="about-text mt-2">
            Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в
            любимую работу. Работаем с профессиональной техникой.
          </p>
        </div>
      </v-container>
      <v-container>
        <div class="work">
          <h1 class="work-title">Режим работы</h1>
          <p class="work-text mt-2">Сегодня с 8:00 до 23:00</p>
        </div>
      </v-container>
      <div class="location-aria-smal">
        <img class="location_img" src="/public/map.png" alt="photo" />
        <img class="location_marker" src="/public/fas.png" alt="photo" />
      </div>
      <v-container>
        <div class="location d-flex">
          <div>
            <h1 class="location-title">Местоположение</h1>
            <p class="location-text mt-2">
              Ростов на Дону, Воронежская ул., 42А корп. 1
            </p>
          </div>
          <div class="location-aria">
            <img class="location_img" src="/public/map.png" alt="photo" />
            <img class="location_marker" src="/public/fas.png" alt="photo" />
          </div>
        </div>
      </v-container>
    </div>
  </main>
  <footer>
    <v-container>
      <div style="bottom: 0" class="d-flex column">
        <p class="mr-5">© Annonce 2025</p>
        <p style="color: #6b6b6b" class="mr-5">Документы</p>
        <p style="color: #6b6b6b">О компании</p>
      </div>
    </v-container>
  </footer>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
const users1 = ref([]);
const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://mocki.io/v1/bd6f6019-5c92-47b7-9b3c-e1f489db8dad'
    );
    users1.value = response.data.agents[0];
    console.log('Данные загружены:', response.data);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};
onMounted(() => {
  fetchData();
});
</script>
<style scoped lang="sass">
@import '../styles/main'
.company-block
  max-width: 560px
  height: 400px
  margin: auto
  padding-top: 20px
  margin-bottom: 58px
.visible
  display: none
.about-title
  font-family: Inter
  font-weight: 600
  font-size: 24px
  line-height: 28px
.about-text
  font-family: Inter
  font-weight: 400
  font-size: 17px
  line-height: 28px
.work-title
  font-family: Inter
  font-weight: 600
  font-size: 24px
  line-height: 28px
  color: #b8b8b8
.work-text
  font-family: Inter
  font-weight: 400
  font-size: 17px
  line-height: 28px
  color: #b8b8b8
.location-title
  font-family: Inter
  font-weight: 600
  font-size: 24px
  line-height: 28px
.location-text
  font-family: Inter
  font-weight: 400
  font-size: 17px
  line-height: 28px
  color: #337566
.location-aria
  position: relative
  width: 200px
  height: 132px
  overflow: hidden
  border-top-left-radius: 15px
  border-top-right-radius: 15px
  border-bottom-right-radius: 15px
.location-aria-smal
  position: relative
  width: 100%
  height: 96px
  overflow: hidden
  display: none
.location_img
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-30%, -50%) scale(2)
  width: 100%
  height: 100%
  object-fit: cover
.location_marker
  position: absolute
  top: 20%
  left: 40%
@media (max-width: 960px)
  .about-title
    font-size: 20px
    line-height: 24px
  .visible
    display: block
  .about-text
    font-size: 15px
    line-height: 24px
  .work-title
    font-size: 20px
    line-height: 24px
  .work-text
    font-size: 15px
    line-height: 24px
  .location-title
    font-size: 20px
    line-height: 24px
  .location-text
    font-size: 15px
    line-height: 24px
  .location-aria-smal
    display: block
  .location-aria
    display: none
</style>