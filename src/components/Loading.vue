<template>
  <div id="loading">
    <vue-loading 
    type="bars" 
    color="#00bfff" 
    :size="{ width: '60px', height: '60px' }">
    </vue-loading>
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default{
  name: 'Loading',
  components: {
    VueLoading
  }
}
</script>

<style>
  #loading{
    padding-top: 150px;
  }
</style>