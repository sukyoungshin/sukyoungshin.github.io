import React from 'react';
import { HomeBgWrapper, HomeTextWrapper } from '../Styled';
import bgImg from '../img/main.jpg';

const Home = () => {
  return (
    <>
    <HomeBgWrapper bgImg={bgImg} />
    <HomeTextWrapper>
      <h1>Hi, I'm Frontend Developer</h1>
    </HomeTextWrapper>
    </>
  );
};

export default Home;