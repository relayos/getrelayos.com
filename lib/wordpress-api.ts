import axios, { AxiosResponse } from 'axios';

// Base API configuration
const wpApi = axios.create({
  baseURL: process.env.WORDPRESS_API_URL || 'http://localhost:8080/wp-json/wp/v2',
  timeout: 10000,
});

// Base custom API configuration
const wpCustomApi = axios.create({
  baseURL: process.env.WORDPRESS_API_URL?.replace('/wp/v2', '') || 'http://localhost:8080/wp-json',
  timeout: 10000,
});

// Types for WordPress data
export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WPProduct {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    tagline: string;
    type: 'b2b' | 'b2c';
    features: string[];
    description: string;
    image?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
  };
}

export interface WPSolution {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    tagline: string;
    features: string[];
    description: string;
    icon?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
  };
}

export interface WPTestimonial {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
}

// API handler functions
export async function getProducts(): Promise<WPProduct[]> {
  try {
    const response: AxiosResponse<WPProduct[]> = await wpApi.get('/products', {
      params: {
        _embed: 'wp:featuredmedia',
        per_page: 100,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string): Promise<WPProduct | null> {
  try {
    const response: AxiosResponse<WPProduct[]> = await wpApi.get('/products', {
      params: {
        slug,
        _embed: 'wp:featuredmedia',
      },
    });
    
    if (response.data.length === 0) {
      return null;
    }
    
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
}

export async function getSolutions(): Promise<WPSolution[]> {
  try {
    const response: AxiosResponse<WPSolution[]> = await wpApi.get('/solutions', {
      params: {
        _embed: 'wp:featuredmedia',
        per_page: 100,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching solutions:', error);
    return [];
  }
}

export async function getSolutionBySlug(slug: string): Promise<WPSolution | null> {
  try {
    const response: AxiosResponse<WPSolution[]> = await wpApi.get('/solutions', {
      params: {
        slug,
        _embed: 'wp:featuredmedia',
      },
    });
    
    if (response.data.length === 0) {
      return null;
    }
    
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching solution with slug ${slug}:`, error);
    return null;
  }
}

export async function getTestimonials(): Promise<WPTestimonial[]> {
  try {
    const response: AxiosResponse<WPTestimonial[]> = await wpApi.get('/testimonials', {
      params: {
        per_page: 100,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  try {
    const response = await wpCustomApi.post('/relayos/v1/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export async function submitSignupForm(formData: {
  username: string;
  email: string;
  password: string;
  company?: string;
}) {
  try {
    const response = await wpCustomApi.post('/relayos/v1/signup', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting signup form:', error);
    throw error;
  }
}