const Pokemon = document.getElementById("pokemon")

Pokemon.style.display = "grid"
Pokemon.style.gridTemplateColumns = "repeat(4, 1fr)"
Pokemon.style.gap = "10px"
Pokemon.style.padding = "10px"

let limit = 20;
let offset = 0;

const pokemon_Card = (pokemon)=>{
    const div = document.createElement("div")
    div.innerHTML= `
    <img style="height:50%; width:"200px""  src="${pokemon.sprites.other.dream_world.front_default}"  alt="${pokemon.name}" >
    <h1>${pokemon.name}</h1>
    `
    div.style.height = "350px"
    div.style.width = "300px"
    div.style.border = "1px solid red"
    div.style.borderRadius = "10px"
    div.style.display = "flex"
    div.style.flexDirection ="column"
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    div.style.backgroundColor = "skyblue"
    return div
}

const getUrls = async(url)=>{
    const res = await fetch(url);
    const url_data = await res.json();
    console.log(url_data)
    Pokemon.appendChild(pokemon_Card(url_data))
}

const getData = async()=>{
    let api = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
   
    const res = await fetch(api);
    const main_data = await res.json();
    main_data.results.forEach(element => {
        getUrls(element.url);   
    });
}
getData()

const previous = ()=>{
    Pokemon.innerHTML=""
    offset -= 20
    let api = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    getData(api)
}
const next = ()=>{
    Pokemon.innerHTML=""
    offset += 20
    let api = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    getData(api)
}
