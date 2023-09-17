import React from "react";
import logo from "../assets/icons/logo.png";
import calender from "../assets/icons/Calendar.png";
import home from "../assets/icons/Home.png";
import projector from "../assets/icons/Movie Projector.png";
import logout from "../assets/icons/Logout.png";
import Tv from "../assets/icons/TV Show.png";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {
  const SideBarMenu = [
    {
      title: "Home",
      icon: home,
      route: "",
    },
    {
      title: "Movies",
      icon: projector,
      route: "",
    },
    {
      title: "TV Series",
      icon: Tv,
      route: "",
    },
    {
      title: "Upcoming",
      icon: calender,
      route: "",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="border-r-2 border-y-2 rounded-r-[45px] w-full">
      <div className="flex flex-col pt-[50px] items-center">
        <div className="flex gap-[24px] items-center">
          <div>
            <img src={logo} />
          </div>
          <p className="text-[24px] text-black font-bold">MovieBox</p>
        </div>

        <div className=" flex flex-col pl-4 pr-3 justify-between w-full">
          <div className="mt-[95px]">
            {SideBarMenu.map(({ title, icon, route }) => (
              <div className="flex flex-col">
                <div
                  onClick={() => navigate(`/${route}`)} 
                  key={title}
                  className="flex cursor-pointer items-center gap-[10px] py-[28px] hover:bg-red-50"
                >
                  <div className="mr-3 mt-[5px] hover:text-[#1D4C41]">
                    <img src={icon} />
                  </div>
                  <p className=" font-semibold text-[18px] xl:text-[20px] hover:text-[#1D4C41]">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-7 px-[16px] rounded-[20px] gap-[9px] bg-[#f8e7eb] w-[170px] border border-[#BE123C]">
          <p className="text-[15px] font-bold text-[#333333CC] mt-[42px]">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[12px] text-[#666666]">
            50k people are playing now
          </p>
          <button className="text-[12px] h-[30px] w-[112px] mb-[16px] text-[#BE123C] bg-[#be123d69] font-semibold rounded-[30px]">
            Start Playing
          </button>
        </div>

        <div className="flex flex-[10px] w-full mt-[44px] mb-[69px] pl-4 pr-3 ">
          <div className="mr-3 mt-[5px] hover:text-[#1D4C41]">
            <img src={logout} />
          </div>
          <p className=" font-semibold text-[20px] hover:text-[#1D4C41]">
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
