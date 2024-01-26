'use client'
import React, { useState } from "react";
import './FaqComponent.css'

const FaqComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index: any) => {
    setActiveQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq_main_container">
      {faqData.map((item, index) => (
        <div key={index} className="faq_container">
          <div
            className={`faq_question ${activeQuestion === index ? "active" : ""}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="faq_question-text">
              <h3>{item.question}</h3>
            </div>
            <div className="icon">
              <div className={`icon-shape ${activeQuestion === index ? "active" : ""}`}></div>
            </div>
          </div>
          <div className="answercont" style={{ maxHeight: activeQuestion === index ? "100%" : "0" }}>
            <div className="answer">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const faqData = [
  {
    question: "How do I place an order?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsam odio voluptates ab quae beatae nihil illo alias vitae minima cumque atque, deleniti quos animi nostrum, veritatis quisquam ullam ducimus laboriosam reprehenderit sapiente, quo necessitatibus dolorem. Impedit sed, similique corporis quo totam, veniam consequatur blanditiis, voluptates ipsa eligendi excepturi incidunt facilis ex tempore? Ut vero voluptatum quis doloremque accusantium saepe.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Choose the option that suits you best during the checkout process.",
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "Unfortunately, once an order is placed, it cannot be modified or canceled. Please double-check your order before confirming the purchase.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track the delivery status of your package on our website or the courier's site.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We have a 30-day return policy. If you're not satisfied with your purchase, you can return the item within 30 days of receiving it for a full refund. Please review our Returns & Exchanges page for detailed instructions.",
  },
];

export default FaqComponent;