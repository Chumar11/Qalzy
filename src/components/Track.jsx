export const Track = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:w-135 2xl:w-145 3xl:w-205 mx-auto">
          <h6 className="text-[24px] 2xl:text-[30px] 3xl:text-[36px] font-bold text-[#171923] mb-4 sm:mb-5 md:mb-6">
            Track Anywhere With The Qalzy App
          </h6>
          <p className="text-[16px] 2xl:text-[21px] 3xl:text-[26px] text-gray-600 xl:max-w-4xl sm:max-w-125  mx-auto leading-relaxed px-4">
            Can’t bring your scale everywhere? No worries. The Qalzy app lets
            you scan barcodes, take photos of meals, or use voice commands to
            track calories wherever you are. Automatically syncs to your
            dashboard for a complete overview of your daily intake.
          </p>
        </div>

        <div className="lg:w-[75%] w-[98%]  mx-auto  ">
          <div className=" grid grid-cols-2 gap-2">
            <div className="lg:h-[clamp(520px,calc((100vw-1024px)/4+520px),1520px)]  xxl:h-[clamp(625px,calc((100vw-1420px)/2+625px),1520px)] h-[clamp(320px,calc((100vw-320px)/2+320px),580px)]">
              <img
                src="/image/Frame 2147223145.png"
                alt="pizza cutting"
                className="h-full w-full lg:object-cover rounded-[30px] "
              />
            </div>

            <div className="relative lg:h-[clamp(520px,calc((100vw-1024px)/4+520px),1520px)] xxl:h-[clamp(625px,calc((100vw-1420px)/2+625px),1520px)]  h-[clamp(320px,calc((100vw-320px)/2+320px),580px)]">
              <img
                src="/image/Core_2_24_2025_14_38_18_contentcore.xyz 1.png"
                alt="iphonepic"
                className="z-2 absolute h-full w-[70%] lg:w-[50%] left-1/2 transform -translate-x-1/2 "
              />
              <div className="bg-[#DEF0DC] w-full h-[75%] rounded-[30px] absolute bottom-0 z-1"></div>
            </div>
          </div>

          <div className=" flex gap-1 lg:mt-16 mt-8   lg:h-[clamp(120px,calc((100vw-1024px)/8+120px),500px)] ">
            <img
              src="/image/Frame 2147223150.png"
              alt="scan photo"
              className="w-[clamp(100px,calc((90vw-320px)/3+80px),580px)] lg:w-[clamp(220px,calc((100vw-1024px)/4+220px),580px)]"
            />
            <img
              src="/image/Frame 2147223151.png"
              alt="take photo"
              className="lg:rounded-[30px] rounded-[12px] md shadow-[4px_4px_52px_0px_rgba(0,0,0,0.2)] lg:w-[clamp(220px,calc((100vw-1024px)/4+220px),580px)] w-[clamp(90px,calc((100vw-320px)/3+80px),580px)] lg:h-[clamp(140px,calc((100vw-1024px)/8+140px),500px)] lg:-mt-3 -mt-1"
            />
            <img
              src="/image/Frame 2147223152.png"
              alt="voice"
              className="lg:w-[clamp(220px,calc((100vw-1024px)/4+220px),580px)] w-[clamp(90px,calc((100vw-320px)/3+80px),580px)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
