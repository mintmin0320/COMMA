import styled from 'styled-components';
import theme from './theme';
import { MaskedTextBox } from '@progress/kendo-react-inputs';
import checkbox from '../images/partnership/dreamConcierge/Selected.svg';
import sec01Bg from '../images/partnership/dreamConcierge/mobile/sec01_bg.jpg';
import serviceCheck from '../images/partnership/dreamConcierge/mobile/serviceTabCheck.svg';
import uncheckbox from '../images/insu/uncheckbox.svg';
import agreeCheckbox from '../images/partnership/dreamConcierge/agreeCheck.svg';
import greyArrow from '../images/account/grey-arrow.svg';
import { flexbox, inlineFlexbox } from './utils';

export const Container = styled.div`
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  input {
    &:focus {
      &::placeholder {
        color: transparent !important;
      }
    }
  }

  .concierge-close-btn {
    position: absolute;
    top: 10px;
    right: 20px;

    img {
      padding: 10px;
    }
  }

  .next_btn {
    z-index: 3;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 5%;
    right: 5%;
    width: 145px;
    height: 56px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100px;
    color: ${theme.colors.white};
    ${theme.H3}
    img {
      margin-left: 10px;
      width: 30px;
    }

    :disabled {
      cursor: default;
      background-color: ${theme.colors.grey4};
    }
  }

  .previous_btn {
    z-index: 3;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 5%;
    left: 5%;
    width: 145px;
    height: 56px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100px;
    color: ${theme.colors.white};
    ${theme.H3}
    img {
      margin-left: 10px;
      width: 30px;
    }
  }
  .last-btn-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 60px 0;
  }

  .last_next_btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5%;
    right: 5%;
    width: 145px;
    height: 56px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100px;
    color: ${theme.colors.white};
    ${theme.H3}

    :disabled {
      background-color: ${theme.colors.grey4};
    }
    img {
      margin-left: 10px;
      width: 30px;
    }

    @media ${({ theme }) => theme.device.mobile} {
      height: 40px;
      ${theme.Title};
      border-radius: 0;
    }
  }

  .last_previous_btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 5%;
    left: 5%;
    width: 145px;
    height: 56px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100px;
    color: ${theme.colors.white};
    ${theme.H3}

    img {
      margin-left: 10px;
      width: 30px;
    }
  }

  // 신청완료 페이지
  .complete-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: ${theme.colors.white};

    h3 {
      ${theme.H3};
      margin: 10px 0;
    }

    p {
      ${theme.Body1};
      margin-bottom: 15px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .postCodeStyle {
    border: 1px solid #ddd;
    padding: 0;
    width: 500px !important;
    background-color: #fff;
    height: 600px !important;
    top: 120vh !important;
    left: 49% !important;
  }

  .postCode_btn {
    top: 122vh !important;
    right: 28%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    .postCodeStyle {
      width: calc(100% - 40px) !important;
      height: 600px !important;
      top: 300px !important;
      left: 20px !important;
    }

    .postCode_btn {
      top: 277px !important;
      right: 20px;
    }
  }
`;

