import React, { useRef } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { MainWrapper, Description, ProjectDetailWrapper, CloseButton } from './ImgModal.style';
import { MdOutlineClose } from "react-icons/md";

const ImgModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const buttonRef = useRef(null);

  const onDismiss = () => navigate(-1);

  console.log(location.state)

  return (
      <MainWrapper>
        <h2>Project image</h2>

        <Description>
          <p>
            {location.state.projectDatas.title}의 {id}번째 이미지입니다. 
          </p>
        </Description>

        <ProjectDetailWrapper>
          <img 
            src={location.state.imageURL} 
            alt='프로젝트 상세 이미지' 
          />

          <CloseButton
            ref={buttonRef}
            onClick={onDismiss}
          >
            <MdOutlineClose />
            <span>CLOSE</span>
          </CloseButton>

        </ProjectDetailWrapper>

    </MainWrapper>
  );
};

export default ImgModal;