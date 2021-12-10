import React from 'react';
import { Link } from "react-router-dom";
import { ProjectWrapper, ProjectImgWrapper, ProjectContentWrapper, ProjectName, ProjectStack, ProjectURL, ProjectDescription, HightLight } from '../Styled';

const ProjectIntroduce = ({ projectContent }) => {

  return (
    <ProjectWrapper>
      <ProjectImgWrapper>
        <ul>
        {
          projectContent.img.map((image, idx) => (
            <Link 
              key={idx} 
              to={`/img/${idx}`}
              state={{ imageURL : image, projectContent : projectContent }}
            >
              <li>
                <img src={image} alt={`프로젝트 ${idx}번째 이미지`} />
              </li>
            </Link>
          ))
        }
        </ul>
      </ProjectImgWrapper>
      <ProjectContentWrapper>
        <ProjectName>
          <h3>1. 프로젝트명 </h3>
          <p>{projectContent.title}</p>
        </ProjectName>
        <ProjectStack>
          <h3>2. 사용한 기술</h3>
          <ul>
            {
              projectContent.techStack.map(
                (stack, idx) => (
                  <li key={idx}>
                    <HightLight>{stack}</HightLight>
                  </li>
                )
              )
            }
          </ul>
        </ProjectStack>
        <ProjectURL>
          <h3>3. 링크</h3>
          <ul>
            <li>
              <a href={projectContent.url.live} target="_blank" rel="noreferrer">LIVE DEMO</a>
              {' '} / {' '}
              <a href={projectContent.url.github} target="_blank" rel="noreferrer">GitHub 코드</a>
            </li>
          </ul>
        </ProjectURL>
        <ProjectDescription>
          <h3>4. 주요기능</h3>
          <ul>
            {
              projectContent.feature.map((feat, idx) => (
                <li key={idx}>
                  {feat}
                </li>
              ))
            }
          </ul>
        </ProjectDescription>
      </ProjectContentWrapper>
    </ProjectWrapper>
  );
};

export default ProjectIntroduce;