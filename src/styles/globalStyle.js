import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';
// image
import greyArrow from '../images/account/grey-arrow.svg';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 16px;
    @media (max-width: 1280px){
        font-size: 50%; 
    };
    @media (max-width: 568px){
        font-size: 10px; 
    };      
  };
  
  body {  
    font-family: 'Noto Sans KR', sans-serif;
  } 

  select,
  input, 
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }


  input[type="password"] {
    font-family: 'pass', 'Roboto', Helvetica, Arial, sans-serif ;
    font-size: 25px;
    letter-spacing: -3px;

    &::-webkit-input-placeholder {
      transform: scale(0.77);
      transform-origin: 0 50%;
    }

    &::-moz-placeholder {
      font-size: 14px;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }
  }


  /* react-bootstrap */
  @media (min-width: 1200px) {
      .col-xl-6 {
        flex: 0 0 49.41%;
        max-width: 49.41%;
      }
      .container, .container-lg, .container-md, .container-sm, .container-xl{
        max-width: 1348px;
      }
    }

  /************************* input-ver2.0 > input *****************************/
  .input-ver2-01 {

  }
  /************************* input-ver2.0 > radio *****************************/
  .radio-ver2-01 {
    
  }

  /************************* FileUpload *****************************/
  .fileUp-01 {
    display: flex;
    align-items: flex-start;
    width: 100%;
    ${theme.Body2};
    .fileUpload-input-wrap {
      position: relative;
      width: 205px;
      margin-right: 10px;
    }
    
    input {
      width: 100%;
      height: 32px;
      padding: 7px 10px;
      color: ${theme.colors.black1};
      background-color: ${theme.colors.boxGray};
      ::placeholder {
        color: ${theme.colors.grey3};
      }
    }
    button {
      position: absolute;
      top: 7px;
      right: 6px;
      background: transparent;
    }
    label {
      height: 32px;
      padding: 7px 10px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.grey2};
      cursor: pointer;
    }
  }

  // 상품관리 스타일
  .fileUp-02 {
    display:flex;
    justify-content: center;
    label {
      padding:7px 10px;
      border:1px solid ${theme.colors.black1};
      font-family: NoToR;
      margin-top:20px;
      font-size:${theme.fontSizes.Body2};

    }
  }

    // 상품관리 스타일
    .fileUp-03 {
    display:flex;
    justify-content: center;
    label {
      padding:6px 14px;
      border:1px solid ${theme.colors.royalblue};
      font-family: NoToR;
      color: ${theme.colors.royalblue};
      font-size:${theme.fontSizes.Body2};
      margin-top:18px;

    }


  }
  // 그룹정보 file-upload
  .fileUp-04 {
    display:flex;
    padding: 16px 15px;
    justify-content: center;
    label {
      height:30px;
      padding:5px 12px;
      border:1px solid ${theme.colors.royalblue};
      font-family: NoToM;
      color: ${theme.colors.royalblue};
      font-size:${theme.fontSizes.Button1};
      line-height: 20px;
    }
}

