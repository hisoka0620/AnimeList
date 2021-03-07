<template>
  <div id="app">
    <h1>WATCHING-ANIME-MANAGEMENT<b-button v-b-popover.hover.top="'Using API by Annict'" variant="secondary" class="px-3 ml-2 mb-2 info-btn">i</b-button></h1>
    <h4>2020(Autumn)-2021(Winter)</h4>
    <anime-list />
  </div>
</template>

<script>
import AnimeList from './components/AnimeList'

export default {
  name: 'App',
  components: {
    AnimeList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app h1,h4{
  font-family: 'Oswald', sans-serif;
}
#search{
  margin-top: 25px;
}
</style>
