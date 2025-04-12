declare global {
  interface Window {
    fbq: any;
    dataLayer: any[];
  }
}

export const trackEvent = {
  pageView: () => {
    if (typeof window !== 'undefined') {
      try {
        window.fbq('track', 'PageView');
        window.dataLayer?.push({
          event: 'page_view'
        });
      } catch (error) {
        console.error('Erro ao rastrear PageView:', error);
      }
    }
  },

  contact: () => {
    if (typeof window !== 'undefined') {
      try {
        window.fbq('track', 'Contact');
        window.dataLayer?.push({
          event: 'contact'
        });
      } catch (error) {
        console.error('Erro ao rastrear Contact:', error);
      }
    }
  },

  beginCheckout: () => {
    if (typeof window !== 'undefined') {
      try {
        window.fbq('track', 'InitiateCheckout', {
          currency: 'BRL',
          value: 37.00,
          content_type: 'product',
          content_name: 'Pacote de Documentos Psicológicos',
          content_category: 'Documentos',
        });
        window.dataLayer?.push({
          event: 'begin_checkout',
          ecommerce: {
            currency: 'BRL',
            value: 37.00,
            items: [{
              item_name: 'Pacote de Documentos Psicológicos',
              item_category: 'Documentos',
              price: 37.00,
              quantity: 1
            }]
          }
        });
      } catch (error) {
        console.error('Erro ao rastrear InitiateCheckout:', error);
      }
    }
  },

  viewContent: () => {
    if (typeof window !== 'undefined') {
      try {
        window.fbq('track', 'ViewContent', {
          content_type: 'product',
          content_name: 'Pacote de Documentos Psicológicos',
          content_category: 'Documentos',
          currency: 'BRL',
          value: 37.00
        });
      } catch (error) {
        console.error('Erro ao rastrear ViewContent:', error);
      }
    }
  }
}; 