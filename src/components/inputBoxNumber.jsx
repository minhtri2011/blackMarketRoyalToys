import React from "react";

const InputBoxNumber = ({ type, label, handleChange, id, placeholder, ...newoption }) => {
  const formatCurrency = (value) => {
    // Chuyển đổi giá trị thành số và kiểm tra xem nó là một số hợp lệ hay không
    const numberValue = parseFloat(value);

    if (!isNaN(numberValue)) {
      // Sử dụng toLocaleString để thêm dấu chấm phân cách
      return numberValue.toLocaleString(undefined);
    } else {
      // Nếu giá trị không hợp lệ, trả lại giá trị không đổi
      return value;
    }
  };

  const handleInputChange = (e) => {
    // Loại bỏ dấu chấm và khoảng trắng khi lấy giá trị
    const inputValue = e.target.value.replace(/[,. ]/g, "");

    // Gọi hàm handleChange với giá trị đã được định dạng
    handleChange(formatCurrency(inputValue));
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={handleInputChange}
        placeholder={placeholder}
        id={id}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...newoption}
      />
    </div>
  );
};

export default InputBoxNumber;
