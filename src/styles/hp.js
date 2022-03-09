import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from './theme';
import hpbanner from '../images/hp/hpbanner.jpg';

const hp = () => {
  return (
    <Container>
      <TopWrap>
        <HpBanner>
          <h3>휴대폰 간편 신청</h3>
        </HpBanner>
      </TopWrap>
    </Container>
  );
};

export const Container = styled.section`
  width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    background-color: ${theme.colors.lightGrey};
  }

  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const TopWrap = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 720px;
    margin: 100px auto 30px;
  }
`;

export const HpBanner = styled.div`
  width: 100%;
  height: 80px;
  margin: 10px 0;
  background: url(${hpbanner}) center no-repeat;
  background-size: 100%;

  h3 {
    padding: 30px 20px;
    ${theme.Title};
    color: ${theme.colors.black1};
  }
`;

export const ContentWrap = styled.div`
  position: relative;
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 20px 3em 12em;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 720px;
    margin: 0 auto;
  }

  .subtitle-name {
    margin-bottom: 20px;
    ${theme.Title}
    color:${theme.colors.black1}
  }

  .address {
    padding: 10px;
    ${theme.Body1}
    color:${theme.colors.grey1}
  }

  .search-address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.boxGray};

    .address {
      ${theme.Body1}
    }

    p {
      ${theme.Body2};
      color: ${theme.colors.grey2};
      padding: 21px 20px;
    }

    span {
      ${theme.Button1};
      color: ${theme.colors.lapis};
      padding-right: 30px;
    }
  }
`;

export const LineStyle = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${theme.colors.boxGray};
`;

export default hp;
