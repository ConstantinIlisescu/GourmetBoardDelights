import HomeHero from "./homeHero/HomeHero";
import BelowHeroSection from "./belowHeroSection/BelowHeroSection";
import DiscoverProducts from "./discoverProductsSection/DiscoverProducts";
import ArtisanChocolate from "./artisanChocolateSection/ArtisanChocolate";

const Home = () => {
  return (
    <>
      <HomeHero />
      <BelowHeroSection />
      <DiscoverProducts />
      <ArtisanChocolate />
    </>
  );
};

export default Home;
