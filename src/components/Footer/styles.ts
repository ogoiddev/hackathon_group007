import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  
  
  background-color: ${props => props.theme.colors.purple};
  color: ${props => props.theme.fontColors.white};
  width: 100%;
  min-width: 370px;
  padding-top: 50px;
  
  
  z-index: 111;
  
  position: relative;
  

  a {
    text-decoration: none;
    color: ${props => props.theme.fontColors.grayLight};
  }


`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 28px;
  min-width: 70%;
  

`

export const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  

  svg {
  margin-top: 18px;
  object-fit: fit-content;
  align-self: center;
  }


`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 220px;
  height: fit-content;
  
  h3 {
  align-self: start;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  }

  p {
  margin-bottom: 20px;
  max-width: 200px;
  }

  ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 100px;
  }

  li {
  color: ${props => props.theme.fontColors.grayLight};
  }

  

`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  flex-wrap: wrap;
  padding: 15px 30px;
  gap: 15px;

  

  
`


export const SocialNetworks = styled.div`
  svg {
    margin-right: 10px;
  }

`

export const Copyright = styled.span`
  color: ${props => props.theme.fontColors.grayLight};
  text-align: center;
  
  
`
