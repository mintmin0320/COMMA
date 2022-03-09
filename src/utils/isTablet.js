import { useMedia } from 'react-media';

export default function _isTablet() {
  return useMedia({ query: '(min-width: 768px) and (max-width: 1279px)' });
}
