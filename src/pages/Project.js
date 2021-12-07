import React, { useState } from 'react';
import ProjectIntroduce from '../components/ProjectIntroduce';
import ProjectPagination from '../components/ProjectPagination';
import { MainWrapper, Description } from '../Styled';
import { projectContent } from '../utilities/projectContent';

const Project = () => {

  const [ projectIndex, setProjectIndex ] = useState(0); // 프로젝트 배열 index#

  return (
    <MainWrapper>
      <h2>Project</h2>
      {/* 프로젝트 설명 */}
      <Description>
        <p>다음과 같은 프로젝트를 진행했습니다.</p>
      </Description>
      {/* 프로젝트 상세 소개 */}
      <ProjectIntroduce 
        projectContent={projectContent[projectIndex]} 
      />
      {/* 프로젝트 페이지네이션 */}
      <ProjectPagination 
        projectContent={projectContent} 
        projectIndex={projectIndex}
        setProjectIndex={setProjectIndex}
      />
    </MainWrapper>
  );
};

export default Project;