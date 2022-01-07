<template>
  <div class="about">
    <div class="about__pokemon-content" v-if="pokemon">
      <h3 class="about__pokemon-name">{{ pokemon.name }}</h3>
      <div class="about__pokemon-image">
        <img
          class="about__pokemon-image-profile"
          :src="pokemon.sprites.front_shiny"
          alt="Pokemon image front"
        />
        <img
          class="about__pokemon-image-profile"
          :src="pokemon.sprites.back_shiny"
          alt="Pokemon image back"
        />
      </div>
      <h3 class="about__pokemon-types">Types</h3>
      <div v-for="(type, index) in pokemon.types" :key="index">
        <h5 class="about__pokemon-types-name">{{ type.type.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "About",
  setup() {
    const route = useRoute();
    const state = reactive({
      pokemon: null,
    });

    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}/`)
      .then((response) => response.json())
      .then((data) => {
        state.pokemon = data;
      });

    return { ...toRefs(state) };
  },
});
</script>

<style src="./About.scss" lang="scss" scoped />
