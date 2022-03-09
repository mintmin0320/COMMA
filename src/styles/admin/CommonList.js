/*
  커뮤니티 리스트
  2021.06.14. 이해영
*/
//css
import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.section`
  width: 100%;
  .cursor {
    cursor: pointer;
  }
`;

export const Wrap = styled.div`
  width: 100%;
`;

// 회원 & desktop > 1:1문의
export const Member = styled.section`
  width: 100%;
  table {
    width: 100%;
    overflow: hidden;
    margin-top: 60px;
    border-top: 1px solid ${theme.colors.grey3};

    .none {
      &:before {
        content: '';
        display: block;
        height: 10px;
      }
    }

    .common {
      margin-left: 20px;
    }
  }

  .tbody-content {
    border-top: 1px solid ${theme.colors.boxGray}!important;
  }

  tbody {
    position: relative;
    border-top: 1px solid ${theme.colors.grey3};

    &:last-child {
      /* border-bottom: 1px solid ${theme.colors.grey3}; */
    }

    td {
      ${theme.Title};
      color: ${theme.colors.grey1};

      &:first-child {
        padding-left: 20px;
      }

      &:nth-child(3) {
        padding-right: 2em;
        white-space: nowrap;
      }

      &.common {
        display: inline-table;
        width: 88px;
        height: 28px;
        line-height: 26px;
        margin-right: 1em;
        text-align: center;
        font-size: 14px;
        font-family: NotoR;
        color: ${theme.colors.white};
        background-color: ${theme.colors.lapis};
        border-radius: 3px;
      }

      &.receipt {
        background-color: ${theme.colors.murstard};
        padding: 1px 23px;
      }

      &.complete {
        background-color: ${theme.colors.lapis};
        padding: 1px 10px;
      }

      &.subject {
        ${theme.H5};
        color: ${theme.colors.grey1};
      }
    }

    .arrow {
      transform: translateX(100px);
    }

    .arrow-active {
      transform: translateX(-100px) rotate(-180deg);
    }

    .detail-active,
    .modify-active {
      background-color: ${theme.colors.lightGrey};
      border-top: 1px solid ${theme.colors.lightGrey};
      border-bottom: 1px solid ${theme.colors.grey3};

      &:after {
        content: '';
        display: block;
        height: 40px;
      }

      td {
        padding-bottom: 20px;
      }
    }

    .detail-border-top-active {
      &:before {
        content: '';
        display: block;
        height: 14px;
      }
    }

    .detail-border-bottom-active {
      td {
        padding: 14px 10px 0;
      }
    }

    .modify-border-bottom-active {
      background-color: ${theme.colors.lightGrey};

      td {
        padding: 14px 10px 14px;
      }
    }
  }

  .view-star {
    img {
      margin: 0 4px;
      &:first-child {
        margin-left: 9px;
      }
    }
  }
  .share-box {
    display: flex;
    white-space: nowrap;
    padding: 12px 0;
    > div {
      margin-right: 1em;
    }
  }
  .view-share {
    background-color: ${theme.colors.midGrey};
    td {
      padding: 5px 20px 20px 0;
      img {
        margin: 0 4px;
      }
      span {
        margin-left: 0.5em;
        ${theme.Body1};
      }
    }
  }
  .share img {
    margin-left: 0.5em;
    transform: translateY(2px);
  }
  .view-star-grey {
    background-color: ${theme.colors.boxGray};
    td {
      padding: 1em 0;
      img {
        margin: 0 4px;
        transform: translateY(1.2px);
      }
      span {
        margin-left: 1em;
        ${theme.Body1};
      }
    }
  }
  .view-txt {
    padding: 2em;

    iframe {
      width: 1280px;
      height: 720px;
    }

    .image > img {
      width: 100%;
    }
  }

  .modify-text {
    ${theme.Body1};
    color: ${theme.colors.grey3};
    transform: translateX(-90px);
  }

  .desktop {
    margin: 0 4em;
  }

  .more-tel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    height: 28px;
    border-radius: 3px;
    background-color: ${theme.colors.grey4};
    ${theme.Title};
    position: absolute;
    text-align: center;
    top: 20px;
    right: 5%;

    .more-tel-btn {
      cursor: pointer;
    }
  }

  .toggle-wrap {
    /* transform: scaleY(0); */
    z-index: -1;
    opacity: 0;
    position: absolute;
    padding: 20px;
    top: 50px;
    right: 0px;
    width: 335px;
    border-radius: 6px;
    ${theme.Title};
    background: ${theme.colors.boxGray};
    border-bottom: 1px solid ${theme.colors.grey4};
    text-align: left;

    img {
      position: absolute;
      right: 5%;
      cursor: pointer;
    }
  }
  .toggle-wrap.active {
    /* transform: scaleY(1); */
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: 0.2s;
    width: 335px;
  }

  .tel-title {
    color: ${theme.colors.grey3};
    margin-bottom: 5px;
  }
  .memTel {
    padding-bottom: 5px;
    border-bottom: 1px solid ${theme.colors.grey3};
    margin-bottom: 10px;
  }
`;

