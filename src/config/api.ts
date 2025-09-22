const getBaseUrl = () => {
    // In development, `import.meta.env.MODE` will be 'development'
    if (import.meta.env.MODE === 'development') {
      // Access custom env vars using the VITE_ prefix
      return import.meta.env.VITE_APP_API_URL || 'https://matarpark.com';
    }
    
    // In production, `import.meta.env.MODE` will be 'production'
    if (import.meta.env.MODE === 'production') {
      return import.meta.env.VITE_APP_API_URL || '';
    }
    
    return '';
  };
  
export const API_BASE_URL = getBaseUrl();