export const setColorByType = (type) => {
  var color = "black";

  switch (type) {
    case "backend":
      color = "#C64E4E";
      break;
    case "frontend":
      color = "#47C163";
      break;
    case "fullstack":
      color = "purple";
      break;
    case "design":
      color = "#808080";
      break;
    case "game":
      color = "orange";
      break;
    case "native":
      color = "plum";
      break;
    case "hybrid":
      color = "#3F3FB6";
      break;
  }

  return color;
};

export const TYPES = [
  "backend",
  "frontend",
  "fullstack",
  "design",
  "game",
  "native",
  "hybrid",
];
