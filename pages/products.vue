<template>
  <Header :users="users" />
  <main>
    <div class="mb-4 text-center">
      <Navigation />
      <MenuDown />
    </div>
    <v-container>
      <v-row class="move-bottom">
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            style="position: relative"
            class="h-100 d-flex flex-column rounded-xl card-prodect"
          >
            <div class="d-flex meta-data">
              <div class="eyes">
                <v-icon icon="mdi-eye"></v-icon><span style="margin-left: 8px;">255</span>
              </div>
              <div class="time">
                <v-icon icon="mdi-calendar-blank"></v-icon><span style="margin-left: 8px;">4 дня</span>
              </div>
            </div>
            <v-img
              :src="product.image"
              height="332px"
              class="rounded-xl"
              cover
            ></v-img>
            <v-card-text class="pa-2 flex-grow-1">
              <p class="text-price">Цена: {{ product.price }} ₽</p>
            </v-card-text>
            <v-card-title class="pa-2 text-name mb-3">{{
              product.name
            }}</v-card-title>
            <hr style="border: 1px solid #e8e8e8" />
            <v-card-actions class="d-flex justify-space-between mt-2">
              <p class="text-blur">Увеличьте количество просмотров</p>
              <v-btn
                style="border-radius: 12px"
                color="#337566"
                variant="elevated"
                >Продвигать</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-alert v-if="products.length === 0" type="info" class="mt-4"
        >Товары не найдены.</v-alert
      >
    </v-container>
  </main>
  <footer>
    <v-container style="line-height: 64px;">
      <div class="d-flex column">
        <p class="mr-5">© Annonce 2025</p>
        <p style="color: #6b6b6b" class="mr-5">Документы</p>
        <p style="color: #6b6b6b">О компании</p>
      </div>
    </v-container>
  </footer>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation.vue';
import MenuDown from '../components/MenuDown.vue';
const company = ref(null);
const reviews = ref(null);
const products = ref([]);
const users = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://mocki.io/v1/aa5e9865-1f77-4d23-8ac8-3ad21045fa54'
    );
    users.value = response.data.agents[0];
    company.value = response.data.company;
    reviews.value = response.data.reviews;
    products.value = response.data.products;

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
.meta-data
  position: absolute
  top: 8px
  left: 10px
  z-index: 1
  color: white
.eyes
  border-radius: 12px
  background: #1B1D2299
  margin-right: 5px
  padding: 6px
.time
  background: #1B1D2299
  border-radius: 12px
  padding: 6px
.v-container
  line-height: 0px
</style>