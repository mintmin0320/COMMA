import styled from 'styled-components';
// css 가이드
import theme from '../styles/theme';

export const Container = styled.div`
  * {
    h1,
    h2,
    h3,
    h4,
    h5,
    div {
      font-weight: 500;
      line-height: 1.4285em;
    }
  }
  display: flex;
  justify-content: center;
  /* width: 100vw; */
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : theme.colors.lightGrey};
`;

export const Wrap = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
    /* max-width: 1920px; */
    max-width: 1620px;
    margin-top: 60px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : '8em')};
  button {
    width: 12em;
    height: 3em;
    font-size: ${theme.fontSizes.Title};
    font-family: NotoM;
    background-color: ${theme.colors.navyBox};
    color: ${theme.colors.white};
    border: none;
  }
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '3em')};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  ::placeholder {
    color: ${theme.colors.grey3};
    font-size: ${theme.fontSizes.Body1};
    font-family: NotoR;
  }
  background-color: ${theme.colors.white};
  padding-left: 0.5em;
  border: 1px solid ${theme.colors.boxGray};
  border-radius: 3px;
  outline: none;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '10em')};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
  ::placeholder {
    color: ${theme.colors.grey3};
    font-size: ${theme.fontSizes.Body1};
    font-family: NotoR;
  }
  font-size: ${theme.fontSizes.Body1};
  font-family: NotoR;
  padding: 20px;
  border-radius: 3px;
  outline: none;
  border: 1px solid ${theme.colors.boxGray};
`;
