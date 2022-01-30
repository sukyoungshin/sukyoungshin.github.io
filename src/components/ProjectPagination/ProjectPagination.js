import React from 'react';
import { PaginationWrapper, PaginationButton, Span } from './ProjectPagination.style';

const ProjectPagination = ({ projectDatas, projectIndex, setProjectIndex }) => {

  const prevProjectHandler = () => {
    if (projectIndex <= 0) return;
    setProjectIndex(projectIndex - 1)
  };
  const nextProjectHandler = () => {
    if (projectIndex < projectDatas.length - 1) {
      setProjectIndex(projectIndex + 1);
    } 
  };

  return (
    <PaginationWrapper>
      {/* prev 버튼 */}
      <PaginationButton 
        type="button" 
        onClick={prevProjectHandler}
      >
        &#8636;
      </PaginationButton>

      {/* 현재 페이지 / 전체 프로젝트 갯수 */}
      <Span>
        <span className="pink">{projectIndex + 1}</span>
        {' '} / {' '}
        {projectDatas.length}
      </Span>

      {/* next 버튼 */}
      <PaginationButton 
        type="button" 
        onClick={nextProjectHandler}
      >
        &#8640;
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default ProjectPagination;