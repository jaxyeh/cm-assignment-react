import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Carbs: "Carbs",
      Fat: "Fat",
      Proteins: "Proteins",
      Energy: "Energy",
      Keto: "Keto",
      Chicken: "Chicken",
      Tasty: "Tasty",
      Premium: "Premium",
    },
  },
  es: {
    translation: {
      Carbs: "Carbohidratos",
      Fat: "Gordo",
      Proteins: "Proteínas",
      Energy: "Energía",
      Keto: "Ceto",
      Chicken: "Polo",
      Tasty: "Sabroso",
      Premium: "De primera calidad",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
