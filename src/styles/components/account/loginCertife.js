import styled from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';

export const CertifeContainer = styled.div`
  .login-sub-txt {
    margin-bottom: 30px;
    ${theme.Body2};
  }
`;

export const Masking = styled.div`
  ${flexbox()}
  flex-direction:column;
  width: 100%;
  overflow: hidden;

  /* 인증번호 시간 */
  .masking-count {
    margin-top: 5px;
    text-align: right;
    ${theme.Body2};
    color: ${theme.colors.red};
    transform: translateX(5px);
  }

  .masking__wrap {
    width: 200px;
    position: relative;

    .masking-count {
      position: absolute;
      right: 33px;
    }
  }

  /* 인증번호 시간 만료 */
  .masking-count-end {
    margin-top: 8px;
    text-align: center;
    ${theme.Body2};
    text-decoration: underline;
    color: ${theme.colors.newblue};
  }
`;
