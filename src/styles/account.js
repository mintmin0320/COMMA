import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from './theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  h3 {
    ${theme.H3}
  }

  h5 {
    ${theme.H5}
    margin-bottom: 20px;
  }

  .joinChangePW-h3 {
    text-align: center;
    margin-bottom: 50px;
  }

  .joinChangePW-p {
    ${theme.Title}
    margin:50px 0 30px
  }

  .not-login-txt {
    margin: 40px 0 40px;
    ${theme.Body1};
    color: ${theme.colors.navyBox};
  }

  .certify-group {
  }

  .certify-txt {
    display: table;
    margin: 0 auto 20px;
    ${theme.Body1};
    color: ${theme.colors.grey2};
  }

  .certify-number {
  }

  .certify-count-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;

    .certify-count {
      flex: 1;
    }
  }

  .certify-number-error {
    flex: 9;
    padding-left: 20px;
    color: ${theme.colors.red};
    ${theme.Button1};
    text-align: center;
  }

  .certify-error {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 430px) {
    height: 100vh;
  }
`;

export const Wrap = styled.div`
  height: auto;
  padding: 0 20px;
  object-fit: contain;
  // background-color: ${theme.colors.red};
  // box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.22);
  // border-radius: 20px 20px 20px 20px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding-top: 0px;
    padding-bottom: 30px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 510px;
    height: 680px;
    margin-top: 18px;
    align-items: center;
    padding: 0 !important;
  }

  @media screen and (max-width: 400px) {
    border-radius: 0px 0px 0px 0px;
  }

  .loginAnchor {
    margin-right: 0;
  }

  .wideBtn_01,
  .wideBtn_02 {
    width: 100%;
    margin: 0;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  // cursor: pointer;
  img {
    // margin: 20px 0;
    max-width: 200px;
  }
`;

export const IdBox = styled.div`
  display: flex;
  // justify-content: center;
`;

export const LockLogoWrap = styled.div`
  width: 90px;
  margin: 0 auto;
`;

export const FindIDPW = styled.div`
  display: flex;
  width: 80%;
  display: ${(props) => props.display};
  justify-content: flex-end;
  margin: 0 0 20px 0;
`;

export const FindIDPWButton = styled(Link)`
  :first-child {
    margin-right: 4px;
  }
  font-family: NotoR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: left;
  color: #0e2b64;
`;
export const LineStyle = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f1f2f2;
  margin: 40px 0;
`;

//FindPW

export const CountdownWrap = styled.div`
  display: ${(props) => props.display};
  font-family: NotoM;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: right;
  color: #fe4747;
  margin-bottom: 23px;
`;

export const HpNoRoundInputBox = styled.div`
  position: relative;
  p {
    z-index: 1;
    position: absolute;
    top: 22%;
    left: 20px;
    ${theme.Body2};
    color: ${(props) =>
      props.className === 'is-active'
        ? 'rgb(254,71,71)'
        : // eslint-disable-next-line no-template-curly-in-string
          '${theme.colors.grey2}'};
    border: none !important;
    cursor: default;

    strong {
      color: ${theme.colors.red};
    }
  }
  .findidinput {
    margin: ${(props) => (props.margin ? props.margin : '0 0 16px 0')};
    border-bottom: none;

    ::placeholder {
      width: 181px;
      color: ${theme.colors.grey3};
      font-size: ${(props) => (props.type === 'password' ? '24px' : '14px')};
      line-height: 1.15;
      text-align: left;
    }

    .is-active {
      color: ${theme.colors.red};
      font-weight: 500;
      font-family: NotoM;
      border: 1px solid ${theme.colors.red};
    }
  }

  .error-red {
    position: absolute;
    bottom: 14px;
    right: 0;
    color: ${theme.colors.red};
    font-size: 12px;
    font-family: 'NotoR';
  }
`;
export const BangIcon = styled.div`
  display: ${(props) => (props.display === 'none' ? 'none' : 'block')};
  position: absolute;
  right: 15px;
  top: 20px;
`;

export const LoginModal = styled.div`
  display: ${(props) => props.display};
  padding-bottom: 20px;
  h4 {
    ${theme.H4};
    color: ${theme.colors.navyBox};
    padding-bottom: 20px;
  }
  p {
    ${theme.Body1}
  }
`;

//FindID

export const FormWrap = styled.div`
  opacity: ${(props) => props.opacity};
`;

//ChangePW

export const SmallText = styled.div`
  padding: 0;
  margin-top: -10px;
  color: ${theme.colors.red};
  font-weight: 500;
  font-family: NotoM;
  font-size: 12px;
  text-align: right;
`;

export const Validation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 7px 0 9px 0;
`;

export const CountDown = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  margin: 7px 0 9px 0;
  color: blue;
`;



