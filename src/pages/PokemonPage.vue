<template>
   <h1 v-if="!pokemon">Espera porfa</h1>
   <div v-else>
      <h1>¿Quien es este pokemon?</h1>
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions
         :pokemons="pokemonsArr"
         @selection="checkAnswer($event)"
      />
      <template v-if="showAnswer">
         <h2 class="fade-in">{{ message }}</h2>
         <button @click="newGame">Nuevo Juego</button>
      </template>
   </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

getPokemonOptions();

export default {
   name: "Pokemon Page",

   data() {
      return {
         pokemonsArr: [],
         pokemon: null,
         showPokemon: false,
         showAnswer: false,
         message: "",
      };
   },

   methods: {
      async mixPokemonArray() {
         this.pokemonsArr = await getPokemonOptions();

         const intAlea = Math.floor(Math.random() * 4);
         this.pokemon = this.pokemonsArr[intAlea];
      },

      checkAnswer(pokemonId) {
         this.showPokemon = true;
         this.showAnswer = true;
         pokemonId === this.pokemon.id
            ? (this.message = `Correcto, es ${this.pokemon.name}`)
            : (this.message = `Lo siento, era ${this.pokemon.name}`);
      },

      newGame() {
         this.showPokemon = false;
         this.showAnswer = false;
         this.pokemonsArr = [];
         this.mixPokemonArray();
      }
   },

   components: {
      PokemonPicture,
      PokemonOptions,
   },

   mounted() {
      this.mixPokemonArray();
   },
};
</script>

<style scoped>
h2 {
   margin-bottom: 2rem;
}

button {
   padding: 0.8rem 1.2rem;
   border-radius: 0.8rem;
   margin-bottom: 2rem;
   border: 1px solid #2c3e50;
   cursor: pointer;
}
</style>
