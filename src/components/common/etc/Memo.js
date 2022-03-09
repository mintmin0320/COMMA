/*
----- Memo 호출시 예제 -----
<Memo
  state={state}
  setState={setState}
  maxHeight="170px"
  saveApi="/api/hp/request/set_memo_update.php"
  removeApi="/api/hp/request/set_memo_delete.php"
  setMemoFunc={_setMemoFunc}
/>;

 */

import React from 'react';
import styled, { css } from 'styled-components';
// 개발자 라이브러리
import _axios from '../../../utils/axios';
import _isMobile from '../../../utils/isMobile';
// css
import { Title } from '../../../styles/list';
import theme from '../../../styles/theme';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '../Button';
import { useSelector } from 'react-redux';
// images
import close from '../../../images/close.svg';
import { propStyled, settingDevice } from '../../../styles/styledFunction';

const Memo = ({ state, setState, saveApi, removeApi, setMemoFunc, maxHeight }) => {
  const isMobile = _isMobile();
  const authStatus = useSelector((store) => store.auth.authStatus);

  // 메모 내용 저장
  const _saveMemo = async () => {
    const url = saveApi;
    const params = {
      idx: state.idx,
      adminId: state.adminId,
      adminName: authStatus.userInfo.userName,
      adminMemo: state.adminComment,
    };
    const { result } = await _axios(url, params);
    if (result === '0') {
      setState({
        ...state,
        isLoading: true, // getData 재실행
        adminComment: '',
      });
    } else {
      alert('다시 입력해주세요');
    }

    setMemoFunc();
  };

  // 메모 내용 삭제
  const _removeMemo = async (idx) => {
    const url = removeApi;
    const params = {
      idx: parseInt(idx),
    };
    const { result } = await _axios(url, params);

    if (result === '0') {
      setState({
        ...state,
        isLoading: true, // getData 재실행
        adminComment: '',
      });
    } else {
      alert('다시 삭제해주세요');
    }

    setMemoFunc();
  };

  // 글입력시 state 저장
  const _handleTextarea = (e) => {
    setState({
      ...state,
      saveCheck: true,
      [e.target.name]: e.target.value,
    });
  };

  // ( 3 ) 관리자 메모있을시 렌더함수
  const MemoAdmin = () => {
    return (
      <React.Fragment>
        {state.adminMemo && (
          <div className="memo">
            <h1>관리자</h1>
            <div className="memo-content">
              {state.adminMemo.split('\n').map((line, index2) => {
                return (
                  <p key={index2}>
                    {line}
                    <br />
                  </p>
                );
              })}
            </div>
            <div className="memo-remove keep-memo">
              <p>{state.wdate}</p>
              <img
                onClick={() => {
                  setState({
                    ...state,
                    adminMemo: '',
                  });
                }}
                src={close}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  // ( 2 ) 메모컴포넌트 공통으로쓰는부분 jsx
  const MemoMain = () => {
    return isMobile ? (
      // 모바일
      <div className="memo-box">
        {state.memoData.map((data, index) => (
          <div key={index} className="memo">
            <div style={{ width: '100%' }} className="memo-content">
              {data.adminMemo.split('\n').map((line, index2) => {
                return (
                  <p key={index2}>
                    {line}
                    <br />
                  </p>
                );
              })}
            </div>

            <div className="memo-remove">
              <h1>{data.adminName}</h1>
              <p>{data.wdate}</p>
              <img
                onClick={() => {
                  _removeMemo(data.idx);
                }}
                src={close}
              />
            </div>
          </div>
        ))}
        <MemoAdmin />
      </div>
    ) : (
      // pc
      <div className="memo-box">
        {state.memoData.map((data, index) => (
          <div key={index} className="memo">
            <h1>{data.adminName}</h1>

            <div className="memo-content">
              {data.adminMemo.split('\n').map((line, index2) => {
                return (
                  <p key={index2}>
                    {line}
                    <br />
                  </p>
                );
              })}
            </div>
            <div className="memo-remove">
              <p style={{ marginRight: '6px' }}>{data.wdate}</p>
              <img
                onClick={() => {
                  _removeMemo(data.idx);
                }}
                src={close}
              />
            </div>
          </div>
        ))}
        <MemoAdmin />
      </div>
    );
  };

  // -------------------- ( 1 ) 메인 컴포넌트 ----------------

  return (
    <StyledMemo maxHeight={maxHeight} isMobile={isMobile}>
      <Title fontSize="15px">관리자 메모</Title>
      <div className="memo-wrap">
        <MemoMain />
        <div className="memo-write">
          <TextareaAutosize
            placeholder="메모를 작성해주세요."
            value={state.adminComment || ''}
            name="adminComment"
            onChange={_handleTextarea}
            style={{ height: '40px!important', width: settingDevice('200px', '446px') }}
            maxRows={5}
          ></TextareaAutosize>
          <Button type="button" onClickHandler={_saveMemo} width="75px" height="42px">
            메모입력
          </Button>
        </div>
      </div>
    </StyledMemo>
  );
};

export default Memo;

// -------------- 스타일 컴포넌트 -------------------

export const StyledMemo = styled.div`
  ${(props) => {
    return css`
      margin-top: 30px;
      .memo-wrap {
        background-color: ${theme.colors.midGrey};
      }

      .memo-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        max-height: ${propStyled(props, 'maxHeight', '325px')};

        /* max-height: ${(props) => (props.maxHeight ? props.maxHeight : '325px')} */

        padding: 5px 20px 10px;
        overflow: auto;
      }

      .memo {
        flex-direction: ${settingDevice('column', 'row')};
        width: 100%;
        height: auto;
        border-bottom: 1px solid ${theme.colors.grey4};
        display: flex;
        align-items: flex-start;
        font-size: ${theme.fontSizes.Body1};
        font-family: NoToR;
        color: ${theme.colors.black1};
        padding: 15px 0;
        h1 {
          line-height: 20px;
          width: 20%;
        }

        .memo-content {
          width: 55%;
          flex-direction: column;
          p {
            line-height: 20px;
            width: 100%;
            white-space: normal;
          }
        }

        .memo-remove {
          color: ${theme.colors.grey2};
          width: ${settingDevice('100%', '29%')};
          margin-left: ${settingDevice('0', '45px')};
          display: flex;
          justify-content: ${settingDevice('space-between', 'flex-start')};
          align-items: center;
          margin-top: ${settingDevice('16px', '0')};

          h1 {
            width: ${settingDevice('50%', '')};
          }
          p {
            line-height: 20px;
            overflow: unset;
            white-space: nowrap;
            margin-right: ${settingDevice('6px', '0')};
          }
          img {
            transform: translateY(1px);
            cursor: pointer;
          }
        }

        .keep-memo {
          p {
            margin-right: 63px;
          }
        }
      }

      .memo-write {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 12px 20px;

        textarea {
          border: 1px solid ${theme.colors.grey3};
          outline: none;
          width: 100% !important;
          margin-right: 20px;
          background-color: ${theme.colors.white};
          font-family: NoToR;
          ${theme.Body1}
          resize: none;
          padding: 10px;
        }

        button {
          background-color: ${theme.colors.grey4};
          border: 1px solid ${theme.colors.grey3};
          border-radius: 0px;
        }
      }
    `;
  }}
`;
