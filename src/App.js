/** @format */

import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import { Spin } from "antd";

const GetIframe = lazy(() => import("./components/GetIframe"));
const Iframe = lazy(() => import("./components/Iframe"));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback={<Spin />}>
            <Route exact path="/" component={GetIframe} />
            <Route path="/iframe" component={Iframe} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
