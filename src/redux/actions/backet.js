import {
  BASKET_ADD,
  BASKET_REMOVE,
  BASKET_STATUS,
  BASKET_SAVE,
} from './BasketTypes';
import _axios from '../../utils/axios';

// 장바구니 담기
export function basketAdd(itemId, itemTitle) {
    return {
      type: BASKET_ADD,
      item: {
        itemId,
        itemTitle,
      }
    };
}

// 장바구니 제거
export function basketRemove(itemId) {
  console.log(itemId);
    return {
      type: BASKET_REMOVE,
      itemId,
    };
}

// 장바구니 상태
export function getBasketStatus() {
  return {
    type: BASKET_STATUS,
  };
}

// // 장바구니 저장
// export function backetSave(basketStatus) {
//   return (dispatch) => {
//     const url = '/basketSave';
//     const params = {
//       data: basketStatus,
//     };
  
//     // API REQUEST
//     return _axios(url, params)
//       .then((response) => {
//         // SUCCEED
//         dispatch(saveSuccess(response));
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//   };
// }

// 저장이 성공하였으면...
export function saveSuccess(response) {
    return {
      type: BASKET_SAVE,
    };
}

