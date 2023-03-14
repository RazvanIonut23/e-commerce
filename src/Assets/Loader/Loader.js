import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import s from "./Loader.module.css";

const LoaderExampleLoader = () => (
  <Segment className={s.dimmerContainer}>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>

    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);

export default LoaderExampleLoader;
