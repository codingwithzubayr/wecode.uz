import { socials } from '../constants';
import styles from '../styles';


const Footer = () => (
  <footer
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            wecode.en
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 - 2025 wecode.en. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a className="font-bold text-[24px] mr-[7px] text-white" href="tel:+998995261636">+998 99 526 16 36</a>
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
      </div>
    </div>
  </footer>
);

export default Footer;
