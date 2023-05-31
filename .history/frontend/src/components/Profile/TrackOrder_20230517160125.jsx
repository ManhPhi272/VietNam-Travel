import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Xử lý" ? (
          <h1 className="text-[20px]">
            Đơn hàng của bạn đang được xử lý tại đại lý.
          </h1>
        ) : data?.status === "Liên hệ công ty cho thuê xe, hãng hàng không" ? (
          <h1 className="text-[20px]">
            Đang liện hệ công ty cho thuê xe, hãng hàng không.
          </h1>
        ) : data?.status === "Liên hệ nhà nghỉ, khách sạn" ? (
          <h1 className="text-[20px]">Đang liên hệ chỗ ở.</h1>
        ) : data?.status === "Liên hệ địa điểm du lịch" ? (
          <h1 className="text-[20px]">Đang liên hệ địa điểm du lịch.</h1>
        ) : data?.status === "Hỗ trợ hộ chiếu, visa" ? (
          <h1 className="text-[20px]">Hỗ trợ hộ chiếu, visa nếu cần.</h1>
        ) : data?.status === "Thành công" ? (
          <h1 className="text-[20px]">
            Đơn hàng của bạn đã được xử lý thành công!
          </h1>
        ) : data?.status === "Xử lý hoàn tiền lại" ? (
          <h1 className="text-[20px]">Hoàn tiền của bạn đang được xử lý!</h1>
        ) : data?.status === "Hoàn tiền thành công" ? (
          <h1 className="text-[20px]">Hoàn tiền của bạn là thành công!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
