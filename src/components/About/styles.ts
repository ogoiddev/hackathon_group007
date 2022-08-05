import styled from 'styled-components';

export const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: transparent;
`;


export const AboutTitle = styled.h1`
    padding: 0 2rem;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    width: 60%;
    min-width: 400px;
    height: 100%;
    font-size: 3rem;
    text-shadow: 2px 2px 3px ${props => props.theme.colors.purpleLight};
    margin: 150px 10%;
    
    span {
      font-size: 2rem;
      text-shadow: none;
      line-height: 1;
    }
    

    z-index: 11;
  `

export const Button = styled.button`
    align-self: flex-start;
    border-radius: 0.5rem;
    margin-top: 3rem;
    padding: 2rem 4rem;
    background: ${props => props.theme.colors.purpleDark};
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
    line-height: .1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.2)
    }
`



