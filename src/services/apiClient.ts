import { API_BASE_URL } from "./../config/api";

class ApiClient {
    private baseURL: string;
  
    constructor(baseURL: string = API_BASE_URL) {
      this.baseURL = baseURL;
    }
  
    private async request<T>(
      endpoint: string, 
      options: RequestInit = {},
      responseType: 'json' | 'blob' = 'json'
    ): Promise<T> {
      const url = `${this.baseURL}${endpoint}`;
      
      // Get auth token from localStorage
      const token = localStorage.getItem('authToken');
      
      const config: RequestInit = {
        headers: {
          ...(responseType === 'json' && { 'Content-Type': 'application/json' }),
          ...(token && { Authorization: `Bearer ${token}` }),
          ...options.headers,
        },
        ...options,
      };
  
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `HTTP error! status: ${response.status}`);
      }
      
      if (responseType === 'blob') {
        return response.blob() as Promise<T>;
      }
      
      return response.json();
    }
  
    // GET request with optional blob support
    async get<T>(endpoint: string, options?: { responseType?: 'json' | 'blob' }): Promise<T> {
      return this.request<T>(endpoint, { method: 'GET' }, options?.responseType || 'json');
    }
  
    // POST request
    async post<T>(endpoint: string, data?: any): Promise<T> {
      return this.request<T>(endpoint, {
        method: 'POST',
        body: data ? JSON.stringify(data) : undefined,
      });
    }
  
    // PUT request
    async put<T>(endpoint: string, data?: any): Promise<T> {
      return this.request<T>(endpoint, {
        method: 'PUT',
        body: data ? JSON.stringify(data) : undefined,
      });
    }
  
    // DELETE request
    async delete<T>(endpoint: string): Promise<T> {
      return this.request<T>(endpoint, { method: 'DELETE' });
    }
}
  
export const apiClient = new ApiClient();