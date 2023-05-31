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
        ) : data?.status === "Đang liên " ? (
          <h1 className="text-[20px]">
          Đang liện hệ công ty.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Your Order is on the way with our delivery partner.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your Order is in your city. Our Delivery man will deliver it.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Our Delivery man is going to deliver your order.
          </h1>
        ) : data?.status === "Delivered" ? (
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