export const AdminStatusBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5%;

  span {
    color: #ff8775;
    ${theme.Title};
    margin-right: 2em;
  }

  p {
    margin-left: 0.5em;
    ${theme.Body1};
    color: ${theme.colors.white};
  }

  button {
    width: 130px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid ${theme.colors.white};
    background-color: #757575;
    ${theme.Title};
    color: ${theme.colors.white};
    margin-left: 2em;
  }

  .radio-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    label {
      display: flex;
      align-items: center;
      margin: 0 2em 0 0;
      color: ${theme.colors.black1};
      ${theme.Body1}
    }
    input {
      ::placeholder {
        color: #c7c7c7;
      }
      &[type='radio'] {
        width: 1em;
        height: 1em;
        margin-right: 0.4em;
        padding: 0;
        &:checked {
          appearance: none;
          width: 1em;
          height: 1em;
          border-radius: 100%;
          border: solid 5px #a0736c;
          background-color: ${theme.colors.white};
        }
      }
    }
    .radioValue-cms {
      width: 100%;
      margin: 1em 0;

      &-payerNumber {
        padding: 0.5em;
        margin-left: 1em;
      }
      &-account {
        font-size: 14px;
        padding: 0.5em 0.7em;
      }
      .radioValue-card {
        padding: 0.5em 0 0.5em 0.7em;
        &.name {
          margin-right: 0.8em;
        }
      }
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 20px solid #597b6d;

  &.view03 {
    border-bottom: unset;
  }

  &.pop {
    margin: 50px 0;
  }

  .view-wrap {
    width: 1350px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .status-bar {
      margin: 40px 0;
    }
  }

  .more-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 44px;
    margin: 80px 0 100px;
    border-radius: 30px;
    border: 2px solid ${theme.colors.black1};
    ${theme.H5};

    img {
      margin-left: 5px;
    }
  }

  // view01

  .view01-container {
    display: flex;
    width: 1440px;
    height: 480px;
    margin-bottom: 40px;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 215px;
    height: 480px;

    .icon-box {
      cursor: pointer;
      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      border: 1px solid ${theme.colors.white};
      padding: 0px 30px;
      background-color: #808080;
      ${theme.H4};
      color: #fff;

      :hover {
        background-color: #408669;
      }

      img {
        width: 30px;
        margin-right: 30px;
      }

      &.active {
        background-color: #408669;
      }
    }
  }

  .right-container {
    width: 1225px;
    height: 480px;
    padding: 30px;
    background-color: ${theme.colors.boxGray};
    display: flex;

    .info-wrap {
      margin-left: 50px;

      h3 {
        ${theme.H3};
        margin: 30px 0;
      }

      p {
        ${theme.Body1};
        font-size: 17px;
        line-height: 27.5px;

        b {
          font-weight: 600;
        }
      }

      img {
        margin-top: 30px;
      }
    }
  }

  // view3

  .interest-wrap {
    width: 100%;

    &.service-wrap {
      padding: 20px 0;
      border-bottom: 1px solid ${theme.colors.black1};
    }
    &.add-wrap {
      padding: 20px 0;
      margin-bottom: 50px;
      border-bottom: 1px solid ${theme.colors.black1};
    }
  }

  .title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 136px;
    height: 28px;
    margin-bottom: 20px;
    text-align: center;
    ${theme.Title};
    color: ${theme.colors.white};
    background-color: #a0736c;
  }

  .item-wrap {
    display: flex;
  }

  .item-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    margin-left: 10px;
    border: 1px solid ${theme.colors.grey1};
    border-radius: 20px;
    ${theme.Title};
    color: ${theme.colors.grey1};

    img {
      width: 40px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .view-wrap {
      width: 100%;
    }

    .status-bar {
      width: 100% !important;
    }
  }
