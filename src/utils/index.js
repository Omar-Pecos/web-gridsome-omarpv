import axios from "axios";
const keyDeeplAPI = process.env.GRIDSOME_DEEPL_KEY;

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

// CONSTANTS
export const TYPES = [
  "backend",
  "frontend",
  "fullstack",
  "design",
  "game",
  "native",
  "hybrid",
];
export const cookieName = "omarpecos_web";
export const defaultCookie = {
  locale: "es",
  darkMode: false,
};

const generateDeeplAPIUrl = (text, locale) => {
  return `https://api-free.deepl.com/v2/translate?auth_key=${keyDeeplAPI}&text=${text}&source_lang=es&target_lang=${locale}&split_sentences=0`;
};

const generateErrorTranslate = (lang, text) => {
  let heading;
  switch (lang) {
    case "en":
      heading = "Can´t translate this text to English >> ";
      break;
    case "it":
      heading = "Non posso tradurre questo testo in italiano >> ";
      break;
    case "fr":
      heading = "Impossible de traduire ce texte en français >> ";
      break;
  }
  return heading + text;
};

export const translate = (text, locale) => {
  return axios
    .get(generateDeeplAPIUrl(text, locale))
    .then(({ data }) => {
      const textTranslated = data.translations[0].text;
      return textTranslated;
    })
    .catch((error) => {
      console.log(error);
      let result = generateErrorTranslate(locale, text);
      return result;
    });
};

/*const dialogOptions = {
  backdropClose: true,
  animation: "bounce",
  okText: "X",
};

export const genDialogData = (text, locale) => {
  const message = {
    title: locale.toUpperCase(),
    body: text,
  };
  return {
    message,
    options: dialogOptions,
  };
}; */
