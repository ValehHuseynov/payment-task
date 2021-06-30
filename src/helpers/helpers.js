export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.isCardNumber) {
    const pattern =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isDate) {
    const pattern = /\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isCvc) {
    const pattern = /^[0-9]{3,4}$/;
    isValid = pattern.test(value) && isValid;
  }
  return isValid;
};

const clearNumber = (value = "") => {
  return value.replace(/\D+/g, "");
};

export const expirationDatePattern = (value) => {
  let clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    clearValue = `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }
  return clearValue;
};

export const bankCardPattern = (value) => {
  if (!value) {
    return value;
  }

  const clearValue = clearNumber(value);
  let nextValue = `${clearValue.slice(0, 4)}${clearValue.slice(
    4,
    8
  )}${clearValue.slice(8, 12)}${clearValue.slice(12, 16)}`;

  return nextValue.trim();
};

export const cvcParttern = (value, prevValue, allValues = {}) => {
  const clearValue = clearNumber(value);
  let maxLength = 3;

  return clearValue.slice(0, maxLength);
};
