import React, { FC } from "react";
import { Link as RawLink, LinkProps } from "react-router-dom";

export const Link: FC<LinkProps> = (props) => (
  <RawLink {...props} className={"router-link" + props.className ?? ""} />
);
