import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import axios from 'axios';
import unescape from 'unescape'; // npm install --save unescape
import titleTab from '../../utils/TitleTab';
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("공지사항"), 100);

  // pagination
  const [noticeData, setNoticeData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [page, setPage] = useState([]);
  // 검색어 저장
  const [search, setSearch] = useState("");
  // 체크된 요소
  const [checkedItem, setCheckedItem] = useState();
  // 상태 저장(category, title)
  const [status, setStatus] = useState("");
  // 페이지 인덱스 테스트
  const [more, setMore] = useState(true);
  let nbsp = "\u00A0";

  // 페이지 이동 시 열린 목록 닫기
  const closeDetails = () => {
    const details = document.querySelectorAll("details");

    details.forEach(() => {
      details.forEach((detail) => {
        detail.removeAttribute("open");
      });
    });
  }
  // 한 페이지에서 하나의 목록만 열리도록 처리
  const oneDetail = (i) => {

    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }

  // 공지사항 목록 데이터 출력
  const renderData = (data) => {
    if (status === "title" && data.length === 0) {
      return (
        <NoPost>게시물이(가) 없습니다.</NoPost>
      )
    }
    else if (data.length === 0 || data === undefined) {
      return (
        <NoPost>게시물이(가) 없습니다.</NoPost>
      )
    }
    else {
      return (
        <Dropdown>
          {data.filter((val, idx) => {
            if (idx === 0 || (idx !== 0 && val.noticeId !== data[idx - 1].noticeId)) {
              return val;
            }
          }).map((notice) => {
            return (
              <details>
                <summary key={notice.noticeId} onClick={() => { oneDetail(notice.noticeId) }}>
                  <p className="number">{notice.noticeId}</p>
                  {notice.noticeCategoryId === 7 ? <p className="classify">대학</p> :
                    (notice.noticeCategoryId === 294 ? <p className="classify">학부</p> :
                      (notice.noticeCategoryId === 320 ? <p className="classify">컴소</p> :
                        (notice.noticeCategoryId === 321 ? <p className="classify">컴정</p> :
                          <p className="classify">인공</p>)))
                  }
                  <p className="title">{notice.title}</p>
                  <p className="attachments">
                    {notice.file.length !== 0 ?
                      <span><FontAwesomeIcon icon={faPaperclip} size="1x" /></span>
                      :
                      <span>{nbsp}</span>
                    }
                  </p>
                  <p className="writer">{notice.writer}</p>
                  <p className="date">{notice.createDate}</p>

                </summary>
                <NoticeContent>
                  {notice.file.length !== 0 &&
                    <div className='attachments'>
                      {notice.file.map((f) => {
                        return (
                          <p>
                            <FontAwesomeIcon style={{ color: 'grey', marginRight: '5px' }} icon={faPaperclip} size="1x" />
                            <a href={f.fileLink}>{f.fileName}</a>
                          </p>
                        )
                      })}
                    </div>
                  }
                  <span dangerouslySetInnerHTML={{ __html: unescape(notice.content) }} />
                </NoticeContent>
              </details>
            )
          })}
        </Dropdown>
      );
    }
  };

  // 카테고리 하나만 선택
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("dept");
    var checkValue = "";

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis.target) {
        checkboxes[i].checked = false;
        //스타일 초기화
        checkboxes[i].parentNode.style.backgroundColor = "";
        checkboxes[i].parentNode.style.color = "";
        checkboxes[i].parentNode.style.fontWeight = "";
      }
    }

    if (checkThis.target.checked === true) {
      checkValue = checkThis.target.value;
      //스타일 변경
      checkThis.target.parentNode.style.backgroundColor = "#0064ff";
      checkThis.target.parentNode.style.color = "white";
      checkThis.target.parentNode.style.fontWeight = "bold";
    }
    else {
      checkValue = "";
      //스타일 초기화
      checkThis.target.parentNode.style.backgroundColor = "";
      checkThis.target.parentNode.style.color = "";
      checkThis.target.parentNode.style.fontWeight = "";
    }

    setCheckedItem(checkValue);
    getDataCategory(checkValue);
    if (checkValue !== "") getDataFirstCategory(checkValue);
  };
  // 카테고리 선택 시 첫 페이지 데이터 가져오기
  const getDataFirstCategory = async (checkValue) => {
    const url = `${process.env.REACT_APP_SERVER_DOMAIN}/notice/category/` + checkValue + "/";
    let pageNumbers = [];
    let i, res;
    for (i = 1; i <= 5; i++) {
      res = await axios.get(url + i);
      if (res.data.result.length !== 0) pageNumbers.push(i);
      else break;
    }
    setPage(pageNumbers);

    if (Object.keys(pageNumbers).length !== 5) setMore(false);
    else {
      res = await axios.get(url + i);
      if (res.data.result.length !== 0) setMore(true);
      else setMore(false);
    }
  }
  // 체크박스 전체 해제
  const uncheckAll = () => {
    const checkboxes = document.getElementsByName("dept");
    for (let i = 0; i < checkboxes.length; i++) {
      setCheckedItem();
      checkboxes[i].checked = false;
      // 스타일 초기화
      checkboxes[i].parentNode.style.backgroundColor = "";
      checkboxes[i].parentNode.style.color = "";
      checkboxes[i].parentNode.style.fontWeight = "";
    }
  }
  // 카테고리 데이터 불러오기
  const getDataCategory = async (checkValue) => {
    var url = `${process.env.REACT_APP_SERVER_DOMAIN}/notice`;

    if (checkValue !== "") {
      url = url + "/category/" + checkValue;
      setStatus("category");
    }
    else {
      setStatus("");
    }

    const res = await axios.get(url);
    setNoticeData(res.data.result);

    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setSearch(""); // 검색어 초기화

    setcurrentPage(1);
  }

  // 페이지 번호 이동
  const handleClick = (event) => {
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setcurrentPage(Number(event.target.id));
    getDataIndex(Number(event.target.id));
  };
  // 인덱스(기본) 데이터 불러오기
  const getDataIndex = async (number) => {
    var url = `${process.env.REACT_APP_SERVER_DOMAIN}/notice`;
    // 기본 인덱스, 카테고리 인덱스, 검색 인덱스 중 1
    if (status === "category") {
      url = url + "/category/" + checkedItem + "/" + number;
    }
    else if (status === "title") {
      url = url + "/title/" + search + "/" + number;
    }
    else {
      url = url + "/" + number;
      setStatus("");
    }

    const res = await axios.get(url);
    setNoticeData(res.data.result);
  }
  // 페이지 번호
  const renderPageNumbers = () => {
    return (
      page.map((number) => {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage === number ? "active" : null}
          >
            {number}
          </li>
        );
      })
    )
  }
  // 페이지 번호 다음 파트 검사
  const MorePage = async (startPage) => {
    var url = `${process.env.REACT_APP_SERVER_DOMAIN}/notice`;
    let pageNumbers = [];
    let i, res;
    if (status === "category") url = url + "/category/" + checkedItem + "/";
    else if (status === "title") url = url + "/title/" + search + "/";
    else url = url + "/";

    for (i = startPage; i < startPage + 5; i++) {
      res = await axios.get(url + i);
      if (res.data.result.length !== 0) pageNumbers.push(i);
      else break;
    }
    setPage(pageNumbers);

    if (Object.keys(pageNumbers).length !== 5) setMore(false);
    else {
      res = await axios.get(url + i);
      if (res.data.result.length !== 0) setMore(true);
      else setMore(false);
    }
  }
  // 페이지 버튼(다음)
  const handleNextbtn = () => {
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setcurrentPage(currentPage + 1);

    if (((currentPage + 1) % 5) === 1) MorePage(currentPage + 1);
    getDataIndex(currentPage + 1);
  };
  // 페이지 버튼(이전)
  const handlePrevbtn = () => {
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setcurrentPage(currentPage - 1);

    if (currentPage === page[0] && page[0] !== 1) {
      let pageNumbers = [];
      for (let i = currentPage - 5; i < currentPage; i++) {
        pageNumbers.push(i);
      }
      setPage(pageNumbers);
      setMore(true);
    }
    getDataIndex(currentPage - 1);
  };

  // 처음 페이지 데이터 불러오기(기본)
  useEffect(() => {
    getDataFirst();
    MorePageFirst();
  }, []);
  // 데이터 불러오기(기본)
  const getDataFirst = async () => {
    const url = `${process.env.REACT_APP_SERVER_DOMAIN}/notice`;
    const res = await axios.get(url);
    setNoticeData(res.data.result);
  }
  const MorePageFirst = async () => {
    const url = `${process.env.REACT_APP_SERVER_DOMAIN}/notice/`;
    let pageNumbers = [];
    let i, res;
    for (i = currentPage; i < currentPage + 5; i++) {
      res = await axios.get(url + i);
      if (res.data.result.length !== 0) pageNumbers.push(i);
      else break;
    }
    setPage(pageNumbers);

    if (Object.keys(pageNumbers).length !== 5) setMore(false);
    else {
      res = await axios.get(url + i);
      if (res.data.result.length !== 0) setMore(true);
      else setMore(false);
    }
  }


  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setSearch(e.target.value);
  }
  // 검색어 데이터 불러오기
  const getDataSearch = async () => {
    var url = `${process.env.REACT_APP_SERVER_DOMAIN}/notice`;
    if (search !== "") {
      url = url + "/title/" + search;
      setStatus("title");
    }
    else {
      setStatus("");
    }

    const res = await axios.get(url);
    setNoticeData(res.data.result);

    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    uncheckAll(); // 카테고리 전체 해제
    setcurrentPage(1);
    getDataFirstSearch(url);
  }
  const getDataFirstSearch = async (url) => {
    let pageNumbers = [];
    let i, res;
    for (i = 1; i <= 5; i++) {
      res = await axios.get(url + "/" + i);
      if (res.data.result.length !== 0) pageNumbers.push(i);
      else break;
    }
    setPage(pageNumbers);

    if (Object.keys(pageNumbers).length !== 5) setMore(false);
    else {
      res = await axios.get(url + "/" + i);
      if (res.data.result.length !== 0) setMore(true);
      else setMore(false);
    }
  }

  return (
    <Container>

      {/*  카테고리 체크박스 */}
      <Category>
        <label htmlFor="head">
          <input type="checkbox"
            id="head"
            name="dept"
            value="head"
            onClick={(e) => checkOnlyOne(e)} />
          대학
        </label>
        <label htmlFor="department">
          <input type="checkbox"
            id="department"
            name="dept"
            value="department"
            onClick={(e) => checkOnlyOne(e)} />
          학부
        </label>
        <label htmlFor="software">
          <input type="checkbox"
            id="software"
            name="dept"
            value="software"
            onClick={(e) => checkOnlyOne(e)} />
          소프트웨어
        </label>
        <label htmlFor="informationEngineering">
          <input type="checkbox"
            id="informationEngineering"
            name="dept"
            value="informationEngineering"
            onClick={(e) => checkOnlyOne(e)} />
          정보공학
        </label>
        <label htmlFor="intelligence">
          <input type="checkbox"
            id="intelligence"
            name="dept"
            value="intelligence"
            onClick={(e) => checkOnlyOne(e)} />
          인공지능
        </label>
      </Category>

      {/* 검색창 */}
      <Search>
        <div className='right-box'>
          <input
            value={search}
            onChange={_handleInputChange}
            type='text'
            name='search'
            // placeholder='제목 검색'
            onKeyPress={(e) => { if (e.key === 'Enter') { getDataSearch() } }}
          />
          <button
            className='login-button'
            type='submit'
            onClick={getDataSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
          </button>
        </div>
      </Search>

      {/*  공지사항 데이터 출력 */}
      {renderData(noticeData)}

      {/*  페이지 이동 버튼 */}
      {noticeData.length !== 0 &&
        <PageBtn>
          <ul>
            <li>
              <button
                onClick={handlePrevbtn}
                disabled={currentPage === 1 ? true : false}
              >
                &lt;
              </button>
            </li>
            {renderPageNumbers()}
            <li>
              <button
                onClick={handleNextbtn}
                disabled={currentPage === page[Object.keys(page).length - 1] && more === false ? true : false}
              >
                &gt;
              </button>
            </li>
          </ul>
        </PageBtn>
      }

    </Container>
  )
}

