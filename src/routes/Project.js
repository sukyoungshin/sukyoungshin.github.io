import React from 'react';
import { Main } from '../Styled';
import './Project.css';

function Project() {
  return (
    <Main>
      <h2>Project</h2>
      <section className="description">
        <p>다음과 같은 프로젝트를 진행했습니다.</p>
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
  );
};

export default Project;