import styled from "styled-components";
import theme from "../theme";

export const GloblaMobileHeader = styled.header`
  height: ${(props) => props.height ?? '56px'};
  background-color: ${(props) => props.bgColor ?? `${theme.colors.white}`};
`;
