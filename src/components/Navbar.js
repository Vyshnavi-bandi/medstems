import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "Our Platform",
    dropdown: [
      "Trust & care governance",
      "Our Purpose & Journey",
      "Global care network",
      "Who we Are & What we Enable",
    ],
  },
  { title: "Center of Excellence" },
  { title: "Find Doctor" },
  { title: "International Patients" },
  { title: "Corporate" },
  { title: "Leadership" },
  { title: "Why We Exist" },
  { title: "Connect" },
];

export default function Header() {
  return (
    <header>

      {/* Top Bar */}
      <div className="topbar py-3">
        <div className="container d-flex justify-content-between align-items-center">

          {/* Logo */}
          <div className="logo fw-bold">
            <Image
              className="w-100"
              src="/assets/logo-img.jpg"
              width={120}
              height={50}
              alt="logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Right Info */}
          <div className="text-end small d-md-flex align-items-center justify-content-end gap-4">
            <div>English-EN</div>
            <div>
              <div className="fw-bold">+91 35542 05473</div>
              <div>Mon-Sat 9am - 8am</div>
            </div>
          </div>

        </div>
      </div>


      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">

          {/* Home */}
          <Link className="navbar-brand fw-bold me-lg-0" href="#">
            Home
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto gap-lg-2">

              {menuItems.map((item, index) => {

                if (item.dropdown) {
                  return (
                    <li key={index} className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        {item.title}
                      </a>

                      <ul className="dropdown-menu">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a className="dropdown-item" href="#">
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href="#">
                      {item.title}
                    </a>
                  </li>
                );

              })}

            </ul>
          </div>

        </div>
      </nav>

    </header>
  );
}