import React, { useEffect, useState } from "react";
import SelectBox from "../components/selectBox";
import InputBox from "../components/inputBox";
import TextArea from "../components/textArea";
import { defaultTag } from "../config/config";
import unidecode from "unidecode";
import toast from "react-hot-toast";
import FormBanHang from "../components/formBanHang";
import FormCanMua from "../components/formCanMua";
import FormPreOrder from "../components/formPreOrder";
import FormTrade from "../components/formTrade";
import FormPassSlot from "../components/formPassSlot";

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
    area: "",
    gdtt: "",
    hangsx: "",
    tenSPTrade: "",
    shop: "",
  });

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
      area: "",
      gdtt: "",
      hangsx: "",
      tenSPTrade: "",
      shop: "",
    });
  };
  
  const renderForm = () => {
    switch (post.hinhThuc) {
      case "Cần bán":
        return (
          <FormBanHang post={post} setPost={setPost} resetForm={resetForm} />
        );
      case "Cần mua":
        return (
          <FormCanMua post={post} setPost={setPost} resetForm={resetForm} />
        );
      case "Pre order":
        return (
          <FormPreOrder post={post} setPost={setPost} resetForm={resetForm} />
        );
      case "Trade":
        return (
          <FormTrade post={post} setPost={setPost} resetForm={resetForm} />
        );
      case "Pass slot":
        return (
          <FormPassSlot post={post} setPost={setPost} resetForm={resetForm} />
        );
      default:
        break;
    }
  };

  return (
    <form className="grid gap-3">
      <SelectBox
        label="Hình thức"
        options={["Cần bán", "Cần mua", "Pass slot", "Pre order", "Trade"]}
        handleChange={(e) => setPost((v) => ({ ...v, hinhThuc: e }))}
        value={post.hinhThuc}
      />
      {renderForm()}
    </form>
  );
};

export default Market;
