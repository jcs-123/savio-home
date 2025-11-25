import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const css = `
/* RESET */
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  padding-top:140px!important;
  background:black !important;
  color:white;
}

/* TOP BAR */
.top-bar{
  width:100%;
  background:black;
  padding:10px 0;
  color:white;
  font-size:14px;
  font-weight:700;
  position:fixed;
  top:0;
  z-index:2000;
  border-bottom:2px solid #00eaff;
}
.top-bar-container{
  width:100%;
  max-width:1300px;
  margin:auto;
  padding:0 15px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:8px;
}

.top-left {
  display: flex;
  gap: 15px;
  font-size: 13px;
  font-weight: 600;
  flex-wrap: wrap;
  align-items: center;
}

.top-icons {
  display: flex;
  gap: 10px;
  margin-left: 10px;
}

.top-icons a {
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  transition: 0.3s;
}
.top-icons a:hover {
  color: #00eaff;
  transform: translateY(-2px);
}

.top-btns{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}
.top-btn{
  background:#00eaff;
  color:black;
  padding:6px 14px;
  border-radius:6px;
  border:2px solid #00eaff;
  font-size:13px;
  cursor:pointer;
  font-weight:600;
  transition: all 0.3s ease;
}
.top-btn:hover{
  background:white;
  color:black;
  transform: translateY(-2px);
}

/* HEADER */
.header-wrapper{
  width:100%;
  position:fixed;
  top:50px;
  left:0;
  z-index:1500;
  background:black;
  padding-bottom:10px;
}

.header{
  width:100%;
  max-width:1300px;
  margin:auto;
  background:white;
  padding:16px 15px;
  border-radius:0 0 22px 22px;
  box-shadow:0 5px 18px rgba(255,255,255,0.25);
  transition:0.25s ease;
  color:black;
}
.header.shrink{
  padding:10px 15px;
  border-radius:0 0 15px 15px;
}

.header-container{
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
}

/* LOGO - INCREASED SIZES FOR MOBILE */
.logo-block{
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  transition: all 0.3s ease;
}
.logo-block img{
  height:52px; /* Increased from 48px */
  border-radius:10px;
  transition: all 0.3s ease;
}
.logo-text{
  font-size:24px; /* Increased from 22px */
  font-weight:800;
  color:black;
  transition: all 0.3s ease;
}

.header.shrink .logo-block img{height:42px;} /* Increased from 38px */
.header.shrink .logo-text{font-size:20px;} /* Increased from 18px */

/* NAV DESKTOP */
.nav-menu{
  display:flex;
  align-items:center;
  gap:24px;
}
.nav-menu button{
  background:none;
  border:none;
  font-size:16px; /* Slightly increased */
  color:black;
  font-weight:600;
  cursor:pointer;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 6px;
}
.nav-menu button:hover{
  color:#00a4bb !important;
  background: rgba(0, 234, 255, 0.1);
  transform: translateY(-2px);
}

.nav-active{
  color:#00a4bb !important;
  background: rgba(0, 234, 255, 0.1);
}

.donate-btn{
  background:linear-gradient(135deg,#00a4bb,#00eaff);
  border:none;
  color:white;
  padding:8px 16px;
  border-radius:8px;
  font-weight:700;
}

/* HAMBURGER */
.hamburger{
  display:none;
  flex-direction:column;
  gap:4px;
  cursor:pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.hamburger:hover {
  background: rgba(0, 234, 255, 0.1);
}
.hamburger span{
  width:26px;
  height:3px;
  background:black;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* MOBILE MENU */
.mobile-menu{
  background:black;
  width:100%;
  border-radius:0 0 18px 18px;
  margin-top:8px;
  box-shadow:0 5px 15px rgba(255,255,255,0.18);
  animation: slideDown 0.3s ease-out;
}
.mobile-menu button{
  width:100%;
  padding:14px;
  background:none;
  border:none;
  text-align:left;
  font-size:16px;
  border-bottom:1px solid #333;
  cursor:pointer;
  color:white;
  transition: all 0.3s ease;
}
.mobile-menu button:hover{
  background:#1a1a1a;
  color:#00a4bb;
  padding-left: 20px;
}
.mobile-menu button:last-child {
  border-bottom: none;
}

/* RESPONSIVE DESIGN */
/* Desktop First Approach */

/* Large Desktop */
@media(min-width: 1200px){
  .logo-block img{
    height: 55px;
  }
  .logo-text{
    font-size: 26px;
  }
}

/* Tablet and Small Desktop */
@media(max-width: 992px){
  .nav-menu{display:none;}
  .hamburger{display:flex;}
  
  .top-bar-container {
    justify-content: center;
    text-align: center;
  }
  
  .top-left {
    justify-content: center;
    text-align: center;
  }
  
  .top-btns {
    justify-content: center;
    margin-top: 5px;
  }
  
  /* Tablet Logo Size */
  .logo-block img{
    height: 48px !important;
  }
  .logo-text{
    font-size: 22px !important;
  }
  
  .header.shrink .logo-block img {
    height: 40px !important;
  }
  .header.shrink .logo-text {
    font-size: 18px !important;
  }
}

/* Mobile - Increased sizes */
@media(max-width: 768px){
  body { padding-top:150px!important; }
  
  /* Larger mobile logo */
  .logo-block img{
    height: 45px !important; /* Increased from 35px */
  }
  .logo-text{
    font-size: 20px !important; /* Increased from 16px */
  }
  
  .header.shrink .logo-block img {
    height: 38px !important; /* Increased from 30px */
  }
  .header.shrink .logo-text {
    font-size: 17px !important; /* Increased from 14px */
  }
  
  .top-bar {
    font-size: 12px;
    padding: 8px 0;
  }
  
  .top-left {
    font-size: 11px;
    gap: 8px;
  }
  
  .top-btn {
    font-size: 11px;
    padding: 5px 10px;
  }
}

/* Small Mobile - Further increased */
@media(max-width: 600px){
  body { padding-top:145px!important; }
  
  /* Even larger for small mobile */
  .logo-block img{
    height: 42px !important; /* Increased from 30px */
  }
  .logo-text{
    font-size: 18px !important; /* Increased from 14px */
  }
  
  .header.shrink .logo-block img {
    height: 35px !important; /* Increased from 25px */
  }
  .header.shrink .logo-text {
    font-size: 15px !important; /* Increased from 12px */
  }
  
  .top-bar {
    font-size: 11px;
  }
  
  .top-left {
    font-size: 10px;
    gap: 5px;
  }
  
  .top-btn {
    font-size: 10px;
    padding: 4px 8px;
  }
  
  .header {
    padding: 12px 15px !important;
  }
  
  .header.shrink {
    padding: 8px 15px !important;
  }
}

/* Extra Small Mobile - Optimized but not too small */
@media(max-width: 480px){
  body { padding-top:140px!important; }
  
  .logo-block {
    gap: 8px;
  }
  
  .logo-block img{
    height: 38px !important; /* Increased from 25px */
  }
  .logo-text{
    font-size: 16px !important; /* Increased from 12px */
  }
  
  .header.shrink .logo-block img {
    height: 32px !important; /* Increased from 20px */
  }
  .header.shrink .logo-text {
    font-size: 14px !important; /* Increased from 10px */
  }
  
  .top-bar {
    font-size: 10px;
    padding: 6px 0;
  }
  
  .top-left span {
    font-size: 9px;
  }
  
  .top-btn {
    font-size: 9px;
    padding: 3px 6px;
  }
  
  .mobile-menu button {
    padding: 12px;
    font-size: 14px;
  }
}

/* Very Small Mobile - Keep logo visible */
@media(max-width: 360px){
  .logo-text {
    font-size: 14px !important; /* Keep text visible instead of hiding */
  }
  
  .logo-block {
    gap: 6px;
  }
  
  .logo-block img{
    height: 35px !important; /* Increased from 28px */
  }
  
  .top-left {
    flex-direction: column;
    gap: 2px;
  }
  
  .top-btns {
    gap: 4px;
  }
}

/* ANIMATIONS */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hide phone number on very small screens */
@media(max-width: 400px){
  .d-none.d-md-flex {
    display: none !important;
  }
}

/* Ensure logo is always properly visible */
.logo-block img {
  min-height: 30px; /* Minimum size guarantee */
  object-fit: contain;
}

/* Better hover effects */
.logo-block:hover img {
  transform: scale(1.05);
}

.logo-block:hover .logo-text {
  color: #00a4bb;
}
`;

