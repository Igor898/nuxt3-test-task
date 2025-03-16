<template>
  <div v-for="user in users" :key="user.id">
    <v-card class="mx-auto my-4 agent-cards" max-width="560">
      <div class="d-flex" style="height: 142px">
        <v-list-item-avatar class="user-avatar-under">
          <img
            width="140px"
            height="140px"
            :src="user.avatar"
            class="user-avatar"
            style="border-radius: 20px"
            alt="User Avatar"
          />
        </v-list-item-avatar>
        <v-list-item-content style="height: 142px">
          <div class="d-flex">
            <img
              width="48px"
              height="48px"
              :src="user.avatar"
              class="user-avatar-small mr-2"
              style="border-radius: 14px"
              alt="User Avatar"
            />
            <div>
              <div class="user-name">{{ user.name }}</div>
              <div class="d-flex align-center mb-3 mt-2" style="line-height: 20px">
                <div class="d-flex align-center" v-if="user.documentsVerified">
                  <img src="/public/Premium.png" alt="photo" /><span
                    class="user-avatar reviews"
                    >&nbsp;Документы проверены</span
                  ><span class="user-avatar-small reviews">&nbsp;Проверен</span>
                </div>
                <div class="mr-2" v-if="user.rating">&nbsp;&bull;
                  <v-icon
                    style="color: #337566; font-size: 21px; margin-bottom: 2px"
                    icon="mdi-star"
                  ></v-icon>
                  <span class="reviews">{{ user.rating }}</span>
                </div>
                <div v-if="user.reviewsCount">
                  <span class="reviews">&bull; &nbsp;{{ user.reviewsCount }} отзывов</span>
                </div>
              </div>
            </div>
          </div>
          <v-card-text class="user-description" style="padding: 0">
            {{ user.description }}
          </v-card-text>
        </v-list-item-content>
      </div>
    </v-card>
  </div>
</template>
<script setup lang="ts">
defineProps({
  users: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="sass" scoped>
@import '@/styles/main'
</style>