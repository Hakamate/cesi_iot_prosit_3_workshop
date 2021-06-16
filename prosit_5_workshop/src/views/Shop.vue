<template>
  <div class="workshop">
    <h1>Nouveaux items :</h1>
    <div class="custom-grid">
      <Item v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Item from '@/components/Item.vue'

export default defineComponent({
  components: { Item },
  name:'Shop',
  data() {
    return {
      items: [
          {
            id_item: 1,
            title: 'item 1',
            description: 'Its a description',
            image: require('@/assets/images/article1.jpg'),
            colors: [
              {
                name: 'Red',
                color: 'red',
                stock: 5,
                selected: 0,
              },
              {
                name: 'Blue',
                color: 'blue',
                stock: 2,
                selected: 0,
              },
              {
                name: 'Green',
                color: 'green',
                stock: 7,
                selected: 0,
              }
            ],
          },
          {
            id_item: 1,
            title: 'item 1',
            description: 'Its a description',
            image: require('@/assets/images/article2.jpg'),
            colors: [
              {
                name: 'Red',
                color: 'red',
                stock: 15,
                selected: 0,
              },
              {
                name: 'Blue',
                color: 'blue',
                stock: 21,
                selected: 0,
              },

            ],
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
