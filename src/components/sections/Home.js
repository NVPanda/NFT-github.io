import React from 'react';
import styled from 'styled-components';

// 1. Corrigido para styled.section (minúsculo)
const Section = styled.section`
  /* Calcula a altura descontando o Header para evitar scroll desnecessário */
  min-height: ${props => `calc(100vh - ${props.theme.navHeight || '5rem'})`};
  width: 100%; /* Use 100% em vez de 100vw para evitar scroll horizontal indesejado */
  position: relative;
  background-color: ${props => props.theme.body};
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Responsividade: empilha os itens em telas menores */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    gap: 2rem;
    padding: 2rem 0;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Section>
      <Container> 
        <Box>
          <h1>Texto Principal</h1>
          <p>Sua descrição ou chamada para ação (CTA) aqui.</p>
        </Box>
        
        <Box>
          {/* Placeholder para o que será seu vídeo ou animação */}
          <h1>Vídeo/Animação</h1>
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
