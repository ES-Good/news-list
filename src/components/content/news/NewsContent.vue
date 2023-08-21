<template>
    <div class="container">
      <div class="news-list">
        <div class="news-list__inner">
          <NewsCard
          v-for="(card, index) in NewsList" :key="index"
          :DataCard="card"
          />
        </div>
        <DowlandNews 
        @updateNews="pushNews" 
        :currentNav="CurrentPage" 
        v-if="ShowBtnDowlandNews"/>
      </div>
    </div>
  </template>
  
<script>
import { Update } from "@/controllers/news/NewsPage";
import DataNewsList  from "@/controllers/news/NewsItems";
import ShowNavNews from "@/helper/ShowNavNews";
import DataNavNews from "@/controllers/news/NavNews";
import DowlandNews from './DowlandNews.vue'
import NewsCard from './NewsCard.vue';

export default {
  components: {
    DowlandNews,
    NewsCard
  },
  name: 'NewsContent',
  data(){
    return {
      NewsList: [],
      ShowBtnDowlandNews: null,
      CurrentPage: null,
      loading: true
    }
  },
  methods:{
    async pushNews(){
      let arrNewsList = await DataNewsList()
      arrNewsList.forEach(element => {
        this.NewsList.push(element)
      });
      this.ShowBtnDowlandNews = await ShowNavNews()
      let currntNav = await DataNavNews()
      this.CurrentPage = currntNav.current
    },
  },
  async mounted(){
    await Update()
    this.pushNews()
  }
}
</script>

<style>

</style>