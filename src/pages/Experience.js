import React from 'react';
import { MainWrapper, Description, MainSection, HightLight, Bold } from '../Styled';
import { SiNotion } from 'react-icons/si';

const Experience = () => {
  return (
    <MainWrapper>
      <h2>Experience</h2>
      <Description>
        <p>
          프론트앤드 개발자와 관련있는 저의 경험 및 경력사항은 다음과 같습니다. 
          더 자세한 이력사항은 {' '}
          <a 
            href="https://www.notion.so/8e50ff3d1f934c378982a264f27e307e" 
            target="_blank" 
            rel="noreferrer" 
            title="노션 바로가기"
          >
            <Bold>
              <SiNotion /> notion
            </Bold>
          </a> 
          을 참고해주세요. :)
        </p>
      </Description>
      <MainSection>
        <h3>Education</h3>
        <ul className="education">
          <li>
          <p>
            <HightLight>2021.06 ~ 2021.09</HightLight>
            {' '}프론트앤드 일반과정
          </p>
          </li>
          <li>
          <p>
            <HightLight>2021.03 ~ 2021.06</HightLight>
            {' '}UI/UX 웹퍼블리셔 & 프론트엔드 개발자 양성과정(국비)
          </p>
          </li>
          <li>
          <p>
            <HightLight>2020.11 ~ 2021.02</HightLight>
            {' '}프론트앤드 일반과정
          </p>
          </li>
          <li>
          <p>
            <HightLight>2008.03 ~ 2012.03</HightLight>
            {' '}성결대 영어영문 졸업 (4.09 / 4.5)
          </p>
          </li>
        </ul>
      </MainSection>
      <MainSection style={{ margin: '24px 0 0 0'}}>
        <h3>Certificate</h3>
        <ul className="certificate">
          <li>
          <p>
            <HightLight>2021.04.30</HightLight> 
            {' '}웹디자인기능사
          </p>
          </li>
          <li>
          <p>
            <HightLight>2020.10.25</HightLight>
            {' '}TOEIC 860점
          </p>
          </li>
          <li>
          <p>
            <HightLight>2003.12.22</HightLight>
            {' '}정보처리기능사
          </p>
          </li>
        </ul>
      </MainSection>
    </MainWrapper>
  );
};

export default Experience;