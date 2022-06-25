import React from "react";
// import styled from "styled-components";
// const HeadingStyles = styled.h2`
//   color: ${(props) => props.theme.tertiary};
//   font-size: 28px;
//   position: relative;
//   margin-bottom: 30px;
//   font-family: "Montserrat", sans-serif;
//   &:before {
//     content: "";
//     width: 50px;
//     height: 4px;
//     background-color: ${(props) => props.theme.accent};
//     position: absolute;
//     top: 0;
//     left: 0;
//     transform: translate(0, -150%);
//   }
// `;
const Heading = ({ children }) => {
  return (
    <h2 className="text-tertiary text-[28px] relative mb-[30px] heading">
      {children}
    </h2>
  );
};

export default Heading;
