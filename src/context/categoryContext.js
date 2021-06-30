import { createContext } from "react";

export default createContext({
  categories: [],
  category: null,
  providers: [],
  provider: null,
  fields: [],
  fieldValues: {},
  payment: {},
  chooseCategory: () => {},
  chooseProvider: () => {},
  setFieldValues: () => {},
  setPayment: () => {},
  resetContext: () => {},
});
