import React, {useState} from 'react';
import styled from 'styled-components';
//개발자
import titleTab from '../../utils/TitleTab';
import JobWeb from './JobWeb';
import JobData from './JobData';
import JobEtc from './JobEtc';
// import Loading from '../Loading';
import logo from '../../images/saramin.png';
// 서울시 구로구 , IT개발, 데이터 전체
const JobsPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("채용공고 - COMMA"), 300);
  const [state, setState] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  })

  const _handlePageMove1 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44428216&recommend_ids=eJxNzsEVwzAIA9BpehcgsDh3kOy%2FRZ28xvbxP4SAYDQzL3l%2FxpcMAc5Je4hW0C7ZzWjRI7HCVs1%2Bp5Ookr27PqKy1jSk7Lv5H46qtNzMUC5CVjHyPNRZK%2Bwyz7FZroFNYF7ezYM8OZvgxxuYfx80hxZBN38O%2FQBDVD%2Fw&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove2 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44427268&recommend_ids=eJxNj7sRA0EMQqtxrg9CKHYh7r8L79mztxcyDxACYKXmRzGvfgNJltdHzkuGpwVr05RqAov6TxLKiEX9n%2FVM2qawUcJvmeoK3Yecg3nQCePdvA5bIPYMRNfUHLlo6pjN8hq5q5qVZ8b6QNMny1DbI1u0OXIou83ZU43LzC9FBkAR&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove3 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44285504&recommend_ids=eJxNkLkRw0AMA6txThD8ELsQ99%2BFT5Z1UrizGIDDAGoofMb16ncEzUf9GdiJVYlcWD8My3LuMBxmuKxPNXuWxYGcSXksizNcCu1wkBmJyzrWcOXVzFZ22CNM065CrrNc2%2Fq6yrSHSFB8YAG4sStpG92Mx%2B4fTcO4w64aO76BL0JnP%2FY%3D&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove4 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44331786&recommend_ids=eJxNj8EVwzAIQ6fpXUKA4dxBuv8WdfJix8f%2FJCHhRsEyfmX9GV93ZQYnMm90RJqWCrWz8Jph1WOaeaGqos0XOrO9uU4ZI6Mm2qMaga26RoawswboWvWgFB7cRaNjOHYWXXIeZqH3DMZ8yXqbbX6Efos6C%2BPIUq0Dk7wv%2FwE12z%2Fm&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove5 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44337477&recommend_ids=eJxNj8ERw0AIA6vJHyHBwTuFuP8uco7H2M%2BFFYMkKEEe5f1ZX4nm1eso5IWZgRi0YrhvGSeyKtq1t3%2BU4GG8tyJM5c9lVkeNjGw15jIcZifaJfee5JNdGbTJkqHAjVwdSzZZ66Lwkmk9TyJ2Je%2BR3SKt5w3vLHvVJ9g88Qc4Wz%2F%2B&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
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
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44372924&recommend_ids=eJxNj8kNw0AMA6vJXyR1vlOI%2B%2B8i9hrYjX4DSkPIcQ%2B9r%2BZ86utOz%2BoHsVCZgbga%2BWK4Bje%2BqVsktW9ViJqdaibTbrSFKDpmq5DjS7WQkDHjqIw9dXrR6thmNq39FLGavpeZCMPulU%2F3fkHDdq9zK9kcFVMt%2B0uh0YM%2FURlAGg%3D%3D&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove10 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44372924&recommend_ids=eJxNj8kRw0AIBKPxH4ZreDsQ5Z%2BFkeTVil9XD5e7lUb1QdVPfd2tO1MG5UItuG7rEgk7iL7DmaGxrE7B%2BVgx0a6xeSLUBBnLWtcMG4v%2FXgGv8L3XlMZYvUZGw58zQAh9h1HERqSG6LbefI1q0L32v2bSvuygWtsL2cEz%2FANCkkAc&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove11 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44387528&recommend_ids=eJxVj8kRw0AIBKPxnwGG461AlH8WXlv2IhWvroEG3FrLPc8CXnm4WzURZ%2BkPIwhOCvHSlfaFCWavNC7sjpA%2FWhVbfWY%2F6toID5htlbZJ%2BEbJEs5VSHX0TUUnHqhjFhP0zC5V49bMdeegrjLsF1QYMos0QPk2vwFc%2FkAJ&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove12 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44350475&recommend_ids=eJxNjbsRA1EIA6txjkD8Yhfi%2Frsw55t7eIgWsYi0Dg98SvuVb9KEYvIp4EIpUwvflF01iLgxpPVycaMxM%2Fc4wuHPKyKajQctKuvfTXj2SaellcdV8ak6vRpwwUGkEuu2FpnHNZ8VFq3aa7E7QrZoxvazjew%2F9wtYEUAm&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove13 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44337618&recommend_ids=eJxNjsEVwzAIQ6fpHYEA69xBsv8WtZMmzvE%2F6QtIWpbHMVyf%2FpLRZc5jwBZGVgdypljoCPPKp4x2QrNcl1uVqwxcqFbV7c5lZD%2FlGCN1HrqWBU9xv8FyvaaMFrYPUVN%2FUi%2Bk4caQD7K3G2Fr%2Be%2FOHWinKFHY5Zz%2BC2Mox8IfSqVAHw%3D%3D&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove14 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44285906&recommend_ids=eJxNj7kRAzEMA6txToAvYhdy%2FXdh%2BTnJ4Q4W4DCAJtOuoR79DIyR3BjeyNY1wBctw3qlPwzN5Errg2xfvSNXJfKguym2bG5Q3wgWkX7uSlV2d31dEWNPsdTSnnLjfKZ%2Bh6ZM3Ol6MLBlFyfiyCiFcLq5jD%2F0Uc4bX0tjQDs%3D&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const _handlePageMove15 = () => {
    window.open('https://www.saramin.co.kr/zf_user/jobs/relay/view?isMypage=no&rec_idx=44418179&recommend_ids=eJxFj7kRw0AMA6txTvBH7ELUfxc%2BSb5juLMAhnTXslZeDXzq626ZgdiIDGvJayVeayb0ZfNGSSyObeHKEmy07qD6WdZkkbu7tIXZCr8Wadk9VrRZ061gTFedKXOzqkaeqxyljmON2u4zJSZ4lv%2FhpBPzvjWjBwtRz9QPZIJAUA%3D%3D&view_type=list&gz=1&t_ref_content=general&t_ref=area_recruit#seq=0');
  };

  const checkChange1 = () => {
    setState({
      ...state,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    })
  };

  const checkChange2 = () => {
    setState({
      ...state,
      check1: false,
      check2: true,
      check3: false,
      check4: false,
    })
  };

  const checkChange3 = () => {
    setState({
      ...state,
      check1: false,
      check2: false,
      check3: true,
      check4: false,
    })
  };

  const checkChange4 = () => {
    setState({
      ...state,
      check1: false,
      check2: false,
      check3: false,
      check4: true,
    })
  };

  return (
    <Container>
      {/* { state.loading ? <Loading/> : null } */}
      <TopContent>
        <div className='img-box'>
          <img src={logo} alt="logo" className='logo-size'/>  
        </div>
        <div className='select-box'>
          <div className='select'>
            <button className='button-box1' onClick={checkChange1}>전체</button>
            <button className='button-box'  onClick={checkChange2}>웹</button>
            <button className='button-box3' onClick={checkChange3}>데이터</button>
            <button className='button-box2' onClick={checkChange4}>Java</button>
          </div>
        </div>
      </TopContent>
      <BottomContent>
        {!state.check1 && !state.check2 && !state.check3 && !state.check4 && (
          <React.Fragment>
            <div className='data-box' onClick={_handlePageMove1}>
              <div className='name-box'>
                (주)블루비즈
              </div>
              <div className='title-box'>
                JAVA 웹개발자 경력자 모집 공고(정규직) 
              </div>
              <div className='kind-box'>
                웹개발, 클라우드, JavaReact, SpringBoot
              </div>
              <div className='info-box'>
                <div className='eligibility'><div>경력 3년↑</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'>4,800만원</div>
                <div className='deadline'>~12/30(금)</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove2}>
              <div className='name-box'>
                (주)씨씨미디어서비스 
              </div>
              <div className='title-box'>
                솔루션 운영 및 유지보수(SM) 채용
              </div>
              <div className='kind-box'>
                기술지원, 데이터분석가, 데이터엔지니어, 백엔드/서버개발앱개발 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>신입·경력</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~11/20(일)</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove3}>
              <div className='name-box'>
                (주)와우소프트 JAVA/JSP개발 신입/경력 모집
              </div>
              <div className='title-box'>
                [연봉 4500~6000] 웹/서버 개발자 채용 넥스큐브코퍼레이션
              </div>
              <div className='kind-box'>
                웹개발, 퍼블리셔, Ajax, Java, Javascript 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>신입·경력</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~11/25(금)</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove4}>
              <div className='name-box'>
                (주)투씨에스지
              </div>
              <div className='title-box'>
                보안취약점 통합 관리 솔루션 개발자
              </div>
              <div className='kind-box'>
                웹개발, SI개발, 솔루션, .NET, C# 외
              </div>
              <div className='info-box'>
                <div className='eligibility'><div>경력무관</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>채용시</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove5}>
              <div className='name-box'>
                (주)오누이 
              </div>
              <div className='title-box'>
                [에듀테크 스타트업 오누이/설탭] 대규모 인재 채용
              </div>
              <div className='kind-box'>
                기술지원, 데이터분석가, 데이터엔지니어, 백엔드/서버개발, 앱개발 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>신입·경력</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직·프리랜서</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~~11/30(수)</div>
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
            <div className='data-box' onClick={_handlePageMove10}>
              <div className='name-box'>
                (주)씨씨미디어서비스
              </div>
              <div className='title-box'>
                솔루션 운영 및 유지보수(SM) 채용
              </div>
              <div className='kind-box'>
                기술지원, 데이터분석가, 데이터엔지니어, 백엔드/서버개발, 앱개발 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>신입·경력</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~11/20(일)</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove11}>
              <div className='name-box'>
                (주)버블콘 
              </div>
              <div className='title-box'>
                [입사축하금150]버블콘 PM/개발자/영업/기획/마케팅 채용
              </div>
              <div className='kind-box'>
                데이터분석가, 데이터엔지니어, 백엔드/서버개발, 프론트엔드, SI개발 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>경력 3년↑</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>채용시</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove12}>
              <div className='name-box'>
                (주)한아름닷컴  
              </div>
              <div className='title-box'>
                [정규직] 노트 프로그램, 웹하드 업다운로드 개발자 모집
              </div>
              <div className='kind-box'>
                앱개발, 웹개발, 퍼블리셔, Android, C++ 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>경력 3년↑</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~11/16(수)</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove13}>
              <div className='name-box'>
                (주)메가투스 
              </div>
              <div className='title-box'>
                2022 하반기 IT 연계 솔루션 프로젝트 수행 신입/경력 채용
              </div>
              <div className='kind-box'>
                기술지원, 백엔드/서버개발, 유지보수, 솔루션, S/W 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>신입·경력</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~11/30(수)</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove14}>
              <div className='name-box'>
                템프인(주) 
              </div>
              <div className='title-box'>
                [신도림/정규직/대리급] ERP 개발 및 유지보수
              </div>
              <div className='kind-box'>
                웹개발, IT컨설팅, ERP, SAP, ABAP 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>경력 3년↑</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~11/24(목)</div>
              </div>
            </div>
            <div className='data-box' onClick={_handlePageMove15}>
              <div className='name-box'>
                (주)클라모스
              </div>
              <div className='title-box'>
                (정규직) Java Spring 개발자 모집
              </div>
              <div className='kind-box'>
                웹개발, SI개발, 데이터라벨링, 데이터시각화, RDBMS 외
              </div>
              <div className='info-box'>
              <div className='eligibility'><div>2~10년</div><div></div>대학(2,3년)↑</div>
                <div className='conditions'><div>정규직</div><div></div>서울 구로구</div>
              </div>
              <div className='footer-box'>
                <div className='salary'></div>
                <div className='deadline'>~01/12(목)</div>
              </div>
            </div>
          </React.Fragment>)}
          {!state.check1 && state.check2 && !state.check3 && !state.check4 && (
            <JobWeb/>
          )}
          {!state.check1 && !state.check2 && state.check3 && !state.check4 && (
            <JobData/>
          )}
          {!state.check1 && !state.check2 && !state.check3 && state.check4 && (
            <JobEtc/>
          )}
      </BottomContent>
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  height: 85vmax; 
  flex-direction: column;
  margin-top: 20px;
  
  @media screen and (max-width: 430px) {
      width: 100%;      
    }
`

const TopContent = styled.div`
  width: 100%;
  height: 15%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: white;
  display: flex;
  /* border-bottom: 1px solid #D8D8D8; */
  
  .logo-size {
    width: 70%;
    height: 100%;
  }

  .img-box {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
  }

  .select-box {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .select {
    width: 98%;
    height: 80%;
    //border: 2px solid #E6E6E6;
    border: 1px solid #A9BCF5;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .button-box {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #A9BCF5;
  }

  .button-box1 {
    width: 100%;
    height: 100%;
    border-right: 1px solid #A9BCF5;
    border-bottom: 1px solid #A9BCF5;
  }

  .button-box2 {
    width: 100%;
    height: 100%;;
  }

  .button-box3 {
    width: 100%;
    height: 100%;
    border-right: 1px solid #A9BCF5;
  }
`

const BottomContent = styled.div`
  width: 100%;
  height: 75%; 
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