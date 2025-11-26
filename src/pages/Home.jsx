import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";

// ---------------- SLIDER IMAGES ----------------
const slideImages = [
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&q=80&fit=crop&w=1600&q=80",
  "https://i.pinimg.com/736x/8e/31/20/8e31206604cc29706c580022890d09b3.jpg",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&q=80&fit=crop&w=1600&q=80",
];

// ---------------- SLIDE CONTENT ----------------
const slideContent = [
  {
    title: "Bringing Hope to Every Child's Future",
    subtitle: "Providing safe homes, quality education, and loving care for orphaned children",
    highlight: "Future",
    button1: "💝 Donate Now",
    button2: "👨‍👩‍👧‍👦 Sponsor a Child"
  },
  {
    title: "Education Changes Everything",
    subtitle: "Empowering children through quality education and skill development programs",
    highlight: "Education",
    button1: "🏫 Support Education",
    button2: "📚 Donate Books"
  },
  {
    title: "A Loving Home for Every Child",
    subtitle: "Creating family environments where children can heal, grow, and thrive",
    highlight: "Home",
    button1: "❤️ Become Volunteer",
    button2: "🏠 Fund a Home"
  }
];

// ---------------- PROFESSIONAL STYLES ----------------
const styles = {
  // Hero Section
  heroSection: {
    marginTop: "0",
    position: "relative",
  },

  // Slide Styles
  slide: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,106,128,0.4) 100%)",
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
    color: "white",
    padding: "40px 20px",
    width: "100%",
    animation: "fadeInUp 1.2s ease-out",
  },

  title: {
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: "1.5rem",
    textShadow: "0 4px 20px rgba(0,0,0,0.6)",
  },

  subtitle: {
    opacity: 0.95,
    marginBottom: "2.5rem",
    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
    lineHeight: 1.6,
  },

  btnRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },

  donateBtn: {
    backgroundColor: "#00c4cc",
    border: "3px solid #00c4cc",
    fontWeight: 700,
    borderRadius: "12px",
    padding: "14px 35px",
    minWidth: "180px",
    fontSize: "16px",
    boxShadow: "0 6px 20px rgba(0, 196, 204, 0.4)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  sponsorBtn: {
    backgroundColor: "white",
    border: "3px solid white",
    color: "black",
    fontWeight: 700,
    borderRadius: "12px",
    padding: "14px 35px",
    minWidth: "180px",
    fontSize: "16px",
    boxShadow: "0 6px 20px rgba(255, 255, 255, 0.3)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  // Stats Section
  statsSection: {
    backgroundColor: "#f8fdff",
    padding: "60px 0",
    borderTop: "3px solid #00eaff",
    borderBottom: "3px solid #00eaff",
  },

  statCard: {
    textAlign: "center",
    padding: "30px 20px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0 8px 30px rgba(0, 234, 255, 0.15)",
    border: "2px solid #e3f9ff",
    transition: "all 0.3s ease",
    height: "100%",
  },

  statNumber: {
    fontSize: "2.5rem",
    fontWeight: 800,
    color: "#00c4cc",
    marginBottom: "10px",
    background: "linear-gradient(135deg, #00c4cc, #00eaff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  statText: {
    fontSize: "1rem",
    color: "#333",
    fontWeight: 600,
  },

  // Impact Section
  impactSection: {
    padding: "80px 0",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },

  impactCard: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "30px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.2)",
    transition: "all 0.3s ease",
    height: "100%",
  },

  // CTA Section
  ctaSection: {
    padding: "80px 0",
    backgroundColor: "#1a1a1a",
    color: "white",
  },
};

