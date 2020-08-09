import React from "react";
import styled from "styled-components";

const HeaderComp = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 1rem;
  div {
    color: white;
    border-right: 1px solid white;
    height: 100%;
    padding: 10px;
  }
`;
export default function Header() {
  return (
    <HeaderComp>
      <div>Playground</div>
    </HeaderComp>
  );
}
