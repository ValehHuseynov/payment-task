import React, { useState, useContext } from "react";
import CategoryContext from "../../context/categoryContext";

import {
  updateObject,
  checkValidity,
  expirationDatePattern,
  bankCardPattern,
  cvcParttern,
} from "../../helpers/helpers";
import InfoModal from "../Modal/InfoModal";

const Payment = () => {
  const [modalShow, setModalShow] = useState(true);
  const { setPayment } = useContext(CategoryContext);

  const [inputs, setInputs] = useState({
    number: {
      value: "",
      valid: false,
      touch: false,
      validation: {
        required: true,
        isCardNumber: true,
      },
    },
    date: {
      value: "",
      valid: false,
      touch: false,
      validation: {
        required: true,
        isDate: true,
      },
    },
    cvc: {
      value: "",
      valid: false,
      touch: false,
      validation: {
        required: true,
        isCvc: true,
      },
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChangeInput = (key, value) => {
    const inputUpdate = updateObject(inputs[key], {
      value: value,
      valid: checkValidity(value, inputs[key].validation),
      touch: true,
    });

    const formInputUpdate = updateObject(inputs, {
      [key]: inputUpdate,
    });

    let isValid = true;
    for (let input in formInputUpdate) {
      isValid = formInputUpdate[input].valid && isValid;
    }

    setInputs(formInputUpdate);
    setFormIsValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPayment({
      number: inputs.number.value,
      date: inputs.date.value,
      cvc: inputs.cvc.value,
    });

    handleModalShow();
  };

  function handleModalShow() {
    setModalShow(true);
  }

  function handleModalClose() {
    setModalShow(false);
  }

  return (
    <div className="row">
      <InfoModal show={modalShow} onHide={handleModalClose} />
      <div className="col-12">
        <h3>Payment</h3>
      </div>
      <form className="col-12" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card number</label>
          <input
            type="text"
            name="number"
            className={`form-control ${
              inputs.number.touch && !inputs.number.valid
                ? "border border-danger"
                : ""
            }`}
            value={inputs.number.value}
            onChange={(e) => {
              const value = bankCardPattern(e.target.value);
              handleChangeInput("number", value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Card date</label>
          <input
            type="text"
            name="date"
            className={`form-control ${
              inputs.date.touch && !inputs.date.valid
                ? "border border-danger"
                : ""
            }`}
            value={inputs.date.value}
            onChange={(e) => {
              const value = expirationDatePattern(e.target.value);
              handleChangeInput("date", value);
            }}
          />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input
            type="text"
            name="cvc"
            className={`form-control ${
              inputs.cvc.touch && !inputs.cvc.valid
                ? "border border-danger"
                : ""
            }`}
            value={inputs.cvc.value}
            onChange={(e) => {
              const value = cvcParttern(e.target.value);
              handleChangeInput("cvc", value);
            }}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${formIsValid ? "" : "disabled"}`}
          aria-disabled="true"
          disabled={formIsValid ? false : true}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payment;