// 공지사항 전체
const Container = styled.div`
  margin: 20px;
  width: 85%;
  height: fit-content;
  min-height: 100vh;
  padding: 10px;
  background: white;
`

// 카테고리 스타일
const Category = styled.div`
  margin-top: 15px;
  width: 60%;
  float: left;

  input {
    display: none;
  }
  label {
    margin: 0px 5px 5px 0px;
    padding: 8px;
    border: 1px solid #d8d8d8;
    border-radius: 30px;
  }
  label:hover {
    color: #0064ff;
  }
  
  @media (max-width: 880px) {
    width: 100%;
    text-align: center;
  }
`
// 검색창 스타일
const Search = styled.div`
  margin: 15px 0;
  float: left;
  width: 40%;

  .right-box {
    height: 100%;
    display: flex;
    
    input {
      width: 90%;
      height: 60%;
      padding: 5px 0;
      background: #f5f5f5;
      border: 1.5px solid #D8D8D8;
      }
  }

  .login-button {
    width: 10%;
    padding: 5px 0;
    background: #0064ff;
    color: #f5f5f5;
  }

  @media (max-width: 880px) {
    clear: both;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    .right-box {
      width: 60%;
      input {
        width: 90%;
      }
    }
    .login-button {
      width: 10%;
    }
  }
}
`
// 공지사항 목록의 내용
const NoticeContent = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  span img {
      width: 100%;
  }
  .attachments {
    border-bottom : 1px solid #d8d8d8;
    margin-bottom: 10px;
  }
  .attachments p {
    margin-bottom: 10px;
  }
  .attachments p a {
    color: #5f5f5f;
    text-decoration-line: none;
  }
