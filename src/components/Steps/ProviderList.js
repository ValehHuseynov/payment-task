import React, { useContext, useState } from "react";
import CategoryContext from "../../context/categoryContext";
import { useHistory } from "react-router-dom";

const ProviderList = () => {
  const { providers, chooseProvider, fields, setFieldValues } =
    useContext(CategoryContext);
  const [fieldsValue, setFieldsValue] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const updateFields = { ...fieldsValue, [e.target.name]: e.target.value };
    setFieldsValue(updateFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFieldValues(fieldsValue);
    history.push("/payment");
  };

  return (
    <div className="w-100">
      <div className="col-12">
        <h3>Provider</h3>
      </div>
      <form className="col-12" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Provider list</label>

          <select
            className="form-control"
            onChange={(e) => chooseProvider(e.target.value)}
          >
            <option value="">--</option>
            {providers.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        {fields.length
          ? fields.map((f) =>
              f.type === "select" ? (
                <div className="form-group disabled" key={f.id}>
                  <label>{f.label}</label>

                  <select
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name={f.id}
                  >
                    <option value="">--</option>
                    {f.options.map((o) => (
                      <option key={o.k} value={o.v}>
                        {o.v}
                      </option>
                    ))}
                  </select>
                </div>
              ) : f.type === "text" ? (
                <div className="form-group" key={f.id}>
                  <label>{f.label}</label>
                  <input
                    type="text"
                    name={f.id}
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              ) : f.type === "number" ? (
                <div className="form-group" key={f.id}>
                  <label>{f.label}</label>
                  <input
                    type="number"
                    name={f.id}
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              ) : (
                ""
              )
            )
          : ""}
        {fields.length ? (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default ProviderList;
