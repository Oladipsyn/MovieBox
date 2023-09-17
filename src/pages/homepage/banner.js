import React from "react";
import logo from "../../assets/icons/logo.png";
import search from "../../assets/icons/Search.svg";
import menu from "../../assets/icons/menu.svg";
import imdb from "../../assets/icons/imdb.png";
import tomato from "../../assets/icons/tomato.png";
import play from "../../assets/icons/Play.svg";

const Banner = () => {
  return (
    <div className="homepage_hero_section w-full min-h-[650px] max-h-[900px] space-y-[70px] md:space-y-[100px]">
      <div className="flex justify-between h-[72px] items-center px-[25px] md:px-[55px] lg:px-[90px]">
        <div className="flex gap-[24px] items-center">
          <div>
            <img src={logo} alt='' />
          </div>
          <p className="text-[24px] text-white font-bold">MovieBox</p>
        </div>

        <div className="hidden md:flex border border-[#D1D5DB] rounded-[6px] h-[36px] md:w-[260px] lg:w-[425px] xl:w-[525px]">
          <input
            className="w-[250px] lg:w-[400px] xl:w-[500px] p-[10px] text-sm bg-transparent outline-none"
            placeholder="What do you want to watch"
          />
          <div className="w-8 flex justify-center cursor-pointer items-center">
            <img className="h-[16px] w-[16px]" src={search}  alt='' />
          </div>
        </div>

        <div className="flex gap-[27px] items-center">
          <p className="text-white">Sign in</p>
          <div className="h-[36px] w-[36px] flex justify-center items-center rounded-[30px] bg-[#BE123C]">
            <img src={menu}  alt=''/>
          </div>
        </div>
      </div>

      <div className="w-full px-[25px] md:px-[50px] lg:px-[96px]">
        <div className="w-[404px] flex flex-col gap-[16px]">
          <div>
            <p className="text-[36px] md:text-[42px] lg:text-[48px] w-[300px] md:w-full text-white">John Wick 3 : Parabellum</p>
          </div>
          <div className="flex items-center gap-[34px] text-[14px] md:text-[16px]">
            <div className="flex gap-[10px] items-center">
              <div className="w-[35px] h-[17px]">
                <img src={imdb} alt='' />
              </div>
              <p className="text-white">86.0 / 100</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="h-[16px] w-[16px]">
                <img src={tomato}  alt='' />
              </div>
              <p className="text-white">97%</p>
            </div>
          </div>

          <div className="text-white text-[14px] md:text-[16px]">
            <p>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </div>

          <div className="w-[169px] h-[36px] bg-[#BE123C] flex justify-center rounded-[6px] font-bold gap-[10px] items-center">
            <img src={play}  alt='' />
            <p className="text-white text-[14px]">WATCH TRAILER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
