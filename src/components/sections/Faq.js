import React from 'react';
import styled from 'styled-components';

// 1. Dados extraídos para um array (facilita manutenção ou consumo de API no futuro)
const faqData = [
  {
    id: 1,
    question: "Como funciona o sistema?",
    answer: "Aqui você coloca a explicação detalhada de como o seu sistema ou serviço funciona."
  },
  {
    id: 2,
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartões de crédito, Pix e boletos bancários."
  },
  {
    id: 3,
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, o cancelamento pode ser feito a qualquer momento através do seu painel."
  }
];

// 2. Estilização dos componentes
const FaqSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  /* Herda a fonte Dancing Script do seu GlobalStyles ou você pode sobrescrever aqui */
`;

const FaqItem = styled.details`
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.3s ease;

  /* Estiliza o resumo quando o detalhe está aberto */
  &[open] summary {
    margin-bottom: 1rem;
    color: #0056b3; /* Cor de destaque */
  }
`;

const Question = styled.summary`
  font-weight: bold;
  cursor: pointer;
  list-style: none; /* Remove a setinha padrão em alguns navegadores */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Customizando a setinha do details/summary */
  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: '+';
    font-size: 1.5rem;
  }

  /* Muda o ícone quando aberto */
  ${FaqItem}[open] &::after {
    content: '-';
  }
`;

const Answer = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
`;

// 3. Componente Principal
const Faq = () => {
  return (
    <FaqSection id="faq">
      <Title>Perguntas Frequentes</Title>
      
      {/* 4. Renderização dinâmica (Map) */}
      {faqData.map((item) => (
        <FaqItem key={item.id}>
          <Question>{item.question}</Question>
          <Answer>{item.answer}</Answer>
        </FaqItem>
      ))}
    </FaqSection>
  );
};

export default Faq;
