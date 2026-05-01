import React from 'react';
import styled from 'styled-components';

// 1. Corrigido para styled.button e adicionado position: relative
const Btn = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  outline: none;
  border: none;
  font-size: ${props => props.theme.fontsm || '0.875rem'};
  padding: 0.9rem 2.3rem; /* Corrigido de 2.3em para rem para consistência */
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative; /* Essencial para o posicionamento do pseudo-elemento :after */

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem; /* Corrigido de 0,3rem para 0.3rem */
  }
`;

// 2. Componente Reutilizável
const Button = ({ text, link }) => {
  return (
    <a href={link} aria-label={text} target="_blank" rel="noreferrer">
      <Btn>
        {text}
      </Btn>
    </a>
  );
};

export default Button;
