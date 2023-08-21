<template>
  <div class="container-fluid">
    <Header @click="test"/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
// import { Update, DataNewsPage } from "@/controllers/news/NewsPage";
import Header from '@/components/Header.vue'
import NewsContent from './components/content/news/NewsContent.vue';
import Footer from './components/Footer.vue';
import Content from "./components/Content.vue";

export default {
  name: 'App',
  components: {
    Header,
    NewsContent,
    Footer,
    Content
  }
}
</script>

