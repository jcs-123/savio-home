import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Footer Styles
const footerStyles = {
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "40px 0 20px 0",
    borderTop: "3px solid #00c4cc",
    marginTop: "0",
  },
  copyright: {
    textAlign: "center",
    fontSize: "16px",
    color: "white",
    fontWeight: "500",
    margin: "0",
    padding: "15px 0",
    borderTop: "1px solid white",
  },
  copyrightText: {
    color: "#00eaff",
    fontWeight: "600",
  }
};

// Footer CSS
const footerCSS = `
.footer-copyright {
  transition: all 0.3s ease;
}

.footer-copyright:hover {
  color: #00eaff !important;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-section {
    padding: 30px 0 15px 0 !important;
  }
  
  .footer-copyright {
    font-size: 14px !important;
    padding: 12px 0 !important;
  }
}

@media (max-width: 576px) {
  .footer-section {
    padding: 25px 0 12px 0 !important;
  }
  
  .footer-copyright {
    font-size: 13px !important;
    padding: 10px 0 !important;
  }
}

@media (max-width: 360px) {
  .footer-copyright {
    font-size: 12px !important;
  }
}
`;

// Inject Footer CSS
if (!document.getElementById("footer-css")) {
  const styleTag = document.createElement("style");
  styleTag.id = "footer-css";
  styleTag.innerHTML = footerCSS;
  document.head.appendChild(styleTag);
}

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyles.footer} className="footer-section">
      <Container>
        <Row>
          <Col>
            <div style={footerStyles.copyright} className="footer-copyright">
              &copy; {currentYear} <span style={footerStyles.copyrightText}>Savio Home</span>. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;