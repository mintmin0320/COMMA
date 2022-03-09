import styled, { css } from 'styled-components';
import theme from '../../theme';
// images

export const SubTabContainer = styled.div`
  padding: ${({ padding }) => padding ?? '30px 0 0'};
  margin: 0 -20px;
  ${theme.Body1};

  /* tab wrap */
  .MuiTabs-root {
    position: sticky;
    top: 56px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  /* tabs css */
  .MuiButtonBase-root {
    flex: 1;
    border-bottom: 2px solid ${theme.colors.grey3};

    /* tabs title */
    .MuiTab-wrapper {
      ${theme.Body1};
    }
  }

  /* tabs border-bottom */
  .MuiTabs-indicator {
    background-color: ${theme.colors.newblue};
  }

  /* tabs active 되었을 때 css */
  .Mui-selected {
    /* tabs title */
    .MuiTab-wrapper {
      font-family: 'NotoM';
      color: ${theme.colors.newblue};
    }
  }

  .MuiTouchRipple-root {
    display: none;
  }

  .react-swipeable-view-container {
    max-height: ${({ list }) => list ? '45vh' : 'auto'};
  }
`;