// 관리자 & mobile > 1:1문의
export const IsMobileAdmin = styled.section`
  table {
    margin-top: 20px;
  }

  tbody {
    border-top: 1px solid ${theme.colors.boxGray};

    &:last-child {
      border-bottom: 1px solid ${theme.colors.grey3};
    }
  }

  td {
    ${theme.Title};
    color: ${theme.colors.grey1};
    white-space: nowrap;

    &.q_title {
      padding: 0 10px 16px !important;
    }

    &.receipt {
      padding: 16px 10px 12px;
      color: ${theme.colors.murstard};
    }

    &.complete {
      padding: 16px 10px 12px;
      color: ${theme.colors.turquoise};
    }

    &[colSpan] {
      font-family: NotoM;
      color: ${theme.colors.black1};
    }
  }
`;

// 관리자 & desktop > 1:1문의
export const Admin = styled.section`
  table {
    margin-top: 60px;
    border-top: 2px solid ${theme.colors.grey3};

    th,
    td {
      &:before,
      &:after {
        content: '';
        display: block;
        height: 20px;
      }
    }
  }

  thead {
    th {
      ${theme.Title};
      color: ${theme.colors.black1};
      text-align: center;

      &:first-child {
        padding-left: 20px;
      }
    }
  }

  tbody {
    border-top: 1px solid ${theme.colors.boxGreray};

    &:last-child {
      border-bottom: 1px solid ${theme.colors.grey3};
    }

    td {
      text-align: center;

      ${theme.Title};
      color: ${theme.colors.grey1};

      &:first-child {
        padding-left: 20px;
      }

      &.receipt {
        color: ${theme.colors.murstard};
      }
      &.complete {
        color: ${theme.colors.lapis};
      }
    }

    .nonmember {
      color: ${theme.colors.royalblue};
    }
  }
`;

