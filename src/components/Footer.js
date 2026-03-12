import Image from "next/image";

const socialIcons = [
  "fa-facebook-f",
  "fa-linkedin-in",
  "fa-twitter",
  "fa-instagram",
];

const footerSections = [
  {
    title: "Company",
    links: ["About", "SiteMap", "Nam posuere", "Aenean facilisis"],
  },
  {
    title: "Services",
    links: [
      "Cras convallis",
      "Vestibulum faucibus",
      "Quisque lacinia purus",
      "Aliquam nec ex",
    ],
  },
  {
    title: "Resources",
    links: [
      "Suspendisse porttitor",
      "Nam posuere",
      "Curabitur egestas",
      "Aenean facilisis",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer-section py-3 py-lg-5">
      <div className="container">
        <div className="row">

          {/* COLUMN 1 */}
          <div className="col-md-6 col-lg-3 mb-4">
            <Image
              src="/assets/logo-img.jpg"
              width={120}
              height={50}
              alt="logo"
              className="object-fit-contain"
            />

            <p className="mt-3">
              Nam posuere accumsan porta. Integer id tincidunt sit amet sed
              libero.
            </p>

            {/* Social Icons */}
            <div className="social-icons mt-3">
              {socialIcons.map((icon, index) => (
                <span key={index} className="rounded-circle align-items-center justify-content-center">
                  <i className={`fab ${icon}`}></i>
                </span>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <h6 className="footer-title fw-bold">{section.title}</h6>

              <ul className="footer-links">
                {section.links.map((link, i) => (
                  <li className="fw-bold" key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom fw-bold text-center mt-4">
          <p>© MEDSTEMS INTERNATIONAL 2025</p>

          <p>
            <a href="#">A Biz Credence Inc. Enterprise Solution</a>
          </p>

          <p>
            Enabled by NOX Analytics and SiriL - Enterprise Conversational
            Intelligence
          </p>
        </div>

      </div>
    </footer>
  );
}