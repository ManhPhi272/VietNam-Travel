import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { ChevronLeft, ChevronRight } from "feather-icons";

const Hero = () => {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat overflow-hidden ${styles.noramlFlex}`}
      style={
        {
          // backgroundImage:
          //   "url(https://minhanhtravel.com.vn/wp-content/uploads/2022/03/banner.jpg)",
        }
      }
    >
      <div className="flex">
        {slides.map((s) => (
          <img src={s}/>
        ))}
      </div>
      <div>
        <button></button>
      </div>
      {/* <div className="overflow-hidden relative">
        <div className="flex">{slides}</div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button className="p-1">
            <ChevronLeft size={40} />
          </button>
        </div>
      </div> */}
      {/* <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Đường còn dài ta <br /> tìm chỗ mát mà đi
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/tours" className="inline-block">
          <div className={`${styles.button} mt-20`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Đặt ngay
            </span>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Hero;
