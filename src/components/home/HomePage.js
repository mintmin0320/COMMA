import React, { useState, useRef } from 'react';
//css
import styled from 'styled-components';
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartArrowDown, faMedal } from "@fortawesome/free-solid-svg-icons";

import titleTab from '../../utils/TitleTab';

const HomePage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("공지사항"), 100);

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
        
        // getData("category", [...checkedItems].join('&'));
    };

    // =================================================================

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
        title: '노들축제 관련 코로나19 유의사항 안내',
        content: 'test content3',
        writer: '나형석',
        date: '2022-09-19',
        state1: false
        }
    ]);
    const result = users.slice(0).reverse().map(num => num); // 거꾸로 정렬


    const display =()=> {
        return(
            <>
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

            {/* <Wrap2> */}
      <div style={{clear: 'both'}}></div>
          <Dropdown>
          <NoticeList>
          {result.map((data, index) =>{
              return (
                  <>
                  {/* <p key={index}> {data.id} {data.title} {data.content} {data.writer} {data.date}</p> */}
                  {/* {data.state1 ? <ST2><p key={index} onClick={() => handleCancle(index)}>test2</p></ST2> : <ST1><p key={index} onClick={() => handleClick(index)}>test1</p></ST1>} */}
                  <Border>
                  <details>
                  <summary key={index}>
                  {/* <p>{data.id}</p> */}
                  <p>3721</p>
                  <p>대학</p>
                  <p style={{width: '55%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.title}</p>
                  <p style={{width: '12%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.writer}</p>
                  <p style={{width: '10%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{data.date}</p>
                  <p>1</p>
                  </summary>
                  {/* <hr></hr> */}
                  {/* <p>{data.content}</p> */}
                  {/* <p>{data.file}</p> */}
                  {/* 공지사항 내용 */}
                  <div style={{padding: '20px'}}>
                노들축제 관련 코로나19 유의사항 안내<br/><br/>
                  노들축제는 실외 행사의 경우에도 50인 이상이 참여하는 행사로 분류되어 다음의 방역수칙 준수해야 합니다.<br/><br/>
                  1. 축제기간에 실내와 실외에서 반드시 마스크 착용<br/><br/>
                  2. 음식물 취식은 지정된 “취식존”에서만 가능, 음식을 먹는 순간만 마스크 내리기<br/><br/>
                  3. 코로나19 의심 증상자는 행사 참여 중지<br/><br/><br/>
                  ※ 축제 기간에도 보건실 및 신속항원검사소는 21시까지 운영합니다.<br/><br/>
                  :  https://www.dongyang.ac.kr/bbs/dongyang/7/120154/artclView.do?layout=unknown<br/>
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

  return(
    <Container>
      {display()}
    </Container>
  )       
}

const Container=styled.div`
    margin: 20px;
    width: 85%;
    background: white;
`
const Btn2=styled.button`
    float: right;
    width: 70px;
    height: 40px;
    color: #ffffff;
    background: #0064ff;
    font-size: 13px;
`

const Category = styled.div`
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
    // border: 1px solid red;
    div {
        margin: 0 auto;
        width: 260px;
        text-align: center;
        // border: 1px solid red;
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
        // transform: rotate(0.1deg);
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
  width: 97%;
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



export default HomePage;