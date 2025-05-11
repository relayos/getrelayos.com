import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const formData: ContactFormData = req.body;
      
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        return res.status(400).json({ 
          message: 'Missing required fields: name, email, and message are required' 
        });
      }
      
      // In a real implementation, you might want to:
      // 1. Send an email notification
      // 2. Store the contact submission in a database
      // 3. Create a ticket in a CRM system
      
      // For now, we'll just log the submission and return success
      console.log('Contact form submission:', formData);
      
      return res.status(200).json({ 
        message: 'Contact form submitted successfully',
        success: true
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  // API route for newsletter signup
  app.post('/api/newsletter/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ 
          message: 'Email is required' 
        });
      }
      
      // In a real implementation, you would add this to a newsletter service
      console.log('Newsletter subscription:', email);
      
      return res.status(200).json({ 
        message: 'Subscribed to newsletter successfully',
        success: true
      });
    } catch (error) {
      console.error('Error processing newsletter subscription:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
