import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import img1 from "../assets/IMG_20251011_171729983.jpg";
import img11 from "../assets/IMG_20251125_071309893.jpg";
import img12 from "../assets/IMG_20251125_072356888.jpg";
import img20 from "../assets/IMG_20251124_065638992.jpg";
import img21 from "../assets/IMG_20251124_065906800.jpg";
import img23 from "../assets/IMG_20251124_065947952.jpg";
import img24 from "../assets/IMG_20251124_070758113.jpg";
import img25 from "../assets/IMG_20251124_070822200.jpg";
import img26 from "../assets/IMG_20251124_070906850.jpg";
import img27 from "../assets/IMG_20251124_073533519.jpg";
import img40 from "../assets/IMG_20251125_071227109.jpg";
import img41 from "../assets/IMG_20251125_071722675.jpg";
import img43 from "../assets/IMG_20251125_072645341.jpg";
import img47 from "../assets/IMG-20251127-WA0004.jpg";
const styles = {
  section: {
    background: "#ffffff",     // ✅ WHITE BACKGROUND
    padding: "80px 0",
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 800,
    color: "#000000",         // ✅ BLACK HEADING
    textAlign: "center",
    marginBottom: "40px",
  },

  movingRow: {
    display: "flex",
    gap: "25px",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  imgBox: {
    width: "300px",
    height: "220px",
    borderRadius: "15px",
    overflow: "hidden",
    flexShrink: 0,
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",   // Softer shadow for white bg
    background: "#f1f1f1",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },

  button: {
    padding: "12px 35px",
    background: "#000",
    color: "#00eaff",
    border: "2px solid #00eaff",
    borderRadius: "50px",
    fontWeight: 700,
    fontSize: "1.1rem",
    transition: "0.3s",
  },

  buttonContainer: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default function GalleryPage() {
  const location = useLocation();
  const isFullGallery = location.pathname === "/gallery";

  const images = [
     img1, img11, img12, img20, img21, 

     
    img23, img24, img25, img26, img27,
    img40, img41, img43, img47,
  ];

  return (
    <>
      <section style={styles.section}>
        <Container>
   <h2 style={styles.title}>Captured Moments</h2>
<p style={{
  textAlign: "center",
  fontSize: "1.1rem",
  color: "#555",
  marginTop: "-10px",
  marginBottom: "40px"
}}>
  A glimpse into the smiles, stories, and joyful memories we cherish.
</p>

          {/* ROW 1 – moves RIGHT */}
          <div className="slider-row slider-right" style={styles.movingRow}>
            <div className="slider-track">
              {images.concat(images).map((src, i) => (
                <div style={styles.imgBox} key={i}>
                  <img src={src} alt="gallery" style={styles.img} />
                </div>
              ))}
            </div>
          </div>

          <br />

          {/* ROW 2 – moves LEFT */}
          <div className="slider-row slider-left" style={styles.movingRow}>
            <div className="slider-track">
              {images.concat(images).map((src, i) => (
                <div style={styles.imgBox} key={i}>
                  <img src={src} alt="gallery" style={styles.img} />
                </div>
              ))}
            </div>
          </div>

          {/* VIEW MORE BUTTON */}
          {!isFullGallery && (
            <div style={styles.buttonContainer}>
              <Link to="/gallery">
                <Button as="span" style={styles.button}>View More</Button>
              </Link>
            </div>
          )}
        </Container>
      </section>

      {/* ANIMATION CSS */}
      <style>{`
        .slider-row {
          position: relative;
        }

        /* SLOWER SPEED (40s instead of 20s) */
        .slider-track {
          display: flex;
          gap: 25px;
          animation: scroll-left 40s linear infinite;  /* SLOWER */
        }

        .slider-right .slider-track {
          animation: scroll-right 40s linear infinite; /* SLOWER */
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .slider-track img {
            height: 160px !important;
          }
        }
      `}</style>
    </>
  );
}