// 제휴카드 썸네일 file-upload
.fileUp-05 {
    display:flex;
    padding:0;
    justify-content: center;
    label {
      padding:7px 5px;
      border:1px solid ${theme.colors.black1};
      font-family: NoToM;
      color: ${theme.colors.black1};
      font-size:${theme.fontSizes.Button1};
      line-height: 20px;
      cursor: pointer;
    }
}

  /************************* AutoComplete *****************************/
  // common style
  .autoComplete-result-data {
    ${theme.Body1};
    color: ${theme.colors.black1};
  }

  /* autoComplete-01 (기본 autocomplete) */
  .autoComplete-01 {
    display: flex;

    .autoComplete-second-input {
      position: relative;
    }

    .autoComplete-result-data {
      position: absolute;
      top: 30px;
      right: 0;
      width: calc(100% - 10px);
      max-height: 100px;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.grey4};
      border-top: 0;
      border-radius: 4px;
      overflow: hidden;
      overflow-y: auto;
      cursor: pointer;
      z-index: 1;
      p {
        padding: 3px 10px;
        &:hover {
          background-color: ${theme.colors.grey4};
        }
       
      }
    }
  }

  /* autoComplete-02 (관리자 > 휴대폰신청 > 할인제관리 > 상세페이지) */
  .autoComplete-02, .autoComplete-03 {
    position: relative;

    .autoComplete-first-input-wrap input {
      display: none;
    }


    .autoComplete-search-button {
      margin-left: 16px;
    }

   .autoComplete-second-input {
     display: none;
     position: absolute;
     top: 32px;
     right: 0px;
     width: 226px;
     min-height: 30px;
     padding: 20px 15px;
     background-color: ${theme.colors.white};
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     z-index: 1;

     .autoComplete-button2-wrap {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;

      .autoComplete-close-button {
        margin-right: 10px;
      }
    }

    @media (min-width: 768px) {
      left: 6px;
    }
   }

   .autoComplete-result-data {
      margin-top: 10px;
      padding: 10px 0 10px 4px;
      cursor: pointer;
      z-index: 1;

      p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    
    .autoComplete-checked {
      &-row {
        display: flex;
        align-items: center;

        input {
          margin-right: 10px;
        }
      }
    }
  }

  // autoComplete-03 (관리자 > 휴대폰관리 > 공시지원 관리 > 상세페이지)
  .autoComplete-03 {
    .autoComplete-first-input-wrap {
      display: flex;
    }

    .autoComplete-first-input-wrap input {
      display: block;
    }

    .autoComplete-second-input {
      left: 211px;
    }
  }
  /************************** selectBox **********************************/
  .selectBox-1 {
    color: ${theme.colors.grey2};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey4};
    border-radius: 3px;
    p, select {
      ${theme.Body1};
    }
    
    select {
      width: 100%;
      height: 100%;
      ${theme.Body1};
      background: url('${greyArrow}') no-repeat 95% 50%;
      border-radius: 3px;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
    }
  }

  /************************** Textarea **********************************/
  .textarea-autosize-01 {
    textarea {
      margin-left: 20px;
      padding: 10px;
      ${theme.Body1};
      color: ${theme.colors.black1};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.grey4};
      border-radius: 3px;
      resize: none;
    }
  }
  /************************** Alert **********************************/
  /* alert-1 */
  .alert-1 {
    .button {
      display: flex;
      justify-content: space-between;
      button {
        width: calc(50% - 0.5px);
        &:nth-child(1) {
          border-right: 1px solid ${theme.colors.white};
        }
      }
    }    
    .text {
      padding: 30px 30px 40px;      
    }
    @media (max-width: 1020px) {
      .button {
        justify-content: flex-end;
        padding-bottom: 10px;
        
        button {
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
    }
  }
  /* alert-2 */
  .alert-2 {
    .button {
      button {
        width: 100%;
      }
    }
    .text {
      padding: 30px 30px 40px;      
    }
    @media (max-width: 1020px) {
      .button {
        padding: 0 20px 10px 0;
        button {
          text-align: right;
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
        }
      }
      .text {
        padding: 30px;      
      }
    }
  }
  /* alert-3 */
  .alert-3 {
    text-align: center;
    
    .button {
      display: flex;
      justify-content: space-between;
      button {
        width: calc(50% - 0.5px);
        &:nth-child(1) {
          border-right: 1px solid ${theme.colors.white};
        }
      }
    }    
    .text {
      min-height: 100px;
      padding: 30px 30px 40px;      
    }
    p {
      margin-top: 0 !important;
    }
    /* 모바일 */
    @media (max-width: 1020px) {
      .button {
        justify-content: flex-end;
        padding-bottom: 10px;
        
        button {
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
      .text {
        min-height: 90px;
        padding: 30px;      
      }
    }
  }
  /* alert-4 */
  .alert-4 {
    .button {
      button {
        width: 100%;
      }
    }
    .text {
      min-height: 100px;
      padding: 30px;  
      text-align: center;
    }
    p {
      margin-top: 0 !important;
    }
    /* 모바일 */
    @media (max-width: 1020px) {
      .button {
        padding: 0 20px 10px 0;
        button {
          text-align: right;
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
        }
      }
      .text {
        min-height: 90px;
        padding: 30px 30px 15px;  
      }
    }
  }

  .copy{
    .button {
      display: flex;
      justify-content: space-between;
      button {
        width: calc(50% - 0.5px);
        &:nth-child(1) {
          border-right: 1px solid ${theme.colors.white};
        }
      }
    }    
    .text {
      padding: 30px 30px 40px;      
    }
    @media (max-width: 1020px) {
      .button {
        justify-content: flex-end;
        padding-bottom: 10px;
        
        button {
          color: ${theme.colors.lavender} !important;
          background: ${theme.colors.white} !important; 
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
    }
  }
`;

export default GlobalStyle;
