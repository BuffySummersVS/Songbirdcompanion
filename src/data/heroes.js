import heroData from "./heroes.json";

const image = (id) =>
  new URL(`../assets/heroes/${id}.png`, import.meta.url).href;

const isReleased = (hero) =>
  !hero.releaseDate || new Date(hero.releaseDate) <= new Date();

export const heroes = heroData
  .filter(isReleased)
  .map((hero) => ({
    ...hero,
    image: image(hero.imageId),
  }));
