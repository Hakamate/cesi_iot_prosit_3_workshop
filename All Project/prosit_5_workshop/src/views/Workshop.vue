<template>
  <div class="workshop">
    <h1>Nouveaux articles :</h1>
    <div class="custom-grid">
      <Article v-for="(article, index) in articles" :key="index" :article="article" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Article from '@/components/Article.vue'

export default defineComponent({
  components: { Article },
  name:'Workshop',
  data() {
    return {
      articles: [
          {
              id_article: 1,
              titre_article: 'article 1',
              image: require('@/assets/images/article1.jpg'),
              isliked: false
          },
          {
              id_article: 2,
              titre_article: 'article 2',
              image: require('@/assets/images/article2.jpg'),
              isliked: false
          },
      ],
    }
  },
})
</script>
<style>
.custom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
