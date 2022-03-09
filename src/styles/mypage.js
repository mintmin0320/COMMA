import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 55px;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const DeviceWrap = styled.div`
  width: 100%;
`;

// 회원계정
export const Account = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 1em;
  margin: 0 auto;
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  margin: 5px 0 0px 15px;
`;

export const AccountName = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const AccountAuth = styled.div`
  color: #999999;
  font-size: 12px;
  line-height: 15px;
`;

export const Notice = styled.div`
  width: 100px;
  color: #666666;
  line-height: 12px;
  text-align: right;
  margin-top: 5px;
`;

export const NoticeTitle = styled.div`
  color: #777777;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`;

// 회원 Summary
export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 4em;
  border-bottom: 1px solid #dcdcdc;
  margin: 0 auto 1.7em;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 5px 0 5px 0;
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  height: 100%;
  border-right: 1px solid #dcdcdc;
  &:last-child {
    border-right: 0px;
  }
`;

export const StatusNumber = styled.div`
  color: #1e3c72;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;

export const StatusTitle = styled.div`
  color: #999999;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
`;

// My Menu
export const TreeWrap = styled.div`
  width: 100%;
`;

export const MobileWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
`;

export const WebWrap = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 769px;
`;

export const LeftBody = styled.div`
  width: 22%;
  height: 80vh;
  margin-top: 1em;
  border-right: 1px solid #dcdcdc;
`;

export const RightBody = styled.div`
  width: 78%;
  padding: 20px;
`;

export const Anchor = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #666666;
  text-decoration: none;
`;

export default Container;
