import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.value);

  return <div>Counter {count}</div>;
};

export default Header;
