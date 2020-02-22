<template>
  <div>
    <shop-header></shop-header>
    <shop-body></shop-body>
    <shop-footer></shop-footer>
  </div>
</template>

<script>
import ShopHeader from './ShopHeader';
import ShopBody from './ShopBody.vue';
import ShopFooter from './ShopFooter.vue';

export default {
  components: {
    ShopHeader,
    ShopBody,
    ShopFooter,
  }
}
</script>

<style scoped>

</style>
