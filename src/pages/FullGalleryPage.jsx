import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../assets/IMG_20251011_171729983.jpg";
import img2 from "../assets/IMG_20251124_065547407.jpg";
import img3 from "../assets/IMG_20251124_070609327.jpg";
import img4 from "../assets/IMG_20251124_073052114.jpg";
import img5 from "../assets/IMG_20251124_073156672.jpg";
import img6 from "../assets/IMG_20251124_073753440.jpg";
import img7 from "../assets/IMG_20251125_064330488.jpg";
import img8 from "../assets/IMG_20251125_064824414.jpg";
import img9 from "../assets/IMG_20251125_065414599.jpg";
import img10 from "../assets/IMG_20251125_070803095.jpg";
import img11 from "../assets/IMG_20251125_071309893.jpg";
import img12 from "../assets/IMG_20251125_072356888.jpg";
import img13 from "../assets/IMG_20251125_073218865.jpg";
import img14 from "../assets/IMG_20251125_073242524.jpg";
import img15 from "../assets/IMG_20251125_073404213.jpg";

import img16 from "../assets/IMG_20251125_073745669.jpg";
import img17 from "../assets/IMG-20251127-WA0006.jpg";
import img18 from "../assets/IMG_20251124_064926554.jpg";
import img19 from "../assets/IMG_20251124_065032330.jpg";
import img20 from "../assets/IMG_20251124_065638992.jpg";
import img21 from "../assets/IMG_20251124_065906800.jpg";
import img22 from "../assets/IMG_20251124_065923336.jpg";
import img23 from "../assets/IMG_20251124_065947952.jpg";
import img24 from "../assets/IMG_20251124_070758113.jpg";
import img25 from "../assets/IMG_20251124_070822200.jpg";
import img26 from "../assets/IMG_20251124_070906850.jpg";
import img27 from "../assets/IMG_20251124_073533519.jpg";
import img28 from "../assets/IMG_20251124_073800713.jpg";
import img29 from "../assets/IMG_20251124_074138620.jpg";
import img30 from "../assets/IMG_20251124_165845039.jpg";
import img31 from "../assets/IMG_20251124_165953424.jpg";

import img32 from "../assets/IMG_20251125_064416239.jpg";
import img33 from "../assets/IMG_20251125_064729649.jpg";
import img34 from "../assets/IMG_20251125_065111089.jpg";
import img35 from "../assets/IMG_20251125_065312950.jpg";
import img36 from "../assets/IMG_20251125_065556117.jpg";
import img37 from "../assets/IMG_20251125_070149626.jpg";
import img38 from "../assets/IMG_20251125_070503527.jpg";
import img39 from "../assets/IMG_20251125_071022876.jpg";
import img40 from "../assets/IMG_20251125_071227109.jpg";
import img41 from "../assets/IMG_20251125_071722675.jpg";
import img42 from "../assets/IMG_20251125_072208934.jpg";
import img43 from "../assets/IMG_20251125_072645341.jpg";
import img44 from "../assets/IMG_20251125_072645872.jpg";
import img45 from "../assets/IMG_20251125_073333899.jpg";
import img47 from "../assets/IMG-20251127-WA0004.jpg";
import img48 from "../assets/IMG-20251127-WA0005.jpg";
import img49 from "../assets/IMG-20251127-WA0007.jpg";

export default function FullGalleryPage() {

 const images = [
  img1, img2,
   img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35,
  img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45,
  img47, img48, img49,
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

  // Function to handle video button click
  const handleViewVideos = () => {
    // Replace with your actual Google Drive link
    window.open("https://drive.google.com/drive/folders/1TRnArh38lEwEeyLEJTKo-_dSiZLzoa-N", "_blank");
  };

  return (
    <>
      {/* TOP RIGHT BUTTONS */}
      <div style={{ 
        width: "100%", 
        padding: "20px", 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px"
      }}>
        {/* VIEW VIDEOS BUTTON - LEFT SIDE */}
        <Button
          onClick={handleViewVideos}
          style={{
            background: "linear-gradient(45deg, #FF0080, #FF8C00)",
            color: "white",
            border: "none",
            padding: "10px 30px",
            borderRadius: "40px",
            fontWeight: 600,
            fontSize: "0.95rem",
            boxShadow: "0 4px 15px rgba(255, 0, 128, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(255, 0, 128, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 15px rgba(255, 0, 128, 0.3)";
          }}
        >
          🎬 View Videos
        </Button>

        {/* SHOW LESS BUTTON - RIGHT SIDE */}
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
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#00eaff";
              e.target.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "black";
              e.target.style.color = "#00eaff";
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
          div[style*="justify-content: space-between"] {
            justify-content: center !important;
            text-align: center;
          }
        }
        @media (max-width: 576px) {
          img { height: 180px !important; }
          div[style*="justify-content: space-between"] {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}