if (!document.getElementById("responsive-header-bk")) {
  const style = document.createElement("style");
  style.id = "responsive-header-bk";
  style.innerHTML = css;
  document.head.appendChild(style);
}

export default function Header({openModal}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-container">

          {/* LEFT TEXT */}
          <div className="top-left">
            <span> Savio Home, Kizhakkumpuram, Manakody, Thrissur</span>
            <span className="d-none d-md-flex">📞 +91 89219 15287</span>
          </div>

     {/* RIGHT BUTTONS */}
<div className="top-btns">
  <button className="top-btn" onClick={() => openModal("donate")}>Donate</button>
  <button className="top-btn" onClick={() => openModal("volunteer")}>Become a Volunteer</button>
  <button className="top-btn" onClick={() => openModal("meal")}>Offer Meal</button>
</div>



        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="header-wrapper">
        <header className={`header ${shrink ? "shrink" : ""}`}>
          <div className="header-container">

            {/* LOGO - Now larger on mobile */}
            <div className="logo-block" onClick={() => scrollTo("home")}>
              <img src={logo} alt="Savio Home" />
              <div className="logo-text">Savio Home</div>
            </div>

            {/* DESKTOP MENU */}
            <nav className="nav-menu">
              {["home","about","leadership Lineage","children","gallery","contact"].map((id) => (
                <button 
                  key={id}
                  className={active === id ? "nav-active" : ""}
                  onClick={() => scrollTo(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </nav>

            {/* HAMBURGER */}
            <div 
              className={`hamburger ${open ? "open" : ""}`} 
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="mobile-menu">
              {["home","about","mission","children","gallery","contact"].map((id) => (
                <button 
                  key={id} 
                  className={active === id ? "nav-active" : ""}
                  onClick={() => scrollTo(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          )}

        </header>
      </div>
    </>
  );
}