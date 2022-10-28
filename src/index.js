import pokemonCardTpi from "./templates/pokemon-card.hbs";
// зроби запит сюди
fetch('https://pokeapi.co/api/v2/pokemon/2')
// коли прийде - розпарси відповідь
.then(response=>{ 
    return response.json();
})
// і коли цю відповідь опрацював - опрацюй його(якщо успішно)
.then(pokemon=>{console.log(pokemon);
    const markuo = pokemonCardTpi(pokemon);
    console.log(markup);
})
.catch(error => {
    console.log(error)
});