import { setBoardDelete } from '../redux/actions/board';

// input value change
export const _handleInputChange = (state, setState, e) => {
  const { searchAble } = state;
  const value = e.target.name === 'pageSize' ? parseInt(e.target.value) : e.target.value;

  setState({
    ...state,
    searchAble: {
      ...searchAble,
      [e.target.name]: value,
    },
  });
};

// 일괄삭제
export const _setDelete = async (dispatch, state, setState, url) => {
  const filterData = state.loadData.filter(function (element) {
    return element.isChecked === true;
  });
  const adminId = state?.adminId;

  if (filterData.length === 0) {
    setState({
      ...state,
      message: "삭제하실 '정보'를 선택하세요.",
      success: true,
      visibleDialog: true,
    });
    setTimeout(() => {
      setState({
        ...state,
        isDelete: false,
        success: false,
        visibleDialog: false,
      });
    }, 1000);
  } else {
    let newData = [];
    filterData.map((row) => {
      newData.push(row.idx);
    });

    const params = {
      idx: newData,
      adminId: adminId,
    };

    dispatch(setBoardDelete(url, params)).then((response) => {
      setState({
        ...state,
        result: response.result,
        message: response.message,
        success: true,
        visibleDialog: true,
      });
    });

    setTimeout(() => {
      setState({
        ...state,
        isLoading: true,
        isDelete: false,
        skip: 0,
        success: false,
        visibleDialog: false,
      });
    }, 1000);
  }
};
