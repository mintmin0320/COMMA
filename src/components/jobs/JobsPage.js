import React, { useState } from 'react';
import styled from 'styled-components';
//개발자
import titleTab from '../../utils/TitleTab';
import Loading from '../Loading';
import logo from '../../images/saramin.png';
// 서울시 구로구 , IT개발, 데이터 전체
const JobsPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("채용공고 - COMMA"), 300);

  const [state, setState] = useState({
    loading: false,
  });

  const _handlePageMove1 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44358877&recommend_ids=eJxNjskNhAAMA6vZf2LnfFMI%2FXexQQjCczTWyGaoUNRZ6F8eZjTXjrM0L6QYuvO1kDCxsXqPGeJrh5o6eFt0gfKkpiym9SBmbIm1Pjf0RQTdF%2BeHbIpV3rC1igxfZLXXpqCwRWGF%2BwfR5CdF9ucV3JEX%2FgFRj0Ar&view_type=list&gz=1&t_ref_content=top&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove2 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44335681&recommend_ids=eJxNj8kRA0EIA6PxHwTieDuQzT8Lz45rjmdXF0JyE0d3PoX%2B5NddVAP1lMZE9RJyWJ0IKPy1fzSoWR%2B0EJ4oi6Dy2AhXXFglvtB6fM3YVpEdXFGGDjM%2Ft6MzciNGzezVGW8L2ROsE%2Fcic5GUc9tKXouC4rwswdnqBz%2B1QA4%3D&view_type=list&gz=1&t_ref_content=top&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove3 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44107458&recommend_ids=eJxNjcERAzEMAqvJHyEkS%2B8Ukv67iH0X%2B%2FLcgQWhnJ7xKfZrvOUNr9REWyg3jpXajaRRNTEXXm7XduXgKJ4yBgLcZR8hLPe3jBQRJ4XYPf6n6NpTZtmFhbhdKfQcTbN4puSRRjvI9HIcNDq7HpyZnrK19%2FV73IiV2hc1AD%2F3&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove4 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44255707&recommend_ids=eJxFj7cRAzAMA6dxD4BRtQfx%2FltYchDLvwcY3OVZ3a8WH%2FV0lyjfSHzQzKtq2%2FVFqFpjwzriWhQidph5UGUZybEdZE3XsfP%2FsIuQn8m%2FMxCJdRFkqm%2BYy4qcri1UDrpnTlcVK9bshWR%2BrVGVMYv2C9AdhTyXHHwDOXU%2F6A%3D%3D&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove5 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44117992&recommend_ids=eJxFj8EVBCEMQqvZO4EkxvMWsv13sXHeqMcvIMRdXoB%2BxfkZX1daKtBoC11wqNHwIAYiRmM%2BaOywNb5m48g4iMqYsc0UihW7yMmV3mZMlMKOKnAUz1dEJObpXTPAjZrdqrhqhdkdKUf7D9JA58VYDzdrlqxzb8%2BgfKl%2FFAs%2Ftw%3D%3D&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove6 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44177200&recommend_ids=eJxFj8ERAzEIA6vJXxJg8DuFpP8ugu%2FG9nNHoAV3o3LEr8hPfl2Tium%2F0nzQLAnb6Cr0fCNfFOW1d92grE6JF%2Blczdqpw7BTm2215R1PikREHjQDOI53acAjQgWZR6QQoXuGo9tO1cpcV1QjZtxdxMC8zX0G7nB%2FJPOFfwWpP5g%3D&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove7 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44342375&recommend_ids=eJxFzsEZgyEIA9Bpeg%2BBAJ47SPffovr1Lx6fRpNwxjL5p2mveke4sVKftocIOIZMl%2Bzeyls7zHWIzFwLf1rQvIaBgsB5iwxiihy7xjQzjNG4ReQ52MSzitW8NPc8I%2FP3s6TQ0Ipha8K7dAlDNNE9YRoYvDyb88z4Av87P5c%3D&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove8 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44042127&recommend_ids=eJxVj8sVAzEIA6vJXQgE%2BJxCtv8uYudjb47DID0IlqfSruZ41DPCEXBcbfZGpku20RiNhVjorfSRM%2Ftd5vLT5qdKc0G3ZlbzWHNP%2FNBHpVwbERyjdhaSYtuwYtj4y1ptS2hoNwea6NtVAdSxNDDOVdQaHCwIud5%2FATgFP%2Fc%3D&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  const _handlePageMove9 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44176965&recommend_ids=eJxNj7sVAzEIBKtxvvwhdiHXfxdG%2BEm6cDQsi5SL2Eqf5PrEVyXTihuJBi090tsOqkQKYw%2B%2F8NF5IC8t6jQmLUgXO2mGOWpbRRpRHKQKwHdzhx0Wp4qlENf2qjIcRMDW8M5CIdcSa2Jd5f9s32R0V%2FHyxwogGi%2FkSL5FVqD5wg%2FPj0O1&view_type=list&gz=1&t_ref_content=general&t_ref=jobcategory_recruit#seq=0','사람인', 'scrollbars=yes');
  };

  return (
    <Container>
      { state.loading ? <Loading/> : null }
      <TopContent>
        <img src={logo} alt="logo" className='logo-size'/>  
      </TopContent>
      <BottomContent>
        <div className='data-box' onClick={_handlePageMove1}>
          <div className='name-box'>
            동호에이치알(주)
          </div>
          <div className='title-box'>
            [구로디지털단지역/정규직] 고객관리 및 채권관리 사무직 채용
          </div>
          <div className='kind-box'>
            유지보수, 정보보안, 네트워크, 경리, 전산회계 외
          </div>
          <div className='info-box'>
            <div className='eligibility'><div>경력무관</div><div></div>학력무관</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>3,000만원 (면접 후 협의)</div>
            <div className='deadline'>~11/04(일)</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove2}>
          <div className='name-box'>
            (주)엠브레이스
          </div>
          <div className='title-box'>
            [네이버] LIVE 서비스 운영 및 관제 신입 정규직 채용
          </div>
          <div className='kind-box'>
            기술지원, 백엔드/서버개발, 정보보안, SE(시스템엔지니어), 네트워크 외
          </div>
          <div className='info-box'>
          <div className='eligibility'><div>신입·경력</div><div></div>학력무관</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>2,800만원 이상 (면접 후 합의)</div>
            <div className='deadline'>~11/13(일)</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove3}>
          <div className='name-box'>
            넥스큐브코퍼레이션(주)
          </div>
          <div className='title-box'>
            [연봉 4500~6000] 웹/서버 개발자 채용 넥스큐브코퍼레이션
          </div>
          <div className='kind-box'>
            백엔드/서버개발, 웹개발, 유지보수, 프론트엔드, SI개발 외
          </div>
          <div className='info-box'>
          <div className='eligibility'><div>경력무관</div><div></div>학력무관</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>6,000만원</div>
            <div className='deadline'>~11/14(월)</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove4}>
          <div className='name-box'>
            ㈜키트넷
          </div>
          <div className='title-box'>
            JAVA 신입 경력 모집 (면접비 지급, PL 출신이 1:1 맞춤형 교육) 
          </div>
          <div className='kind-box'>
            앱개발, 웹개발, .NET, Android, C# 외
          </div>
          <div className='info-box'>
            <div className='eligibility'><div>신입·경력</div><div></div>대학교(4년)↑</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>3,000만원 (면접 후 협의)</div>
            <div className='deadline'>~11/10(목)</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove5}>
          <div className='name-box'>
            주식회사 몹티콘
          </div>
          <div className='title-box'>
            스마트 교통 시스템 S/W 개발자 모집(신입)
          </div>
          <div className='kind-box'>
            웹개발, 유지보수, 데이터시각화, 임베디드, 펌웨어 외
          </div>
          <div className='info-box'>
          <div className='eligibility'><div>신입·경력</div><div></div>대학(2,3년)↑</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>3,200만원</div>
            <div className='deadline'>~12/03(토)</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove6}>
          <div className='name-box'>
            (주)정보라인
          </div>
          <div className='title-box'>
            백업보안 솔루션 엔지니어 모집(클라우드/On-premis)(신입/경력)
          </div>
          <div className='kind-box'>
            백엔드/서버개발, 정보보안, H/W, S/W, VDI 외
          </div>
          <div className='info-box'>
          <div className='eligibility'><div>경력무관</div><div></div>대학(2,3년)↑</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>2,800만원 이상 (면접 후 협의)</div>
            <div className='deadline'>채용시</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove7}>
          <div className='name-box'>
            (주)이지스
          </div>
          <div className='title-box'>          
            GIS 웹 개발자 모집(신입/경력) 
          </div>
          <div className='kind-box'>
            웹개발, CSS, Java, Javascript, JSP 외
          </div>
          <div className='info-box'>
          <div className='eligibility'><div>신입·경력</div><div></div>학력무관</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>3,500만원</div>
            <div className='deadline'>~12/02(금)</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove8}>
          <div className='name-box'>
            (주)지산웨어
          </div>
          <div className='title-box'>
            신입/경력 Java 계열 Full Stack Developer를 모집합니다. 
          </div>
          <div className='kind-box'>
            백엔드/서버개발, 웹개발, 유지보수, 프론트엔드, S/W 외
          </div>
          <div className='info-box'>
          <div className='eligibility'><div>신입·경력</div><div></div>대학교(4년)↑</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>3,500만원</div>
            <div className='deadline'>채용시</div>
          </div>
        </div>
        <div className='data-box' onClick={_handlePageMove9}>
          <div className='name-box'>
            (주)정보라인 
          </div>
          <div className='title-box'>
            백업 및 보안 솔루션 영업사원 모집(신입/경력)
          </div>
          <div className='kind-box'>
            백엔드/서버개발, 정보보안, H/W, S/W, VDI 외
          </div>
          <div className='info-box'>
          <div className='eligibility'><div>신입</div><div></div>대학(2,3년)↑</div>
            <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
          </div>
          <div className='footer-box'>
            <div className='salary'>2,800만원 이상 (면접 후 협의)</div>
            <div className='deadline'>채용시</div>
          </div>
        </div>
      </BottomContent>
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  height: 100vmax; 
  flex-direction: column;
  background: white;
  margin-top: 20px;
  
  @media screen and (max-width: 430px) {
      width: 100%;      
    }
