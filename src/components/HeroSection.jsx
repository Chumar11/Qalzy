const HeroSection = () => {
  return (
    <>
      {/* Announcement Banner */}
      <div className="mt-16 md:mt-20 2xl:mt-25 3xl:mt-28 bg-[#828282] py-3.75 lg:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-45   ">
        <p className=" text-[15px] lg:text-[14px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[36px] leading-[100%] tracking-[0%] font-normal font-family-aeonik xl:ml-28 lg:ml-28 ">
          Use AI to identify and record the food you weigh and log calories
          automatically. World's First Launch!
        </p>
      </div>

      <section className="relative lg:min-h-220 min-h-150  w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/image/Rectangle 1.png"
            alt="Kitchen background"
            // className="w-full h-full  object-[70%] lg:object-center "
            className="w-full h-full object-cover object-[68%] md:object-fill"
          />
        </div>

        {/* Content */}
        <div className=" md:w-203.75 3xl:w-280.75 lg:h-90.75 w-76.25 h-130.75 2xl:w-218.75 lg:w-150  mx-auto lg:mx-0 ">
          <div className="flex flex-col gap-4  2xl:gap-8 xl:w-190.75  2xl:w-210.75  3xl:w-280.75 lg:w-143 md:w-125  w-71.25 h-68.75 relative lg:-top-10 top-10 mx-auto lg:mx-0 lg:left-1/10 xl:left-1/5 2xl:left-1/6 3xl:left-1/6">
            <h1 className="xl:text-[54px] 2xl:text-[70px] 3xl:text-[92px] lg:text-[38px] text-[34px] xl:w-185.75  2xl:w-210.75  3xl:w-280.75 lg:w-120 md:w-125  w-60.25 font-normal leading-[100%] tracking-[0%] text-white  lg:text-left text-center font-family-inter mx-auto lg:mx-0">
              The only kitchen scale that auto-tracks calories
            </h1>
            <p className="text-[20px] lg:text-[16px] xl:text-[20px] 2xl:text-[28px] 3xl:text-[28px] 2xl:w-5xl font-normal leading-[100%] tracking-[0%] text-white/80 lg:text-left text-center  font-family-helvetica">
              Lorem ipsum dolor sit amet consectetur. Eam vel pulvinar accere
              id. Scelerisque in et molestie amet bibendum feugiat.
            </p>
            <h4 className="text-[35px] 2xl:text-[40px] 3xl:text-[45px] font-normal leading-[100%] tracking-[0%] text-white lg:text-left text-center font-family-helvetica">
              Get 50% Discount
            </h4>
            <div className="flex lg:flex-row flex-col items-center  gap-2">
              <div className="flex text-white justify-center md:justify-start ">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 2xl:w-8 2xl:h-8  3xl:w-10 3xl:h-10 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-normal leading-[100%] tracking-[0%] text-center align-bottom font-family-helvetica">
                5,120+ early bird pre-orders
              </span>
            </div>

            <button
              className=" flex justify-center item-center bg-[#4AD769] hover:bg-[#00B872] active:bg-[#00A066] text-white font-semibold uppercase tracking-wide w-65.75  2xl:w-85.75 3xl:w-95.75  rounded-3xl px-12.5 py-4  2xl:px-8 2xl:py-6 transition-colors duration-200 2xl:text-2xl  mx-auto lg:mx-0 "
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
