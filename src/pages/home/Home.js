import React, { Component, useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
// import Slider from "react-slick"; // 설치
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CARD1 = styled.div`
    margin: 10px;
    padding: 10px;
    height: 250px;
    border: 1px solid #d1d1d1;
    border-radius: 20px;
    box-shadow: 0px 5px 10px -7px rgba(0,0,0,1);
`
const CARD2 = styled.ul`
    margin: 0;
    padding: 0;
    div{
        margin-top: 20px;
        padding: 10px;
        height: 30px;
        border: 1px solid #d1d1d1;
        border-radius: 10px;
        box-shadow: 0px 5px 7px -7px rgba(0,0,0,1);
        font-size: 13px;
    }
    div p {
        float: left;
        margin: 5px 10px;
    }
`
const PageBtn = styled.ul`
    margin: 10px auto;
    padding: 0;
    width: fit-content;
    list-style: none;
    display: flex;
    font-size: 15px;
    li {
        margin: 10px;
        padding: 0 5px;
        cursor: pointer;
    }
    li.active {
        border-bottom: 2px solid black;
        color: black;
    }
    li button {
        background-color: transparent;
        border: none;
        color: black;
        cursor: pointer;
    }
`
const RadioWrap = styled.div`
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    width: 500px;
    background: #e1e1e1;
    text-align: center;
    border: 1px solid #d1d1d1;
    border-radius: 0px 0px 10px 10px;
    input {
        margin: 0px 12px;
    }
`
const Container = styled.div`
    width: 700px;
`

// class Slide extends Component {
//     render(){
//         const { con, ...props } = this.props;
//         return (
//             <CARD1>
//             <div {...props}>{con}</div>
//             </CARD1>
//         );
//     }
// }
const renderData = (data) => {
    return (
        <CARD2>
        {data.map((notice, index) => {
            return (
                <div key={index}>
                <p style={{width: '500px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{notice.title}</p>
                <p>{notice.writer}</p>
                <p>{notice.createDate}</p>
                </div>
            )
        })}
        </CARD2>
    );
};

export default function Home() {
    // infinite carousel
    const Arrow = () => (
        <button style={{display: 'none'}} />
    );
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <Arrow />,
        nextArrow: <Arrow />,
    };

    // pagination
    const [data, setData] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(6); // 한 page당 보여지는 목록 개수

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
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
        } else {
        return null;
        }
    });

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }
    
    // getData 전체 공지사항
    useEffect(() => {
        const getData = async () => {
        // const params = 1;
        const url = "http://210.121.173.182/notice";
        console.log(url);
        const res = await axios.get(url);
        setData(res.data);
        console.log(res.data);
        }
        getData();
    }, []);

    return (
        <Container>
        <RadioWrap>
            <input type="radio" name="dept" value="대학" />대학
            <input type="radio" name="dept" value="학부" />학부
            <input type="radio" name="dept" value="소프트웨어" />소프트웨어
            <input type="radio" name="dept" value="정보공학" />정보공학
            <input type="radio" name="dept" value="인공지능" />인공지능
        </RadioWrap>
        
        {/* <Slider {...settings}>
            <Slide con={1} />
            <Slide con={2} />
            <Slide con={3} />
            <Slide con={4} />
            <Slide con={5} />
        </Slider> */}
        
        {renderData(currentItems)}
        <PageBtn>
        <li>
            <button
                onClick={handlePrevbtn}
                disabled={currentPage === pages[0] ? true : false}
            >
            &lt;
            </button>
        </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
        <li>
            <button
                onClick={handleNextbtn}
                disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
            &gt;
            </button>
        </li>
        </PageBtn>

        </Container>
    )
}
