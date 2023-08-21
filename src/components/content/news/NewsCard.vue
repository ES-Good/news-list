<template>
    <a :href="DataCard.link" class="news-card" :class="{'news-card_not-border': DataCard.image}">
        <div class="news-card__img-box" v-if="DataCard.image">
            <img 
            :src="DataCard.image" 
            @load="showImg"
            v-show="dowlandImg"
            alt="" class="news-card__img-news">
            <img v-if="!dowlandImg" src="../../../assets/img/preloader.svg" class="news-card__preloader-img" alt="">
        </div>
        <div class="news-card__content">
            <div class="news-card__date-box">
                <p class="news-card__day">
                    {{ date.day }}
                </p>
                <p class="news-card__month-and-year">
                    {{ date.month }}
                    <br>
                    {{ date.year }}
                </p>
            </div>
            <p class="news-card__title">
                {{ DataCard.name }}
            </p>
            <p class="news-card__text">
                {{ DataCard.previewText }}
            </p>
            <div class="news-card__footer">
                <div class="news-card__type-news-box">
                    <p class="news-card__type-news">
                        {{ DataCard.type.value }}
                    </p>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'NewsCard',
    props:{
        DataCard: Object
    },
    data(){
        return{
            dowlandImg: false
        }
    },
    methods:{
        showImg(){
            this.dowlandImg = true
        }
    },
    computed:{
        date(){
            const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
            const monthName = month[new Date (this.DataCard.date).getMonth()]
            return {
                year: new Date (this.DataCard.date).getFullYear(),
                month: monthName,
                day: new Date (this.DataCard.date).getDate()
            }
        }
    }
}
</script>

<style>

</style>