// ---------------- PROFESSIONAL CSS ----------------
const professionalCSS = `
/* Global Reset for Mobile */
body {
  margin: 0;
  padding: 0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 196, 204, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(0, 196, 204, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 196, 204, 0); }
}

/* Button Hover Effects */
.donate-btn-hover:hover {
  background: white !important;
  color: #00c4cc !important;
  border-color: white !important;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 196, 204, 0.5) !important;
}

.sponsor-btn-hover:hover {
  background: #00c4cc !important;
  color: white !important;
  border-color: #00c4cc !important;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 196, 204, 0.5) !important;
}

/* Card Hover Effects */
.stat-card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 234, 255, 0.25) !important;
  border-color: #00eaff;
}

.impact-card-hover:hover {
  transform: translateY(-8px);
  background: rgba(255,255,255,0.15) !important;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3) !important;
}

/* Carousel Customization */
.carousel-indicators button {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  margin: 0 8px !important;
  background-color: #00c4cc !important;
  border: 2px solid white !important;
}

.carousel-control-prev,
.carousel-control-next {
  width: 60px !important;
  height: 60px !important;
  background: rgba(0, 196, 204, 0.8) !important;
  border-radius: 50% !important;
  top: 50% !important;
  transform: translateY(-50%);
  margin: 0 20px;
  backdrop-filter: blur(10px);
}

.carousel-control-prev { left: 20px !important; }
.carousel-control-next { right: 20px !important; }

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 25px !important;
  height: 25px !important;
}

/* Floating Animation */
.floating-element {
  animation: float 6s ease-in-out infinite;
}

/* Pulsing Effect */
.pulsing-element {
  animation: pulse 2s infinite;
}

/* Mobile-First Responsive Design */
@media (max-width: 768px) {
  #home {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  
  .carousel {
    margin-top: 0 !important;
  }
  
  .carousel-item {
    min-height: 100vh !important;
  }
  
  .carousel .slide {
    min-height: 100vh !important;
    padding-top: 0 !important;
  }
  
  #home-title { 
    font-size: 2rem !important; 
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  
  #home-subtitle { 
    font-size: 1rem !important; 
    margin-bottom: 2rem !important; 
  }
  
  .home-btn { 
    padding: 12px 25px !important; 
    font-size: 14px !important; 
    min-width: 140px !important; 
  }
  
  .carousel-control-prev, 
  .carousel-control-next { 
    display: none !important; 
  }
  
  .carousel-indicators {
    margin-bottom: 1rem !important;
  }
  
  /* Ensure content starts from top on mobile */
  .carousel .slide > div {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
}

@media (max-width: 576px) {
  #home-title { 
    font-size: 1.8rem !important; 
    margin-top: 0 !important;
  }
  
  #home-subtitle { 
    font-size: 0.9rem !important; 
  }
  
  .home-btn { 
    padding: 10px 20px !important; 
    font-size: 13px !important; 
    min-width: 130px !important; 
  }
  
  .btn-row { 
    gap: 0.8rem !important; 
  }
  
  .carousel-item {
    min-height: 100vh !important;
  }
}

@media (max-width: 420px) {
  #home-title { 
    font-size: 1.6rem !important; 
  }
  
  #home-subtitle { 
    font-size: 0.85rem !important; 
  }
  
  .home-btn { 
    padding: 8px 16px !important; 
    font-size: 12px !important; 
    min-width: 120px !important; 
  }
  
  .carousel-item {
    min-height: 100vh !important;
  }
}

/* Extra small devices */
@media (max-width: 360px) {
  .carousel-item {
    min-height: 100vh !important;
  }
  
  #home-title {
    font-size: 1.5rem !important;
  }
}

/* Fix for very small heights */
@media (max-height: 700px) {
  .carousel-item {
    min-height: 100vh !important;
    padding: 20px 0 !important;
  }
  
  .slide {
    align-items: flex-start !important;
    padding-top: 20px !important;
  }
}
`;

// Inject CSS
if (!document.getElementById("professional-home-css")) {
  const styleTag = document.createElement("style");
  styleTag.id = "professional-home-css";
  styleTag.innerHTML = professionalCSS;
  document.head.appendChild(styleTag);
}

