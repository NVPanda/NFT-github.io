import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';

const Section = styled.section`
  width: 100%; /* Alterado de 100vw para 100% para evitar scroll horizontal */
  background-color: ${props => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${props => props.theme.navHeight || '5rem'};
  margin: 0 auto;

  @media (max-width: 640px) {
    width: 90%;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: none; /* Oculta o menu em dispositivos móveis (ideal implementar um Menu Hambúrguer depois) */
  }
`;

const MenuItem = styled.li` /* Corrigido de il para li */
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-weight: 500;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after { /* Corrigido de &hover para &:hover */
    width: 100%;
  }
`;

const Navigation = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </Menu>
        
        {/* Passando props para o seu componente Button que ajustamos */}
        <Button text="Conectar" link="https://discord.gg/seu-convite" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
