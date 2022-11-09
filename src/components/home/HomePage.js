import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import axios from 'axios';
import unescape from 'unescape'; // npm install --save unescape
import titleTab from '../../utils/TitleTab';
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartArrowDown, faMedal } from "@fortawesome/free-solid-svg-icons";


// 목록 열고 닫기
const Dropdown = styled.div`
  details {
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s;
    min-height: 20px;
    max-height: 60px;
    transform-origin: top center;
    // transform: rotate(0.1deg);
    transition: all 0.3s;
    // display: flex;
    // justify-content: center;
  }
  summary {
    width: 100%;
    border: 1px solid #878d99;
    border-radius: 10px;
    display: center;
    justify-content: center;
  }
  details[open] {
    transition: all 0.6s;
    min-height: 100px;
    max-height: 100%;
  }
  summary {
    display: none;
  }
  [open] summary .close {
      display: inline;
  }
  summary {
      display: inline;
  }
  [open] summary {
      display: inline;
  }
  summary::marker{
      content: "";
  }
`
// 파일개수 hover 시 파일다운링크 띄우기
const Tooltip = styled.span`
  .tooltip {
      position: relative;
      display: block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    position: absolute;
    z-index: 1;

    bottom: 130%;
    left: 50%;
    margin-left: -60px;
  }
  .tooltip:hover .tooltiptext {
      visibility: visible;
  }
  .tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 5px;
    
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-color: black transparent transparent transparent;
  }
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

// 공지사항 전체
const Container = styled.div`
  margin: 20px;
  // padding-top: 80px;
  // padding-left: 10%;
  // text-align: center;
  width: 85%;
  height: fit-content;
  min-height: 100vh;
  padding: 10px;
  background: white
`

// 공지사항 목록의 내용
const NoticeContent = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  span img {
      width: 100%;
  }
`

