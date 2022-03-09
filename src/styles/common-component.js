import {
  Checkbox as KendoCheckBox,
  Input as KendoInput,
  MaskedTextBox as KendoMaskedTextBox,
  TextArea as KendoTextArea,
} from '@progress/kendo-react-inputs';

import { DropDownList as KendoDropDownList } from '@progress/kendo-react-dropdowns';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

// import "./common-kendo.css";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-top: 131px;
  padding-bottom: 74px;
  background-color: #fafafa;
`;

export const ParentWrap = styled.div`
  width: ${(props) => (props.width ? props.width : '334px')};
  height: ${(props) => (props.height ? props.height : '593px')};
  padding: ${(props) => (props.padding ? props.padding : '44px 39px 43px')};
  object-fit: contain;
  border-radius: 30px;
  border: solid 1px #ffffff;
  background-color: #ffffff;
`;

export const SegementButtonWrap = styled.div`
  display: flex;
  margin-bottom: 95px;
`;
export const SegementButton = styled.div`
  width: 101px;
  height: 32px;
  padding: 7px 10px 9px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '')};
  background-color: ${(props) => (props.checked ? '#000f34' : '#ffffff')};
  color: ${(props) => (props.checked ? '#ffffff' : '#000f34')};

  border-radius: 20px;
  border: solid 1px #d6d6d6;
  font-family: NanumGothic;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: normal;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const BigLabel = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '20px')};
  margin: ${(props) => props.margin};
  font-family: NanumGothic;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.48;
  letter-spacing: normal;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};

  color: #000f34;
`;

export const MiddleLabel = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #404040;
`;

export const MiddleLabelBold = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #404040;
`;

export const SmallLabel = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-family: NanumGothic;
  font-size: ${(props) => (props.fontsize ? props.fontsize : '15px')};
  font-weight: ${(props) => (props.bold ? props.bold : 'bold')};

  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: ${(props) => (props.textalign ? props.textalign : 'center')};
  color: ${(props) => (props.color ? props.color : '#000f34')};
`;

export const NameLabel = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-family: NanumGothic;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: #000f34;
  margin: 0 auto;
`;

export const Input = styled(KendoInput)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: 24px;
  border: solid 1px #000f34;
  background-color: #ffffff;
  font-size: ${(props) => props.placeholderfontsize};
  padding-left: ${(props) => props.paddingleft};
  text-align: ${(props) => (props.textalign ? props.textalign : '')};

  ::placeholder {
    font-family: NanumGothic;
    font-size: ${(props) => props.placeholderfontsize};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-align: ${(props) => (props.textalign ? props.textalign : '')};
    letter-spacing: normal;
    padding: 13px 15.3px 12px 0px;
    color: #d6d6d6;
  }

  :disabled {
    border-radius: 24px;
    border: solid 1px #e2e2e2;
    background-color: #e2e2e2;
    color: #4b4b4b;
  }

  :focus {
    outline: none;
  }
`;

export const UnderLineInputWrap = styled.div`
  display: flex;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-bottom: solid 1px #e2e2e2;
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #404040;

  :focus {
    outline: none;
  }
`;

export const UnderLineInput = styled(KendoInput)`
  // width: ${(props) => props.width};
  // height: ${(props) => props.height};
  // margin: ${(props) => props.margin};
  // border-radius: 24px;
  border: 0;
  // background-color: #ffffff;
  width: auto;
  ::placeholder {
    font-family: NanumGothic;

    font-weight: normal;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: normal;

    padding: 13px 15.3px 12px 0px;

    color: #404040;
    margin-bottom: 10px;
  }
  :focus {
    outline: none;
  }
`;

export const HpNoRoundInput = styled(KendoMaskedTextBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: #ffffff;
  padding-left: ${(props) => props.paddingleft};
  opacity: 1 !important;
  text-underline-position: none;

  .is-active {
    color: ${theme.colors.red};
    font-weight: 500;
    font-family: NotoM;
    border: 1px solid ${theme.colors.red};
  }

  .k-textbox {
    border: ${(props) =>
      props.className === 'is-active findidinput'
        ? ' 1px solid #fe4747'
        : ' 1px solid #A9A9A9'};

    border-radius: 0;
    height: auto;
    text-align: ${(props) => (props.textalign ? props.textalign : '')};
    font-size: 14px;
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '38.5%')};
    box-shadow: none !important;
    color: ${(props) => (props.className === 'is-active findidinput' ? '#fe4747' : '#000 ')};
    font-family: NotoR;
    ::placeholder {
      font-size: 14px;
      color: ${theme.colors.grey3}!important;
      font-family: NotoR;
      letter-spacing: normal;
    }
  }

  .k-textbox::placeholder {
    text-align: ${(props) => (props.textalign ? props.textalign : '')};
  }

  :hover {
    border-color: rgba(0, 0, 0, 0.15);
    color: #656565;
    background-color: #ffffff;
  }

  .k-textbox:disabled {
    /* border: solid 1px #e2e2e2; */
    background-color: rgba(239, 239, 239, 0.9);
    border: 1px solid #f1f2f2;
    color: #4b4b4b;
  }

  ::placeholder {
    font-family: NotoR;
    ${theme.Body1}
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: normal;

    padding: 13px 15.3px 12px 0px;

    color: ${theme.colors.grey3};
  }
  :focus {
    outline: none;
    box-shadow: none !important;
    border-color: none;
  }
