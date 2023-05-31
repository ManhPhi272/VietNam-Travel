import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-gray-900">
              Khi làm Visa cần chuẩn bị những gì?
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                - 02 ảnh nền trắng 3,5 x 4,5
                <br />
                - Hộ chiếu bản gốc + hộ chiếu cũ nếu có
                <br />
                - Sổ hộ khẩu (sao y bản chính)
                <br />
                - Đăng kí kết hôn (nếu đã lập gia đình) (sao y bản chính)
                <br />
                - Giấy xác nhận công việc hiện tại
                <br />
                + Nếu là nhân viên: Hợp đồng lao động hoặc quyết định bổ nhiệm,
                Xác nhận lương 3 tháng gần nhất, Đơn xin nghỉ phép du lịch , Sao
                kê tài khoản lương 03 tháng gần nhất (nếu có)
                <br />
                + Nếu là chủ doanh nghiệp: Đăng kí kinh doanh, xác nhận đóng
                thuế, sao kê tài khoản của công ty 03 tháng gần nhất
                <br />
                + Nếu là trẻ em dưới 18 tuổi: Giấy đồng ý cho đi du lịch của bố
                và mẹ, bản sao hộ chiếu hoặc chứng minh thư của cha và mẹ, Giấy
                khai sinh, Xác nhận là học sinh, đơn xin nghỉ học…
                <br />
                + Nếu đã nghỉ hưu: Quyết định nghỉ hưu, sổ hưu hoặc sao kê tài
                khoản hưu
                <br />
                - Chứng minh tài chính cá nhân: Sổ tiết kiệm cá nhân có số dư
                hiện tại từ 100 triệu đồng, sao kê tài khoản ngân hàng, giấy tờ
                nhà đất, xe hơi, cổ phiếu, cổ phần…
                <br />- Thư mời từ các tổ chức hoặc cá nhân tại nơi định đến.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-lg font-medium text-gray-900">
              Điều kiện đăng ký tour như thế nào?
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân
                (còn hạn sử dụng) đối với tour du lịch trong nước, và Hộ chiếu
                (còn hạn trên 6 tháng) đối với tour du lịch nước ngoài, ngoài ra
                đối với một số nước thì sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ
                để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán
                quy định.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-gray-900">
              Khách lớn tuổi đi tour cần điều kiện gì? Tôi đăng ký mua tour trực
              tiếp khách lớn tuổi mà không được?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Đối với khách nữ từ 55 tuổi trở lên và khách nam từ 60 trở lên:
                VietNam Travel khuyến cáo nên có người thân dưới 55 tuổi (đầy đủ
                sức khỏe) đi cùng để có thể kịp thời hỗ trợ nếu có vấn đề xảy ra
                khi đi tour. Riêng khách từ 70 tuổi trở lên: Bắt buộc phải có
                người thân dưới 55 tuổi (đầy đủ sức khỏe) đi cùng và nộp kèm
                giấy khám sức khỏe, trong đó có xác nhận đủ sức khỏe để đi du
                lịch của bác sĩ + Giấy cam kết sức khỏe theo mẫu qui định của
                công ty. <br /> Khách từ 80 tuổi trở lên thì không có chế độ bảo
                hiểm nên Vietravel thường không nhận khách ở độ tuổi này.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-gray-900">
              Tôi có thể thanh toán tiền mặt ở đâu? Có cần phải đến công ty
              không?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Với trường hợp thanh toán bằng tiền mặt hoặc cà thẻ ngân hàng,
                quý khách có thể thanh toán online bằng các loại thẻ như:
                paypal, master card... hoặc tại Trụ sở chính: Số 3 phố Cầu Giấy,
                P.Láng Thượng, Q.Đống Đa, Hà Nội hoặc bất kì Văn phòng nào của
                VietNam Travel. Hiện tại, VietNam Travel đang có 04 văn phòng
                bán lẻ tại các quận thành phố Hà Nội và Hồ Chí Minh và các chi
                nhánh tại các tỉnh thành Việt Nam.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-gray-900">
              Giá tour đã bao gồm VAT chưa? Tôi muốn xuất hóa đơn được không?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Tất cả các tour đều có quy định rất rõ cho từng tour về thuế
                VAT, trường hợp khách có yêu cầu xuất hóa đơn, vui lòng cung cấp
                đầy đủ thông tin xuất hóa đơn ngay khi đăng ký tour và thanh
                toán hết. Hóa đơn sẽ được xuất sau khi kết thúc tour và được gửi
                về địa chỉ theo yêu cầu của quý khách hoặc lấy trực tiếp. Không
                nhận xuất hóa đơn sau khi tour khởi hành.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-gray-900">
              Điểm tham quan ở nước ngoài có an toàn hay không?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Điểm tham quan tại nước ngoài trong các chương trình du lịch của
                Vietravel đều là những điểm nổi bật, thu hút nhiều khách tham
                quan trên Thế giới. Do vậy, Quý khách lưu ý cẩn thận tư trang cá
                nhân khi ở chỗ đông người, luôn đi chung với đoàn, không nên tự
                ý rời khỏi đoàn để đảm bảo an toàn.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
