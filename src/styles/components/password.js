import styled from 'styled-components';
import { flexbox } from '../utils';
import theme from '../theme';

export const PasswordContainer = styled.div`
  ${flexbox()};
  padding-left: 20px;
  min-width: 200px;

  label {
    width: 18px;
    height: 18px;
    background-color: ${theme.colors.grey4};
    border-radius: 50%;

    input {
      width: 0;
    }

    &:not(:nth-child(6)) {
      margin-right: 12px;
    }

    /* 인증번호 입력 시 기본 색상 */
    &.input-on-active {
      background-color: ${theme.colors.newblue};
    }

    /* 인증번호 입력, 오류 색상 */
    &.input-error-active {
      background-color: ${theme.colors.red};
    }
  }

  input {
    opacity: 0;
  }
`;
