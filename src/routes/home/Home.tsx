import HomeHero from "./homeHero/HomeHero";
import BelowHeroSection from "./belowHeroSection/BelowHeroSection";
import DiscoverProducts from "./discoverProductsSection/DiscoverProducts";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HomeHero />
      <BelowHeroSection />
      <DiscoverProducts />
    </>
  );
};

export default Home;
