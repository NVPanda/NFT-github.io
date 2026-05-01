import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.h1`
  font-family: "Dancing Script", cursive; /* Removido o hífen para bater com o import do Google Fonts/Fontsource */
  font-size: ${props => props.theme.fontxxxl || '3rem'};
  color: ${props => props.theme.text};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 640px) {
    font-size: ${props => props.theme.fontxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        P.
      </Link>
    </LogoText>
  );
};

export default Logo;
