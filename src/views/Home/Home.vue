<template>
  <div class="home__search">
    <input
      class="home__search-input"
      type="text"
      placeholder="Search for a Pokemon"
      v-model="search"
    />
  </div>

  <div class="home__content">
    <div
      class="home__content-modal"
      v-for="(pokemon, index) in filteredPokemons"
      :key="index"
    >
      <router-link
        class="home__content-link"
        :to="`/about/${pokemonId[pokemon.name]}`"
      >
        {{ pokemon.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive, toRefs, computed } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const state: any = reactive({
      pokemons: [],
      pokemonId: {},
      search: "",
      filteredPokemons: computed(() => updatePokemon()),
    });

    function updatePokemon() {
      if (!state.search) return [];

      return state.pokemons.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().includes(state.search);
      });
    }

    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        state.pokemons = data.results;
        state.pokemonId = data.results.reduce(
          (acc: any, curr: any, index: any) =>
            (acc = { ...acc, [curr.name]: index + 1 }),

          {}
        );
      });

    return { ...toRefs(state) };
  },
});
</script>

<style src="./Home.scss" lang="scss" scoped />
