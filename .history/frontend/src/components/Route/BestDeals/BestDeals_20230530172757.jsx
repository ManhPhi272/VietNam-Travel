import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [dataA, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const navigate = useNavigate();
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort(
      (a, b) => b.discountPrice - a.discountPrice
    );
    const firstFive = sortedData && sortedData.slice(0, 10);
    setData(firstFive);
  }, [allProducts]);

  const submitHandle = () => {
    navigate(`/best-selling`);
    window.location.reload();
  };

  return (
    <div>
      <div className={`${styles.section} mb-8 text-center`}>
        <div className={`${styles.heading}`}>
          <h1>Tour giá sốc</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {dataA && dataA.length !== 0 && (
            <>
              {dataA &&
                dataA.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
        <button
          onClick={submitHandle}
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Xem thêm tours
        </button>
      </div>
    </div>
  );
};

export default BestDeals;
