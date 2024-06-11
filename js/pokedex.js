const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const ButtonPrev = document.querySelector(".btn-prev");
const ButtonNext = document.querySelector(".bnt-next");
let contadora ;






// conectar com api


const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();

        return data;

    }


};

// Renderizar os dados da API

const renderPokemon = async (pokemon) => {
    pokemonName.textContent = "carregando...";
    pokemonNumber.textContent = "";
    pokemonImage.src = "https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif";


    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
        input.value = "";

        contadora = data.id;

        console.log(data);

    } else {
        pokemonName.textContent = " não encontrado ";
        pokemonImage.src = "https://media4.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=6c09b9528zqo18mafsejumu95zq4riqzlpfk0y41f7540wux&ep=v1_gifs_search&rid=200w.gif&ct=g";


    };

}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
    
});

ButtonPrev.addEventListener("click", ()=> {
 

 if (contadora > 1) {
    contadora -=1;   
 renderPokemon(contadora)
 }
 
});

ButtonNext.addEventListener("click", () => {
   contadora += 1;
   renderPokemon(contadora);

});

renderPokemon(1)
