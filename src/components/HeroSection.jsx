const HeroSection = () => {
  return (
    <>
      {/* Announcement Banner */}
      <div className="mt-16 md:mt-20 bg-[#828282] py-3.75 lg:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-45 mx-auto">
        <p
          className="lg:text-[20px] text-[16px] leading-[100%] tracking-[0%] font-normal "
          style={{ fontFamily: "Aeonik TRIAL" }}
        >
          Use AI to identify and record the food you weigh and log calories
          automatically. World's First Launch!
        </p>
      </div>

      <section className="relative lg:min-h-220 min-h-150  w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/image/Rectangle 1.png"
            alt="Kitchen background"
            className="w-full h-full object-cover object-[70%]  lg:object-center"
          />
        </div>

        {/* Content */}
        <div className=" md:w-203.75 lg:h-90.75 w-76.25 h-130.75  mx-auto lg:mx-0 ">
          <div className="flex flex-col gap-4 lg:w-203.75 md:w-125  w-71.25 h-68.75 relative lg:-top-10 top-10 mx-auto lg:mx-0 lg:left-1/6">
            <h1
              className="lg:text-[68px] text-[41px] font-normal leading-[100%] tracking-[0%] text-white  lg:text-left text-center"
              style={{ fontFamily: "Inter" }}
            >
              The only kitchen scale that auto-tracks calories
            </h1>
            <p
              className="text-[20px] font-normal leading-[100%] tracking-[0%] text-white/80 lg:text-left text-center "
              style={{ fontFamily: "Helvetica" }}
            >
              Lorem ipsum dolor sit amet consectetur. Eam vel pulvinar accere
              id. Scelerisque in et molestie amet bibendum feugiat.
            </p>
            <h4
              className="text-[35px] font-normal leading-[100%] tracking-[0%] text-white lg:text-left text-center"
              style={{ fontFamily: "Helvetica" }}
            >
              Get 50% Discount
            </h4>
            <div className="flex lg:flex-row flex-col items-center  gap-2">
              <div className="flex text-white justify-center md:justify-start ">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span
                className="text-white text-[20px] font-normal leading-[100%] tracking-[0%] text-center align-bottom"
                style={{ fontFamily: "Helvetica" }}
              >
                5,120+ early bird pre-orders
              </span>
            </div>

            <button
              className="bg-[#4AD769] hover:bg-[#00B872] active:bg-[#00A066] text-white font-semibold uppercase tracking-wide w-65.75 h-14 rounded-3xl px-12.5 py-4 transition-colors duration-200 gap-2.5 mx-auto lg:mx-0 "
              style={{ boxShadow: "0px 4px 6px 0px #48C263" }}
            >
              PREORDER NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
