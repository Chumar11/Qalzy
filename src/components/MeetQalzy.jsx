const MeetQalzy = () => {
  return (
    <section className="relative w-full bg-white  overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className=""></div>
        <img
          src="/image/Vector 1.png"
          alt="Background"
          className="w-full md:h-87.5 h-37.5 lg:h-auto"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Scale Device Image */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative">
            <img
              src="/image/1.553.png"
              alt="QALZY Scale Device"
              className="w-64 sm:w-80 md:w-166 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            MEET QALZY
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-2">
            One-Tap Calorie Counting
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500">
            Fast. Precise. Easy.
          </p>
        </div>

        <div className="relative max-w-8xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/image/fresh-shrimp-salad-with-tomatoes-lettuce-arugula-2025-01-29-08-48-11-utc 2.png"
                alt="Salad Bowl"
                className="w-84 sm:w-80 md:w-120 lg:w-156 xl:w-200  h-auto object-contain"
              />

              <div className="absolute md:-bottom-1/12 lg:left-1/7 md:left-1/6  left-1/10 -bottom-1/5 sm:-bottom-1/8 transform -translate-y-1/2 -translate-x-8 md:-translate-x-16">
                <img
                  src="/image/Product (1).png"
                  alt="Tomato"
                  className="w-12 sm:w-14 md:w-14 lg:w-18 xl:w-20 h-auto object-contain relative z-10 "
                />
              </div>

              {/* Avocado - Right */}
              <div className="absolute top-0 lg:right-1/7 md:right-1/5  right-1/8 md:top-1/8 transform translate-x-8 md:translate-x-16">
                <img
                  src="/image/Product.png"
                  alt="Avocado"
                  className="w-12 sm:w-14 md:w-14 lg:w-18 xl:w-20 h-auto object-contain relative z-10"
                />
              </div>

              {/* Lemon - Bottom Right */}
              <div className="absolute md:bottom-1/6 md:left-1/20  lg:bottom-1/8 lg:left-1/20 bottom-1/4 left-1/22 xl:left-1/17 xl:bottom-1/10 transform translate-x-1/2 translate-y-8">
                <img
                  src="/image/fresh-ripe-tomato-close-up-top-view 1.png"
                  alt="Lemon"
                  className="w-14 sm:w-18 md:w-23 lg:w-30 xl:w-37 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetQalzy;
