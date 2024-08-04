import "./BelowHeroSection.css";
import Container from "@/components/Container";

const BelowHeroSection = () => {
  return (
    <section className="below-hero-section-background">
      <Container className="flex justify-center items-center flex-col sm:flex-row">
        <p className="lora-regular dark-font-text text-lg w-80 text-center my-12">
          PERSONALISE YOUR <br />
          CHOCOLATE
        </p>
        <span className="divider dark-bg rounded-full"></span>
        <p className="lora-regular dark-font-text text-lg w-80 text-center my-12">
          FINEST BELGIAN <br /> CHOCOLATE
        </p>
        <span className="divider dark-bg rounded-full"></span>
        <p className="lora-regular dark-font-text text-lg w-80 text-center my-12">
          DELIVERY <br />
          AVAILABLE
        </p>
      </Container>
    </section>
  );
};

export default BelowHeroSection;
