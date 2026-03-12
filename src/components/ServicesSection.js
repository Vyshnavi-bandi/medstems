import Image from "next/image";

export default function ServicesSection() {

  const services = [
    {
      title: "Customer Support",
      img: "/assets/service-1.png"
    },
    {
      title: "Chamber Services",
      img: "/assets/service-2.png"
    },
    {
      title: "Online Specialist",
      img: "/assets/service-3.png"
    },
    {
      title: "Privacy and Security",
      img: "/assets/service-4.png"
    }
  ];

  return (
    <section className="services-section py-5">

      <div className="container">

        {/* Top Text */}
        <div className="row mb-5">

          <div className="col-md-6">
            <h3>Your health requirements are our first focus.</h3>
          </div>

          <div className="col-md-6">
            <p>
              Our team of skilled medical professionals ensures
              that you get the care you need and deserve.
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="row">

          {services.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="service-card text-center">

                <Image
                  src={item.img}
                  width={80}
                  height={80}
                  alt={item.title}
                  className=""
                />

                <h6 className="mt-3">{item.title}</h6>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}