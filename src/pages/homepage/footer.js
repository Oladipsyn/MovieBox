import React from "react";
import FB from "../../assets/icons/fa-brands_facebook-square.svg";
import X from "../../assets/icons/fa-brands_twitter.svg";
import IG from "../../assets/icons/fa-brands_instagram.svg";
import YT from "../../assets/icons/fa-brands_youtube.svg";

const Footer = () => {
  return (
    <div className="flex flex-col mt-[141px] mb-[66px] w-full gap-[35px] justify-center items-center justify-items-center">
      <div className="flex gap-[23px] sm:gap-[42px] md:gap-[47px]">
        <img src={FB} />
        <img src={IG} />
        <img src={X} />
        <img src={YT} />
      </div>

      <div className="text-[#111827] font-bold text-[12px] sm:text-[16px] gap-[18px] sm:gap-[35px] md:gap-[48px] flex">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>

      <div className="flex w-full text-[12px] sm:text-[14px] justify-center">
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
};

export default Footer;
