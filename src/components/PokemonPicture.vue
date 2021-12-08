<template>
   <div class="pokemon-picture">
      <div class="image-container">
         <img class="hidden-pokemon" :src="imgSrc" alt="Pokemon Picture" />
         <img
            v-if="showPokemon"
            class="fade-in"
            :src="imgSrc"
            alt="Pokemon Picture"
         />
      </div>
   </div>
</template>

<script>
export default {
   props: {
      pokemonId: {
         type: Number,
         requiered: true,
      },
      showPokemon: {
         type: Boolean,
         requiered: true,
         default: false,
      },
   },

   computed: {
      imgSrc() {
         return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      },
   },
};
</script>

<style scoped>
.image-container {
   height: 30vh;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
}

.image-container img {
   width: 50%;
   position: absolute;
}

.hidden-pokemon {
   filter: brightness(0);
   -moz-user-select: none;
   -ms-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
}
</style>