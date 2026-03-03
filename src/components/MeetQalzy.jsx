const MeetQalzy = () => {
  return (
    <section className="relative w-full bg-white  overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className=""></div>
        <img
          src="public/image/Vector 1.png"
          alt="Background"
          className="w-full md:h-[350px] h-[150px] lg:h-auto"
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

        {/* Food Items Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Salad Bowl */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="public/image/fresh-shrimp-salad-with-tomatoes-lettuce-arugula-2025-01-29-08-48-11-utc 2.png"
                alt="Salad Bowl"
                className="w-64 sm:w-80 md:w-110 lg:w-96 lg:w-[50rem] h-auto object-contain"
              />
            </div>
          </div>

          {/* Food Items with Labels - Positioned Around Central Bowl */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-8 md:-translate-x-16">
            {/* Tomato - Left */}
            <div className="relative">
              <div className="absolute inset-0  animate-pulse"></div>
              <img
                src="public/image/Product (1).png"
                alt="Tomato"
                className="w-20 sm:w-24 md:w-32 h-auto object-contain relative z-10 top-[90px] left-[70px]"
              />
            </div>
          </div>

          {/* Avocado - Right */}
          <div className="absolute top-0 right-0 transform translate-x-8 md:translate-x-16">
            <div className="relative">
              <div className="absolute inset-0  animate-pulse"></div>
              <img
                src="public/image/Product.png"
                alt="Avocado"
                className="w-20 sm:w-24 md:w-32 h-auto object-contain relative z-10 right-[70px] "
              />
            </div>
          </div>

          {/* Lemon - Bottom Right */}
          <div className="absolute bottom-[30px] left-[95px] transform translate-x-1/2 translate-y-8">
            <img
              src="public/image/fresh-ripe-tomato-close-up-top-view 1.png"
              alt="Lemon"
              className="w-26 sm:w-30 md:w-38 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetQalzy;
