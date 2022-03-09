import Modal from './index';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const CommonModal = ({ children, children2, width, height, padding, zIndex, onCancel, transformY, marginBottom }) => {
  return (
    <Modal width={width} height={height} padding={padding} zIndex={zIndex} onCancel={onCancel} transformY={transformY}>
      <StyledCommonModal>
        <div className="name">{children}</div>
        <button onClick={onCancel}>{children2}</button>
      </StyledCommonModal>
    </Modal>
  );
};

const StyledCommonModal = styled.div`
  ${theme.Body1};
  color: ${theme.colors.black1};
  text-align: center;

  .name {
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '1em')};
    white-space: pre;

  }

  button {
    ${theme.Button1};
    color: ${theme.colors.lapis};
    background-color: transparent;
    border: none;
    outline: none;
  }

  .close-header {
    height: 7.6rem;
    padding: 1.6rem 1.6rem 2.4rem 1.6rem;
    display: flex;
    justify-content: flex-end;
  }

  img {
    height: 3rem;
    width: 3rem;
  }
`;

export default React.memo(CommonModal);