`
// 공지사항 목록 드롭다운
const Dropdown = styled.div`
  clear: both;
  details {
    width: 100%;
    padding-top: 7px;
    cursor: pointer;
    transition: background 0.3s;
    min-height: fit-content;
    max-height: fit-content;
    transform-origin: top center;
    transition: all 0.3s;
  }
  summary {
    border: 1px solid #d8d8d8;
    width: 100%;
    text-align: center;
    display: inline;
    justify-content: center;
    padding: 20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;  
    box-sizing: border-box; 
  }
  details[open] {
    border-bottom: 1px solid #d8d8d8;
    transition: all 0.6s;
    min-height: 100px;
    max-height: 100%;
  }
  [open] summary .close {
    display: inline;
  }
  [open] summary {
    display: inline;
    border-bottom: 2px solid gray;
  }
  [open] summary .title {
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
  summary::marker{
    content: "";
  }

  details summary p{
    float: left;
    margin: 0;
  }
  .number, .classify{
    width: 8%;
  }
  .title{
    width: 50%;
    margin-right: 2%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align: left;
  }
  summary .attachments{
    width: 5%;
  }
  .writer{
    width: 12%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .date{
    width: 15%;
  }

  @media (max-width: 880px) {
  summary {
    padding: 10px;
  }
  [open] summary .title {
    width: 100%;
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }

  .number {
    display: none;
    width: fit-content;
  }
  .classify {
    float: none;
    color: #0064ff;
    width: fit-content;
    font-size: 10px;
  }
  .title {
    float: none;
    width: fit-content;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .writer, .date {
    color: lightgrey;
    font-size: 10px;
    width: fit-content;
    padding-right: 10px;
  }
  summary .attachments{
    clear: both;
    float: right;
    color: lightgrey;
    font-size: 10px;
    width: fit-content;
  }
  }
`
const NoPost = styled.p`
  clear: both;
  display: flex;
  align-items:center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  font-size: 15px;
`

// 페이지 이동 버튼
const PageBtn = styled.div`
  margin: 20px 0px;
  width: 100%;
  ul {
      margin: 0 auto;
      padding: 0;
      width: fit-content;
      list-style: none;
      display: flex;
  }
  ul li {
      margin: 10px;
      padding: 0 5px;
      cursor: pointer;
  }
  ul li.active {
      border-bottom: 2px solid black;
      color: black;
  }
  ul li button {
    background-color: transparent;
    border: none;
    color: black;
    cursor: pointer;
  }
`

export default HomePage;