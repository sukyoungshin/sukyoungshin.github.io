import React from 'react';
import './ProjectPagination.css';

const ProjectPagination = ({ projectContent, projectIndex, setProjectIndex }) => {
  
  // projectIndex : 0, 1, 2     
  // projectContent.length : 3 
  // 0 <= projectIndex < 3
  const prevProjectHandler = () => {
    if (projectIndex <= 0) return;
    setProjectIndex(projectIndex - 1)
  };
  const nextProjectHandler = () => {
    if (projectIndex < projectContent.length - 1) {
      setProjectIndex(projectIndex + 1);
    } 
  };

  return (
    <section className="project-pagination">
      {/* prev 버튼 */}
      <button 
        type="button" 
        className="left-arrow"
        onClick={prevProjectHandler}
      >
        &#8636;
      </button>

      {/* 현재 페이지 / 전체 프로젝트 갯수 */}
      <span>
        <span className="pink">{projectIndex + 1}</span>
        &nbsp;/&nbsp;
        {projectContent.length}
      </span>

      {/* next 버튼 */}
      <button 
        type="button" 
        className="right-arrow"
        onClick={nextProjectHandler}
      >
        &#8640;
      </button>
    </section>
  );
};

export default ProjectPagination;