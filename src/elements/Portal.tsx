import React from "react";
import { createPortal } from "react-dom";

const Portal: React.FC = ({ children }) => {
  const mount = document.getElementById("__next");

  return mount && createPortal(children, mount);
};

export default Portal;
