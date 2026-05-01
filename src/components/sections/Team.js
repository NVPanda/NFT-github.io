import React from 'react';
import styled from 'styled-components';

// 1. Dados da Equipe
const teamData = [
  { id: 1, name: "Panda", role: "Lead Developer", img: "https://via.placeholder.com/200" },
  { id: 2, name: "Satoshi", role: "Blockchain Specialist", img: "https://via.placeholder.com/200" },
  { id: 3, name: "Linus", role: "System Architect", img: "https://via.placeholder.com/200" },
  { id: 4, name: "Ada", role: "UI/UX Designer", img: "https://via.placeholder.com/200" },
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

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.text};
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid ${props => props.theme.text};
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

const MemberCard = styled.div`
  width: 250px;
  padding: 1rem;
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.text};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: #ff4d4d; /* Cor de destaque */
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: auto;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  ${MemberCard}:hover & img {
    filter: grayscale(0%);
  }
`;

const Name = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const Role = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  opacity: 0.7;
`;

const Team = () => {
  return (
    <Section id="team">
      <Title>Nossa Equipe</Title>
      <Container>
        {teamData.map((member) => (
          <MemberCard key={member.id}>
            <ImageContainer>
              <img src={member.img} alt={member.name} />
            </ImageContainer>
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
          </MemberCard>
        ))}
      </Container>
    </Section>
  );
};

export default Team;
