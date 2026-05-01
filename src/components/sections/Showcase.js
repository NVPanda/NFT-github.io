import React from 'react';
import styled from 'styled-components';

// 1. Dados dos itens (Exemplo: Coleção de NFTs, Projetos ou Produtos)
const showcaseData = [
  { id: 1, title: "Cyber Panda #01", price: "0.5 ETH", img: "https://via.placeholder.com/300" },
  { id: 2, title: "Cyber Panda #02", price: "0.8 ETH", img: "https://via.placeholder.com/300" },
  { id: 3, title: "Cyber Panda #03", price: "1.2 ETH", img: "https://via.placeholder.com/300" },
  { id: 4, title: "Cyber Panda #04", price: "0.4 ETH", img: "https://via.placeholder.com/300" },
  { id: 5, title: "Cyber Panda #05", price: "0.9 ETH", img: "https://via.placeholder.com/300" },
  { id: 6, title: "Cyber Panda #06", price: "1.5 ETH", img: "https://via.placeholder.com/300" },
];

// 2. Estilização
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-transform: capitalize;
  color: ${props => props.theme.text};
  margin-bottom: 3rem;
  border-bottom: 2px solid ${props => props.theme.text};
`;

const Container = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;
  justify-items: center;

  @media (max-width: 640px) {
    width: 95%;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid ${props => props.theme.text};
  position: relative;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 1rem;
  transform: translateY(100%);
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ImgContainer}:hover & {
    transform: translateY(0);
  }

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #ccc;
  }

  h4 {
    font-size: 1.1rem;
  }
`;

const Showcase = () => {
  return (
    <Section id="showcase">
      <Title>Showcase</Title>
      <Container>
        {showcaseData.map((item) => (
          <ImgContainer key={item.id}>
            <img src={item.img} alt={item.title} />
            <Details>
              <div>
                <span>Item</span>
                <h4>{item.title}</h4>
              </div>
              <div>
                <span>Preço</span>
                <p>{item.price}</p>
              </div>
            </Details>
          </ImgContainer>
        ))}
      </Container>
    </Section>
  );
};

export default Showcase;
