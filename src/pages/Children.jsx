import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Children() {
  /* ================= HOVER EFFECT HANDLERS ================= */
  const liftUp = (e) => (e.currentTarget.style.transform = "translateY(-10px)");
  const liftDown = (e) => (e.currentTarget.style.transform = "translateY(0)");

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          padding: "140px 20px 120px",
          background: "black",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div className="children-hero">
            <h1
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4rem)",
                fontWeight: "900",
                color: "#ffffff",
                letterSpacing: "1px",
                marginBottom: "18px",
                textTransform: "uppercase",
              }}
              className="hero-title"
            >
              Our <span style={{ color: "#00eaff" }}>Children</span>
            </h1>

            {/* Cyan underline */}
            <div
              style={{
                width: "110px",
                height: "4px",
                background: "#00eaff",
                margin: "0 auto 25px",
                borderRadius: "5px",
              }}
              className="hero-underline"
            ></div>

            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                maxWidth: "750px",
                margin: "0 auto",
                color: "#d9d9d9",
                lineHeight: "1.7",
                opacity: 0.85,
              }}
              className="hero-subtext"
            >
              Nurturing young minds with love, education, and opportunities to build a brighter and meaningful tomorrow.
            </p>
          </div>
        </Container>

        {/* Background glow effect */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(0,234,255,0.25), transparent 70%)",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        ></div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section style={{ background: "black", padding: "80px 0", color: "white" }}>
        <Container>
          <h2 style={sectionTitle}>Our Support Services</h2>

          <p style={sectionSubtitle}>
            We provide comprehensive support systems that empower children to thrive academically, emotionally,
            and socially in a nurturing environment.
          </p>

          <Row>
            {services.map((s, i) => (
              <Col lg={4} md={6} className="mb-4" key={i}>
                <div
                  style={serviceCard}
                  className={`animate-up animate-delay-${i}`}
                  onMouseEnter={liftUp}
                  onMouseLeave={liftDown}
                >
                  <div style={serviceIcon}>{s.icon}</div>
                  <h5 style={cardHeading}>{s.title}</h5>
                  <p style={cardText}>{s.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section style={{ background: "#111", padding: "80px 0" }}>
        <Container>
          <h2 style={sectionTitle}>Student Life Gallery</h2>

          <p style={{ ...sectionSubtitle, color: "#ccc" }}>
            Capturing precious moments of learning, growth, and joyful experiences in our caring community.
          </p>

          <Row>
            {gallery.map((g, i) => (
              <Col lg={4} md={6} className="mb-5" key={i}>
                <Card style={galleryCard} className={`animate-up animate-delay-${i}`}>
                  <img src={g.img} alt={g.caption} style={galleryImage} />
                  <Card.Body>
                    <h5 style={galleryTitle}>{g.caption}</h5>
                    <p style={galleryCaption}>{g.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>



      {/* ================= ANIMATION CSS ================= */}
      <style>{animationCSS}</style>
    </>
  );
}

/* ===================== STYLES ===================== */

const sectionTitle = {
  fontSize: "2.4rem",
  fontWeight: 800,
  color: "#00eaff",
  textAlign: "center",
  marginBottom: "20px",
};

const sectionSubtitle = {
  color: "#ccc",
  textAlign: "center",
  maxWidth: "750px",
  margin: "0 auto 50px",
  fontSize: "1.15rem",
  opacity: 0.8,
};

const serviceCard = {
  background: "#0d0d0d",
  padding: "30px",
  borderRadius: "16px",
  textAlign: "center",
  transition: "0.4s",
  boxShadow: "0 12px 25px rgba(0, 234, 255, 0.15)",
};

const serviceIcon = {
  fontSize: "45px",
  marginBottom: "15px",
};

const cardHeading = {
  fontWeight: 700,
  fontSize: "1.2rem",
  marginBottom: "10px",
};

const cardText = {
  fontSize: "0.95rem",
  opacity: 0.85,
  lineHeight: 1.5,
};

const galleryCard = {
  background: "#0a0a0a",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "0.4s",
};

const galleryImage = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
};

const galleryTitle = {
  color: "#00eaff",
  fontWeight: 700,
  marginBottom: "5px",
};

const galleryCaption = {
  color: "#ccc",
  fontSize: "0.95rem",
};

const achievementCard = {
  background: "#0d0d0d",
  padding: "25px",
  borderRadius: "16px",
  textAlign: "center",
  border: "1px solid #00eaff40",
  transition: "0.4s",
};

const achievementIcon = {
  fontSize: "40px",
  marginBottom: "10px",
};

const achTitle = {
  color: "#00eaff",
  fontWeight: 700,
  marginBottom: "15px",
};

const achievementList = {
  paddingLeft: "20px",
  color: "#ccc",
};

const achievementItem = {
  marginBottom: "6px",
  fontSize: "0.9rem",
};

/* ===================== ANIMATIONS ===================== */

const animationCSS = `
  @keyframes fadeInUp {
    from { opacity:0; transform: translateY(30px); }
    to { opacity:1; transform: translateY(0); }
  }

  .animate-up {
    animation: fadeInUp 0.8s ease forwards;
    opacity: 0;
  }
  .animate-delay-1 { animation-delay: 0.2s; }
  .animate-delay-2 { animation-delay: 0.3s; }
  .animate-delay-3 { animation-delay: 0.4s; }
  .animate-delay-4 { animation-delay: 0.5s; }
  .animate-delay-5 { animation-delay: 0.6s; }
`;

/* ===================== DATA ===================== */

const services = [
  { icon: "📚", title: "Academic Excellence", text: "Quality education with tutoring & school support." },
  { icon: "🏥", title: "Health & Wellness", text: "Healthcare, nutrition & medical checkups." },
  { icon: "❤️", title: "Emotional Care", text: "Counseling & emotional support programs." },
  { icon: "🎨", title: "Creative Learning", text: "Art, music & creative workshops." },
  { icon: "⚽", title: "Sports Development", text: "Fitness, discipline & teamwork." },
  { icon: "🌟", title: "Life Skills", text: "Practical skills for confident living." },
];

const gallery = [
  {
    img: "https://i.pinimg.com/736x/74/69/0a/74690a080956091e0d40c0726a096555.jpg",
    caption: "Classroom Learning",
    description: "Interactive lessons for deeper understanding.",
  },
  {
    img: "https://i.pinimg.com/736x/a5/da/19/a5da19fc17989de53fd036486c8e4a75.jpg",
    caption: "Play Time",
    description: "Joyful outdoor recreation and play.",
  },
  {
    img: "https://i.pinimg.com/736x/c4/20/ef/c420efd1b8c50a2215eba9c2459a80c5.jpg",
    caption: "Art & Creativity",
    description: "Inspiring imagination & artistic expression.",
  },
  {
    img: "https://i.pinimg.com/1200x/71/cf/11/71cf114ca1696fdcbafe7144acff911b.jpg",
    caption: "Sports Activities",
    description: "Building teamwork & confidence.",
  },
  {
    img: "https://i.pinimg.com/736x/f5/92/4f/f5924f67fdee9c357c64d10bc7712ddd.jpg",
    caption: "Skill Workshops",
    description: "Learning practical life skills.",
  },
  {
    img: "https://i.pinimg.com/1200x/39/b4/93/39b49342e9a7a7608b9db119d7adf08e.jpg",
    caption: "Community Events",
    description: "Sharing joy through activities & events.",
  },
];

