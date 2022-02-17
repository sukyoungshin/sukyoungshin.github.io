import React from 'react';
import { StyledBgWrapper, StyledTextWrapper } from './Main.style';
import bgImg from 'img/main.jpg';

const Main = () => {
  return (
    <>
    <StyledBgWrapper bgImg={bgImg} />
    <StyledTextWrapper>
      <h1>Hi, I'm<br/> Frontend<br/> Developer</h1>
    </StyledTextWrapper>
    </>
  );
};

export default Main;