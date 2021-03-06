import React from "react";

export default function ServicesComponent() {
  return (
    <>
      <section id="services">
        <div className="container-fluid g-0">
          <div className="g-0 py-5 my-5 text-center">
            <div className="col-md-12">
              {" "}
              <h1 className="fw-bold blue-title mb-title">
                Supported services
              </h1>
              {/* <svg
                className="bd-placeholder-img"
                width="auto"
                height="450"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#55595c" />
              </svg> */}
              <img
                className="img-fluid services-desktop"
                src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/09-cortado.jpg"
                // width="auto"
                // height="860"
              />
              <img
                className="img-fluid services-mobile"
                src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/09-mobile-cortado.jpg"
                // width="auto"
                // height="860"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
