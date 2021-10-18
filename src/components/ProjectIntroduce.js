import React from 'react';
import './ProjectIntroduce.css';

function ProjectIntroduce({ projectContent }) {

  return (
      <div className="project-detail-wrapper">
      <div className="project-image-wrapper">
        <ul>
        {
          projectContent.img.map((image, idx) => (
            <li key={idx}>
              <img src={image} alt="사진" />
            </li>
          ))
        }
        </ul>
      </div>
      <div className="project-content-wrapper">
        <div className="project-stack">
          <h3>1. 사용한 기술</h3>
          <ul>
            {
              projectContent.techStack.map((stack, idx) => (
                <li key={idx}>
                  <span className="hightlight hashtag">{stack}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="project-code">
          <h3>2. 링크</h3>
          <ul>
            <li>
              <a href={projectContent.url.github} target="_blank" rel="noreferrer">깃허브 코드</a>
              &nbsp;/&nbsp;
              <a href={projectContent.url.live} target="_blank" rel="noreferrer">라이브 데모</a>
            </li>
          </ul>
        </div>
        <div className="project-description">
          <h3>3. 주요기능</h3>
          <ul>
            {
              projectContent.feature.map((feat, idx) => (
                <li key={idx}>
                  {feat}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectIntroduce;