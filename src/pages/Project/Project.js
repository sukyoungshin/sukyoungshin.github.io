import React, { useState } from 'react';
import { ProjectIntroduce, ProjectPagination } from 'components';
import { projectDatas } from 'mock/ProjectDatas';
import { StyledMainWrapper, StyledSectionDescription } from './Project.style';

const Project = () => {
  const [ projectIndex, setProjectIndex ] = useState(0); // 프로젝트 배열 index#

  return (
    <StyledMainWrapper>
      <h2>Project</h2>

      <StyledSectionDescription>
        <p>다음과 같은 프로젝트를 진행했습니다.</p>
      </StyledSectionDescription>

      <ProjectIntroduce 
        projectDatas={projectDatas[projectIndex]} 
      />

      <ProjectPagination 
        projectDatas={projectDatas} 
        projectIndex={projectIndex}
        setProjectIndex={setProjectIndex}
      />
    </StyledMainWrapper>
  );
};

export default Project;