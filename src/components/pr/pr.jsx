import React from "react";
import royalred from "../../assets/royalred.jpg";
import royalblack from "../../assets/royalblack.jpg";
import tiktok from "../../assets/tiktok.png";
import mt from "../../assets/mt.jpg";

const Pr = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-2 py-20 max-w-lg m-auto">
      <div>
        <a
          href="https://www.tiktok.com/@tringuyendev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tiktok} alt="tringuyendev" />
        </a>
        <h3>Tiktok leak sản phẩm mới</h3>
      </div>
      <div>
        <a
          href="https://www.facebook.com/minhtrifedev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mt} alt="tringuyendev" />
        </a>
        <h3>Liên hệ trang cá nhân</h3>
      </div>
      <div>
        <a
          href="https://www.facebook.com/royaltoys9999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={royalblack} alt="royaltoys" />
        </a>
        <h3>Liên hệ order mô hình động (kit, mb,...)</h3>
      </div>
      <div>
        <a
          href="https://www.facebook.com/RoyaltoysCollectibles999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={royalred} alt="royaltoys" />
        </a>
        <h3>Liên hệ order mô hình tĩnh (resin,...)</h3>
      </div>
    </div>
  );
};

export default Pr;
