import styled from 'styled-components';
import theme from '../../theme';
// images

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;

  .icon-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  .icon-list {
    width: 50px;
    height: 50px;
    margin-bottom: 50px;
    flex: 0 0 25%;
    text-align: center;

    &-img {
      margin: 0 auto;
      width: 40px;
      height: 40px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;

        // 이미지 선명하게
        image-rendering: -webkit-optimize-contrast;
      }
    }

    p {
      margin: 10px -20px 0;
      ${theme.Body1};
      color: ${theme.colors.black1};
    }
  }

  /* ******************  cms *********************** */
  .icon-list-wrap {
    position: relative;
    flex: 0 0 25%;
    width: 50px;
    height: 50px;
    margin-bottom: 30px;
    text-align: center;

    .icon-list {
      margin: 0 auto;
    }
  }

  .icon-subTxt {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(calc(-50% + 20px));
    padding: 5px 10px;
    ${theme.Body2};
    color: ${theme.colors.white};
    background-color: ${theme.colors.grey3};
    border-radius: 4px;
    white-space: nowrap;

    &-tri {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 0;
      height: 0;
      border-top: 15px solid ${theme.colors.grey3};
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
`;
