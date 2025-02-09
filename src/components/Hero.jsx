import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Left Section */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Notification Section */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-blue-500 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Find Teammates</span> For{" "}
            <span className="text-white">Hackathons & Projects</span>
          </p>
        </div>

        {/* Main Heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Build Your <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Dream Team</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* Subheading */}
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Every Collaboration.
        </h1>

        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Whether you're a beginner or intermediate, our platform helps you find
          teammates with the perfect mix of skills for hackathons, group projects,
          or product building. Work smarter, learn faster, and succeed together.
        </p>
      </div>

      {/* Right Section */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="collaboration" className="w-[100%] h-[100%] relative z-[5]" />

        {/* Gradient Backgrounds */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Call to Action for Smaller Screens */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

