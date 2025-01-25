import { Link } from "react-router-dom";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Ready to find your perfect team?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Struggling to find the right teammates for your hackathon or group project? Join now and connect with others to build something amazing together!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          
          
    <Link to="/login" className={`${styles.button} sm:text-lg text-base hover:text-white`}>
           <Button />
           </Link> 

    </div>
  </section>
);

export default CTA;
