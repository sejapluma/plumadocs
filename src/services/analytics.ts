declare global {
  interface Window {
    fbq: any;
    dataLayer: any[];
  }
}

export const trackEvent = {
  pageView: () => {
    if (typeof window !== 'undefined') {
      window.fbq('track', 'PageView');
      window.dataLayer?.push({
        event: 'page_view'
      });
    }
  },

  contact: () => {
    if (typeof window !== 'undefined') {
      window.fbq('track', 'Contact');
      window.dataLayer?.push({
        event: 'contact'
      });
    }
  },

  beginCheckout: () => {
    if (typeof window !== 'undefined') {
      window.fbq('track', 'InitiateCheckout', {
        currency: 'BRL',
        value: 47.00
      });
      window.dataLayer?.push({
        event: 'begin_checkout',
        ecommerce: {
          currency: 'BRL',
          value: 47.00
        }
      });
    }
  }
}; 