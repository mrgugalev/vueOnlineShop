<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item 
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @sendArticle='showChildArticleInConsole'
      />
    </div>
  </div>
</template>

<script>

import vCatalogItem from './v-catalog-item';
import { mapGetters } from 'vuex';


export default{
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/products'
    })
  },
  methods: {
    showChildArticleInConsole(data) {
      console.log(data);
    }
  },
  watch: {},
  mounted() {

  }
}
</script>


<style>
  .v-catalog__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
</style>