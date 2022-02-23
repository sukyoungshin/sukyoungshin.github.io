import React from 'react';
import { SiGithub } from 'react-icons/si';
import { StyledMain, StyledSectionDescription, StyledIntroduceSection, StyledHashtagSection, StyledHashTag } from './About.style';
import ProfileImg from 'img/profile.png';

const Hashtags = [
  {
    id: 1,
    description: '#정확함을_추구하는',
  }, 
  {
    id: 2,
    description: '#영어문서_독해가능한',
  }, 
  {
    id: 3,
    description: '#꾸준한',
  }
];

const About = () => {
  return (
    <StyledMain>
      <h2>About me</h2>
      <StyledSectionDescription>
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
              className='anchor_github'
            >
              github <SiGithub />
            </a> 
          </li>
        </ul>
      </StyledSectionDescription>
      <StyledIntroduceSection>
        <p className="greet">안녕하세요!</p> 
        <p>
          프론트엔드 개발자가 되기 위해, 
          국비 과정(3개월) 및 일반과정(6개월)을 수료하였으며 
          HTML, CSS, JavaScript, React js를 학습하였습니다. 
        </p>
        <p>
          알고 있던 지식이더라도 혹시 모를 변경사항을 고려하여 한번 더 관련 레퍼런스를 체크하고 적용하는 것을 추구합니다. 
          이런 방법으로 실수를 줄여나가기 위해 노력하고 있습니다. 
        </p>
        <p>
          약 3년간 글로벌 기업에서 서비스담당자로 근무하며 영문 구글링을 통해 문제를 해결했던 경험이 있습니다. 
          필요한 문서를 빠르게 찾거나 관련 레퍼런스나 공식 문서의 원문을 볼 수 있는 강점을 갖추고 있습니다. 
        </p>
      </StyledIntroduceSection>
      <StyledHashtagSection>
        <h3>저는 이런 개발자입니다.</h3>
        <ul>
          {Hashtags.map((hashtag) => (
            <li key={hashtag.id}>
              <StyledHashTag>{hashtag.description}</StyledHashTag>
            </li>
          ))}
        </ul>
      </StyledHashtagSection>
    </StyledMain>
  );
};

export default About;