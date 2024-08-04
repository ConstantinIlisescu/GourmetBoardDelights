import HomeHero from "./homeHero/HomeHero";
import BelowHeroSection from "./belowHeroSection/BelowHeroSection";
import DiscoverProducts from "./discoverProductsSection/DiscoverProducts";
import ArtisanChocolate from "./artisanChocolateSection/ArtisanChocolate";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <>
      <HomeHero />
      <BelowHeroSection />
      <DiscoverProducts />
      <ArtisanChocolate />
      <Reviews />
    </>
  );
};

export default Home;
