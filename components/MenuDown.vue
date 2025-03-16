<template>
  <div class="d-flex justify-center align-center mb-8">
    <v-menu offset-y :close-on-content-click="false" ref="menu">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="dropdown-button" ref="button">
          Все товары и услуги
          <v-icon class="move-icon">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list class="menu-list" :style="{ width: menuWidth + 'px' }">
        <v-list-item>
          <v-list-item-title class="category-title"
            >Категория 1</v-list-item-title
          >
        </v-list-item>
        <v-list-item
          v-for="(item, index) in category1"
          :key="index"
          @click="selectItem(item)"
        >
          <v-list-item-title class="category-item">
            <div class="d-flex">
              <span>{{ item.name }}</span
              ><span class="item-count">{{ item.count }}</span>
            </div>
            <v-checkbox
              v-model="selectedItems"
              :value="item"
              hide-details
              class="custom-checkbox"
            ></v-checkbox>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title class="category-title"
            >Категория 2</v-list-item-title
          >
        </v-list-item>
        <v-list-item
          v-for="(item, index) in category2"
          :key="index"
          @click="selectItem(item)"
        >
          <v-list-item-title class="category-item">
            <div class="d-flex">
              <span>{{ item.name }}</span
              ><span class="item-count">{{ item.count }}</span>
            </div>
            <v-checkbox
              v-model="selectedItems"
              :value="item"
              hide-details
              class="custom-checkbox"
            ></v-checkbox>
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="apply-button">
          <v-btn color="#347566" block @click="applyFilters">Применить</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const users = ref([]);

const category1 = ref([
  { name: 'Гробы', count: 5 },
  { name: 'Урны', count: 12 },
]);

const category2 = ref([
  { name: 'Тапки', count: 2 },
  { name: 'Покрывало', count: 1 },
]);

const selectedItems = ref([]);

const menuWidth = ref(0);

const menu = ref(null);
const button = ref(null);

const selectItem = (item) => {
  const index = selectedItems.value.findIndex(
    (selected) => selected.name === item.name
  );
  if (index === -1) {
    selectedItems.value.push(item);
  } else {
    selectedItems.value.splice(index, 1);
  }
};

const applyFilters = () => {
  console.log('Выбранные элементы:', selectedItems.value);
  if (menu.value) {
    menu.value.isActive = false;
  }
};

const setMenuWidth = () => {
  if (button.value?.$el) {
    menuWidth.value = button.value.$el.clientWidth;
  }
};

const handleResize = () => {
  setMenuWidth();
};

onMounted(() => {
  setMenuWidth();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<style scoped lang="sass">
@import '@/styles/main'
.menu-list
  padding: 16px

.category-title
  font-weight: bold
  font-size: 16px
  margin-bottom: 8px

.category-item
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  cursor: pointer

.item-count
  color: #6b6b6b
  margin-left: 8px

.custom-checkbox
  margin-left: 8px

  ::v-deep .v-selection-control
    padding: 0

  ::v-deep .v-icon
    color: #337566
    font-size: 20px

.apply-button
  margin-top: 16px
  padding: 0
</style>