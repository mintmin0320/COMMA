import { css } from 'styled-components'

// type default : absoulte
// type = 'absolute' | 'fixed'

export function positionCenter(type = 'absolute') {
  return css`
    position: ${type};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
}

export function positionCenterX(type = 'absolute') {
  return css`
    position: ${type};
    left: 50%;
    transform: translateX(-50%);
  `
}

export function positionCenterY(type = 'absolute') {
  return css`
    position: ${type};
    top: 50%;
    transform: translateY(-50%);
  `
}