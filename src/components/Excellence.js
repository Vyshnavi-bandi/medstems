export default function Excellence() {
  const items = [
    "Urology",
    "Orthopedics",
    "Neurology",
    "Cardiology",
    "Dentistry",
    "Dermatology"
  ];

  return (
    <section className="py-5 bg-info text-white">
      <div className="container">

        <h3 className="text-center mb-4">Center of Excellence</h3>

        <div className="row text-center">

          {items.map((item, index) => (
            <div className="col-md-2" key={index}>
              <div className="p-3 border rounded">
                {item}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}