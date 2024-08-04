import "./ArtisanChocolate.css";

const ArtisanChocolate = () => {
  return (
    <section className="relative h-[80vh] bg-cover bg-center artisan-chocolate-image">
      <div className="absolute inset-0 artisan-chocolate-overlay"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4  text-white">
        <h1 className="text-6xl md:text-8xl great-vibes-regular mb-14">
          100% artisan chocolate
        </h1>
        <div className="flex flex-wrap justify-center gap-16">
          <p className="text-xl md:text-3xl mb-8  great-vibes-regular">
            Belgian <br /> quality
          </p>
          <p className="text-xl md:text-3xl mb-8  great-vibes-regular">
            High cocoa <br />
            content
          </p>
          <p className="text-xl md:text-3xl mb-8  great-vibes-regular">
            Long shelf <br />
            life
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtisanChocolate;
