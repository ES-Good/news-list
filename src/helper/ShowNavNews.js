import DataNavNews from "@/controllers/news/NavNews";

export default async function ShowNavNews() {
    let status = await DataNavNews()
    return status.current != status.total ? true : false
}