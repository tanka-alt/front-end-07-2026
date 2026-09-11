import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "menu": {
            "cart": "Cart",
            "gift_card": "Gift Card",
            "add_product": "Add Product",
            "settings": "Settings",
            "stores": "Stores",
            "calculator": "Calculator",
            "arrays": "Arrays",
            "manage": "Manage",
            "add": "Add",
            "api": "API"
        },
    }
  },
  et: {
    translation: {
        "menu": {
            "cart": "Korv",
            "gift_card": "Kinkekaart",
            "add_product": "Lisa toode",
            "settings": "Seaded",
            "stores": "Poodid",
            "calculator": "Kalkulaator",
            "arrays": "Massiivid",
            "manage": "Halda",
            "add": "Lisa",
            "api": "API"
        }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;