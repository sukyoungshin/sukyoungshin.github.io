import React from 'react';
import { Main, Section } from '../Styled';
import { SiNotion } from 'react-icons/si';

function Experience() {
  return (
    <Main>
      <h2>Experience</h2>
      <section className="description">
        <p>
          프론트앤드 개발자와 관련있는 저의 경험 및 경력사항은 다음과 같습니다. 
          더 자세한 이력사항은 <a href="#"><span className="bold"><SiNotion /> notion</span></a> 을 참고해주세요. :)
        </p>
      </section>
      <Section>
        <h3>Education</h3>
        <ul>
          <li>
            <span className="hightlight">2021.06 ~ 2021.09</span>
            <span className="edu"> 프론트앤드 일반과정</span>
          </li>
          <li>
            <span className="hightlight">2021.03 ~ 2021.06</span>
            <span className="edu"> UI/UX 웹퍼블리셔 & 프론트엔드 개발자 양성과정(국비)</span>
          </li>
          <li>
            <span className="hightlight">2020.11 ~ 2021.02</span>
            <span className="edu"> 프론트앤드 일반과정</span>
          </li>
          <li>
            <span className="hightlight">2008.03 ~ 2012.03</span>
            <span className="edu">성결대 영어영문 졸업 (4.09 / 4.5)</span>
          </li>
        </ul>
      </Section>
      <Section style={{ margin: '16px 0 0 0'}}>
        <h3>Certificate</h3>
        <ul>
          <li>
            <span className="hightlight">2021.04.30</span> 
            <span className="edu"> 웹디자인기능사</span>
            </li>
          <li>
            <span className="hightlight">2020.10.25</span>
            <span className="edu"> TOEIC 860점</span>
          </li>
          <li>
            <span className="hightlight">2003.12.22</span>
            <span className="edu"> 정보처리기능사</span>
          </li>
        </ul>
      </Section>
    </Main>
  );
};

export default Experience;