import Image from "next/image";

export default function CenterExcellence() {

  const services = [
   { title: "Neurology", image: "/assets/neurology.png" },
    { title: "Cardiology", image: "/assets/cardiology.png" },
    { title: "Surgery", image: "/assets/surgery.png" },
    { title: "Gastroenterlogy", image: "/assets/gastroenteology.png" },
    { title: "Dentist", image: "/assets/dentist.png" },
    { title: "Opthalmology", image: "/assets/opthalmology.png" },
    { title: "Pediatry", image: "/assets/pediatry.png" },
    { title: "Orthopaedics", image: "/assets/orthopedics.png" },
  ];

  return (
    <section className="excellence-section py-5">

      <div className="container">

        <h3 className="text-white mb-5">Center of Excellence</h3>

        <div className="row">

          {services.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="excellence-card fw-semibold d-flex align-items-center">

                <Image className="icon" alt={item.title} src={item.image} width={50} height={50} />

                <span>{item.title}</span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
