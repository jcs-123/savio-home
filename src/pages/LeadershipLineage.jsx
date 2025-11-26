import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import l1 from "../assets/FrAntonyKollannur.jpg"
import l2 from "../assets/FrDavisPanamkulam.jpg"
import l3 from "../assets/Fr.SaimonThermadom.jpg"
import l4 from "../assets/FrGeoKadavi.jpg"
import l5 from "../assets/FrIgnatiousChalissery.jpg"
import l6 from "../assets/FrJohnsonOlakkengil.jpg"
import l7 from "../assets/FrJollyChiramel.jpg"
import l8 from "../assets/FrJustinThadathil.jpg"
import l9 from "../assets/FrNysonAlenthanath.jpg"
import l10 from "../assets/FrPaulVattakuzhy.jpg"
import l11 from "../assets/FrRaphyThattil.jpg"
import l12 from "../assets/FrSijoMuringathery.jpg"
import l13 from "../assets/FrVargheseKanjirathingal.jpg"
import l14 from "../assets/Fr.ChackoParayil.jpg"


export default function LeadershipLineage() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const cardRefs = useRef([]);

  const directors = [
    {
      era: "The Foundation",
      name: "Rev. Fr. Ignatius Chalissery",
      period: "1975 – 1978",
      details: "The first Director who established the Home.",
      delay: 0.1,
      photo: l5 // Replace with actual image path
    },
    {
      era: "The Expansion",
      name: "Rev. Fr. Chacko Parayil",
      period: "1978 – 1995",
      details: "Expanded the dining hall and overall infrastructure.",
      delay: 0.2,
      photo: l14
    },
    {
      era: "The Transition",
      name: "Rev. Fr. Simon Thermadom",
      period: "1996 – 1998",
      details: "Provided leadership between long tenures.",
      delay: 0.3,
      photo: l3
    },
    {
      era: "The Jubilee",
      name: "Rev. Fr. Davis Panakulam",
      period: "1999 – 2001",
      details: "Led the Home during its Silver Jubilee celebration.",
      delay: 0.4,
      photo: l2
    },
    {
      era: "The New Building",
      name: "Rev. Fr. Jolly Chiramel",
      period: "2002 – 2008",
      details: "Oversaw the construction & blessing of the children's building.",
      delay: 0.5,
      photo: l7
    },
    {
      era: "The Shifting Tides",
      name: "Rev. Fr. Varghese Knajirathingal",
      period: "2008 – 2011",
      details: "Succeeded Fr. Jolly during transition.",
      delay: 0.6,
      photo: l13
    },
    {
      era: "The Shifting Tides",
      name: "Rev. Fr. Johnson Olakengil",
      period: "2011 – 2013",
      details: "Two-year leadership period before next succession.",
      delay: 0.7,
      photo: l6
    },
    {
      era: "The Shifting Tides",
      name: "Rev. Fr. Raphy Thattil",
      period: "Feb 2013",
      details: "Served briefly before next appointment.",
      delay: 0.8,
      photo: l11
    },
    {
      era: "The Shifting Tides",
      name: "Rev. Fr. Justin Thadathil",
      period: "2013 – 2016",
      details: "Director until early 2016.",
      delay: 0.9,
      photo: l8
    },
    {
      era: "Loss & Return",
      name: "Rev. Fr. Paul Vattakuzhy",
      period: "Feb – Jun 2016",
      details: "His tenure ended with his passing in June 2016.",
      delay: 1.0,
      photo: l10
    },
    {
      era: "Loss & Return",
      name: "Rev. Fr. Geo Kadavi (1st Term)",
      period: "2016",
      details: "Took charge following Fr. Paul's demise.",
      delay: 1.1,
      photo: l4
    },
    {
      era: "Loss & Return",
      name: "Rev. Fr. Nyson Alenthanth",
      period: "2016 – 2017",
      details: "Served brief term as Director.",
      delay: 1.2,
      photo: l9
    },
    {
      era: "Loss & Return",
      name: "Rev. Fr. Geo Kadavi (2nd Term)",
      period: "2017 – 2019",
      details: "Returned; oversaw land registration for Parish Church.",
      delay: 1.3,
      photo: l4
    },
    {
      era: "The Cardinal's Visit",
      name: "Rev. Fr. Antony Kollannur",
      period: "2019 – 2025",
      details: "Director during Cardinal Alencherry's visit; renovated the chapel & built children's park.",
      delay: 1.4,
      photo: l1
    },
    {
      era: "The Present",
      name: "Rev. Fr. Sijo Muringathery",
      period: "2025 – Present",
      details: "Current Director In-Charge.",
      delay: 1.5,
      photo: l12,
      current: true
    },
  ];

  // Sort by year (most recent first)
  const sortedDirectors = [...directors].sort((a, b) => {
    const getStartYear = (period) => parseInt(period.split('–')[0].trim());
    return getStartYear(b.period) - getStartYear(a.period);
  });

  const displayedDirectors = showAll ? sortedDirectors : sortedDirectors.slice(0, 3);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [showAll]);

  return (
    <>
      {/* HEADER */}
      <section
        style={{
          background: "linear-gradient(135deg, #000000 0%, #001a1f 100%)",
          color: "white",
          padding: "100px 0 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            animation: "fadeInUp 1s ease-out 0.2s both"
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "800",
              marginBottom: "15px",
              background: "linear-gradient(135deg, #ffffff 0%, #00eaff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Lineage of Leadership
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              opacity: 0.85,
              fontWeight: "300",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              animation: "fadeInUp 1s ease-out 0.4s both"
            }}
          >
            Directors who shaped the legacy of Savio Home through decades of dedicated service
          </p>

          <div
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, #00eaff, #00a4bb)",
              margin: "25px auto 0",
              borderRadius: "4px",
              animation: "slideInLeft 1s ease-out 0.6s both"
            }}
          ></div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ 
        background: "linear-gradient(180deg, #f8feff 0%, #ffffff 100%)", 
        padding: "80px 0" 
      }}>
        <Container>
          <Row>
            {displayedDirectors.map((d, i) => (
              <Col lg={4} md={6} sm={12} key={i} className="mb-4">
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="director-card"
                  style={{
                    background: d.current 
                      ? "linear-gradient(135deg, #ffffff 0%, #f0fdff 100%)" 
                      : "white",
                    borderRadius: "20px",
                    padding: "30px 25px",
                    borderLeft: d.current ? "6px solid #00eaff" : "6px solid #00eaff",
                    boxShadow: d.current 
                      ? "0 8px 25px rgba(0, 140, 255, 0.2)" 
                      : "0 8px 25px rgba(0,0,0,0.08)",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    opacity: visibleCards.includes(i) ? 1 : 0,
                    transform: visibleCards.includes(i) ? "translateY(0)" : "translateY(40px)",
                    animation: visibleCards.includes(i) ? `cardSlideIn 0.6s ease-out ${d.delay}s both` : "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow = d.current 
                      ? "0 20px 40px rgba(0, 140, 255, 0.25)" 
                      : "0 20px 40px rgba(0, 234, 255, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = visibleCards.includes(i) ? "translateY(0) scale(1)" : "translateY(40px) scale(1)";
                    e.currentTarget.style.boxShadow = d.current 
                      ? "0 8px 25px rgba(0, 162, 255, 0.2)" 
                      : "0 8px 25px rgba(0,0,0,0.08)";
                  }}
                >
                  {/* Current Director Badge */}
                  {d.current && (
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        background: "linear-gradient(135deg, #00eaff, #00eaff)",
                        color: "#000",
                        padding: "4px 12px",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        boxShadow: "0 4px 12px rgba(0, 132, 255, 0.4)",
                        zIndex: 2
                      }}
                    >
                      CURRENT
                    </div>
                  )}

                  {/* Profile Photo - Round Design */}
                 <div
  style={{
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    background: d.current 
      ? "linear-gradient(135deg, #00eaff, #00c4cc)" 
      : "linear-gradient(135deg, #00eaff, #00a4bb)",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
  }}
>
  <img 
    src={d.photo}
    alt={d.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
      border: d.current ? "3px solid white" : "3px solid transparent",
    }}
  />
