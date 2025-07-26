import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const bubbleStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'rgba(228, 228, 228, 0.09)', // light background, change to suit theme
  color: '#ffffff', // icon color
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer'
  ,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind or want to explore collaboration opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out through any of the contact methods below. 
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
            
            <div className="contact-details">
  <div className="contact-item">
    <Mail className="contact-icon" size={20} />
    <div>
      <strong>Email</strong>
      <p>brendanmebson@gmail.com</p>
    </div>
  </div>

  <div className="contact-item">
    <MapPin className="contact-icon" size={20} />
    <div>
      <strong>Location</strong>
      <p>Nigeria (Remote-friendly 🌍)</p>
    </div>
  </div>

  <div className="contact-item">
    <Send className="contact-icon" size={20} />
    <div>
      <strong>Let's Collaborate</strong>
      <p>Open to freelance, full-time & collabs 💡</p>
    </div>
  </div>
</div>

            
            <div className="social-links">
              <h4>Follow Me</h4>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="social-links"
                style={{ display: 'flex', gap: '1rem' }} // you can customize spacing here
              >
                <a
                  href="https://github.com/Brendanmebson"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={bubbleStyle}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={bubbleStyle}
                >
                  <Linkedin size={20} />
                </a>
                <a href="mailto:brendanmebson@gmail.com" style={bubbleStyle}>
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-submit">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-info {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: fit-content;
        }
        
        .contact-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #667eea;
        }
        
        .contact-info p {
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .contact-details {
          margin-bottom: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .contact-icon {
          color: #667eea;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .contact-item strong {
          display: block;
          margin-bottom: 0.2rem;
        }
        
        .contact-item p {
          margin: 0;
          opacity: 0.8;
        }
        
        .social-links h4 {
          margin-bottom: 1rem;
          color: #667eea;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icons a {
          color: white;
          padding: 0.8rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .social-icons a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .contact-form {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .btn-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          padding: 1rem 2rem;
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;