// 회원 & mobile > 1:1문의
export const IsMobileMember = styled.section`
  padding: 2em;

  table {
    margin-top: 20px;
    overflow: hidden;
    table-layout: fixed;
  }

  tbody {
    border-top: 1px solid ${theme.colors.boxGray};

    &:last-child {
      border-bottom: 1px solid ${theme.colors.grey3};
    }

    &:before {
      content: '';
      display: block;
    }
  }

  td {
    padding: 14px;
    ${theme.Title};
    color: ${theme.colors.grey1};
    white-space: nowrap;

    &.common {
      display: inline;
      width: 52px;
      height: 20px;
      ${theme.Body1};
      color: ${theme.colors.white};
      background-color: ${theme.colors.lapis};
      border-radius: 3px;

      @media ${({ theme }) => theme.device.mobile} {
        &.common {
          display: inline-block;
          width: 100px;
          height: 23px;
          text-align: center;
        }
      }
    }

    &.receipt {
      background-color: ${theme.colors.murstard};
      padding: 1px 23px;
    }

    &.complete {
      background-color: ${theme.colors.lapis};
      padding: 1px 10px;
    }

    &[colSpan] {
      padding: 14px;
      font-family: NotoM;
      color: ${theme.colors.black1};
    }
  }

  .none {
    border: 1px solid ${theme.colors.lightGrey};

    &.admin {
      border: 1px solid ${theme.colors.grey3};
    }
  }

  .mobile-arrow {
    transform: translateX(80px);
  }
  .mobile-arrow-active {
    transform: translateX(-15px) rotate(-180deg);
  }

  .detail-modify {
    color: ${theme.colors.navyBox};
  }

  .detail-member {
    white-space: normal;
    background-color: ${theme.colors.lightGrey};
    border-bottom: 1px solid ${theme.colors.boxGray};
  }

  .detail-modify {
    ${theme.Body1};
    color: ${theme.colors.navyBox} !important;
  }

  .detail-admin-active {
    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%), #f8f8f8;
  }

  .detail-admin {
    white-space: normal;
  }

  .detail-admin-add {
    ${theme.Body1};
    color: ${theme.colors.grey3} !important;
    /* white-space: normal; */
  }

  .detail-active {
    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%), #f8f8f8;
  }

  .detail-admin-new {
    ${theme.Body1};
    color: ${theme.colors.navyBox} !important;
  }
`;

// 관리자 & desktop > 공지사항
export const AdminNotice = styled.section`
  table {
    margin-top: 60px;
    border-top: 1px solid ${theme.colors.grey3};

    th,
    td {
      &:before,
      &:after {
        content: '';
        display: block;
        height: 20px;
      }
    }
  }

  thead {
    th {
      ${theme.Title};
      color: ${theme.colors.black1};

      &:first-child {
        padding-left: 20px;
      }
    }
  }

  tbody {
    border-top: 1px solid ${theme.colors.boxGray};

    &:last-child {
      /* border-bottom: 1px solid ${theme.colors.grey3}; */
    }

    td {
      ${theme.Title};
      color: ${theme.colors.grey1};

      &:first-child {
        padding-left: 20px;
      }

      img {
        margin-right: 5px;
        transform: translateY(1px);
      }
    }
  }
`;

// 회원+관리자 & mobile > 공지사항
export const NoticeList = styled.section`
  table {
    margin-top: 25px;
    border-top: 1px solid ${theme.colors.grey3};

    th,
    td {
      &:before,
      &:after {
        content: '';
        display: block;
        height: 14.3px;
      }
    }
  }

  thead {
    border-bottom: 1px solid ${theme.colors.boxGray};

    th {
      ${theme.Title};
      color: ${theme.colors.black1};
      background-color: ${theme.colors.midGrey};
      &:first-child {
        padding-left: 20px;
      }
    }
  }

  tbody {
    border-top: 1px solid ${theme.colors.boxGray};

    &:last-child {
      /* border-bottom: 1px solid ${theme.colors.boxGray}; */
    }

    td {
      ${theme.Title};
      color: ${theme.colors.grey1};

      &:first-child {
        padding-left: 20px;
      }

      &.receipt {
        color: ${theme.colors.murstard};
      }
      &.complete {
        color: ${theme.colors.lapis};
      }
    }

    img {
      margin-right: 6px;
      transform: translateY(1px);
    }

    a {
      color: ${theme.colors.black1};
    }
  }
`;

