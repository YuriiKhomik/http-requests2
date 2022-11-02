// import pokemonCardTpi from "./templates/pokemon-card.hbs";

// const refs = {
//     cardContainer: document.querySelector('.js-card-container'),
// };

// // AJAX - (асинхронний джаваскрипт хмл) це коли ми з клієнта робимо запит на бекенд, бекенд повертає JSON а ми вже по цьому JSON рендеримо розмітку

// // зроби запит сюди
// fetch('https://pokeapi.co/api/v2/pokemon/13')
// // коли прийде - розпарси відповідь
// .then(response=>{
//     return response.json();
// })
// // і коли цю відповідь опрацював - опрацюй його(якщо успішно)
// .then(pokemon=>{console.log(pokemon);
//     const markup = pokemonCardTpi(pokemon);
//     console.log(markup);
//     // додаємо отриману розмітку з hbs файлу в html
//     // важливо розуміти, що доступ до цієї розмітки ми маємо лише всередині цього колбеку then
//     // ніде в зовнішньому коді нема доступу до цих даних, тому що цей колбек виконується асинхронно
//     // відкладено, тоді коли ці дані прийдуть колись
//     refs.cardContainer.innerHTML = markup;
// })
// .catch(error => {
//     console.log(error)
// });

// // AJAX - чистимо функцію

// // зроби запит сюди
// fetch('https://pokeapi.co/api/v2/pokemon/11')
// // коли прийде - розпарси відповідь
// .then(response=>{
//     return response.json();
// })
// // якщо відповідь від бекенду успішна - передаємо посилання на функцію renderPokemonCard
// // ВАЖЛИВО!! передаємо посилання на фуекцію ".then(renderPokemonCard)", а не на результат ".then(renderPokemonCard())"
// .then(renderPokemonCard)
// .catch(error => {
//     console.log(error)
// });

// // малювання інтерфейсу повинно бути окремою функцією:
// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpi(pokemon);
//     refs.cardContainer.innerHTML = markup;
// };

// // AJAX - чистимо функцію ще

// // і просто викликаємо її
// fetchPokemonById()

// // створили окрему функцію для отримання даних і малювання
// function fetchPokemonById(){
//     fetch('https://pokeapi.co/api/v2/pokemon/111')
//     .then(response=>{
//     return response.json();
// })
//     .then(renderPokemonCard)
//     .catch(error => {
//     console.log(error)
// });
// }

// // малювання інтерфейсу повинно бути окремою функцією:
// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpi(pokemon);
//     refs.cardContainer.innerHTML = markup;
// };

// // AJAX - чистимо функцію ще...

// // створили окрему функцію для отримання промісу із покемоном (fetch повертає проміс)
// function fetchPokemonById(){
//     return fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(response=>{
//     return response.json();
// });
// };
// // розшифровка функції fetchPokemonById:
// // на місце фетча призодить проміс, на місце проміса приходять дані у вигляді response.json() і тоді до нього присобачуємо ще один then
// // return проміс.проміс(response.json()).then(покемон);

// // функція для рендерингу HTML-розмітки
// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpi(pokemon);
//     refs.cardContainer.innerHTML = markup;
// };

// // при виклику функції чейнимо до неї функцію then, яка буде рендерити розмітку
// fetchPokemonById()
// .then(renderPokemonCard)
// .catch(error => {console.log(error)});

// // ОПТИМІЗОВУЄМО ФУНКЦІЮ ДАЛІ(фетч відбувається динамічно)

// function fetchPokemonById(pokemonId){
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     .then(response=>{
//     return response.json();
// });
// };

// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpi(pokemon);
//     refs.cardContainer.innerHTML = markup;
// };

// fetchPokemonById(215)
// .then(renderPokemonCard)
// .catch(error => {console.log(error)});

// !!!ВСЕ ПОПЕРЕДНЄ КОНМЕНТУЄМО!!!
// підключаємо пошук покемона з форми:

// import pokemonCardTpi from "./templates/pokemon-card.hbs";

// const refs = {
//     cardContainer: document.querySelector('.js-card-container'),
//     searchForm: document.querySelector('.js-search-form')
// };

// // при сабміті форми буде викликатися onsearch
// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e){
//     e.preventDefault();

//     // отримуємо посилання на value of input
//     const form = e.currentTarget;
//     const searchQuery = form.elements.query.value

//     // викликаємо фетч покемон при сабміті форми
//     fetchPokemonById(searchQuery)
//     .then(renderPokemonCard)
//     // .catch(error => {console.log('Here catch works. Error generated by "catch"')
//     // alert('ooops, smth went wrong, we cant find your Pokemon')})
//     // or:
//     .catch(onFetchError)
//     // .finally(()=>{
//     //     form.reset();
//     // })
//     // or:
//     .finally(form.reset());
// };

// function fetchPokemonById(pokemonId){
//     // return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     // .then(response=>{
//     // return response.json();
//     // or:
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

//     return fetch(url).then(response=>response.json());
// };

// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpi(pokemon);
//     refs.cardContainer.innerHTML = markup;
// };

// function onFetchError(){
//     console.log('Here catch works. Error generated by "catch"')
//     alert('ooops, smth went wrong, we cant find your Pokemon');
// };

// // А ТЕПЕР ЗАКИДАЄМО НАШІ ФУНКЦІЇ В api-service.js:

// import pokemonCardTpi from "./templates/pokemon-card.hbs";
// // імпортуємо функції з api-service.js:
// import API from "./api-service";
// // імпортуємо рефи з get-refs.js
// import getrefs from "./get-refs";
// // викликаємо імпортовані рефи
// const refs = getrefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e){
//     e.preventDefault();

//     const form = e.currentTarget;
//     const searchQuery = form.elements.query.value

//     API.fetchPokemonById(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(form.reset());
// };

// function renderPokemonCard(pokemon) {
//     const markup = pokemonCardTpi(pokemon);
//     refs.cardContainer.innerHTML = markup;
// };

// function onFetchError(){
//     console.log('Here catch works. Error generated by "catch"')
//     alert('ooops, smth went wrong, we cant find your Pokemon');
// };

// ПАРАМЕТРИ ЗАПИТУ

// pokemon?limit=100000&offset=0
// все, що після знаку питання - ц параметри запиту
// кожен параметр розділений апперсандом

// fetch('https://newsapi.org/v2/everything?q=cars&apiKey=b41603e50de9421aa47b2028dddacda6').then(r=>r.json()).then(console.log);

// or:

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//     headers: {
//         Authorization: 'b41603e50de9421aa47b2028dddacda6'
//     },
// };

// fetch(url, options)
// .then(r=>r.json())
// .then(console.log);

// PAGINATION

// // fetch('https://newsapi.org/v2/everything?q=dogs&apiKey=b41603e50de9421aa47b2028dddacda6').then(r=>r.json()).then(console.log);

// const url = 'https://newsapi.org/v2/everything?q=dogs&language=en&pageSize=20&page=2';
// const options = {
//     headers: {
//         Authorization: 'b41603e50de9421aa47b2028dddacda6'
//     },
// };

// fetch(url, options)
// .then(r=>r.json())
// .then(console.log);

// SHOW MORE
import NewsApiService from './news-service';
import articlesTpi from './templates/articles.hbs';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();
// console.log(newsApiService)

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  if (newsApiService.query === '') {
    return alert('Input smth');
  }
  newsApiService.resetPage();
  newsApiService.fetchArticles().then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
  });
}

function onLoadMoreBtnClick() {
  newsApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpi(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