</div>


                  {/* Era Badge */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, rgba(0,234,255,0.1) 0%, rgba(0,164,187,0.1) 100%)",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      display: "inline-block",
                      marginBottom: "15px",
                      border: "1px solid rgba(0,234,255,0.2)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h6 style={{ 
                      color: "#00a4bb", 
                      margin: "0", 
                      fontWeight: "700",
                      fontSize: "0.85rem",
                      letterSpacing: "0.5px"
                    }}>
                      {d.era}
                    </h6>
                  </div>

                  {/* Director Name */}
                  <h3 style={{ 
                    fontSize: "1.4rem", 
                    fontWeight: "800",
                    color: d.current ? "#000" : "#001a1f",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                    textAlign: "center"
                  }}>
                    {d.name}
                  </h3>

                  {/* Period */}
                  <div
                    style={{
                      background: d.current 
                        ? "linear-gradient(135deg, #00eaff, #00eaff)" 
                        : "linear-gradient(135deg, #00eaff, #00a4bb)",
                      color: d.current ? "#000" : "white",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      display: "inline-block",
                      marginBottom: "15px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      boxShadow: d.current 
                        ? "0 4px 15px rgba(0, 234, 255, 0.3)" 
                        : "0 4px 15px rgba(0, 234, 255, 0.3)",
                      margin: "0 auto",
                      display: "block",
                      textAlign: "center",
                      width: "fit-content"
                    }}
                  >
                    {d.period}
                  </div>

                  {/* Details */}
                  <p style={{ 
                    color: d.current ? "#333" : "#555", 
                    lineHeight: "1.6", 
                    fontSize: "1rem",
                    margin: "0",
                    opacity: "0.9",
                    textAlign: "center"
                  }}>
                    {d.details}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      background: d.current 
                        ? "linear-gradient(135deg, rgba(255,215,0,0.03) 0%, transparent 50%)" 
                        : "linear-gradient(135deg, rgba(0,234,255,0.03) 0%, transparent 50%)",
                      opacity: "0",
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}
                    className="hover-overlay"
                  ></div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Show More/Less Button */}
          {!showAll && directors.length > 3 && (
            <Row>
              <Col className="text-center mt-4">
                <Button
                  onClick={() => setShowAll(true)}
                  style={{
                    background: "linear-gradient(135deg, #00eaff, #00a4bb)",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    boxShadow: "0 8px 20px rgba(0, 234, 255, 0.3)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 12px 25px rgba(0, 234, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 8px 20px rgba(0, 234, 255, 0.3)";
                  }}
                >
                  View All Directors ({directors.length})
                </Button>
              </Col>
            </Row>
          )}

          {showAll && (
            <Row>
              <Col className="text-center mt-4">
                <Button
                  onClick={() => setShowAll(false)}
                  variant="outline-primary"
                  style={{
                    border: "2px solid #00eaff",
                    color: "#00a4bb",
                    background: "transparent",
                    padding: "12px 30px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#00eaff";
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#00a4bb";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Show Less
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* ANIMATIONS */}
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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          60% {
            transform: translateY(-5px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .director-card:hover .hover-overlay {
          opacity: 1;
        }

        /* Staggered animation delays for better visual flow */
        .director-card:nth-child(odd) {
          animation-delay: calc(var(--delay) + 0.05s) !important;
        }

        .director-card:nth-child(even) {
          animation-delay: calc(var(--delay) + 0.1s) !important;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .director-card {
            padding: 25px 20px !important;
          }
          
          h3 {
            font-size: 1.25rem !important;
          }
        }

        @media (max-width: 768px) {
          .director-card {
            padding: 20px !important;
            margin-bottom: 20px;
          }
          
          section {
            padding: 60px 0 !important;
          }
        }

        @media (max-width: 576px) {
          .director-card {
            padding: 18px !important;
          }
          
          h1 {
            font-size: 2.2rem !important;
          }
          
          p.subtitle {
            font-size: 1.1rem !important;
          }

          /* Profile photo smaller on mobile */
          .director-card > div:first-child {
            width: 80px !important;
            height: 80px !important;
            font-size: 2rem !important;
          }
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Performance optimizations */
        .director-card {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}