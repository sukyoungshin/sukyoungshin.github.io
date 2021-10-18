import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import './ProjectPagination.css';

function ProjectPagination({ projectContent, projectIndex, setProjectIndex }) {

  // ⭕ 인덱스... 심각 ⭕
  const prevProjectHandler = () => {
    if (projectIndex <= 0) return;
    setProjectIndex(projectIndex - 1)
    console.log(projectIndex);
  };
  const nextProjectHandler = () => {
    //  0, 1, 2    <   3 - 1
    if (projectIndex < projectContent.length - 1) {
      setProjectIndex(projectIndex + 1);
    } 
  };

  useEffect(() => {
    console.log(projectIndex);
  }, [projectIndex])

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
        {projectIndex + 1}
        /
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