const HomePage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("공지사항"), 100);

  // pagination
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [page, setPage] = useState([1,2,3,4,5]); // pageNumbers
  const [itemsPerPage, setitemsPerPage] = useState(6); // 한 page당 보여지는 목록 개수 // 
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [inputValue, setInputValue] = useState(""); // 

  const [status, setStatus] = useState(""); // category, title
  
  const indexOfLastItem = currentPage * itemsPerPage; // 
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem); // 

  const [content, setContent] = useState([]); // 
  const [contentId, setContentId] = useState();
  // 공지사항 목록의 내용을 불러와 저장
  const getContent = async (i) => {
      const url = "http://210.121.173.182/notice/id/"+i;

      console.log(url);
      const res = await axios.get(url);
      setContent(res.data);
  }
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
      if(i !== contentId) {
          setContent([]);
          setContentId(i);
          getContent(i); // 
      }

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

  // ==========================================================

  // 공지사항 목록 데이터 출력
  const renderData = (data) => {
    if(status === "title" && data.length === 0) {
        return(<p style={{marginTop: '50px', minWidth: '520px', textAlign: 'center', fontSize: '15px'}}>게시물이(가) 없습니다.</p>)
    }
    else if(data === undefined){
      return;
    }
    else {
    return (
      <Dropdown>
        <NoticeList>
        {data.filter((val, idx) => {
                if(idx === 0 || (idx!==0 && val.noticeId !== data[idx-1].noticeId)){
                    return val;
                }
                else{
                    // console.log(idx);
                }
            }).map((notice, i) => {
            return (
              <details>
                <summary key={notice.noticeId} onClick={() => {oneDetail(notice.noticeId)}}>
                <p>{notice.noticeId}</p>
                { notice.noticeCategoryId === 7 ? <p>대학</p> : 
                  (notice.noticeCategoryId === 294 ? <p>학부</p> : 
                  (notice.noticeCategoryId === 320 ? <p>컴소</p> : 
                  (notice.noticeCategoryId === 321 ? <p>컴정</p> : 
                  <p>인공</p>)))
                }
                <p style={{width: '50%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{notice.title}</p>
                <p>{notice.writer}</p>
                <p>{notice.createDate}</p>

                {/* <Tooltip>
                { notice.fileCount > 0 ?
                  <a href={notice.fileLink}><p>{notice.fileCount}</p></a>
                :<p>첨부파일 없음</p>
                }
                </Tooltip> */}

                </summary>
                <NoticeContent>
                <span dangerouslySetInnerHTML={{__html: unescape(notice.content)}} />
                {/* <span dangerouslySetInnerHTML={{__html: unescape(content.content)}} /> */}
                </NoticeContent>
              </details>
            )
        })}
        </NoticeList>
      </Dropdown>
    );
    }
  };

  // ==========================================================

   // 체크된 요소
  const [checkedItem, setCheckedItem] = useState();
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

    if(checkThis.target.checked === true){
      checkValue = checkThis.target.value;
      //스타일 변경
      checkThis.target.parentNode.style.backgroundColor = "#0064ff";
      checkThis.target.parentNode.style.color = "white";
      checkThis.target.parentNode.style.fontWeight = "bold";
    }
    else{
      checkValue = "";
      //스타일 초기화
      checkThis.target.parentNode.style.backgroundColor = "";
      checkThis.target.parentNode.style.color = "";
      checkThis.target.parentNode.style.fontWeight = "";
    }
    
    setCheckedItem(checkValue);
    getDataCategory(checkValue);
    if(checkValue !== "") getDataFirstCategory(checkValue);
  };
  const getDataFirstCategory =async(checkValue)=> {
    const url = "http://210.121.173.182/notice/category/"+checkValue+"/";
    let pageNumbers = [];
    let i, res;
    for(i=1; i<=5; i++){
      res = await axios.get(url+i);
      if(res.data.result.length !== 0) pageNumbers.push(i);
      else break;
    }
    setPage(pageNumbers);

    if(Object.keys(pageNumbers).length !== 5) setMore(false);
    else{
      res = await axios.get(url+i);
      if(res.data.result.length !== 0) setMore(true);
      else setMore(false);
    }
  }
  // 체크박스 전체 해제
  const uncheckAll =()=> {
    const checkboxes = document.getElementsByName("dept");
    for(let i=0; i<checkboxes.length; i++){
      setCheckedItem();
      checkboxes[i].checked = false;
      // 스타일 초기화
      checkboxes[i].parentNode.style.backgroundColor = "";
      checkboxes[i].parentNode.style.color = "";
      checkboxes[i].parentNode.style.fontWeight = "";
    }
  }
  // 카테고리 데이터 불러오기
  const getDataCategory =async(checkValue)=> {
    var url = "http://210.121.173.182/notice";

    if(checkValue !== "") {
      url = url + "/category/" + checkValue;
      setStatus("category");
    }
    else {
      setStatus("");
    }

    const res = await axios.get(url);
    setTest(res.data.result);
    
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setSearch(""); // 검색어 초기화

    setcurrentPage(1);

    // console.log(res.data);
    // console.log(url);
  }

    // ==========================================================


  // 페이지 번호 이동
  const handleClick = (event) => {
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setcurrentPage(Number(event.target.id));
    // if(status === "index"){
    //     getData("index", Number(event.target.id));
    // }
    getDataIndex(Number(event.target.id));
  };
  // 인덱스(기본) 데이터 불러오기
  const getDataIndex = async(number) => {
    var url = "http://210.121.173.182/notice";
    // 기본 인덱스, 카테고리 인덱스, 검색 인덱스 중 1
    if(status === "category") {
      url = url + "/category/" + checkedItem + "/" + number;
      // setStatus("category");
    }
    else if(status === "title") {
      url = url + "/title/" + search + "/" + number;
      // setStatus("title");
    }
    else {
      url = url + "/" + number;
      setStatus("");
    }
    // url = url + "/" + status + "/" + ~~~ ;

    const res = await axios.get(url);
    setTest(res.data.result);

    console.log(res.data);
    // console.log(url);
  }

  // 페이지 번호
  const renderPageNumbers = () => {
    return(
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
  // 
  const datatest3 =async(startPage)=> {
    var url = "http://210.121.173.182/notice";
    let pageNumbers = [];
    let i, res;
    if(status === "category") url = url + "/category/" + checkedItem + "/";
    else if(status === "title") url = url + "/title/" + search + "/";
    else  url = url + "/";
    
    for(i=startPage; i<startPage+5; i++){
      res = await axios.get(url+i);
      if(res.data.result.length !== 0) pageNumbers.push(i);
      else break;
    }
    setPage(pageNumbers);

    if(Object.keys(pageNumbers).length !== 5) setMore(false);
    else{
      res = await axios.get(url+i);
      if(res.data.result.length !== 0) setMore(true);
      else setMore(false);
    }
  }
  // 페이지 버튼(다음)
  const handleNextbtn = () => {
      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      setcurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }

      if(((currentPage+1)%5) === 1) datatest3(currentPage+1);
      getDataIndex(currentPage+1);
  };
  // 페이지 버튼(이전)
  const handlePrevbtn = () => {
      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      setcurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
      
      if(currentPage === page[0] && page[0] !== 1){
        let pageNumbers = [];
        for(let i=currentPage-5; i<currentPage; i++){
          pageNumbers.push(i);
        }
        setPage(pageNumbers);
        setMore(true);
      }
      getDataIndex(currentPage-1);
  };

  // ==========================================================

    // 데이터 저장 (수정)
    const [test, setTest] = useState();
    
    // 처음 페이지 데이터 불러오기(기본)
    useEffect(() => {
      getData1();

      //datatest();
      setPage([1,2,3,4,5]);
      console.log(page);
    }, []);
    // 데이터 불러오기(기본)
    const getData1 =async()=> {
      const url = "http://210.121.173.182/notice";
      const res = await axios.get(url);
      setTest(res.data.result);
    }
    // 페이지 인덱스 테스트
    const [more, setMore] = useState(true);
    const datatest =async()=> {
      console.log("datatest 실행"); // 
      const url = "http://210.121.173.182/notice/";
      let pageNumbers = [];
      let i, res;
      for(i=currentPage; i<currentPage+5; i++){
        res = await axios.get(url+i);
        if(res.data.result.length !== 0) pageNumbers.push(i);
        else break;
      }
      setPage(pageNumbers);

      if(Object.keys(pageNumbers).length !== 5) setMore(false);
      else{
        res = await axios.get(url+i);
        if(res.data.result.length !== 0) setMore(true);
        else setMore(false);
      }
    }

    // ==========================================================

    // 검색어 저장
    const [search, setSearch] = useState("");
    // 입력값이 변할 때
    const _handleInputChange = (e) => {
      setSearch(e.target.value);
    }
    // 검색어 데이터 불러오기
    const getDataSearch =async()=> {
      var url = "http://210.121.173.182/notice";
      if(search !== "") {
        url = url + "/title/" + search;
        setStatus("title");
      }
      else {
        setStatus("");
      }
      
      console.log(url);

      const res = await axios.get(url);
      setTest(res.data.result);

      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      uncheckAll(); // 카테고리 전체 해제

      setcurrentPage(1);
      getDataFirstSearch(url);

      // console.log(res.data);
      // console.log(url);
    }
    const getDataFirstSearch =async(url)=> {
      let pageNumbers = [];
      let i, res;
      for(i=1; i<=5; i++){
        res = await axios.get(url+"/"+i);
        if(res.data.result.length !== 0) pageNumbers.push(i);
        else break;
      }
      setPage(pageNumbers);
  
      if(Object.keys(pageNumbers).length !== 5) setMore(false);
      else{
        res = await axios.get(url+"/"+i);
        if(res.data.result.length !== 0) setMore(true);
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
      
      {/*  공지사항 데이터 출력 */}
      {renderData(test)}
      {/*  페이지 이동 버튼 */}
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
              disabled={currentPage === page[Object.keys(page).length-1] && more === false ? true : false}
          >
          &gt;
          </button>
      </li>
      </ul>
      </PageBtn>

      {/* 검색창 */}
      <Search>
        <div className='right-box'>
          <input
            value={search}
            onChange={_handleInputChange}                
            type='text'
            name='search'
            // placeholder='제목 검색'
            onKeyPress={(e) => {if(e.key === 'Enter'){getDataSearch()}}}
          />
          <button
            className='login-button'
            type='submit'
            onClick={getDataSearch}
          >
            <FontAwesomeIcon icon={ faMagnifyingGlass } size="1x"/>
          </button>
        </div>
      </Search>

    </Container>
  )
}

// 카테고리 스타일
const Category = styled.div`
  margin-top: 20px;

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
`

// 목록 스타일
const NoticeList = styled.ul`
    margin: 0;
    padding: 0;
    // min-width: 500px;
    details summary {
        // margin-top: 20px;
        padding: 10px;
        height: 50px;
        // border: 1px solid #d1d1d1;
        // border-radius: 10px;
        font-size: 13px;
    }
    details summary p {
        float: left;
        margin: 5px 10px;
    }
`
const Border = styled.div`
    margin: 20px 0;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
`

// 검색창 스타일
const Search = styled.div`
  margin: 5px 0;

  .right-box {
    width: 60%;
    height: 100%;
    display: flex;
    
    input {
      font-size: 16px;
      background: #f5f5f5;
      width: 60%;
      height: 60%;
      // border-radius: 10px 10px 10px 10px;
      border: 1.5px solid #D8D8D8;
      }
  }

  .login-button {
    width: 10%;
    // height: 60%;
    background: #0064ff;
    color: #f5f5f5;
  }
}
`

export default HomePage;