import React from "react";
import styled from "styled-components";

const Header = ({ name, srcUrl }) => {
  return (
    <header>
      {srcUrl && <ProfileImage src={srcUrl} alt={name} />}

      {name}
    </header>
  );
};

const ProfileImage = styled.img`
  border-radius: 50%;
`;

export default Header;
