import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-md-4 my-3 d-flex flex-column justify-content-between banner-content">
            <h1 className="fw-bold mb-4">
              Your Health <br /> Comes First.
            </h1>

            <p>
              With MEDSTEMS INTERNATIONAL services you will receive the best
              medical treatment in your home. Our team of skilled medical
              professionals ensures you get the care you need and deserve.
            </p>

            <div>
              <button className="btn btn-info text-white mt-3 fw-semibold">
                Book Appointment
              </button>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-md-4 my-3 text-center position-relative">
            {/* Doctor Image */}
            <Image
              src="/assets/banner.png"
              className="w-100"
              width={300}
              height={400}
              alt="doctor"
            />

            {/* Patient Card */}
            <div className="patient-card">
              {/* Avatar group */}
              <div className="avatar-group d-flex align-items-center justify-content-center">
                <Image
                  src="/assets/images-stack.png"
                  width={400}
                  height={40}
                  alt="patient"
                  className="avatar w-100"
                />
              </div>

              <h6 className="mt-3">120+ patients</h6>

              <div className="rating d-flex align-items-center justify-content-center">
                <span className="star">★</span>
                <small>5.0 (450k reviews)</small>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-4 my-3 text-center d-flex flex-column justify-content-between">
            {/* Take a Tour Image Placeholder */}
            <div className="tour-circle mb-3">
              <Image
                src="/assets/Arc.png"
                width={150}
                height={150}
                alt="tour"
              />
            </div>
            <div className="tour-text mx-5 pt-md-5">
              <p className="mt-3">“Redefining How the World Accesses Care”</p>

              <p>"Through trusted global healthcare partnerships"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
