import styled from 'styled-components';
import theme from './theme';

export const Styles = styled.div`
  .table {
    margin-top: 25px;
    margin-bottom: 0;
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
    .th {
      background-color: ${theme.colors.midGrey};
    }
    .td {
      border-bottom: 1px solid ${theme.colors.boxGray};
      background-color: ${theme.colors.white};
    }
    .th,
    .td {
      padding: 5px;
      text-align: center;
      overflow: hidden;
      :last-child {
        border-right: 0;
      }
      &:before,
      &:after {
        content: '';
        display: block;
        height: 10px;
      }
      .resizer {
        display: inline-block;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        &.isResizing {
          background: red;
        }
      }
    }
    .header {
      top: 0;
      border-top: 1px solid ${theme.colors.grey3};
      
      .th {
        ${theme.Title};
        color: ${theme.colors.black1};
      }
    }
    .body {
      max-height: 500px;
      border-top: 1px solid ${theme.colors.boxGray};
      &:last-child {
        border-bottom: 1px solid ${theme.colors.boxGray};
      }
      .td {
        ${theme.Body1};
        color: ${theme.colors.grey1};
        &.first-child {
          border-right: 0 !important;
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
    &.sticky {
      overflow-x: scroll;

      &::-webkit-scrollbar-track {
        margin-top: 50px;
        transform: translateX(-10px);
        background-color: ${theme.colors.white};
      }

      .header,
      .body .footer {
        position: sticky;
        z-index: 99;
        width: fit-content;
      }
      [data-sticky-td] {
        position: sticky;
      }
      [data-sticky-first-right-td] {
      }
    }
  }
  /* 휴대폰 신청 목록 */
  &.requestList {
    .lapis {
      background-color: #e8effc;
    }
    .accepting {
      color: ${theme.colors.grey3} !important;
    }
    .proceeding {
      color: ${theme.colors.black2} !important;
    }
    .application-cancle {
      color: ${theme.colors.murstard} !important;
    }
    .opening-cancle {
      color: ${theme.colors.brick} !important;
    }
    .opening-complete {
      color: ${theme.colors.lapis} !important;
    }
    [data-sticky-td]:first-child {
      border-right: 0 !important;
    }
    [data-sticky-last-left-td] {
      border-right: 1px solid ${theme.colors.grey4};
    }
  }
`;