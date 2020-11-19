import React from "react";
import styled from "styled-components";

const Followers = ({ numFollowers }) => {
  return (
    <section>
      <NumberFollowers>
        {numFollowers} <span>followers</span>
      </NumberFollowers>
    </section>
  );
};

const NumberFollowers = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  height: 17px;
  top: 257px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: lowercase;
  color: #ff4fd8;
  & > span {
    font-weight: 400;
    color: #ffffff;
  }
`;

export default Followers;
