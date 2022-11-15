import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
// 개발자
import titleTab from '../../utils/TitleTab';
import EllipsisText from "react-ellipsis-text";
import Loading from '../Loading';

const AdminFeedback = () => {
  const userId = useSelector((store) => store.auth.authStatus.userId);
  // 댓글 작성
  const [commentContent, setCommentContent] = useState();
  // 데이터 저장
  const [data, setData] = useState();
  const [postData, setPostData] = useState();
  const [commentData, setCommentData] = useState();
  // 인덱스/페이지
  const [currentPage, setcurrentPage] = useState(1);
  const [page, setPage] = useState([]);
  const [more, setMore] = useState(true);

  // 데이터 전송(댓글)
  const postComment = async (postId) => {
    const url = 'http://210.121.173.182/admin/questionPost';
    const params = {
        postId: postId,
        content: commentContent,
        writerId: userId
    };

    // 서버로 데이터 전송
    const res = await axios.post(url, params);

    if(res.data.result === false) {
      alert(res.data.message);
      return;
    }
    setCommentContent("");
  }
  
  // 처음 페이지 데이터 불러오기(기본)
  useEffect(() => {
    getPostsFirst();
    MorePageFirst();
  }, []);
  // 데이터 불러오기(기본)
  const getPostsFirst =async()=> {
    const url = "http://210.121.173.182/admin/questionPosts";
    const res = await axios.get(url);
    setData(res.data.result);
  }
  const MorePageFirst =async()=> {
    const url = "http://210.121.173.182/admin/questionPosts";
    let pageNumbers = [];
    let i, res;
    for(i=currentPage; i<currentPage+5; i++){
      res = await axios.get(url+"/"+i);
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

  // 글 목록 폼
  const viewPostList =(data)=>{
    if(data === undefined || data.length === 0){
      return(
        <NoPost>
          <div>
          <p>게시물이 없습니다.</p>
          {/* <button className='writeBtn' onClick={() => changeState()}>글 작성</button> */}
          </div>
        </NoPost>
      )
    }
    else {
    data = data.slice(0).reverse().map(num => num); // 거꾸로 정렬(최신글을 위쪽으로 배치)
    return (
      <>
      <Dropdown>
        {/* <button className='writeBtn' onClick={() => changeState()}>글 작성</button> */}
        {data.map((data) => {
            return (
              <>
                <details>
                <summary key={data.postId} onClick={() => {oneDetail(data.postId); getPostIndex(data.postId);}}>
                <p className='title'>{data.title}</p>
                <p className='status'>{data.status}</p>
                <p className='writer'>{data.writerId.split('@', 1)}</p>
                <p className='date'>{data.writeDate}</p>
                </summary>
                {/* 게시글 부분 */}
                <div className='content'>
                {/* {(userId === data.writerId || userId === "admin") && <button className='delBtn' onClick={() => {deletePost(data.postId);}}>삭제</button>} */}
                {postData !== undefined && <p>{postData.content}</p>}
                </div>
                {/* 댓글 부분 */}
                {commentData !== undefined && commentData.map((comment) => {
                  return(
                  <CommentList key={comment.commentId}>
                  {/* {(userId === comment.writerId || userId === "admin") && <button className='delBtn' onClick={() => {deleteComment(comment.commentId); getPostIndex(postData.postId);}}>삭제</button>} */}
                  <p className='c_writer'>{comment.writerId.split('@', 1)}</p>
                  <p className='c_content'>{comment.content}</p>
                  <p className='c_date'>{comment.writeDate}</p>
                  </CommentList>
                  )
                })}
                {/* 댓글 입력 부분 */}
                <CommentInput >
                <input 
                name="commentContent"
                placeholder="댓글을 입력하세요."
                onChange={e => setCommentContent(e.target.value)}
                value={commentContent}
                />
                <button
                className='registBtn'
                onClick={() => {postComment(postData.postId); getPostIndex(postData.postId); window.location.reload();}}>등록</button>
                </CommentInput>
                </details>
              </>
            )
        })}
        </Dropdown>
        {/* 페이지 이동 버튼 */}
        {data.length !== 0 &&
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
        }
      </>
    );
    }
  }
  // 게시물 항목 데이터 가져오기
  const getPostIndex =async(postId)=> {
    const url = 'http://210.121.173.182/admin/questionPost';
    const res = await axios.get(url+"/"+postId);
    setPostData(res.data.result.post);
    setCommentData(res.data.result.comment);
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
  // 페이지 인덱스
  // 페이지 번호 이동
  const handleClick = (event) => {
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setcurrentPage(Number(event.target.id));
    getDataIndex(Number(event.target.id));
  };
  // 인덱스(기본) 데이터 불러오기
  const getDataIndex = async(number) => {
    var url = "http://210.121.173.182/admin/questionPosts";
    const res = await axios.get(url+"/"+number);
    setData(res.data.result);
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
  // 페이지 번호 다음 파트 검사
  const MorePage =async(startPage)=> {
    var url = "http://210.121.173.182/admin/questionPosts";
    let pageNumbers = [];
    let i, res;
    
    for(i=startPage; i<startPage+5; i++){
    res = await axios.get(url+"/"+i);
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

    if(((currentPage+1)%5) === 1) MorePage(currentPage+1);
    getDataIndex(currentPage+1);
  };
  // 페이지 버튼(이전)
  const handlePrevbtn = () => {
    closeDetails(); // 페이지 변경 시 열린 목록 닫기
    setcurrentPage(currentPage - 1);

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
  
  return(
    <Container>
      {viewPostList(data)}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  // display: flex;
  margin: 20px;
  justify-content: center;
  
  .content {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .count-box {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0064ff;
    background: #F2F2F2;
    font-size: 24px;
    border-bottom: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .tag-list {
    width: 100%;
    height: 40%;
    display: flex;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .tag-box {
    width: 80%;
    height: 100%;
    border-right: 1px solid #D8D8D8;
  }

  .tag-data {
    width: 20%;
    height: 100%;
  }

  .question {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    border-bottom: 1px solid #D8D8D8;
  }

  .question1 {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;  
  }

  .question-data {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-bottom: 1px solid #D8D8D8;
  }

  .question1-data {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;  
  }

  .opinion-box {
    width: 100%;
    height: 50%;
    border-right: 1px solid #D8D8D8;
    border-top: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .opinion-tag {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #0064ff;
    border-bottom: 1px solid #D8D8D8;
    background: #F2F2F2;
  }

  .question-tag {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
  }

  .question-tag::-webkit-scrollbar{
    display:none;
  }

  .question2 {
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #D8D8D8;
    padding: 10px;
  }

  .score-font {
    color: #0064ff;
  }
`;



// 커뮤니티 전체
// const Container = styled.div`
//   margin: 20px;
//   width: 85%;
//   height: fit-content;
//   min-height: 100vh;
//   padding: 10px;
//   background: white
// `

// 커뮤니티 목록 드롭다운
const Dropdown = styled.div`
  width: 100%;
  details {
    margin-top: 15px;
    width: 100%;
    border: 1px solid #d8d8d8;
    cursor: pointer;
    transition: background 0.3s;
    min-height: fit-content;
    max-height: fit-content;
    transform-origin: top center;
    transition: all 0.3s;
  }
  summary {
    width: 100%;
    text-align: center;
    display: inline;
    justify-content: center;
    padding: 20px 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;  
    box-sizing: border-box; 
  }
  details[open] {
    transition: all 0.6s;
    min-height: 100px;
    max-height: 100%;
  }
  [open] summary .close {
    display: inline;
  }
  [open] summary {
    display: inline;
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

  details summary p {
    float: left;
    margin: 0;
  }
  .title{
    width: 65%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align: left;
  }
  .status{
    width: 10%;
  }
  .writer{
    width: 15%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .date{
    width: 10%;
    text-align: right;
  }

  details .content {
    padding: 10px;
    border-top: 1px solid #d8d8d8;
    min-height: 20vh;
    .delBtn {
      color: #d8d8d8;
      float: right;
      border: none;
      background: white;
    }
  }
  .writeBtn {
    width: 70px;
    padding: 5px;
    height: 5vh;
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
    .status{
      float: right;
      color: lightgrey;
      font-size: 10px;
      width: fit-content;
    }
    .writer, .date {
      color: lightgrey;
      font-size: 10px;
      width: fit-content;
      padding-right: 10px;
    }
  }
`
// 등록된 포스트 없음
const NoPost = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  div .writeBtn{
    clear: both;
    width: 80%;
    margin-top: 10px;
    padding: 5px;
    height: 5vh;
  }
`
// 댓글 보기
const CommentList = styled.div`
  padding: 10px; 
  border-top: 1px solid #d8d8d8;
  .delBtn {
    color: #d8d8d8;
    float: right;
    border: none;
    background: white;
  }
  p {
    padding : 5px;
  }
  .c_writer {
    font-weight: bold;
  }
  .c_date {
    color: #d8d8d8;
  }
`
// 댓글 입력
const CommentInput = styled.div`
  border-top: 1px solid #d8d8d8;
  input {
    width: 90%;
    height: 7vh;
  }
  .registBtn {
    width: 10%;
    height: 7vh;
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


export default AdminFeedback;