import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

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
    "https://i.pinimg.com/1200x/38/1a/c0/381ac0ba24c44b2a7298fdd1922ba898.jpg",
    "https://i.pinimg.com/736x/8d/6b/4f/8d6b4f321ef3eb04dfe9c1caad3bc6e1.jpg",
    "https://i.pinimg.com/736x/d5/4b/c8/d54bc8608426e7723c800f0941498fb6.jpg",
    "https://i.pinimg.com/736x/92/00/97/920097580b7b2357c5a146dcf1af39ee.jpg",
    "https://i.pinimg.com/736x/c4/0a/9a/c40a9aeb3fa1bb4e6c2a6e7e3d51b6c7.jpg",
    "https://i.pinimg.com/736x/7c/b8/2f/7cb82fffe6dbb41495e7e3d7fbc29680.jpg",


    "https://i.pinimg.com/736x/f4/1c/31/f41c31ab9773c145477228c57c881662.jpg",
    "https://i.pinimg.com/736x/41/76/4c/41764c2b9a93217cca91c7f360acaca7.jpg",
    "https://i.pinimg.com/736x/9b/16/a0/9b16a0b4c8bc552294161e9611598344.jpg",
    "https://i.pinimg.com/736x/6d/a2/37/6da237af20b99859cd31518c174e2ae3.jpg",
    "https://i.pinimg.com/1200x/90/bb/0a/90bb0a08c3f44d2601e53885b03980db.jpg",
    "https://i.pinimg.com/736x/12/a7/5a/12a75a60503ac7d06c1e038d13c75645.jpg",
    "https://i.pinimg.com/736x/a7/57/3e/a7573e7d4b8da3aaa4d8f088b4effd76.jpg",
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
