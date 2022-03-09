import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../common/input-ver2.0/Input';

const Search = () => {
  const [state, setState] = useState({
    searchValue: '',
  });

  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      red: false,
      redCertifyNo: false,
    });
  };

  // 확인 버튼 클릭
  const _handleSubmit = (e) => {
    e.preventDefault();
  

  };

  return (
    <Container>
      <form onSubmit={(e) => _handleSubmit(e)}>
        <Input
          name="searchValue"
          value={state.searchValue}
          onChange={_handleInputChange}
          required={true}
          titleName=""
          placeholder="검색어를 입력해주세요"
          wrapMargin="0 0 20px 0"
        />
      </form>

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
`;

export default Search;