/*
  커뮤니티 유형 분류
  2021.06.14. 이해영
*/
import React from 'react';
import { useDispatch } from 'react-redux';
// import _isMobile from '../../utils/isMobile';
//css
import styled from 'styled-components';
import theme from '../theme';
import CommonButton from '../../components/common/Button';

//images
import search from '../../images/common/icon/search.svg';

const CommunityTab = ({ state, setState, searchInfo, setSearchValue }) => {
  const dispatch = useDispatch();

  // const authStatus = useSelector((state) => state.auth.authStatus);
  // const isMobile = _isMobile();
  console.log(searchInfo);

  return (
    <Container>
      {/* 회원(공지사항) + 관리자(공지사항) & desktop */}
      <Common>
        <CommonButton kind="btn_03" width="120px" height="44px" children="전체" />
        <CommonButton kind="btn_04" width="120px" height="44px" children="일반" />
        <CommonButton kind="btn_04" width="120px" height="44px" children="시스템" />
        <CommonButton kind="btn_04" width="120px" height="44px" children="정산" />
        <input
          type="text"
          value={searchInfo?.searchValue || ''}
          placeholder="검색어를 입력하세요."
          onChange={(e) => {
            dispatch(setSearchValue(e.target.value));
          }}
          onKeyUp={() => {
            if (window.event.keyCode === 13) {
              setState({
                ...state,
                isLoading: true,
              });
            }
          }}
        />
        <CommonButton kind="btn_05" width="120px" height="44px" children="검색" />
      </Common>

      {/* 회원(공지사항) & mobile */}
      <IsMobileContainer className="member-mobile">
        <IsMobileWrap>
          <Common>
            <CommonButton kind="btn_03" width="120px" height="44px" children="전체" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="회원명" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="회원ID" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="제목" />
          </Common>

          <IsMobileInput>
            <input type="text" placeholder="검색어를 입력하세요." />
            <div className="search">
              <img src={search} alt="더보기" />
            </div>
          </IsMobileInput>
        </IsMobileWrap>
      </IsMobileContainer>

      {/* 관리자(1:1문의) & desktop */}
      <Common>
        <CommonButton kind="btn_03" width="120px" height="44px" children="전체" />
        <CommonButton kind="btn_04" width="120px" height="44px" children="회원명" />
        <CommonButton kind="btn_04" width="120px" height="44px" children="회원ID" />
        <CommonButton kind="btn_04" width="120px" height="44px" children="제목" />
        <input type="text" value="검색어를 입력하세요." />
        <CommonButton kind="btn_05" width="120px" height="44px" children="검색" />
      </Common>
      <AdminTab>
        <CommonButton kind="btn_03" width="266px" height="44px" children="전체" />
        <CommonButton kind="btn_04" width="266px" height="44px" children="접수" />
        <CommonButton kind="btn_04" width="266px" height="44px" children="답변완료" />
        <CommonButton kind="btn_06" width="267px" height="44px" children="선택항목 삭제" />
      </AdminTab>

      {/* 관리자(1:1문의) & mobile > 1:1문의 */}
      <IsMobileContainer>
        <IsMobileWrap>
          <Common>
            <CommonButton kind="btn_03" width="120px" height="44px" children="전체" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="회원명" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="회원ID" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="제목" />
          </Common>

          <AdminTab>
            <CommonButton kind="btn_03" width="266px" height="44px" children="전체" />
            <CommonButton kind="btn_04" width="266px" height="44px" children="접수" />
            <CommonButton kind="btn_04" width="266px" height="44px" children="답변완료" />
          </AdminTab>

          <IsMobileInput>
            <input type="text" placeholder="검색어를 입력하세요." style={{ marginRight: '0' }} />
            <div className="search" style={{ right: '11%' }}>
              <img src={search} alt="더보기" />
            </div>
          </IsMobileInput>
        </IsMobileWrap>
      </IsMobileContainer>

      {/* 관리자(1:1문의) & mobile > 공지사항*/}
      <IsMobileContainer>
        <IsMobileWrap>
          <Common>
            <CommonButton kind="btn_03" width="120px" height="44px" children="전체" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="회원명" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="회원ID" />
            <CommonButton kind="btn_04" width="120px" height="44px" children="제목" />
          </Common>

          <IsMobileInput>
            <input type="text" placeholder="검색어를 입력하세요." />
            <CommonButton kind="btn_05" width="120px" height="40px" children="글 작성" />
            <div className="search">
              <img src={search} alt="더보기" />
            </div>
          </IsMobileInput>
        </IsMobileWrap>
      </IsMobileContainer>
    </Container>
  );
};

export default CommunityTab;

const Container = styled.section``;

export const Common = styled.section`
  display: flex;

  button {
    margin-right: 10px;
    ${theme.Title};

    &:last-child {
      margin-right: 0;
    }
  }

  input {
    width: calc(100% - 600px);
    height: 44px;
    margin-right: 10px;
    padding: 12px 24px;
    ${theme.Title};
    color: ${theme.colors.grey3};
    border: 1px solid ${theme.colors.grey3};
    border-radius: 3px;
    outline: none;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const AdminTab = styled.section`
  display: flex;

  button {
    margin-right: 10px;
    ${theme.Title};

    &:last-child {
      margin-right: 0;
    }
  }

  input {
    width: calc(100% - 600px);
    height: 40px;
    margin-right: 10px;
    padding: 12px 24px;
    ${theme.Title};
    color: ${theme.colors.grey3};
    border: 1px solid ${theme.colors.grey3};
    border-radius: 3px;
    outline: none;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const IsMobileContainer = styled.section`
  padding-top: 56px;

  &.member-mobile {
    padding-top: 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 0;
  }
`;

export const IsMobileWrap = styled.section`
  ${Common} {
    button {
      flex: 20%;
      height: 32px;
      margin-right: 5px;
      padding: 10px;
      ${theme.Title};

      &:last-child {
        margin-right: 0;
      }
    }
  }

  ${AdminTab} {
    button {
      flex: 30%;
      height: 32px;
      margin-top: 10px;
      margin-right: 5px;
      padding: 10px;
      ${theme.Title};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const IsMobileInput = styled.section`
  display: flex;
  margin-top: 1em;

  input {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 43px;
    padding: 12px 24px;
    ${theme.Title};
    border-radius: 3px;
    border: 1px solid ${theme.colors.grey3};
    outline: 0;

    ::placeholder {
      ${theme.Title};
    }
  }

  .search {
    position: absolute;
    right: 10%;
    transform: translateY(13px);

    img {
      width: 100%;
    }
  }
`;
