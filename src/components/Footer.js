import React from 'react';
import styled from 'styled-components';
import Button from './Button'; // Importando o seu componente de botão ajustado

const Section = styled.footer`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  position: relative;
  color: ${props => props.theme.text};
  
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.text};
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 3rem;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  gap: 1rem;

  & > * {
    padding: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ff4d4d; /* Cor de destaque */
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Bottom = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <Section>
      <Container>
        <Left>
          <h1>Panda</h1>
          <IconList>
            {/* Adicione seus links de redes sociais aqui */}
            <a href="https://facebook.com" target='_blank' rel="noreferrer">F</a>
            <a href="https://instagram.com" target='_blank' rel="noreferrer">I</a>
            <a href="https://twitter.com" target='_blank' rel="noreferrer">T</a>
            <a href="https://linkedin.com" target='_blank' rel="noreferrer">L</a>
          </IconList>
        </Left>

        <MenuItems>
          <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
          <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
          <Item onClick={() => scrollTo('team')}>Team</Item>
          <Item onClick={() => scrollTo('faq')}>FAQ</Item>
        </MenuItems>
      </Container>

      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Panda Core. Todos os direitos reservados.
        </span>
        <Button text="Fale Conosco" link="mailto:contato@exemplo.com" />
      </Bottom>
    </Section>
  );
};

export default Footer;
