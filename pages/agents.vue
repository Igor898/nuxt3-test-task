<template>
  <Header :users="users1"/>
  <div class="mb-4 text-center">
    <Navigation/>
  </div>
  <Agents :users="users"/>
  <footer>
    <v-container>
      <div class="d-flex column">
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
import Agents from '../components/Agents.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
const users = ref([]);
const users1 = ref([]);
const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://mocki.io/v1/aa5e9865-1f77-4d23-8ac8-3ad21045fa54'
    );
    users.value = response.data.agents;
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
<style lang="sass" scoped>
@import '../styles/main'
</style>