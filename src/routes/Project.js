import React, { useState } from 'react';
import ProjectIntroduce from '../components/ProjectIntroduce';
import ProjectPagination from '../components/ProjectPagination';
import { Main } from '../Styled';
import { projectContent } from '../utilities/projectContent';

function Project() {

  const [ projectIndex, setProjectIndex ] = useState(0); // 프로젝트 배열 index#

  return (
    <Main>
      <h2>Project</h2>
      {/* 프로젝트 설명 */}
      <section className="description">
        <p>다음과 같은 프로젝트를 진행했습니다.</p>
      </section>
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
    </Main>
  );
};

export default Project;