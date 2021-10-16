import React from 'react';
import './ProjectSlider.css';

function ProjectSlider({ projectContent }) {
  return (
    <section className="project-detail-wrapper">
      <div className="project-image-wrapper">이미지/비디오</div>
      <div className="project-content-wrapper">
        <div className="project-stack">
          <h3>1. 사용한 기술</h3>
          <ul>
            <li><span className="hightlight hashtag">HTML</span></li>
            <li><span className="hightlight hashtag">CSS</span></li>
            <li><span className="hightlight hashtag">React.js</span></li>
          </ul>
        </div>
        <div className="project-code">
          <h3>2. 링크</h3>
          <ul>
            <li>
              깃허브 코드 
              / 
              라이브 데모
            </li>
          </ul>
        </div>
        <div className="project-description">
          <h3>3. 주요기능</h3>
          <ul>
            <li>회원가입 페이지 : 정규표현식(RegExp)</li>
            <li>주문 페이지 : 카카오맵API 활용하여 입력받은 주소지의 좌표값을 지도 위에 나타냄</li>
            <li>주문완료 페이지 : localStorage 활용</li>
            <li>웹사이트 반응형</li>

            <li>회원가입 페이지 : 정규표현식(RegExp)</li>
            <li>주문 페이지 : 지도API 활용하여 입력받은 주소지의 좌표값을 지도 위에 나타냄</li>
            <li>주문완료 페이지 : localStorage 활용</li>
            <li>웹사이트 반응형</li>
            <li>회원가입 페이지 : 정규표현식(RegExp)</li>
            <li>주문 페이지 : 지도API 활용하여 입력받은 주소지의 좌표값을 지도 위에 나타냄</li>
            <li>주문완료 페이지 : localStorage 활용</li>
            <li>웹사이트 반응형</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;