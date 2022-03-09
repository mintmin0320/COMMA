// ------사용법--------
// 상위컴포넌트에서 const [ scroll , setScroll] = useState() 이렇게 만드셔서 넘겨주시면됩니다.

import React, { useCallback, useEffect } from 'react';

const InfiniteScroll = ({
  setState, // setState
  scroll, // 스크롤 위치 기억
  setScroll, // 스크롤 위치 저장
}) => {
  const scrollEvent = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    // 스크롤해서 보이지 않는 높이(scrollTop) + 보이는 화면 높이(clientHeight) == 전체 페이지의 높이(scrollHeight)
    // 스크롤이 화면 끝에 닿았을 경우를 의미함
    if (scrollTop + clientHeight >= scrollHeight) {
      // API를 호출해서 데이터 불러오기
      setState((state) => ({
        ...state,
        isLoading: state.rowTotal < state.searchAble.pageSize ? false : true,
        searchAble: {
          ...state.searchAble,
          pageSize: state.searchAble.pageSize + 10,
        },
      }));
      if (scrollTop !== 0) {
        setScroll(scrollTop);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    window.scrollTo(0, scroll);
  }, [scrollEvent]);

  return <div></div>;
};

export default InfiniteScroll;
