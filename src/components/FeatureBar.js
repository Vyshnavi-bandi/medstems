import React from "react";

const features = [
  {
    icon: "fa-solid fa-clock",
    text: "24 hours services",
  },
  {
    icon: "fa-solid fa-calendar-days",
    text: "10 years of experience",
  },
  {
    icon: "fa-solid fa-heart",
    text: "High quality care",
  },
];

export default function FeatureBar() {
  return (
    <section className="feature-section my-3">
      <div className="container">
        <div className="feature-box">
          <div className="row text-center align-items-center">

            {features.map((feature, index) => (
              <div
                key={index}
                className="col-md-4 py-3 py-md-0 feature-item fw-medium d-flex align-items-center justify-content-md-center"
              >
                <span className="feature-icon me-2">
                  <i className={feature.icon}></i>
                </span>

                <p className="mb-0">{feature.text}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}