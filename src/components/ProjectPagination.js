import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import './ProjectPagination.css';

function ProjectPagination({ projectContent, projectIndex, setProjectIndex }) {
  
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

  // useState()의 setState는 이벤트 핸들러 내에서 비동기적으로 동작한다.
  // 즉, proejectIndex가 비동기적으로 동작하기 때문에, 콘솔에 찍으면 가장 마지막의 값이 나타나지 않음.
  // 따라서 값이 제대로 들어왔는지 확인하고 싶으면 useEffect 내부에서 확인해야함
  useEffect(() => {
    console.log(projectIndex + 1);
  }, [projectIndex]);

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