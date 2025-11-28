import React, { useState } from "react";
import qr from "../assets/qr.jpg"
export default function DonateModal({ close }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    pan: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields' });
      setIsSubmitting(false);
      return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `
*New Donation Form Submission*

*Personal Details:*
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}

*Address:*
🏠 *Address:* ${formData.address || 'Not provided'}
🏙️ *City:* ${formData.city || 'Not provided'}
🏛️ *State:* ${formData.state || 'Not provided'}
🌍 *Country:* ${formData.country || 'Not provided'}
📮 *Pincode:* ${formData.pincode || 'Not provided'}

*Tax Information:*
💳 *PAN:* ${formData.pan || 'Not provided'}

*Donation Method:* Form Submission
*Date:* ${new Date().toLocaleDateString()}
*Time:* ${new Date().toLocaleTimeString()}

*Sent via Savio Home Donation Portal*
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number
    const whatsappNumber = "918921915287";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        pan: ""
      });
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Form submitted successfully! Redirecting to WhatsApp...' 
      });

      // Auto-close after success
      setTimeout(() => {
        close();
      }, 2000);
    }, 1000);
  };

  const handlePrintBankDetails = () => {
    const printWindow = window.open("", "_blank");

    const htmlContent = `
      <html>
        <head>
          <title>Savio Home - Bank Details</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 30px;
              line-height: 1.6;
            }
            h2 {
              text-align: center;
              color: #007b8b;
              font-size: 24px;
              margin-bottom: 20px;
            }
            .bank-box {
              border: 2px solid #007b8b;
              padding: 20px;
              border-radius: 10px;
              font-size: 18px;
            }
            .info {
              margin: 6px 0;
            }
          </style>
        </head>
        <body>
          <h2>Savio Home – Bank Donation Details</h2>

          <div class="bank-box">
            <p class="info"><strong>Account Name:</strong> Savio Home Orphanage</p>
            <p class="info"><strong>Account Number:</strong> 0368053000032728</p>
            <p class="info"><strong>IFSC Code:</strong> SIBL0000368</p>
            <p class="info"><strong>Bank:</strong> The South Indian Bank</p>
            <p class="info"><strong>Branch:</strong> Thrissur East Fort Branch</p>
            <p class="info"><strong>Address:</strong> St. John's Arcade, East Fort, Thrissur 680005</p>
          </div>

          <br><br>
          <p style="text-align:center; font-size:16px;">
            Thank you for supporting our children ❤️
          </p>

          <script>
            window.onload = () => {
              window.print();
              setTimeout(()=> window.close(), 500);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="donate-overlay">

        {/* CLOSE BUTTON */}
        <button className="donate-x" onClick={close}>×</button>

        {/* BOX */}
        <div className="donate-box">

          <h1 className="donate-title">
            Ways to <span>Give to Savio Home</span>
          </h1>

          <p className="donate-intro">
            Your generous support helps provide <strong>shelter, food, education,
            healthcare & loving care</strong> to our children.
          </p>

          {/* ONLINE DONATION */}
          <h2 className="donate-heading">Online Donation (Recommended)</h2>
          <p className="donate-text">
            Make a <strong>one-time gift</strong> or become a <strong>monthly Sustainer</strong>.
          </p>

          <div className="qr-block">
            <h3>Scan & Donate using any UPI App</h3>

            <img
              src={qr}
              alt="UPI QR"
              className="qr-img"
            />
          </div>

          <p className="donate-text">
            Want to sponsor offline?  
            <br /><span className="cyan">Call +91 89219 15287</span>
          </p>

          {/* BANK DETAILS */}
          <h2 className="donate-heading">Bank Transfer</h2>

          <div className="bank-box">
            <p><strong>Savio Home Orphanage</strong></p>
            <p>A/c No: <strong>0368053000032728</strong></p>
            <p>IFSC: <strong>SIBL0000368</strong></p>
            <p>Bank: <strong>South Indian Bank</strong></p>
            <p><strong>Thrissur East Fort Branch</strong></p>
            <p>St. John's Arcade, East Fort, Thrissur 680005</p>
          </div>

          {/* PERSONAL DETAILS FORM */}
          <h2 className="donate-heading">Fill Your Personal Details</h2>
          <p className="donate-text" style={{fontSize: '0.9rem', color: '#666'}}>
            * Required for tax exemption certificate and receipt
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input 
                className="input" 
                placeholder="Full Name *" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input 
                className="input" 
                placeholder="Phone Number *" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input 
                className="input" 
                placeholder="Email Address *" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input 
                className="input" 
                placeholder="Complete Address" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <input 
                className="input" 
                placeholder="City" 
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
              <input 
                className="input" 
                placeholder="State" 
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
              <input 
                className="input" 
                placeholder="Country" 
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
              <input 
                className="input" 
                placeholder="Pincode" 
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
              <input 
                className="input" 
                placeholder="PAN Card Number" 
                name="pan"
                value={formData.pan}
                onChange={handleInputChange}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="button-group">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Preparing WhatsApp...
                  </>
                ) : (
                  "Submit Donation Form"
                )}
              </button>

              <button 
                type="button" 
                className="print-btn"
                onClick={handlePrintBankDetails}
              >
                Print Bank Details
              </button>
            </div>
          </form>

          {/* SUBMISSION STATUS */}
          {submitStatus && (
            <div className={`status-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          {/* CHEQUE */}
          <h2 className="donate-heading">Cheque Donation</h2>
          <p className="donate-text">
            Mail cheque payable to <strong>"Savio Home Orphanage"</strong>.
          </p>

          {/* IN-KIND */}
          <h2 className="donate-heading">In-Kind Donations</h2>
          <p className="donate-text">
            We accept non-perishable food, school supplies, new clothing, etc.  
            Please call <strong className="cyan">8921915287</strong> before dropping items.
          </p>

          {/* TAX BENEFIT */}
          <div className="tax-box">
            <h2 className="donate-heading">80G Tax Benefit</h2>

            <p className="donate-text">
              All donations are eligible for tax deduction under Section 80G.
            </p>

            <p className="donate-text">
              <strong>80G Regn No.: AAEAS4310C25KC01</strong><br />
              Issued on: 24/09/2025
            </p>
          </div>

          <button className="close-btn" onClick={close}>
            Close Window
          </button>
        </div>
      </div>

      {/* ========================== ENHANCED CSS =========================== */}
      <style>{`
        .donate-overlay {
          position: fixed;
          top:0; left:0;
          width:100%; height:100%;
          background: rgba(255,255,255,0.95);
          display:flex;
          justify-content:center;
          align-items:flex-start;
          overflow-y:auto;
          padding:40px 20px;
          z-index:9999;
          animation:fadeIn .3s ease-out;
        }

        .donate-x {
          position:fixed;
          top:20px; right:25px;
          background:none;
          border:none;
          font-size:42px;
          color:#000;
          cursor:pointer;
          font-weight:700;
          z-index:10000;
          transition: all 0.3s ease;
        }
        .donate-x:hover { 
          color:#00a9c9; 
          transform: scale(1.1);
        }

        .donate-box {
          background:#ffffff;
          width:100%;
          max-width:820px;
          padding:45px;
          border-radius:20px;
          color:#1b1b1b;
          box-shadow:0 10px 40px rgba(0,0,0,0.2);
          animation:scaleUp .4s ease-out;
          border: 1px solid #e1e5e9;
        }

        .donate-title {
          font-size:2.4rem;
          font-weight:800;
          text-align:center;
          margin-bottom:10px;
          background: linear-gradient(135deg, #1b1b1b 0%, #00a9c9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .donate-title span {
          color:#00a9c9;
          -webkit-text-fill-color: #00a9c9;
        }

        .donate-intro {
          text-align:center;
          font-size:1.15rem;
          opacity:.9;
          margin-bottom:30px;
          line-height:1.6;
        }

        .donate-heading {
          color:#00a9c9;
          font-size:1.5rem;
          font-weight:700;
          margin:30px 0 15px;
          border-bottom: 2px solid #00a9c9;
          padding-bottom: 8px;
        }

        .donate-text {
          font-size:1rem;
          opacity:.85;
          margin-bottom:15px;
          line-height:1.5;
        }

        .qr-block {
          background:#f2fbff;
          border:2px solid #00a9c9;
          padding:25px;
          border-radius:15px;
          text-align:center;
          margin-bottom:25px;
          transition: all 0.3s ease;
        }
        .qr-block:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,169,201,0.2);
        }
        .qr-img {
          width:200px;
          border-radius:12px;
          margin-top:15px;
          border: 2px solid #00a9c9;
        }

        .cyan { color:#00a9c9; font-weight:600; }

        .bank-box {
          background:#f7f7f7;
          border-left:4px solid #00a9c9;
          padding:25px;
          border-radius:12px;
          line-height:1.7;
          margin-bottom:10px;
        }

        .form-grid {
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap:20px;
          margin:20px 0;
        }
        .input {
          width:100%;
          padding:15px;
          border-radius:12px;
          border:2px solid #e1e5e9;
          font-size:1rem;
          background:white;
          color:#000;
          transition: all 0.3s ease;
        }
        .input:focus {
          border-color:#00a9c9;
          box-shadow:0 0 0 3px rgba(0,169,201,0.1);
          outline:none;
        }
        .input:required {
          border-left: 4px solid #00a9c9;
        }

        .button-group {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 15px;
          margin: 25px 0;
        }

       .submit-btn {
  padding: 16px 30px;
  background: linear-gradient(135deg, #00c4ff 0%, #0088cc 100%);
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 8px 22px rgba(0, 180, 255, 0.35);
  position: relative;
  overflow: hidden;
}

/* Hover Effect */
.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(0, 180, 255, 0.5);
}

/* Disabled State */
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .print-btn {
          padding: 16px 20px;
          background: transparent;
          border: 2px solid #00a9c9;
          font-size: 1rem;
          font-weight: 600;
          color: #00a9c9;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .print-btn:hover {
          background: #00a9c9;
          color: white;
          transform: translateY(-2px);
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .status-message {
          padding: 15px;
          border-radius: 10px;
          margin: 20px 0;
          text-align: center;
          font-weight: 600;
        }
        .status-message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .status-message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .tax-box {
          border: 2px solid #00a9c9;
          background: linear-gradient(135deg, #f4feff 0%, #e8f7fa 100%);
          padding: 25px;
          border-radius: 15px;
          margin-top: 30px;
        }

        .close-btn {
          margin-top: 25px;
          width: 100%;
          padding: 16px;
          background: #2c3e50;
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .close-btn:hover {
          background: #1a252f;
          transform: translateY(-2px);
        }

        @keyframes fadeIn { 
          from { opacity: 0; } 
          to { opacity: 1; } 
        }
        @keyframes scaleUp { 
          from { transform: scale(0.8); opacity: 0; } 
          to { transform: scale(1); opacity: 1; } 
        }
        @keyframes spin { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }

        /* Print Styles */
        @media print {
          .donate-x, .close-btn, .submit-btn, .print-btn {
            display: none !important;
          }
          .donate-overlay {
            position: static;
            background: white;
            padding: 0;
          }
          .donate-box {
            box-shadow: none;
            border: 2px solid #000;
          }
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .button-group {
            grid-template-columns: 1fr;
          }
          .donate-box {
            padding: 30px 20px;
          }
          .donate-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .donate-box { 
            padding: 25px 15px; 
          }
          .donate-title { 
            font-size: 1.8rem; 
          }
          .qr-img {
            width: 160px;
          }
        }
      `}</style>
    </>
  );
}