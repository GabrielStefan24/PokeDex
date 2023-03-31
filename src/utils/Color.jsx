const Color = (type) => {
  let color = "";

  switch (type) {
    case "grass":
      color = "#5CAF39";
      break;
    case "fire":
      color = "#DB6B24";
      break;
    case "water":
      color = "#4A7FCC";
      break;
    case "bug":
      color = "#8C9D1F";
      break;
    case "psychic":
      color = "#D94474";
      break;
    case "electric":
      color = "#E6B61E";
      break;
    case "rock":
      color = "#9D8C2B";
      break;
    case "ghost":
      color = "#5E4C86";
      break;
    case "steel":
      color = "#A9ACBE";
      break;
    case "ice":
      color = "#84BFC8";
      break;
    case "normal":
      color = "#99925E";
      break;
    case "fighting":
      color = "#A11D31";
      break;
    case "flying":
      color = "#9079D9";
      break;
    case "poison":
      color = "#8C368F";
      break;
    case "ground":
      color = "#C6A160";
      break;
    case "fairy":
      color = "#D48D9B";
      break;
    case "dragon":
      color = "#662CE6";
      break;
  }
  return color;
};
export default Color;
