import React, { useRef } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { StyledMainWrapper, StyledSectionDescription, StyledDivDetail, StyledButtonClose, StyledImage } from './ImgModal.style';
import { MdOutlineClose } from "react-icons/md";

const ImgModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const buttonRef = useRef(null);
  const onDismiss = () => navigate(-1);
  const { imageURL } = location.state;
  const { title } = location.state.projectDatas;

  return (
      <StyledMainWrapper>
        <h2>Project image</h2>

        <StyledSectionDescription>
          <p>
            {title} 상세 이미지입니다. 
          </p>
        </StyledSectionDescription>

        <StyledDivDetail>
          <StyledImage 
            src={imageURL} 
            alt={`${title} - ${id}번째 이미지`} 
          />
          <CloseButton buttonRef={buttonRef} onDismiss={onDismiss} />
        </StyledDivDetail>

    </StyledMainWrapper>
  );
};

const CloseButton = ({ buttonRef, onDismiss }) => {
  return (
    <StyledButtonClose
      ref={buttonRef}
      onClick={onDismiss}
    >
      <MdOutlineClose />
      <span>CLOSE</span>
    </StyledButtonClose>
  );
};

export default ImgModal;