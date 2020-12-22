/** @format */

import React, { Fragment } from "react";

import { Image, Typography } from "antd";
import useReactRouter from "use-react-router";

import MenuComponent from "./ManuComponent";

const { Title } = Typography;

export default function Iframe() {
  const { history } = useReactRouter();

  console.log(history.location.pathname);

  const locationUrl = history.location.pathname;
  const locationUrlArr = locationUrl.split("/");

  console.log(locationUrlArr);
  const iframeContent = [
    {
      title: "Dog",
      image:
        "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
    },
    {
      title: "Camel",
      image:
        "https://images1.calcalist.co.il/PicServer3/2020/07/26/1007695/1LM.jpg",
    },
    {
      title: "Goat",
      image:
        "https://ethnos.ca/wp-content/uploads/2019/11/nandhu-kumar-jAMcUbsTvWE-unsplash-copy.jpg",
    },
  ];

  console.log(iframeContent[locationUrlArr[2]]);

  return (
    <Fragment>
      <MenuComponent />
      <Title>{iframeContent[locationUrlArr[2]].title}</Title>
      <Image width={200} src={iframeContent[locationUrlArr[2]].image} />
    </Fragment>
  );
}
