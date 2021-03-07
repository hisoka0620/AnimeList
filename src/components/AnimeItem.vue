<template>
  <div>
    <div class="anime" :key="anime.id">
      <div class="shadow p-3 mb-5 bg-white rounded">
        <b-card
          :title="anime.node.title"
          :img-src="anime.node.image.recommendedImageUrl"
          img-alt="NoImage"
          img-top
          tag="article"
          style="max-width: 24rem;"
          class="mb-2"
        >
          <b-card-text>
            <div class="span-contents">
              <span class="text-primary twitterHash">#{{ anime.node.twitterHashtag }}</span>
              <span class="text-primary">#{{ anime.node.seasonYear }}</span>
            </div>
            <div class="p-contents">
              <p class="text-white bg-secondary rounded d-inline-block px-2 mr-2">{{   anime.node.viewerStatusState }} </p>
              <p class="text-white bg-secondary rounded d-inline-block px-2">{{ anime.node.seasonName }}</p>
            </div>
          </b-card-text>
          <b-button :href="anime.node.officialSiteUrl" target="_blank" 
          rel="noopener" variant="info">公式サイトはこちら</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AnimeItem",
  props: ["anime"]
}
</script>

<style scoped>
  .anime{
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .shadow:hover {
    box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
    transition: 0.6s;
    transform: translateY(-8px);
  }
  .twitterHash{
    margin-right: 10px;
  }
  .text-secondary{
    margin-top: 10px;
  }
  .p-contents{
    margin-top: 10px;
  }
</style>
