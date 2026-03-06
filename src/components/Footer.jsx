import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image/816338da2e584fc3cf45c85d366f5dfa09bbc9c6.png"
          alt="Background"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 text-left xl:left-1/5  lg:left-1/8">
        {/* Heading */}
        <h2
          className="text-[48px] 3xl:text-[90px]  sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] 2xl:text-[70px] 
    font-normal leading-[100%] tracking-[0%] text-white lg:text-left text-center  mb-3 sm:mb-4 font-family-inter"
        >
          Join the waiting list
        </h2>

        {/* Subheading */}
        <p className=" font-family-inter text-[24px] 2xl:text-[28px] 3xl:text-[34px] font-bold leading-[100%] tracking-[0%] text-white text-center lg:text-left mb-2">
          Enter to win a Nutriscale and get 25% off
        </p>

        {/* Description */}
        <p className="text-[16px] 3xl:text-[24px] font-normal leading-[100%] tracking-[0.04em] text-white/80 lg:text-left text-center   font-family-helvetica">
          Enter for a chance to win a Nutriscale and get 25% off your first
          order
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex flex-col gap-3 items-center lg:items-start ">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full sm:w-75 md:w-[320px] lg:w-85 xl:w-90 2xl:w-95 3xl:w-125
    h-12.5 sm:h-13 md:h-13.5 lg:h-14
    rounded-3xl
    text-sm sm:text-base 
    text-gray-900 
    bg-white
    placeholder-gray-500
    border-2 border-[#A9C8A2]
    px-5 py-4
    focus:outline-none focus:border-[#4AD769] focus:ring-0
    transition-all"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-72.5 md:w-75 lg:w-[320px] xl:w-85 3xl:w-115
    h-14 sm:h-14.5 md:h-15
    bg-[#4AD769] hover:bg-[#3ec75a] active:bg-[#00A066]
    text-white font-bold uppercase
    px-12.5 py-4
    rounded-3xl
    text-sm sm:text-base md:text-lg
    transition-all duration-300 
    hover:shadow-lg
    active:scale-95"
              style={{ boxShadow: "0px 4px 6px 0px #48C263" }}
            >
              JOIN WAITING LIST
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Footer;
