import React from "react";

const Energysummary = () => {
  return (
    <section className="relative w-full bg-[#F9F9F9] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:w-135 2xl:w-145 3xl:w-205 mx-auto">
          <h6 className="text-[24px] 2xl:text-[30px] 3xl:text-[36px] font-bold text-[#171923] mb-4 sm:mb-5 md:mb-6">
            Accurate Even in Dim Lighting
          </h6>
          <p className="text-[16px] 2xl:text-[21px] 3xl:text-[26px] text-gray-600 xl:max-w-4xl sm:max-w-125  mx-auto leading-relaxed px-4">
            Lighting conditions can affect food recognition accuracy. That’s why
            Qalzy is equipped with a kitchen-safe LED flash that ensures clear,
            high-quality images - even in dim lighting. Perfect for when you’re
            prepping a late-night snack.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full">
       <img
          src="/image/energy.png"
          alt="Background"
          className="w-full md:h-87.5 h-37.5 lg:h-auto absolute z-0 -top-5   "
        />
        
        <div className="md:w-[65%] w-[85%] mx-auto relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/image/c851ff52233848ac5ab1adde6e349b7fad0acf64.png"
              alt="energy image "
              className="w-full xl:h-162 h-auto  3xl:h-200"
            />
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Energysummary;
