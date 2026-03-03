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
          src="public/image/816338da2e584fc3cf45c85d366f5dfa09bbc9c6.png"
          alt="Background"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 md:px-8 text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          Join the waiting list
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">
          Enter to win a Nutriscale and get 25% off
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/80 mb-6 sm:mb-8">
          Enter for a chance to win a Nutriscale and get 25% off your first
          order
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col gap-3">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 
            rounded-lg 
            text-sm sm:text-base 
            text-gray-900 
            bg-white
            placeholder-gray-500
            border-2 border-transparent
            focus:outline-none focus:border-[#4AD769] focus:ring-0
            transition-all"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full 
                        bg-[#4AD769] hover:bg-[#3ec75a] 
                        text-white font-bold uppercase
                        px-6 py-3 sm:py-3.5 
                        rounded-lg 
                        text-sm sm:text-base
                        transition-all duration-300 
                        hover:shadow-lg
                        active:scale-95"
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
