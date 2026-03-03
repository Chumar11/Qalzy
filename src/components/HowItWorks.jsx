const HowItWorks = () => {
  return (
    <section className="relative w-full bg-white  py-12 overflow-hidden">
      <div className="absolute inset-0 z-0 py-4">
        <div className=""></div>
        <img
          src="/image/Vector2.png"
          alt="Background"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-20 max-w-12xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative max-w-12xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/image/firy.png"
                alt=""
                className="w-full h-full  object-contain rounded-[30px]"
              />
            </div>
          </div>
          <div className="absolute md:top-1/6 md:left-1/25 lg:left-1/800 lg:top-1/6 top-1/6 left-1/50 xl:top1/6 xl:left-1/15 transform -translate-y-1/2 -translate-x-8 md:-translate-x-16">
            <img
              src="/image/Untitled design 1.png"
              alt="Tomato"
              className="w-25 object-contain relative z-10 sm:w-40 md:w-48 lg:w-60 xl:w-80"
            />
          </div>

          <div className="absolute xl:top-1/3 xl:right-1/16 top-1/3 right-1/30 lg:top-1/3 lg:right-1/75  transform translate-x-8 md:translate-x-16">
            <div className="relative">
              <img
                src="/image/p2.png"
                alt="apple"
                className="w-25 object-contain relative z-10 sm:w-35 md:w-48 lg:w-50 xl:w-70 "
              />
              <img
                src="/image/image 57.png"
                alt="apple"
                className="w-13 object-contain absolute z-10 sm:w-15 md:w-27 lg:w-30 xl:w-40 top-1/4 -right-1/5 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
