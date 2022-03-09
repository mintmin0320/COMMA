import { useEffect, useState } from 'react';
import packageJson from '../package.json';

global.appVersion = packageJson.version;

// 최신버전과 window객체에있는 appversion 비교
const semverGreaterThan = (versionA, versionB) => {
  const versionsA = versionA.split(/\./g);
  const versionsB = versionB.split(/\./g);

  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());
    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};

const CacheBuster = (props) => {
  const path = window.location.pathname;
  const [state, setState] = useState({
    loading: true,
    isLatestVersion: false,
    refreshCacheAndReload: () => {
      console.log('Clearing cache and hard reloading...');
      if (caches) {
        // Service worker cache should be cleared with caches.delete()
        caches.keys().then(function (names) {
          for (let name of names) caches.delete(name);
        });
      }

      // delete browser cache and hard reload
      window.location.reload(true);
    },
  });

  useEffect(() => {
    fetch('/meta.json')
      .then((response) => response.json())
      .then((meta) => {
        const latestVersion = meta.version;
        const currentVersion = global.appVersion;

        const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
        if (shouldForceRefresh) {
          // 최신버전이 아닐때
          console.log(`구 버전입니다 업데이트로인해 새로고침을 실행합니다`);
          setState({ ...state, loading: false, isLatestVersion: false });
        } else {
          // 최신버전일때
          setState({ ...state, loading: false, isLatestVersion: true });
        }
      });
    // pathname이 바뀔때마다 재실행된다.
  }, [path]);
  const { loading, isLatestVersion, refreshCacheAndReload } = state;
  return props.children({ loading, isLatestVersion, refreshCacheAndReload });
};

export default CacheBuster;
