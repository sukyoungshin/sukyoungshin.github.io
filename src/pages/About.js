import React from 'react';
import { SiGithub } from 'react-icons/si';
import { MainWrapper, Description, AboutIntroSection, AboutHashtagSection, HashTag } from '../Styled';
import ProfileImg from '../img/profile.png';

const Hashtags = [
  {
    id: 1,
    description: '#화려한_기술보다는_기본기에_충실하는',
  }, 
  {
    id: 2,
    description: '#피드백을_적극_수용하고_개선하는',
  }, 
  {
    id: 3,
    description: '#협업의_중요성을_알고있는',
  }
];

const About = () => {
  return (
    <MainWrapper>
      <h2>About me</h2>
      <Description>
        <img src={ProfileImg} alt="프로필사진" />
        <ul>
          <li>
            신수경
          </li>
          <li>
            010 8949 6027
          </li>
          <li>
            <a 
              href="mailto:sukyoung.dev@gmail.com" 
              title="이메일 전송하기"
            >
              sukyoung.dev@gmail.com
            </a>
          </li>
          <li> 
            <a 
              href="https://github.com/sukyoungshin" 
              target="_blank" 
              rel="noreferrer" 
              title="깃허브로 이동하기"
            >
              github <SiGithub />
            </a> 
          </li>
        </ul>
      </Description>
      <AboutIntroSection>
        <p className="greet">안녕하세요!</p> 
        <p>
          프론트앤드 개발자가 되기 위해, 
          국비 과정(3개월) 및 일반과정(6개월)을 수료하였으며 
          HTML, CSS, JavaScript, React js를 학습하였습니다. 
        </p>
        <p>
          최신 기술 동향 파악을 위해서 매주 daily dev와 geekNews를 읽으며, 
          온라인 교육 강좌를 듣고 개인프로젝트를 진행하며 부족한 부분을 채워나가고 있습니다. 
          현재는 팀 프로젝트를 진행하며 SWR과 React Native를 공부하고 있으며, 
          TypeScript를 공부할 계획입니다.
        </p>
        <p>
          약 3년간 글로벌기업에서 서비스담당자로 근무하며 영문 구글링을 통해 문제를 해결했던 경험이 있습니다. 
          필요한 문서를 빠르게 찾고 StackOverflow나 공식Document의 원문을 볼 수 있는 강점을 갖추고 있습니다.
        </p>
      </AboutIntroSection>
      <AboutHashtagSection>
        <h3>저는 이런 개발자입니다.</h3>
        <ul>
          {Hashtags.map((hashtag) => (
            <li key={hashtag.id}>
              <HashTag>{hashtag.description}</HashTag>
            </li>
          ))}
        </ul>
      </AboutHashtagSection>
    </MainWrapper>
  );
};

export default About;