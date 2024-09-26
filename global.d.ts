import en from "./src/i18n/locales/en.json";
 
type Messages = typeof en;
 
declare global {
  export interface IntlMessages extends Messages {}
}