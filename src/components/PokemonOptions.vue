<template>
   <div class="options">
      <ul>
         <li
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            @click="$emit('selection', pokemon.id)"
         >
            {{ pokemon.name }}
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   props: {
      pokemons: {
         type: Array,
         required: true,
      },
   },
};
</script>

<style scoped>

   .options ul li {
      list-style: none;
      padding: .8rem 1.2rem;
      border-radius: .8rem;
      margin-bottom: 2rem;
      border: 1px solid #2c3e50;
      cursor: pointer;
   }

</style>