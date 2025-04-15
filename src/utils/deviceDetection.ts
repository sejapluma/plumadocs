export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    'android',
    'webos',
    'iphone',
    'ipad',
    'ipod',
    'blackberry',
    'windows phone'
  ];

  return mobileKeywords.some(keyword => userAgent.includes(keyword));
};

export const redirectToMobileVersion = () => {
  if (typeof window === 'undefined') return;

  const currentUrl = window.location.href;
  const isMobile = isMobileDevice();
  const isMobilePath = currentUrl.includes('/mobile');

  if (isMobile && !isMobilePath) {
    window.location.href = 'https://docs.sejapluma.com/mobile';
  } else if (!isMobile && isMobilePath) {
    window.location.href = 'https://docs.sejapluma.com';
  }
}; 