`;

export const NumberInputLine = styled(KendoMaskedTextBox)`
  width: auto;
  padding-left: ${(props) => props.paddingLeft} !important;

  border: 0;

  .k-textbox {
    transform: translateY(-2px);
  }

  ::placeholder {
    font-family: NanumGothic;

    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    padding: 13px 15.3px 12px 0px;
    color: #404040;
    margin-bottom: 10px;
  }

  :focus {
    outline: none;
  }
`;

export const NumberInput = styled(KendoMaskedTextBox)`
  // width: ${(props) => props.width};
  // height: ${(props) => props.height};
  // margin: ${(props) => props.margin};
  width: auto;
  padding-left: ${(props) => props.paddingLeft} !important;
  border: 0;

  ::placeholder {
    font-family: NanumGothic;
    font-size: ${(props) => props.placeholderFontSize};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    padding: 13px 15.3px 12px 0px;
    color: #404040;
    margin-bottom: 10px;
  }
  :focus {
    outline: none;
  }
`;

export const InputLine = styled.div`
  width: 10px;
  height: 2px;
  //   margin: 19px 4px 19px 6px;
  background-color: #d6d6d6;
  display: flex;
  align-self: center;
`;

export const NextButton = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '48px')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  object-fit: contain;
  border-radius: 24px;

  border: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(113deg, #000f34 31%, #374057 79%);

  text-align: center;

  font-family: NanumGothic;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  color: #fff;
  :focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  object-fit: contain;
  border-radius: 24px;
  border: solid 2px #000f34;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  background-color: #ffffff;
  text-align: center;
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  color: #373737;
  :focus {
    outline: none;
  }
`;

export const JoinButtonWrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  object-fit: contain;
  border-radius: 24px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  border: solid 2px #000f34;
  background-color: #ffffff;
  color: #373737;
  text-align: center;
  display: flex;
  justify-content: center;
  :focus {
    outline: none;
  }
`;

export const JoinButton = styled(Link)`
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.6;
  letter-spacing: normal;
  text-align: center;
  color: #4b4b4b;
  display: flex;
  align-items: center;
  :focus {
    outline: none;
  }
  :hover {
    color: #4b4b4b;
    text-decoration: none;
  }
`;

export const SmallTextButton = styled(Link)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: left;
  color: #4b4b4b;
  :focus {
    outline: none;
  }
  :hover {
    color: #4b4b4b;
    text-decoration: none;
  }
`;

export const SquareButton = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '5px')};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : '')};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
  font-family: NanumGothic;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.color};
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: 0px;
  padding-left: 0px;

  &[disabled] {
    background-color: #d8d8d8;
  }
`;

export const AgreeWrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};

  display: flex;
  justify-content: flex-start;
  font-family: NanumGothic;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #404040;
`;
export const CheckBoxInfo = styled(KendoCheckBox)`
  // width: 15px;
  // height: 15px;
  // background: #ffffff 0% 0% no-repeat padding-box;
  // border: 1px solid #d6d6d6;
  margin-right: 14px;
  :focus {
    outline: none;
  }

  &:checked {
    background: #000f34;
  }
`;

export const DropDownList = styled(KendoDropDownList)`
  border-bottom: 0px;
`;

export const DropDownListRound = styled(KendoDropDownList)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: 24px;
  border: solid 1px ${(props) => props.border || '#000f34'};
  background-color: #ffffff;
  padding-left: ${(props) => props.paddingleft};
  ::placeholder {
    font-family: NanumGothic;
    font-size: ${(props) => props.placeholderfontsize};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: normal;

    padding: 13px 15.3px 12px 0px;

    color: #d6d6d6;
  }
  :focus {
    outline: none;
  }
`;

export const MenuButtonWrap = styled.div`
  margin: ${(props) => props.margin};
`;

export const MenuButton = styled.div`
  width: auto;
  padding-right: 0px;
  padding-left: 0px;
  margin: ${(props) => props.margin};
  @media (max-width: 360px) {
    width: 50%;
    height: 50%;
  }
`;

export const MenuImg = styled.img`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const RoundButton = styled(Link)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  object-fit: contain;
  border-radius: 24px;
  box-shadow: ${(props) => props.bordershadow};
  border: ${(props) => props.border};
  background-color: #ffffff;
  color: #373737;
  display: flex;
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.6;
  letter-spacing: normal;

  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  :focus {
    outline: none;
  }
`;

export const RoundButton2 = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  object-fit: contain;
  border-radius: 24px;
  /* box-shadow: ${(props) => props.bordershadow}; */
  border: ${(props) => props.border};
  background-color: #ffffff;
  color: #373737;
  display: ${(props) => props.display};
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.6;
  letter-spacing: normal;

  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  :focus {
    outline: none;
  }
`;

export const TextArea = styled(KendoTextArea)`
  width: 100%;
  border-radius: 5px;
  border: solid 1px #e2e2e2;
  .k-input {
    padding: 4px 8px;
    width: 100%;
    height: 83px;
    min-height: calc(1.4285714286em + 10px);
    overflow-y: auto;
    resize: both;
  }
`;
export const MemoWrap = styled.div`
  margin-top: 15px;
`;

export const Memo = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
  }

  height: 120px;
  overflow-y: auto;
  color: #666666;
  font-size: 12px;
  border: 1px solid #dcdcdc;
`;

export const SwiperMiddleLabel = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-family: NanumGothic;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #4b4b4b;
`;

export const SwiperSmallLabel = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-family: NanumGothic;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #979797;
`;

export const Loading = styled.div`
  position: fixed;
  /* left: 35%; */
  top: 50%;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
