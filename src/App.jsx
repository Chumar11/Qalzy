import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MeetQalzy from "./components/MeetQalzy";
import CalorieCounting from "./components/CalorieCounting";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Annocementbar from "./components/Annocementbar";
import ScanAlert from "./components/ScanAlert";
import { Track } from "./components/Track";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Annocementbar />
      <HeroSection />
      <MeetQalzy />
      <CalorieCounting
        img="/image/image 50.png"
        title="Instant AI-powered Calorie Counting"
        description="Tired of manually tracking your calories? Qalzy's AI camera instantly identifies raw foods, packaged items, and even multiple ingredients on a plate with over 90% accuracy, and automatically logs the detected calories and macros, all without any effort on your part."
        video={true}
        addbar={false}
        width={"md:w-[85%] w-[90%]"}
      />
      <HowItWorks />
      <CalorieCounting
        img="/image/Frame 2147223175.png"
        title="Effortless Meal Logging with Qalzy's AI Camera"
        description="Say goodbye to tedious meal logging! Qalzy's AI camera automatically detects and logs your meals with over 90% accuracy, making it easier than ever to track your nutrition and stay on top of your health goals."
        video={false}
        addbar={true}
        width={"md:w-[55%] w-[85%]"}
      />
      <CalorieCounting
        img="/image/Frame 48095857.png"
        title="Effortless Meal Logging with Qalzy's AI Camera"
        description="Say goodbye to tedious meal logging! Qalzy's AI camera automatically detects and logs your meals with over 90% accuracy, making it easier than ever to track your nutrition and stay on top of your health goals."
        video={false}
        addbar={false}
        width={"md:w-[85%] w-[90%]"}
      />
      <Footer />
      <ScanAlert />
      <Footer />
      <Track />
    </div>
  );
}

export default App;
