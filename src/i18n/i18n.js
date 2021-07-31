import Vue from "vue";
import VueI18n from "vue-i18n";

import detectBrowserLanguage from "detect-browser-language";

import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";
import nl from "./nl.json";

Vue.use(VueI18n);

const messages = {
  de,
  en,
  es,
  fr,
  it,
  nl,
};

let options = {
  locale: detectBrowserLanguage(),
  fallbackLocale: "en",
  messages,
};

export const i18n = new VueI18n(options);
