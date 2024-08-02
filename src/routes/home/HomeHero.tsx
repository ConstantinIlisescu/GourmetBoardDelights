import Button from "@/components/button/Button";
const HomeHero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url(../../../public/images/home-hero.jpg)" }}
    >
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl great-vibes-regular mb-4">
          Sweets that make you <br /> Feel Happy
        </h1>
        <p className="text-lg md:text-xl mb-8 montserrat-regular">
          With Our Hand Crafted Chocolate
        </p>
        <Button href="/products">PRODUCTS</Button>
      </div>
    </section>
  );
};

export default HomeHero;
