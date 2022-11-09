import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
//css
import styled from 'styled-components';

import titleTab from '../../utils/TitleTab';

const CommunityPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("커뮤니티"), 100); //페이지탭 이름 설정입니다 냅두시면 돼여
  const userId = useSelector((store) => store.auth.authStatus.userId);

  // 글 작성
  const [title, setTitle] = useState();
  const [postContent, setPostContent] = useState();
  // 댓글 작성
  const [commentContent, setCommentContent] = useState();
  // 화면 전환
  const [viewPost, setViewPost] = useState(true);
  // 데이터 저장
  const [data, setData] = useState();
  const [postIndexData, setPostIndexData] = useState();
  const [postData, setPostData] = useState();
  const [commentData, setCommentData] = useState();
  // 인덱스
  const [currentPage, setcurrentPage] = useState(1);
  const [page, setPage] = useState();
  const [more, setMore] = useState(true);

  // ========================================================================================

  // 데이터 전송(게시글)
  const postPost = async () => {
      const url = 'http://210.121.173.182/post';
      const params = {
          writerId: userId,
          title: title,
          content: postContent
      };

      // 서버로 데이터 전송
      const res = await axios.post(url, params);

      // alert(res.data.message);
      // if(res.data.result === true) getPostsIndex();
      setTitle("");
      setPostContent("");
      window.location.reload();
  }

  // 데이터 전송(댓글)
  const postComment = async (postId) => {
      const url = 'http://210.121.173.182/comment';
      const params = {
          writerId: userId,
          postId: postId,
          content: commentContent
      };

      // 서버로 데이터 전송
      const res = await axios.post(url, params);

      if(res.data.result === false) {
        alert(res.data.message);
        return;
      }
      setCommentContent("");
  }

  // ===========================================================================================

  // 처음 페이지 데이터 불러오기(기본)
  useEffect(() => {
      getPostsFirst();
  }, []);
  // 데이터 불러오기(기본)
  const getPostsFirst =async()=> {
      const url = "http://210.121.173.182/posts";
      const res = await axios.get(url);
      setData(res.data.result);
      console.log("getPostsFirst", res.data.result);
  }

  // ================================================================================================
  // 글 작성
  const writePost =()=>{
      return(
          <>
              <input
                  name="title"
                  placeholder="게시글 제목"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                  style = {{border: '1px solid #d8d8d8', margin: '10px 2%', marginTop:'20px', width: '96%', height: '40px'}}
              />
              <textarea
              name="postContent"
              placeholder="내용을 입력해주세요."
              onChange={e => setPostContent(e.target.value)}
              value={postContent}
              style = {{resize:"none", border: '1px solid #d8d8d8', margin: '10px 2%', width: '96%', height: '370px'}}
              />
              
              <div style={{textAlign:'center'}}>
                 <Btn onClick={() => {changeState(); postPost();}}>등록</Btn> {/* 저장 함수 추가 */}
                 <button style={{background: '#d8d8d8', width: '70px', height: '40px', fontSize:'13px', marginLeft: '50px'}} onClick={() => changeState()}>취소</button> {/* 변수 변경 */}
              </div>
          </>
      )
  }

  // =================================================================================================

  // 상태 전환
  const changeState =()=> {
      if(viewPost === true) setViewPost(false);
      else setViewPost(true);
  }

  // =================================================================================================
  // 게시글 삭제
  const deletePost =async(postId)=>{
    const url = "http://210.121.173.182/post";
    window.location.reload();
    const res = await axios.delete(url, {data: {postId: postId}});
  }
  // 댓글 삭제
  const deleteComment =async(commentId)=>{
    const url = "http://210.121.173.182/comment";
    // window.location.reload();
    const res = await axios.delete(url, {data: {commentId: commentId}});
  }

  // 글 목록
  const viewPostList =(data)=>{
      if(data === undefined){
        return(
          <div style={{textAlign:'center'}}>
          <p>게시물이 없습니다.</p>
          <button onClick={() => changeState()}>글 작성</button>
          </div>
        )
      }
      else {
      data = data.slice(0).reverse().map(num => num); // 거꾸로 정렬
      return (
        <>
          <button style={{width:'10%', padding:'5px', height:'5vh'}} onClick={() => changeState()}>글 작성</button>
          <Dropdown>
          <NoticeList>
          {data.map((data) => {
              return (
                <>
                  <details>
                  <summary key={data.postId} onClick={() => {oneDetail(data.postId); getPostIndex(data.postId);}}>
                  <p style={{width: '60%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.title}</p>
                  <p style={{width: '20%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.writerId.split('@', 1)}</p>
                  <p style={{width: '10%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.writeDate}</p>
                  </summary>
                  <div style={{padding:'10px', borderTop:'1px solid #d8d8d8', minHeight:'20vh'}}>
                  {userId === data.writerId && <button onClick={() => {deletePost(data.postId);}} style={{color:'#d8d8d8', float: 'right', border:'none', background:'white'}}>삭제</button>}
                  {postData !== undefined && <p>{postData.content}</p>}
                  </div>
                  {commentData !== undefined && commentData.map((comment) => {
                    return(
                    <div key={comment.commentId} style={{padding:'10px', borderTop:'1px solid #d8d8d8'}}>
                    {userId === comment.writerId && <button onClick={() => {deleteComment(comment.commentId); getPostIndex(postData.postId);}} style={{color:'#d8d8d8', float:'right', border:'none', background:'white'}}>삭제</button>}
                    <li style={{padding:'5px', fontWeight:'bold'}}>{comment.writerId.split('@', 1)}</li>
                    <li style={{padding:'5px'}}>{comment.content}</li>
                    <li style={{padding:'5px', color:'#d8d8d8'}}>{comment.writeDate}</li>
                    </div>
                    )
                  })}

                  <div style={{borderTop:'1px solid #d8d8d8'}}>
                  <input 
                  style={{width:'90%', height:'7vh'}}
                  name="commentContent"
                  placeholder="댓글을 입력하세요."
                  onChange={e => setCommentContent(e.target.value)}
                  value={commentContent}
                  />
                  <button
                  style={{width:'10%', height:'7vh'}} 
                  onClick={() => {postComment(postData.postId); getPostIndex(postData.postId)}}>등록</button>
                  </div>
                  </details>
                </>
              )
          })}
          </NoticeList>
          </Dropdown>
        </>
      );
      }
  }
  // 
  const getPostIndex =async(postId)=> {
    const url = 'http://210.121.173.182/post';
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


  // ===============================================================================================
  // 페이지 인덱스
  // 페이지 번호 이동
  const handleClick = (event) => {
      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      setcurrentPage(Number(event.target.id));
      getDataIndex(Number(event.target.id));
  };
  // 인덱스(기본) 데이터 불러오기
  const getDataIndex = async() => {
      var url = "http://210.121.173.182/posts";
      const res = await axios.get(url);
      setData(res.data.result);
      // setData({...data, {title: 'dd'}});
      console.log(data);
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
      var url = "http://210.121.173.182/post/";
      let pageNumbers = [];
      let i, res;
      
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

      // if (currentPage + 1 > maxPageNumberLimit) {
      //     setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      //     setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      // }

      if(((currentPage+1)%5) === 1) datatest3(currentPage+1);
      getDataIndex(currentPage+1);
  };
  // 페이지 버튼(이전)
  const handlePrevbtn = () => {
      closeDetails(); // 페이지 변경 시 열린 목록 닫기
      setcurrentPage(currentPage - 1);

      // if ((currentPage - 1) % pageNumberLimit === 0) {
      //     setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      //     setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      // }
      
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
      {viewPost === true ? viewPostList(data) : writePost()}
      </Container>
  );
}

const Btn = styled.button`
margin-top: 20px;
// margin: 20px 0;
width: 70px;
height: 40px;
color: #ffffff;
background: #0064ff;
font-size: 13px;
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

// 목록 열고 닫기
const Dropdown = styled.div`
details {
  margin-top: 20px;
  padding-top: 7px;
  border: 1px solid #d8d8d8;
  // border-radius: 10px;
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
  // border: 1px solid #d8d8d8;
  // border-radius: 10px;
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

export default CommunityPage;