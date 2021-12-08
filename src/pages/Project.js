import React, { useState } from 'react';
import ProjectIntroduce from '../components/ProjectIntroduce';
import ProjectPagination from '../components/ProjectPagination';
import { projectContent } from '../utilities/projectContent'; // DATA
import { MainWrapper, Description } from '../Styled'; // STYLE

const Project = () => {

  const [ projectIndex, setProjectIndex ] = useState(0); // 프로젝트 배열 index#

  return (
    <MainWrapper>
      <h2>Project</h2>

      <Description>
        <p>다음과 같은 프로젝트를 진행했습니다.</p>
      </Description>

      <ProjectIntroduce 
        projectContent={projectContent[projectIndex]} 
      />

      <ProjectPagination 
        projectContent={projectContent} 
        projectIndex={projectIndex}
        setProjectIndex={setProjectIndex}
      />
    </MainWrapper>
  );
};

export default Project;