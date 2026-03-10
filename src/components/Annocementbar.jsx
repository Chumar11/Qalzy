import React from "react";

const Annocementbar = () => {
  return (
    <div className="mt-16 md:mt-20 2xl:mt-25 3xl:mt-28 bg-[#828282] py-3.75 xl:py-8 2xl:py-10 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-0   ">
      {/*  text-[15px] lg:text-[14.5px] xl:text-[20px] 2xl:text-[28px] 3xl:text-[39px]  */}
      <p
        className="
        text-[15px] 
      xxl:text-[clamp(20px,calc((100vw-1420px)/50+20px),28px)]
      2xl:text-[clamp(25px,calc((100vw-1720px)/50+25px),30px)]
      3xl:text-[clamp(24px,calc((100vw-1720px)/50+24px),39px)]
        leading-[100%] tracking-[0%] font-normal font-family-aeonik xl:ml-28 lg:ml-26 "
      >
        Use AI to identify and record the food you weigh and log calories
        automatically. World's First Launch!
      </p>
    </div>
  );
};

export default Annocementbar;
