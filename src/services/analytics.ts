interface FacebookPixel {
  (method: 'init', pixelId: string, data?: Record<string, unknown>): void;
  (method: 'track', event: string, data?: Record<string, unknown>): void;
  (method: 'trackCustom', event: string, data?: Record<string, unknown>): void;
  (method: 'set', property: string, value: boolean): void;
}

interface DataLayerEvent {
  event: string;
  ecommerce?: {
    currency: string;
    value: number;
    items?: Array<{
      item_name: string;
      item_category: string;
      price: number;
      quantity: number;
    }>;
  };
}

interface GtagFunction {
  (command: 'js', date: Date): void;
  (command: 'config', targetId: string, config?: Record<string, unknown>): void;
  (command: 'event', action: string, params?: Record<string, unknown>): void;
}

interface ConversionCallback {
  (): void;
}

declare global {
  interface Window {
    fbq: FacebookPixel;
    dataLayer: DataLayerEvent[];
    gtag: GtagFunction;
    gtag_report_conversion: (url?: string) => boolean;
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
        window.gtag?.('event', 'page_view');
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
        window.gtag?.('event', 'generate_lead');
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
        window.gtag?.('event', 'begin_checkout', {
          currency: 'BRL',
          value: 37.00,
          items: [{
            item_name: 'Pacote de Documentos Psicológicos',
            item_category: 'Documentos',
            price: 37.00,
            quantity: 1
          }]
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
        window.gtag?.('event', 'view_item', {
          currency: 'BRL',
          value: 37.00,
          items: [{
            item_name: 'Pacote de Documentos Psicológicos',
            item_category: 'Documentos',
            price: 37.00,
            quantity: 1
          }]
        });
      } catch (error) {
        console.error('Erro ao rastrear ViewContent:', error);
      }
    }
  },

  conversion: (url?: string) => {
    if (typeof window !== 'undefined') {
      try {
        window.gtag_report_conversion?.(url);
      } catch (error) {
        console.error('Erro ao rastrear Conversion:', error);
      }
    }
  }
}; 