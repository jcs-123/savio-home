import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Message:* ${form.message}

*Sent via Savio Home Website*
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number (Savio Home's number)
    const whatsappNumber = "918921915287"; // +91 89219 15287
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section style={headerStyle}>
        <div style={headerContent}>
          <h1 style={headerTitle}>
            Get In <span style={{ color: "#00c4ff" }}>Touch</span>
          </h1>
          <p style={headerSubtitle}>
            We'd love to hear from you. Reach out to learn more about our mission.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Container style={containerStyle}>
        <Row className="g-4">
          {/* LEFT INFO + MAP */}
          <Col lg={5}>
            <div style={leftCard}>
              {/* ADDRESS */}
              <div style={infoBox}>
                <div style={iconCircle}>
                  <FaMapMarkerAlt size={22} color="#00c4ff" />
                </div>
                <div>
                  <h5 style={infoTitle}>Address</h5>
                  <p style={infoText}>Savio Home, Kizhakkumpuram, Manakody, Thrissur</p>
                </div>
              </div>

              {/* PHONE */}
              <div style={{...infoBox, animationDelay: "0.2s"}}>
                <div style={iconCircle}>
                  <FaPhoneAlt size={20} color="#00c4ff" />
                </div>
                <div>
                  <h5 style={infoTitle}>Phone</h5>
                  <p style={infoText}>+91 89219 15287</p>
                </div>
              </div>

              {/* EMAIL */}
              <div style={{...infoBox, animationDelay: "0.4s"}}>
                <div style={iconCircle}>
                  <FaEnvelope size={20} color="#00c4ff" />
                </div>
                <div>
                  <h5 style={infoTitle}>Email</h5>
                  <p style={infoText}>saviohomemanakody@gmail.com</p>
                </div>
              </div>

              {/* DIRECT WHATSAPP BUTTON */}
              <div style={{...infoBox, animationDelay: "0.6s"}}>
                <div style={iconCircle}>
                  <FaWhatsapp size={22} color="#25D366" />
                </div>
                <div>
                  <h5 style={infoTitle}>Direct WhatsApp</h5>
                  <p style={infoText}>Message us directly on WhatsApp</p>
                  <Button 
                    style={whatsappButtonStyle}
                    onClick={() => window.open(`https://wa.me/918921915287`, '_blank')}
                  >
                    <FaWhatsapp style={{marginRight: "8px"}} />
                    Open WhatsApp
                  </Button>
                </div>
              </div>

              {/* MAP */}
              <div style={{...mapWrapper, animationDelay: "0.8s"}}>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.053471163819!2d76.17025817401351!3d10.496451164297618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7edf5265e9067%3A0x157110c7bed3d86d!2sSavio%20Home%20Manakody!5e0!3m2!1sen!2sin!4v1764043002716!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Col>

          {/* RIGHT FORM */}
          <Col lg={7}>
            <div style={formCard}>
            <div style={formHeader}>
    <h4 style={formTitle}>Contact Us</h4>
    <p style={formSubtitle}>
      Fill the form below and we will get back to you shortly.
    </p>
  </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label style={labelStyle}>Your Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label style={labelStyle}>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="your@email.com"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label style={labelStyle}>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="+91 89219 15287"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label style={labelStyle}>Your Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Tell us how you'd like to help or any questions you have..."
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{...inputStyle, resize: "none"}}
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  style={submitBtn}
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Preparing WhatsApp...
                    </>
                  ) : (
                    <>
                      Submit
                    </>
                  )}
                </Button>

          <div style={whatsappNote}>
  <FaWhatsapp size={16} color="#00c9d8" />
  <span>We will contact you back soon</span>
</div>

              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-5px); 
          }
        }

        @keyframes pulse {
          0% { 
            box-shadow: 0 0 0 0 rgba(0, 196, 255, 0.4); 
          }
          70% { 
            boxShadow: 0 0 0 10px rgba(0, 196, 255, 0); 
          }
          100% { 
            boxShadow: 0 0 0 0 rgba(0, 196, 255, 0); 
          }
        }

        @keyframes slideInFromLeft {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slideInFromRight {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes spin {
          0% { 
            transform: rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg); 
          }
        }

        @keyframes whatsappPulse {
          0% { 
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); 
          }
          70% { 
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); 
          }
          100% { 
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); 
          }
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #ffffff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
          display: inline-block;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .icon-hover:hover {
          animation: float 2s ease-in-out infinite;
        }

        .input-focus:focus {
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  );
}

