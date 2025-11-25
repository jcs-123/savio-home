import React, { useState } from "react";

export default function OfferMealModal({ close }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mealType: "",
    mealDate: "",
    numberOfMeals: "",
    occasion: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
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
    if (!formData.name || !formData.phone || !formData.mealType || !formData.mealDate) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields' });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Meal sponsorship submitted:', formData);
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you for your meal sponsorship request! We will contact you shortly to confirm the details.' 
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        mealType: "",
        mealDate: "",
        numberOfMeals: "",
        occasion: "",
        message: ""
      });

    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallCoordinator = () => {
    window.open('tel:+918921915287');
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in sponsoring a meal at Savio Home. Please provide more details.`;
    window.open(`https://wa.me/918921915287?text=${encodeURIComponent(message)}`);
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="meal-modal-overlay">

        {/* CLOSE BUTTON */}
        <button className="meal-close-btn" onClick={close}>×</button>

        {/* MAIN CONTAINER */}
        <div className="meal-modal-container">

          {/* HEADER SECTION */}
          <div className="meal-header">
            <h1 className="meal-title">
              Sponsor a <span>Meal</span>
            </h1>
            <div className="meal-subtitle">
              Gift of Nourishment (Annadhanam)
            </div>
          </div>

          {/* HERO SECTION */}
          <div className="meal-hero">
            <p className="meal-description">
              You can provide the invaluable gift of a nutritious meal for the children of Savio Home. 
              Sponsoring a meal for a day, or for a special occasion, is a deeply personal way to 
              support our residents.
            </p>
          </div>

          {/* MEAL OPTIONS */}
          <div className="meal-options">
            <h3 className="options-title">What You Can Sponsor:</h3>
            <div className="options-grid">
              <div className="meal-option">
                <div className="option-content">
                  <h4>Breakfast</h4>
                  <p>A healthy start to their day with nutritious food</p>
                </div>
              </div>
              <div className="meal-option">
                <div className="option-content">
                  <h4>Lunch</h4>
                  <p>A hearty main meal to energize their day</p>
                </div>
              </div>
              <div className="meal-option">
                <div className="option-content">
                  <h4>Supper</h4>
                  <p>A comforting end to their evening</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-info">
            <h3>How to Offer a Meal:</h3>
            <p>
              To discuss the menu, available dates, and details for sponsoring Breakfast, 
              Lunch, or Supper for our children, please contact:
            </p>
            <div className="coordinator-card">
              <div className="coordinator-info">
                <strong>Meal Sponsorship Coordinator</strong>
                <div className="contact-number">Call or WhatsApp: +91 89219 15287</div>
              </div>
              <div className="contact-buttons">
                <button className="call-btn" onClick={handleCallCoordinator}>
                  Call Now
                </button>
                <button className="whatsapp-btn" onClick={handleWhatsApp}>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* SPONSORSHIP FORM */}
          <div className="form-section">
            <h3>Quick Sponsorship Request</h3>
            <p className="form-subtitle">
              Fill this form and our coordinator will contact you to finalize the details.
            </p>

            <form onSubmit={handleSubmit} className="meal-form">
              <div className="form-grid">
                <div className="input-group">
                  <input 
                    className="form-input" 
                    placeholder="Your Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <input 
                    className="form-input" 
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <input 
                    className="form-input" 
                    placeholder="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <select 
                    className="form-input" 
                    name="mealType"
                    value={formData.mealType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Meal Type *</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="all">All Three Meals</option>
                  </select>
                </div>

                <div className="input-group">
                  <input 
                    className="form-input" 
                    type="date"
                    name="mealDate"
                    value={formData.mealDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <input 
                    className="form-input" 
                    placeholder="Number of Meals"
                    type="number"
                    name="numberOfMeals"
                    value={formData.numberOfMeals}
                    onChange={handleChange}
                    min="1"
                  />
                </div>

                <div className="input-group full-width">
                  <input 
                    className="form-input" 
                    placeholder="Special Occasion (Birthday, Anniversary, etc.)"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group full-width">
                  <textarea
                    className="form-input"
                    placeholder="Additional Message or Special Requests"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                  />
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
                    <div className="spinner"></div>
                    Processing Request...
                  </>
                ) : (
                  "Submit Sponsorship Request"
                )}
              </button>
            </form>

            {/* SUBMISSION STATUS */}
            {submitStatus && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
          </div>

          {/* CLOSING MESSAGE */}
          <div className="closing-message">
            <p>
              <strong>We look forward to partnering with you to nourish our children!</strong>
            </p>
            <p className="closing-note">
              Your generosity provides not just food, but love and care to children in need.
            </p>
          </div>

          <button className="close-modal-btn" onClick={close}>
            Close
          </button>
        </div>
      </div>

      {/* ENHANCED CSS STYLES */}
      <style>{`
        .meal-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.98);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow-y: auto;
          padding: 40px 20px;
          z-index: 9999;
          animation: mealFadeIn 0.4s ease-out;
        }

        .meal-close-btn {
          position: fixed;
          top: 20px;
          right: 30px;
          font-size: 48px;
          font-weight: 300;
          background: none;
          border: none;
          cursor: pointer;
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

        .meal-close-btn:hover {
          color: #00a9c9;
          background: rgba(0, 169, 201, 0.1);
          transform: scale(1.1);
        }

        .meal-modal-container {
          background: white;
          padding: 50px;
          max-width: 800px;
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border: 1px solid #e1e5e9;
          animation: mealSlideUp 0.5s ease-out;
        }

        .meal-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .meal-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #2c3e50 0%, #00a9c9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }

        .meal-title span {
          color: #00a9c9;
          -webkit-text-fill-color: #00a9c9;
        }

        .meal-subtitle {
          font-size: 1.3rem;
          color: #00a9c9;
          font-weight: 600;
          font-style: italic;
        }

        .meal-hero {
          background: linear-gradient(135deg, #f8fdff 0%, #e8f7fa 100%);
          border: 2px solid #00a9c9;
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 30px;
          text-align: center;
        }

        .meal-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #2c3e50;
          margin: 0;
        }

        .meal-options {
          margin-bottom: 35px;
        }

        .options-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 20px;
          text-align: center;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .meal-option {
          background: white;
          border: 2px solid #00a9c9;
          border-radius: 12px;
          padding: 25px 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .meal-option:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 169, 201, 0.2);
        }

        .option-content h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #00a9c9;
          margin-bottom: 8px;
        }

        .option-content p {
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        .contact-info {
          background: linear-gradient(135deg, #f8fdff 0%, #e8f7fa 100%);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 35px;
        }

        .contact-info h3 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.4rem;
        }

        .contact-info p {
          line-height: 1.6;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .coordinator-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          border: 2px solid #00a9c9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .coordinator-info {
          flex: 1;
        }

        .coordinator-info strong {
          display: block;
          font-size: 1.2rem;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .contact-number {
          font-size: 1.1rem;
          color: #00a9c9;
          font-weight: 600;
        }

        .contact-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .call-btn, .whatsapp-btn {
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .call-btn {
          background: #00a9c9;
          color: white;
        }

        .whatsapp-btn {
          background: #25d366;
          color: white;
        }

        .call-btn:hover, .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .form-section {
          margin-bottom: 30px;
        }

        .form-section h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .form-subtitle {
          color: #666;
          margin-bottom: 25px;
          line-height: 1.5;
        }

        .meal-form {
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

        textarea.form-input {
          resize: vertical;
          min-height: 80px;
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
          margin: 25px 0;
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

        .closing-message {
          background: linear-gradient(135deg, #f8fdff 0%, #e8f7fa 100%);
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          margin-bottom: 25px;
          border: 2px solid #00a9c9;
        }

        .closing-message p {
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .closing-note {
          color: #666;
          font-style: italic;
        }

        .close-modal-btn {
          width: 100%;
          padding: 16px;
          background: #2c3e50;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-modal-btn:hover {
          background: #1a252f;
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes mealFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes mealSlideUp {
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .meal-modal-container {
            padding: 30px 20px;
          }
          
          .meal-title {
            font-size: 2.2rem;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .options-grid {
            grid-template-columns: 1fr;
          }
          
          .coordinator-card {
            flex-direction: column;
            text-align: center;
          }
          
          .contact-buttons {
            justify-content: center;
          }
          
          .meal-close-btn {
            top: 10px;
            right: 15px;
            font-size: 40px;
          }
        }

        @media (max-width: 480px) {
          .meal-modal-overlay {
            padding: 20px 10px;
          }
          
          .meal-title {
            font-size: 1.8rem;
          }
          
          .meal-hero {
            padding: 20px;
          }
          
          .submit-btn {
            padding: 16px 25px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}