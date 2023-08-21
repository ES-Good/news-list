<template>
  <div class="news-list__dowland-block">
    <button class="news-list__btn-dowland" @click="dowlandNews">
      <span>Загрузить ещё</span>
    </button>
  </div>
</template>

<script>
import { Update } from "@/controllers/news/NewsPage";

export default {
    name: 'DowlandNews',
    props:{
      currentNav: Number,
    },
    methods:{
      async dowlandNews(){
        let nextPage = this.currentNav+1
        await Update(nextPage)
        this.$emit('updateNews', nextPage)
      }
    }
}
</script>

<style>

</style>