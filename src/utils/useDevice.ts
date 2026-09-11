import { useState, useEffect } from 'react';
import { PLAY_STORE_URL, IOS_APP_URL } from '../data/content';

export function useDevice() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent || navigator.vendor || '';
      const isApple =
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isGoogle = /Android/.test(ua);

      setIsIOS(isApple);
      setIsAndroid(isGoogle);
      setIsReady(true);
    }
  }, []);

  const primaryUrl = isIOS ? IOS_APP_URL : PLAY_STORE_URL;
  const primaryPlatform = isIOS ? 'iOS' : 'Android';

  return {
    isIOS,
    isAndroid,
    isReady,
    primaryUrl,
    primaryPlatform,
    playStoreUrl: PLAY_STORE_URL,
    iosAppUrl: IOS_APP_URL,
  };
}
