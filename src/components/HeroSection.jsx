const HeroSection = () => {
  return (
    <>
      {/* Announcement Banner */}
      <div className="mt-16 md:mt-20 bg-[#828282] py-4 md:py-6 px-4">
        <p className="text-center  text-xs sm:text-sm md:text-base max-w-4xl mx-auto">
          Use AI to identify and record the food you weigh and log calories
          automatically. World's First Launch!
        </p>
      </div>

      <section className="relative min-h-[600px] sm:min-h-[700px] md:min-h-screen w-full flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10 z-10"></div>
          <img
            src="\public\image\Rectangle 1.png"
            alt="Kitchen background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 sm:py-12 md:py-12 lg:py-12">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight md:text-left text-center">
              The only kitchen scale that auto-tracks calories
            </h1>

            {/* Description */}
            <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-2 md:mb-4 leading-relaxed max-w-md lg:max-w-lg font-light md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur. Eam vel pulvinar accere
              id. Scelerisque in et molestie amet bibendum feugiat.
            </p>

            <h4 className="text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-light text-white mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight md:text-left text-center">
              Get 50% Discount
            </h4>

            {/* Rating */}
            <div className="flex flex-col sm:flex-row md:items-start sm:items-center gap-2 sm:gap-3 mb-4">
              <div className="flex text-white justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-xs sm:text-sm md:text-base font-light">
                5,120+ early bird pre-orders
              </span>
            </div>
            {/* CTA Button */}
            <div className="mb-5 sm:mb-6 md:mb-7 flex md:justify-start sm:justify-center">
              <button className="bg-[#4AD769] hover:bg-[#00B872] active:bg-[#00A066] text-white font-semibold uppercase tracking-wide px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-[25px] text-xs sm:text-sm md:text-base transition-colors duration-200 shadow-md hover:shadow-lg w-full sm:w-auto">
                PREORDER NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
