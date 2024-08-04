import Button from "@/components/button/Button";
import Container from "@/components/Container";
import "./DiscoverProducts.css";

const DiscoverProducts = () => {
  return (
    <section>
      <Container className="text-center pb-20">
        <h2 className="lora-regular dark-font-text text-3xl my-20">
          Discover the products
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="max-w-64">
            <img
              className="rounded-xl"
              src={"images/strawberryTreat.png"}
              alt="strawberry covered with chocolate"
            />
            <p className="poppins-medium dark-font-text text-md tracking-wider my-5 w-28 mx-auto">
              Strawberry Treat
            </p>
          </div>
          <div className="max-w-64 ">
            <img
              className="rounded-xl"
              src={"images/cheesecake.png"}
              alt="strawberry covered with chocolate"
            />
            <p className="poppins-medium dark-font-text text-md tracking-wider my-5 w-28 mx-auto">
              Cheesecake
            </p>
          </div>
          <div className="max-w-64">
            <img
              className="rounded-xl"
              src={"images/choco-ice-cream.png"}
              alt="strawberry covered with chocolate"
            />
            <p className="poppins-medium dark-font-text text-md tracking-wider my-5 w-28 mx-auto">
              Choco ice cream
            </p>
          </div>
          <div className="max-w-64">
            <img
              className="rounded-xl"
              src={"images/strawberry-bouquet.png"}
              alt="strawberry covered with chocolate"
            />
            <p className="poppins-medium dark-font-text text-md tracking-wider my-5 w-28 mx-auto">
              Strawberry Bouquet
            </p>
          </div>
        </div>
        <div className="mt-14">
          <Button>VIEW ALL PRODUCTS</Button>
        </div>
      </Container>
    </section>
  );
};

export default DiscoverProducts;