`;

export const SelectContainer = styled.div`
  width: ${(props) => props.width};
  .free-txt {
    text-align: center;
    margin-top: -100px;
    margin-bottom: 70px;
    ${theme.H4};
  }

  .icon-wrap {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1360px;
    min-height: 340px; */
    margin-right: 30px;

    &.view03 {
      min-height: unset;
    }
  }

  .title {
    ${theme.H4};
    color: ${theme.colors.black2};
    margin-bottom: 2.5em;
    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      text-align: center;
      background-color: ${theme.colors.black1};
      color: ${theme.colors.white};
      border-radius: 100%;
    }
  }
  .icon-circle {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 228px;
    height: 100px;
    background-color: #808080;
    ${theme.H5};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    &.active {
      background-color: #408669;
    }

    img {
      width: 50px;
    }
  }

  // view02
  .view02-wrap {
    display: flex;
  }

  // view04 신청페이지

  .content-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1360px;
  }

  .form {
    width: 1100px;
    padding: 0 0 0 50px;
  }
  .form-title {
    ${theme.H4};
    margin-top: 50px;
    &.no-margin {
      margin: unset;
    }
  }
  .form-title-underline {
    width: 100%;
    height: 2px;
    margin: 10px 0 30px;
    background-color: ${theme.colors.black1};

    @media ${({ theme }) => theme.device.mobile} {
      width: calc(100% + 40px);
      height: 6px;
      margin: 20px -20px 50px;
      background-color: ${theme.colors.boxGray};
    }
  }

  .use-wrap {
    display: flex;
    align-items: center;

    .use-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 288px;
      height: 70px;
      padding: 10px;
      margin-right: 20px;
      border-radius: 3px;
      text-align: left;
      ${theme.H5};
      background-color: ${theme.colors.white};
      border: 1.5px solid #a0736c;
      color: #a0736c;

      &.active {
        background-color: #a0736c;
        color: ${theme.colors.white};
      }

      :disabled {
        color: ${theme.colors.grey2};
        background-color: ${theme.colors.grey4}!important;
        border: none;
      }
    }

    span {
      margin-top: 6px;
      ${theme.Title};
    }
  }

  .form-section {
    padding: 1%;

    .hpCheck-txt {
      margin: -10px 0 50px 160px;
      ${theme.Body2};
    }

    @media ${({ theme }) => theme.device.mobile} {
      .terms-title {
        ${theme.Title};
        color: ${theme.colors.black1};
      }

      .terms-title-underline {
        height: 1px;
        background-color: ${theme.colors.black1};
      }
    }
  }

  .input-wrap {
    display: flex;
    align-items: center;
    padding: 0 0 16px;
    margin: 16px 0;
    border-bottom: 1px solid ${theme.colors.grey4};
    ${theme.Body1}

    &.terms {
      justify-content: space-between;
      margin: 16px 0 0;
    }
  }

  .last-input-wrap {
    margin: 16px 0 8px;
    border-bottom: none;
  }

  .label {
    width: 160px;
    flex-shrink: 0;
    padding-left: 15px;
    padding-right: 15px;
    ${theme.Title};
    color: ${theme.colors.black1};

    &.termsLabel {
      width: unset;
    }

    span {
      color: #f68657;
    }
  }

  .input-box {
    width: 300px;
    padding: 6px;
    border: solid 1px ${theme.colors.grey4};
    ${theme.Body1};
    background-color: transparent;
    color: ${theme.colors.black1};

    ::placeholder {
      ${theme.Body1};
      color: ${theme.colors.grey3};
    }

    :focus,
    :active {
      outline: none;
    }

    &.short-width {
      width: 187px;
    }

    &.no-border {
      border: none;
    }

    &.red {
      border: solid 1px ${theme.colors.red};
    }
  }
  .error-txt {
    display: flex;
    align-items: center;
    margin-left: 15px;
    color: ${theme.colors.red};
    ${theme.Body1};

    img {
      margin-right: 7px;
    }
  }

  .address-wrap {
    display: grid;
    input {
      margin-bottom: 10px;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }

  .terms-title {
    ${theme.H5};
    color: #a0736c;
    border-bottom: 1px;
  }

  .terms-title-underline {
    width: 100%;
    height: 2px;
    margin: 10px 0 30px;
    background-color: #a0736c;
  }

  .terms-check {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    .agree-arrow-btn {
      ${inlineFlexbox()};
    }

    .agree-arrow-txt {
      margin-right: 10px;
      ${theme.Body2};
      color: ${theme.colors.newblue};
    }
  }

  .check-wrap {
    display: flex;
    align-items: center;
  }

  .toggle-check {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    display: none;
  }
  input[id='all'] + label {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    cursor: pointer;
    background: url(${uncheckbox}) center;
  }

  input[id='all']:checked + label {
    background: url(${checkbox}) center;
    border: none;
    width: 15px;
    height: 15px;
  }

  .m[id='all']:checked + label {
    background: url(${agreeCheckbox}) center;
    border: none;
    width: 15px;
    height: 15px;
  }

  .header-strong {
    ${theme.Body1}
  }

  // 라디오

  .radio-wrap {
    display: flex;
    align-items: center;

    label {
      display: flex;
      align-items: center;
      margin: 0 2em 0 0;
      color: ${theme.colors.black1};
      ${theme.Body1}
    }
    input {
      ::placeholder {
        color: #c7c7c7;
      }
      &[type='radio'] {
        width: 1em;
        height: 1em;
        margin-right: 0.4em;
        padding: 0;
        &:checked {
          appearance: none;
          width: 1em;
          height: 1em;
          border-radius: 100%;
          border: solid 5px #a0736c;
          background-color: ${theme.colors.white};
        }
      }
    }

    @media ${({ theme }) => theme.device.mobile} {
      input {
        &:checked {
          border: solid 5px #1c8155 !important;
        }
      }
    }

    .radioValue-cms {
      width: 100%;
      margin: 1em 0;
      &-payerNumber {
        padding: 0.5em;
        margin-left: 1em;
      }
      &-account {
        font-size: 14px;
        padding: 0.5em 0.7em;
      }
      .radioValue-card {
        padding: 0.5em 0 0.5em 0.7em;
        &.name {
          margin-right: 0.8em;
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .icon-wrap {
      width: 100%;
    }

    .content-wrap {
      width: 100%;
    }

    .form {
      width: 100%;
      padding: 3%;
    }
  }
`;

export const TermsContainer = styled.div`
  // 개인정보

  .check-wrap {
    display: flex;
    align-items: center;
  }

  .toggle-btn {
    margin-left: 10px;
    padding: 4px 10px;
    background-color: ${theme.colors.grey4};
    ${theme.Body2};
    border-radius: 30px;
    cursor: pointer;
  }

  .toggle-check {
    width: 15px;
    height: 15px;
    margin-right: 1rem;
    margin-left: 1rem;
    display: none;
  }

  input[id='all'] + label {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    background: url(${uncheckbox}) center;
  }

  input[id='all']:checked + label {
    background: url(${checkbox}) center;
    border: none;
    width: 15px;
    height: 15px;
  }

  .toggle-wrap {
    @media ${({ theme }) => theme.device.desktop} {
      padding: 16px 20px 16px 38%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      padding: 16px;
    }
    background-color: ${theme.colors.midGrey};

    h3 {
      margin-bottom: 20px;
      ${theme.Body1};
    }
    p {
      ${theme.Body2}
    }
  }

  /* mobile */
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 15px;

    .input-wrap {
      .label {
        width: 90%;
        word-break: keep-all;

        > strong {
          color: ${theme.colors.murstard};
        }
      }
    }

    .toggle-btn {
      background-color: transparent;
    }

    .toggle-wrap {
      h3 {
        ${theme.Title};
      }

      p {
        color: ${theme.colors.black1};
      }

      &.first {
        h3 {
          margin-bottom: -10px;
        }

        .txt-mobile {
          margin-top: 20px;
          color: ${theme.colors.red};
        }
      }
    }
  }
`;

export const Info = styled.div`
  /* 상품 설명 */
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 1133px;
  min-height: 700px;
  .top-info {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    /* height: 88px; */
    margin-bottom: 50px;
    background-color: ${theme.colors.boxGray};
    padding: 20px 0 20px 10%;

    .goods {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 56px;
      margin-right: 10px;
      padding: 10px 30px;
      background-color: #a9a9a9;
      border-radius: 30px;
      ${theme.H4};
      color: ${theme.colors.white};
      margin-bottom: 10px;

      &.active {
        background-color: #a0736c;
      }
    }
  }

  .bottom-info {
    display: flex;
    flex-direction: column;
    width: 1133px;
    margin: 0 auto;

    .goods-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      h4 {
        position: absolute;
        margin-bottom: 30px;
        ${theme.H4};
        color: #fff;
        margin-top: -20px;
      }

      h5 {
        position: absolute;
        margin-top: 40px;
        ${theme.H5};
        color: #fff;
      }

      img {
        width: 100%;
      }
    }

    .title {
      margin-bottom: 30px;
      text-align: center;
      ${theme.H1}
    }

    .info-txt {
      ${theme.H5}
      margin:30px 0;
    }

    .info-txt2 {
      ${theme.H4};
      text-align: center;
      margin-bottom: 30px;
    }

    .goods-name {
      ${theme.H3}
      margin:40px 0;
    }

    table {
      width: 100%;
      margin: 20px 0 20px;
      border-collapse: collapse;
      border: 2px solid ${theme.colors.grey4};

      .grey {
        width: 160px;
        text-align: center;
        background-color: ${theme.colors.boxGray};
        ${theme.Button1};
        margin: 0 auto;
        vertical-align: middle;
        border: 2px solid ${theme.colors.grey4};
      }

      .td-title {
        ${theme.Button1};
        text-align: center;
        border-right: 1px solid ${theme.colors.grey4};
      }

      td {
        border-collapse: collapse;
        border: 1px solid ${theme.colors.grey4};
        border-right: 2px solid ${theme.colors.grey4};
        padding: 15px 20px;
        ${theme.Body1};
        span {
          ${theme.Title}
        }
        strong {
          color: ${theme.colors.lavender};
        }
      }
    }
  }

  p {
    ${theme.Body1};
  }
`;

export const StyledInput = styled(MaskedTextBox)`
  display: flex;
  align-items: center;
  border: solid 1px ${theme.colors.grey4};
  ${theme.Title};
  background-color: transparent !important;
  color: ${theme.colors.black1};
  width: ${(props) => (props.width ? props.width : '')};

  .k-textbox {
    padding: 6px;
    background-color: transparent;
    height: unset;
    ${theme.Title};
  }
  .k-textbox:focus {
    box-shadow: none;
  }
  .k-maskedtextbox {
    background-color: transparent !important;
    :active {
      box-shadow: none;
    }
  }
  .k-textbox::placeholder {
    color: #a9a9a9 !important;
    ${theme.Body1}
  }

  &.error {
    border: solid 1px ${theme.colors.red};
  }
`;

export const StyledInput2 = styled(MaskedTextBox)`
  display: flex;
  align-items: center;
  width: 100%;
  ${theme.Title};
  background-color: transparent !important;
  color: ${theme.colors.black1};
  border-bottom: 1px solid #000;
  .k-textbox {
    padding: 0;
    background-color: transparent;
    height: unset;
    ${theme.Body1};
  }
  .k-textbox:focus {
    box-shadow: none;
  }
  .k-maskedtextbox {
    background-color: transparent !important;
    :active {
      box-shadow: none;
    }
  }
  .k-textbox::placeholder {
    color: #a9a9a9 !important;
    ${theme.Body1}
  }
`;

export const StyledInput3 = styled(MaskedTextBox)`
  display: flex;
  align-items: center;
  ${theme.Title};
  background-color: transparent !important;
  color: ${theme.colors.black1};
  .k-textbox {
    padding: 0;
    background-color: transparent;
    height: unset;
    ${theme.Body1};
  }
  .k-textbox:focus {
    box-shadow: none;
  }
  .k-maskedtextbox {
    background-color: transparent !important;
    :active {
      box-shadow: none;
    }
  }
  .k-textbox::placeholder {
    color: #a9a9a9 !important;
    ${theme.Body1}
  }
`;

export const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  width: 156px;
  border: ${(props) => (props.red ? '1px solid red' : '1px solid #f1f2f2')};
  color: ${(props) => (props.red ? 'red' : '#f1f2f2')};

  select {
    width: 100%;
    padding: 10px;
    ${theme.Body1};
    background: url('${greyArrow}') no-repeat 95% 50%;
    border: none;
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
  select option:first-child {
    color: ${theme.colors.grey3};
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 32px;
  }
`;

// 카카오 드림컨시어지 모바일

export const KakaoContainer = styled.div`
  width: 100%;
  padding: ${(props) => props.padding};

  .mobile-title {
    margin-bottom: 20px;
    ${theme.H5};
    color: #373838;
  }

  .input-btn-wrap {
    ${flexbox('between', 'end')};

    .global-input-01 {
      flex: 1;
      margin-right: 10px;
    }
  }

  .sec01 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 184px;
    padding: 70px 20px 20px;
    background: url(${sec01Bg}) no-repeat;
    background-size: 100%;

    .close-btn {
      cursor: pointer;
      width: 100%;
      display: flex;
      margin-bottom: 50px;
      justify-content: flex-end;
    }

    h2 {
      font-family: 'OTWelcomeBA';
      font-size: 2.6em;
      line-height: 32.2px;
      color: #2b2b2b;
      margin-bottom: 5px;
    }

    p {
      font-family: 'OTWelcomeRA';
      font-size: 14px;
      line-height: 20px;
      color: ${theme.colors.black1};
    }
  }
  /* sec02 */

  .sec02 {
    width: 100%;
    padding: 20px 30px;
    background-color: #1c8155;

    h2 {
      font-family: 'OTWelcomeBA';
      font-size: 2.6em;
      line-height: 32.2px;
      color: ${theme.colors.white};
      margin-bottom: 20px;
      text-align: center;
      padding: 12px 20px 5px;
      border: 2px solid #ffffff;
    }

    p {
      font-family: 'OTWelcomeRA';
      font-size: 16px;
      line-height: 20px;
      color: ${theme.colors.white};
    }
  }
  /* sec03 */

  .sec03 {
    width: 100%;
    padding: 30px 37px;
    background-color: #fdf7e5;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      display: flex;
      align-items: center;
      white-space: nowrap;
      width: 140px;
      text-align: center;
      font-family: 'OTWelcomeRA';
      font-size: 16px;
      padding: 10px 30px 5px;
      border-radius: 20px;
      color: ${theme.colors.white};
      background-color: #ff8358;
      margin-bottom: 20px;
    }

    ul {
      display: flex;
      align-items: center;

      .or {
        margin: 0 10px;
      }
    }

    li {
      text-align: center;
      font-family: 'OTWelcomeRA';

      p {
        margin-top: 10px;
      }
    }
  }

  /* sec03 */

  .sec04 {
    width: 100%;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      display: flex;
      align-items: center;
      white-space: nowrap;
      text-align: center;
      width: 120px;
      padding: 12px 30px 5px;
      font-family: 'OTWelcomeRA';
      font-size: 16px;
      background-color: #1c8155;
      color: ${theme.colors.white};
      border-radius: 20px;
      margin-bottom: 20px;
    }

    .sec04-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      h3 {
        margin-bottom: 5px;
        font-family: 'OTWelcomeBA';
        font-size: 16px;
        color: #1c8155;
      }
      p {
        margin-bottom: 12px;
        font-family: 'OTWelcomeRA';
        font-size: 12px;
        line-height: 13.8px;
        color: #4d4d4d;
        text-align: center;
      }
    }
  }

  .next-btn {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    border-radius: 100px;
    padding: 10px;
    background: #ff8358;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'OTWelcomeBA';
    font-size: 16px;
    line-height: 18.4px;
    letter-spacing: 2%;
    color: ${theme.colors.white};
  }

  /* 신청 페이지 */

  .title {
    margin-bottom: 20px;
    text-align: center;
    color: #1c8155;
    font-family: 'OTWelcomeBA';
    font-size: 25px;
  }

  .subtitle-wrap {
    margin-bottom: 20px;

    .left {
      position: relative;
      margin-bottom: 6px;
      padding-left: 10px;
      text-align: left;
      word-break: keep-all;

      &::before {
        content: '•';
        position: absolute;
        left: -5px;
      }
    }

    &.m {
      margin-top: -10px;
      margin-bottom: 40px;
      padding-left: 20px;
    }
  }

  .subtitle {
    ${theme.Title};
    margin-bottom: 20px;
    text-align: center;

    span {
      color: ${theme.colors.red};
    }
  }

  .info-service-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    button {
      margin-right: 10px;
      padding: 6px;
      ${theme.Body1};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.grey4};
      border-radius: 30px;

      &.is-checked-service {
        color: #1c8155;
        background-color: #d4ebc9;
        border: 1px solid #1c8155;

        &::before {
          display: block;
          content: '';
          appearance: none;
          width: 10px;
          height: 10px;
          margin-right: 6px;
          background: url(${serviceCheck}) no-repeat 0 1px / contain;
        }
      }
    }
  }

  .close-btn {
    cursor: pointer;
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    justify-content: flex-end;
  }
  .submit-btn {
    width: 100%;
    height: 40px;
    padding: 10px;
    margin-top: 40px;
    background-color: #232323;
    color: ${theme.colors.white};
    ${theme.Title}

    &.service {
      &:disabled {
        opacity: 0.3;
      }
    }

    @media ${({ theme }) => theme.device.mobile} {
      &:disabled {
        opacity: 0.3;
      }
    }
  }

  /* 정보없음 페이지 */

  .noInfo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title2 {
      margin: 30px 0 10px;
      ${theme.H5};
      color: #1c8155;
    }
  }
`;

export const CheckInfoForm = styled.div`
  width: 100%;
  margin-top: 10px;

  .input-box {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: flex-start;
  }

  label {
    ${theme.Title};
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding-bottom: 6px;
    border-bottom: 1px solid #000;
    ${theme.Body1};
    ::placeholder {
      ${theme.Body1};
      color: ${theme.colors.grey3};
    }
  }
`;

export const InfoForm = styled.div`
  width: 100%;
  margin-top: 10px;

  .input-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 16px 10px;
    border-bottom: 1.5px solid #e3e3e3;
  }

  label {
    ${theme.Title};
    width: 110px;
    /* padding: 16px 32px 16px 10px; */
  }

  input {
    ${theme.Body1};
    ::placeholder {
      ${theme.Body1};
      color: ${theme.colors.grey3};
    }
  }
  //라디오
  .radio-wrap {
    display: flex;
    align-items: center;

    label {
      width: unset;
      display: flex;
      align-items: center;
      margin: 0 2em 0 0;
      color: ${theme.colors.black1};
      ${theme.Body1}
    }
    input {
      ::placeholder {
        color: #c7c7c7;
      }
      &[type='radio'] {
        width: 1em;
        height: 1em;
        margin-right: 0.4em;
        padding: 0;
        &:checked {
          appearance: none;
          width: 1em;
          height: 1em;
          border-radius: 100%;
          border: solid 5px #1c8155;
          background-color: ${theme.colors.white};
        }
      }
    }
    .radioValue-cms {
      width: 100%;
      /* display: flex;
    justify-content: space-between; */
      margin: 1em 0;
      &-payerNumber {
        padding: 0.5em;
        margin-left: 1em;
      }
      &-account {
        font-size: 14px;
        padding: 0.5em 0.7em;
      }
      .radioValue-card {
        padding: 0.5em 0 0.5em 0.7em;
        &.name {
          margin-right: 0.8em;
        }
      }
    }
  }

  .address-wrap {
    display: grid;
    input {
      margin-bottom: 10px;
    }

    > div {
      display: flex;
      align-items: center;
    }

    .input-inner {
      height: 32px;
      padding: 0 0 0 10px;
      border: 1px solid ${theme.colors.grey4};
    }
  }
`;
