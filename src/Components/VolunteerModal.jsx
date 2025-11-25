import React, { useState } from "react";

export default function VolunteerModal({ close }) {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    address: "",
    country: "",
    phone: "",
    email: "",
    employment: "",
    placeOfEmployment: "",
    position: "",
    workAddress: "",
    educationLevel: "",
    majorArea: "",
    isStudent: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (!formData.fullName || !formData.phone || !formData.email) {
      setStatus({ type: "error", msg: "Please fill all required fields." });
      setIsSubmitting(false);
      return;
    }

    await new Promise((res) => setTimeout(res, 1500));

    setStatus({
      type: "success",
      msg: "Your volunteer application has been submitted successfully. Our team will contact you soon.",
    });

    setTimeout(() => close(), 3000);
    setIsSubmitting(false);
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="volunteer-modal">

        {/* CLOSE BUTTON */}
        <button className="volunteer-close" onClick={close}>×</button>

        {/* MAIN CONTAINER */}
        <div className="volunteer-container">

          {/* HEADER */}
          <div className="volunteer-header">
            <h1 className="volunteer-title">
              Become a <span>Volunteer</span>
            </h1>
          </div>

          {/* SUMMARY SECTION */}
          <div className="volunteer-summary">
            <p>
              Savio Home accepts volunteers and provides meaningful opportunities to 
              enrich the lives of our children. We welcome <strong>motivated, energetic 
              and creative individuals</strong> who wish to make a lasting impact.
            </p>
            <p>
              Volunteers may assist in child care, group activities, social work support, 
              tuition, or event coordination. Submit the form below — our team will reach 
              out to you soon.
            </p>
          </div>

          {/* FORM SECTION */}
          <form onSubmit={handleSubmit} className="volunteer-form">
            <div className="form-grid">

              {/* Row 1 */}
              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Full Name *"
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <select 
                  className="form-input" 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleChange}
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Row 2 */}
              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Age"
                  name="age" 
                  value={formData.age} 
                  onChange={handleChange} 
                  type="number"
                />
              </div>

              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Country"
                  name="country" 
                  value={formData.country} 
                  onChange={handleChange} 
                />
              </div>

              {/* Row 3 */}
              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Phone (Mobile) *"
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Email *" 
                  type="email"
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              {/* Row 4 */}
              <div className="input-group full-width">
                <input 
                  className="form-input" 
                  placeholder="Address"
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                />
              </div>

              {/* Row 5 */}
              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Employment"
                  name="employment" 
                  value={formData.employment} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Place of Employment"
                  name="placeOfEmployment" 
                  value={formData.placeOfEmployment} 
                  onChange={handleChange} 
                />
              </div>

              {/* Row 6 */}
              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Position Held"
                  name="position" 
                  value={formData.position} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Work Address"
                  name="workAddress" 
                  value={formData.workAddress} 
                  onChange={handleChange} 
                />
              </div>

              {/* Row 7 */}
              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Education Level"
                  name="educationLevel" 
                  value={formData.educationLevel} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <input 
                  className="form-input" 
                  placeholder="Major Study Area"
                  name="majorArea" 
                  value={formData.majorArea} 
                  onChange={handleChange} 
                />
              </div>

              {/* Row 8 */}
              <div className="input-group full-width">
                <select 
                  className="form-input" 
                  name="isStudent" 
                  value={formData.isStudent} 
                  onChange={handleChange}
                >
                  <option value="">Are you currently a student?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

            </div>

            {/* SUBMIT BUTTON */}
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : (
                "Submit Volunteer Application"
              )}
            </button>
          </form>

          {/* STATUS MESSAGE */}
          {status && (
            <div className={`status-message ${status.type}`}>
              {status.msg}
            </div>
          )}

        </div>
      </div>

      {/* RESPONSIVE CSS */}
      <style>{`
        .volunteer-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.96);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow-y: auto;
          padding: 40px 20px;
          z-index: 9999;
          animation: modalFadeIn 0.3s ease-out;
        }

        .volunteer-close {
          position: fixed;
          top: 20px;
          right: 25px;
          font-size: 42px;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 300;
          color: #2c3e50;
          transition: all 0.3s ease;
          z-index: 10000;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .volunteer-close:hover {
          color: #00a9c9;
          background: rgba(0, 169, 201, 0.1);
          transform: scale(1.1);
        }

        .volunteer-container {
          background: #ffffff;
          padding: 45px;
          max-width: 850px;
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border: 1px solid #e1e5e9;
          animation: modalSlideUp 0.4s ease-out;
        }

        .volunteer-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .volunteer-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #2c3e50 0%, #00a9c9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }

        .volunteer-title span {
          color: #00a9c9;
          -webkit-text-fill-color: #00a9c9;
        }

        .volunteer-summary {
          background: linear-gradient(135deg, #f8fdff 0%, #e8f7fa 100%);
          border: 2px solid #00a9c9;
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 35px;
          line-height: 1.6;
          color: #2c3e50;
        }

        .volunteer-summary p {
          margin-bottom: 15px;
        }

        .volunteer-summary p:last-child {
          margin-bottom: 0;
        }

        .volunteer-summary strong {
          color: #00a9c9;
        }

        .volunteer-form {
          width: 100%;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .form-input {
          padding: 16px 18px;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
          color: #2c3e50;
          font-family: inherit;
        }

        .form-input:focus {
          border-color: #00a9c9;
          box-shadow: 0 0 0 3px rgba(0, 169, 201, 0.1);
          outline: none;
          transform: translateY(-1px);
        }

        .form-input::placeholder {
          color: #95a5a6;
        }

        select.form-input {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 15px center;
          background-size: 12px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px 30px;
          background: linear-gradient(135deg, #00a9c9 0%, #007b8b 100%);
          border: none;
          border-radius: 12px;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 25px rgba(0, 169, 201, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 169, 201, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .submit-btn.submitting {
          background: linear-gradient(135deg, #95a5a6, #7f8c8d);
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .status-message {
          padding: 20px;
          border-radius: 12px;
          margin-top: 25px;
          text-align: center;
          font-size: 1.1rem;
          line-height: 1.5;
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

        /* Animations */
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Tablet Responsive */
        @media (max-width: 768px) {
          .volunteer-modal {
            padding: 30px 15px;
          }

          .volunteer-container {
            padding: 35px 25px;
          }

          .volunteer-title {
            font-size: 2.2rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .volunteer-summary {
            padding: 20px;
          }

          .submit-btn {
            padding: 16px 25px;
            font-size: 1.1rem;
          }

          .volunteer-close {
            top: 15px;
            right: 20px;
            font-size: 38px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
          .volunteer-modal {
            padding: 20px 10px;
          }

          .volunteer-container {
            padding: 25px 20px;
            border-radius: 16px;
          }

          .volunteer-title {
            font-size: 1.8rem;
          }

          .volunteer-summary {
            padding: 18px;
            border-radius: 12px;
          }

          .form-input {
            padding: 14px 16px;
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .submit-btn {
            padding: 16px 20px;
            font-size: 1rem;
          }

          .volunteer-close {
            top: 10px;
            right: 15px;
            font-size: 36px;
            width: 45px;
            height: 45px;
          }

          .status-message {
            padding: 16px;
            font-size: 1rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 360px) {
          .volunteer-container {
            padding: 20px 15px;
          }

          .volunteer-title {
            font-size: 1.6rem;
          }

          .form-input {
            padding: 12px 14px;
          }

          .submit-btn {
            padding: 14px 18px;
          }
        }

        /* Landscape Mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .volunteer-modal {
            padding: 20px 10px;
            align-items: flex-start;
          }

          .volunteer-container {
            max-height: 90vh;
            overflow-y: auto;
          }

          .volunteer-summary {
            padding: 15px;
            margin-bottom: 20px;
          }

          .form-grid {
            gap: 12px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}