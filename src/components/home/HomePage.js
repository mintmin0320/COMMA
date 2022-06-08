import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import unescape from 'unescape'; // npm install --save unescape
import MenuBar from '../MenuBar';


// const CheckLike = styled.p`
//     input {
//     position: absolute;
//     left: -100vw;
//     }
//     label {
//     color: #aab8c2;
//     cursor: pointer;
//     align-self: center;  
//     transition: color 0.2s ease-in-out;
//     }
//     label:hover {
//     color: grey;
//     }
//     input::selection {
//     color: none;
//     background: transparent;
//     }
//     input::moz-selection {
//     color: none;
//     background: transparent;
//     }
//     input:checked + label {
//     color: #e2264d;
//     will-change: font-size;
//     animation: heart 1s cubic-bezier(.17, .89, .32, 1.49);
//     }
//     @keyframes heart {0%, 17.5% {font-size: 0;}}
// `

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
        transform: rotate(0.1deg);
        transition: all 0.3s;
    }
    summary {
        width: 100%;
        border: 1px solid #878d99;
        border-radius: 10px;
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
// 목록 스타일
const NoticeList = styled.ul`
    margin: 0;
    padding: 0;
    min-width: 500px;
    details summary {
        margin-top: 20px;
        padding: 10px;
        height: 30px;
        border: 1px solid #d1d1d1;
        border-radius: 10px;
        font-size: 13px;
    }
    details summary p {
        float: left;
        margin: 5px 10px;
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
    margin: 40px 0px;
    min-width: 520px;
    font-size: 15px;
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
// 카테고리 체크박스
const CheckWrap = styled.div`
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 15px;
    width: 550px;
    background: #e1e1e1;
    text-align: center;
    border: 1px solid #d1d1d1;
    border-radius: 0px 0px 10px 10px;
    input {
        margin: 0px 12px;
    }
`
// (제목) 검색창
const SearchTitle = styled.div`
    margin: 0 auto;
    width: 520px;
    padding-bottom: 100px;
    input, button {
        display: inline-block;
        padding: 10px;
        float: left;
    }
    input {
        width: 80%;
        border: 1px solid #d1d1d1;
    }
    button {
        width: 15%;
        border: 1px solid transparent;
    }
`
// 공지사항 전체
const Container = styled.div`
    // margin: 10px;
    // padding-top: 80px;
    padding-left: 10%;
    width: 90%;
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
    // const [state, setState] = useState({
    //     data: [],
    //     currentPage: 1,
    //     pageNumberLimit: 5,
    //     maxPageNumberLimit: 5,
    //     minPageNumberLimit: 0,
    //     inputValue: '',
    // });

    // pagination
    const [data, setData] = useState([1,2,3,4,5]);
    const [currentPage, setcurrentPage] = useState(1);
    const [page, setPage] = useState([]); // pageNumbers
    const [itemsPerPage, setitemsPerPage] = useState(6); // 한 page당 보여지는 목록 개수
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const [status, setStatus] = useState("index"); // index, category, title
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const [content, setContent] = useState([]);
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
            getContent(i);
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

    // 공지사항 목록 데이터 출력
    const renderData = (data) => {
        if(status === "title" && data.length === 0) {
            return(<p style={{marginTop: '50px', minWidth: '520px', textAlign: 'center', fontSize: '15px'}}>게시물이(가) 없습니다.</p>)
        }
        else {
        return (
            <Dropdown>
            <NoticeList>
            {data.filter((val, idx) => {
                    if(idx === 0 || (idx!==0 && val.total_id !== data[idx-1].total_id)){
                        return val;
                    }
                    else{
                        // console.log(idx);
                    }
                }).map((notice, i) => {
                return (
                    <details>
                    <summary key={i} onClick={() => {oneDetail(notice.total_id)}}>
                    <p>{notice.total_id}</p>
                    {
                        (function() {
                            if (notice.dept === 7) return (<p>대학</p>);
                            else if (notice.dept === 294) return (<p>학부</p>);
                            else if (notice.dept === 320) return (<p>컴소</p>);
                            else if (notice.dept === 321) return (<p>컴정</p>);
                            else if (notice.dept === 322) return (<p>인공</p>);
                        })()
                    }
                    <p style={{width: '50%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{notice.title}</p>
                    <p>{notice.writer}</p>
                    <p>{notice.createDate}</p>
                    <Tooltip>
                  
                  
                    { notice.fileCount > 0 ?
                      <a href={notice.fileLink}><p>{notice.fileCount}</p></a>
                    :<p>첨부파일 없음</p>
                    }
                
                    
                    {/* <p>{notice.fileCount}</p>
                    <p>{notice.fileLink}</p> */}
                    </Tooltip>
                    {/* <CheckLike>
                        <input id={notice.total_id} type="checkbox" />
                        <label for={notice.total_id}>❤</label>
                    </CheckLike> */}
                    </summary>
                    <NoticeContent>
                    <span dangerouslySetInnerHTML={{__html: unescape(content.text)}} />
                    </NoticeContent>
                    </details>
                )
            })}
            </NoticeList>
            </Dropdown>
        );
        }
    };

    // 카테고리
    const [isChecked, setIsChecked] = useState(false); // 체크 여부
    const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 요소들
    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        checkedItemHandler(target.parentNode, target.value, target.checked);
    };
    const checkedItemHandler = (box, id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
        
        getData("category", [...checkedItems].join('&'));
    };


    // 페이지 번호 이동
    const handleClick = (event) => {
        closeDetails(); // 페이지 변경 시 열린 목록 닫기
        setcurrentPage(Number(event.target.id));
        if(status === "index"){
            getData("index", Number(event.target.id) - 1);
        }
    };

    // 페이지 번호
    const renderPageNumbers = page.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
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
        }
        else{
            return null;
        }
    });

    // 페이지 버튼(다음)
    const handleNextbtn = () => {
        closeDetails(); // 페이지 변경 시 열린 목록 닫기
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }

        if(status === "index"){
            if(currentPage === page[page.length-1]){
                for(let i=0; i<page.length; i++){
                    page[i] += 5;
                }
            }
            getData("index", currentPage);
        }
    };
    // 페이지 버튼(이전)
    const handlePrevbtn = () => {
        closeDetails(); // 페이지 변경 시 열린 목록 닫기
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }

        if(status === "index"){
            if(currentPage === page[0]){
                for(let i=0; i<page.length; i++){
                    page[i] -= 5;
                }
            }
            getData("index", currentPage - 2);
        }
    };

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

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <Container>

        {/*  카테고리 체크박스 */}
        <CheckWrap>
        <input type="checkbox" name="dept" value="head" onChange={(e) => checkHandler(e)} />대학
        <input type="checkbox" name="dept" value="department" onChange={(e) => checkHandler(e)} />학부
        <input type="checkbox" name="dept" value="software" onChange={(e) => checkHandler(e)} />소프트웨어
        <input type="checkbox" name="dept" value="informationEngineering" onChange={(e) => checkHandler(e)} />정보공학
        <input type="checkbox" name="dept" value="intelligence" onChange={(e) => checkHandler(e)} />인공지능
        </CheckWrap>
        
        {/*  공지사항 데이터 출력 */}
        <div>
            {status==="index" ? renderData(data) : renderData(currentItems)}
        </div>
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
            {renderPageNumbers}
        <li>
            <button
                onClick={handleNextbtn}
                disabled={status !== "index" && currentPage === page[page.length - 1] ? true : false}
            >
            &gt;
            </button>
        </li>
        </ul>
        </PageBtn>

        {/*  제목 검색 */}
        <SearchTitle>
        <input 
            type="text"  
            onChange={(e) => {setInputValue(e.target.value)}} 
            value = {inputValue}
            onKeyDown={(e) => {if(e.key === 'Enter'){getData("title", inputValue)}}} />
        <button onClick={() => {getData("title", inputValue)}}>Search</button>
        </SearchTitle>

        </Container>
        </>
    )
}

export default HomePage;