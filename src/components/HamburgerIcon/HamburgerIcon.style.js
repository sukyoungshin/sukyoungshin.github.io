import styled from 'styled-components';

export const StyledMenuIcon = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 9999;

  transition: background-color 0.3s;;

  &:hover {
    background-color: var(--color-black-opacity); 
  }

  span {
    display: inline-block;
    width: 24px;
    height: 2px;
    background-color: ${props => props.modal ? 'transparent' : 'var(--color-white)'};
    border-radius: 4px;
    
    position: relative;
    transition: all 0.2s;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 24px;
      height: 2px;
      background-color: var(--color-white);
      border-radius: 4px;
    } 
    &::before {
      position: absolute;
      top: ${props => props.modal ? '0px' : '8px'};
      transform: ${props => props.modal && 'rotate(-45deg)'};
    }
    &::after {
      position: absolute;
      bottom: ${props => props.modal ? '0px' : '8px'};
      transform: ${props => props.modal && 'rotate(45deg)'};
    }
  }
`;