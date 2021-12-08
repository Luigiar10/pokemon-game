import pokemonApi from "../api/pokemonApi"

const getPokemon = () => {
    const pokemonArray = Array.from( Array(650) )
    return pokemonArray.map( ( _ , index) => index + 1)
}

const getPokemonOptions = async () => {
    const mixedPokemon = getPokemon().sort( () => Math.random() - 0.5 )
    const pokemons = await getPokemonNames( mixedPokemon.splice(0, 4) )

    return pokemons
}

const getPokemonNames = async ( [a,b,c,d] = [] ) => {

    const arrayPromises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all( arrayPromises )

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]

}

export default getPokemonOptions