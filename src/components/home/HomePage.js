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
  // margin: 10px;
  // padding-top: 80px;
  // padding-left: 10%;
  // text-align: center;
  width: 85%;
  padding: 10px;
  background: white;
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
                    // function() {
                    //     if (notice.noticeCategoryId === 7) return (<p>대학</p>);
                    //     else if (notice.noticeCategoryId === 294) return (<p>학부</p>);
                    //     else if (notice.noticeCategoryId === 320) return (<p>컴소</p>);
                    //     else if (notice.noticeCategoryId === 321) return (<p>컴정</p>);
                    //     else if (notice.noticeCategoryId === 322) return (<p>인공</p>);
                    // }
                }
                <p style={{width: '50%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{notice.title}</p>
                <p>{notice.writer}</p>
                <p>{notice.createDate}</p>

                <Tooltip>
                { notice.fileCount > 0 ?
                  <a href={notice.fileLink}><p>{notice.fileCount}</p></a>
                :<p>첨부파일 없음</p>
                }
                </Tooltip>

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

  // 카테고리
  const [isChecked, setIsChecked] = useState(false); // 체크 여부
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 요소들
  const checkHandler = ({ target }) => {
      setIsChecked(!isChecked);
      checkedItemHandler(target.parentNode, target.value, target.checked);
  };
  const uncheckAll =()=> {
    // 체크박스 전체 해제
    var checkboxes = document.getElementsByName("dept");
    for(var i=0; i<checkedItems.size; i++){
      checkboxes[i].checked = false;
      // 스타일 초기화
      checkboxes[i].parentNode.style.backgroundColor = "";
      checkboxes[i].parentNode.style.color = "";
      checkboxes[i].parentNode.style.fontWeight = "";
    }
    // setCheckedItems(new Set());
  }
  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      //스타일 변경
      box.style.backgroundColor = "#0064ff";
      box.style.color = "white";
      box.style.fontWeight = "bold";
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      //스타일 초기화
      box.style.backgroundColor = "";
      box.style.color = "";
      box.style.fontWeight = "";
    }

    getDataCategory();
    // getDataCategory("category", [...checkedItems].join('&'));
  };
  // 카테고리 데이터 불러오기
  const getDataCategory =async()=> {
    var url = "http://210.121.173.182/notice";
    var categoryJoin = [...checkedItems].join('&');
    if(categoryJoin !== "") {
      url = url + "/category/" + categoryJoin;
      setStatus("category");
    }
    else {
      setStatus("");
    }
    const res = await axios.get(url);
    setTest(res.data.result);
    
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setSearch(""); // 검색어 초기화

    // 수정 필요..
    setPage([1,2,3,4,5]);
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
      url = url + "/category/" + [...checkedItems].join('&') + "/" + number;
      // setStatus("category");
    }
    else if(status === "title") {
      url = url + "/title/" + {search} + "/" + number;
      // setStatus("title");
    }
    else {
      url = url + "/" + number;
      setStatus("");
    }
    // url = url + "/" + status + "/" + ~~~ ;

    const res = await axios.get(url);
    setTest(res.data.result);

    // 수정 필요.. + 위치 변경 필요
    // setPage([1,2,3,4,5]);
    // setcurrentPage(1);

    // console.log(res.data);
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
      // if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      //   return (
      //     <li
      //     key={number}
      //     id={number}
      //     onClick={handleClick}
      //     className={currentPage === number ? "active" : null}
      //     >
      //     {number}
      //     </li>
      //   );
      // }
      // else {
      //   return null;
      // }
    })
    )
  }

  // 페이지 버튼(다음)
  const handleNextbtn = () => {
      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      setcurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }

      // if(status === "index"){
      //     if(currentPage === page[page.length-1]){
      //         for(let i=0; i<page.length; i++){
      //             page[i] += 5;
      //         }
      //     }
      //     // getData("index", currentPage);
      // }

      if(currentPage === page[page.length-1]){
        for(let i=0; i<page.length; i++){
          page[i] += 5;
        }
      }
      getDataIndex(currentPage+1);
      // 수정 필요
      // console.log(currentPage, page[page.length-1], currentPage+1);
      // console.log(maxPageNumberLimit, minPageNumberLimit);
      // console.log(page);
  };
  // 페이지 버튼(이전)
  const handlePrevbtn = () => {
      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      setcurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }

      // if(status === "index"){
      //     if(currentPage === page[0]){
      //         for(let i=0; i<page.length; i++){
      //             page[i] -= 5;
      //         }
      //     }
      //     // getData("index", currentPage - 2);
      // }
      
      if(currentPage === page[0] && page[0] !== 1){
        for(let i=0; i<page.length; i++){
          page[i] -= 5;
        }
      }
      getDataIndex(currentPage-1);
      // 수정 필요..
      // console.log(currentPage, page[0], currentPage-1);
      // console.log(maxPageNumberLimit, minPageNumberLimit);
      // console.log(page);
  };

  // ==========================================================

  // 데이터 불러오기
  const getData = async (p1, p2) => {
      var url = "http://210.121.173.182/notice";
      if((p1 === "title" && p2 !== "") || p1 === "index" || (p1 === "category" && p2 !== "")) {
          url = url + "/" + p1 + "/" + p2;
      }
      if(p1 === "title") { 
          if(p2 !== "") setStatus("title");
          else setStatus("index");
          const checkboxes = document.getElementsByName('dept');
          checkboxes.forEach((checkbox) => {
              checkbox.checked = false;
          })
        } // 카테고리 초기화
      if(p1 === "category") { 
          if(p2 !== "") setStatus("category");
          else setStatus("index");
          setInputValue("");
      } // 검색창 초기화
      if(p1 !== "index" && p1 !== undefined) {
          setData([]);
          setcurrentPage(1);
          setmaxPageNumberLimit(5);
          setminPageNumberLimit(0);
      } // 카테고리&검색<->인덱스 변환 시 초기화
      console.log(url);
      const res = await axios.get(url);
      console.log(res.data);
      setData(res.data);
      if(p1 === undefined || p2 === "") {
          setStatus("index");
          setPage([1,2,3,4,5]);
      }
      else if(p1 !== "index" && p1 !== undefined) {
          const pages = [];
          for (let i = 1; i <= Math.ceil(res.data.length / itemsPerPage); i++) {
              pages.push(i);
          }
          setPage(pages);
      }
  }

    // ==========================================================
    
    // 데이터 저장 (수정)
    const [test, setTest] = useState();
    
    // 처음 페이지 데이터 불러오기(기본)
    useEffect(() => {
      getData1();
    }, []);
    // 데이터 불러오기(기본)
    const getData1 =async()=> {
      const url = "http://210.121.173.182/notice";
      const res = await axios.get(url);
      setTest(res.data.result);

      // console.log(res.data.result);
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
      const res = await axios.get(url);
      setTest(res.data.result);

      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      uncheckAll(); // 카테고리 전체 해제

      // 수정 필요..
      setPage([1,2,3,4,5]);
      setcurrentPage(1);

      // console.log(res.data);
      // console.log(url);
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
          onChange={(e) => checkHandler(e)} />
          대학
        </label>
        <label htmlFor="department">
        <input type="checkbox" 
          id="department" 
          name="dept" 
          value="department" 
          onChange={(e) => checkHandler(e)} />
          학부
        </label>
        <label htmlFor="software">
        <input type="checkbox" 
          id="software" 
          name="dept" 
          value="software" 
          onChange={(e) => checkHandler(e)} />
          소프트웨어
        </label>
        <label htmlFor="informationEngineering">
        <input type="checkbox" 
          id="informationEngineering" 
          name="dept" 
          value="informationEngineering" 
          onChange={(e) => checkHandler(e)} />
          정보공학
        </label>
        <label htmlFor="intelligence">
        <input type="checkbox" 
          id="intelligence" 
          name="dept" 
          value="intelligence" 
          onChange={(e) => checkHandler(e)} />
          인공지능
        </label>
      </Category>
      
      {/*  공지사항 데이터 출력 */}
      {renderData(test)}
      {/* <div>
          {status==="index" ? renderData(data) : renderData(currentItems)}
      </div> */}
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
              // disabled={status !== "index" && currentPage === page[page.length - 1] ? true : false}
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