import heroData from "./heroes.json";

const image = (id) =>
  new URL(`../assets/heroes/${id}.png`, import.meta.url).href;

export const heroes = heroData.map((hero) => ({
  ...hero,
  image: image(hero.imageId),
}));
