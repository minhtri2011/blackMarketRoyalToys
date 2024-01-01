import unidecode from "unidecode";

export  const convertAndAddHash = (input) => {
    // Chuyển đổi chuỗi thành chuỗi không dấu
    const withoutDiacritics = unidecode(input);
  
    // Loại bỏ các kí tự đặc biệt như (" ` - , ...) từ chuỗi
    const withoutSpecialChars = withoutDiacritics.replace(/[^\w\s]/g, '');
  
    // Tách chuỗi thành mảng các từ
    const wordsArray = withoutSpecialChars.split(/\s+/);
  
    // Thêm "#" trước mỗi từ
    const stringWithHash = wordsArray.map((word) => `#${word}`).join(" ");
  
    return stringWithHash;
  };