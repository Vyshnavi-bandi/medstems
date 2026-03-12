export default function AppointmentForm() {

  const formFields = [
    {
      type: "text",
      placeholder: "Full Name",
    },
    {
      type: "email",
      placeholder: "Email",
    },
    {
      type: "text",
      placeholder: "Phone Number",
    },
    {
      type: "text",
      placeholder: "Department",
    },
    {
      type: "text",
      placeholder: "Additional Information",
    },
    {
      type: "datetime-local",
      placeholder: "",
    },
  ];

  return (
    <section className="appointment-section py-5">
      <div className="container">

        <form className="mx-lg-5">

          <div className="row g-4">

            {formFields.map((field, index) => (
              <div key={index} className="col-md-6">
                <input
                  type={field.type}
                  className="form-control appointment-input"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

          </div>

          {/* Button */}
          <div className="text-center mt-5">
            <button type="submit" className="confirm-btn fw-semibold py-2 px-5">
              Confirm
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}