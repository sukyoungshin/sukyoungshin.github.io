import React from 'react';
import { Main } from '../Styled';
import { SiGithub, SiCodepen } from 'react-icons/si';
import './About.css';

function About() {
  return (
    <Main>
      <h2>About me</h2>
      <section className="introduce-summary-wrapper">
        <img src="/assets/profile.png" alt="프로필사진" />
        <ul className="introduce-summary">
          <li>신수경</li>
          <li>
            010 8949 6027
          </li>
          <li>
            <a href="mailto:sukyoung.dev@gmail.com" title="메일보내기">sukyoung.dev@gmail.com</a>
          </li>
          <li> 
            <a href="https://github.com/sukyoungshin" target="_blank" rel="noreferrer" title="깃허브"><SiGithub /> </a>, 
            <a href="https://codepen.io/fe_dev" target="_blank" rel="noreferrer" title="코드펜"> <SiCodepen /></a> , 
            Velog
          </li>
        </ul>
      </section>
      <section className="introduce">
        <p className="greet">안녕하세요!</p> 
        <p>프론트앤드 개발자가 되기 위해, 국비 과정(3개월) 및 일반과정(6개월)을 수료하였으며 HTML, CSS, JavaScript, React js를 학습하였습니다. </p>
        <p>실무에 바로 투입될 수 있는 실력을 갖추기 위해 API 및 HTTP 강의를 듣고 개인프로젝트를 진행하며 부족한 부분을 채워나가고 있습니다. 지금은 React를 공부하고 있으며, Redux와 TypeScript를 공부할 예정입니다.</p>
        <p>약 3년간 글로벌기업에서 서비스담당자로 근무하며 영문 구글링을 통해 문제를 해결했던 경험이 있어, 필요한 문서를 빠르게 찾고 StackOverflow나 공식Document의 원문을 볼 수 있는 강점을 갖추고 있습니다.</p>
      </section>
      <section className="introduce-hashtag">
        <h3>저는 이런 개발자입니다.</h3>
        <ul>
          <li>
            <span className="hashtag">#화려한_기술보다는_기본기에_충실하는&nbsp;</span>
          </li>
          <li>
            <span className="hashtag">#피드백을_적극_수용하고_발전하는&nbsp;</span>
          </li>
          <li>
            <span className="hashtag">#협업의_중요성을_알고있는&nbsp;</span>
          </li>
        </ul>
      </section>
    </Main>
  );
};

export default About;