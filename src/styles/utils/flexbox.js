import { css } from 'styled-components'

function convertFullName(value) {
  switch (value) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    default:
      return value
  }
}


// jc default : center
// jc : center | start | end | between | around

// ai default : center
// ai : center | start | end | between | around

export function flexbox(jc = 'center', ai = 'center' ) {
  return css`
    display: flex;
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `
}

export function inlineFlexbox(jc = 'center', ai = 'center') {
  return css`
    display: inline-flex;
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `
}