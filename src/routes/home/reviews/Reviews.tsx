import "./Reviews.css";

const Reviews = () => {
  return (
    <section className="relative h-[60vh] bg-cover bg-center reviews-image">
      <div className="absolute inset-0 reviews-overlay"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 dark-font-text">
        <h2 className="text-3xl md:text-4xl lora-regular mb-14 lg:w-3/4 xl:w-1/2">
          "Chocolate, the sweetest escape from reality."
        </h2>
        <span className="divider dark-bg rounded-full"></span>
        <p className="text-xl md:text-2xl poppins-light mt-14">Linda Grayson</p>
      </div>
    </section>
  );
};

export default Reviews;
