export async function FetchDataNews(numPage = 1) {
    let response = await fetch(`https://flems.github.io/test/api/news/${numPage}/`);
    let result = await response.json()

    return result;
}