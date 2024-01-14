import React from "react";
import InputBox from "../components/inputBox";
import TextArea from "../components/textArea";
import { renderTags } from "../features/renderTypeTag";
import { convertAndAddHash } from "../features/convertAndAddHash";
import { converToMoney } from "../features/convertMoney";
import { defaultTag } from "../config/config";
import toast from "react-hot-toast";

const FormPreOrder = ({ post, setPost, resetForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const template = `[${post.hinhThuc}]
𝗧𝗲̂𝗻 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: ${post.tenSP} ${post.hangsx ? "\n𝗛𝗮̃𝗻𝗴: " + post.hangsx : ""}
𝗣𝗵𝗮́𝘁 𝗵𝗮̀𝗻𝗵: ${post.phatHanh}${post.quaTang ? "\n𝗤𝘂𝗮̀ 𝘁𝗮̣̆𝗻𝗴: " + post.quaTang : ""}
_𝗚𝗶𝗮́ 𝗯𝗮́𝗻: ${converToMoney(post.giaBan)} ${
      post.coc ? "\n_𝗖𝗼̣𝗰: " + converToMoney(post.coc) : ""
    }${post.bankFull ? "\n_𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: " + converToMoney(post.bankFull) : ""}${
      post.link ? "\n𝗟𝗶𝗻𝗸 𝗺𝘂𝗮: " + post.link : ""
    }
    ${post.moTa ? "\n𝗠𝗼̂ 𝘁𝗮̉ 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: " + post.moTa : ""}

Tool tạo bài viết: https://chodengundamvn.vercel.app

${defaultTag} ${renderTags(post)} ${convertAndAddHash(post.tenSP)}
`;
    if (!post.tenSP || !post.phatHanh || !post.giaBan) {
      toast.error(
        "Nhập đủ tên sản phẩm, ngày phát hành, giá pre giúp t ông nội ơi!!!",
        {
          duration: 3000,
        }
      );
    } else {
      navigator.clipboard.writeText(template);
      toast.success("Đã húp template", { duration: 1000 });
    }
  };

  const handleSubmitNoTag = (e) => {
    e.preventDefault();

    const template = `[${post.hinhThuc}]
𝗧𝗲̂𝗻 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: ${post.tenSP} ${post.hangsx ? "\n𝗛𝗮̃𝗻𝗴: " + post.hangsx : ""}
𝗣𝗵𝗮́𝘁 𝗵𝗮̀𝗻𝗵: ${post.phatHanh}${post.quaTang ? "\n𝗤𝘂𝗮̀ 𝘁𝗮̣̆𝗻𝗴: " + post.quaTang : ""}
_𝗚𝗶𝗮́ 𝗯𝗮́𝗻: ${converToMoney(post.giaBan)} ${
      post.coc ? "\n_𝗖𝗼̣𝗰: " + converToMoney(post.coc) : ""
    }${post.bankFull ? "\n_𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: " + converToMoney(post.bankFull) : ""}${
      post.link ? "\n𝗟𝗶𝗻𝗸 𝗺𝘂𝗮: " + post.link : ""
    }
    ${post.moTa ? "\n𝗠𝗼̂ 𝘁𝗮̉ 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: " + post.moTa : ""}

`;
    if (!post.tenSP ) {
      toast.error(
        "Nhập đủ tên sản phẩm giúp t ông nội ơi!!!",
        {
          duration: 3000,
        }
      );
    } else {
      navigator.clipboard.writeText(template);
      toast.success("Đã húp template không có tag", { duration: 1000 });
    }
  };

  return (
    <div>
      <InputBox
        id="tenSP"
        handleChange={(e) => setPost((v) => ({ ...v, tenSP: e }))}
        label="Tên sản phẩm"
        placeholder="Nhập tên sản phẩm"
        type="text"
        value={post.tenSP}
      />
      <div className="grid md:grid-cols-4 gap-2">
        <div className="md:col-span-3">
          <InputBox
            id="hangsx"
            handleChange={(e) => setPost((v) => ({ ...v, hangsx: e }))}
            label="Hãng sản xuất"
            placeholder="Nhập hãng sản xuất"
            type="text"
            value={post.hangsx}
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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
        <InputBox
          id="giaBan"
          handleChange={(e) => setPost((v) => ({ ...v, giaBan: e }))}
          value={post.giaBan}
          label="Giá bán"
          placeholder="Nhập giá sản phẩm"
          type="number"
        />
        <InputBox
          id="coc"
          handleChange={(e) => setPost((v) => ({ ...v, coc: e }))}
          value={post.coc}
          label="Đặt cọc"
          placeholder="Nhập cọc sản phẩm"
          type="number"
        />
        <div className="md:col-auto col-span-2">
          <InputBox
            id="bankFull"
            handleChange={(e) => setPost((v) => ({ ...v, bankFull: e }))}
            value={post.bankFull}
            label="Bank full"
            placeholder="Nhập bankfull"
            type="number"
          />
        </div>
      </div>
      <InputBox
        id="link"
        handleChange={(e) => setPost((v) => ({ ...v, link: e }))}
        label="Link mua"
        placeholder="Link mua"
        type="text"
        value={post.link}
      />

      <TextArea
        id={"moTa"}
        label={"Mô tả sản phẩm"}
        placeholder={"Nhập mô tả sản phẩm"}
        handleChange={(e) => setPost((v) => ({ ...v, moTa: e }))}
      />
      <InputBox
        id="quaTang"
        handleChange={(e) => setPost((v) => ({ ...v, quaTang: e }))}
        label="Quà tặng kèm"
        placeholder="Nhập quà tặng kèm (nếu có)"
        type="text"
      />
      <div className="w-full py-4 flex items-center justify-center gap-2 md:gap-3 flex-col md:flex-row">
        <button
          className="button bg-indigo-600 text-white w-full md:w-auto"
          onClick={handleSubmit}
        >
          Click để copy template
        </button>
        <button
          className="button bg-amber-400 text-black w-full md:w-auto"
          onClick={handleSubmitNoTag}
        >
          Không thích có tag thì bấm vào đây :((
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

export default FormPreOrder;
