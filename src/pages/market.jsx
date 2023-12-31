import React, { useEffect, useState } from "react";
import SelectBox from "../components/selectBox";
import InputBox from "../components/inputBox";
import TextArea from "../components/textArea";
import { defaultTag } from "../config/config";
import unidecode from "unidecode";

const Market = () => {
  const [post, setPost] = useState({
    hinhThuc: "Cần bán",
    tinhTrang: "Hàng new",
    tenSP: "",
    giaBan: "",
    coc: "",
    bankFull: "",
    moTa: "",
    quaTang: "",
    cod: false,
    phatHanh: "",
  });

  //render tags
  const renderTags = () => {
    let firstTag = "";
    switch (post.hinhThuc) {
      case "Cần bán":
        firstTag += "#ban";
        break;
      case "Pre order":
        firstTag += "#preorder";
        break;
      case "Cần mua":
        firstTag += "#mua";
        break;
      case "Trade":
        firstTag += "#trade";
        break;
      case "Bid":
        firstTag += "#bid";
        break;
      default:
        break;
    }

    return firstTag;
  };
  const convertAndAddHash = (input) => {
    // Chuyển đổi chuỗi thành chuỗi không dấu
    const withoutDiacritics = unidecode(input);

    // Tách chuỗi thành mảng các từ
    const wordsArray = withoutDiacritics.split(/\s+/);

    // Thêm "#" trước mỗi từ
    const stringWithHash = wordsArray.map((word) => `#${word}`).join(" ");

    return stringWithHash;
  };

  // handle reset form
  const resetForm = (e) => {
    e.preventDefault();
    setPost({
      hinhThuc: "Cần bán",
      tinhTrang: "Hàng new",
      tenSP: "",
      giaBan: "",
      coc: "",
      bankFull: "",
      moTa: "",
      quaTang: "",
      cod: false,
      phatHanh: "",
    });
  };

  // convert string to money number
  const converToMoney = (v) => {
    return parseFloat(v).toLocaleString() + " đ";
  };


  // handle submit form to copy template
  const handleSubmit = (e) => {
    e.preventDefault();

    const template = `[${post.hinhThuc}]
𝗧𝗲̂𝗻 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: ${post.tenSP}
𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${post.tinhTrang}${
      post.quaTang ? "\n𝗤𝘂𝗮̀ 𝘁𝗮̣̆𝗻𝗴: " + post.quaTang : ""
    }
_𝗚𝗶𝗮́ 𝗯𝗮́𝗻: ${converToMoney(post.giaBan)} ${
      post.coc ? "\n_𝗖𝗼̣𝗰: " + converToMoney(post.coc) : ""
    }${post.bankFull ? "\n_𝗕𝗮𝗻𝗸 𝗳𝘂𝗹𝗹: " + converToMoney(post.bankFull) : ""}

𝗠𝗼̂ 𝘁𝗮̉ 𝘀𝗮̉𝗻 𝗽𝗵𝗮̂̉𝗺: 
${post.moTa}

${defaultTag} ${renderTags()} ${convertAndAddHash(post.tenSP)}
`;
    navigator.clipboard.writeText(template);
  };

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-2">
        <SelectBox
          label="Hình thức"
          options={["Cần bán", "Pre order", "Cần mua", "Trade", "Bid"]}
          handleChange={(e) => setPost((v) => ({ ...v, hinhThuc: e }))}
          value={post.hinhThuc}
        />
        <SelectBox
          label="Tình trạng"
          options={["Hàng new", "2nd", "Open check"]}
          handleChange={(e) => setPost((v) => ({ ...v, tinhTrang: e }))}
          value={post.tinhTrang}
        />
      </div>
      <div className="grid md:grid-cols-4 gap-2">
        <div className="md:col-span-3">
          <InputBox
            id="tenSP"
            handleChange={(e) => setPost((v) => ({ ...v, tenSP: e }))}
            label="Tên sản phẩm"
            placeholder="Nhập tên sản phẩm"
            type="text"
            required
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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
        <InputBox
          id="giaBan"
          handleChange={(e) => setPost((v) => ({ ...v, giaBan: e }))}
          value={post.giaBan}
          label="Giá bán"
          placeholder="Nhập giá sản phẩm"
          type="number"
          required
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

      <TextArea
        id={"moTa"}
        label={"Mô tả sản phẩm"}
        placeholder={"Nhập mô tả san phẩm"}
        handleChange={(e) => setPost((v) => ({ ...v, moTa: e }))}
      />
      <InputBox
        id="quaTang"
        handleChange={(e) => setPost((v) => ({ ...v, quaTang: e }))}
        label="Quà tặng kèm"
        placeholder="Nhập quà tặng kèm (nếu có)"
        type="text"
      />
      <div className="w-full flex items-center justify-center gap-3">
        <button className="button bg-indigo-600 text-white" type="submit">
          Bấm để copy template
        </button>
        <button onClick={resetForm} className="button bg-red-600 text-white">
          Xoá sản phẩm trên
        </button>
      </div>
    </form>
  );
};

export default Market;
