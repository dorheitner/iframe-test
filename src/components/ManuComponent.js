/** @format */

import React from "react";

import { Button } from "antd";
import useReactRouter from "use-react-router";

export default function ManuComponent() {
  const { history } = useReactRouter();

  console.log(history.location);
  return (
    <div>
      <Button
        type={history.location.pathname === "/iframe/0" ? "primary" : "default"}
        onClick={() => history.push("/iframe/0")}
      >
        Dog
      </Button>
      <Button
        type={history.location.pathname === "/iframe/1" ? "primary" : "default"}
        onClick={() => history.push("/iframe/1")}
      >
        Camel
      </Button>
      <Button
        type={history.location.pathname === "/iframe/2" ? "primary" : "default"}
        onClick={() => history.push("/iframe/2")}
      >
        Goat
      </Button>
    </div>
  );
}
