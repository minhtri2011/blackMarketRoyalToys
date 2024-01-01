//render tags
export const renderTags = (post) => {
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
      case "Pass slot":
        firstTag += "#passSlot";
        break;
      default:
        break;
    }

    return firstTag;
  };