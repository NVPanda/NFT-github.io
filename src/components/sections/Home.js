import React from 'react'
import Styled from 'styled-components'


const Section = Styled.Section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.text};
`

const Container = Styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

`

const Home = () => {
  return (
    <Section>
    <Container> 
      <h1>Text</h1>
      <h1>Video</h1>
    </Container>
    </Section>
  );
}

export default Home;