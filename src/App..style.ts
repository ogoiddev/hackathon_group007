import styled from 'styled-components';

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  
  width: 100%;
  height: 100%;
  
  position: absolute;
  top: 0;
  left: 0;
  
  
  background: linear-gradient(90deg,black, rgba(2,2,2, 90%), transparent);
  `


export const AboutVideoContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  filter: brightness(0.8);
  position: fixed;
  z-index: -10;
    background: transparent;
  background-color: transparent;
  `;

export const Video = styled.video`
  
  min-width: 100%;
  height: 100%;
  object-fit: fill;
    background: transparent;
  background-color: transparent;

`;