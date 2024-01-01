import React from "react";
import InputBox from "../components/inputBox";
import TextArea from "../components/textArea";
import { renderTags } from "../features/renderTypeTag";
import { convertAndAddHash } from "../features/convertAndAddHash";
import { converToMoney } from "../features/convertMoney";
import { defaultTag } from "../config/config";
import toast from "react-hot-toast";
import SelectBox from "./selectBox";

const FormCanMua = ({ post, setPost, resetForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const template = `[${post.hinhThuc}]
𝗧𝗲̂𝗻 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺 𝗺𝘂𝗼̂́𝗻 𝗺𝘂𝗮: ${post.tenSP}
𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${post.tinhTrang} ${post.gdtt?'\n𝗛𝗶̀𝗻𝗵 𝘁𝗵𝘂̛́𝗰 𝗴𝗶𝗮𝗼 𝗱𝗶̣𝗰𝗵: '+post.gdtt:''}${post.area?'\n𝗞𝗵𝘂 𝘃𝘂̛̣𝗰 𝘂̛𝘂 𝘁𝗶𝗲̂𝗻 𝗴𝗶𝗮𝗼 𝗱𝗶̣𝗰𝗵: ' +post.area:''}${post.giaBan?'\n_𝗚𝗶𝗮́ 𝗺𝗼𝗻𝗴 𝗺𝘂𝗼̂́𝗻: ' + converToMoney(post.giaBan)+ ' (ib thương lượng)':''}
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
      <div className="grid grid-cols-4 gap-2">
        <SelectBox
          label="Tình trạng"
          options={["Hàng new", "Slot Pre order", "2nd", "Open check"]}
          handleChange={(e) => setPost((v) => ({ ...v, tinhTrang: e }))}
          value={post.tinhTrang}
        />
        <div className="col-span-2">
          <InputBox
            id="tenSP"
            handleChange={(e) => setPost((v) => ({ ...v, tenSP: e }))}
            label="Tên sản phẩm cần tìm"
            placeholder="Nhập tên sản phẩm cần tìm"
            type="text"
            value={post.tenSP}
          />
        </div>
        <InputBox
          id="area"
          handleChange={(e) => setPost((v) => ({ ...v, area: e }))}
          label="Khu vực muốn tìm"
          placeholder="Nhập khu vực muốn tìm"
          type="text"
          value={post.area}
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
        <InputBox
          id="giaBan"
          handleChange={(e) => setPost((v) => ({ ...v, giaBan: e }))}
          value={post.giaBan}
          label="Giá mong muốn (có thể bỏ qua)"
          placeholder="Nhập giá sản phẩm mong muốn tìm"
          type="number"
        />
        <div className="col-span-2">
          <InputBox
            id="gdtt"
            handleChange={(e) => setPost((v) => ({ ...v, gdtt: e }))}
            label="Giao dịch bằng hình thức gì (ship cod, giao dịch trực tiếp tại hcm??)"
            placeholder="Nhập hình thức hoặc nơi muốn giao dịch trực tiếp, trung gian,.."
            type="text"
            value={post.gdtt}
          />
        </div>
      </div>

      <TextArea
        id={"moTa"}
        label={"Mô tả sản phẩm"}
        placeholder={"Nhập mô tả sản phẩm"}
        handleChange={(e) => setPost((v) => ({ ...v, moTa: e }))} 
        value={post.moTa}
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

export default FormCanMua;
