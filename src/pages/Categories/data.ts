export type Category =
  | "disney"
  | "marvel"
  | "nationalgeographic"
  | "pixar"
  | "starwars";

export const categoryData: Record<
  Category,
  {
    nombre: string;
    categoria: string;
    src: string;
    url: string;
    brandcover: string;
  }
> = {
  disney: {
    nombre: "Disney",
    categoria: "disney",
    src: "/images/cat/disney.jpeg",
    url: "Disney",
    brandcover: "/images/cat/scale.png",
  },
  marvel: {
    nombre: "Marvel",
    categoria: "marvel",
    src: "/images/cat/marvel.jpeg",
    url: "Marvel+Studios",
    brandcover: "/images/cat/scale.png",
  },
  nationalgeographic: {
    nombre: "nationalgeographic",
    categoria: "nationalgeographic",
    src: "/images/cat/nationalgeographic.jpeg",
    url: "National+Geographic",
    brandcover: "/images/cat/scale.png",
  },
  pixar: {
    nombre: "pixar",
    categoria: "pixar",
    src: "/images/cat/pixar.jpeg",
    url: "Pixar",
    brandcover: "/images/cat/scale.png",
  },
  starwars: {
    nombre: "star wars",
    categoria: "starwars",
    src: "/images/cat/stwars.jpeg",
    url: "Star+Wars",
    brandcover: "/images/cat/scale.png",
  },
};
