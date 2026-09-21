const U = "https://images.unsplash.com/";
const q = (w: number) => `?auto=format&fit=crop&w=${w}&q=85`;

export const PHOTOS = {
  hero: "/images/hero-luftbild.webp",
  heroMobile: "/images/hero-luftbild-mobile.webp",

  soccerHero: "/images/soccer.webp",
  tennisHero: "/images/tennis.webp",
  battlekartHero: "/images/battlekart.webp",
  billiards: "/images/billard.webp",
  kids: "/images/geburtstag.webp",

  pizza: `${U}photo-1513104890138-7c749659a591${q(1600)}`,
  pizzaOven: `${U}photo-1590947132387-155cc02f3212${q(1200)}`,
  bar: `${U}photo-1470337458703-46ad1756a187${q(1200)}`,

  gallery: [
    "/images/soccer.png",
    "/images/tennis.png",
    "/images/battlekart.png",
    "/images/billard.png",
    "/images/geburtstag.png",
    `${U}photo-1513104890138-7c749659a591${q(1200)}`,
    `${U}photo-1508098682722-e99c43a406b2${q(1200)}`,
    `${U}photo-1517649763962-0c623066013b${q(1200)}`,
  ],
};
