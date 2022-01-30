import React from 'react';
import { StyledMainWrapper, StyledSectionDescription, StyledSectionContent, StyledSpanHightLight, StyledSpanBold } from './Experience.style';
import { SiNotion } from 'react-icons/si';

const Experience = () => {
  return (
    <StyledMainWrapper>
      <h2>Experience</h2>
      <StyledSectionDescription>
        <p>
          프론트앤드 개발자와 관련있는 저의 경험 및 경력사항은 다음과 같습니다. 
          더 자세한 이력사항은 {' '}
          <a 
            href="https://www.notion.so/8e50ff3d1f934c378982a264f27e307e" 
            target="_blank" 
            rel="noreferrer" 
            title="노션 바로가기"
          >
            <StyledSpanBold>
              <SiNotion /> notion
            </StyledSpanBold>
          </a> 
          을 참고해주세요. :)
        </p>
      </StyledSectionDescription>
      <StyledSectionContent>
        <h3>Education</h3>
        <ul className="education">
          <li>
          <p>
            <StyledSpanHightLight>2021.06 ~ 2021.09</StyledSpanHightLight>
            {' '}프론트앤드 일반과정
          </p>
          </li>
          <li>
          <p>
            <StyledSpanHightLight>2021.03 ~ 2021.06</StyledSpanHightLight>
            {' '}UI/UX 웹퍼블리셔 & 프론트엔드 개발자 양성과정(국비)
          </p>
          </li>
          <li>
          <p>
            <StyledSpanHightLight>2020.11 ~ 2021.02</StyledSpanHightLight>
            {' '}프론트앤드 일반과정
          </p>
          </li>
          <li>
          <p>
            <StyledSpanHightLight>2008.03 ~ 2012.03</StyledSpanHightLight>
            {' '}성결대 영어영문 졸업 (4.09 / 4.5)
          </p>
          </li>
        </ul>
      </StyledSectionContent>
      <StyledSectionContent style={{ margin: '24px 0 0 0'}}>
        <h3>Certificate</h3>
        <ul className="certificate">
          <li>
          <p>
            <StyledSpanHightLight>2021.04.30</StyledSpanHightLight> 
            {' '}웹디자인기능사
          </p>
          </li>
          <li>
          <p>
            <StyledSpanHightLight>2020.10.25</StyledSpanHightLight>
            {' '}TOEIC 860점
          </p>
          </li>
          <li>
          <p>
            <StyledSpanHightLight>2003.12.22</StyledSpanHightLight>
            {' '}정보처리기능사
          </p>
          </li>
        </ul>
      </StyledSectionContent>
    </StyledMainWrapper>
  );
};

export default Experience;