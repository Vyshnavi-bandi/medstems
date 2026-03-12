import Image from "next/image";

export default function CorePrinciples() {

  const principles = [
    {
        image:"/assets/principle-icon-1.png",
      title: "Informed Care Decisions",
      desc: "We enable patients to make confident well-informed choices through clarity and transparency."
    },
    {
        image:"/assets/principle-icon-2.png",
      title: "Empathy-Driven Care",
      desc: "Healthcare guided by compassion, respect and dignity."
    },
    {
        image:"/assets/principle-icon-3.png",
      title: "Trust & Transparency",
      desc: "We operate with integrity and accountability in every interaction."
    },
    {
        image:"/assets/principle-icon-1.png",
      title: "Transparency",
      desc: "Open communication helps build long-term trust with patients."
    }
  ];

  return (
    <section className="principles-section py-5">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-md-6 image-wrapper">

            <Image
              src="/assets/principle-banner.png"
              width={600}
              height={500}
              alt="surgery"
              className="principle-banner w-100 h-100"
            />

          </div>


          {/* RIGHT CONTENT */}
          <div className="col-md-6 px-5 my-5">

            <h3 className="mb-4 fw-semibold">Our Core Principles</h3>

            {principles.map((item, index) => (

              <div className="principle-item mb-4 d-flex align-items-start" key={index}>

                <div className="principle-icon rounded-circle d-flex align-items-center justify-content-center">
                  <Image src={item.image} width={50} height={50} alt={item.title} />
                </div>

                <div>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
