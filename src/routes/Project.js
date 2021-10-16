import React from 'react';
import ProjectPagination from '../components/ProjectPagination';
import ProjectSlider from '../components/ProjectSlider';
import { projectContent } from '../utilities/projectContent';
import { Main } from '../Styled';

function Project() {

  
  return (
    <Main>
      <h2>Project</h2>
      {/* 프로젝트 설명 */}
      <section className="description">
        <p>다음과 같은 프로젝트를 진행했습니다.</p>
      </section>
      {/* 슬라이더 */}
      <ProjectSlider projectContent={projectContent} />
      {/* 슬라이더 페이지네이션 */}
      <ProjectPagination projectContent={projectContent} />
    </Main>
  );
};

export default Project;