/* ===================== STYLES ===================== */

const headerStyle = {
  textAlign: "center", 
  padding: "80px 20px",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  position: "relative",
  overflow: "hidden"
};

const headerContent = {
  position: "relative",
  zIndex: 2
};

const headerTitle = {
  fontSize: "clamp(2.2rem, 5vw, 3rem)",
  fontWeight: "800",
  marginBottom: "15px",
  color: "#000000",
  animation: "fadeInUp 0.8s ease-out"
};

const headerSubtitle = {
  fontSize: "1.15rem",
  color: "#333333",
  maxWidth: "650px",
  margin: "0 auto",
  lineHeight: "1.6",
  animation: "fadeInUp 0.8s ease-out 0.2s both"
};

const containerStyle = {
  marginTop: "40px", 
  marginBottom: "70px"
};

const leftCard = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  animation: "slideInFromLeft 0.8s ease-out"
};

const infoBox = {
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "30px",
  animation: "fadeInUp 0.7s ease",
  animationFillMode: "both"
};

const iconCircle = {
  width: "60px",
  height: "60px",
  background: "#e6faff",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "18px",
  boxShadow: "0 8px 20px rgba(0, 196, 255, 0.25)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  flexShrink: 0
};

const infoTitle = {
  fontSize: "1.2rem",
  fontWeight: "700",
  marginBottom: "5px",
  color: "#000000",
  letterSpacing: "-0.2px"
};

const infoText = {
  margin: 0,
  color: "#333333",
  fontSize: "0.95rem",
  fontWeight: "500",
  lineHeight: "1.4"
};

const formCard = {
  background: "white",
  padding: "35px",
  borderRadius: "15px",
  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
  animation: "slideInFromRight 0.8s ease-out",
  height: "100%"
};

const formHeader = {
  textAlign: "center",
  marginBottom: "30px",
  paddingBottom: "20px",
  borderBottom: "2px solid #f0f0f0"
};

const formTitle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#000000",
  margin: "15px 0 8px 0"
};

const formSubtitle = {
  color: "#666666",
  fontSize: "0.95rem",
  margin: 0,
  lineHeight: "1.5"
};

const mapWrapper = {
  marginTop: "20px",
  width: "100%",
  height: "280px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  animation: "fadeInUp 0.7s ease",
  animationFillMode: "both"
};

const labelStyle = {
  color: "#000000",
  fontWeight: "600",
  marginBottom: "8px",
  fontSize: "1rem",
  letterSpacing: "-0.1px"
};

const inputStyle = {
  border: "2px solid #eef2f7",
  borderRadius: "10px",
  padding: "14px 16px",
  fontSize: "1rem",
  color: "#000000",
  backgroundColor: "#ffffff",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
};

const submitBtn = {
  background: "linear-gradient(135deg, #00e5ff 0%, #00c9d8 40%, #00a8c4 100%)",
  border: "none",
  padding: "16px 30px",
  borderRadius: "12px",
  fontWeight: "600",
  width: "100%",
  fontSize: "1.1rem",
  color: "#00363d",
  boxShadow: "0 8px 28px rgba(0, 234, 255, 0.45)",
  transition: "all 0.35s ease",
  position: "relative",
  overflow: "hidden",
  marginBottom: "15px",
  cursor: "pointer",
};



const whatsappButtonStyle = {
  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
  border: "none",
  padding: "8px 16px",
  borderRadius: "8px",
  fontWeight: "600",
  fontSize: "0.9rem",
  color: "#ffffff",
  boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
  transition: "all 0.3s ease",
  marginTop: "8px"
};

const whatsappNote = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontSize: "0.85rem",
  color: "#666666",
  textAlign: "center",
  padding: "10px",
  background: "#f8fff9",
  borderRadius: "8px",
  border: "1px solid #e0f7e9"
};