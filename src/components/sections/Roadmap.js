import React from 'react';
import styled from 'styled-components';

// 1. Dados do Roadmap (Organize suas metas aqui)
const roadmapData = [
  { title: "Fase 1", subtitle: "Fundação", desc: "Desenvolvimento do núcleo do sistema e arquitetura base." },
  { title: "Fase 2", subtitle: "Expansão", desc: "Implementação de funcionalidades avançadas e integrações de API." },
  { title: "Fase 3", subtitle: "Segurança", desc: "Refatoração de código e auditoria contra injeções e vulnerabilidades." },
  { title: "Fase 4", subtitle: "Lançamento", desc: "Deploy da versão beta e feedback dos usuários." },
];

// 2. Estilização
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 4rem;
  border-bottom: 2px solid ${props => props.theme.text};
  /* Se estiver usando a Dancing Script do global, ela será aplicada aqui */
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  /* A linha central da timeline */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.text};
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    width: 90%;
    &::before { left: 10px; }
  }
`;

const Item = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  justify-content: ${props => (props.align === 'right' ? 'flex-end' : 'flex-start')};
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 40px;
  }
`;

const Box = styled.div`
  width: 40%;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 12px;
  background-color: ${props => props.theme.body};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }

  h3 { font-size: 1.2rem; color: #ff4d4d; } /* Exemplo de cor de destaque */
  h4 { margin: 0.5rem 0; }
  p { font-size: 0.9rem; opacity: 0.8; }

  @media (max-width: 768px) { width: 100%; }
`;

// O círculo na linha do tempo
const Circle = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.theme.text};
  z-index: 1;

  @media (max-width: 768px) { left: 10px; }
`;

const Roadmap = () => {
  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        {roadmapData.map((step, index) => (
          <Item key={index} align={index % 2 === 0 ? 'left' : 'right'}>
            <Circle />
            <Box>
              <h3>{step.title}</h3>
              <h4>{step.subtitle}</h4>
              <p>{step.desc}</p>
            </Box>
          </Item>
        ))}
      </Container>
    </Section>
  );
};

export default Roadmap;
