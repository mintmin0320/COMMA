import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import HomePage from '../../components/home/HomePage';


const Container = styled.div`
    display: flex;
`;

const MenuBox = styled.div`
    width: 80%;
    height: 80px;
`;

const HeaderBox = styled.div`
    width: 20%; 
`;

const HomeBox = styled.div`
    display: block;
    width: 80%;
`;


const Home = () => {

    return (
        <Container>
            <HeaderBox>
                <Header/>
            </HeaderBox>
            <HomeBox>
                <MenuBox>
                    <MenuBar/>
                </MenuBox>
                <HomePage/>
            </HomeBox>
        </Container>
    )
}

export default Home;