`

const TopContent = styled.div`
  width: 100%;
  height: 5%; 
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  /* border-bottom: 1px solid #D8D8D8; */
  
  .logo-size {
    width: 50%;
    height: 80%;
  }
`

const BottomContent = styled.div`
  width: 100%;
  height: 95%; 
  padding: 10px;
  background: #FAFAFA;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* gap: 15px 15px; */
  align-content: start;

  @media screen and (max-width: 430px) {
      display: flex;
      flex-direction: column;
    }

  .data-box {
    width: 100%;
    height: 220px;
    /* border-radius: 10px 10px 10px 10px; */
    border: 1px solid #A9BCF5;
    flex-direction: column;
    align-items: center;
    display: flex;
    cursor: pointer;
    background: white;
  }

  .name-box {
    width: 95%;
    height: 25%;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #5858FA;
  }

  .title-box {
    width: 95%;
    height: 25%;
    display: flex;
    /* align-items: center; */
  }

  .kind-box {
    width: 95%;
    height: 10%;
    display: flex;
    /* align-items: center; */
    color: gray;
    font-size: 12px;
  }

  .info-box {
    width: 95%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .eligibility {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .conditions {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  
  .footer-box {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    background: #F2F2F2;
  }

  .salary {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 5px;
    font-size: 14px;
  }

  .deadline {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    padding-right: 5px;
    color: red;
  }
`

export default JobsPage;