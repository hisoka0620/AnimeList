<template>
  <div id="anime-list">
    <Loading v-show="loading" />
    <anime-item v-show="!loading" v-for="anime in animes" :key="anime.id" :anime="anime"></anime-item>
  </div>
</template>

<script>
import AnimeItem from './AnimeItem'
import Loading from './Loading'
import gql from "graphql-tag";

 const GET_ANIMES = gql`
  {
  searchWorks(seasons: ["2021-spring","2021-winter","2020-autumn"], orderBy: { field: WATCHERS_COUNT, direction: DESC }, first: 40) {
    edges {
      node {
        title
        twitterHashtag
        officialSiteUrl
        viewerStatusState
        seasonYear
        seasonName
        image{
          recommendedImageUrl
        	twitterAvatarUrl
        }
      }
    }
  }
}`;
export default {
  name: 'AnimeList',
  components: {
    AnimeItem,
    Loading
  },
  data(){
    return{
      animes: [],
      loading: true
    }
  },
  //mounted()
   beforeUpdate(){
     this.loading = false;  
   },
    apollo: {
    // Vue-Apollo options here
      animes: {
        query: GET_ANIMES,
        update: data => data.searchWorks.edges
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#anime-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
}
</style>
