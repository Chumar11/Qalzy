const HowItWorks = () => {
  return (
    <section className="relative w-full bg-white  py-12 2xl:py-20  xxl:py-16 3xl:py-26 overflow-hidden">
      <div className="absolute inset-0 z-0 py-4">
        <div className=""></div>
        <img
          src="/image/Vector2.png"
          alt="Background"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-20  px-6 sm:px-8 lg:px-12">
        <div className="relative mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/image/firy.png"
                alt=""
                className="w-full h-full  xxl:w-[clamp(1250px,calc((100vw-1420px)/1+1250px),2520px)]  object-contain rounded-[30px]"
              />
            </div> 
          </div>
          <div className="absolute md:top-1/6 md:left-1/25 xxl:left-[clamp(35px,calc((100vw-1420px)/2-35px),-820px)] 3xl:left-[clamp(35px,calc((100vw-1420px)/0-35px),-820px)] lg:left-[clamp(10px,calc((100vw-1024px)/80+10px),520px)] lg:top-[clamp(55px,calc((100vw-1024px)/30+55px),520px)]  top-1/6 left-1/50 sm:top-1/6 sm:left-1/200  transform -translate-y-1/2 -translate-x-8 md:-translate-x-16">
            <img
              src="/image/Untitled design 1.png"
              alt="Tomato"
              className="w-25 object-contain relative z-10 sm:w-40 md:w-48 lg:w-[clamp(240px,calc((100vw-1024px)/5+240px),1140px)]  "
            />
          </div>

          <div className="absolute xl:top-1/3 xl:right-1/30 top-1/3 right-1/30 sm:top-1/3 sm:right-1/75 3xl:right-1/75 lg:top-1/3 lg:right-1/75  md:right-1/35  transform translate-x-8 md:translate-x-16">
            <div className="relative">
              <img
                src="/image/p2.png"
                alt="apple"
                className="w-25 object-contain relative z-10 sm:w-35 md:w-48 lg:w-50 xl:w-70 3xl:w-120 "
              />
              <img
                src="/image/image 57.png"
                alt="apple"
                className="w-13 object-contain absolute z-10 sm:w-15 md:w-28 lg:w-30 xl:w-40 3xl:w-70 top-1/4 -right-1/5 3xl:-right-1/4 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
