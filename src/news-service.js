const API_KEY = 'b41603e50de9421aa47b2028dddacda6';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
        headers: {
            Authorization: API_KEY,
        },
    };
// сервіс відповідає за збереження терміну запиту + номер групи
export default class NewsApiService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    } 

    // метод просто забирає статті, використовуючи властивості для терміну і номмера групи
    fetchArticles(){
        // console.log('Before request: ' ,this)
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    // і повертає результат фетчу 
    return fetch(url, options)
    .then(response => response.json())
    .then(({articles}) => {
        this.incrementPage();

        return articles;
    });
    }

    incrementPage(){
        this.page +=1
    }

    resetPage(){
        this.page = 1;
    }

    get query(){
        return this.searchQuery
    }
    set query(newQuery){
        this.searchQuery = newQuery;
    }
}