// 회원+관리자 & mobile > 공지사항
export const IsMobileNotice = styled.section`
  .share-box {
    display: flex;
    white-space: nowrap;
    padding: 0 0 12px;
    > div {
      margin-right: 1em;
    }
  }

  padding: ${(props) => (props.padding ? props.padding : '0')};
  .toggle-wrap {
    /* transform: scaleY(0); */
    z-index: 1;
    position: absolute;
    padding: 30px 20px;
    top: 170px;
    right: 0px;
    left: 5%;
    width: 90%;
    border-radius: 6px;
    ${theme.Title};
    background: ${theme.colors.boxGray};
    border-bottom: 1px solid ${theme.colors.grey4};
    text-align: left;

    img {
      position: absolute;
      top: 15px;
      right: 20px;
    }
  }
  .toggle-wrap.active {
    /* transform: scaleY(1); */
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: 0.2s;
    width: 335px;
  }

  .tel-title {
    color: ${theme.colors.grey3};
    margin-bottom: 5px;
  }
  .memTel {
    padding-bottom: 5px;
    border-bottom: 1px solid ${theme.colors.grey3};
    margin-bottom: 10px;
  }

  .k-button {
    margin-top: 20px;
    float: right;
    ${theme.Body1};
    background: none;
    border: none;
    color: ${theme.colors.navyBox}!important;
  }

  a {
    display: block;
    width: 100%;
    color: ${theme.colors.black1};
  }
  table {
    table-layout: fixed;
    margin-top: 0px;
  }
  tbody {
    border-top: 2px solid ${theme.colors.boxGray};
    &:last-child {
      /* border-bottom: 1px solid ${theme.colors.boxGray}; */
    }
    .n_date {
      padding: 16px 0 0;
    }
    .n_title {
      padding: 5px 0 16px 0;
    }
  }
  tfoot {
    .tfoot-star {
      padding-left: 0.3em;
      padding-bottom: 1em;
    }
    .tfoot-share {
      padding: 0 0.5em;
      display: flex;
      align-items: center;
      margin-bottom: 1em;
    }
    .tfoot-txt {
      padding-right: 0.6em;
    }
    img {
      margin-right: 8px;
    }
  }
  td {
    padding: 14px;
    ${theme.Title};
    color: ${theme.colors.grey1};
    white-space: nowrap;

    &.common {
      display: inline;
      width: 100%;
      height: 20px;
      ${theme.Body1};
      color: ${theme.colors.white};
      background-color: ${theme.colors.lapis};
      border-radius: 3px;
      padding: 1px 23px !important;
      @media ${({ theme }) => theme.device.mobile} {
      }
    }

    &.receipt {
      background-color: ${theme.colors.murstard};
      padding: 1px 23px;
    }

    &.complete {
      background-color: ${theme.colors.lapis};
      padding: 1px 10px;
    }
  }

  .view-txt {
    padding: 0 1em 1em;
    ${theme.Body1};
    color: ${theme.colors.grey1};
    white-space: pre-wrap;
    background-color: ${theme.colors.lightGrey}!important;

    p {
      ${theme.Body1};
      color: ${theme.colors.grey1}!important;
    }

    pre {
      ${theme.Body1};
      color: ${theme.colors.grey1}!important;
    }

    img {
      width: 100%;
    }

    iframe {
      width: 100%;
    }
  }

  td {
    ${theme.Title};
    color: ${theme.colors.grey1};
    white-space: nowrap;
    &[colSpan] {
      font-family: NotoM;
      color: ${theme.colors.black1};
      &:before {
        content: '';
        display: block;
        height: 8px;
      }
    }
  }

  .view-bottom {
    td {
      padding: 10px;
    }
    .view-img01 {
      img {
        margin-right: 5px;
        transform: translateY(1px);
      }
    }
    .view-img02 {
      transform: translateX(-20px);
      img {
        transform: translate(4px, 3px);
      }
    }
  }
  .notice-head {
    td {
      padding: 10px;
    }

    .notice-title-td {
      white-space: pre-wrap;
    }
    .notice-subject {
      padding: 0 10px 10px 10px;
    }
  }

  .notice-title {
    padding: 10px 40px 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .notice-body {
    padding: 10px;
  }
  .notice-star {
    text-align: right;
  }

  .modify-btn {
    color: ${theme.colors.navyBox};
  }

  @media (max-width: 379px) {
    .more-tel-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 28px;
      border-radius: 3px;
      background-color: ${theme.colors.grey4};
      ${theme.Title};
    }
  }
`;
