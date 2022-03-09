import styled, { css } from 'styled-components';

const deviceSizes = {
  mobile: 1020,
  desktop: 1920,
};

const device = {
  mobile: `(max-width : ${deviceSizes.mobile}px)`,
  desktop: `(min-width : ${deviceSizes.mobile + 1}px)`,
};

// text-styles
const fontSizes = {
  H1: '40px',
  H2: '30px',
  H3: '24px',
  H4: '20px',
  H5: '18px',
  Title20: '20px',
  Title: '15px',
  SubTitle1: '13px',
  SubTitle2: '11px',
  Body1: '14px',
  Body2: '12px',
  Button1: '13px',
  Button2: '10px',
  Caption: '12px',
};

const H1 = css`
  font-size: ${fontSizes.H1};
  font-family: NotoB;
  line-height: 60px;
`;

const H2 = css`
  font-size: ${fontSizes.H2};
  font-family: NotoB;
  line-height: 50px;
`;

const H3 = css`
  font-size: ${fontSizes.H3};
  font-family: NotoM;
  line-height: 36px;
`;

const H4 = css`
  font-size: ${fontSizes.H4};
  font-family: NotoM;
  line-height: 28px;
`;

const H5 = css`
  font-size: ${fontSizes.H5};
  font-family: NotoM;
  line-height: 24px;
`;

const Title20 = css`
  font-size: ${fontSizes.Title20};
  font-family: NotoB;
  line-height: 28px;
`;

const Title = css`
  font-size: ${fontSizes.Title};
  font-family: NotoM;
  line-height: 20px;
`;

const SubTitle1 = css`
  font-size: ${fontSizes.SubTitle1};
  font-family: NotoR;
  line-height: 17px;
`;

const SubTitle2 = css`
  font-size: ${fontSizes.SubTitle2};
  font-family: NotoM;
  line-height: 15px;
`;

const Body1 = css`
  font-size: ${fontSizes.Body1};
  font-family: NotoR;
  line-height: 20px;
`;

const Body2 = css`
  font-size: ${fontSizes.Body2};
  font-family: NotoR;
  line-height: 18px;
`;

const Button1 = css`
  font-size: ${fontSizes.Button1};
  font-family: NotoM;
  line-height: 20px;
`;

const Button2 = css`
  font-size: ${fontSizes.Button2};
  font-family: NotoL;
  line-height: 14px;
`;

const Caption = css`
  font-size: ${fontSizes.Caption};
  font-family: NotoM;
  line-height: 18px;
`;

// colors
const colors = {
  black1: 'rgb(0,0,0)',
  black2: 'rgb(18,18,18)',
  grey1: 'rgb(55,56,56)',
  grey2: 'rgb(77,77,78)',
  grey3: 'rgb(169,169,169)',
  grey4: 'rgb(227,227,227)',
  grey6: 'rgb(242, 242, 242)',
  boxGray: 'rgb(241,242,242)',
  midGrey: 'rgb(248,248,248)',
  lightGrey: 'rgb(252,252,252)',
  white: 'rgb(255,255,255)',

  navy: 'rgb(13,34,75)',
  navyBox: 'rgb(14,43,100)',
  lapis: 'rgb(27,74,168)',
  lavender: 'rgb(101,140,211)',
  violet: 'rgb(81,55,240)',
  disableBlue: 'rgb(133,148,176)',
  royalblue: 'rgb(60,100,177)',
  newblue: '#538CFF',

  turquoise: 'rgb(71,189,195)',
  mint: 'rgb(69,201,177)',
  murstard: 'rgb(254,180,71)',
  red: 'rgb(254,71,71)',
  brick: 'rgb(177,70,70)',
  stringMint: 'rgb(69, 201, 177)',
};

const theme = {
  deviceSizes,
  device,
  fontSizes,
  H1,
  H2,
  H3,
  H4,
  H5,
  Title20,
  Title,
  SubTitle1,
  SubTitle2,
  Body1,
  Body2,
  Button1,
  Button2,
  Caption,

  colors,
};

export default theme;
