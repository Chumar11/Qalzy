
const Energysummary = () => {
  const nutrients = [
    { label: "Protein (5%)", value: "2g", color: "#FFA500" },
    { label: "Net Carbs (5%)", value: "2g", color: "#4CAF50" },
    { label: "Fat (90%)", value: "15g", color: "#FF6B6B" },
  ];
  return (
    <section className="relative w-full bg-[#F9F9F9] py-12 sm:py-16  lg:py-24">
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
            className="w-full  h-auto lg:h-full absolute z-0 md:top-12 sm:top-4 top-1 "
          />

          <div className="md:w-[65%] w-[60%] mx-auto relative">
            <div className="relative rounded-2xl ">
              <img
                src="/image/c851ff52233848ac5ab1adde6e349b7fad0acf64.png"
                alt="energy image "
                className="w-full xl:h-162 h-auto  3xl:h-200 z-0 rounded-[10px]"
              />
              {/* Energy Summary Card - Overlaid on Image */}
              <div
                className="absolute top-1/10  bg-white rounded-2xl  shadow-lg w-auto flex lg:px-6 py-2 lg:py-4 px-2 xxl:gap-6  gap-1 items-center z-10"
                style={{
                  left: "clamp(-545px, calc(-45px - (100vw - 320px) / 10), -45px)",
                }}
              >
                <div>
                  <h6 className=" text-[clamp(5px,calc((100vw-320px)/80+5px),40px)]  text-[#171923] mb-2 font-family-inter">
                    Energy Summary
                  </h6>

                  {/* Circular Chart */}
                  <div className="flex items-center justify-center ">
                    <div
                      className="relative"
                      style={{
                        width:
                          "clamp(32px, calc((100vw - 320px) / 10 + 32px), 228px)",
                        height:
                          "clamp(32px, calc((100vw - 320px) / 10 + 32px), 228px)",
                      }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#FFA500"
                          strokeWidth="12"
                          strokeDasharray="18 314"
                          transform="rotate(-90 60 60)"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#4CAF50"
                          strokeWidth="12"
                          strokeDasharray="18 314"
                          strokeDashoffset="-18"
                          transform="rotate(-90 60 60)"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#FF6B6B"
                          strokeWidth="12"
                          strokeDasharray="278 314"
                          strokeDashoffset="-36"
                          transform="rotate(-90 60 60)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className=" text-[clamp(5px,calc((100vw-320px)/80+5px),40px)] font-bold text-[#171923]">
                          160
                        </span>
                        <span className=" text-[clamp(5px,calc((100vw-320px)/80+5px),40px)] text-gray-500">
                          kcal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Legend */}
                <div className="mt-4 lg:space-y-2 ">
                  {nutrients.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-1 md:gap-2 ">
                        <div
                          className=" w-[clamp(3px,calc((100vw-320px)/180+3px),12px)] h-[clamp(3px,calc((100vw-320px)/180+3px),12px)] rounded-full "
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[clamp(5px,calc((100vw-320px)/80+5px),40px)] text-gray-700">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[clamp(5px,calc((100vw-320px)/80+5px),40px)] font-semibold text-[#171923] ml-1 md:ml-4 lg:ml-5 xxl:ml-8">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Energysummary;
