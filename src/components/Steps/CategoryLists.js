import React, { useContext } from "react";
import CategoryContext from "../../context/categoryContext";
import { useHistory } from "react-router-dom";

const CategoryLists = () => {
  const { categories, chooseCategory } = useContext(CategoryContext);
  const history = useHistory();

  const handleChoose = (id) => {
    chooseCategory(id);
    history.push("/provider");
  };
  return (
    <div className="row">
      <div className="col-12">
        <h3>Category List</h3>
      </div>
      {categories.map((c) => (
        <div className="col-12 col-md-6 col-lg-6 py-3" key={c.id}>
          <button
            className="btn btn-info w-100 text-center"
            onClick={() => handleChoose(c.id)}
          >
            {c.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryLists;
