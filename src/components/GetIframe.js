/** @format */

import React from "react";
import Iframe from "react-iframe";

export default function GetIframe() {
  const iframeURL = `${process.env.REACT_APP_URL}iframe/0`;

  return (
    <>
      <Iframe
        url={iframeURL}
        width="450px"
        height="450px"
        //  id="myId"
        //   className="myClassname"
        display="initial"
        position="relative"
      />
    </>
  );
}
