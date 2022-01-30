import React from 'react';
import { Link } from "react-router-dom";
import { StyledSection, StyledArticleImgWrapper, StyledArticleContentWrapper, StyledDivTitle, StyledDivTechStack, StyledDivURL, StyleDivdDescription, HightLight } from './ProjectIntroduce.style';

const ProjectIntroduce = ({ projectDatas }) => {

  return (
    <StyledSection>
      <StyledArticleImgWrapper>
        <ul>
        {
          projectDatas.img.map((image, idx) => (
            <Link 
              key={idx} 
              to={`/img/${idx}`}
              state={{ imageURL : image, projectDatas : projectDatas }}
            >
              <li>
                <img src={image} alt={`프로젝트 ${idx}번째 이미지`} />
              </li>
            </Link>
          ))
        }
        </ul>
      </StyledArticleImgWrapper>
      <StyledArticleContentWrapper>
        <StyledDivTitle>
          <h3>1. 프로젝트명 </h3>
          <p>{projectDatas.title}</p>
        </StyledDivTitle>
        <StyledDivTechStack>
          <h3>2. 사용한 기술</h3>
          <ul>
            {
              projectDatas.techStack.map(
                (stack, idx) => (
                  <li key={idx}>
                    <HightLight>{stack}</HightLight>
                  </li>
                )
              )
            }
          </ul>
        </StyledDivTechStack>
        <StyledDivURL>
          <h3>3. 링크</h3>
          <ul>
            <li>
              <a href={projectDatas.url.live} target="_blank" rel="noreferrer">LIVE DEMO</a>
              {' '} / {' '}
              <a href={projectDatas.url.github} target="_blank" rel="noreferrer">GitHub 코드</a>
            </li>
          </ul>
        </StyledDivURL>
        <StyleDivdDescription>
          <h3>4. 주요기능</h3>
          <ul>
            {
              projectDatas.feature.map((feat, idx) => (
                <li key={idx}>
                  {feat}
                </li>
              ))
            }
          </ul>
        </StyleDivdDescription>
      </StyledArticleContentWrapper>
    </StyledSection>
  );
};

export default ProjectIntroduce;