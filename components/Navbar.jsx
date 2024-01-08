import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <a className="font-bold text-[24px] mr-[7px] text-white navbarContact" href="tel:+998995261636">+998 99 526 16 36</a>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        WECODE.EN
      </h2>
      <div className="flex gap-4">
        {socials.map((social) => (
          <a href={social.link}>
            <img
            key={social.name}
            src={social.url}
            alt={social.name}
            className="w-[40px] h-[40px] object-contain cursor-pointer contactMedia"
          />
          </a>          
        ))}
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
