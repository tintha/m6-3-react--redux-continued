import React from "react";
import styled from "styled-components";

const Tags = ({ firstTag, secondTag }) => {
  return (
    <TagsSection>
      <TagsTitle>tags</TagsTitle>
      <TagsBox>
        <Tag>{firstTag}</Tag>
        <Tag>{secondTag}</Tag>
      </TagsBox>
    </TagsSection>
  );
};

const TagsSection = styled.section`
  position: absolute;
  width: 100%;
  top: 478px;
  text-align: center;
`;

const TagsTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  text-transform: lowercase;
  color: #ffffff;
`;

const TagsBox = styled.div`
  text-transform: lowercase;
  color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Tag = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  background-color: #4b4b4b;
  padding: 10px;
  border-radius: 4px;
  margin-left: 10px;
`;

export default Tags;
