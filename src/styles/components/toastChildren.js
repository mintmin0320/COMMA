import styled from "styled-components";
import { animations, flexbox } from "../utils";
import theme from "../theme";

export const ToastChildrenContainer = styled.div`

  .toast-list {
    ${theme.H5};
    color: ${theme.colors.grey1};

    &-item {
      margin-bottom: 10px;
      padding-bottom: 12px;

      &:not(:last-child) {
        border-bottom: 0.5px solid ${theme.colors.grey3};
      }
    }
  }
`;