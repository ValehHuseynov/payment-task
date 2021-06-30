import React from "react";
import GlobalState from "./context/GlobalState";
import { Switch, Route } from "react-router-dom";
import CategoryLists from "./components/Steps/CategoryLists";
import ProviderList from "./components/Steps/ProviderList";
import Payment from "./components/Steps/Payment";

const App = () => {
  return (
    <GlobalState>
      <div className="container h-100">
        <div className="w-100 h-100 d-flex">
          <div className="w-50 m-auto bg-white shadow rounded p-5">
            <Switch>
              <Route path="/" exact>
                <CategoryLists />
              </Route>
              <Route path="/provider" exact>
                <ProviderList />
              </Route>
              <Route path="/payment" exact>
                <Payment />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </GlobalState>
  );
};

export default App;
