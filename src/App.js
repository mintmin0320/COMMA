import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// 개발자
import CacheBuster from './CacheBuster';
import { getStatusRequest } from './redux/actions/auth';
import { MainRoute } from './routes';
// CSS
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

const App = () => {
  const dispatch = useDispatch();
  const storageData = sessionStorage.getItem('user');

  useEffect(() => {
    if (storageData !== null) {
      dispatch(getStatusRequest());
    }
  }, []);

  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }

        return (
          <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              <MainRoute />
            </ThemeProvider>
          </>
        );
      }}
    </CacheBuster>
  );
};

export default App;
