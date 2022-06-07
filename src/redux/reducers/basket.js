import * as types from '../actions/BasketTypes';

const initialState = {
  basketStatus: [],
};

export default function basket(state = initialState, action) {
  switch (action.type) {
    /* 장바구니에 담기 */
    case types.BASKET_ADD:
      // 장바구니 배열에 추가
      return {
        ...state,
        basketStatus: [...state.basketStatus, action.item],
      };
    /* 장바구니에서 제거 */
    case types.BASKET_REMOVE:
      // 장바구니 배열에서 해당 index를 삭제
      console.log(action.itemId);
      const newItem = state.basketStatus.filter((item) => item.itemId !== action.itemId)
      console.log(newItem);
      return {
        ...state,
        basketStatus: newItem,
      };

    /* 장바구니 상태 */
    case types.BASKET_STATUS:
      console.log(action);
      return {
        ...state,
      };

    /* 주문서 DB 저장 */
    case types.BASKET_SAVE:
      return {
        ...state,
        basketStatus: [],
      };
      
    /* DEFAULT */
    default:
      return state;
  }
}

