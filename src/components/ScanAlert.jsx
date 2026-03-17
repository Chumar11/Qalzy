const ScanAlert = () => {
  return (
    <section className="relative w-full ">
      <div className="bg-[#F9F9F9] py-10 ">
        <div className="text-center  mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:w-135 2xl:w-145 3xl:w-205 mx-auto">
          <h6 className="text-[24px] 2xl:text-[30px] 3xl:text-[36px] font-bold text-[#171923] mb-4 sm:mb-5 md:mb-6">
            Scan Every Type of Meal
          </h6>
          <p className="text-[16px] 2xl:text-[21px] 3xl:text-[26px] text-gray-600 xl:max-w-4xl sm:max-w-125  mx-auto leading-relaxed px-4">
            From homemade meals to packaged snacks, Qalzy recognizes multiple
            ingredients on a plate, scans nutrition labels, and even adjusts for
            portion sizes, so you log exactly what you eat.
          </p>
        </div>
      </div>
      <div className="relative bg-white ">
        <div className="absolute inset-0 z-0 lg:-top-8 xl:-top-10 ">
          <img
            src="/image/vectorleft.png"
            alt="Background"
            className="w-[70%] h-auto "
          />
        </div>
        <div className=" md:w-[40%] w-[70%]  mx-auto relative ">
          <div className="absolute  bg-white rounded-lg sm:rounded-[10px] shadow-lg z-10 py-2.5 px-5 xl:h-20 md:w-auto w-full lg:h-13 xl:-bottom-10  -bottom-4 left-1/2 transform -translate-x-1/2 ">
            <span className="text-[16px] lg:text-[20px] xl:text-[40px] 3xl:text-[38px] font-medium text-gray-700 whitespace-nowrap">
              Scan portions
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/image/5fc50abbfb16bf27186cb22057cefa1ff4ce01e4.gif"
              alt="pizza"
              className="w-full xl:h-162 h-auto  3xl:h-200"
            />
          </div>
        </div>
      </div>
      <div className="relative mt-20 bg-white mb-20 ">
        <div className="absolute inset-0 z-0 xl:left-120 3xl:left-195 md:left-60 ">
          <img
            src="/image/vectorright.png"
            alt="Background"
            className="w-full h-auto  "
          />
        </div>
        <div className=" md:w-[40%] w-[70%]  mx-auto relative ">
          <div className="absolute  bg-white rounded-lg sm:rounded-[10px] shadow-lg z-10 py-2.5 px-5 xl:h-20 md:w-auto w-full lg:h-13 xl:-bottom-10  -bottom-4 left-1/2 transform -translate-x-1/2 ">
            <span className="text-[16px] lg:text-[20px] xl:text-[40px] 3xl:text-[38px] font-medium text-gray-700 whitespace-nowrap">
              Track multiple ingredients
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/image/4c5bced9b6723a9eee166092ff2657c48619540a.gif"
              alt="pizza"
              className="w-full xl:h-162 h-auto  3xl:h-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanAlert;
