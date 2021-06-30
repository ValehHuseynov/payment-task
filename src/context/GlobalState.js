import React, { useState } from "react";

import CategoryContext from "./categoryContext";

const categories = [
  {
    id: 1,
    name: "Utility payment",
    providers: [
      {
        id: 1,
        name: "Bakcell",
        fields: [
          {
            id: "city_id",
            type: "select",
            label: "City",
            options: [
              {
                k: "1",
                v: "Baku",
              },
              {
                k: "2",
                v: "Sumqayit",
              },
              {
                k: "3",
                v: "Gence",
              },
            ],
          },
          {
            id: "subscriber_id",
            type: "text",
            label: "Subscriber phone number",
          },
          {
            id: "gender_id",
            type: "select",
            label: "Gender",
            options: [
              {
                k: "1",
                v: "Male",
              },
              {
                k: "2",
                v: "Female",
              },
            ],
          },
          {
            id: "amount_id",
            type: "number",
            label: "Amount",
          },
          {
            id: "currency_id",
            type: "select",
            label: "Currency",
            options: [
              {
                k: "AZN",
                v: "AZN",
              },
              {
                k: "USD",
                v: "USD",
              },
              {
                k: "EUR",
                v: "EUR",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Azercell",
        fields: [
          {
            id: "city_id",
            type: "select",
            label: "City",
            options: [
              {
                k: "1",
                v: "Baku",
              },
              {
                k: "2",
                v: "Sumqayit",
              },
              {
                k: "3",
                v: "Gence",
              },
            ],
          },
          {
            id: "subscriber_id",
            type: "text",
            label: "Subscriber phone number",
          },
          {
            id: "gender_id",
            type: "select",
            label: "Gender",
            options: [
              {
                k: "1",
                v: "Male",
              },
              {
                k: "2",
                v: "Female",
              },
            ],
          },
          {
            id: "amount_id",
            type: "number",
            label: "Amount",
          },
          {
            id: "currency_id",
            type: "select",
            label: "Currency",
            options: [
              {
                k: "AZN",
                v: "AZN",
              },
              {
                k: "USD",
                v: "USD",
              },
              {
                k: "EUR",
                v: "EUR",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Utility payment 2",
    providers: [
      {
        id: 1,
        name: "Bakcell",
        fields: [
          {
            id: "city_id",
            type: "select",
            label: "City",
            options: [
              {
                k: "1",
                v: "Baku",
              },
              {
                k: "2",
                v: "Sumqayit",
              },
              {
                k: "3",
                v: "Gence",
              },
            ],
          },
          {
            id: "subscriber_id",
            type: "text",
            label: "Subscriber phone number",
          },
          {
            id: "gender_id",
            type: "select",
            label: "Gender",
            options: [
              {
                k: "1",
                v: "Male",
              },
              {
                k: "2",
                v: "Female",
              },
            ],
          },
          {
            id: "amount_id",
            type: "number",
            label: "Amount",
          },
          {
            id: "currency_id",
            type: "select",
            label: "Currency",
            options: [
              {
                k: "AZN",
                v: "AZN",
              },
              {
                k: "USD",
                v: "USD",
              },
              {
                k: "EUR",
                v: "EUR",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Azercell",
        fields: [
          {
            id: "city_id",
            type: "select",
            label: "City",
            options: [
              {
                k: "1",
                v: "Baku",
              },
              {
                k: "2",
                v: "Sumqayit",
              },
              {
                k: "3",
                v: "Gence",
              },
            ],
          },
          {
            id: "subscriber_id",
            type: "text",
            label: "Subscriber phone number",
          },
          {
            id: "gender_id",
            type: "select",
            label: "Gender",
            options: [
              {
                k: "1",
                v: "Male",
              },
              {
                k: "2",
                v: "Female",
              },
            ],
          },
          {
            id: "amount_id",
            type: "number",
            label: "Amount",
          },
          {
            id: "currency_id",
            type: "select",
            label: "Currency",
            options: [
              {
                k: "AZN",
                v: "AZN",
              },
              {
                k: "USD",
                v: "USD",
              },
              {
                k: "EUR",
                v: "EUR",
              },
            ],
          },
        ],
      },
    ],
  },
];

const GlobalState = (props) => {
  const [providers, setProviders] = useState([]);
  const [fields, setFields] = useState([]);
  const [category, setCategory] = useState(null);
  const [provider, setProvider] = useState(null);
  const [fieldValues, setFieldValues] = useState({});
  const [payment, setPayment] = useState({});

  const chooseCategory = (categoryId) => {
    const category = categories.find(({ id }) => id === categoryId);

    setCategory((prev) => category);
    setProviders((prev) => category.providers);
  };

  const chooseProvider = (providerId) => {
    if (providerId) {
      const provider = category.providers.find(
        ({ id }) => id === Number(providerId)
      );

      setProvider((prev) => provider);
      setFields((prev) => provider.fields);
    }
  };

  const fieldValue = (values) => {
    setFieldValues(values);
  };

  const paymentValue = (values) => {
    setPayment(values);
  };

  const resetContext = () => {
    setProviders((prev) => []);
    setFields((prev) => []);
    setCategory((prev) => null);
    setProvider((prev) => null);
    setFieldValues((prev) => {});
    setPayment((prev) => {});
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: categories,
        category: category,
        providers: providers,
        provider: provider,
        fields: fields,
        fieldValues: fieldValues,
        payment: payment,
        chooseCategory: chooseCategory,
        chooseProvider: chooseProvider,
        setFieldValues: fieldValue,
        setPayment: paymentValue,
        resetContext: resetContext,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default GlobalState;
