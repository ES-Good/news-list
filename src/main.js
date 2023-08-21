import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'

// import { Update, DataNewsPage } from "@/controllers/NewsPage";


// (async function () {
//     await Update(1)
//     console.log(await DataNewsPage)
// })()

// console.log(DataNewsPage)
// class FetchDataNewsPage {
//     constructor(option) {
//         this.allDataNewsPage = option.data
//     }

//     then(resolve) {
//         resolve(
//             this.allDataNewsPage = FetchDataNews()
//         )
//     }
// }

// (async function () {
//     let result = await new FetchDataNewsPage({
//         data: ''
//     })
//     console.log(result)
// })()

// // let test = new FetchDataNewsPage({
// //     data: ''
// // })
// // console.log(test)



createApp(App).mount('#app')
