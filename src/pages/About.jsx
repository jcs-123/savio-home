import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img09 from "../assets/IMG-20251127-WA0004.jpg";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* ABOUT SECTION */}
      <section 
        ref={sectionRef}
        style={{ 
          background: "black", 
          color: "white", 
          padding: "80px 0",
          overflow: "hidden"
        }}
      >
        <Container>
          {/* HEADING WITH FADE IN ANIMATION */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
                fontWeight: "800",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Welcome to <span style={{ color: "#00eaff" }}>Savio Home</span>
            </h1>

            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                opacity: 0.85,
                marginBottom: "50px",
                letterSpacing: "0.5px",
              }}
            >
              Nurturing children with love, dignity and hope since 1975.
            </p>
          </div>

          <Row className="align-items-center">
            {/* IMAGE - SLIDE FROM LEFT */}
            <Col lg={6} className="mb-4">
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-100px)",
                  transition: "all 0.8s ease 0.4s",
                }}
              >
                <img
                  src={img09}
                  alt="Children at Savio Home"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                    height: "360px",
                    objectFit: "cover",
                    boxShadow: "0px 10px 25px rgba(0, 234, 255, 0.25)",
                    transition: "0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.03)";
                    e.target.style.boxShadow = "0px 15px 35px rgba(0, 234, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0px 10px 25px rgba(0, 234, 255, 0.25)";
                  }}
                />
              </div>
            </Col>

            {/* TEXT CONTENT - SLIDE FROM RIGHT */}
            <Col lg={6}>
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(100px)",
                  transition: "all 0.8s ease 0.6s",
                }}
              >
                <p style={para}>
                  Savio Home Orphanage is dedicated to nurturing children who embody the joyful
                  and courageous spirit of <b>St. Dominic Savio</b>.
                </p>

                <p style={para}>
                  Established on <b>January 8, 1975</b> under the <b>Archdiocese of Thrissur</b>,
                  Savio Home has proudly served the community for nearly <b>50 years</b>, touching
                  the lives of thousands of children.
                </p>

                {!expanded && (
                  <Button 
                    style={buttonStyle} 
                    onClick={() => setExpanded(true)}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#00eaff";
                      e.target.style.color = "black";
                      e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#00eaff";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Know More
                  </Button>
                )}

                {/* EXPANDED SECTION */}
                {expanded && (
                  <div style={{ 
                    marginTop: "20px", 
                    animation: "fadeInUp 0.6s ease",
                    opacity: expanded ? 1 : 0,
                    transform: expanded ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.5s ease"
                  }}>
                    <p style={para}>
                      Before 2016, the home supported over <b>150 boys annually</b>. After
                      implementation of the Juvenile Justice Act, the <b>Child Welfare Committee (CWC)</b>
                      became the authority for assigning children.
                    </p>

                    <p style={para}>
                      Today, Savio Home houses <b>40 boys between ages 5 and 12</b>, offering them
                      a safe, caring and structured environment.
                    </p>

                    <div style={highlightContainer}>
                      <p style={highlight}>
                        Our mission is the all-round development of every child — nurturing values,
                        confidence, discipline and responsibility.
                      </p>
                    </div>

                    <h4 style={opportunitiesTitle}>
                      Opportunities for Growth
                    </h4>

                    <ul style={list}>
                      <li style={listItem}>
                        <b>Physical Well-being:</b> Good shelter, nutritious food, sports, and
                        recreational facilities.
                      </li>
                      <li style={listItem}>
                        <b>Education & Skills:</b> Quality schooling, computer lab, music &
                        drawing classes, life-skills development.
                      </li>
                      <li style={listItem}>
                        <b>Holistic Development:</b> Emotional, spiritual and physical support,
                        Karate, Yoga, leadership and social engagement.
                      </li>
                    </ul>

                    <Button
                      style={{ ...buttonStyle, marginTop: "15px" }}
                      onClick={() => setExpanded(false)}
                      onMouseEnter={(e) => {
                        e.target.style.background = "#00eaff";
                        e.target.style.color = "black";
                        e.target.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "#00eaff";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      Show Less
                    </Button>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CSS KEYFRAMES */}
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .image-container, .content-container {
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
}

/* === ENHANCED STYLES === */
const para = {
  fontSize: "1.08rem",
  lineHeight: 1.65,
  opacity: 0.92,
  marginBottom: "18px",
  transition: "all 0.3s ease",
};

const highlightContainer = {
  background: "linear-gradient(135deg, rgba(0,234,255,0.1) 0%, rgba(0,164,187,0.1) 100%)",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid rgba(0,234,255,0.2)",
  margin: "20px 0",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
};

const highlight = {
  fontSize: "1.15rem",
  lineHeight: 1.6,
  color: "#00eaff",
  fontWeight: 600,
  margin: 0,
  textAlign: "center",
};

const opportunitiesTitle = {
  color: "#00eaff",
  marginTop: "25px",
  fontWeight: "700",
  fontSize: "1.3rem",
  transition: "all 0.3s ease",
};

const list = {
  color: "#ddd",
  lineHeight: 1.7,
  fontSize: "1.05rem",
  marginLeft: "15px",
  marginTop: "10px",
  transition: "all 0.3s ease",
};

const listItem = {
  marginBottom: "10px",
  transition: "all 0.3s ease",
  opacity: 1,
  transform: "translateX(0)",
};

const buttonStyle = {
  background: "transparent",
  border: "2px solid #00eaff",
  color: "#00eaff",
  padding: "12px 32px",
  borderRadius: "40px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  boxShadow: "0 5px 15px rgba(0,234,255,0.3)",
  fontSize: "1rem",
  cursor: "pointer",
};