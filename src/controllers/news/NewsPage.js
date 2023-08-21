import { FetchDataNews } from "@/service/DataNews";

let DataNewsPage = {};

export async function Update(numPage) {
    DataNewsPage = await FetchDataNews(numPage)
}

export { DataNewsPage }