// =====================================================
//                PROFESSIONAL COMPONENT
// =====================================================
export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const useCountUp = (end, duration = 2000) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setValue(Math.floor(percentage * end));

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [end, duration]);

    return value;
  };

  // 2️⃣ Now you can safely call the hook
  const childrenHelped = useCountUp(1300, 2000);
  const yearsService = useCountUp(50, 1800);
  const directorsServed = useCountUp(15, 1800);

  return (
    <>
      {/* HERO SLIDER SECTION */}
      <section id="home" style={styles.heroSection}>
        <Carousel 
          fade 
          controls 
          indicators 
          interval={5000} 
          activeIndex={index} 
          onSelect={handleSelect}
          pause={false}
        >
          {slideImages.map((img, index) => (
            <Carousel.Item key={index}>
              <div style={{ ...styles.slide, backgroundImage: `url(${img})` }}>
                <div style={styles.overlay}></div>

                <Container style={styles.content} className="text-center">
                  <Row className="justify-content-center">
                    <Col lg={10} xl={8}>
                      <h1 
                        id="home-title" 
                        style={{ ...styles.title, fontSize: "3.5rem" }}
                        className="floating-element"
                      >
                        {slideContent[index].title.split(slideContent[index].highlight)[0]}
                        <span style={{ 
                          color: "#00eaff",
                          textShadow: "0 0 30px rgba(0,234,255,0.7)"
                        }}>
                          {" "}{slideContent[index].highlight}
                        </span>
                      </h1>

                      <p
                        id="home-subtitle"
                        style={{ ...styles.subtitle, fontSize: "1.3rem" }}
                      >
                        {slideContent[index].subtitle}
                      </p>

                      <div style={styles.btnRow} className="btn-row">
                        <Button
                          className="home-btn donate-btn-hover pulsing-element"
                          style={styles.donateBtn}
                          size="lg"
                        >
                          {slideContent[index].button1}
                        </Button>

                        <Button
                          className="home-btn sponsor-btn-hover"
                          style={styles.sponsorBtn}
                          size="lg"
                        >
                          {slideContent[index].button2}
                        </Button>
                      </div>
{/* Quick Stats - Minimal */}
{/* Quick Stats - Animated Count-Up */}
<Row className="mt-5">

  <Col md={4} sm={6} className="mb-3">
    <div style={{ textAlign: "center" }}>
      <h3 style={{
        fontSize: "2.5rem",
        fontWeight: "800",
        color: "#00eaff",
        marginBottom: "8px",
        textShadow: "0 4px 10px rgba(0, 234, 255, 0.3)"
      }}>
        {childrenHelped}+ 
      </h3>
      <p style={{
        fontSize: "1rem",
        color: "white",
        fontWeight: "600",
        margin: "0",
        opacity: "0.9"
      }}>
        Children Helped
      </p>
    </div>
  </Col>

  <Col md={4} sm={6} className="mb-3">
    <div style={{ textAlign: "center" }}>
      <h3 style={{
        fontSize: "2.5rem",
        fontWeight: "800",
        color: "#00eaff",
        marginBottom: "8px",
        textShadow: "0 4px 10px rgba(0, 234, 255, 0.3)"
      }}>
        {yearsService}+ 
      </h3>
      <p style={{
        fontSize: "1rem",
        color: "white",
        fontWeight: "600",
        margin: "0",
        opacity: "0.9"
      }}>
        Years of Service
      </p>
    </div>
  </Col>

  <Col md={4} sm={6} className="mb-3">
    <div style={{ textAlign: "center" }}>
      <h3 style={{
        fontSize: "2.5rem",
        fontWeight: "800",
        color: "#00eaff",
        marginBottom: "8px",
        textShadow: "0 4px 10px rgba(0, 234, 255, 0.3)"
      }}>
        {directorsServed}+ 
      </h3>
      <p style={{
        fontSize: "1rem",
        color: "white",
        fontWeight: "600",
        margin: "0",
        opacity: "0.9"
      }}>
        Directors Served
      </p>
    </div>
  </Col>

</Row>

                    </Col>
                  </Row>
                </Container>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* IMPACT STATS SECTION */}
      <section style={styles.statsSection}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#00c4cc", marginBottom: "1rem" }}>
                Our Impact in Numbers
              </h2>
              <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
                Real numbers that show the difference we're making together
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div style={styles.statCard} className="stat-card-hover">
                <div style={styles.statNumber}>1,250+</div>
                <div style={styles.statText}>Meals Served Monthly</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div style={styles.statCard} className="stat-card-hover">
                <div style={styles.statNumber}>98%</div>
                <div style={styles.statText}>Education Success Rate</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div style={styles.statCard} className="stat-card-hover">
                <div style={styles.statNumber}>24/7</div>
                <div style={styles.statText}>Care & Support</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div style={styles.statCard} className="stat-card-hover">
                <div style={styles.statNumber}>15</div>
                <div style={styles.statText}>Communities Reached</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* DAILY LIFE SECTION */}
      <section style={{
        padding: "80px 0",
        backgroundColor: "#fffaf0",
        background: "linear-gradient(135deg, #fffaf0 0%, #f0f8ff 100%)"
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <h2 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#00c4cc", marginBottom: "1.5rem" }}>
                A Day at Savio Home,
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.7, marginBottom: "2rem" }}>
                Our children follow a structured daily routine that balances education, play, creativity, and rest - 
                creating a nurturing environment where they can thrive and grow.
              </p>
              
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: "#00eaff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    marginRight: "15px",
                    flexShrink: 0
                  }}>
                    1
                  </div>
                  <div>
                    <strong style={{ color: "#333" }}>Morning Routine</strong>
                    <div style={{ color: "#666" }}>Exercise, breakfast, and preparation for school</div>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: "#00eaff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    marginRight: "15px",
                    flexShrink: 0
                  }}>
                    2
                  </div>
                  <div>
                    <strong style={{ color: "#333" }}>Education Time</strong>
                    <div style={{ color: "#666" }}>School classes and after-school tutoring</div>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: "#00eaff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    marginRight: "15px",
                    flexShrink: 0
                  }}>
                    3
                  </div>
                  <div>
                    <strong style={{ color: "#333" }}>Creative Activities</strong>
                    <div style={{ color: "#666" }}>Art, music, sports, and skill development</div>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    background: "#00eaff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    marginRight: "15px",
                    flexShrink: 0
                  }}>
                    4
                  </div>
                  <div>
                    <strong style={{ color: "#333" }}>Family Time</strong>
                    <div style={{ color: "#666" }}>Evening meals, storytelling, and bonding activities</div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px"
              }}>
                <img 
                  src="https://i.pinimg.com/1200x/a5/78/79/a57879029195f32e7b493d8218ff362c.jpg" 
                  alt="Children studying" 
                  style={{ 
                    width: "100%", 
                    borderRadius: "10px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                />
                <img 
                  src="https://i.pinimg.com/736x/8d/6b/4f/8d6b4f321ef3eb04dfe9c1caad3bc6e1.jpg" 
                  alt="Children playing" 
                  style={{ 
                    width: "100%", 
                    borderRadius: "10px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                />
                <img 
                  src="https://i.pinimg.com/1200x/88/41/86/88418646ef28f7c937ececbb1ab26083.jpg" 
                  alt="Children eating" 
                  style={{ 
                    width: "100%", 
                    borderRadius: "10px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                />
                <img 
                  src="https://i.pinimg.com/1200x/c9/46/cc/c946ccfa78b91ef057b284889e5d628e.jpg" 
                  alt="Children activities" 
                  style={{ 
                    width: "100%", 
                    borderRadius: "10px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}