import React, { useState, useRef, Fragment } from 'react';
//css
import styled from 'styled-components';
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartArrowDown, faMedal } from "@fortawesome/free-solid-svg-icons";

import titleTab from '../../utils/TitleTab';

const CommunityPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("커뮤니티"), 100); //페이지탭 이름 설정입니다 냅두시면 돼여

  const [state, setState] = useState({
        search: '',
        basket_id: '',
        modal: false,
    });
    // 입력값이 변할 때
    const _handleInputChange = (e) => {
    setState({ 
        ...state, 
        [e.target.name]: e.target.value 
    });
    }
  //==================================================


  const [testvar, setTestvar] = useState(1);

  const changeVar =()=> {
      if(testvar === 1){
          setTestvar(2);
      }
      else{
          setTestvar(1);
      }
  }

  const page1 =()=> {
      return(
          <>
          {display()}
          </>
      )
  }
  const page2 =()=> {
    return(
      <>
        <Form>
          <div className='entry'>
            {/* <p>제목</p> */}
            {/* <input type="text" placeholder="게시글 제목"></input> */}
            <input
                name="title"
                placeholder="게시글 제목"
                onChange={onChange}
                value={title}
                style = {{border: '1px solid #d8d8d8', margin: '10px 2%', marginTop:'20px', width: '96%', height: '40px'}}
            />
            <p style={{margin: '10px 2%', width: '96%', textAlign:'left'}}>작성자 | test_writer</p>
            {/* 
            <p>작성일자</p> <p>test_date</p>
            <p>내용</p> */}
            {/* <textarea style={{resize:"none"}} placeholder="게시글 내용"></textarea> */}
            <textarea
              name="content"
              placeholder="내용을 입력해주세요."
              onChange={onChange}
              value={content}
              style = {{resize:"none", border: '1px solid #d8d8d8', margin: '10px 2%', width: '96%', height: '250px'}}
            />
            <div style={{margin: '10px 2%', width: '96%', textAlign:'left'}}>
              <p>첨부파일</p>
              <input type="file" multiple="multiple"></input> {/* https://purecho.tistory.com/68 */}
            </div>
            <br/>
          </div>
          <div >
            <Btn onClick={ () => {changeVar(); onCreate();} }>등록</Btn> {/* 데이터 저장 post + 변수 변경 */}
            <button style={{background: '#d8d8d8', width: '70px', height: '40px', fontSize:'13px', marginLeft: '50px'}} onClick={changeVar}>취소</button> {/* 변수 변경 */}
          </div>
        </Form>
      </>
    )
  }

    const write =()=> {
        if(testvar === 1){
            return(
                <>
                {page1()}
                </>
            )
        }
        else{
            return(
                <>
                {page2()}
                </>
            )
        }
    }


  // 날짜/작성자 지정?
  const [inputs, setInputs] = useState({
      title: '',
      content: '',
      writer: '',
      date: '',
      state1: false
  });
  const { title, content, writer, date, state1 } = inputs;
  const onChange = e => {
      const { name, value } = e.target;
      setInputs({
      ...inputs,
      [name]: value
      });
  };
  // 임시 데이터
  const [users, setUsers] = useState([
      {
      id: 1,
      title: '제목 테스트',
      content: 'test content1',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 2,
      title: '제목 테스트',
      content: 'test content2 우선 복구대책지원본부 각 반별로 피해시설 응급복구, 이재민 구호, 재난심리회복 지원 등을 전담하면서 피해지역이 조기에 안정화될 수 있도록 도로·하천 등 대규모 피해시설의 응급복구 상황을 집중 관리할 계획이다. 아울러 지자체에서 인력과 장비 동원 등 행정적·재정적 지원 요청이 있을 경우 관계기관·민간단체 등과 적극 협업해 적기에 지원한다는 방침이다.',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 3,
      title: '제목 테스트',
      content: 'test content3',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 4,
      title: '제목 테스트',
      content: 'test content1',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 5,
      title: '제목 테스트',
      content: 'test content2 우선 복구대책지원본부 각 반별로 피해시설 응급복구, 이재민 구호, 재난심리회복 지원 등을 전담하면서 피해지역이 조기에 안정화될 수 있도록 도로·하천 등 대규모 피해시설의 응급복구 상황을 집중 관리할 계획이다. 아울러 지자체에서 인력과 장비 동원 등 행정적·재정적 지원 요청이 있을 경우 관계기관·민간단체 등과 적극 협업해 적기에 지원한다는 방침이다.',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 6,
      title: '제목 테스트',
      content: 'test content3',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 7,
      title: '제목 테스트',
      content: 'test content1',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 8,
      title: '제목 테스트',
      content: 'test content2 우선 복구대책지원본부 각 반별로 피해시설 응급복구, 이재민 구호, 재난심리회복 지원 등을 전담하면서 피해지역이 조기에 안정화될 수 있도록 도로·하천 등 대규모 피해시설의 응급복구 상황을 집중 관리할 계획이다. 아울러 지자체에서 인력과 장비 동원 등 행정적·재정적 지원 요청이 있을 경우 관계기관·민간단체 등과 적극 협업해 적기에 지원한다는 방침이다.',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 9,
      title: '제목 테스트',
      content: 'test content3',
      writer: '작성자 테스트',
      date: '2022-09-01',
      state1: false
      },
      {
      id: 10,
      title: '<2022학년도 동양미래대학교 노들축제 공지>',
      content: 'test content3',
      writer: '한울타리 총학생회',
      date: '2022-09-20',
      state1: false
      }
  ]);
  const result = users.slice(0).reverse().map(num => num); // 거꾸로 정렬

  const handleClick =(i)=>{
      {console.log(result[i].state1)}
      //result[i].state1 = true
      const r = {...result[i], state1: true}
      {console.log(r)}
  }
  const handleCancle = (i)=>{
      {console.log(result[i].state1)}
      //result[i].state1 = false
      result = {...result[i], state1: false}
  }

  const display =()=> {
      return(
          <>
          {/* <Wrap2> */}
          <Btn2 onClick={changeVar}>글쓰기</Btn2> {/* 데이터 불러오기 get + 변수 변경 */}
          <div style={{clear: 'both'}}></div>
              <Dropdown> {/* 여기서부터 z-index */}
              <NoticeList>
              {result.map((data, index) =>{
                  return (
                      <>
                      {/* <p key={index}> {data.id} {data.title} {data.content} {data.writer} {data.date}</p> */}
                      {/* {data.state1 ? <ST2><p key={index} onClick={() => handleCancle(index)}>test2</p></ST2> : <ST1><p key={index} onClick={() => handleClick(index)}>test1</p></ST1>} */}
                      <Border>
                      <details>
                      <summary key={index} style={{height: 'fit-content'}}>
                      {/* <p>{data.id}</p> */}
                      <div className="test">
                      <p style={{width: '60%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.title}</p>
                      <p style={{width: '15%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.writer}</p>
                      <p style={{width: '10%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.date}</p>
                      </div>
                      {/* 별 추가 기능 - 체크박스 */}
                      {/* <p style={{border: '1px solid yellow', float: 'right', fontSize:'20px', fontWeight:'bold', margin:'0'}}>☆</p> */}
                      </summary>
                      {/* <p>{data.content}</p> */}
                      {/* <p>{data.file}</p> */}
                      <div style={{padding: '20px', borderBottom: '1px solid #d8d8d8', fontSize: '14px', whiteSpace: 'normal'}}>
                      {/* 게시글 임시 데이터 */}
                      <div>
                          <div style={{background:'gray', width:'35px', height:'35px', borderRadius:'5px', float:'left'}}></div>
                          <div style={{float: 'left'}}>
                          <p style={{fontWeight:'bold', margin:'4px 5px'}}>한울타리 총학생회</p>
                          <p style={{fontSize: '10px', margin:'4px 5px'}}>09/20 19:26</p>
                          </div>
                      </div>
                      <div style={{clear:'both', marginTop: '50px'}}>
                      {'<'}2022학년도 동양미래대학교 노들축제 공지{'>'}<br/><br/>

                      안녕하십니까, 제 54대 한 울타리 총학생회입니다.<br/><br/>

                      9월 22일(목)-23일(금) 잔디광장에서<br/>
                      이틀간 축제가 진행될 예정인데요,<br/><br/>

                      배치도와 타임테이블 참고하여 함께 즐겨주세요🥰<br/>
                      👉낮부스 운영시간 : 11시~16시👈<br/>
                      👉밤부스 운영시간 : 17시~21시👈<br/><br/>

                      추가된 사항으로 22일(목) 낮부스 시간에 안내데스크 한쪽에 국민취업지원제도 홍보 부스가 마련될 예정이니, 많은 관심 부탁드립니다.<br/>
                      학우분들의 다양하고 재미있는 부스들도 있으니 많은 관심과 참여 부탁드려요❗️<br/><br/>

                      미니게임에도 푸짐한 상품이 기다리고 있으니 기대해주세요✨️<br/><br/>

                      🎁미니게임 상품 미리보기🎁<br/>
                      에어프라이기, 스타벅스 텀플러, 블루투스 스피커, 블루투스 마이크 등 • • •<br/><br/>

                      각 공지는 👉총학생회 인스타 @hanultari👈에서 카드뉴스와 프로필하단 노들축제 하이라이트에서 확인 가능합니다😊<br/><br/>

                      문의사항<br/>
                      ➡️ 총학생회 인스타그램 @dmu_hanultari<br/>
                      ➡️ 총학생회 카카오톡 플러스친구<br/>
                      </div>
                      </div>
                      {/* 댓글 임시 데이터 */}
                      <div style={{padding: '20px', borderBottom:'1px solid #d8d8d8'}}>
                          <div>
                              <div style={{background:'gray', width:'25px', height:'25px', borderRadius:'5px', float:'left'}}></div>
                              <div style={{fontWeight:'bold', padding:'7px', float:'left'}}>익명1</div>
                          </div>
                          <div style={{clear:'both', padding:'10px 0', fontSize:'14px'}}>댓글 내용</div>
                          <div>09/20 19:25</div>
                      </div>
                      <div style={{padding: '20px', borderBottom:'1px solid #d8d8d8'}}>
                          <div>
                              <div style={{background:'gray', width:'25px', height:'25px', borderRadius:'5px', float:'left'}}></div>
                              <div style={{fontWeight:'bold', padding:'7px', float:'left'}}>익명2</div>
                          </div>
                          <div style={{clear:'both', padding:'10px 0', fontSize:'14px'}}>댓글 내용</div>
                          <div>09/20 19:26</div>
                      </div>
                      <div style={{whiteSpace: 'nowrap'}}>
                        <input type="text" placeholder='댓글을 입력하세요.' style={{marginLeft:'1px', padding:'15px 2%', width: '90%', fontSize:'14px'}}></input>
                        <button style={{marginLeft:'1px', padding:'17px 2%', border: '1px solid #d8d8d8', background:'#0064ff', color:'white', fontSize:'14px', width: '10%'}}>등록</button>
                      </div>

                      </details>
                      </Border>
                      </>
                  ) 
              })}
              </NoticeList>
              </Dropdown>

          {/* 인덱스 */}
          <Index>
              <div><p>{'<'}</p> <p className='bold'>1</p> <p>2</p> <p>3</p> <p>4</p> <p>5</p> <p>{'>'}</p></div>
          </Index>
          {/* </Wrap2> */}

          {/* 검색창 */}
          <Search>
              <div className='right-box'>
                  <input
                  value={state.search}
                  onChange={_handleInputChange}                
                  type='text'
                  name='search'
                  // placeholder='제목 검색'
                  // onKeyPress={() => _handleEnterPress}
                  />
                  <button
                      className='login-button'
                      type='submit'
                  >
                      <FontAwesomeIcon icon={ faMagnifyingGlass } size="1x"/>
                  </button>
              </div>
          </Search>
          </>
      );
  }

  const nextId = useRef(4);
  const onCreate = () => {
      const user = {
      id: nextId.current,
      title,
      content,
      writer,
      date,
      state1
      };
      setUsers(users.concat(user));

      setInputs({
      username: '',
      email: '',
      writer: 'test',
      date: '2022-09-15',
      state1: false
      });
      nextId.current += 1;
  };

  return(
    <Container>
      {write()}
    </Container>
  )       
}

const Container=styled.div`
    margin-top: 20px;
    width: 85%;
    background: white;
`

const Wrap1 = styled.div`
  width: 90%;
  margin-top: 20px;
  border: 1px solid #D8D8D8;
`;

const Wrap2 = styled.div`
//   width: 100%;
  margin: 20px;
  border: 1px solid red;

  button{
    margin-left: 92%;
    width: 70px;
    height: 40px;
    color: #ffffff;
    background: #0064ff;
    font-size: 13px;
  }
`;

const Form = styled.div`
  text-align: center;
  .entry {
    width: 100%;
    border: 1px solid #d8d8d8;
  }
`
const Btn2=styled.button`
  float: right;
  width: 70px;
  height: 40px;
  color: #ffffff;
  background: gray;
  font-size: 13px;
`

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

  // @media (max-width: 500px) {
      
  // }
}
`
// 인덱스
const Index=styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  text-align: center;
  div {
      margin: 0 auto;
      width: fit-content;
      text-align: center;
  }
  p {
      float: left;
      border: 1px solid #d8d8d8;
      padding: 12px;
      margin: 2px;
  }
  p.bold {
      font-weight: bold;
      background: #d8d8d8;
  }
`

const Btn = styled.button`
margin-top: 20px;
// margin: 20px 0;
width: 70px;
height: 40px;
color: #ffffff;
background: #0064ff;
font-size: 13px;
`

// 목록 열고 닫기
const Dropdown = styled.div`
  display: flex;
  justify-content: center;

  details {
      // margin-top: 20px;
      // border-radius: 10px;
      cursor: pointer;
      transition: background 0.3s;
      min-height: 20px;
      max-height: 60px;
      transform-origin: top center;
      // transform: rotate(0.1deg); // 헤더 위로 올라옴
      transition: all 0.3s;
  }
  summary {
      width: 100%;
      margin-top: 5px; // 수정 필요..
      // border: 1px solid #d8d8d8;
      // border-radius: 10px;
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
      border-bottom: 2px solid #d8d8d8;
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
  width: 97%;
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
  // border-radius: 10px;

  .test {
    display: block;
  }

  // @media ( min-width: 768px ) {
  //   border-radius: 10px;
  //   .test p {
  //     border: 1px solid red;
  //     textOverflow: ellipsis;
  //     overflow: hidden;
  //     whiteSpace: nowrap;
  //   }
  // }
  // @media ( max-width: 768px ) {
  //   .test {
  //     border: 1px solid blue;
  //     width: 80%;
  //   }
  //   .test p {
  //     display: block;
  //     flex-direction: column;
  //   }
  // }
`

export default CommunityPage;