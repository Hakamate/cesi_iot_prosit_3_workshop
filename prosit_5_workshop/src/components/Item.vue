<template>
  <div>
          <img width="300" v-bind:src="item.image">
      <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <ul>
            <li v-for="(color, index) in item.colors" :key="index" :style="` border: solid 2px ${color.color}`">
              <span>{{ color.name }} - {{ color.stock }} available </span>
              <button v-if="color.stock > 0" @click="addToCart(item, index)">Add to cart</button> 
              <button v-if="color.selected > 0" @click="removeToCart(item, index)">Remove to cart</button>
              <span>Cart : {{ color.selected }} </span>
            </li>
          </ul>

      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Item',
  props: {
    item: Object,
  },
  methods: {
    addToCart: (item: any, index: number) => {
      item.colors[index].stock -= 1
      item.colors[index].selected += 1
    },
    removeToCart: (item: any, index: number) => {
      item.colors[index].stock += 1
      item.colors[index].selected -= 1
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
