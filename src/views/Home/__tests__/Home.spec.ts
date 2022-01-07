import Home from "../Home.vue";
import { shallowMount } from "@vue/test-utils";

const wrapper = shallowMount(Home);

it("Should render Home", () => {
  expect(wrapper.exists()).toBe(true);
});

it("Should fetch pokemon api", async () => {
  expect(wrapper.vm.pokemon).toBe(undefined);
  await wrapper.vm.fetchPokemon();
  expect(wrapper.vm.pokemon).toBeDefined();
});
