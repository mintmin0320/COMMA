import { useMedia } from 'react-media';

export default function _isMobile() {
  return useMedia({ query: '(max-width: 1020px)' });
}
