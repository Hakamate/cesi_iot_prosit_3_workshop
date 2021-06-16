<template>
  <div class="article">
      <div class="article-image">
          <img v-bind:src="article.image">
      </div>
      <div class="article-vote" >
          <p v-if="article.isliked"><button v-on:click="likeArticle(article)"><img src="@/assets/icones/17304.png"></button></p>
          <p v-else><button v-on:click="likeArticle(article)"><img src="@/assets/icones/126099.png"></button></p>
      </div>

      <h2>{{article.titre_article}}</h2>
      <p> voici mon {{article.titre_article}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Article',
  props: {
    article: Object,
  },
  methods: {
    likeArticle: (article: any) => {
      article.isliked = !article.isliked
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
    margin: 0px !important;
}
.nav-bar{
    background-color : #42b983;
    height: 60px;
    width: 100%;
}
.article {
    position: relative;
    background-color : #81ccaa;
    padding: 10px;
    border: #42b983;
    border-radius: 3px;
    margin: 0 auto;
    max-width: 500px;
}

.article-image img{
    width: 480px;
    height: 360px;
    border-radius: 3px;

}

.article-vote{
    position: absolute;
    top: 10px;
    right: 30px;
}

.article-vote img{
    width: 30px;
    height: 30px;
}
</style>
