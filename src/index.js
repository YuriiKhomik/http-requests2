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

import pokemonCardTpi from "./templates/pokemon-card.hbs";

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form')
};

// при сабміті форми буде викликатися onsearch
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e){
    e.preventDefault();

    // отримуємо посилання на value of input
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value

    // викликаємо фетч покемон при сабміті форми
    fetchPokemonById(searchQuery)
    .then(renderPokemonCard)
    .catch(error => {console.log(error)})
    .finally(()=>{
        form.reset();
    });
};

function fetchPokemonById(pokemonId){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response=>{ 
    return response.json();
});
};

function renderPokemonCard(pokemon) {
    const markup = pokemonCardTpi(pokemon);
    refs.cardContainer.innerHTML = markup;
};

