const HeroSection = () => {
  return (
    <>
      <section className="relative lg:min-h-220 3xl:min-h-320 min-h-150  w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 ">
          <img
            src="/image/Rectangle 1.png"
            alt="Kitchen background"
            className="w-full h-full object-cover object-[68%] lg:object-contain lg:object-top 2xl:object-cover 2xl:h-auto "
          />
        </div>

        {/* Content */}
        <div className=" md:w-203.75 lg:h-90.75 w-76.25 h-130.75  xxl:w-[clamp(743px,calc((100vw-1420px)/2+743px),1083px)] 2xl:w-[clamp(883px,calc((100vw-1720px)/2+883px),1083px)] 3xl:w-[clamp(983px,calc((100vw-1920px)/2+983px),1483px)] lg:w-[clamp(540px,calc((100vw-1024px)/2+540px),983px)] mx-auto lg:mx-0 ">
          <div className="flex flex-col gap-4  2xl:gap-8 xl:w-[clamp(643px,calc((100vw-1280px)/2+643px),983px)]  xxl:w-[clamp(743px,calc((100vw-1420px)/2+743px),1083px)] 2xl:w-[clamp(883px,calc((100vw-1720px)/2+883px),1083px)] 3xl:w-[clamp(983px,calc((100vw-1920px)/2+983px),1483px)]   lg:w-[clamp(540px,calc((100vw-1024px)/2+540px),983px)]   md:w-125  w-71.25 h-68.75 relative  lg:top-[clamp(-140px,calc((100vw-1024px)/8-140px),-40px)]  xl:top-[clamp(-98px,calc((100vw-1280px)/8-98px),-40px)]  3xl:top-[clamp(-218px,calc((100vw-1920px)/8-218px),-20px)] top-10 mx-auto lg:mx-0  lg:left-[clamp(80px,calc((100vw-1024px)/20+80px),320px)]  xl:left-[clamp(100px,calc((100vw-1280px)/4+100px),420px)] xxl:left-[clamp(105px,calc((100vw-1420px)/10+105px),420px)] 2xl:left-[clamp(140px,calc((100vw-1720px)/10+140px),420px)]  3xl:left-[clamp(140px,calc((100vw-1920px)/10+140px),420px)]">
            <h1 className="xxl:text-[clamp(50px,calc((100vw-1420px)/30+50px),65px)] 2xl:text-[clamp(60px,calc((100vw-1720px)/30+60px),75px)] 3xl:text-[clamp(68px,calc((100vw-1920px)/30+68px),95px)]  lg:text-[clamp(37px,calc((100vw-1024px)/30+37px),52px)] xl:text-[clamp(37px,calc((100vw-1024px)/30+37px),48px)]  text-[34px] xl:w-155.75  2xl:w-210.75  3xl:w-[clamp(950px,calc((100vw-1920px)/2+950px),1083px)] lg:w-[clamp(480px,calc((100vw-1024px)/3+480px),883px)] xxl:w-[clamp(650px,calc((100vw-1420px)/3+650px),1083px)] md:w-125  w-60.25 font-normal leading-[100%] tracking-[0%] text-white  lg:text-left text-center font-family-inter mx-auto lg:mx-0">
              The only kitchen scale that auto-tracks calories
            </h1>
            <p className="text-[20px]  lg:text-[15px]  xl:text-[18px] 2xl:text-[24px] 3xl:text-[32px]  font-normal leading-[100%] tracking-[0%] text-white/80 lg:text-left text-center  font-family-helvetica">
              Lorem ipsum dolor sit amet consectetur. Eam vel pulvinar accere
              id. Scelerisque in et molestie amet bibendum feugiat.
            </p>
            <h4 className="text-[35px] 2xl:text-[45px] 3xl:text-[55px] font-normal leading-[100%] tracking-[0%] text-white lg:text-left text-center font-family-helvetica">
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
