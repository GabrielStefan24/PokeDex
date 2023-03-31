const ColorButton = (type) => {
  let color = "";

  switch (type) {
    case "grass":
      color = "#8CAF39";
      break;
    case "fire":
      color = "#DB8B24";
      break;
    case "water":
      color = "#4A8FCC";
      break;
    case "bug":
      color = "#8C8D1F";
      break;
    case "psychic":
      color = "#D95474";
      break;
    case "electric":
      color = "#E4C74E";
      break;
    case "rock":
      color = "#9D9C2B";
      break;
    case "ghost":
      color = "#5E5C86";
      break;
    case "steel":
      color = "#A8ACBE";
      break;
    case "ice":
      color = "#85BFC8";
      break;
    case "normal":
      color = "#94988F";
      break;
    case "fighting":
      color = "#A12D31";
      break;
    case "flying":
      color = "#9179D9";
      break;
    case "poison":
      color = "#8C468F";
      break;
    case "ground":
      color = "#C7B160";
      break;
    case "fairy":
      color = "#E78D9B";
      break;
    case "dragon":
      color = "#672CE6";
      break;
  }
  return color;
};
export default ColorButton;
