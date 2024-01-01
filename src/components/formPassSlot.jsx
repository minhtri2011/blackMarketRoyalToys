import React from "react";
import InputBox from "../components/inputBox";
import TextArea from "../components/textArea";
import { renderTags } from "../features/renderTypeTag";
import { convertAndAddHash } from "../features/convertAndAddHash";
import { converToMoney } from "../features/convertMoney";
import { defaultTag } from "../config/config";
import toast from "react-hot-toast";
import SelectBox from "./selectBox";

const FormPassSlot= ({ post, setPost, resetForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const template = `[${post.hinhThuc}]
𝗧𝗲̂𝗻 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: ${post.tenSP}
𝗦𝗵𝗼𝗽: ${post.shop}
𝗣𝗵𝗮́𝘁 𝗵𝗮̀𝗻𝗵: ${post.phatHanh}
_𝗚𝗶𝗮́ 𝘀𝗵𝗼𝗽 𝗯𝗮́𝗻: ${converToMoney(post.giaBan)} ${
  post.coc ? "\n_Đ𝗮̃ 𝗰𝗼̣𝗰: " + converToMoney(post.coc) : ""
}${post.bankFull ? "\n_𝗠𝘂𝗼̂́𝗻 𝗽𝗮𝘀𝘀 𝗰𝗼̣𝗰 𝘃𝗼̛́𝗶 𝗴𝗶𝗮́: : " + converToMoney(post.bankFull) : ""}
*𝗛𝗮̀𝗻𝗴 𝘃𝗲̂̀ 𝘁𝗿𝗮̉ 𝘁𝗵𝗲̂𝗺: ${converToMoney(Number(post.giaBan) - Number(post.coc))}
${post.moTa ? "\n𝗠𝗼̂ 𝘁𝗮̉ 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: "+post.moTa : ''}

Tool tạo bài viết: https://chodengundamvn.vercel.app

${defaultTag} ${renderTags(post)} ${convertAndAddHash(post.tenSP)}
`;
    if (!post.tenSP) {
      toast.error("Nhập  tên sản phẩm giúp t ông nội ơi!!!", {
        duration: 3000,
      });
    } else {
      navigator.clipboard.writeText(template);
      toast.success("Đã húp template", { duration: 1000 });
    }
  };
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-2">
        <div className="md:col-span-3">
          <InputBox
            id="tenSP"
            handleChange={(e) => setPost((v) => ({ ...v, tenSP: e }))}
            label="Tên sản phẩm"
            placeholder="Nhập tên sản phẩm"
            type="text"
            value={post.tenSP}
          />
        </div>
        <InputBox
          id="phatHanh"
          handleChange={(e) => setPost((v) => ({ ...v, phatHanh: e }))}
          label="Ngày phát hành"
          placeholder="Nhập ngày phát hành"
          type="text"
          value={post.phatHanh}
        />
      </div>
        <InputBox
          id="shop"
          handleChange={(e) => setPost((v) => ({ ...v, shop: e }))}
          label="Tên shop đã cọc slot"
          placeholder="Nhập tên shop"
          type="text"
          value={post.shop}
        />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
        <InputBox
          id="giaBan"
          handleChange={(e) => setPost((v) => ({ ...v, giaBan: e }))}
          value={post.giaBan}
          label="Giá shop bán"
          placeholder="Nhập giá shop bán"
          type="number"
        />
        <InputBox
          id="coc"
          handleChange={(e) => setPost((v) => ({ ...v, coc: e }))}
          value={post.coc}
          label="Đã cọc"
          placeholder="Nhập cọc sản phẩm bạn đã đặt"
          type="number"
        />
        <div className="md:col-auto col-span-2">
          <InputBox
            id="bankFull"
            handleChange={(e) => setPost((v) => ({ ...v, bankFull: e }))}
            value={post.bankFull}
            label="Giá cọc muốn pass"
            placeholder="Nhập cọc muốn pass"
            type="number"
          />
        </div>
      </div>

      <TextArea
        id={"moTa"}
        label={"Mô tả sản phẩm"}
        placeholder={"Nhập mô tả sản phẩm"}
        handleChange={(e) => setPost((v) => ({ ...v, moTa: e }))}
      />
      <div className="w-full py-4 flex items-center justify-center gap-2 md:gap-3 flex-col md:flex-row">
        <button
          className="button bg-indigo-600 text-white w-full md:w-auto"
          onClick={handleSubmit}
        >
          Click để copy template
        </button>
        <button
          onClick={resetForm}
          className="button bg-red-600 text-white w-full md:w-auto"
        >
          Xoá sản phẩm trên
        </button>
      </div>
    </div>
  );
};

export default FormPassSlot;
