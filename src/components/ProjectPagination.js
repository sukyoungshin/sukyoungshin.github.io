import React from 'react';
import './ProjectPagination.css';

function ProjectPagination({ projectContent }) {

  console.log(projectContent);

  return (
    <section className="project-pagination">
      <span className="left-arrow bold">&#8636;</span>
      <span>1/6</span>
      <span className="right-arrow bold">&#8640;</span>
    </section>
  );
};

export default ProjectPagination;