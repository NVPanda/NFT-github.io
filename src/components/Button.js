import React from 'react'
import Styled from 'styled-components'

const Btn = Styled.button`

display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;
font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3em;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
  transform: scale(0.9);
}

&:after{
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

&:hover::after{
  transform: scale(1);
  padding: 0,3rem;
}
`



const Button = ({text, link}) => {
  return
    <Btn>
<a href={link} aria-label={text} target="_blank" rel="noreferrer">
{text}
    <a href={'https://www.binance.com/en/nft/my-nfts/disparattechno-0b912ff682faf6da0863d45e1dbd9500'} aria-label={text} target="_blank" rel="noreferrer" >
<Btn>{'Discord Coding Community College'}</Btn>
</a>
    </Btn>
  )
}

export default Button