import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const [dropRight, setDropRight] = useState(false);
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/tours?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <button className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm group">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex}`}
            onClick={() => submitHandle(i)}
          >
            <img
              src={i.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none text-lg font-semibold">
              {i.title}
            </h3>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropRight(!dropRight)}
            />
            {i.submenu && (
              <div>
                <div className="w-full absolute top-19 hidden group-hover:block hover:block">
                  <div className="py-3">
                    {/* <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div> */}
                    {i.sublinks.map((mysublinks) => (
                      <div
                        className="bg-white p-3.5"
                        key={index}
                       
                      >
                        <div>
                          <h1 className="text-lg font-semibold hover:text-blue-800">
                            {mysublinks.title}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </button>
  );
};

export default DropDown;
