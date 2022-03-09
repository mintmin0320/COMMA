import styled from 'styled-components';
import theme from '../styles/theme';

export const Container = styled.div`
  width: 100%;

  .admin-home-title {
    ${theme.H4};
    margin-bottom: 25px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
 
`;

export const CardWrap = styled.div`
  width: 309px;
  min-height: 200px;
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 20px;
  color: ${theme.colors.black1};
  border: 1px solid ${theme.colors.grey4};
  border-radius: 3px;
  background: ${theme.colors.boxGray};

  .title-link-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title-link,
  .link {
      color: ${theme.colors.royalblue};
      text-decoration: underline;
      cursor: pointer;
  }

  .title-common {
    margin-bottom: 20px;
  }

  h2 {
    ${theme.H5};
  }

  .title-link {
    ${theme.Body1};
  }

  .admin-home-card {
    ${theme.Body1};
    font-family: NotoR;

    &-list {
      display: flex;

      strong {
        margin: 0 13px 0 10px;
      }
      
      :not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 20px;
    }

    .admin-home-card, .title-link {
      font-size: 14px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-right: 0;
  }
 
`;

export const Header = styled.div`
  width: 100%;
  line-height: 2em;
  font-size: 0.9em;
  color: #222222;
  font-weight: 600;
  background: #dcdcdc;
  padding-left: 10px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  color: #666666;
  background-color: #fff;
  font-size: 0.8em;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CellWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  height: 2em;
  border-bottom: 1px solid #dcdcdc;
`;

export const CellHeader = styled.div`
  color: #222222;
  padding-top: 0.3em;
`;

export const Cell = styled.div`
  width: 55%;
  line-height: 1.5em;
  color: #666666;
  padding-top: 0.3em;
`;

