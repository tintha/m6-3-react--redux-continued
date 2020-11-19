import React from "react";
import styled from "styled-components";

const Header = ({ name, srcUrl }) => {
  return (
    <StyledHeader>
      <HeaderContainer>
        {srcUrl && <ProfileImage src={srcUrl} alt={name} />}
      </HeaderContainer>

      <ArtistName>{name}</ArtistName>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 59px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 175px;
  height: 175px;
  margin: auto;
`;

const ArtistName = styled.div`
  position: absolute;
  width: 100%;
  height: 59px;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  color: #ffffff;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
`;

export default Header;
