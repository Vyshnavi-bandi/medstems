export default function CTASection() {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-lg-8 text-white">

            <h3 className="fw-bold mb-2">
              Ready to get started ?
            </h3>

            <p className="mb-0">
              Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
            </p>

          </div>

          {/* RIGHT BUTTON */}
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">

            <button className="cta-btn fw-semibold py-2 px-4">
              Create Appointment Now!
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}