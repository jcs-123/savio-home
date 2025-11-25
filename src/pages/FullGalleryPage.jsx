import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FullGalleryPage() {

  const images = [
    "https://i.pinimg.com/1200x/38/1a/c0/381ac0ba24c44b2a7298fdd1922ba898.jpg",
    "https://i.pinimg.com/736x/8d/6b/4f/8d6b4f321ef3eb04dfe9c1caad3bc6e1.jpg",
    "https://i.pinimg.com/736x/d5/4b/c8/d54bc8608426e7723c800f0941498fb6.jpg",
    "https://i.pinimg.com/736x/92/00/97/920097580b7b2357c5a146dcf1af39ee.jpg",
    "https://i.pinimg.com/736x/c4/0a/9a/c40a9aeb3fa1bb4e6c2a6e7e3d51b6c7.jpg",
    "https://i.pinimg.com/736x/7c/b8/2f/7cb82fffe6dbb41495e7e3d7fbc29680.jpg",
    "https://i.pinimg.com/736x/a7/57/3e/a7573e7d4b8da3aaa4d8f088b4effd76.jpg",
        "https://i.pinimg.com/736x/a7/57/3e/a7573e7d4b8da3aaa4d8f088b4effd76.jpg",
    "https://i.pinimg.com/736x/f4/1c/31/f41c31ab9773c145477228c57c881662.jpg",
    "https://i.pinimg.com/736x/41/76/4c/41764c2b9a93217cca91c7f360acaca7.jpg",
    "https://i.pinimg.com/736x/9b/16/a0/9b16a0b4c8bc552294161e9611598344.jpg",
    "https://i.pinimg.com/736x/6d/a2/37/6da237af20b99859cd31518c174e2ae3.jpg",
    "https://i.pinimg.com/1200x/90/bb/0a/90bb0a08c3f44d2601e53885b03980db.jpg",
    "https://i.pinimg.com/736x/12/a7/5a/12a75a60503ac7d06c1e038d13c75645.jpg",
    "https://i.pinimg.com/736x/a7/57/3e/a7573e7d4b8da3aaa4d8f088b4effd76.jpg"
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const cardRefs = useRef([]);

  // Fade animation for grid
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = `all 0.7s ease-out ${index * 0.10}s`;
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => ref && obs.observe(ref));
    return () => obs.disconnect();
  }, []);

  const showPrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      {/* TOP RIGHT SHOW LESS */}
      <div style={{ width: "100%", padding: "20px", textAlign: "right" }}>
        <Link to="/">
          <Button
            style={{
              background: "black",
              color: "#00eaff",
              border: "2px solid #00eaff",
              padding: "8px 28px",
              borderRadius: "40px",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Show Less
          </Button>
        </Link>
      </div>

      {/* FULL GALLERY GRID */}
      <Container style={{ padding: "20px 0 60px" }}>
        <Row className="g-4">
          {images.map((src, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => setSelectedIndex(index)}
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: "0.7s",
                }}
              >
                <img
                  src={src}
                  alt="gallery"
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* MODAL VIEWER */}
      <Modal
        show={selectedIndex !== null}
        onHide={() => setSelectedIndex(null)}
        centered
        size="lg"
      >
        <Modal.Body style={{ padding: 0, position: "relative" }}>
          <img
            src={images[selectedIndex]}
            alt="preview"
            style={{
              width: "100%",
              borderRadius: "8px",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />

          {/* PREVIOUS */}
          <Button
            onClick={showPrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              border: "none",
              width: "45px",
              height: "45px",
            }}
          >
            ‹
          </Button>

          {/* NEXT */}
          <Button
            onClick={showNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              border: "none",
              width: "45px",
              height: "45px",
            }}
          >
            ›
          </Button>
        </Modal.Body>
      </Modal>

      <style>{`
        @media (max-width: 768px) {
          img { height: 220px !important; }
        }
        @media (max-width: 576px) {
          img { height: 180px !important; }
          div[style*="text-align: right"] {
            text-align: center !important;
          }
        }
      `}</style>
    </>
  );
}
