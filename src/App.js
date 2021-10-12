import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { SiNotion } from 'react-icons/si';
import './App.css';

const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  h2 {
    margin: 56px 0 0 0px;
  }
  p {
    margin: 0;
  }
`;
const Section = styled.section`

  h3 {
    margin: 0;
    font-size: 16px;
  }

  ul {
    margin: 8px 0 0 0;
    padding: 0;
    list-style: none;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    grid-gap: 8px;
  }
`;

function App() {
  return (
    <div className="app-container"> 

    {/* 햄버거 아이콘 */}
    <a href="#">
      <div className="menu-icon">
        <span></span>
      </div>
    </a>

    {/* 모달창 */}
    {/* <div className="menu-modal">
      MODAL
    </div> */}

    <Switch>
    {/* HOME */}
    <Route exact path="/">
      <div className="app-container-bg"></div>
      <div className="app-container-text">
        <h1>Hi, I'm Frontend Developer</h1>
      </div>
    </Route>

    {/* about */}
    <Route exact path="/about">
      <Main>
        <h2>About me</h2>
        <section className="introduce-summary-wrapper">
          <img src="/assets/profile.png" alt="프로필사진" />
          <ul className="introduce-summary">
            <li>신수경</li>
            <li>010 8949 6027</li>
            <li>sukyoung.dev@gmail.com</li>
            <li>GitHub, Velog, CodePen</li>
          </ul>
        </section>
        <section className="introduce">
          <p>안녕하세요! </p>
          <p>프론트앤드 개발자가 되기 위해, 국비 과정(3개월) 및 일반과정(6개월)을 수료하였으며 HTML, CSS, JavaScript, React js를 학습하였습니다. </p>
          <p>실무에 바로 투입될 수 있는 실력을 갖추기 위해 HTTP, Redux, Firebase 강의를 듣고 개인프로젝트를 진행하며 부족한 부분을 채워나가고 있습니다. 이 후 React Native와 Node.js, TypeScript를 공부할 예정입니다.</p>
          <p>약 3년간 글로벌기업에서 서비스담당자로 근무하며 영문 구글링을 통해 문제를 해결했던 경험이 있어, 필요한 문서를 빠르게 찾고 StackOverflow나 공식Document의 원문을 볼 수 있는 강점을 갖추고 있습니다.</p>
        </section>
        <section className="introduce-hashtag">
          <h3>저는 이런 개발자입니다.</h3>
          <span className="hashtag">#화려한_기술보다는_기본기에_충실하는&nbsp;</span>
          <span className="hashtag">#피드백을_적극_수용하고_발전하는&nbsp;</span>
          <span className="hashtag">#협업의_중요성을_알고있는&nbsp;</span>
        </section>
      </Main>
    </Route>

    {/* myskill */}
    <Route exact path="/experience">
      <Main>
        <h2>Experience</h2>
        <section className="description">
          프론트앤드 개발자와 관련있는 저의 경험 및 경력사항은 다음과 같습니다. 
          더 자세한 이력사항은 <span className="bold"><SiNotion /> notion</span> 을 참고해주세요. :)
        </section>
        <Section>
          <h3>Education</h3>
          <ul>
            <li><span className="hightlight">2021.06 ~ 2021.09</span> 프론트앤드 일반과정</li>
            <li><span className="hightlight">2021.03 ~ 2021.06</span> UI/UX 웹퍼블리셔 & 프론트엔드 개발자 양성과정(국비)</li>
            <li><span className="hightlight">2020.11 ~ 2021.02</span> 프론트앤드 일반과정</li>
            <li><span className="hightlight">2008.03 ~ 2012.03</span> 성결대 영어영문 졸업 (4.09 / 4.5)</li>
          </ul>
        </Section>
        <Section style={{ margin: '16px 0 0 0'}}>
          <h3>Certificate</h3>
          <ul>
            <li><span className="hightlight">2021.04.30</span> 웹디자인기능사</li>
            <li><span className="hightlight">2020.10.25</span> TOEIC 860점</li>
            <li><span className="hightlight">2003.12.22</span> 정보처리기능사</li>
          </ul>
        </Section>
      </Main>
    </Route>

    {/* project */}
    <Route exact path="/project">
      <Main>
        <h2>Project</h2>
        <section className="description">
          다음과 같은 프로젝트를 진행했습니다.
        </section>
        <section className="project-detail-wrapper">
          <article className="project-image">
            이미지/비디오 
          </article>
          {/* component 처리 */}
          <article className="project-stack-wrapper">
            <div className="project-stack">
              <h3>1. 사용한 기술</h3>
              <ul>
                <li><span className="hightlight hashtag">HTML</span></li>
                <li><span className="hightlight hashtag">CSS</span></li>
                <li><span className="hightlight hashtag">jQuery</span></li>
                <li><span className="hightlight hashtag">localStorage</span></li>
                <li><span className="hightlight hashtag">kakaoAPI</span></li>
              </ul>
            </div>
            <div className="project-description">
              <h3>2. 주요기능</h3>
              <ul>
                <li>회원가입 페이지 : 정규표현식(RegExp)</li>
                <li>주문 페이지 : 지도API 활용하여 입력받은 주소지의 좌표값을 지도 위에 나타냄</li>
                <li>주문완료 페이지 : localStorage 활용</li>
                <li>웹사이트 반응형</li>
              </ul>
            </div>
            <div className="project-code">
              <p>깃허브코드/ LIVE</p>
            </div>
          </article>
          {/* // component 처리 */}
        </section>
        <section className="project-pagination">
          <span className="left-arrow bold">&#8636;</span>
          <span>1/6</span>
          <span className="right-arrow bold">&#8640;</span>
        </section>
      </Main>
    </Route>

    {/* contact */}
    <Route exact path="/contact">
      <Main>
        <h3>Contact</h3>
        <section className="description">
          이력서와 자기소개서는 <span className="bold"><SiNotion /> notion</span>에서 확인 가능합니다. <br />
          그 외의 문의사항은 언제든 아래 폼으로 연락주시길 바랍니다.
        </section>
        <section className="contact-info">
          <form action="">
            <table>
              <tbody>
              <tr>
                <th>성함</th>
                <td><input type="text" placeholder="홍길동" autoFocus required /></td>
              </tr>
              <tr>
                <th>이메일</th>
                <td><input type="email" placeholder="admin@naver.com" required /></td>
              </tr>
              <tr>
                <th>연락처</th>
                <td><input type="text" placeholder="010 0000 0000" required /></td>
              </tr>
              <tr>
                <th>제목</th>
                <td><input type="text" placeholder="제목" /></td>
              </tr>
              <tr className="content">
                <th>내용</th>
                <td>
                  <textarea name="" id="" defaultValue=" " required></textarea>
                </td>
              </tr>
              </tbody>
            </table>               
            <button type="submit">제출</button>
          </form>
        </section>
        <footer>
          &copy; 2021, SU-KYOUNG SHIN. ALL RIGHTS ARE RESERVED
        </footer>
      </Main>
    </Route>

    </Switch>
    </div>
  );
};

export default App;
