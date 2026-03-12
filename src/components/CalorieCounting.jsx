import { useState } from "react";

const CalorieCounting = ({ img, title, description, video, addbar,width }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full bg-[#F9F9F9] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:w-135 2xl:w-145 3xl:w-205 mx-auto">
          <h6 className="text-[24px] 2xl:text-[30px] 3xl:text-[36px] font-bold text-[#171923] mb-4 sm:mb-5 md:mb-6">
            {title}
          </h6>
          <p className="text-[16px] 2xl:text-[21px] 3xl:text-[26px] text-gray-600 xl:max-w-4xl sm:max-w-125  mx-auto leading-relaxed px-4">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className={`${width} mx-auto relative `}>
          {addbar && (
            <div
              className="absolute top-3 -left-3.5 sm:top-4 sm:-left-5 md:top-6 md:-left-5 lg:top-8 lg:-left-8.75
                            bg-white rounded-lg sm:rounded-[10px] shadow-lg
                            px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3
                            max-w-50 sm:max-w-55 md:max-w-62.5
                            z-10 3xl:max-w-1115 3xl:px-6 3xl:py-4 3xl:top-10 3xl:-left-20"
            >
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base 3xl:text-[38px] font-medium text-gray-700 whitespace-nowrap">
                Track with <span className="font-bold">one button press</span>
              </span>
            </div>
          )}
          <div className="relative rounded-2xl overflow-hidden">
            <img src={img} alt={title} className="w-full xl:h-162 h-auto  3xl:h-200" />

            {/* Play Button */}
            {video && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
                aria-label="Play video"
              >
                <img
                  src="/image/Polygon 1.png"
                  alt="Play button"
                  className="w-full h-full"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalorieCounting;
