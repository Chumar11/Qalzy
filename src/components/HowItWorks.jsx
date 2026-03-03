const HowItWorks = () => {
  return (
    <section className="relative w-full bg-white  py-12 overflow-hidden">
      <div className="absolute inset-0 z-0 py-4">
        <div className=""></div>
        <img
          src="public/image/Vector2.png"
          alt="Background"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-20 max-w-12xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative max-w-12xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="public/image/Firefly 20250219175002 1.png"
                alt=""
                className="w-full h-full object-contain rounded-[40px]"
              />
            </div>
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-8 md:-translate-x-16">
            <div className="relative">
              <div className="absolute inset-0  animate-pulse"></div>
              <img
                src="public/image/Untitled design 1.png"
                alt="Tomato"
                className=" relative z-10 bottom-[140px] left-[70px]"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 transform translate-x-8 md:translate-x-16">
            <div className="relative">
              <div className="absolute inset-0  animate-pulse"></div>
              <img
                src="public/image/p2.png"
                alt="apple"
                className=" relative z-10 top-[140px] right-[70px] "
              />
              <img
                src="public/image/image 57.png"
                alt="apple"
                className=" relative z-16  left-12 bottom-7"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
