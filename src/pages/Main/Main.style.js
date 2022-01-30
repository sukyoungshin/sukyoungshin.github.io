import styled from 'styled-components';

export const StyledBgWrapper = styled.div`
  width: 220px;
  height: 340px;
  
  background-image: ${props => props.bgImg && `url(${props.bgImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  
  position: absolute;
  top: 160px;
  right: 26px;

  &::before {
    display: inline-block;
    content: '';
    
    width: 220px;
    height: 340px;
    border: 2px solid var(--color-grey-light);
    
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;
export const StyledTextWrapper = styled.div`
  width: 231px;
  height: fit-content;

  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  h1 {
    color: var(--color-white);

    &::before {
      content: '';
      display: inline-block;
      
      width: 140px;
      height: 47px;

      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);

      backdrop-filter: invert(1);
    }
  }
`;